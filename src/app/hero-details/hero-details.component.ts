import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService }              from '../services/hero.service';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route:       ActivatedRoute,
    private location:    Location
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((param: ParamMap) =>
                    this.heroService.getHero(+param.get('id')))
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

}
