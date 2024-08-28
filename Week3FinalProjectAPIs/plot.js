let movieType = "movie";
let titleSearch = "star";
let page = "1";
let isModalOpen = false;

document.getElementById("type__control").value = movieType
document.getElementById("title__control").value = titleSearch
document.getElementById("page__control").value = page

async function getMovies() {
    const movies = await fetch(`https://www.omdbapi.com/?s=${titleSearch}&type=${movieType}&page=${page}&apikey=dc7d7fc0`);
    const moviesData = await movies.json();
    const movieListEl = document.querySelector(".movie-list");

    if (moviesData.Search && Array.isArray(moviesData.Search)) {
        movieListEl.innerHTML = moviesData.Search.map((movie) => 
            movieHTML(movie)     
        ).join("");
      } else {
        console.error("No movies found or invalid response:", moviesData);
      }
}

async function searchMovieType(event) {
    movieType = event.target.value;
    if (page > 1) {
        page = 1
        document.getElementById("page__control").value = "1";
    }

    getMovies()
}
async function searchMovieTitle(event) {
    titleSearch = event.target.value;
    if (page > 1) {
        page = 1
        document.getElementById("page__control").value = "1";
    }
    getMovies()
}
async function flipPage(event) {
    page = event.target.value;
    document.getElementById("page__control").value = page
    getMovies()
}

getMovies()

// ******************************************************************

async function getPlot(movieId) {
    const apiKey = 'dc7d7fc0';
    const movie = await fetch(`http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${apiKey}`);
    const movieData = await movie.json();
    const movieListEl = document.querySelector(".modal");
    
    if (movieData.Response === "True") {
        movieListEl.innerHTML = plotHTML(movieData);

    } else {
        console.error("Movie not found or invalid response:", movieData);
        movieListEl.innerHTML = "<p>Error: Unable to fetch movie data</p>";
    }
}

function movieHTML(movie){

    return `
            <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <h1>${movie.Title}</h1>
                    <p><b>Type: ${movie.Type} | Year:${movie.Year}</b> </p>
                    <p><b><img src="${movie.Poster}" alt="" class="movie--img"></b> </p>
                    <div class="movie__card--footer">
                        <h4 id="movie-id">${movie.imdbID}</h4>
                        <button class="btn__more--info"  onclick="toggleModal()">More Info</button>
                    </div>
                    <div class="project__wrapper--bg"></div>
                </div>
              </div>
            </div>`;
            
            
}

function plotHTML(movie) {
    
            return `      <div class="modal__half movie__basic">
          <h3 class="model__basic--title dk__brown">Title: ${movie.Title}</h3>
          <h4 class="model__basic--subtitle dk__brown">Type: ${movie.Type} | Year:${movie.Year}</h4>
          <p><b><img src="${movie.Poster}" alt="" class="movie--img"></b> </p>
      </div>
      <div class="modal__half movie__details">
          <i class="fas fa-times modal__exit click" onclick="toggleModal()"></i>
          <h3 class="model__title model__title--details">Actors: ${movie.Actors}</h3>
          <h3 class="modal__sub-title model__sub-title--details">${movie.Plot}</h3>
          <div class="modal__overlay modal__overlay--loading">
              <i class="fas fa-spinner"></i>
          </div>
      </div>`
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}