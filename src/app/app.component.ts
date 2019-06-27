import { Component } from '@angular/core';
import {CustFormService}    from './services/cust-form.service';
import { Cust } from './cust.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  cust = [];
  errorMsg :string;
  errorFlag: boolean = false;
  defaultCourseCredit:string = "1";
  constructor(private custFormService:CustFormService ){}

  /*fetchCustData() {
    this.custFormService.getCust()
     .subscribe(  
                  (data: Cust[]) => {  this.custform = data; },
                 (error) =>  {this.errorMsg = error; this.errorFlag = true}
                )
            
    }
  addCust(cust: Cust) {
      this.custFormService.createCust(cust)
                     .subscribe(
                                (cust)  => {this.custform.push(cust)},
                                (error) =>  {this.errorMsg = error}
                            
                       );}*/

}
