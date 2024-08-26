

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?s=fish&type=movie&apikey=dc7d7fc0");
    const moviesData = await movies.json();
    console.log(moviesData)
    const movieListEl = document.querySelector(".movie-list")
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join();

}

main()

function movieHTML(movie){
    return `<div class="movie-list">
            <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <h1>${movie.strMeal}</h1>
                    <p><b>Meal Id:${movie.idMeal}</b> </p>
                    <p><b><img src="${movie.strMealThumb}" alt="" class="movie--img"></b> </p>
                </div>
              </div>
            </div>
          </div>`
}