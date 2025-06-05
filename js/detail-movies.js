let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id_peli = queryStringObj.get("pelicula")

let detail_movie = document.querySelector(".detallemov")

fetch(`https://api.themoviedb.org/3/movie/${id_peli}?language=es-ES&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
    .then( function(response){
        return response.json()
    }
    )
    .then( function(data){
        generos = ""
        for (i=0; i < data.genres.length; i++){
            generos += `
                <li><a href="./detail-movie-genres.html?genero=${data.genres[i].id}">${data.genres[i].name}</a></li>
            `
        }

        detail_movie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="Foto de ${data.title}">

            <article>
                <h2>${data.title}</h2>

                <ul>
                    <li>Calificación: ${data.vote_average}</li>
                    <li>Fecha de estreno: ${data.release_date}</li>
                    <li>Duración: ${data.runtime}</li>
                    <li>Sinopsis: ${data.overview}</li>
                    <li>Géneros:<ul>${generos}</ul></li>
                </ul>
            </article>
        `
    }
    )
    .catch( function(error){
        return error
    }
    )