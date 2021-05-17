import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hulk',age: 30,  },
      { id: 12, name: 'Superman', age:22, },
      { id: 13, name: 'Flash',  },
      { id: 14, name: 'Falcon' },
      { id: 15, name: 'Bruja escarlata' },
      { id: 16, name: 'Aquaman' },
      { id: 17, name: 'Robin' },
      { id: 18, name: 'Capitana marvel' },
      { id: 19, name: 'Cibord' },
      { id: 20, name: 'Ant-man' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/