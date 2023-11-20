import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelfFlashed } from '../Models/selfflash.mount';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:7008/selfflash';


@Injectable({
  providedIn: 'root'
})
export class SelfService {

  constructor(private http: HttpClient) { }

  getAll():Observable<SelfFlashed[]> {
    return this.http.get<SelfFlashed[]>(baseUrl);
  }

  get(Id: number): Observable<SelfFlashed> {
    return this.http.get(`${baseUrl}/${Id}`);
  }
}
