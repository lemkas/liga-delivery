import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: ICartItem[] = [];
  ngOnInit(): void {
    this.getCartItems();
    console.log(this.cartItems);
  }

  private getCartItems(): void {
    this.cartService.getCartItems().subscribe((item: ICartItem) => {
      this.cartItems.push(item);
    });
  }

  deleteCartItem(id: string): void {
    // this.cartService.deleteCartItem(id);
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }
}
