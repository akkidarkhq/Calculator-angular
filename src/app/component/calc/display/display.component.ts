import { Component, Output, Input, OnChanges, SimpleChanges,ViewChild,ElementRef, EventEmitter} from '@angular/core';
import { CalcServiceService } from '../calcServices/calc-service.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:[CalcServiceService]
})
export class DisplayComponent {

  // @ViewChild('display')
  // display !: ElementRef;
  
  // @Output() newItemEvent = new EventEmitter<string>();
  // displayValue = '0';

  @Input() value ='';

}
