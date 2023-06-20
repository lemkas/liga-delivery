import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/cart-item';
import { MEALSIZE } from '../interfaces/meal';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: ICartItem[] = [
    {
      id: '432798',
      mealId: '1',
      title: 'Лапшичный Гад',
      mealPrice: 600,
      size: MEALSIZE.M,
      count: 1,
    },
    {
      id: '432790',
      mealId: '2',
      title: 'Бургер Манинькин Сынок',
      mealPrice: 400,
      size: MEALSIZE.S,
      count: 2,
    },
    {
      id: '432799',
      mealId: '5',
      title: 'Бургер Супер Олег',
      mealPrice: 590,
      size: MEALSIZE.L,
      count: 2,
    },
  ];
  constructor() {}

  addToCart(cartItem: ICartItem): string {
    this.cartItems.push(cartItem);
    return 'Блюдо добавлено в корзину';
  }

  getCartItems(): Observable<ICartItem> {
    return from(this.cartItems);
  }

  // deleteCartItem(cartItemId: string) {
  //   this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
  //   console.log(this.cartItems);
  // }
}
