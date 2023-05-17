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
        this.value = '0';
        this.expressionStack=[];
      }
      else if(key=='DEL') {
       console.log(this.expressionStack,"after pop")
       let  exp = this.calcComp.getDisplay()+"";
        this.setValue(exp.slice(0,exp.length-1));
      }
  }

  opBtnClickHandler(type:any,value:any){
    if(this.expressionStack.length==0&&value=="SUBTRACT"){
      this.value='-';
      this.calcComp.setDisplay('-');
    }else{
      this.pushNumber();
      this.setValue('');
      if (value == 'EQUALS') {
          this.calculate();
          this.expressionStack=[];
      }
      else if (value=='ADD')  {
        this.value+='+';
        this.expressionStack.push({type:"OPERATOR",value:"ADD"});
        this.setValue('');
      }else if (value=='SUBTRACT'){
        this.value+='-';
        this.expressionStack.push({type:"OPERATOR",value:"SUBTRACT"});
        this.setValue('');
      }else if(value=='MULTIPLY') {
        this.value+='x';
        this.expressionStack.push({type:"OPERATOR",value:"MULTIPLY"});
        this.setValue('');
      }else if(value=='DIVIDE') {
        this.value+='&divide';
        this.expressionStack.push({type:"OPERATOR",value:"DIVIDE"});
        this.setValue('');
    }
    }

  }

  calculate() {
    console.log(this.value)
    this._backendService.postData(this.expressionStack).subscribe((response:any)=>{
      this.value = response;
      this.setValue(this.value);
    })
    };
  
  pushNumber(){
    this.expressionStack.push({type:"NUMBER",value:this.getValue()})
  }

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

