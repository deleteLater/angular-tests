import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      lazy1 works!
    </p>
  `,
  styles: []
})
export class Lazy1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
