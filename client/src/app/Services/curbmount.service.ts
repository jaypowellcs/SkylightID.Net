import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CurbMount } from '../Models/curbmount.model';

const baseUrl = 'https://localhost:7008/curbmount';


@Injectable({
  providedIn: 'root'
})
export class CurbmountService {

  constructor(private http: HttpClient) { }

  
  getAll():Observable<CurbMount[]> {
    return this.http.get<CurbMount[]>(baseUrl);
  }
}
