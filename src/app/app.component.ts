import { Component } from '@angular/core';
import {HeroService} from './services/hero.service';
import {Hero} from './models/hero';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'start';

  heroes$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
  ) {
    this.heroes$ = this.heroService.getList();
  }

}
