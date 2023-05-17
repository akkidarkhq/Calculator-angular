import { Component, Output, Input, OnChanges, SimpleChanges,ViewChild,ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent {

  @Input() value ='';

}
