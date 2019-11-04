import { createAction, props } from "@ngrx/store";
import { EventInfo } from '../models';

export const loadEvents = createAction(
  "[SatemUI Events Info] Load Events Info",
  props<{}>()
);
export const loadEventsLoaded = createAction(
  "[SatemUI Events Info] Events Info Loaded",
  props<{ events: EventInfo[] }>()
);
export const loadEventsLoadFail = createAction(
  "[SatemUI Events Info] Events Info Failed",
  props<{ error: Error }>()
);

export const serviceError = createAction(
  "[article] LOAD_SERVICE_ERROR",
  props<{ error: Error }>()
);
