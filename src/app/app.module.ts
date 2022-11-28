import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { WolontariuszEditComponent } from './forms/wolontariusz/wolontariusz-edit/wolontariusz-edit.component';
import { WolontariuszCreateComponent } from './forms/wolontariusz/wolontariusz-create/wolontariusz-create.component';
import { EventCreateComponent } from './forms/event/event-create/event-create.component';
import { EventEditComponent } from './forms/event/event-edit/event-edit.component';
import { ZadanieEditComponent } from './forms/zadanie/zadanie-edit/zadanie-edit.component';
import { ZadanieCreateComponent } from './forms/zadanie/zadanie-create/zadanie-create.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ZadanieComponent,
    EventComponent,
    WolontariuszEditComponent,
    WolontariuszCreateComponent,
    EventCreateComponent,
    EventEditComponent,
    ZadanieEditComponent,
    ZadanieCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    ScrollingModule,
    RouterModule.forRoot([
      { path: '', component: EventComponent, pathMatch: 'full' },
      { path: 'event', component: EventComponent },
      { path: 'event/create', component: EventCreateComponent },
      { path: 'event/edit', component: EventEditComponent },
      { path: 'wolontariusz/create', component: WolontariuszCreateComponent },
      { path: 'wolontariusz/edit', component: WolontariuszEditComponent },
      { path: 'zadanie/create', component: ZadanieCreateComponent },
      { path: 'zadanie/edit', component: ZadanieEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
