import { ZadanieMap } from 'src/types/Maps/ZadanieMap';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zadanie } from '../../../types/Zadanie';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IZadanie } from 'src/types/Interfaces/IZadanie';

@Injectable({
  providedIn: 'root'
})

export class ZadaniaService {
  zadania:Zadanie[]=[];
  private url = 'http://localhost:3000/zadania';

  constructor(private http: HttpClient) {
    /*
    this.zadania.push(new Zadanie("wypuść kota", 3, 2 ))
    this.zadania.push(new Zadanie("Zamieść scenę", 3)),
    this.zadania.push(new Zadanie("Ogarnąć pare kabli", 2, 2)),
    this.zadania.push(new Zadanie("Kupić pizzę", 2,1)),
    this.zadania.push(new Zadanie("Wyciścić WC")),
    this.zadania.push(new Zadanie("Zrób salto"))
    */
  }

  getZadaniaSynch():Zadanie[]{
    return this.zadania;
  }

  getZadaniaAsynch():Observable<Zadanie[]>{
    //return of(this.zadania);
    return this.http.get<Zadanie[]>(this.url)
    .pipe(
      catchError(this.handleError<Zadanie[]>('getZadanie', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

  addZadanie(zadanie: Zadanie): Observable<IZadanie> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<ZadanieMap>(this.url, new ZadanieMap(zadanie), httpOptions)
      .pipe(
        catchError(this.handleError<ZadanieMap>('addZadanie'))
      );
  }


}
