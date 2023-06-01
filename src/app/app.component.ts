import { Component, OnInit } from '@angular/core';
import { LoginService } from './component/calc/calcServices/loginService/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent  {
  
  // constructor(private loginservice:LoginService){

  // }

  // ngOnInit(): void {
  //   this.loginservice.name("bacchu");
  //   this.loginservice.getLoginPage()
  //   throw new Error('Method not implemented.');
    
  // }

  title = 'Calculator';


}
