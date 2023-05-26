import { Component, OnInit } from '@angular/core';
import { IFilter, MEALTYPES } from 'src/app/interfaces/filter';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filter: IFilter = {
    searchSpec: MEALTYPES.BURGERS,
    searchText: '',
  };
  constructor() {}

  ngOnInit(): void {}

  getFilter(filter: IFilter) {
    this.filter = filter;
  }
}
