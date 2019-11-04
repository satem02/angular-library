import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "satem-ui-child-base"
})
export class ChildBaseComponent implements OnInit {
    
  @Input() parentFormGroup: FormGroup;
  @Input() childPropertyName: string;
  private childFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {}

  public addGroupToParent(form: FormGroup) {
    this.childFormGroup = form;
    this.parentFormGroup.addControl(
      this.childPropertyName,
      this.childFormGroup
    );
  }
}
