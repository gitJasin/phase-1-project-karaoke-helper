
// Render to DOM Functions
//===========================================================
function createSongCard (song) {
    let card = document.createElement("div")
    card.classList.add("song-card")
    
    let image = document.createElement("img")
    image.classList.add("band-image")
    image.src = song.bandImage

    let songP = document.createElement("p")
    songP.classList.add("song-p")
    songP.textContent = `${song.song} - Song Likes: ${song.songLikes}`

    let bandP = document.createElement("p")
    bandP.textContent = `${song.band} - Band Likes: ${song.bandLikes}`
    bandP.classList.add("band-p")

    let bandLikeBtn = document.createElement("button")
    bandLikeBtn.classList.add("buttons")
    bandLikeBtn.textContent = "Like ❤️"
    bandLikeBtn.addEventListener("click", () => updateBandLikes(song, bandP))

    let songLikeBtn = document.createElement("button")
    songLikeBtn.classList.add("buttons")
    songLikeBtn.textContent = "Like ❤️"
    songLikeBtn.addEventListener("click", () => updatSongLikes(song, songP))

    let addToQueueBtn = document.createElement("button")
    addToQueueBtn.classList.add("buttons")
    addToQueueBtn.textContent = "Sing!"
    addToQueueBtn.addEventListener("click", () => displaySongQueue(song))

    let moreInfo = document.createElement("p")
    moreInfo.classList.add("more-info")
    moreInfo.textContent = "More Info >>"
    moreInfo.addEventListener("click", () => displayMoreSongInfo(song))

    let songSpan = document.createElement("span")
    let bandSpan = document.createElement("span")
    
    songSpan.appendChild(songLikeBtn)
    bandSpan.appendChild(bandLikeBtn)
    card.append(image, bandP, bandSpan, songP, songSpan, addToQueueBtn, moreInfo)
    document.querySelector(".song-scroller").append(card)
}



// Event Listener Functions
//===========================================================
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
    
    let showLyricsLink = document.querySelector("#song-lyrics")
    showLyricsLink.classList.add("show-lyrics-link")
    showLyricsLink.setAttribute("href", song.lyrics)
    // showLyricsLink.textContent = song.lyrics
}

function displaySongQueue (song) {
    let span = document.createElement("span")
    span.textContent = `${song.song} - ${song.band} -   `

    let fieldset = document.createElement("fieldset")
    fieldset.classList.add("song-card")

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.classList.add("button")
    deleteBtn.textContent = "🗑️"
    deleteBtn.addEventListener("click", (e) => {
        if (confirm("Are you sure you want to remove this song from the queue"))
            e.target.parentNode.parentNode.remove()
    })

    span.appendChild(deleteBtn)
    fieldset.appendChild(span) 
    document.querySelector(".song-queue").appendChild(fieldset)
}

// Event Listeners
//===========================================================
document.querySelector("#new-song-form").addEventListener("submit", handleSubmit)

// Event Handlers
//===========================================================
function handleSubmit (e) {
    e.preventDefault()

    let formData = Object.fromEntries(new FormData(e.target))
    let songObj = {
        ...formData,
        songLikes: 0,
        bandLikes: 0
    }
    createSongCard(songObj)
    addNewSong(songObj)
    
    e.target.reset()
}

// Fetches
//===========================================================
function getAllSongs () {
    fetch("http://localhost:3000/songs")
    .then(res => res.json())
    .then(songs => {
        sortSongCardsByBandName(songs)
        sortTop3SongLikes(songs)
        songs.forEach(song => createSongCard(song))
    })
}

function addNewSong (songObj) {
    fetch("http://localhost:3000/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(songObj)
    })
    .then(res => res.json())
    // .then(songs => sortSongCardsByBandName(songs))
}

function updateBandLikes (song, bandP) {
    fetch(`http://localhost:3000/songs/${song.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "bandLikes": song.bandLikes += 1
        })
    })
    .then(res => res.json())
    .then(updatedSong => bandP.textContent = `${updatedSong.band} - Band Likes: ${song.bandLikes}`)
}  

function updatSongLikes (song, songP) {
    fetch(`http://localhost:3000/songs/${song.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "songLikes": song.songLikes += 1
        })
    })
    .then(res => res.json())
    .then(updatedSong => songP.textContent = `${updatedSong.song} - Song Likes: ${song.songLikes}`)
}

// Sort Functions
//===========================================================
function sortSongCardsByBandName (songs) {
    songs.sort((a, b) => a.band.localeCompare(b.band))
}

function sortTop3SongLikes (songs) {
    const sortedSongLikes = songs.sort((a, b) => b.songLikes - a.songLikes)
    const top3Songs = sortedSongLikes.slice(0, 3)
    top3Songs.forEach(song => {
        let li = document.createElement("li")
        li.textContent = `${song.band} - Likes: ${song.songLikes}`
        document.querySelector(".top-three-songs").appendChild(li)
    })
}

// Initial Render
//===========================================================
function intialize () {
    getAllSongs()
}
intialize()