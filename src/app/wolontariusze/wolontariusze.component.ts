import { Component, Input, OnInit } from '@angular/core';
import { Wolontariusz } from '../../types/Wolontariusz';

@Component({
  selector: 'app-wolontariusze',
  templateUrl: './wolontariusze.component.html',
  styleUrls: ['./wolontariusze.component.css']
})
export class WolontariuszeComponent implements OnInit {

  selected: number = -1;

  Wolos = new Array(
    new Wolontariusz("Jurek","Kowal",65476, 3),
    new Wolontariusz("Spawacz","YOLO", 2, 2),
    new Wolontariusz("troll","ameba", 2,1)
  );

  constructor() { }

  ngOnInit(): void {
  }

  selectWolo(i:number):void{
    this.selected = i;
  }

}
