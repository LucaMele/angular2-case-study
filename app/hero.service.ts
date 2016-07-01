import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero.ts';

@Injectable()
export class HeroService {

    /**
     *
     * @returns {any}
     */
    public getHeroes() {
        return new Promise<Hero[]>(resolve => resolve(HEROES));
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => <Hero>heroes.filter(hero => hero.id === id)[0]);
    }
}