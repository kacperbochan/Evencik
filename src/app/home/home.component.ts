import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected: number = -1;

  EventsList = new Array(
    new Event("Rockowa Scena"),
    new Event("Strefa Kultury Studenckiej"),
    new Event("Pizza Party"),
    new Event("Czyszzcenie WC"),
    new Event("Impreza salto")
  );

  constructor() { }

  ngOnInit(): void {
  }

  selectZadanie(i:number):void{
    this.selected = i;
  }

}