import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  name(params:String) {
    console.log(" i am implementation of login service says "+params)
  }

  getLoginPage(){
    console.log(" login page method called ")
    const url = "http://localhost:8080/SpringSecurityFinal/login"
    return this.http.get<any>(url);
  }

}
