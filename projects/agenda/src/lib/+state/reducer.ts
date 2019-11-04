import { Action, createReducer, on } from "@ngrx/store";
import {
  loadEventsLoaded
} from "./action";
import { EventInfo } from '../models';

export interface StateReducer {
  events: EventInfo[];
}

export const initialState: StateReducer = {
  events: []
};

export const reducer = createReducer(
  initialState,
  on(loadEventsLoaded, (state, payload) => ({
    ...state,
    events: payload.events
  }))
);

export function stateReducer(
  state: StateReducer | undefined,
  action: Action
) {
  return reducer(state, action);
}
