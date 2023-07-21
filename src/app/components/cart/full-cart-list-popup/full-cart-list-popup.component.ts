import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-full-cart-list-popup',
  templateUrl: './full-cart-list-popup.component.html',
  styleUrls: ['./full-cart-list-popup.component.scss'],
})
export class FullCartListPopupComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: ICartItem[] = [];
  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  deleteCartItem(id: string): void {
    this.cartService.deleteCartItem(id);
    this.getData();
  }
}
