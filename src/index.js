
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
    addToQueueBtn.addEventListener("click", () => console.log("clicked"))

    let moreInfo = document.createElement("p")
    moreInfo.classList.add("more-info")
    moreInfo.textContent = "More Info >>"
    moreInfo.addEventListener("click", () => console.log("clicked"))

    // let queueSpan = document.createElement("span")
    let songSpan = document.createElement("span")
    let bandSpan = document.createElement("span")
    
    // queueSpan.appendChild(addToQueueBtn)
    songSpan.appendChild(songLikeBtn)
    bandSpan.appendChild(bandLikeBtn)
    card.append(image, bandP, bandSpan, songP, songSpan, addToQueueBtn, moreInfo)
    document.querySelector(".song-scroller").append(card)
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