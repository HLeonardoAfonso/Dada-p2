//disable toggles of styles category when clicking the ALL toggle
        
const button = document.getElementById("toggleAll");
const input = document.getElementsByClassName("sty");

button.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
        input[i].toggleAttribute("disabled");
    }
    
    findListings();
});

//disable toggles of artists category when clicking the ALL toggle

const allArtist = document.getElementById("toggleAllArtist");
const togArtist = document.getElementsByClassName("togArtist");

allArtist.addEventListener("click", () => {
    for (let i = 0; i < togArtist.length; i++) {
        togArtist[i].toggleAttribute("disabled");
    }
    
    findListings();
});

//disable toggles of artists category when clicking the ALL toggle

const allMedium = document.getElementById("toggleAllMedium");
const togMedium = document.getElementsByClassName("togMedium");

allMedium.addEventListener("click", () => {
    for (let i = 0; i < togArtist.length; i++) {
        togMedium[i].toggleAttribute("disabled");
    }
    
    findListings();
});