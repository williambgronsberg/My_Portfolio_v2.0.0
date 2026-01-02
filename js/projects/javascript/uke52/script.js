// Deklarer en array som inneholder bildelementer
let bilder = ["<img src=bilde/bilde1.jpeg></img>", "<img src=bilde/bilde2.jpeg></img>", "<img src=bilde/bilde3.jpeg></img>"];
let btext = [ "bilde 1", "bilde 2", "bilde 3"];// Deklarer en variabel som holder p  til hvilket bilde som vises n 
teller = 0;

// Deklarer en event listener for  vindoet som kalles n r siden lastes
onload = Function 
// Deklarerer en funksjon som skifter til neste bilde
function nesteBilde() {
    //  k tellingen med 1
    teller++;
    // Hvis vi har n dd til siste bilde i arrayen, starter vi p  nytt fra starten
    if (teller >= bilder.length) {

        teller = 0;
    }
    // Oppdaterer output elementet med nytt bilde
    output.innerHTML = bilder[teller];
    bildetext.innerHTML = btext[teller];
    console.log(btext[teller]);
}

// Deklarerer en funksjon som skifter til forrige bilde
function foreBilde() {
    // Reduserer tellingen med 1
    teller--;
    // Hvis vi har n dd til f rste bilde i arrayen, starter vi p  nytt fra slutten
    if (teller < 0) {
        teller = bilder.length - 1;
    }
    // Oppdaterer output elementet med nytt bilde
    output.innerHTML = bilder[teller];
    bildetext.innerHTML = btext[teller];
    console.log(btext[teller]);
}

// Deklarerer en funksjon som starter slideshowen
function startSlideshow() {
    // Oppretter en interval som kalles hver 3. sekund
    intervalId = setInterval(nesteBilde, 3000); // 1000 ms = 1 second
}

// Deklarerer en funksjon som stopper slideshowen
function stopSlideshow() {
    // Stopper intervallet
    clearInterval(intervalId);
}

// Deklarerer en event listener for  vindoet som kalles n r siden lastes
window.onload = function() {
    // Oppdaterer output elementet med det f rste bildet
    document.getElementById('output').innerHTML = bilder[teller];
    // Starter slideshowen
    startSlideshow();

    // Deklarerer en variabel som holder p  output elementet
    const outputp = document.getElementById('output');
    // Deklarerer en event listener som stopper slideshowen n r musepekeren er over output elementet
    outputp.addEventListener('mouseover', stopSlideshow);
    // Deklarerer en event listener som starter slideshowen n r musepekeren ikke lenger er over output elementet
    outputp.addEventListener('mouseout', startSlideshow);
};
