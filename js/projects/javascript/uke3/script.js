const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Inception",
    "Fight Club",
    "Pulp Fiction",
    "Forrest Gump",
    "The Matrix",
    "The Lord of the Rings: The Return of the King",
    "Interstellar",
    "The Lion King",
    "Back to the Future",
    "Gladiator",
    "Titanic",
    "The Avengers",
    "Jurassic Park",
    "Avatar",
    "The Silence of the Lambs",
    "Schindler's List",
    "Star Wars: Episode IV - A New Hope"
];

// Example TV series list
const series = [
    "Breaking Bad",
    "Game of Thrones",
    "Stranger Things",
    "The Office",
    "Friends",
    "The Crown",
    "Sherlock",
    "Black Mirror",
    "Westworld",
    "Narcos"
];

// Function to dynamically generate and insert the two-column layout

// Call the function to generate the lists when the page loads

function opg2() {
    console.log(movies);
    movies.sort((a, b) => a.localeCompare(b));
    console.log(movies);
    movies.sort((a, b) => b.localeCompare(a));
    console.log(movies);
    for (let i = 0; i < movies.length; i++) { // Looper gjennom listen og gir to\ilbake annaver
        if (i % 2 === 0) {
            console.log(movies[i]);
        }
    }
}

function opg3() {
    console.log("-")
    console.log("-")
    console.log("-")
    let moviesCopy = [...movies];
    console.log("Array before deletion");
    console.log(movies);
    
    moviesCopy.splice(11, 2, "hei", "hello");
    console.log("Array after deletion");
    console.log(moviesCopy);
}

function swapFirstAndLastFive() {
    let firstFive = movies.slice(0, 5);
    let lastFive = movies.slice(-5);
    movies.splice(0, 5);
    movies.splice(-5);
    movies.unshift(...lastFive);
    movies.push(...firstFive);
    console.log("Array after swapping first and last five elements:");
    console.log(movies);
}

function opg4() {
    console.log(movies2);
}

function findTitleIndex(title) {
    const index = movies.indexOf(title);  
    if (index !== -1) {
        console.log(`The title "${title}" is found at index ${index}.`);
        document.getElementById("result").innerHTML = `The title "${title}" is found at index ${index}.`;
    } else {
        console.error(`Error: The title "${title}" is not in the list.`);
        document.getElementById("result").innerHTML = `The title "${title}" is not in the list.`;
    }
}

function countLetterOccurrences(letter) {
    if (!letter || letter.length !== 1) {
        console.error("Error: Please provide a single letter.");
        return;
    }
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].length; j++) {
            if (movies[i][j].toLowerCase() === letter.toLowerCase()) {
                count++;
            }
        }
    }
    console.log(`The letter "${letter}" appears ${count} times in all movie titles.`);
    document.getElementById("letterResult").innerHTML = `The letter "${letter}" appears ${count} times in all movie titles.`;
}

document.getElementById("searchBtn").addEventListener("click", () => {
    const title = document.getElementById("tekst").value;
    findTitleIndex(title);
});

document.getElementById("countBtn").addEventListener("click", () => {
    const letter = document.getElementById("letterInput").value;
    countLetterOccurrences(letter);
});

function opg5() {
    const movieListHTML = movies.map(movie => `<li>${movie}</li>`).join('');
    document.getElementById("movie-list").innerHTML = movieListHTML;
}

function generateMovieAndSeriesList() {
    // Create the container for two columns
    const movieListContainer = document.getElementById("movieListContainer");

    // Create column for movies
    const movieColumn = document.createElement('div');
    movieColumn.classList.add('column');
    movieColumn.innerHTML = '<h2>Filmer</h2><ul id="movie-list"></ul>';

    // Create column for series
    const seriesColumn = document.createElement('div');
    seriesColumn.classList.add('column');
    seriesColumn.innerHTML = '<h2>Serier</h2><ul id="series-list"></ul>';

    // Append the columns to the container
    movieListContainer.appendChild(movieColumn);
    movieListContainer.appendChild(seriesColumn);

    // Populate the movie list dynamically with <li> elements
    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        movieList.appendChild(li);
    });

    // Populate the series list dynamically with <li> elements
    const seriesList = document.getElementById('series-list');
    series.forEach(serie => {
        const li = document.createElement('li');
        li.textContent = serie;
        seriesList.appendChild(li);
    });
}

// starter funksjoner
opg2();
opg3();
swapFirstAndLastFive();
