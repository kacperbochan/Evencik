import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zadanie } from '../types/Zadanie';

@Injectable({
  providedIn: 'root'
})

export class ZadaniaService {
  zadania:Zadanie[]=[];


  constructor() {
    this.zadania.push(new Zadanie("wypuść kota", 3, 2 ))
  }

  getZadaniaSynch():Zadanie[]{
    return this.zadania;
  }

  getZadaniaAsynch():Observable<Zadanie[]>{
    return of(this.zadania);
  }


}
