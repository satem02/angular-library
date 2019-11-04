import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { StateReducer } from "./reducer";
import { stateQuery } from "./selector";
import * as rootActions from "./action";
import { EventInfo } from '../models';

@Injectable({
  providedIn: "root"
})
export class StateFacade {
  events$: Observable<EventInfo[]>;

  constructor(private store: Store<StateReducer>) {
    this.events$ = store.pipe(select(stateQuery.getEvents));
  }

  loadEvents() {
    this.store.dispatch(rootActions.loadEvents({}));
  }
}
