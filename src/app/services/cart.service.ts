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
}
