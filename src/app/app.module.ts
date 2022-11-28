import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { WolontariuszeComponent } from './wolontariusze/wolontariusze.component';
import { OsobaComponent } from './osoba/osoba.component';

@NgModule({
  declarations: [
    AppComponent,
    ZadanieComponent,
    EventComponent,
    NavbarComponent,
    WolontariuszeComponent,
    OsobaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: EventComponent, pathMatch: 'full' },
      { path: 'Wolo', component: WolontariuszeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
