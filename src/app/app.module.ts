import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ZadanieComponent,
    EventComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
