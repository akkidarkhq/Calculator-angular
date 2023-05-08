import { Injectable } from '@angular/core';
import { CalcComponent } from '../calc.component';

@Injectable({
  providedIn: 'root'
})
export class CalcServiceService {
  value:string = '';

  constructor(private calcComp:CalcComponent){
  }

  numBtnClickHandler(key:string){
    this.value += key; 
    this.calcComp.setDisplay(this.value)
    console.log(this.value)
  }

  fnBtnClickHandler(key:string){
    if(key=='AC'){
     this.reset();
    }else if(key=='DEL') {
      const val = this.calcComp.getDisplay();
      this.calcComp.setDisplay(val.substring(0,val.length-1));
    }
  }

  opBtnClickHandler(key:string){
    if (key == '=') {
        this.calculate();
    }
    else  {
      this.value+=key;
      console.log(this.value)
      this.calcComp.setDisplay(this.value);
    }
    
  }

  calculate() {
    this.value += "=" + eval(this.value);
    this.calcComp.setDisplay(this.value);
    this.value='';
  }

  reset(){
    console.log(this.value)
    this.calcComp.setDisplay('')
    this.value = '';
  }
}
