import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
