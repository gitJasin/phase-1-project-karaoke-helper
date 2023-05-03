
// Render to DOM Functions

function renderBandNameCard (band) {
    let bandCard = document.createElement("div")
    bandCard.classList.add("band-name-element")
    
    let h2 = document.createElement("h2")
    h2.textContent = band.name
}