import { Component, ElementRef, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MEALTYPES } from 'src/app/interfaces/filter';

@Component({
  selector: 'filter-radio-control',
  templateUrl: './filter-radio-control.component.html',
  styleUrls: ['./filter-radio-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterRadioControlComponent),
      multi: true,
    },
  ],
})
export class FilterRadioControlComponent
  implements OnInit, ControlValueAccessor
{
  private onChange(value: string): void {}
  private element!: HTMLElement;
  searchSpec = new FormControl();
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
    this.searchSpec.valueChanges.subscribe((value: MEALTYPES) => {
      this.onChange(value);
    });
  }

  writeValue(value: MEALTYPES): void {
    this.searchSpec.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
