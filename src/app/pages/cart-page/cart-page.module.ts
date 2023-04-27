import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CartPageResolver } from './cart-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    resolve: {
      data: CartPageResolver,
    },
  },
];

@NgModule({
  declarations: [CartPageComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [CartPageResolver],
})
export class CartPageModule {}
