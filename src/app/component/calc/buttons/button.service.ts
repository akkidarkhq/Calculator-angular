import { Injectable } from '@angular/core';
import { CalcComponent } from '../calc.component';

@Injectable({
  providedIn: 'root'

})
export class ButtonService {
  constructor(private _calcComp:CalcComponent) { 

  }

  opBtnPress(type: any, val: any) {
    this._calcComp.opBtnClickHandler(type,val);
  }
  fnBtnPress(value: any) {
    this._calcComp.fnBtnClickHandler(value);
  }
  numBtnPress(value: any) {
    this._calcComp.numBtnClickHandler(value);
  }

 


}
