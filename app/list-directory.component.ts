import { Component } from '@angular/core';
import {ListService} from './list.service';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Component({
  selector: 'my-list-directory',
  templateUrl:  'app/list-directory.component.html',
  providers: [ListService]
})
export class SearchComponent} { 
	public songs;
	public errorMessage;
	public status;

	
	constructor(
		private _ListService ListService

	){}	
	

	search(){

		this._ListService.search().subscribe(
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
