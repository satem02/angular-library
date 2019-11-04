import { Component, OnInit, Input } from "@angular/core";
import { AddressInfo } from "../models";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ChildBaseComponent } from "../base/child-base-component";

@Component({
  selector: "satem-ui-child-two",
  templateUrl: "./child-two.component.html",
  styleUrls: ["./child-two.component.scss"]
})
export class ChildTwoComponent extends ChildBaseComponent implements OnInit {
  
  childTwoFormGroup: FormGroup;
  model: AddressInfo = new AddressInfo();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.childTwoFormGroup = this.formBuilder.group({
      country: [],
      city: []
    });
    this.addGroupToParent(this.childTwoFormGroup);
  }
}
