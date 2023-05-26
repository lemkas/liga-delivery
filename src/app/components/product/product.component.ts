import { Component, OnDestroy, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMeal } from 'src/app/interfaces/meal';
import { Subscription } from 'rxjs';

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
    private router: Router
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
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
