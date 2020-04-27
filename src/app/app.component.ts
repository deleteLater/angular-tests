import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'start';

  constructor(
    private router: Router
  ) {
  }

  backToHome() {
    this.router.navigate([''])
      .then(x => console.log(x));
  }
}
