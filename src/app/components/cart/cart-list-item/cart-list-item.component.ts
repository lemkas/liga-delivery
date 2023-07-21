import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
})
export class CartListItemComponent implements OnInit {
  @Input() cartItem!: ICartItem;
  @Output() deleteRecord = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openMealPage(): void {
    this.router.navigate([`/${this.cartItem.mealId}`]);
  }

  deleteCartItem(id: string): void {
    this.deleteRecord.emit(id);
  }
}
