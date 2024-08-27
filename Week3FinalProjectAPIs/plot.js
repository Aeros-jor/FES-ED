async function main() {
    const movies = await fetch(`http://www.omdbapi.com/?i=tt0076759&plot=full&apikey=dc7d7fc0`);
    const moviesData = await movies.json();
    //console.log(moviesData);
    const movieListEl = document.querySelector(".movie-list");

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
    console.log(movie)
    return `<div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">

                    <p><b>Type: ${movie.Plot}</b> </p>

                </div>
              </div>
            </div>`
          
}