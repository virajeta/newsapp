import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {GoogleNewsTemplate} from './GoogleNewsTemplate';




@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {
  getData(url:string, options): Observable<ArrayBuffer>{
     return this.http.get(url, options);
   }
  constructor(private http:HttpClient) { }
}
