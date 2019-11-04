import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyApproveComponent } from './money-approve.component';

describe('MoneyApproveComponent', () => {
  let component: MoneyApproveComponent;
  let fixture: ComponentFixture<MoneyApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
