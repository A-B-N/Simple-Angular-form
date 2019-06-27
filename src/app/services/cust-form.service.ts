import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Cust } from '../cust.model';
@Injectable()
export class CustFormService {
  private endpointUrl ="http://localhost:3000/custform";  
  constructor(private  httpClient:  HttpClient) { } 
}

  //getCust(): Observable<Cust[]> {
    //return this.httpClient.get(this.endpointUrl )
       //           .map((response: Response) => {
       //             const result = response.json();
       //             return result;
       //           });
                 
  //}
  //createCust(obj:{}): Observable<Cust> {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });

    //return this.httpClient.post(this.endpointUrl, obj , options)
      //             .map((response: Response) => {
      //              const result = response.json();
      //              return result;
      //            });
                

