// SERVICE are a great way to share information among classes that don't know each other.
// @Injectable() decorator marks the class as one that participates in the dependency injection system
// @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


// A provider is something that can create or deliver a service.
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // This is an example of a typical "service-in-service scenario" in which you inject the "MessageService" into the "HeroService"
  // which is injected into the "HeroesComponent"
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // Send a message from HeroService
    console.log(`(hero.service.ts) getHeroes()`);
    this.messageService.add(`HeroService: fetched heroes`);
    return heroes;
  }

  getHero(id: number) {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService : fetched hero id=${id}`);
    return of(hero);
  }
}
