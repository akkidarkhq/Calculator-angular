import { Component , } from '@angular/core';
import { CalculationService } from './calcServices/calculation-service.service';
import { BackendService } from './calcServices/backendServices/backend.service';
import { Stack } from './stacks';
import { ButtonService } from './buttons/button.service';


@Component({
  selector: 'app-calc',
  templateUrl:'./calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers:[ButtonService,BackendService,Stack]
})

export class CalcComponent {

  constructor(private _backendService:BackendService,private _calcService:CalculationService,private _stack:Stack){
  }

  displayValue:string ='';
  value:string = '';
  expressionStack:any=[];
  
  numBtnClickHandler(key:any){
    console.log(key)
    this.value = this.getValue();
    this.value += key; 
    this.setValue(this.value);
    console.log(this.expressionStack,"expressionStack")
  }

  fnBtnClickHandler(key:any){
    console.log(key+" in calc comp fnbtn")
    if(key=='AC'){
          this.setValue('');
          this.setDisplay('0')
          console.log(this.expressionStack,this);
      }
      else if(key=='DEL') {
       console.log(this.expressionStack,"after pop")
       let  exp = this.getDisplay()+"";
        this.setValue(exp.slice(0,exp.length-1));
      }else if(key=='UNDO'){
        this.setValue(this._stack.undoStack());
      }else if(key=='REDO'){
        this.setValue(this._stack.redoStack());
      }
  }

  opBtnClickHandler(type:any,value:any){
    this.pushNumber();
    if(this.expressionStack.length==0&&value=="SUBTRACT"){
      this.value='-';
      this.setDisplay('-');
    }else{
 
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
   this._backendService.postData(this.expressionStack).subscribe((response:any)=>{
      console.log(response);
      this.setValue(response);
      this._stack.setStack(response);
     
    })
    this._stack.getStack();
    };
  
  pushNumber(){
    this.expressionStack.push({type:"NUMBER",value:this.getValue()})
  }
  
  setValue(val:string){
    this.value = val;
    this.setDisplay(this.value);
    console.log(this.value+ "from setter")
  }

  getValue(){
    this.value = this.getDisplay()
    console.log(this.value+" from getter");
    return this.value;
  }

  setDisplay(value:string){
    this.displayValue = value;
  }

  getDisplay(){
   return this.displayValue;
  }
  

}
