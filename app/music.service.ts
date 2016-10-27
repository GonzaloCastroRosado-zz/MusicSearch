import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import { Track } from "./Track";


@Injectable()
export class MusicService {

	constructor(private http: Http){}

	search(TextSearch : string){
	  	if(TextSearch !=null){
            return this.http.get("search.php?s=" + TextSearch).map(res =>res.json()).catch(this.handleError);

	  	}
	}


	private extractData(res: Response) {
        let body = res.json().data || {};
        let tl: Track[] = [];
        for (let i = 0; i < body.length; i++ ) {
            tl.push(new Track(body[i]));
        }
        return tl || { };
    }

	private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
            // console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}