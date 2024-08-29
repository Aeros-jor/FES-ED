let movieType = "movie";
let titleSearch = "star";
let page = "1";
let isModalOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("type__control").value = movieType;
    document.getElementById("title__control").value = titleSearch;
    document.getElementById("page__control").value = page;

    // Initial movie search
    getMovies();
});

async function getMovies() {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${titleSearch}&type=${movieType}&page=${page}&apikey=dc7d7fc0`);
        const moviesData = await response.json();
        const movieListEl = document.querySelector(".movie-list");

        if (movieListEl && moviesData.Search && Array.isArray(moviesData.Search)) {
            movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
        } else {
            console.error("No movies found or invalid response:", moviesData);
            if (movieListEl) {
                movieListEl.innerHTML = "<p>No movies found. Try a different search.</p>";
            }
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function searchMovieType(event) {
    movieType = event.target.value;
    resetPage();
    getMovies();
}

function searchMovieTitle(event) {
    titleSearch = event.target.value;
    resetPage();
    getMovies();
}
function flipPage(event) {
    page = event.target.value;
    getMovies();
}

function resetPage() {
    page = "1";
    document.getElementById("page__control").value = "1";
}

async function getPlot(movieId) {
    console.log(movieId)

    try {
        const apiKey = 'dc7d7fc0';
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${apiKey}`);
        const movieData = await response.json();
        const modalEl = document.querySelector(".overlay");

        if (modalEl && movieData.Response === "True") {
            modalEl.innerHTML = plotHTML(movieData);
        } else {
            console.error("Movie not found or invalid response:", movieData);
            if (modalEl) {
                modalEl.innerHTML = "<p>Error: Unable to fetch movie data</p>";
            }
        }
    } catch (error) {
        console.error("Error fetching movie plot:", error);
    }
}

function movieHTML(movie) {
    return `
        <div class="movie">
            <div class="movie-card">
                <div class="movie-card__container" >
                    <h1>${movie.Title}</h1>
                    <p><b>Type: ${movie.Type} | Year: ${movie.Year}</b></p>
                    <p><img src="${movie.Poster}" alt="${movie.Title} poster" class="movie--img"></p>
                    <div class="movie__card--footer">
                        <h4 id="movie-id">${movie.imdbID}</h4>
                        
                    </div>
                    <div class="overlay" onmouseover="getPlot('${movie.imdbID}')">

                    </div>
                </div>

            </div>
        </div>`;
}

function plotHTML(movie) {
    return `
            <h3>Title: ${movie.Title}</h3>
            <h3>Actors: ${movie.Actors}</h3>
            <h3>${movie.Plot}</h3>
        `;
}

