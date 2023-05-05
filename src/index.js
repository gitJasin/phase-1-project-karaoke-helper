
// Render to DOM Functions
//===========================================================
// NOT SURE IF I WILL USE THIS 
// function renderBandNames (band) {
//     let bandName = document.createElement("div")
//     bandName.classList.add("band-name-element")
    
//     let h3 = document.createElement("h3")
//     h3.textContent = band.band

//     bandName.appendChild(h3)
//     document.querySelector(".band-scroller").append(bandName)
// }

function createSongCard (song) {
    let songName = document.createElement("div")
    songName.classList.add("song-name-element")

    let h3 = document.createElement("h3")
    h3.textContent = song.song

    songName.appendChild(h3)
    document.querySelector(".song-scroller").append(songName)
}

// Fetches
//===========================================================
// NOT SURE IF I WILL USE THIS
// function getAllBandNames () {
//     fetch("http://localhost:3000/songs")
//         .then(res => res.json())
//         .then(songs => songs.forEach(band => renderBandNames(band)))
// }

function getAllSongs () {
    fetch("http://localhost:3000/songs")
    .then(res => res.json())
    .then(songs => songs.forEach(song => createSongCard(song)))
}

// Initial Render
//===========================================================
function intialize () {
    // getAllBandNames()
    getAllSongs()
}
intialize()