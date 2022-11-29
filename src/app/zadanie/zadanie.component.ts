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
  copy: Zadanie;

  constructor() {
  }

  ngOnInit(): void {
    this.copy=new Zadanie("",-1,-1)
  }

  switchEdit(): void{
    this.copy.copy(this.zadanie);
    this.edit = true;
  }
  save(){
    this.edit = false;
  }
  cancel(){
    this.zadanie.copy(this.copy) ;
    this.edit=false;
  }

  verifyData(formValues: object): void {

  }
}
