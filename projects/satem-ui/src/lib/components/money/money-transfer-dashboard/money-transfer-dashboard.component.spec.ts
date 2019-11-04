import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferDashboardComponent } from './money-transfer-dashboard.component';

describe('MoneyTransferDashboardComponent', () => {
  let component: MoneyTransferDashboardComponent;
  let fixture: ComponentFixture<MoneyTransferDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyTransferDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransferDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
