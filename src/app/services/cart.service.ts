import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: ICartItem[] = [];
  constructor() {}

  addToCart(cartItem: ICartItem): string {
    this.cartItems.push(cartItem);
    return 'Блюдо добавлено в корзину';
  }

  getCartItems(): ICartItem[] {
    // return from(this.cartItems);
    return this.cartItems;
  }

  deleteCartItem(cartItemId: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
    console.log(this.cartItems);
  }

  isInCart(cartItemId: string): boolean {
    return !!this.cartItems.find((item) => item.id === cartItemId);
  }

  getTotal(): number {
    let total: number = 0;
    this.cartItems.forEach((item) => (total += item.mealPrice));
    return total;
  }
}
