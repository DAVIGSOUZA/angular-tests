import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://jsonplaceholder.typicode.com/photos'

@Injectable({ providedIn: 'root'})
export class PhotoService {
    constructor(private http: HttpClient) {}

    get() {
        return this.http.get<Photo[]>(API + '?_start=0&_limit=15')
    }

    paginated(page: number) {
      const startPhoto = (0 + (page - 1) * 12).toString()
      return this.http.get<Photo[]>(API + `?_start=${startPhoto}&_limit=12`)
  }
}
