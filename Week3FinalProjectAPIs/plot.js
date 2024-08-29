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
    try {
        const apiKey = 'dc7d7fc0';
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${apiKey}`);
        const movieData = await response.json();
        const modalEl = document.querySelector(".modal");

        if (modalEl && movieData.Response === "True") {
            modalEl.innerHTML = plotHTML(movieData);
            toggleModal();
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
                <div class="movie-card__container">
                    <h1>${movie.Title}</h1>
                    <p><b>Type: ${movie.Type} | Year: ${movie.Year}</b></p>
                    <p><img src="${movie.Poster}" alt="${movie.Title} poster" class="movie--img"></p>
                    <div class="movie__card--footer">
                        <h4 id="movie-id">${movie.imdbID}</h4>
                        <button class="btn__more--info" onclick="getPlot('${movie.imdbID}')">More Info</button>
                    </div>
                    <div class="project__wrapper--bg"></div>
                </div>
            </div>
        </div>`;
}

function plotHTML(movie) {
    return `
        <div class="modal__content">
            <div class="modal__half movie__basic">
                <h3 class="model__basic--title dk__brown">Title: ${movie.Title}</h3>
                <h4 class="model__basic--subtitle dk__brown">Type: ${movie.Type} | Year: ${movie.Year}</h4>
                <p><img src="${movie.Poster}" alt="${movie.Title} poster" class="movie--img"></p>
            </div>
            <div class="modal__half movie__details">
                <i class="fas fa-times modal__exit click" onclick="toggleModal()"></i>
                <h3 class="model__title model__title--details">Actors: ${movie.Actors}</h3>
                <h3 class="modal__sub-title model__sub-title--details">${movie.Plot}</h3>
            </div>
        </div>`;
}

function toggleModal() {
    isModalOpen = !isModalOpen;
    const modalEl = document.querySelector(".modal");
    if (modalEl) {
        modalEl.style.display = isModalOpen ? "block" : "none";
    }
}