import {
  Component,
  ElementRef,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
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
export class SizeRadioControlComponent implements OnInit, ControlValueAccessor {
  @Input() size!: string[];
  private onChange(value: string): void {}
  private element!: HTMLElement;
  sizeControl = new FormControl();
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
    this.sizeControl.valueChanges.subscribe((value: string) => {
      this.onChange(value);
    });
  }

  writeValue(value: string): void {
    this.sizeControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
