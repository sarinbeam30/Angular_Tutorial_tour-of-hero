import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

describe('PowerBoostCalculatorComponent', () => {
  let component: PowerBoostCalculatorComponent;
  let fixture: ComponentFixture<PowerBoostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerBoostCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerBoostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
