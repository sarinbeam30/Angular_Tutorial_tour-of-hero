import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// @Component is a decorator that marks a class as an Angular component 
// and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always 'export' the component class so you can 'import' it elsewhere ... like in 'AppModule' 
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit life cycle')
  }


  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }
}
