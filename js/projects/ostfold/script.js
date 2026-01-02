// made by : william berge grønsberg
// Date: 05.feb.2025
        const avstand = [
            [0,30,80,65,45,90,80 ], // Askim
            [30,0,50,80,90,60,86 ], // Ørje
            [80,50,0,30,70,45,67 ], // Halden
            [65,80,30,0,40,25,25 ], // Fredrikstad
            [45,90,70,40,0,70,78 ],  // Moss
            [90,80,60,44,45,0,88 ], //sarpsborg
            [84,54,56,24,68,87,0 ] // rakkestad
        ]; 
        // 0 = Askim | 1 = Ørje | 2 = Halden | 3 = Fredrikstad | 4 = Moss | 5 = Sarpsborg | 6 = Rakkestad

        
        let byNavn = [
                        "Askim", 
                        "Ørje", 
                        "Halden", 
                        "Fredrikstad", 
                        "Moss",
                        "Sarpsborg",
                        "Rakkestad"
                    ];

        let valgtRute = [];
        let totalAvstand = 0;
        
        function velgBy(byIndex) {
            if (valgtRute.length > 0) {
                let forrigeBy = valgtRute[valgtRute.length - 1];  // Finn forrige by
                totalAvstand += avstand[forrigeBy][byIndex];  // Legger til avstand selv om byen er valgt før
                    console.log(forrigeBy)
         
                }
            
                valgtRute.push(byIndex);  // Legg til byen i ruten
                visRute();
                console.log (valgtRute)
            }
        

        function reset(){
            valgtRute = [];
            totalAvstand = 0;
            visRute();
            console.log(valgtRute)
            document.getElementById("rute").innerText = "Velg en by";
        }

        function visRute() {
            let ruteTekst = valgtRute.map(index => byNavn[index]).join(" → ");
            document.getElementById     ("rute")     .innerText = ruteTekst;
            document.getElementById     ("avstand")  .innerText = totalAvstand + " km";
            document.getElementById     ("tid")      .innerText = Math.ceil(totalAvstand / 20) + " timer";
        }

    
  
