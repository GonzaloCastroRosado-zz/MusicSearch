import { Component } from '@angular/core';
import {MusicService} from './music.service';
import { Jsonp, URLSearchParams } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl:  'app/home.component.html',
  providers: [MusicService]
})
export class AppComponent { 

	public title:string = "Ommi Music";

	public identity;
	public songs;
	public errorMessage;
	public status;
	public loading;
	public pages;
	public pagePrev = 1;
	public pageNext = 1;
	public searchString: string;

	constructor(
		private _MusicService: MusicService

	){}	

	search(Textsearch: string){
		this._MusicService.search(Textsearch).subscribe(
				response => {
						this.status = response.status;
					
						if(this.status != "success"){
							this.status = "error";
						}else{
							this.songs = response.data;
						}
				}, 
				error => {
					this.errorMessage = <any>error;

					if(this.errorMessage != null){
						console.log(this.errorMessage);
						alert("Error");
					}
				}
			);
	}

}
