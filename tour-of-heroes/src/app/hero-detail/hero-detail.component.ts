import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {
      this.hero = {
        id: 0,
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        img: ''
      }
    }


  ngOnInit(): void {
    this.getHero()
  }

  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack():void {
    this.location.back()
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }

}
