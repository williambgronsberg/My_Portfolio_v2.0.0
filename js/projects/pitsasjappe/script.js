let pizza = ["velg pizza her", "Hawaii", "Biff", "Pepperoni", "Kebab", "Vegetar", "Kylling"];
let prisPrizza = [0, 150, 160, 170, 180, 4500000, 200];
let antallpizza = ["antall",1, 2, 3, 4,]

let drikke = ["Cola", "Fanta", "Sprite", "Vann", "Solo", "vodka", "whisky"];
let prisDrikke = [30, 30, 30, 2000, 30, 0,0];

let tilbehor = ["ingen","dipp", "ekstra kjøtt"];
let prisTilbehor = [0,10, 20];


let pizzaBilder = [
    "",
    "<img src=../../../assets/images/projects/pizzasjappe/pizza/hawaii.jpg >",
    "<img src=../../../assets/images/projects/pizzasjappe/biff.jpg > ",
    "<img src=../../../assets/images/projects/pizzasjappe/pepperoni.jpg>"
    ];



function visPizzaer() {
    let dropdownHTML = "<select id='pizzaSelect' onchange='antallpizzafunction()' onchange='forhandsvisPizza()' >";
    for (let i = 0; i < pizza.length; i++) {
        dropdownHTML += "<option value='" + i + "'>" + pizza[i] +  "</option>";
    }
    dropdownHTML += "</select>";
    document.getElementById("pizzaer").innerHTML = dropdownHTML;
}


function antallpizzafunction() {
    let dropdownHTML = "<select id='antallpizzafunc' onchange='forhandsvisPizza()' onchange='antallpizzafunction()'>";
    for (let i = 0; i < antallpizza.length; i++) {
        dropdownHTML += "<option value='" + i + "'>" + antallpizza[i] + "</option>";
    }
    dropdownHTML += "</select>";
    document.getElementById("antallpiz").innerHTML = dropdownHTML;
}

function forhandsvisPizza() {
    let pizzaValg = document.getElementById("pizzaSelect").value;
    document.getElementById("pizzaVisning").innerHTML =  pizzaBilder[pizzaValg];
}


function visDrikke() {
    let dropdownHTML = "<select id='drikkeSelect'>";
    for (let i = 0; i < drikke.length; i++) {
        dropdownHTML += "<option value='" + i + "'>" + drikke[i] + " " + prisDrikke[i] + "kr" + "</option>";
    }
    dropdownHTML += "</select>";
    document.getElementById("drikker").innerHTML = dropdownHTML;
}

function visTilbehor() {
    let dropdownHTML = "<select id='tilbehorSelect'>";
    for (let i = 0; i < tilbehor.length; i++) {
        dropdownHTML += "<option value='" + i + "'>" + tilbehor[i] + " " + prisTilbehor[i] + "kr" + "</option>";
    }
    dropdownHTML += "</select>";
    document.getElementById("Tilbehor").innerHTML = dropdownHTML;
}

function kvittering() {
    let pizzaValg       =   document.getElementById("pizzaSelect").value;
    let antallpiz       =   document.getElementById("antallpizzafunc").value; // Henter verdien brukeren har valgt
    let drikkeValg      =   document.getElementById("drikkeSelect").value;
    let tilbehorValg    =   document.getElementById("tilbehorSelect").value;

    let pizzaPris       =   prisPrizza[pizzaValg] * parseInt(antallpiz); // Konverterer til tall
    let drikkePris      =   prisDrikke[drikkeValg];
    let tilbehorPris    =   tilbehorValg                ?   prisTilbehor[tilbehorValg] : 0;

    let total           =   pizzaPris                   +   drikkePris          + tilbehorPris;

    console.log(pizzaPris);
    console.log(drikkePris);
    console.log(tilbehorPris);
    console.log(total);
    pizzakvit.innerHTML = "pizza" + pizzaPris + "x" + antallpiz;
    pizzakvit.innerHTML = "pizza" + pizzaPris + "x" + antallpiz;
    pizzakvit.innerHTML = "pizza" + pizzaPris + "x" + antallpiz;
    pizzakvit.innerHTML = "pizza" + pizzaPris + "x" + antallpiz;

}

visPizzaer();
visDrikke();
visTilbehor();
