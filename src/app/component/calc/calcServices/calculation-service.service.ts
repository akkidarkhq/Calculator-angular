import { Injectable } from '@angular/core';
import { CalcComponent } from '../calc.component';
import { BackendService } from './backendServices/backend.service';
import { InputModel } from './InputModel';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

// value:string = '';

  // index:number=0;
  // constructor(private _backendService: BackendService){
  // }
  
  //  evaluate(data:any) :string {
    
  //   this._backendService.postData(data).subscribe((response:any)=>{
  //     console.log(response)
  //     this.value = response;
  //     console.log(this.value)
  //   })
  //   return this.value;
  // }

  // getResultStack(){
  //   console.log(this.resultStack)
  //   return this.resultStack[this.index-1];}

  // setResultStack(val:any){
  //   this.resultStack.push(val);
  //   this.index++;}
  
}

