function kast() {
    return Math.floor(Math.random() * 6) + 1;
}

// Skriv ut alle de tilfeldige tallene.
function kastTerning() {
    let allekasta = [];  // Array to store dice rolls
    let sum = 0;
    let partall = 0;
    let oddetall = 0;
    let teller = " ";
    let funnet = false;
    let tall1 = 0;
    let tall2 = 0;
    let tall3 = 0;
    let tall4 = 0;
    let tall5 = 0;
    let tall6 = 0;
    let mestKastet = [0, 0]; // Array to store the most thrown number

    // Loop to roll the dice 10 times
    for (let i = 0; i < 10; i++) {
        let terning = kast();
        allekasta.push(terning);  // Add the roll to the array
        sum += terning;           // Add the roll to the sum
        console.log(terning);

        // Count even and odd numbers
        if (terning % 2 == 0) {
            partall++;
        } else {
            oddetall++;
        }

        // Find the position of the first "6"
        if (terning == 6 && !funnet) {
            teller += (i + 1); // Increment until the first "6" is found
            funnet = true;
        }

        // Counting occurrences of each dice number
        if (terning == 1) tall1++;
        if (terning == 2) tall2++;
        if (terning == 3) tall3++;
        if (terning == 4) tall4++;
        if (terning == 5) tall5++;
        if (terning == 6) tall6++;

        // Find the most thrown number
        if (tall1 > mestKastet[1]) {
            mestKastet[0] = 1;
            mestKastet[1] = tall1;
        }
        if (tall2 > mestKastet[1]) {
            mestKastet[0] = 2;
            mestKastet[1] = tall2;
        }
        if (tall3 > mestKastet[1]) {
            mestKastet[0] = 3;
            mestKastet[1] = tall3;
        }
        if (tall4 > mestKastet[1]) {
            mestKastet[0] = 4;
            mestKastet[1] = tall4;
        }
        if (tall5 > mestKastet[1]) {
            mestKastet[0] = 5;
            mestKastet[1] = tall5;
        }
        if (tall6 > mestKastet[1]) {
            mestKastet[0] = 6;
            mestKastet[1] = tall6;
        }
    }

    let gjennomsnitt = sum / 10;

    // Find the maximum and minimum values from the array manually
    let maxRoll = Math.max(...allekasta); 
    let minRoll = Math.min(...allekasta); 

    // Create bar chart representation
    let stolpediagram = `
        1: ${'*'.repeat(tall1)}<br>
        2: ${'*'.repeat(tall2)}<br>
        3: ${'*'.repeat(tall3)}<br>
        4: ${'*'.repeat(tall4)}<br>
        5: ${'*'.repeat(tall5)}<br>
        6: ${'*'.repeat(tall6)}<br>
    `;

    // Display results
    hoyestelavesteresultat.innerHTML = "Høyeste og laveste kast: " + maxRoll + " / " + minRoll;
    kastforseksresultat.innerHTML = "Kastene før første 6: " + teller;
    oddetall_resultat.innerHTML = "Antall oddetall: " + oddetall;
    partall_resultat.innerHTML = "Antall partall: " + partall;
    resultater.innerHTML = "Terningkast: " + allekasta.join(" "); // Display all rolls
    summen.innerHTML = "Summen av kastene: " + sum;
    gjennomsnitt_resultat.innerHTML = "Gjennomsnittet av kastene: " + gjennomsnitt;
    mest_kastet_resultat.innerHTML = "Mest kastet tall: " + mestKastet[0] + " (" + mestKastet[1] + " ganger)";
    stolpediagram_resultat.innerHTML = "Stolpediagram: <br>" + stolpediagram;
}

