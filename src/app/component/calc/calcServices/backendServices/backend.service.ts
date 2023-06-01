import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root'})

export class BackendService {

  public baseURL : string = "http://localhost:8080/SpringSecurityDemoProject/calculate";

  constructor(private http: HttpClient) {
  }
    
  postData(data: string) : any{
    console.log("hhh" + JSON.stringify(data))
    const response = this.http.post(this.baseURL,JSON.stringify(data));
    console.log(response);
      return  response ;
  }

}
