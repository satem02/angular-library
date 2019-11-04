import { createAction, props } from "@ngrx/store";
import { MoneyTransferInfo, UserInfo, ChoiceInfo } from "../models";

export const loadUsers = createAction(
  "[SatemUI Users Info] Load Users Info",
  props<{}>()
);
export const loadUsersLoaded = createAction(
  "[SatemUI Users Info] Users Info Loaded",
  props<{ users: UserInfo[] }>()
);
export const loadUsersLoadFail = createAction(
  "[SatemUI Users Info] Users Info Failed",
  props<{ error: Error }>()
);

export const loadCurrencies = createAction(
  "[SatemUI Currencies Info] Load Currencies Info",
  props<{}>()
);
export const loadCurrenciesLoaded = createAction(
  "[SatemUI Currencies Info] Currencies Info Loaded",
  props<{ currencyList: ChoiceInfo[] }>()
);
export const loadCurrenciesLoadFail = createAction(
  "[SatemUI Currencies Info] Currencies Info Failed",
  props<{ error: Error }>()
);

export const setMoneyTransferInformation = createAction(
  "[SatemUI Money Information] Money Information",
  props<{ moneyTransferInformation: MoneyTransferInfo }>()
);

export const serviceError = createAction(
  "[article] LOAD_SERVICE_ERROR",
  props<{ error: Error }>()
);
