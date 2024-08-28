let movieType = "movie";
let titleSearch = "star";
let page = "1";
document.getElementById("type__control").value = movieType
document.getElementById("title__control").value = titleSearch
document.getElementById("page__control").value = page

async function getMovies() {
    const movies = await fetch(`https://www.omdbapi.com/?s=${titleSearch}&type=${movieType}&page=${page}&apikey=dc7d7fc0`);
    const moviesData = await movies.json();
    //console.log(page);
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
    //console.log(movieData)
    const movieListEl = document.querySelector(".plot");
    
    if (movieData.Response === "True") {
        movieListEl.innerHTML = plot__data(movieData);

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
                        <button class="btn__more--info"  onclick="getPlot('${movie.imdbID}')">More Info</button>
                    </div>
                    <div class="project__wrapper--bg"></div>
                </div>
              </div>
            </div>
            
            `;
}

function plot__data(movie) {
            return `<div class="movie__wrapper--bg"></div>
            <div class="movie__description">
                <h1 class="movie__description--title">
                Title: ${movie.Title}
                </h1>
                <h2 class="movie__description--actors">
                Actors: ${movie.Actors}
                </h2>
                <p><b><img src="${movie.Poster}" alt="" class="movie--img"></b> </p>
                <p class="movie__description--plot">
                ${movie.Plot}
                </p>
            </div><!--movie__description-->`
}