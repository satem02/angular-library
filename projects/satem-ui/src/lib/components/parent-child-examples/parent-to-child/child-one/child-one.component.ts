import { Component, OnInit, Input } from "@angular/core";
import { ContactInfo } from "../models";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ChildBaseComponent } from "../base/child-base-component";

@Component({
  selector: "satem-ui-child-one",
  templateUrl: "./child-one.component.html",
  styleUrls: ["./child-one.component.scss"]
})
export class ChildOneComponent extends ChildBaseComponent implements OnInit {
  
  childOneFormGroup: FormGroup;
  model: ContactInfo = new ContactInfo();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.childOneFormGroup = this.formBuilder.group({
      mail: [],
      phone: []
    });
    // parent forma ekleme metodu . base classdan geliyor.
    this.addGroupToParentForm(this.childOneFormGroup);
  }
}
