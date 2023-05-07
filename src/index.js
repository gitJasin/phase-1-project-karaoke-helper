
// Render to DOM Functions
//===========================================================
function createSongCard (song) {
    let card = document.createElement("div")
    card.classList.add("song-card")
    
    let image = document.createElement("img")
    image.classList.add("band-image")
    image.src = song.bandImage

    let songP = document.createElement("p")
    songP.classList.add("song=p")
    songP.textContent = song.song

    let bandP = document.createElement("p")
    bandP.textContent = song.band
    bandP.classList.add("band-p")

    let bandLikeBtn = document.createElement("button")
    bandLikeBtn.classList.add("buttons")
    bandLikeBtn.textContent = "Like Band ❤️"
    bandLikeBtn.addEventListener("click", () => console.log("clicked"))

    let songLikeBtn = document.createElement("button")
    songLikeBtn.classList.add("buttons")
    songLikeBtn.textContent = "Like Song ❤️"
    songLikeBtn.addEventListener("click", () => console.log("clicked"))

    let addToQueueBtn = document.createElement("button")
    addToQueueBtn.classList.add("buttons")
    addToQueueBtn.textContent = "Sing!"
    addToQueueBtn.addEventListener("click", () => displaySongQueue(song))

    let moreInfo = document.createElement("p")
    moreInfo.classList.add("more-info")
    moreInfo.textContent = "More Info >>"
    moreInfo.addEventListener("click", () => displayMoreSongInfo(song))

    // let queueSpan = document.createElement("span")
    let songSpan = document.createElement("span")
    let bandSpan = document.createElement("span")
    
    // queueSpan.appendChild(addToQueueBtn)
    songSpan.appendChild(songLikeBtn)
    bandSpan.appendChild(bandLikeBtn)
    card.append(image, bandP, bandSpan, songP, songSpan, addToQueueBtn, moreInfo)
    document.querySelector(".song-scroller").append(card)
}

function displayMoreSongInfo (song) {
    let showbandName = document.querySelector(".band-name")
    showbandName.classList.add("show-band-name")
    showbandName.textContent = song.band

    let showSongName = document.querySelector(".song-name")
    showSongName.classList.add("show-song-name")
    showSongName.textContent = song.song

    let showSongVideo = document.querySelector(".song-video")
    showSongVideo.classList.add("show-song-video")
    showSongVideo.src = song.video
    
    let showLyricsLink = document.querySelector(".song-lyrics")
    showLyricsLink.classList.add("show-lyrics-link")
    showLyricsLink.setAttribute("href", song.lyrics)
    // showLyricsLink.textContent = song.lyrics
}

function displaySongQueue (song) {
    let span = document.createElement("span")
    let li = document.createElement("li")
    let deleteBtn = document.createAttribute("button")

    span.textContent = `${song.song} - ${song.band}  `
    deleteBtn.textContent = "🗑️"

    span.appendChild(deleteBtn)
    li.appendChild(span)
    document.querySelector(".song-queue").appendChild(li)
}
// Event Listener Functions
//===========================================================

// Fetches
//===========================================================
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