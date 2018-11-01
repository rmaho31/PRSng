import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseRequest } from '../classes/purchaserequest'
import { JsonResponse } from '../util/json-response.class'

const url: string = 'http://localhost:8080/PurchaseRequests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  login(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", purchaserequest) as Observable<JsonResponse>;
  }
  
  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }

  add(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url+"Add", purchaserequest) as Observable<JsonResponse>;
  } 
  
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/"+id) as Observable<JsonResponse>;
  }
  
  remove(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url+"Remove", purchaserequest) as Observable<JsonResponse>;
  }
  
  change(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
		return this.http.post(url+"Change", purchaserequest) as Observable<JsonResponse>;
  }
  
  constructor(private http: HttpClient) { }

}
