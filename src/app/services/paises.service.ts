import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/class/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  API_URI = 'https://restcountries.com/v3.1/region';

  constructor(
    private http: HttpClient) { }

  gets(): Observable<any> {
    return this.http.get(`${this.API_URI}/americas`);
  }
}