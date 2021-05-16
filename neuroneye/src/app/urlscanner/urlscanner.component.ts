import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-urlscanner',
  templateUrl: './urlscanner.component.html',
  styleUrls: ['./urlscanner.component.css']
})
export class UrlscannerComponent  {

  resp=[];
 reqDomain=""
 api_url = `http://localhost:3000/api/v1/domain/search/`



getValue(val) {
  this.reqDomain=val
  console.log("Input:", this.reqDomain)
}

httpReq() {
  this.getData()

}
  


  constructor(private http: HttpClient) { }


   getData() { 

    this.http.get<any>(this.api_url + this.reqDomain).subscribe(
      Response => {
        this.resp == Response;
      }
    )
    }
  
    
  
  

 

}
