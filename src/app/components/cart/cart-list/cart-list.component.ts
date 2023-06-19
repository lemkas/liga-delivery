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
  cartItems: ICartItem[] = this.cartService.cartItems;
  ngOnInit(): void {
    console.log(this.cartItems);
  }
}
