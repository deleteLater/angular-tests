import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../models/hero';
import * as faker from 'faker/locale/en_US';


@Injectable({
  providedIn: 'root'
})
export class DevInMemoryDbService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const heroes: Hero[] = this.manyHeroes();

    return {heroes};
  }

  private manyHeroes(): Hero[] {
    const result: Hero[] = [];

    for (let i = 0; i < 100; i++) {
      result.push({
        id: i,
        name: faker.random.word()
      });
    }

    return result;
  }
}
