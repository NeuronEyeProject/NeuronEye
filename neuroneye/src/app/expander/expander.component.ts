import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { coerceStringArray } from '@angular/cdk/coercion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent  {



  resp=[];
  reqURL=""


api_url = `http://localhost:3000/api/v1/domain/expander/url?url=`



getValue(val) {
 this.reqURL=val
 console.log("Input:", this.reqURL)
}


 


 constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


 

  getDataAndResult()   { 
    this.http.get<any>(this.api_url + this.reqURL).subscribe(
      response => {
        this.resp = response;
        console.log(this.resp)

        if(response.status = 200) {
          this.snackBar.open(`Expanded URL Result Displayed: \n ${this.resp['url']}`, 'close')
        } else {
          this.snackBar.open('Internal Error', 'Close')
        }
      })

      

  }


}
