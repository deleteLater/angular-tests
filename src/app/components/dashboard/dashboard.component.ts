import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heros: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      heros => this.heros = heros.slice(1, 5)
    );
  }
}
