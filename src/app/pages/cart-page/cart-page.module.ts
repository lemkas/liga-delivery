import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CartPageResolver } from './cart-page.resolver';
import { CartListComponent } from 'src/app/components/cart/cart-list/cart-list.component';
import { CartListItemComponent } from 'src/app/components/cart/cart-list-item/cart-list-item.component';
import { CommonModule } from '@angular/common';
import { FullCartListPopupComponent } from 'src/app/components/cart/full-cart-list-popup/full-cart-list-popup.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
  },
];

@NgModule({
  declarations: [
    CartPageComponent,
    CartListComponent,
    CartListItemComponent,
    FullCartListPopupComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [CartPageResolver],
})
export class CartPageModule {}
