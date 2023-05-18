import { Component, Input, OnInit } from '@angular/core';
import { IMeal } from 'src/app/interfaces/meal';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input() meal!: IMeal;
  constructor() {}

  ngOnInit(): void {}
}
