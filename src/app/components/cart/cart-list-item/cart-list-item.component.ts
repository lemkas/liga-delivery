import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';

@Component({
  selector: 'cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
})
export class CartListItemComponent implements OnInit {
  @Input() cartItem!: ICartItem;
  @Output() deleteRecord = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteCartItem(id: string): void {
    this.deleteRecord.emit(id);
  }
}
