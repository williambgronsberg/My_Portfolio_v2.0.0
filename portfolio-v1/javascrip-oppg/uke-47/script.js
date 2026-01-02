// This function counts from 1 to 100 and displays the numbers in the HTML element with id 'out'
function tellFraEnTilhundre() {
    // Variable to store the output string
    let output = "Teller fra 1 til 100:<br>";
    // Loops from 1 to 100, logging and adding each number to the output string
    for (let i = 1; i <= 100; i++) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

// This function counts even numbers from 1 to 100 and displays them in the HTML element with id 'out'
function tellpartall() {
    // Variable to store the output string
    let output = "Teller partall fra 1 til 100:<br>";
    // Loops from 2 to 100, incrementing by 2, logging and adding each number to the output string
    for (let i = 2; i <= 100; i += 2) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

// This function counts odd numbers from 1 to 100 and displays them in the HTML element with id 'out'
function telloddetall() {
    // Variable to store the output string
    let output = "Teller oddetall fra 1 til 100:<br>";
    // Loops from 1 to 100, incrementing by 2, logging and adding each number to the output string
    for (let i = 1; i <= 100; i += 2) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

// This function counts numbers from 1 to 100 that are divisible by 5 and displays them in the HTML element with id 'out'
function tellDelMedFem() {
    // Variable to store the output string
    let output = "Teller alle tall fra 1 til 100 som kan deles med 5:<br>";
    // Loops from 5 to 100, incrementing by 5, logging and adding each number to the output string
    for (let i = 5; i <= 100; i += 5) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

// This function counts even numbers from 2 to 100 that are divisible by 5 and displays them in the HTML element with id 'out'
function tellPartallDelMedFem() {
    // Variable to store the output string
    let output = "Teller alle partall fra 2 til 100 som kan deles med 5:<br>";
    // Loops from 10 to 100, incrementing by 10, logging and adding each number to the output string
    for (let i = 10; i <= 100; i += 10) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

// This function counts from 0 to -100 and displays the numbers in the HTML element with id 'out'
function tellFranullTilminushundre() {
    // Variable to store the output string
    let output = "Teller fra 0 til -100:<br>";
    // Loops from 0 to -100, decrementing by 1, logging and adding each number to the output string
    for (let i = 0; i >= -100; i--) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML += output;
}

function tellfx() {
    // Variable to store the output string
    let output = 'Teller alle tall -10 til 10 med x^2 <br>'
    // Loops from -10 to 10, logging and adding each number to the output string
    for (let i= Number(-10); i <= 10; i++) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += "f(" + i + ")" + ", sum er nå " + i*i + "<br>";
    }
    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML = output
}

function opp2() {
    // Opg 2
    let output = "Opg 2)<br>";
    // Loops 5 times, logging and adding each number to the output string
    for (let i = 0; i < 1; i++) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += "*".repeat(5) + "<br>";
    }

    // Opg 3
    output += "<br>Opg 3)<br>";
    // Loops 4 times, logging and adding each number to the output string
    for (let i = 0; i < 4; i++) {
        // Log the current number to the console
        console.log(i);
        // Add the current number to the output string
        output += "*".repeat(5) + "<br>";
    }

    // Opg 4
    output += "<br>Opg 4)<br>";
    let pattern = [1, 3, 5];
    // Loops 5 times, logging and adding each number to the output string
    for (let i = 0; i < pattern.length; i++) {
        // Log the current number to the console
        console.log(pattern[i]);
        // Add the current number to the output string
        output += "*".repeat(pattern[i]) + "<br>";
    }

    // Opg 5
    output += "<br>Opg 5)<br>";
    pattern = [5, 3, 1];
    // Loops 3 times, logging and adding each number to the output string
    for (let i = 0; i < pattern.length; i++) {
        // Log the current number to the console
        console.log(pattern[i]);
        // Add the current number to the output string
        output += "*".repeat(pattern[i]) + "<br>";
    }

    // Ekstraoppgave (Opg 6)
    output += "<br>Opg 6)<br>";
    pattern = [5, 1, 3, 1, 5];
    // Loops 5 times, logging and adding each number to the output string
    for (let i = 0; i < pattern.length; i++) {
        // Log the current number to the console
        console.log(pattern[i]);
        // Add the current number to the output string
        output += "*".repeat(pattern[i]) + "<br>";
    }

    // Set the innerHTML of the element with id 'out' to the output string
    out.innerHTML = output;
}


