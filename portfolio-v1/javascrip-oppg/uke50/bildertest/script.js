
// laget av william 

// dato: 09.12.2024


let bilder = [ "<img src=img/tesla.jpg>", "<img src=img/tesla2.jpg>", "<img src=img/mood.png>"];
                 //    0   1   2   3   4   5   6

teller = 0
function nesteTall() {

    // Display the current height value from the hoyde array at the position indicated by teller
    tellertall.innerHTML = bilder[teller];
    teller++;
    if (teller >= bilder.length) {
        teller = 0;
    }
}



function forigeTall() {
    // Reduce teller by one, so that the next time the function is called, it will display the previous height value in the hoyde array.
    teller--;
    if (teller < 0) {
        teller = bilder.length - 1;
    }

    tellertall.innerHTML = bilder[teller];
}

let bildenr = 0;
function nesteBilde() {
    bilde.innerHTML = bilder[bildenr];
    bildenr++;
    if (bildenr >= bilder.length) {
        bildenr = 0;
    }
}


function forrigeBilde() {
    bildenr--;
    if (bildenr < 0) {
        bildenr = bilder.length - 1;
    }
    bilde.innerHTML = bilder[bildenr];
}




















