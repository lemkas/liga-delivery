import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {}

  setFavourite(id: string | null, isFavourite: boolean) {
    return isFavourite
      ? `Блюдо с ID: ${id} добавлено в избранные`
      : `Блюдо с ID: ${id} убрано из избранных`;
  }

  private createFavourite(mealId: string, userId: string): void {
    const body = {
      mealId,
      userId,
    };
    this.http.post('U', body);
  }
}
