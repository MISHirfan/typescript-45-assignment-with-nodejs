function make_album(artist_name: string, album_title: string, tracks?:  number){
let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

if(tracks !== undefined){
    album.tracks = tracks;
}

return album;

}

// calling three function and creating 3 variables with  different values

let album1 = make_album("mehwish", "album title 1");

let album2 = make_album("zouyal", "album title 2");

let album3 = make_album("bali", "album title 3", 10);

// print the values of our object created my function

console.log(album1);

console.log(album2);

console.log(album3);

