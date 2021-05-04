import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Tempest',
        hp: 10,
        attack: 16,
        defense: 8,
        img: 'https://sentinelswiki.com/thumb.php?f=Tempest_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 12,
        name: 'Tachyon',
        hp: 9,
        attack: 22,
        defense: 5,
        img: 'https://sentinelswiki.com/thumb.php?f=Tachyon_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 13,
        name: 'Legacy',
        hp: 16,
        attack: 12,
        defense: 16,
        img: 'https://sentinelswiki.com/thumb.php?f=Legacy_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 14,
        name: 'Idealist',
        hp: 8,
        attack: 20,
        defense: 20,
        img: 'https://sentinelswiki.com/thumb.php?f=Idealist_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 15,
        name: 'Captain Cosmic',
        hp: 15,
        attack: 18,
        defense: 10,
        img: 'https://sentinelswiki.com/thumb.php?f=Captain_Cosmic_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 16,
        name: 'Bunker',
        hp: 20,
        attack: 10,
        defense: 25,
        img: 'https://sentinelswiki.com/thumb.php?f=Bunker_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 17,
        name: 'NightMist',
        hp: 10,
        attack: 15,
        defense: 15,
        img: 'https://sentinelswiki.com/thumb.php?f=NightMist_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 18,
        name: 'Omnitron',
        hp: 14,
        attack: 13,
        defense: 13,
        img: 'https://sentinelswiki.com/thumb.php?f=Omnitron-X_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 19,
        name: 'Fanatic',
        hp: 8,
        attack: 25,
        defense: 8,
        img: 'https://sentinelswiki.com/thumb.php?f=Fanatic_Digital_Game_Portrait.png&width=150'
      },
      {
        id: 20,
        name: 'Guise',
        hp: 999,
        attack: 1,
        defense: 0,
        img: 'https://sentinelswiki.com/thumb.php?f=Guise_Digital_Game_Portrait.png&width=150'
      }
    ]
    return {heroes}
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }

}
