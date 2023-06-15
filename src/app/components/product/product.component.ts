import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MealService } from 'src/app/services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { IMeal } from 'src/app/interfaces/meal';
import { Subscription } from 'rxjs';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  meal!: IMeal[];
  id!: string | null;
  prevUrl!: string;
  subscribtion!: Subscription;
  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private favourites: FavouritesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMeal();
  }

  private getMeal(): void {
    this.subscribtion = this.mealService.getOne(this.id).subscribe((meal) => {
      this.meal = meal;
    });
  }

  backHome(): void {
    this.location.back();
  }

  onClickFavourite(isClicked: boolean): void {
    console.log(this.favourites.setFavourite(this.id));
  }

  checkFavourite(id: string): boolean {
    return this.favourites.isFavourite(id);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
