import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=15'

@Injectable({ providedIn: 'root'})
export class PhotoService {
    constructor(private http: HttpClient) {}

    get() {
        return this.http.get<Photo[]>(API)
    }
}
