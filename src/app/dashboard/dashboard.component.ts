import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private hs: HeroService) { }

  ngOnInit() {
    this.hs.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
