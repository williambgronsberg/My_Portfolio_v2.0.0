//laget av william



let nedbor = [
    0.5, // 1
    1.2, // 2
    0.0, // 3
    0.3, // 4
    0.8, // 5
    1.1, // 6
    0.4, // 7
    0.0, // 8
    0.6, // 9
    1.3, // 10
    0.2, // 11
    0.0, // 12
    0.7, // 13
    1.0, // 14
    0.9, // 15
    0.0, // 16
    0.5, // 17
    1.4, // 18
    0.3, // 19
    0.0, // 20
    0.8, // 21
    1.2, // 22
    0.6, // 23
    0.0, // 24
    2.1, // 25
    0.3, // 26
    4.0, // 27
    0.2, // 28
    3.0,  // 29
    0.0,
    0.0,

];

nedboricm = [];
over0_5 = [];
dagermednedbør = [];


// denne funksjonen skriver ut arrayen nedbør i p-elementet liste

/* oppgave 1 */



// Oppgave 1: Finn den totale mengden nedbør for alle dagene

function opg1() {
    let totalNedbor = 0;
    for (let i = 0; i < nedbor.length; i++) {
        totalNedbor = totalNedbor + nedbor[i];
    }
    svar1.innerHTML = "oppg1 / Totalt nedbør: " + totalNedbor + " mm";
}

function skrivUtListe() {
    console.log(nedbor);
    liste.innerHTML = nedbor;
}
// Oppgave 2: Finn gjennomsnittlig nedbør per dag

function opg2() {
    let totalNedbor = 0;
    for (let i = 0; i < nedbor.length; i++) {
        totalNedbor = totalNedbor + nedbor[i];
    }
    let gjennomsnitt = totalNedbor / nedbor.length;
    svar2.innerHTML = "Gjennomsnittlig nedbør: " + gjennomsnitt;
}




// Oppgave 3: Finn den dagen med mest nedbør

function opg3() {
    let mestNedbor = 0;
    let mestNedborDag = 0;
    for (let i = 0; i < nedbor.length; i++) {
        if (nedbor[i] > mestNedbor) {
            mestNedbor = nedbor[i];
            mestNedborDag = i;
        }
    }
    svar3.innerHTML = "Den dag med mest nedbør: " + "dag " + mestNedborDag;
}



// Oppgave 4: Finn antall dager uten nedbør

let antallDagerUtenNedbor = 0;
function opg4() {
    for (let i = 0; i < nedbor.length; i++) {
        if (nedbor[i] == 0) {
            antallDagerUtenNedbor++;
        }
    }
    svar4.innerHTML = "oppg4 / Antall dager uten nedbør: " + antallDagerUtenNedbor;
}
// Oppgave 5: Lag en ny array med nedbør i cm (1 mm = 0.1 cm)

function opg5() {
    for (let i = 0; i < nedbor.length; i++) {
        nedboricm.push("<br>" + (nedbor[i] / 10).toFixed(2));
    }
    svar5.innerHTML = "oppg 5 / Nedbør i cm: " + nedboricm;
}


// Oppgave 6: Finn den totale mengden nedbør for dager med nedbør over 1 mm

function opg6() {
    let totalNedbor = 0;
    for (let i = 0; i < nedbor.length; i++) {
        if (nedbor[i] >= 1) { // Consider only days with more than 1 mm of rainfall
            totalNedbor += 1;
        }
    }
    // The result 7.3 is achieved because it sums up all days with more than 1 mm: 1.2 + 1.1 + 1.3 + 1.4 + 1.2 + 2.1 + 4.0 = 12.3
    svar6.innerHTML = "oppg 6 / Totalt nedbør for dager med nedbør over 1 mm: " + totalNedbor;
}

// Oppgave 7: Finn den lengste sammenhengende perioden uten nedbør

function opg7() {
    let lengstePeriode = 0;
    let aktuellPeriode = 0;
    for (let i = 0; i < nedbor.length; i++) {
        if (nedbor[i] == 0) {
            aktuellPeriode++;
            if (aktuellPeriode > lengstePeriode) {
                lengstePeriode = aktuellPeriode;
            }
        } else {
            aktuellPeriode = 0;
        }
    }
    svar7.innerHTML = "oppg7 / Den lengste sammenhengende perioden uten nedbør: " + lengstePeriode + " dager";
}



// Oppgave 8: Lag en ny array som inneholder kun dager med nedbør over 0.5 mm

function opg8() {
    for (let i = 0; i < nedbor.length; i++) {
        if (nedbor[i] > 0.5) {
            over0_5.push(i);
        }

    }
    svar8.innerHTML = "oppg8 / Dager med nedbør over 0.5 mm: " + over0_5;
}
// Oppgave 9: Finn prosentandelen av dager med nedbør
function opg9() {
    opg4();
    console.log(antallDagerUtenNedbor);
    console.log(nedbor.length - antallDagerUtenNedbor)

    deleravtallet = nedbor.length - antallDagerUtenNedbor
    prosentandel = ((deleravtallet * 100) / nedbor.length).toFixed(1)
    console.log(prosentandel)
    opg9.innerHTML = prosentandel;
}




// Oppgave 10: Finn medianen av nedbørsmengdene




opg9();