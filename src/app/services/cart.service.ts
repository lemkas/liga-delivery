import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/cart-item';
import { BehaviorSubject, Subscription } from 'rxjs';

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
    this.cartItems.push(cartItem);
    this.sub$.next(this.cartItems);
    return 'Блюдо добавлено в корзину';
  }

  getCartItems(): ICartItem[] {
    // return from(this.cartItems);
    return this.cartItems;
  }

  deleteCartItem(cartItemId: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
    this.sub$.next(this.cartItems);
    console.log(this.cartItems);
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
