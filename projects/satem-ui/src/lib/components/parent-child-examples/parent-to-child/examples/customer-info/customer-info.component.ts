import { Component, OnInit } from "@angular/core";
import { ChildBaseComponent } from "../../base/child-base-component";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserInfo } from "../../models";

@Component({
  selector: "satem-ui-customer-info",
  templateUrl: "./customer-info.component.html",
  styleUrls: ["./customer-info.component.scss"]
})
export class CustomerInfoComponent extends ChildBaseComponent
  implements OnInit {
  customerFormGroup: FormGroup;
  model: UserInfo = new UserInfo();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerFormGroup = this.formBuilder.group({
      name: [],
      surName: []
    });
    // parent forma ekleme metodu . base classdan geliyor.
    this.addGroupToParent(this.customerFormGroup);
  }
}
