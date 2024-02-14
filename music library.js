const library = {
    tracks: {
        t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
        t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003"},
        t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952"}
    },
    playlists: {
        p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
        p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
    },
    printPlaylists: function() {
        for (const playlistId in this.playlists) {
            const playlist = this.playlists[playlistId];
            console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
        }
    },
    printTracks: function() {
        for (const trackId in this.tracks) {
            const track = this.tracks[trackId];
            console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
        }
    },
    printPlaylist: function(playlistId) {
        const playlist = this.playlists[playlistId];
        console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
        for (const trackId of playlist.tracks) {
            const track = this.tracks[trackId];
            console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
        }
    },
    addTrackToPlaylist: function(trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
    },
    addTrack: function(name, artist, album) {
        const id = `t${Object.keys(this.tracks).length + 1 < 10 ? '0' : ''}${Object.keys(this.tracks).length + 1}`;
        this.tracks[id] = { id, name, artist, album };
    },
    addPlaylist: function(name) {
        const id = `p${Object.keys(this.playlists).length + 1 < 10 ? '0' : ''}${Object.keys(this.playlists).length + 1}`;
        this.playlists[id] = { id, name, tracks: [] };
    }
};