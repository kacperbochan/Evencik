import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Zadanie } from '../../types/Zadanie';
import { ZadaniaService } from '../zadania.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  zadania:Zadanie[]=[];
  selected: number = -1;

  constructor(zadaniaService: ZadaniaService) {
    zadaniaService.getZadaniaAsynch().subscribe(data=>this.zadania=data);
  }

  Events = new Array(
    new Zadanie("Zamieść scenę", 3),
    new Zadanie("Ogarnąć pare kabli", 2, 2),
    new Zadanie("Kupić pizzę", 2,1),
    new Zadanie("Wyciścić WC"),
    new Zadanie("Zrób salto")
  );



  ngOnInit() {
    console.log("Zadania", this.zadania.length,this.zadania);
  }

  selectZadanie(i:number):void{
    this.selected = i;
  }

}
