import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Hulk',age: 50,power:'Superfuerza',
      universe:'Marvel',secret_identity: "Bruce Banner" },
      
      { id: 11,  name: 'Superman', age:40,power:'Superfuerza',
      universe:'DC Comics', secret_identity: "Clack Joseph Kent" },

      { id: 12, name: 'Dr.Strange',age:55,power:'Supermagia',
       universe:'Marvel', secret_identity: "Perter Hooten"  },

      { id: 13, name: 'Literna Verde', age:38,power:'Anillo de poder',
       universe:'DC Comics', secret_identity: "Alan Scott" },
      
       {id: 14, name: 'Iron Man', age:56,power:'Inteligencia sobrehumana',
      universe:'Marvel', secret_identity: "Tony stark"},

      {id: 15, name: 'Wonder Woman', age:45,power:'Superfuerza y Super Vuelo',
      universe:'DC Comics', secret_identity: "Diana de Temiscira" },

      {id: 16, name: 'Robin', age:25,power:'Superfuerza',
      universe:'DC Comics', secret_identity: "Damian Wayne" },

      {id: 17, name: 'Bruja escarlata', age:35,power:'Proyeccion astral',
      universe:'Marvel', secret_identity: "Wanda Maximoff"},

      {id: 18, name: 'Capitana Marvel', age:32,power:'Superfuerza y Supervuelo',
      universe:'Marvel', secret_identity: "Carol Danvers"},

      {id: 19, name: 'Cibord', age:28,power:'Superobot',
      universe:'DC Comics', secret_identity: "Victor Stone"},

      {id: 20, name: 'Ant-Man', age:38 ,power:'Cambiar de tamaño',
      universe:'Marvel', secret_identity: "Scott Lang"}

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

