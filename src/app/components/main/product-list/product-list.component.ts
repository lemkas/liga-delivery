import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFilter } from 'src/app/interfaces/filter';
import { IMeal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() filterOptions!: IFilter;
  meal: IMeal[] = [];
  subscription!: Subscription;
  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.subscription = this.mealService.getAll().subscribe((meals) => {
      this.meal = meals;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
