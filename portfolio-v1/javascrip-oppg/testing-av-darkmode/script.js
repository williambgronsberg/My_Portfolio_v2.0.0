/**
 * Bytt stilark på siden mellom stil1.css og stil2.css
 * 
 * Fungerer ved å hente stilark-elementet fra DOM'en
 * og bytte href-attributtet basert på hvilken stil som er satt
 * 
 * Hvis stil1.css er satt, bytter vi til stil2.css
 * Hvis stil2.css er satt, bytter vi til stil1.css
 */
function byttStil() {
    // Hent stilark-elementet fra DOM'en
    const stilark = document.getElementById("stilark");

    // Bytt href-attributtet basert på hvilken stil som er satt
    if (stilark.getAttribute("href") === "stil1.css") {
        // Hvis stil1.css er satt, bytter vi til stil2.css
        stilark.setAttribute("href", "stil2.css");
    } else {
        // Hvis stil2.css er satt, bytter vi til stil1.css
        stilark.setAttribute("href", "stil1.css");
    }
}
