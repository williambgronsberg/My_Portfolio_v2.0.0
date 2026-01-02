

//denne siden er lager av William

//dato: 31.10.2024



//laget i sammenheng med grunleggene funsjoner i javascript



//oppgave 1
//denne funksjonen gjør at når den får kallet: hilsen sender den til outputten at den sakl skrive i html hei + parameteret
function hilsen(navn){
    output.innerHTML = "hei "+navn;
}


function sette_sammen(nummer1,nummer2){

    const tall1= parseFloat(nummer1);// disse gjør koden om stringen om til en tall verdi
    const tall2= parseFloat(nummer2);
    sum.innerHTML = "dette er svaret:" + (tall1+tall2);

}

function gange_sammen(nummer3,nummer4){

    const tall1= parseFloat(nummer3);
    const tall2= parseFloat(nummer4);
    sum2.innerHTML = "dette er svaret:" + (tall1-tall2);

}




let tall1=0;
let tilBruker = "";

function adere(tall){
    tall1 = tall1 + tall;
    tilBruker = tilBruker + tall1 + "<br>";
    resultat.innerHTML = tilBruker;
}





let tall2=101;
let tilBruker2 = "";

function minus(tall6){
    tall2 = tall2 - tall6;
    tilBruker2 = tilBruker2 + tall2 + "<br>";
    resultat2.innerHTML = tilBruker2;
}
