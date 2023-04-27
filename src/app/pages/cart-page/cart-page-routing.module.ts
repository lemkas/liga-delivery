import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { CartPageResolver } from './cart-page.resolver';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-page.module').then((m) => m.CartPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
