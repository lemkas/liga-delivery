import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'size-radio-control',
  templateUrl: './size-radio-control.component.html',
  styleUrls: ['./size-radio-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SizeRadioControlComponent),
      multi: true,
    },
  ],
})
export class SizeRadioControlComponent implements OnInit {
  @Input() size!: string[];
  sizeControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
