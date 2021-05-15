import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-urlscanner',
  templateUrl: './urlscanner.component.html',
  styleUrls: ['./urlscanner.component.css']
})
export class UrlscannerComponent implements OnInit {

 
 reqDomain=""
 api_url = `http://localhost:3000/api/v1/url/search`



getValue(val) {
  this.reqDomain=val
  console.log("Input:", this.reqDomain)
}
  


  constructor(private http: HttpClient) { 
    this.http.get(this.api_url + this.reqDomain)
    .subscribe(data => console.log(data))
    
  
  }

 
  ngOnInit(): void {
  }

}
