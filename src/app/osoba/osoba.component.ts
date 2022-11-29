import { Component, Input, OnInit } from '@angular/core';
import { Wolontariusz } from '../../types/Wolontariusz';

@Component({
  selector: '[app-osoba]',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent implements OnInit {

  edit:boolean = false;
  @Input() wolontariusz: Wolontariusz;
  @Input() id: number;
  copy: Wolontariusz;

  constructor() {
  }

  ngOnInit(): void {
    this.copy=new Wolontariusz("jurek","koks",690420420,28)
  }

  switchEdit(): void{
    this.copy.Copy(this.wolontariusz);
    this.edit = true;
  }
  save(){
    this.edit = false;
  }
  cancel(){
    this.wolontariusz.Copy(this.copy) ;
    this.edit=false;
  }

  verifyData(formValues: object): void {

  }
}
