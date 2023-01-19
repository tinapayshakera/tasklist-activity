import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() addOut = new EventEmitter();

  numberValue= 0
  inputValue= "";

  receiveAdd(){
    this.numberValue++
    this.addOut.emit();
  }

}
