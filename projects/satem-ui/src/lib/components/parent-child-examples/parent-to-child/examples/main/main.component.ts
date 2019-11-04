import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MainInfo } from "../main";

@Component({
  selector: "satem-ui-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  mainFormGroup: FormGroup;
  model: MainInfo = new MainInfo();

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
    this.mainFormGroup = this.formBuilder.group({
      projectName: []
    });
  }

  nextButtonClicked() {
    this.model = this.mainFormGroup.value;
    console.log(this.model);
  }
}
