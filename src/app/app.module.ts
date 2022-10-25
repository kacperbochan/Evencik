import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZadanieComponent } from './src/app/zadanie/zadanie.component';
import { EventComponent } from './src/app/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    ZadanieComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
