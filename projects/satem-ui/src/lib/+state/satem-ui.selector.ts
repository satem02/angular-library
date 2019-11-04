import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SatemUIState } from './satem-ui.reducer';

const getSatemUIState = createFeatureSelector<SatemUIState>('satemUIState');

export const getUsers = createSelector(getSatemUIState, (state: SatemUIState) => state.users);
export const getCurrencies = createSelector(getSatemUIState, (state: SatemUIState) => state.currencies);
export const setMoneyTransferInfo = createSelector(getSatemUIState, (state: SatemUIState) => state.moneyTransferInformation);


export const satemUIStateQuery = {
    getUsers: getUsers,
    getCurrencies:getCurrencies,
    setMoneyTransferInfo:setMoneyTransferInfo
}
