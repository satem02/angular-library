import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map, tap } from "rxjs/operators";
import { ApiService, GenericResponseType } from "../services";
import {
  MoneyTransferRequest,
  MoneyTransferInfo,
  UserInfo,
  ChoiceInfo
} from "../models";

@Injectable()
export class SatemUIService {
  private readonly baseURL = "";
  private readonly usersInfoUriBase = this.baseURL + "users";
  private readonly currencyUriBase = this.baseURL + "currencies";
  private readonly moneyRequestUriBase = this.baseURL + "RequestMoney";

  constructor(private apiService: ApiService) {}

  loadUsers(): Observable<UserInfo[]> {
    return this.apiService
      .get(`${this.usersInfoUriBase}`)
      .pipe(map((response: any) => response));
  }

  loadCurrencies(): Observable<ChoiceInfo[]> {
    return this.apiService
      .get(`${this.currencyUriBase}`)
      .pipe(map((response: any) => response));
  }

  loadMoneyTransferRequest(
    input: MoneyTransferRequest
  ): Observable<MoneyTransferInfo[]> {
    return this.apiService
      .post(`${this.moneyRequestUriBase}/getMoneyRequest`, input)
      .pipe(map((response: GenericResponseType<any>) => response.dataOutput));
  }
}
