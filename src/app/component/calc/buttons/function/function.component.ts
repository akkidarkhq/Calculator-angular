import { Component } from '@angular/core';
import { CalcServiceService } from '../../calcServices/calc-service.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
  providers:[CalcServiceService]
})
export class FunctionComponent {
  functionBtnModel = ['AC','DEL'];

  constructor(private _calcService: CalcServiceService){
  }

  onClick(value:any) { 
    this._calcService.fnBtnClickHandler(value);
 }


//  onMouseOver($e:any){
//   (e:any) =>  {
//     alert(e.target.value)
//   }
//  }
}
