import { Component, OnInit } from "@angular/core";
import { ChildBaseComponent } from "../../base/child-base-component";
import { AddressInfo } from "../../models";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "satem-ui-address-info",
  templateUrl: "./address-info.component.html",
  styleUrls: ["./address-info.component.scss"]
})
export class AddressInfoComponent extends ChildBaseComponent implements OnInit {
  
  addressFormGroup: FormGroup;
  model: AddressInfo = new AddressInfo();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addressFormGroup = this.formBuilder.group({
      country: [],
      city: []
    });
    // parent forma ekleme metodu . base classdan geliyor.
    this.addGroupToParentForm(this.addressFormGroup);
  }
}
