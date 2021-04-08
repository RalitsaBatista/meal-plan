import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyMealComponent } from './baby-meal.component';

describe('BabyMealComponent', () => {
  let component: BabyMealComponent;
  let fixture: ComponentFixture<BabyMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
