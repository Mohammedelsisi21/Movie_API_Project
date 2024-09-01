let myh =document.getElementById("myh");
let mydiv = document.getElementById("mydiv");
let byWord = document.getElementById("byWord");
let byRate= document.getElementById("byRate");
console.log(byRate.value)
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTcwNDJmZjQ1ZGIwZjhiZjY3ODU5YjA0ZjI1OWUxYyIsInN1YiI6IjY1MzdmMDViYzUwYWQyMDBjYTg5MGFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A4Js_wb_X5zBW3EHiw98X67qjaeX3_-RwBMsikOiU_Y'
    }
  };

  function getMovies(pagemo){
    console.log(pagemo);
    myh.innerHTML = `<h1>${pagemo} Movies</h1>`;
    fetch(`https://api.themoviedb.org/3/movie/${pagemo}?language=en-US&page=5`, options)
    .then(response => response.json())
    .then(response =>{
        var res = response.results;
        console.log(response);
        mydiv.innerHTML='';
        res.forEach(element => {
            mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
            <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
        });
      });
  };
window.onload = function() {
  getMovies('now_playing');
}
byWord.addEventListener('keyup' , ()=>{
  let mySearchGetMovies = byWord.value;
  fetch(`https://api.themoviedb.org/3/search/movie?query=${mySearchGetMovies}&include_adult=false&language=en-US&page=5`, options)
  .then(response => response.json())
  .then(response => {
    var res = response.results;
        mydiv.innerHTML='';
        res.forEach(element => {
            mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
            <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
          console.log(element.original_title);
        });
      })
})
byRate.addEventListener('keyup' , ()=>{
  fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=5`, options)
    .then(response => response.json())
    .then(response =>{
      var searchra = byRate.value;
      if(searchra >=8.5 && searchra <=10){
        var res = response.results;
        mydiv.innerHTML='';
        res.forEach(element => {
          if(element.vote_average >= 8.5 && element.vote_average <=10){
            mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
            <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
      }});
}
      if(searchra >=6.5 && searchra <=8.49){
        var res = response.results;
        mydiv.innerHTML='';
        res.forEach(element => {
          if(element.vote_average >= 6.5 && element.vote_average <=8.49){
          mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
            <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
        }});
}
      if(searchra >=3.5 && searchra <=6.49){
        var res = response.results;
        mydiv.innerHTML='';
        res.forEach(element => {
          if(element.vote_average >= 3.5 && element.vote_average <=6.49){

          mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
            <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
        }});
}
        if(byRate.value >=0 && byRate.value <=3.49){
          var res = response.results;
          mydiv.innerHTML='';
          res.forEach(element => {
            if(element.vote_average >= 0 && element.vote_average <=3.49){
            mydiv.innerHTML +=`<div class="prodect">
            <img class="imageeee" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
              <div class="content">
              <h2>${element.original_title}</h2>
              <p>${element.overview}</p>
              <h4>Rate: ${element.vote_average}</h4>
              <h4>Date: ${element.release_date}</h4>
            </div>
          </div>`
        }});
}
});
})