import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnMealComponent } from './own-meal.component';

describe('OwnMealComponent', () => {
  let component: OwnMealComponent;
  let fixture: ComponentFixture<OwnMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
