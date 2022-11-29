import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../types/Event';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventyService {
  eventy:Event[]=[];
  private url = 'http://localhost:3000/eventy';


  constructor(private http: HttpClient) {
  }

  getEventySynch():Event[]{
    return this.eventy;
  }

  getEventyAsynch():Observable<Event[]>{
    //return of(this.zadania);
    return this.http.get<Event[]>(this.url)
    .pipe(
      catchError(this.handleError<Event[]>('getEvent', []))
    );
  }


  addEvent(event: Event): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Event>(this.url, event, httpOptions)
      .pipe(
        catchError(this.handleError<Event>('addEvent'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

}
