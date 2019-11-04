import { Component, OnInit, Input } from "@angular/core";
import { MatStepper } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SatemUIFacade } from "projects/satem-ui/src/lib/+state";
import { MoneyTransferInfo } from "projects/satem-ui/src/lib/models";

@Component({
  selector: "satem-ui-money-request",
  templateUrl: "./money-request.component.html",
  styleUrls: ["./money-request.component.scss"]
})
export class MoneyRequestComponent implements OnInit {
  @Input() myStepper: MatStepper;
  moneyRequestFormGroup: FormGroup;
  model: MoneyTransferInfo = new MoneyTransferInfo();
  sender$ = this.stateService.users$;
  receiver$ = this.stateService.users$;
  currencyTypes$ = this.stateService.currencies$;
  childUserInfoFrom: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: SatemUIFacade
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.moneyRequestFormGroup = this.formBuilder.group({
      email: [],
      name: [],
      receiverUser: [],
      senderUser: [],
      amount: [],
      currencyType: [],
      childForms: this.getChildForms() // Normalde bu sekilde formun register olması gerekiyor ancak tam olarak calısmıyor.
    });
  }

  getChildForms() {
    return this.formBuilder.array([this.childUserInfoFrom]);
  }

  public onFormGroupChangeEvent(_event) {
    this.childUserInfoFrom = _event;
  }

  nextButtonClicked() {
    this.stateService.setMoneyTransferInformation(this.model);
    this.myStepper.selected.completed = true;
    this.myStepper.next();
  }
}
//   <pre>{{ moneyRequestFormGroup.value | json }}</pre>