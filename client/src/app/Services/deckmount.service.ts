import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMount } from '../Models/deckmount.model';


const baseUrl = 'https://localhost:7008/deckmount';


@Injectable({
  providedIn: 'root'
})
export class DeckmountService {

  constructor(private http: HttpClient) { }

  getAll():Observable<DeckMount[]> {
    return this.http.get<DeckMount[]>(baseUrl);
  }

  get(Id: number): Observable<DeckMount> {
    return this.http.get(`${baseUrl}/${Id}`);
  }
}
