import { Injectable } from '@angular/core';
import { CalcComponent } from '../calc.component';
import { BackendService } from './backendServices/backend.service';
import { InputModel } from './InputModel';

@Injectable({
  providedIn: 'root'
})
export class CalcServiceService {
  value:string = '';
  expressionStack:any=[]; 
  

  constructor(private calcComp:CalcComponent,private _backendService: BackendService){
  }

  numBtnClickHandler(key:any){
    console.log(key)
    this.value = this.getValue();
    this.value += key; 
    this.setValue(this.value);
    console.log(this.value)
    
  }

  fnBtnClickHandler(key:any){

    if(key=='AC'){
        this.calcComp.setDisplay('0')
        this.value = '0';}
      else if(key=='DEL') {
      this.expressionStack.pop();
      console.log(this.expressionStack,"after pop")
       const exp = this.getValue();
       const str  = exp.substring(0,exp.length-1);
       this.setValue(str);
      }
  }

  opBtnClickHandler(type:any,value:any){
  
    this.expressionStack.push({type:"NUMBER",value:this.getValue()});
    this.setValue('');

    if (value == 'EQUALS') {
     
        this.calculate();
        this.expressionStack=[];
    }
    else if (value=='ADD')  {
      this.value+='+';
      console.log(this.value)
      this.calcComp.setDisplay(this.value);
      this.expressionStack.push({type:"OPERATOR",value:"ADD"});
    }else if (value=='SUBTRACT'){
      this.value+='-';
      console.log(this.value)
      this.calcComp.setDisplay(this.value);
      this.expressionStack.push({type:"OPERATOR",value:"SUBTRACT"});
    }else if(value=='MULTIPLY') {
      this.value+='x';
      console.log(this.value)
      this.calcComp.setDisplay(this.value);
      this.expressionStack.push({type:"OPERATOR",value:"MULTIPLY"});
    }else if(value=='DIVIDE') {
      this.value+='&divide';
      console.log(this.value)
      this.calcComp.setDisplay(this.value);
      this.expressionStack.push({type:"OPERATOR",value:"DIVIDE"});
    }

    
  }

  calculate() {
    this._backendService.postData(this.expressionStack).subscribe((response:any)=>{
      this.value = response;
      console.log(response)
      this.calcComp.setDisplay(this.value);
      this.setValue(this.value);
       
    })
    };
  


  setValue(val:string){
    this.value = val;
    this.calcComp.setDisplay(this.value);
    console.log(this.value+ "from setter")
  }

  getValue(){
    this.value = this.calcComp.getDisplay()
    console.log(this.value+" from getter");
    return this.value;
  }

}

