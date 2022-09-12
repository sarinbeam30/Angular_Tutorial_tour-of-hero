import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}']
})
export class FlyingHeroesComponent {
  title = 'Flying Heroes (pure pipe)';
  heroes: any[] = [];
  canFly = true;
  mutate = true;

  constructor() { this.reset(); }


  addHero (name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = { name, canFly: this.canFly };
    // console.log('[flying-heroes.component] hero : ', hero)

    if (this.mutate) {
      this.heroes.push(hero);
    } else {
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}


@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}']
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  override title = 'Flying Heroes (Impure pipe)';
}
