import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SatemUIFacade } from '../../../+state';
import { MoneyRequestComponent, MoneyDetailComponent, MoneyApproveComponent } from '../steps';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'satem-ui-money-transfer-dashboard',
  templateUrl: './money-transfer-dashboard.component.html',
  styleUrls: ['./money-transfer-dashboard.component.scss'], providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class MoneyTransferDashboardComponent implements OnInit {
  ngOnInit() {
    this.loadState();
  }

  @ViewChild(MoneyRequestComponent, { static: false }) moneyRequestComponent: MoneyRequestComponent;
  @ViewChild(MoneyDetailComponent, { static: false }) moneyDetailComponent: MoneyDetailComponent;
  @ViewChild(MoneyApproveComponent, { static: false }) moneyApproveComponent: MoneyApproveComponent;

  constructor(private ref: ChangeDetectorRef, private service: SatemUIFacade) { }

  ngAfterViewInit() {
    this.ref.detectChanges();
  }

  loadState(){
    this.service.loadUsers();
    this.service.loadCurrencies();
  }

  onStepChange(event:any){

  }

  get stepControlMoneyRequest() {
    return this.moneyRequestComponent ? this.moneyRequestComponent.moneyRequestFormGroup : null;
  }
  get stepControlMoneyDetail() {
    return this.moneyDetailComponent ? this.moneyDetailComponent.moneyDetailFormGroup : null;
  }
  get stepControlMoneyApprove() {
    return this.moneyApproveComponent ? this.moneyApproveComponent.moneyApproveFormGroup : null;
  } 
  
}
