import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { coerceStringArray } from '@angular/cdk/coercion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-domaininfo',
  templateUrl: './domaininfo.component.html',
  styleUrls: ['./domaininfo.component.css']
})
export class DomaininfoComponent   {

 
  resp=[];
  respw=[];
  reqDomain=""



api_url_whois = `http://localhost:3000/api/v1/domain/domaininfo/whois?domain=`
api_url_lookup = `http://localhost:3000/api/v1/domain/dns/lookup?domain=`





 


 constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


 getValueLookup(val) {
  this.reqDomain=val
  console.log("Input:", this.reqDomain)
 }

  getDataAndResultLookup()   { 
    this.http.get<any>(this.api_url_lookup + this.reqDomain).subscribe(
      response => {
        this.resp = response;
        console.log(this.resp)


        if(response.status = 200) {
          alert(`DNS Lookup Result  \n -------------------------------- \n Address: ${this.resp['address']} \n Family: IPv${this.resp['family']}`)
        } else {
          this.snackBar.open('Internal Error', 'Close')
        }
      })

      

  }

  ////////////////////////////////////////////////////////////////

  getValueWhois(val) {
    this.reqDomain=val
    console.log("Input:", this.reqDomain)
   }
  
   getDataAndResultWhois() { 
      this.http.get<any>(this.api_url_whois + this.reqDomain).subscribe(
        response => {
          this.respw = response;
          console.log(this.respw)

          if(response.status = 200) {
            alert(`Whois Result  \n -------------------------------- \n ` + JSON.stringify(this.respw) )
          } else {
            this.snackBar.open('Internal Error', 'Close')
          }
        })
    }

  
}
  





