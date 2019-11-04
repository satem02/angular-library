import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginUserInfo } from "projects/satem-ui/src/lib/models";

@Component({
  selector: "satem-ui-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  userInfoFormGroup: FormGroup;
  userModel: LoginUserInfo = new LoginUserInfo();

  @Output() private onFormGroupChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.onFormGroupChange.emit(this.userInfoFormGroup);
  }

  createForm() {
    this.userInfoFormGroup = this.formBuilder.group({
      userName: [],
      password: []
    });
  }
}