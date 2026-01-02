
// laget av william 

// dato: 09.12.2024


let klassehoyder = [156, 178, 187, 182, 177, 165, 172,]
                 //    0   1   2   3   4   5   6

let min = Math.min(...klassehoyder)

let teller = 0


console.log(min)





//opg1
showsmin.innerHTML = "den første målte høyden er " + klassehoyder[0];

//opg2
lastvalue.innerHTML = "den siste høyden som ble målt i klasser er " + klassehoyder[6]


//opg3
let sum = klassehoyder[0] + klassehoyder[1] + klassehoyder[2] + klassehoyder[3] + klassehoyder[4] + klassehoyder[5] + klassehoyder[6];
totalt.innerHTML = "Summen av alle høyder er " + sum;

//opg4
function gjenomsnitt() {
    let gjenomsnitt = (sum / klassehoyder.length).toFixed(1);
    gjenomsnittout.innerHTML = "gjenomsnittet av alle høyder er " + gjenomsnitt
}

function nesteTall() {

    // Display the current height value from the hoyde array at the position indicated by teller
    output.innerHTML = klassehoyder[teller];
    teller++;
    if (teller >= klassehoyder.length) {
        teller = 0;
    }
}



function forigeTall() {
    // Reduce teller by one, so that the next time the function is called, it will display the previous height value in the hoyde array.
    teller--;
    if (teller < 0) {
        teller = klassehoyder.length - 1;
    }

    output.innerHTML = klassehoyder[teller];
}























