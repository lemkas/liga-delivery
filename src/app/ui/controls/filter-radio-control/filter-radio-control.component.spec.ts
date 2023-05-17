import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRadioControlComponent } from './filter-radio-control.component';

describe('FilterRadioControlComponent', () => {
  let component: FilterRadioControlComponent;
  let fixture: ComponentFixture<FilterRadioControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRadioControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
