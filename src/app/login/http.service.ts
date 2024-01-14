import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private httpClient: HttpClient) { }

  postData(url: string, data: any): Observable<any> {

    return this.httpClient.post(url, data);
  }

  getData(url: string): Observable<any> {

    return this.httpClient.get(url);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.httpClient.post('/api/login', body);
  }
}
