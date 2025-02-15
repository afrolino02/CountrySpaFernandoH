import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Country} from "../interfaces/country";
import { Observable,catchError, map, of } from "rxjs";
@Injectable({ providedIn: "root" })
export class ServiceNameService {
  private apiurl : string = 'https://restcountries.com/v3.1'
  constructor(private HttpClient: HttpClient) {
    
   
  }
  searchCapitalByAlphaCode( code: string): Observable<Country | null>{
  const obtenerCapital = `${this.apiurl}/alpha/${code}`;
  return this.HttpClient.get<Country[]>(obtenerCapital).pipe(
      map(countries => countries.length > 0 ? countries[0] :  null ),
      catchError(() => of(null)))
  }
  
  searchCapital(term: string): Observable<Country[]>{
     const obtenerCapital = `${this.apiurl}/capital/${term}`;
    return this.HttpClient.get<Country[]>(obtenerCapital).pipe(
      catchError(() => of([]))
    )
  } 
  searchRegion(term : string): Observable<Country[]>{
  const obtenerRegion = `${this.apiurl}/region/${term}`;
  return this.HttpClient.get<Country[]>(obtenerRegion).pipe(catchError(() => of([])))
  }
  searchCountry(term : string): Observable<Country[]>{
    const obtenerPais = `${this.apiurl}/name/${term}`;``
    return this.HttpClient.get<Country[]>(obtenerPais).pipe(catchError(() => of([])))
  }

}

