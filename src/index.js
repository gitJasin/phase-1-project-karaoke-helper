
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

    let bandNameDiv = document.createElement("div")
    let songNameDiv = document.createElement("div")

    let bandLikeBtn = document.createElement("button")
    bandLikeBtn.classList.add("buttons")
    bandLikeBtn.textContent = "Like ❤️"
    bandLikeBtn.addEventListener("click", () => console.log("clicked"))

    let songLikeBtn = document.createElement("button")
    songLikeBtn.classList.add("buttons")
    songLikeBtn.textContent = "Like ❤️"
    songLikeBtn.addEventListener("click", () => console.log("clicked"))

    let addToQueueBtn = document.createElement("button")
    addToQueueBtn.classList.add("buttons")
    addToQueueBtn.textContent = "Sing!"
    addToQueueBtn.addEventListener("click", () => console.log("clicked"))

    let moreInfo = document.createElement("p")
    moreInfo.classList.add("more-info")
    moreInfo.textContent = "More Info >>"
    moreInfo.addEventListener("click", () => console.log("clicked"))

    let queueSpan = document.createElement("span")
    let songSpan = document.createElement("span")
    let bandSpan = document.createElement("span")
    
    queueSpan.appendChild(addToQueueBtn)
    songSpan.appendChild(songLikeBtn)
    bandSpan.appendChild(bandLikeBtn)
    bandNameDiv.append()
    card.append(image, h4, h3, bandSpan, songSpan, queueSpan, moreInfo)
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