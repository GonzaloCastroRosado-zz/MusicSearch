import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class MusicService {

	public url = "http://localhost:8080/";

	constructor(private _http: Http){}

	search(search=null,page=null){
	  	if(page ==null){
	  		page=1;
	  	}

	  	let http: any;
	  	if(search !=null){
	  		http = this._http.get(this.url+"/search.php?s="+search+"?page"+page).map(res =>res.json());
	  	}
	  	return http;

	}

}