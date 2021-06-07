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
 
 api_url = `http://neuroneye.net/devapi/v1/domain/search/`



getValue(val) {
  this.reqDomain=val
  console.log("Input:", this.reqDomain)
}


  


  constructor(private http: HttpClient) { }


   getDataAndResult() { 

    this.http.get<any>(this.api_url + this.reqDomain).subscribe(
      response => {
        this.resp = response;

        console.log(this.resp)

       if (response.status = 200) {
        // redirect to 200 (threat)
        window.location.href="http://neuroneye/dangersite"
       } else if (response.status = 404) { 
       // redirect to 404 (safe)
       window.location.href="http://neuroneye/goodsite"
      }

      })

   
    }
  
    
  
  

 

}
