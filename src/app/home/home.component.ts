import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/Event';
import { EventyService } from '../eventy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventy: Event[];
  selected: number = -1;

  /*
  EventsList = new Array(
    new Event("Rockowa Scena"),
    new Event("Strefa Kultury Studenckiej"),
    new Event("Pizza Party"),
    new Event("Czyszzcenie WC"),
    new Event("Impreza salto")
  );
  */

  constructor(private eventyService: EventyService) {
    eventyService.getEventyAsynch().subscribe(data=>this.eventy=data);
  }

  ngOnInit(): void {
  }

  selectZadanie(i:number):void{
    this.selected = i;
  }

}
