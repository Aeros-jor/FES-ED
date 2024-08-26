

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?s=fish&type=movie&apikey=dc7d7fc0");
    const moviesData = await movies.json();
    console.log(moviesData)
    const movieListEl = document.querySelector(".movie-list")
    if (moviesData.Search && Array.isArray(moviesData.Search)) {
        movieListEl.innerHTML = moviesData.Search.map((movie) =>
          movieHTML(movie)
        ).join("");
      } else {
        console.error("No movies found or invalid response:", moviesData);
      }

}

main()

function movieHTML(movie){
    return `<div class="movie-list">
            <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <h1>${movie.Title}</h1>
                    <p><b>Year:${movie.Year}</b> </p>
                    <p><b><img src="${movie.Poster}" alt="" class="movie--img"></b> </p>
                </div>
              </div>
            </div>
          </div>`
}