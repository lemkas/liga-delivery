import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: ICartItem[] = [];
  public tax: number = 0.25;
  public deliveryCharge: number = 2.5;
  sub$ = new BehaviorSubject<ICartItem[]>([]);
  isInCartSub$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  addToCart(cartItem: ICartItem): string {
    let isInCart = !!this.cartItems.find(
      (item) => item.mealId === cartItem.mealId
    );
    if (!isInCart) {
      this.cartItems.push(cartItem);
      this.sub$.next(this.cartItems);
      return 'Блюдо добавлено в корзину';
    } else {
      return 'Уже в корзине';
    }
  }

  changeCount(mealId: string, count: number, mealPrice: number): void {
    const index: number = this.cartItems.findIndex(
      (item) => item.mealId === mealId
    );
    this.cartItems[index].count = count;
    this.cartItems[index].mealPrice = count * mealPrice;
    this.sub$.next(this.cartItems);
  }

  getCartItems(): ICartItem[] {
    return this.cartItems;
  }

  deleteCartItem(cartItemId: string) {
    this.cartItems = this.cartItems.filter(
      (item) => item.mealId !== cartItemId
    );
    this.sub$.next(this.cartItems);
    console.log(this.cartItems);
  }

  private deleteAllCartItems(): void {
    this.cartItems = [];
    this.sub$.next(this.cartItems);
  }

  createOrder(): void {
    this.deleteAllCartItems();
    console.log('Заказ успешно оформлен');
  }

  CheckInCart(cartItemId: string): BehaviorSubject<boolean> {
    let isInCart!: boolean;
    this.sub$.subscribe((items) => {
      isInCart = !!items.find((item) => item.id === cartItemId);
      this.isInCartSub$.next(isInCart);
    });

    return this.isInCartSub$;
  }
}
