

//william berge grønsberg
//dato 04.11.24



//oppg 1
function opg1(navn){            //funksjonen som skriver ut navnet
    console.log(navn);
    utskrift.innerHTML = "Hei, " + navn;
}


//oppg 2
function opg2(aar){             //denne koden regner ut hvor gammel jeg er 
    console.log(aar);
    utskrift.innerHTML = 2024 - aar;    //her tar den året minus fødselsår
}


//oppg 3
function opg3(tall1, tall2){      //denne koden regner tall1 pluss tall2         
    console.log(tall1 + tall2);
    utskrift.innerHTML = Number(tall1) + Number(tall2);
}


//oppg 4 
function opg4(celsius){          //denne funksjonen som konverterer celsius til fahrenheit
    let fahrenheit = (Number(celsius) * 9/5) + 32
    utskrift.innerHTML = celsius + " grader Celsius er " + fahrenheit + " grader Fahrenheit.";
}


//oppg 5
function opg5(tall3, tall4){  //denne koden regner ut arealet av et rektangel 
    let str="2"   
    let superscriptStr = str.sup();          
    console.log(tall3 + tall4);
    utskrift.innerHTML = (Number(tall3) * Number(tall4) + "cm" +superscriptStr);
}

//oppg 6

function opg6(navn2){
Array = ["Hei", "Hallo", "God dag", "Hei på deg"]; //Variabelen Array blir lik "Hei", "Hallo", "God dag".
    let hilsen = Array[Math.floor(Math.random() * Array.length)]; //Variabelen hilsen blir lik Array[Math.floor(Math.random() * Array.length)].
 
    console.log(hilsen); //Konsollen skriver ut hilsen
    utskrift.innerHTML = hilsen + " " + navn2; //Resultatet blir hilsen og blir skrevet i HTML.
   
}


//oppg 7
function opg7(radius){ 
    let omkrets=2 * Math.PI * radius
    let SumAvrundet = omkrets.toFixed(1);    //denne koden regner ut omkretsen av en sirkel basert på radius.
    utskrift.innerHTML =  "omkrets = " + SumAvrundet;
}

//oppgave 8
function opg8(pris1, rabatt) {
    let rabat=(1 - rabatt / 100)
    
   
    utskrift.innerHTML = pris1 * rabat + "kr koster det etter rabatert pris";
}
