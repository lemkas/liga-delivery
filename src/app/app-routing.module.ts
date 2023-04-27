import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CartPageRoutingModule } from './pages/cart-page/cart-page-routing.module';
import { ProfilePageRoutingModule } from './pages/profile-page/profile-page-routing.module';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CartPageRoutingModule,
    ProfilePageRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
