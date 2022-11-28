import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Zadanie } from '../../types/Zadanie';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  selected: number = -1;

  Events = new Array(
    new Zadanie("Zamieść scenę", 3),
    new Zadanie("Ogarnąć pare kabli", 2, 2),
    new Zadanie("Kupić pizzę", 2,1),
    new Zadanie("Wyciścić WC"),
    new Zadanie("Zrób salto")
  );

  constructor() { }

  ngOnInit(): void {
  }

  selectZadanie(i:number):void{
    this.selected = i;
  }

}
