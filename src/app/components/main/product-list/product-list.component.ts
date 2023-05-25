import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilter } from 'src/app/interfaces/filter';
import { IMeal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() filterOptions!: IFilter;
  meal: IMeal[] = [];
  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    // this.meal = this.mealService.meals;
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getAll().subscribe((meals) => {
      this.meal = meals;
    });
  }
}
