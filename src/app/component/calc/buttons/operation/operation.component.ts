import { Component } from '@angular/core';
import { CalcServiceService } from '../../calcServices/calc-service.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  operationBtnModel = ['+','-','*','/','='];
  
  constructor(private _calcService: CalcServiceService){

  }
  onClick(val:any){
    this._calcService.opBtnClickHandler(val);
  }

}
