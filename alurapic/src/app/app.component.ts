import { Component, OnInit } from '@angular/core';
import { PhotoSevice } from './Imgs/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'alurapic'
  photos: Object[] = []

  constructor(private photoService: PhotoSevice) {}

  ngOnInit(): void {
    this.photoService.get().subscribe(photos => this.photos = photos)
  }
}
