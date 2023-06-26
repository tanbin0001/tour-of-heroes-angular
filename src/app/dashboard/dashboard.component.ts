import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // heroes = HeroService;
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.selectedHero = { id: 0, name: '' };
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
