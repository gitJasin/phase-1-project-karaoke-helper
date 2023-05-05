
// Render to DOM Functions
function renderBandNames (band) {
    let bandName = document.createElement("div")
    bandName.classList.add("band-name-element")
    
    let h3 = document.createElement("h3")
    h3.textContent = band.band

    bandName.appendChild(h3)
    document.querySelector(".band-scroller").append(bandName)
}

// Fetches
function getAllBandNames () {
    fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(songs => songs.forEach(band => renderBandNames(band)))
}

// Initial Render
function intialize () {
    getAllBandNames()
}
intialize()