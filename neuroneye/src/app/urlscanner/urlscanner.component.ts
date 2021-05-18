import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { coerceStringArray } from '@angular/cdk/coercion';

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
  this.getDataAndResult()
   console.log(this.resp)
}
  


  constructor(private http: HttpClient) { }


   getDataAndResult() { 

    this.http.get<any>(this.api_url + this.reqDomain).subscribe(
      response => {
        this.resp = response;

       if (response.status = 200) {
        // redirect to 200 (threat)
        window.location.href="https://app.neuroneye/dangersite"
       } else if (response.status = 200) { 
       // redirect to 404 (safe)
       window.location.href="https://app.neuroneye/goodsite"
      }

      })

   
    }
  
    
  
  

 

}
