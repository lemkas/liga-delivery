import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCartListPopupComponent } from './full-cart-list-popup.component';

describe('FullCartListPopupComponent', () => {
  let component: FullCartListPopupComponent;
  let fixture: ComponentFixture<FullCartListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCartListPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCartListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
