import { Component, Input, OnInit } from '@angular/core';
import { Zadanie } from '../../types/Zadanie';

@Component({
  selector: '[app-zadanie]',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent implements OnInit {

  edit:boolean = false;
  @Input() zadanie: Zadanie;
  @Input() id: number;

  constructor() {
  }

  ngOnInit(): void {

  }

}
