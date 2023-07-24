import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterControlComponent),
      multi: true,
    },
  ],
})
export class CounterControlComponent implements OnInit, ControlValueAccessor {
  @Input() result!: number;
  private onChange(value: number): void {}
  counterControl = new FormControl();
  constructor() {}

  increment(): void {
    if (this.result < 9) {
      this.result++;
      this.onChange(this.result);
    }
  }

  decrement(): void {
    if (this.result > 0) {
      this.result--;
      this.onChange(this.result);
    }
  }

  ngOnInit(): void {}

  writeValue(value: number): void {
    this.counterControl.setValue(this.result);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
