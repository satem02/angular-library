import { Component, OnInit } from "@angular/core";
import { ContactInfo } from "../../models";
import { ChildBaseComponent } from "../../base/child-base-component";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "satem-ui-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"]
})
export class ContactInfoComponent extends ChildBaseComponent implements OnInit {
  
  contactFormGroup: FormGroup;
  model: ContactInfo = new ContactInfo();

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactFormGroup = this.formBuilder.group({
      mail: [],
      phone: []
    });
    // parent forma ekleme metodu . base classdan geliyor.
    this.addGroupToParentForm(this.contactFormGroup);
  }
}
