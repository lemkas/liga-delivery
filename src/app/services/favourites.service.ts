import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeal } from '../interfaces/meal';
import { MealService } from './meal.service';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient, private mealSearvice: MealService) {}
  private favoutitesId: string[] = [];
  private favouriteMeals!: IMeal[];

  setFavourite(id: string | null): string {
    let indexOfMealId = this.favoutitesId.indexOf(id!);
    if (indexOfMealId !== -1) {
      this.favoutitesId.splice(indexOfMealId, 1);
      return `Блюдо с ID: ${id} убрано из избранных`;
    } else {
      this.favoutitesId.push(id!);
      return `Блюдо с ID: ${id} добавлено в избранные`;
    }
  }

  isFavourite(id: string): boolean {
    return !!this.favoutitesId.find((val) => val === id);
  }

  getFavourites(): Observable<IMeal[]> {
    return this.mealSearvice
      .getAll()
      .pipe(
        map((meals) =>
          meals.filter((meal) => this.favoutitesId.includes(meal.id))
        )
      );
  }

  // private createFavourite(mealId: string, userId: string): void {
  //   const body = {
  //     mealId,
  //     userId,
  //   };
  //   this.http.post('U', body);
  // }
}
