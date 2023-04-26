import { Component, OnInit } from '@angular/core';
import { IMeal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  meal: IMeal[] = [];
  people: any[] = [];
  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    //   this.getMeal();
    //   // this.get();
    //   console.log(this.meal);
  }

  // private getMeal(): void {
  //   this.mealService.getAll().subscribe((meal: IMeal[]) => {
  //     this.meal = meal;
  //   });
  // }

  // // private get(): void {
  // //   this.mealService.get().subscribe((people) => {
  // //     this.people = people;
  // //     console.log(people.results[0].name);
  // //   });
  // // }
}
