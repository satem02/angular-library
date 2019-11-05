import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "satem-ui-child-base",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBaseComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() childPropertyName: string;
  private childFormGroup: FormGroup;
  constructor() {}

  ngOnInit() {}

  public addGroupToParentForm(form: FormGroup) {
    this.childFormGroup = form;
    this.parentFormGroup.addControl(
      this.childPropertyName,
      this.childFormGroup
    );
  }

  public addGroupToControl(data: Object) {
    this.parentFormGroup.addControl(
      this.childPropertyName,
      new FormControl(data)
    );
  }
}
