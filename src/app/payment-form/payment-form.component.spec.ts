import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputscreenPaymentComponent } from './payment-form.component';

describe('InputscreenPaymentComponent', () => {
  let component: InputscreenPaymentComponent;
  let fixture: ComponentFixture<InputscreenPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputscreenPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputscreenPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
