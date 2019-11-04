import { Component, OnInit } from "@angular/core";
import { StateFacade } from '../../+state';

@Component({
  selector: "lib-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  constructor(private stateService: StateFacade) {}

  events$ = this.stateService.events$;

  ngOnInit() {
    this.stateService.loadEvents();
  }

  btnAddClick(){
    console.log("added");
  }
}
