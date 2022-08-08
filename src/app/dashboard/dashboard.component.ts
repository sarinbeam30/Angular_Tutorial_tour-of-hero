import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  // The `Constructor` is a default method of the class that is executed when the class is instantiated
  // and ensures proper initialisation of fields in the class and its subclasses.
  
  // The `Constructor` should only be used to initialze class members but shouldn't do actual `work`.
  // Called first time before the ngOnInit()
  constructor(private heroService: HeroService) { }

  
  // It is a lifecycle hook of Angular which is called when component create successfully.
  // Mostly, we used `ngOnInit` for all the initialization/declaration and avoid stuff to work in the constructor.
  // Called after the constructor and called after the first ngOnChanges()
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
