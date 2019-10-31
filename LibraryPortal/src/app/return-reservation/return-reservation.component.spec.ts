import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnReservationComponent } from './return-reservation.component';

describe('ReturnReservationComponent', () => {
  let component: ReturnReservationComponent;
  let fixture: ComponentFixture<ReturnReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
