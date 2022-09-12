import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './heroes';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}
