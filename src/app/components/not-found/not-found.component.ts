import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1 class="text-center">404</h1>
    <p>
      Path not found 
      <a routerLink="">Navigate to home</a>
    </p>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
