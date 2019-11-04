import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FlowInfo } from "../models/flow-model";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "satem-ui-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  parentFormGroup: FormGroup;
  model: FlowInfo = new FlowInfo();

  constructor(
    private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  createForm() {
    this.parentFormGroup = this.formBuilder.group({
      name: [],
      surName: []
    });
  }

  nextButtonClicked() {
    this.model = this.parentFormGroup.value;
    console.log(this.model);
  }
}
