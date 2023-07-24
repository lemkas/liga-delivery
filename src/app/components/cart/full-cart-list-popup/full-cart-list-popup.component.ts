import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-full-cart-list-popup',
  templateUrl: './full-cart-list-popup.component.html',
  styleUrls: ['./full-cart-list-popup.component.scss'],
})
export class FullCartListPopupComponent implements OnInit {
  constructor(private cartService: CartService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  confirm(): void {
    this.cartService.createOrder();
    this.dialog.closeAll();
  }

  cancel(): void {
    this.dialog.closeAll();
  }
}
