import { Component } from '@angular/core';
import {MusicService} from './music.service';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'my-app',
  templateUrl:  'app/home.component.html',
  providers: [MusicService]
})
export class AppComponent { 

	public title:string = "Ommi Music";
	public songs;
	public errorMessage;
	public status;

	
	constructor(
		private _MusicService: MusicService

	){}	
	

	search(Textsearch: string){

		this._MusicService.search(Textsearch).subscribe(
				response => {this.songs = response.data;
				}, 
				error => {
					this.errorMessage = <any>error;

					if(this.errorMessage != null){
						console.log(this.errorMessage);
						alert("Error");
					}
				}
		)


	}

}
