
// Render to DOM Functions
//===========================================================
function createSongCard (song) {
     let card = document.createElement("div")
    card.classList.add("song-card")
    
    let image = document.createElement("img")
    image.classList.add("band-image")
    image.src = song.bandImage

    let h3 = document.createElement("h3")
    h3.textContent = song.song

    let h4 = document.createElement("h4")
    h4.textContent = song.band

    let bandLikeBtn = document.createElement("button")
    bandLikeBtn.classList.add("band-like-btn")
    bandLikeBtn.textContent = "Like ❤️"
    bandLikeBtn.addEventListener("click", () => console.log("clicked"))

    let songLikeBtn = document.createElement("button")
    songLikeBtn.classList.add("song-like-btn")
    songLikeBtn.textContent = "Like ❤️"
    songLikeBtn.addEventListener("click", () => console.log("clicked"))

    let addToQueueBtn = document.createElement("button")
    addToQueueBtn.classList.add("add-queue-btn")
    addToQueueBtn.textContent = "Sing!"
    addToQueueBtn.addEventListener("click", () => console.log("clicked"))

    let moreInfo = document.createElement("p")
    moreInfo.classList.add("more-info")
    moreInfo.textContent = "More Info >>"
    moreInfo.addEventListener("click", () => console.log("clicked"))

    card.append(image, h3, h4, bandLikeBtn, songLikeBtn, addToQueueBtn, moreInfo)
    document.querySelector(".song-scroller").append(card)
}

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