import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class MusicService {

	public url = "http://localhost:8080/";

	constructor(private http: Http){}

	search(TextSearch : string){
	  	if(TextSearch !=null){
	  		return this.http.get(this.url+"/search.php?s="+TextSearch).map(res =>res.json());
	  	}
	}

}