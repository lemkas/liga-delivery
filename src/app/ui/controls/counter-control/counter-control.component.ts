import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
})
export class CounterControlComponent implements OnInit {
  result: number = 0;
  constructor() {}

  increment(): void {
    if (this.result <= 9) {
      this.result++;
    }
  }

  decrement(): void {
    if (this.result >= 1) {
      this.result--;
    }
  }

  ngOnInit(): void {}
}
