import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // heroes = HeroService;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero);
  // }
}
