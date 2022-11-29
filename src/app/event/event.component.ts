import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Zadanie } from '../../types/Zadanie';
import { ZadaniaService } from '../services/zadania/zadania.service';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/eventy/events.service';
import { Event } from 'src/types/Event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [ZadaniaService]
})
export class EventComponent implements OnInit {
  zadania:Zadanie[]=[];
  eventId:number;

  constructor(private zadaniaService: ZadaniaService, private route: ActivatedRoute) {
    this.route.params.subscribe( params=> this.eventId = params['id']);
    zadaniaService.getZadaniaAsynch().subscribe(data=>this.zadania=data.filter(x=>x.eventId==this.eventId));
  }

  /*Events = new Array(
    new Zadanie("Zamieść scenę", 3),
    new Zadanie("Ogarnąć pare kabli", 2, 2),
    new Zadanie("Kupić pizzę", 2,1),
    new Zadanie("Wyciścić WC"),
    new Zadanie("Zrób salto")
  );
*/


  ngOnInit() {}

  addZadanie() {
    const zadanie = new Zadanie('Stephen',2 ,2, new Date(0), new Date(0), this.eventId);
    zadanie.przydzieleniId=[];
    console.log(zadanie);
    this.zadaniaService.addZadanie(zadanie).subscribe(ret => this.zadania.push(zadanie));
  }

}
