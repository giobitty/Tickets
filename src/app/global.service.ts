import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  loggedUser!: any;



  constructor(private httpClient: HttpClient) { }
 
  getData(url: string){
    return this.httpClient.get(url)

  }

  postData(url: string, data: any): Observable<any> {

    return this.httpClient.post(url, data);
  }



}
