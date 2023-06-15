import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {}
  private favoutites: string[] = [];

  setFavourite(id: string | null): string {
    let indexOfMealId = this.favoutites.indexOf(id!);
    if (indexOfMealId !== -1) {
      this.favoutites.splice(indexOfMealId, 1);
      return `Блюдо с ID: ${id} убрано из избранных`;
    } else {
      this.favoutites.push(id!);
      return `Блюдо с ID: ${id} добавлено в избранные`;
    }
  }

  isFavourite(id: string): boolean {
    return !!this.favoutites.find((val) => val === id);
  }

  // private createFavourite(mealId: string, userId: string): void {
  //   const body = {
  //     mealId,
  //     userId,
  //   };
  //   this.http.post('U', body);
  // }
}
