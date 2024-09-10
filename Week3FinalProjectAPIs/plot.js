let movieType = "movie";
let titleSearch = "star";
let page = "1";
let isModalOpen = false;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

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
        const modalEl = document.querySelector(".modal");

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
                    <div class="title--container"><h1>${movie.Title}</h1></div>
                    <p><b>Type: ${movie.Type} | Year: ${movie.Year}</b></p>
                    <p><img src="${movie.Poster}" alt="${movie.Title} poster" class="movie--img"></p>
                    <div class="movie__card--footer">
                        <h4 id="movie-id">${movie.imdbID}</h4>
                        <button class="btn btn-open btn__more--info" onclick="getPlot('${movie.imdbID}')">More Info</button>
                        
                    </div>
                </div>
            </div>
        </div>`;
}

function plotHTML(movie) {
    return `
            <div class="flex">
                <img src="user.png" width="50px" height="50px" alt="user" />
                <button class="btn-close">⨉</button>
            </div> 
            <h2 id="modal__title">Title: ${movie.Title}</h2>
            <h3 id="modal__actors">Actors: ${movie.Actors}</h3>
            <h3 id="modal__desc">${movie.Plot}</h3>          
        `;
}

// ******************************************************************************** 
// Model code *************************************************************************
/* *************** MODAL CODE ************ */


// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);
