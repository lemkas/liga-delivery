import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.scss'],
})
export class FavouriteButtonComponent implements OnInit {
  isClicked: boolean = false;
  @Output() onClickFavourite = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickHandler(): void {
    this.isClicked = !this.isClicked;
    this.onClickFavourite.emit(this.isClicked);
  }
}
