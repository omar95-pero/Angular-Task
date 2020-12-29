import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students = [
    {name:'omar',age:25},
    {name:'ali',age:26}
  ]
  receiveStudent(student){
    this.students.push(student)
  }

}
