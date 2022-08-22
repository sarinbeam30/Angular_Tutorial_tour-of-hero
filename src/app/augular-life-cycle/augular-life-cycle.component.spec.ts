import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugularLifeCycleComponent } from './augular-life-cycle.component';

describe('AugularLifeCycleComponent', () => {
  let component: AugularLifeCycleComponent;
  let fixture: ComponentFixture<AugularLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugularLifeCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugularLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
