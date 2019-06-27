import { Component, OnInit } from '@angular/core';
import { Cust } from '../cust.model';

@Component({
  selector: 'cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.scss']
})
export class CustFormComponent implements OnInit {

  model = new Cust('', 1,'','','','');;
 

  //constructor(private httpClient: HttpClient)  { }

  ngOnInit() {
  }
  get currentBook() { return JSON.stringify(this.model); }
}
