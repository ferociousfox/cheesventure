import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Player } from './player.model';

import { AppComponent } from './app.component';
import { TavernComponent } from './tavern/tavern.component';
import { StartComponent } from './start/start.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TavernComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
