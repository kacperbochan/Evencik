import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WolontariuszeService } from 'src/app/services/wolontariusze/wolontariusze.service';
import { Wolontariusz } from 'src/types/Wolontariusz';

@Component({
  selector: 'app-zadanie-edit',
  templateUrl: './zadanie-edit.component.html',
  styleUrls: ['./zadanie-edit.component.css']
})
export class ZadanieEditComponent implements OnInit {

  wszyscy:string[]=[];
  przypisani:string[]=[];

  wszyscyWolo:Wolontariusz[]=[];
  przypisaniWolo:Wolontariusz[]=[];


  constructor(private woloService: WolontariuszeService) {
    woloService.getWolontariuszeAsynch().subscribe(data=>data.map(osoba=>{
    this.wszyscy.push(osoba.imie);
    this.wszyscyWolo.push(osoba)}));
   }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if(event.container.data===this.wszyscy){
        this.array_move(this.wszyscyWolo, event.previousIndex, event.currentIndex);
      }
      else{
        this.array_move(this.przypisaniWolo, event.previousIndex, event.currentIndex);
      }
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(event.container.data===this.wszyscy){
        this.array_transfer(this.przypisaniWolo,this.wszyscyWolo, event.previousIndex, event.currentIndex);
      }
      else{
        this.array_transfer(this.wszyscyWolo,this.przypisaniWolo, event.previousIndex, event.currentIndex);
      }
    }
  }

  private array_move(arr: Wolontariusz[], old_index: number, new_index:number) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }
  private array_transfer(oldArr: Wolontariusz[], newArr: Wolontariusz[], old_index: number, new_index:number) {
    newArr.splice(new_index, 0, oldArr.splice(old_index, 1)[0]);
  }
}
