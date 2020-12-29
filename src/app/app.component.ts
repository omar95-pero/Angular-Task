import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  students = [
    {name:'omar',age:25},
    {name:'ali',age:26}
  ]
  receiveStudent(student){
    this.students.push(student)
  }
}
