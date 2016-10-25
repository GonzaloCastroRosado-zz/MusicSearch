import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule, JsonpModule }    from '@angular/http';
import { MusicService } from "./music.service";

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[MusicService]

})
export class AppModule { }
