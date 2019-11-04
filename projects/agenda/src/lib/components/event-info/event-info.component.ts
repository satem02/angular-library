import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
