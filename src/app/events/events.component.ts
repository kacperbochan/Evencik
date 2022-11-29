import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../types/Event';


@Component({
  selector: '[app-events]',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() event: Event;
  @Input() id: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}

