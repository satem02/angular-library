import { Action, createReducer, on } from "@ngrx/store";
import { ChoiceInfo, MoneyTransferInfo, UserInfo } from "../models";
import {
  loadUsersLoaded,
  setMoneyTransferInformation,
  loadCurrenciesLoaded
} from "./satem-ui.action";

export interface SatemUIState {
  users: UserInfo[];
  currencies: ChoiceInfo[];
  moneyTransferInformation: MoneyTransferInfo;
}

export const satemUIStateInitialState: SatemUIState = {
  users: [],
  currencies: [],
  moneyTransferInformation: new MoneyTransferInfo()
};

export const reducer = createReducer(
  satemUIStateInitialState,
  on(loadUsersLoaded, (state, payload) => ({
    ...state,
    users: payload.users
  })),
  on(loadCurrenciesLoaded, (state, payload) => ({
    ...state,
    currencies: payload.currencyList
  })),
  on(setMoneyTransferInformation, (state, payload) => ({
    ...state,
    moneyTransferInformation: payload.moneyTransferInformation
  }))
);

export function satemUIReducer(
  state: SatemUIState | undefined,
  action: Action
) {
  return reducer(state, action);
}
