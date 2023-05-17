import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class BackendService {

  public baseURL : string = "http://localhost:8080/home";

  constructor(private http: HttpClient) {
  }
    
  postData(data: string) : any{
    console.log("hhh" + JSON.stringify(data))
    const response = this.http.post(this.baseURL+'/calc',JSON.stringify(data));
    console.log(response);
      return  response ;
  }

}
