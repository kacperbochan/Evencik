import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../types/Event';


@Component({
  selector: '[app-events]',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  edit:boolean = false;
  @Input() event: Event;
  copy: Event;

  constructor() {
  }

  ngOnInit(): void {
    this.copy=new Event("");
  }


  verifyData(formValues: object): void {

  }
}

