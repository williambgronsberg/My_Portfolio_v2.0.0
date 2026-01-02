/**
 * Sjekk om bruker har skrevet inn en gyldig verdi i feltet for liter bensin
 * Hvis det er en gyldig verdi, beregne prisen for bensinen og oppdater kvitteringen
 */
function sjekkTall() {
    const liter = parseFloat(document.getElementById("liter").value);
    const resultat = document.getElementById("resultat");
    const prisPerLiter = 21.75;
    const rabattProsent = 10;
    const mvaProsent = 25;

    // Validering
    if (liter <= 0) {
        resultat.innerHTML = "FEILKODE1: Vi tar ikke bensin i retur eller selger mindre enn 5 liter.";
        return;
    } else if (liter < 5) {
        resultat.innerHTML = "FEILKODE4: Vi selger ikke mindre enn 5 liter bensin.";
        return;
    } else if (liter > 80) {
        resultat.innerHTML = "FEILKODE3: Tanken er ikke stor nok.";
        return;
    }

    // Beregning
    let totalPris = liter * prisPerLiter;
    let rabatt = 0;

    // Sjekk for rabatt på 10%
    if (liter >= 50) {
        rabatt = (totalPris * rabattProsent) / 100;
        totalPris -= rabatt;
    }

    // Beregning av mva
    const mva = (totalPris * mvaProsent) / 100;
    const totalInklMva = totalPris + mva;

    // Oppdater kvittering
    document.getElementById("mengde").innerHTML = `${liter} liter`;
    document.getElementById("totaltFørRabatt").innerHTML = `${(liter * prisPerLiter).toFixed(2)} kr`;
    document.getElementById("avslag").innerHTML = rabatt > 0 ? `- ${rabatt.toFixed(2)} kr` : "Ingen rabatt";
    document.getElementById("mva").innerHTML = `${mva.toFixed(2)} kr`;
    document.getElementById("totaltMEDmva").innerHTML = `${totalInklMva.toFixed(2)} kr`;

    // Suksessmelding
    resultat.innerHTML = "SUKSESS! Kvitteringen er oppdatert.";
}

