import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CartPageComponent }];

@NgModule({
  declarations: [CartPageComponent],
  imports: [RouterModule.forChild(routes)],
})
export class CartPageModule {}
