document.addEventListener("DOMContentloaded", (e) => {
  init()})
  
function init() {
    let movieData =JSON.parse(movies.json);
    console.log(movieData)
     title.innerHTML = movieData.Titanic.title 
     director.innerHTML = movieData.Titanic.director
     genre.innerHTML = movieData.Titanic.genre
     filmRating.innerHTML = movieData.Titanic.filmRating
     poster.innerHTML = movieData.Titanic.poster
     description.innerHTML = movieData.Titanic.description
     audienceScore.innerHTML = movieData.Titanic.audienceScore
}
     title.innerHTML = movieData["Terminator 2"].title
     director.innerHTML = movieData["Terminator 2"].director
     genre.innerHTML = movieData["Terminator 2"].genre
     filmRating.innerHTML = movieData["Terminator 2"].filmRating
     poster.innerHTML = movieData["Terminator 2"].poster
     description.innerHTML = movieData["Terminator 2"].description
     audienceScore.innerHTML = movieData["Terminator 2"].audienceScore

//will need to add event to get info to open on load

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}