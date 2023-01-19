import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization1';
  isAddTask = false;
  taskList: Task[] = [
    {
      id: 0,
      name: "Dishwashing",
      description: "wash the dishes",
      assignedto: "Shakera"
    },
    {
      id: 1,
      name: "Cooking",
      description: "cook food for breakfast, lunch and dinner",
      assignedto: "Jei Ann"
    },
    {
      id: 2,
      name: "Sweeping",
      description: "sweeping the groundfloor",
      assignedto: "Junrey"
    },

  ]
  // addStudent(student: Student){
  //   // console.log(student);
  //   this.studentsList.push(student);
  //   this.isAddStudent = false;
  // }

  // addNewStudent(){
  //   this.isAddStudent = true;
  // }

  addTask(task: Task){
    console.log(task);
    this.taskList.push(task);
    this.isAddTask = false;
  }

  addNewTask(){
    this.isAddTask = true;
  }
}




