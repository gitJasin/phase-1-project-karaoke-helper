
// Render to DOM Functions
function renderBandNames (band) {
    let bandName = document.createElement("div")
    bandName.classList.add("band-name-element")
    
    let h2 = document.createElement("h2")
    h2.textContent = band.name

    document.querySelector(".band-names-list").appendChild(bandName)
    document.querySelector(".band-name-element").append(h2)
}

// Fetches
function getAllBandNames () {
    fetch("http://localhost:3000/bands")
        .then(res => res.json())
        .then(bands => bands.forEach(band => renderBandNames(band)))
}

// Initial Render
function intialize () {
    getAllBandNames()
}
intialize()