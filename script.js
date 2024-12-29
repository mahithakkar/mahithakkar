// Function 1
function printCast() {
    // Create an array with the names of 3 lead cast members
    let leadCast = ["Benedict Cumberbatch", "Leonardo DiCaprio", "Millie Bobby Brown"];

    // Add names of 3 supporting actors
    let supportingActors = ["Martin Freeman", "Elliot Page", "Finn Wolfhard"];

    // Use the spread operator to add the name of the director/producer at the beginning
    const director = "Christopher Nolan";
    let fullCast = [director, ...leadCast, ...supportingActors];

    // Print the contents of this list to the console
    console.log(fullCast);
}

// Function 2 (Arrow Function)
const calculateAverageRating = (ratingsArray, totalRatings) => {
    // Calculate the average rating
    const averageRating = ratingsArray.reduce((acc, rating) => acc + rating, 0) / totalRatings;

    // Print the average movie rating to the console
    console.log(`Average Movie Rating: ${averageRating.toFixed(2)} / 10`);
};

// Function 3
function tvShowInfo() {
    // Create a movie/tv show object with attributes
    const tvShow = {
        name: "Stranger Things",
        episodes: 34,
        releaseYear: 2016,
        imdbRating: 8.7,
        genre: "Sci-Fi"
    };

    // Call the displayMovieDetails function
    displayMovieDetails(tvShow);
}

// Function to display movie details
function displayMovieDetails(tvShowObj) {
    console.log("TV Show Name: ", tvShowObj.name);
    console.log("Number of Episodes: ", tvShowObj.episodes);
    console.log("Release Year: ", tvShowObj.releaseYear);
    console.log("IMDB Rating: ", tvShowObj.imdbRating);
    console.log("Genre: ", tvShowObj.genre);
}