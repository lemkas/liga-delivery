import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMeal } from 'src/app/interfaces/meal';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input() meal!: IMeal;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openMealPage(): void {
    this.router.navigate([`/${this.meal.id}`]);
  }
}
