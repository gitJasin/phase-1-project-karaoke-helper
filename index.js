
// Render to DOM Functions

function renderBandNamesDisplay (band) {
    let bandName = document.createElement("div")
    bandName.classList.add("band-name-element")
    
    let h2 = document.createElement("h2")
    h2.textContent = band.name

    document.getElementsByClassName("band-names-list").appendChild(bandName)
}

// Fetches

function getAllBandNames () {
    fetch("http://localhost:3000/bands")
        .then(res => res.json())
        .then(bandNames => bandNames.forEach(renderBandNamesDisplay))
}

// Initial Render
function intialize () {
    getAllBandNames()
}
intialize()