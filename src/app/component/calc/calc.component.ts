import { Component , } from '@angular/core';
import { CalcServiceService } from './calcServices/calc-service.service';

@Component({
  selector: 'app-calc',
  templateUrl:'./calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers:[CalcServiceService]

})

export class CalcComponent {

  displayValue:string ='';

  setDisplay(value:string){
    this.displayValue = value;
  }

  getDisplay(){
   return this.displayValue 
  }
  

}
