import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map, tap } from "rxjs/operators";
import { ApiService } from "./core/api-service";
import { GenericResponseType } from ".";
import { MoneyTransferRequest, MoneyTransferInfo } from "../models";

@Injectable()
export class MoneyTransferService {
  private readonly baseURL = "/MoneyService";
  private readonly moneyRequestUriBase = this.baseURL + "RequestMoney";

  constructor(private apiService: ApiService) {}

  getMoneyRequest(input: MoneyTransferRequest): Observable<MoneyTransferInfo> {
    return this.apiService
      .post(`${this.moneyRequestUriBase}/getMoneyRequest`, input)
      .pipe(map((response: GenericResponseType<any>) => response.dataOutput));
  }
}
