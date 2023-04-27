import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  meals: [] = [];
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.router.data.subscribe((res: any) => {
      this.meals = res.data;
    });
    console.log(this.meals);
  }
}
