import { Component, OnInit } from '@angular/core';
import { IMeal } from 'src/app/interfaces/meal';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss'],
})
export class FavouritesListComponent implements OnInit {
  meal: IMeal[] = [];
  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.getMeals();
    console.log(this.meal);
  }

  private getMeals(): void {
    this.favouritesService.getFavourites().subscribe((meals: IMeal[]) => {
      this.meal = meals;
    });
  }
}
