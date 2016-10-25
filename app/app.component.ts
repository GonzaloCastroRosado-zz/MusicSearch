import { Component } from '@angular/core';
import {MusicService} from './music.service';

@Component({
  selector: 'my-app',
  templateUrl:  'app/home.component.html',
  providers: [MusicService]
})
export class AppComponent { 

	public title:string = "Ommi Music";

	constructor(
		private _MusicService: MusicService

	){}	

	ngOnInit(){
		this.getSearchMusic();
	}

	getSearchMusic(){
		
	}
}
