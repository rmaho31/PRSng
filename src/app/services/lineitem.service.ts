import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../classes/lineitem'
import { JsonResponse } from '../util/json-response.class'

const url: string = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  login(lineitem: LineItem): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", lineitem) as Observable<JsonResponse>;
  }
  
  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }

  add(lineitem: LineItem): Observable<JsonResponse> {
      return this.http.post(url+"Add", lineitem) as Observable<JsonResponse>;
  } 
  
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/"+id) as Observable<JsonResponse>;
  }
  
  remove(lineitem: LineItem): Observable<JsonResponse> {
      return this.http.post(url+"Remove", lineitem) as Observable<JsonResponse>;
  }
  
  change(lineitem: LineItem): Observable<JsonResponse> {
		return this.http.post(url+"Change", lineitem) as Observable<JsonResponse>;
  }
  
  constructor(private http: HttpClient) { }

}
