import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: ICartItem[] = [];
  total: number = 0;
  totalItem: number = 0;
  tax: number = this.cartService.tax;
  deliveryCharge: number = this.cartService.deliveryCharge;
  private sub$!: Subscription;
  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems(): void {
    this.sub$ = this.cartService.sub$.subscribe((items: ICartItem[]) => {
      this.cartItems = items;
      this.getTotalItem(items);
    });
  }

  deleteCartItem(id: string): void {
    this.cartService.deleteCartItem(id);
  }

  private getTotalItem(items: ICartItem[]): void {
    let total: number = 0;
    items.forEach((item) => (total += item.mealPrice));
    this.totalItem = total;
    this.total = total + this.tax + this.deliveryCharge;
    total = 0;
  }
}
