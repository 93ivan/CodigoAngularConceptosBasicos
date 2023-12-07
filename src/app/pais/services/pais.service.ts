import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = "https://restcountries.com/v3.1";

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

  }
}
