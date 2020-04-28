import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService) {
    // While you could call getHeroes() in the constructor, that's not the best practice.
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heros => this.heroes = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(x => x !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
