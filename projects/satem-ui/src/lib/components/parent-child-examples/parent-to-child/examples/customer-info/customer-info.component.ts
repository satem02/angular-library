import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ChildBaseComponent } from "../../base/child-base-component";
import { UserInfo } from "../../models";

@Component({
  selector: "satem-ui-customer-info",
  templateUrl: "./customer-info.component.html",
  styleUrls: ["./customer-info.component.scss"]
})
export class CustomerInfoComponent extends ChildBaseComponent
  implements OnInit {
  model: UserInfo = new UserInfo();

  constructor(
    private cdRef: ChangeDetectorRef) {
    super();
  }
  
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addGroupToControl(this.model);
  }
}
