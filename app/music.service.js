"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var Track_1 = require("./Track");
var MusicService = (function () {
    function MusicService(http) {
        this.http = http;
    }
    MusicService.prototype.search = function (TextSearch) {
        //return this.http.get("search.php?s=" + TextSearch).map(this.extractData).catch(this.handleError);
        if (TextSearch != null) {
            return this.http.get("search.php?s=" + TextSearch).map(function (res) { return res.json(); }).catch(this.handleError);
        }
    };
    MusicService.prototype.extractData = function (res) {
        var body = res.json().data || {};
        var tl = [];
        for (var i = 0; i < body.length; i++) {
            tl.push(new Track_1.Track(body[i]));
        }
        return tl || {};
    };
    MusicService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : "Server error";
        // console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    MusicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MusicService);
    return MusicService;
}());
exports.MusicService = MusicService;
//# sourceMappingURL=music.service.js.map