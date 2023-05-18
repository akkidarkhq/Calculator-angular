import { Component } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
  providers:[ButtonService]
})
export class FunctionComponent {
  functionBtnModel = ['AC','DEL','UNDO','REDO'];


  constructor(private _buttonService: ButtonService){
  }

  onClick(value:any) { 
    console.log("function", value )
    this._buttonService.fnBtnPress(value);
 }

}
