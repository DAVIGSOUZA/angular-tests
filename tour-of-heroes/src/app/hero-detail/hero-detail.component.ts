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
        id: 8,
        name: 'Omnitron',
        hp: 14,
        attack: 13,
        defense: 13,
        img: 'https://sentinelswiki.com/thumb.php?f=Omnitron-X_Digital_Game_Portrait.png&width=150'
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
