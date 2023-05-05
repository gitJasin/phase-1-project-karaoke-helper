
// Render to DOM Functions
function renderBandNames (songs) {
    let bandName = document.createElement("div")
    bandName.classList.add("band-name-element")
    
    let h3 = document.createElement("h3")
    h3.textContent = songs.band

    document.querySelector(".band-names-list").append(bandName)
    document.querySelector(".band-name-element").appendChild(h3)
}

// Fetches
function getAllBandNames () {
    fetch("http://localhost:3000/bands")
        .then(res => res.json())
        .then(songs => songs.forEach(band => renderBandNames(band)))
}

// Initial Render
function intialize () {
    getAllBandNames()
}
intialize()