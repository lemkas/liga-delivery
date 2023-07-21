import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService, private dialog: MatDialog) {}
  cartItems: ICartItem[] = [];
  private sub$!: Subscription;
  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems(): void {
    this.sub$ = this.cartService.sub$.subscribe((items) => {
      this.cartItems = items;
    });
    console.log(this.cartItems);
  }

  deleteCartItem(id: string): void {
    this.cartService.deleteCartItem(id);
  }
}
