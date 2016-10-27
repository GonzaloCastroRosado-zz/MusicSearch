import { Component } from '@angular/core';
import {MusicService} from './music.service';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Component({
  selector: 'my-search',
  templateUrl:  'app/search.component.html',
  providers: [MusicService]
})
export class SearchComponent} { 
	public songs;
	public errorMessage;
	public status;

	
	constructor(
		private _MusicService: MusicService

	){}	
	

	search(Textsearch: string){

		this._MusicService.search(Textsearch).subscribe(
				response => {this.songs = response.data;
							console.log(this.songs);
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
