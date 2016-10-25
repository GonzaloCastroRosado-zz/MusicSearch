"use strict";
var Track = (function () {
    function Track(str) {
        this.artist = str.replace(/.*\/([^\/]*)\/([^\/]*)\/.*$/, "$1");
        this.album = str.replace(/.*\/([^\/]*)\/.*$/, "$1");
        this.title = str.replace(/.*\/(.*)$/, "$1").replace(/\.\w+$/, "");
        this.src = str;
    }
    return Track;
}());
exports.Track = Track;
//# sourceMappingURL=Track.js.map