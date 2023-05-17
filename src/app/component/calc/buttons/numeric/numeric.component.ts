import { Component } from '@angular/core';
import { CalcServiceService } from '../../calcServices/calc-service.service';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})

export class NumericComponent {
  numericButtonModel = [{value:7},{value:8},{value:9},{value:4},{value:5},{value:6},{value:1},{value:2},{value:3},{value:0},]

  constructor(private _calcService: CalcServiceService){
  }

  onClick(value:any) { 
    this._calcService.numBtnClickHandler(value);
  }

}
