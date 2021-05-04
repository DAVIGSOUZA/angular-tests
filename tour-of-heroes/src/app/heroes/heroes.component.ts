import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroServise: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes():void {
    this.heroServise.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string , img: string): void {
    name = name.trim()
    if (!name || !img) { return }
    this.heroServise.addHero(
      {
        name: name,
        hp: 10,
        attack: 10,
        defense: 10,
        img: img
      } as Hero).subscribe(hero =>{this.heroes.push(hero)})
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroServise.deleteHero(hero.id).subscribe()
  }
}
