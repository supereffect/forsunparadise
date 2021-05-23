import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerModel} from './customer.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  public GetUsers():Observable<Object>{
    return this.http.get("https://localhost:5001/customer/1.json");
  

  }
}
