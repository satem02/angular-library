import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateReducer } from './reducer';

const getState = createFeatureSelector<StateReducer>('StateReducer');

export const getEvents = createSelector(getState, (state: StateReducer) => state.events);

export const stateQuery = {
    getEvents: getEvents
}
