import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent {
heroes: any[] = [];
  canFly = true;

  constructor() { this.reset(); }


  addHero (name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = { name, canFly: this.canFly };
    // console.log('[flying-heroes.component] hero : ', hero)
    this.heroes.push(hero)
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}
