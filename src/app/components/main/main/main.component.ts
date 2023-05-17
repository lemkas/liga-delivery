import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFilter } from 'src/app/interfaces/filter';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filter!: IFilter;
  constructor() {}

  ngOnInit(): void {}

  getFilter(filter: IFilter) {
    this.filter = filter;
    console.log(filter);
  }
}
