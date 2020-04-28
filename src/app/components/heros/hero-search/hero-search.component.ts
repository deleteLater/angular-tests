import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Hero} from '../../../models/hero';
import {HeroService} from "../../../services/hero.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private names = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.heroes$ = this.names.pipe(
      // wait 300ms after each keystroke before considering the name
      debounceTime(300),

      // ignore new name if same as previous name
      distinctUntilChanged(),

      // switch to new search observable each time the name changes
      switchMap((name: string) => this.heroService.getByName(name))
    );
  }

  // Push a search term into the observable stream.
  search(name: string): void {
    this.names.next(name);
  }
}
