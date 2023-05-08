import { Component } from '@angular/core';
import { CalcServiceService } from '../../calcServices/calc-service.service';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})

export class NumericComponent {

  numericButtonModel = [0,1,2,3,4,5,6,7,8,9];

  constructor(private _calcService: CalcServiceService){
  }

  onClick(value:any) { 
    this._calcService.numBtnClickHandler(value);
  }

}
