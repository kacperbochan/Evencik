import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadanie-edit',
  templateUrl: './zadanie-edit.component.html',
  styleUrls: ['./zadanie-edit.component.css']
})
export class ZadanieEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  wszyscy:string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  przypisani:string[] = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
