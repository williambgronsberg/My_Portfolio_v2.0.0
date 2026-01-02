// Funksjonen som beregner den magiske verdien og returnerer spådommen
function spadom(navn, alder, hoyde) {
    // Beregn den magiske verdien
    const magiskVerdi = (alder * hoyde) - 3;

    // Bestem spådom basert på den magiske verdien
    if (magiskVerdi > 500) {
        return `Det vil gå deg godt her i verden, ${navn}! For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345.`;
    } else {
        return `Stakkars deg, ${navn} du er kokt. ingen rizz bro, og nå må du betale inn 100 kr til følgende kontonummer: 1234.12.12345.`;
    }
}

// Funksjonen som henter data fra skjemaet og viser spådommen
function genererSpadom() {
    // Hent verdier fra inputfeltene
    const navn = document.getElementById("navn").value;
    const alder = parseInt(document.getElementById("alder").value);
    const hoyde = parseInt(document.getElementById("hoyde").value);

    // Generer spådommen ved å kalle spadom-funksjonen
    const spadomResultat = spadom(navn, alder, hoyde);

    // Vis spådommen på websiden
    document.getElementById("spadom-resultat").innerHTML = spadomResultat;
}

function briber() {
    document.getElementById("spadom-resultat").innerHTML = "glem det, jeg tror du kommer til å ha en god dag. <br>og nå må du betale inn 1000 kr til følgende <br>kontonummer: 1234.12.12345."; 

}