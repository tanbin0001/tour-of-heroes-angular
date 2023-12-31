import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`Hero Service: Fetched Heroes`);
    return of(HEROES);
  }

  // getHero(id: number): Observable<Hero>{
  //   this.messageService.add(`Hero Service: Fetched with id: ${id} `);
  //   return of(HEROES.find(hero => hero.id === id))
  // }

  getHero(id: number): Observable<Hero | undefined> {
    this.messageService.add(`Hero Service: Fetched with id: ${id}`);
    const hero = HEROES.find((hero) => hero.id === id);
    return hero ? of(hero) : of(undefined);
  }
}
