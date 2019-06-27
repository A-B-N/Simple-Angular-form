import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustFormComponent } from './cust-form/cust-form.component';
import { HttpClientModule } from  '@angular/common/http';
import {CustFormService}    from './services/cust-form.service';

@NgModule({
  declarations: [
    AppComponent,
    CustFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CustFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
