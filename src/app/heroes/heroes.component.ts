import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// @Component is a decorator that marks a class as an Angular component 
// and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always 'export' the component class so you can 'import' it elsewhere ... like in 'AppModule' 
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log('(heros.components.ts) ngOnInit life cycle');
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    console.log(`(heros.components.ts) getHeroes function`);
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
