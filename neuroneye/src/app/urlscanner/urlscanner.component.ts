import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-urlscanner',
  templateUrl: './urlscanner.component.html',
  styleUrls: ['./urlscanner.component.css']
})
export class UrlscannerComponent implements OnInit {

 api_url = `http://localhost:3000/api/v1/url/scan?url=`
 reqURL=""



getValue(val) {
  this.reqURL=val
  console.log("Input:", this.reqURL)
}
  


  constructor(private http: HttpClient) { 
    this.http.get(this.api_url + this.reqURL)
    .subscribe(data => alert(data))
    
  
  }

 
  ngOnInit(): void {
  }

}
