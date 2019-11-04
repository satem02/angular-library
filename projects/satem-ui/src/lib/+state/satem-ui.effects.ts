import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";
import { catchError, concatMap, map } from "rxjs/operators";
import * as stateActions from './satem-ui.action';
import { SatemUIService } from './satem-ui.service';

@Injectable()
export class SatemUIEffects {

    loadUsers = createEffect(() =>
        this.actions$.pipe(
            ofType(stateActions.loadUsers),
            concatMap(action =>
                this.satemUiService
                    .loadUsers()
                    .pipe(
                        map((results) => stateActions.loadUsersLoaded({ users: results })),
                        catchError((error: Error) => of(stateActions.loadUsersLoadFail({ error: error })))
                    )
            )
        )
    );

    
    loadCurrencies = createEffect(() =>
        this.actions$.pipe(
            ofType(stateActions.loadCurrencies),
            concatMap(action =>
                this.satemUiService
                    .loadCurrencies()
                    .pipe(
                        map((results) => stateActions.loadCurrenciesLoaded({ currencyList: results })),
                        catchError((error: Error) => of(stateActions.loadCurrenciesLoadFail({ error: error })))
                    )
            )
        )
    );




    constructor(private actions$: Actions,
        private store: Store<any>,
        private satemUiService: SatemUIService) {
    }

}
