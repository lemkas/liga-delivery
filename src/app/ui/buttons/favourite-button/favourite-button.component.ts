import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.scss'],
})
export class FavouriteButtonComponent implements OnInit {
  isClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  clickHandler(): void {
    this.isClicked = !this.isClicked;
  }
}
