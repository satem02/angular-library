import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { MoneyTransferInfo, UserInfo, ChoiceInfo } from "../models";
import { SatemUIState } from "./satem-ui.reducer";
import { satemUIStateQuery } from "./satem-ui.selector";
import * as rootActions from "./satem-ui.action";

@Injectable({
  providedIn: "root"
})
export class SatemUIFacade {
  users$: Observable<UserInfo[]>;
  currencies$: Observable<ChoiceInfo[]>;
  moneyTransferInformation$: Observable<MoneyTransferInfo>;

  constructor(private store: Store<SatemUIState>) {
    this.users$ = store.pipe(select(satemUIStateQuery.getUsers));
    this.currencies$ = store.pipe(select(satemUIStateQuery.getCurrencies));
    this.moneyTransferInformation$ = store.pipe(
      select(satemUIStateQuery.setMoneyTransferInfo)
    );
  }

  loadUsers() {
    this.store.dispatch(rootActions.loadUsers({}));
  }

  loadCurrencies() {
    this.store.dispatch(rootActions.loadCurrencies({}));
  }

  setMoneyTransferInformation(moneyTransferInformation: MoneyTransferInfo) {
    this.store.dispatch(
      rootActions.setMoneyTransferInformation({ moneyTransferInformation })
    );
  }
}
