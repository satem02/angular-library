import { Component, OnInit, Input } from "@angular/core";
import { MatStepper } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SatemUIFacade } from "projects/satem-ui/src/lib/+state";
import { MoneyTransferInfo } from 'projects/satem-ui/src/lib/models';

@Component({
  selector: "satem-ui-money-detail",
  templateUrl: "./money-detail.component.html",
  styleUrls: ["./money-detail.component.scss"]
})
export class MoneyDetailComponent implements OnInit {
  @Input() myStepper: MatStepper;
  moneyDetailFormGroup: FormGroup;
  model: MoneyTransferInfo = new MoneyTransferInfo();
  sender$ = this.stateService.users$;
  receiver$ = this.stateService.users$;
  currencyTypes$ = this.stateService.currencies$;

  constructor(
    private stateService: SatemUIFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.readDetailStepData();
  }

  createForm() {
    this.moneyDetailFormGroup = this.formBuilder.group({
      email: [],
      name: [],
      receiverUser: [],
      senderUser: [],
      amount: [],
      currencyType: []
    });
  }

  readDetailStepData() {
    this.stateService.moneyTransferInformation$.subscribe(res => {
      this.model = res;
    });
  }

  nextButtonClicked() {
    this.myStepper.selected.completed = true;
    this.myStepper.next();
  }

  previousButtonClicked() {
    this.myStepper.previous();
  }
}
