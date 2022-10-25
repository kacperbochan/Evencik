import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-zadanie]',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent implements OnInit {

  @Input() Zadanie: any;

  constructor() { }

  ngOnInit(): void {}

}
