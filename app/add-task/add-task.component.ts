import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ngOnInit(){
    this.taskForm.reset();

  }
  @Output() taskOut = new EventEmitter();
  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(0),
    assignedto: new FormControl('')

  })

  addTask(){
    // console.log(this.taskForm.value)
    this.taskOut.emit(this.taskForm.value)
    // this.taskForm.reset();
  }

}
