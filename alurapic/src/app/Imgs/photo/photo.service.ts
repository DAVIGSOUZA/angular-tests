import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'https://jsonplaceholder.typicode.com/photos'

@Injectable({ providedIn: 'root'})
export class PhotoSevice {
    constructor(private http: HttpClient) {}

    get() {
        return this.http.get<Photo[]>(API)
    }
}