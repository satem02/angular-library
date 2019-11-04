import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map, tap } from "rxjs/operators";
import { EventInfo } from "../models";
import { ApiService } from "../services";

@Injectable()
export class StateService {
  private readonly baseURL = "";
  private readonly eventsInfoUriBase = this.baseURL + "events";

  constructor(private apiService: ApiService) {}

  loadEvents(): Observable<EventInfo[]> {
    return this.apiService
      .get(`${this.eventsInfoUriBase}`)
      .pipe(map((response: any) => response));
  }
}
