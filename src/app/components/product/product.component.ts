import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MealService } from 'src/app/services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { IMeal } from 'src/app/interfaces/meal';
import { Subscription } from 'rxjs';
import { FavouritesService } from 'src/app/services/favourites.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  mealForm!: FormGroup;
  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private favourites: FavouritesService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMeal();
    this.initForm();
  }

  private getMeal(): void {
    this.subscribtion = this.mealService.getOne(this.id).subscribe((meal) => {
      this.meal = meal;
    });
  }

  private initForm(): void {
    this.mealForm = this.fb.nonNullable.group({
      sizeControl: 'm',
    });
  }

  submitForm(): void {
    console.log(this.mealForm.value);
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
