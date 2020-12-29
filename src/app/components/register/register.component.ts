import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
@Output() register = new EventEmitter()

  registerStudent(name,age){
    const student = {
      name,
      age
    }
    console.log(student);
    this.register.emit(student);
    
  }

}



