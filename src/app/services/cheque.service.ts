import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ICartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ChequeService {
  sub$ = new BehaviorSubject<number>(0);
  constructor(private cartService: CartService) {}

  getTotal(): BehaviorSubject<number> {
    let total: number = 0;
    this.cartService.sub$.subscribe((items) => {
      console.log(items, 'from cheque');
      items.forEach((item) => (total += item.mealPrice));
      console.log(total, 'from cheque');
      this.sub$.next(total);
      total = 0;
    });

    return this.sub$;
  }
}
