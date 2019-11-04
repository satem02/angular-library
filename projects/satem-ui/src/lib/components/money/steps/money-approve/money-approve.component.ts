import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'satem-ui-money-approve',
  templateUrl: './money-approve.component.html',
  styleUrls: ['./money-approve.component.scss']
})
export class MoneyApproveComponent implements OnInit {
  @Input () myStepper: MatStepper;
  moneyApproveFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  // herhangibi bir stepe geçişte kullanılır. döngüde hangi steplerin durumuun değişikliği setlenir.
  checkWhichStep() {
    this.myStepper.steps.forEach(function(item, index) {
      if (index === 2) {
        item.completed = true;
      }
    });

    // liner zorunlu oldugudan once false yapıp indexi değiştirip sonra aktif yapıyoruz.
    this.myStepper.linear = false;
    this.myStepper.selectedIndex = 3;
    this.myStepper.linear = true;
  }

  nextButtonClicked() {
    this.myStepper.selected.completed = true;
    this.myStepper.next();
  }

  previousButtonClicked() {
    this.myStepper.previous();
  }

}
