import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MealService } from 'src/app/services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { IMeal } from 'src/app/interfaces/meal';
import { Subscription } from 'rxjs';
import { FavouritesService } from 'src/app/services/favourites.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  meal!: IMeal[];
  isInCart!: boolean;
  id!: string | null;
  cartItemId!: string;
  prevUrl!: string;
  subscribtion!: Subscription;
  mealForm!: FormGroup;
  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private favourites: FavouritesService,
    private location: Location,
    private fb: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getMeal();
    this.initForm();
    this.CheckInCart();
  }

  private getId(): string {
    return (this.id = this.route.snapshot.paramMap.get('id')!);
  }

  private getMeal(): void {
    const id = this.getId();
    this.subscribtion = this.mealService.getOne(id).subscribe((meal) => {
      this.meal = meal;
    });
  }

  private initForm(): void {
    this.mealForm = this.fb.nonNullable.group({
      sizeControl: 'm',
      counterControl: 1,
    });
  }

  submitForm(): void {
    this.cartItemId = UUID.UUID();
    let mealPrice =
      Number(this.meal[0].price) * this.mealForm.value.counterControl;
    const cartItem: ICartItem = {
      id: this.cartItemId,
      mealId: this.getId(),
      mealPrice,
      title: this.meal[0].title,
      size: this.mealForm.value.sizeControl,
      count: this.mealForm.value.counterControl,
    };

    console.log(this.cartService.addToCart(cartItem));
    // this.CheckInCart();
    console.log(cartItem);
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

  private CheckInCart(): void {
    this.cartService.sub$.subscribe((items: ICartItem[]) => {
      this.isInCart = !!items.find((item) => item.id === this.cartItemId);
    });
  }

  removeFromCart(): void {
    this.cartService.deleteCartItem(this.cartItemId);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
