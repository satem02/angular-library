import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatemCoreComponent } from './satem-core.component';

describe('SatemCoreComponent', () => {
  let component: SatemCoreComponent;
  let fixture: ComponentFixture<SatemCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatemCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatemCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
