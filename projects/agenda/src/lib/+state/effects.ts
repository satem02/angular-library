import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";
import { catchError, concatMap, map } from "rxjs/operators";
import * as stateActions from './action';
import { StateService } from './service';

@Injectable()
export class StateEffects {

    loadEvents = createEffect(() =>
        this.actions$.pipe(
            ofType(stateActions.loadEvents),
            concatMap(action =>
                this.stateService
                    .loadEvents()
                    .pipe(
                        map((results) => stateActions.loadEventsLoaded({ events: results })),
                        catchError((error: Error) => of(stateActions.loadEventsLoadFail({ error: error })))
                    )
            )
        )
    );

    

    constructor(private actions$: Actions,
        private store: Store<any>,
        private stateService: StateService) {
    }

}
