import { Component,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {
  @Output() subtractOut = new EventEmitter();

  numberValue= 0

  receiveSubtract(){
    this.numberValue--
    this.subtractOut.emit();
  }
}
