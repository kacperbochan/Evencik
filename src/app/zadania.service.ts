import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zadanie } from '../types/Zadanie';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ZadaniaService {
  zadania:Zadanie[]=[];
  private url = 'http://localhost:3000/zadania';


  constructor(private http: HttpClient) {
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


  addZadanie(zadanie: Zadanie): Observable<Zadanie> {
    console.log(zadanie);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Zadanie>(this.url, zadanie, httpOptions)
      .pipe(
        catchError(this.handleError<Zadanie>('addZadanie'))
      );
  }

  editZadanie(editedZadanie: Zadanie, nr:number):void{
    this.zadania[nr]=editedZadanie;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

}
