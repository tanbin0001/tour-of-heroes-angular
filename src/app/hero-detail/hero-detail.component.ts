import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.hero = { id: 0, name: '' };
  }
  ngOnInit() {
    this.getHero();
  }

  //   getHero(): void {
  //     const id = this.route.snapshot.paramMap.get('id');
  //     if (id !== null) {
  //       const numericId = parseInt(id);
  //       // console.log(typeof parseInt(id));

  //       console.log(id);
  //       this.heroService.getHero(numericId).subscribe((hero) => (hero = hero));
  //     }
  //   }
  // }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const numericId = parseInt(id);
      // console.log(typeof parseInt(id));

      console.log(id);
      // this.heroService.getHero(numericId).subscribe((hero) =>  (this.hero = hero));
      this.heroService.getHero(numericId).subscribe((hero) => {
        if (hero !== undefined) {
          this.hero = hero;
        }
      });
    }
  }
  goBack(): void {
    this.location.back();
  }
}
