import { Component} from '@angular/core';
import { CalcServiceService } from '../../calcServices/calc-service.service';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
// operationBtnModel = [{type:'OPERATOR',value:'addition'},{type:'OPERATOR',value:'subtract'},
//   {type:'OPERATOR',value:'multiplication'},{type:'OPERATOR',value:'divide'},
//   {type:'OPERATOR',value:'percent'},{type:'OPERATOR',value:'equal'}];

  operationBtnModel = [{type:'OPERATOR',value:'ADD',label:'+'},{type:'OPERATOR',value:'SUBTRACT',label:'-'},
  {type:'OPERATOR',value:'MULTIPLY',label:'&#10006'},{type:'OPERATOR',value:'DIVIDE',label:'&#247'},
  {type:'OPERATOR',value:'PERCENT',label:'%'},{type:'OPERATOR',value:'EQUALS',label:'='}];
  

  constructor(private _calcService: CalcServiceService){

  }

  onClick(type:any,val:any){
    this._calcService.opBtnClickHandler(type,val);
  }

}
