import { Component } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})

export class NumericComponent {
  numericButtonModel = [{value:7},{value:8},{value:9},{value:4},{value:5},{value:6},{value:1},{value:2},{value:3},{value:0},{value:'.'}]

  constructor(private _buttonService:ButtonService){
  }

  onClick(value:any) { 
    this._buttonService.numBtnPress(value);
  }

}
