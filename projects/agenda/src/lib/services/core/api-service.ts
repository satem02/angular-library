import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  apiURL: string;

  constructor(public http: HttpClient, @Inject('environment.apiURL') apiURL: string) {
    this.apiURL = apiURL;
  }

  get headers(): HttpHeaders {

    let headers = new HttpHeaders();
    headers = headers.set('Accept', '*/*');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, HEAD');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return headers;
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiURL}${url}`, { headers: this.headers, params });
  }

  post(url: string, data: Object = {}): Observable<any> {
    return this.http.post(`${this.apiURL}${url}`, JSON.stringify(data), { headers: this.headers });
  }

  put(url: string, data: Object = {}): Observable<any> {
    return this.http.put(`${this.apiURL}${url}`, JSON.stringify(data), { headers: this.headers });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.apiURL}${url}`, { headers: this.headers });
  }
}
