import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  filter: string = ''
  hasMore: boolean = true
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos
  }

  load() {
    this.photoService
      .paginated(++this.currentPage)
      .subscribe(photos => {
        this.filter = ''
        this.photos = this.photos.concat(photos)
        if(this.currentPage > 5) this.hasMore = false
      })
  }
}
