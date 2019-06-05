import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http:HttpClient) {}
    
  getdata(){
      let response=this.http.get('http://localhost:8100/assets/data.json');
      return response;
    }
    getdata2(){
      let response=this.http.get('http://localhost:8100/assets/data2.json');
      return response;
    }
    getdata1(){
      let response=this.http.get('http://localhost:8100/assets/data1.json');
      return response;
    }
   
}
