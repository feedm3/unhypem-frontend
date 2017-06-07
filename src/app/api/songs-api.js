/**
 * @author Fabian Dietenberger
 */

'use strict';

import request from 'superagent';

const songsInfo = {
    songs: [],
    timestamp: ''
};
const callbacks = [];

/**
 * Request the popular songs. Requests get cached, so there is only one
 * request.
 *
 * @private
 * @param {Function}[done] gets called when all properties are set
 */
function requestSongs(done) {
    // return songs if they are already requested
    if (songsInfo.songs.length > 0) done();

    // cache the done callback and only continue if this is the first execution
    callbacks.push(done);
    if (callbacks.length >= 2) return;

    const host = 'https://unhypem-backend.herokuapp.com/';

    request.get(host + 'charts')
        .end((err, response) => {
            if (err) throw err;

            const popular = JSON.parse(response.text);

            const songsArray = [];

            // we have to use a for loop as the songs object is not an array but an object
            for (let i = 1; i <= 50; i++) {
                const song = popular.songs[i];
                song.id = song.hypemMediaId;
                song.position = i;
                song.duration = song.durationInSeconds * 1000;
                songsArray.push(song);
            }

            songsInfo.songs = songsArray;
            songsInfo.timestamp = popular.createdDate;

            callbacks.forEach(done => done());
            callbacks.length = 0; // clear the array
        });
}

export default function getSongsInfo(callback) {
    requestSongs(function() {
        callback(songsInfo);
    });
}
