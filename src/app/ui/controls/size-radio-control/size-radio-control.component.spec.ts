import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeRadioControlComponent } from './size-radio-control.component';

describe('SizeRadioControlComponent', () => {
  let component: SizeRadioControlComponent;
  let fixture: ComponentFixture<SizeRadioControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeRadioControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
