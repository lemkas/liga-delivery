import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductCardPageComponent } from './pages/product-card-page/product-card-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { MainComponent } from './components/main/main/main.component';
import { ProductListComponent } from './components/main/product-list/product-list.component';
import { ProductListItemComponent } from './components/main/product-list-item/product-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterRadioControlComponent } from './ui/controls/filter-radio-control/filter-radio-control.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductComponent } from './components/product/product.component';
import { CounterControlComponent } from './ui/controls/counter-control/counter-control.component';
import { SizeRadioControlComponent } from './ui/controls/size-radio-control/size-radio-control.component';
import { FavouriteButtonComponent } from './ui/buttons/favourite-button/favourite-button.component';
import { BackButtonComponent } from './ui/buttons/back-button/back-button.component';
import { FavouritesListComponent } from './components/favourites/favourites-list/favourites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FavoritesPageComponent,
    ProductCardPageComponent,
    FilterComponent,
    MainComponent,
    ProductListComponent,
    ProductListItemComponent,
    FilterRadioControlComponent,
    FilterPipe,
    NavbarComponent,
    ProductComponent,
    CounterControlComponent,
    SizeRadioControlComponent,
    FavouriteButtonComponent,
    BackButtonComponent,
    FavouritesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
