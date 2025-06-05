const seccion1 = document.querySelector("#popular-movies")

let peliculas = ""

fetch("https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){
        for (i = 0; i < 5; i++){ 
            peliculas += `
                <article class="peliculahome">
                    <a href="./detail-movie.html?pelicula=${data.results[i].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].title}">
                        <h4>${data.results[i].title}</h4>
                        <p>Fecha de estreno: ${data.results[i].release_date}</p>
                    </a>
                </article>
            ` 
        }
        seccion1.innerHTML = peliculas
    })
    .catch( function(error){
        console.log(error)
    })

const seccion2 = document.querySelector("#top-rated-series")
series = ""

fetch("https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=1&api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){ 
        for (i=0; i < 5; i++){ 
            series += `
                <article class="peliculahome">
                    <a href="./detail-serie.html?serie=${data.results[i].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].name}">
                        <h4>${data.results[i].name}</h4>
                        <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
                    </a>
                </article>
            ` 
        }
        seccion2.innerHTML += series
    })
    .catch( function(error){
        console.log(error)
    })

const seccion3 = document.querySelector("#upcoming-movies")
let talk_shows = ""

fetch("https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1&api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){ 
        for (i=1; i < 6; i++){ 
            talk_shows += `
                <article class="peliculahome">
                    <a href="./detail-movie.html?pelicula=${data.results[i].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].title}">
                        <h4>${data.results[i].title}</h4>
                        <p>Fecha de estreno: ${data.results[i].release_date}</p>
                    </a>
                </article>
            ` 
        }
        seccion3.innerHTML += talk_shows
    })
    .catch( function(error){
        console.log(error)
    })
