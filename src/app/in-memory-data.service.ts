import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hulk',age: 50,power:'Superfuerza',universe:'Marvel',secret_identity: "Bruce Banner" },
      
      { id: 12,  name: 'Superman', age:40,power:'Superfuerza',
      universe:'DC Comics', secret_identity: "Clack Joseph Kent" },

      { id: 13, name: 'Dr.Strange',age:55,power:'Supermagia',
       universe:'Marvel', secret_identity: "Perter Hooten"  },

      { id: 14, name: 'Literna Verde',age:38,power:'Anillo de poder',
      universe:'DC Comics', secret_identity: "Alan Scott" },
      
      { id: 15, name: 'Bruja escarlata' },
      { id: 16, name: 'Wonder Woman' },
      { id: 17, name: 'Iron Man' },
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