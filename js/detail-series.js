let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id_serie = queryStringObj.get("tv")

let detail_serie = document.querySelector(".detallemov")

fetch(`https://api.themoviedb.org/3/tv/${id_serie}?language=es-ES&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
    .then( function(response){
        return response.json()
    }
    )
    .then( function(data){
        generos = ""
        for (i=0; i < data.genres.length; i++){
            generos += `
                <li><a href="./detail-series-genres.html?idGenero=${data.genres[i].id}&nombreGenero=${data.genres[i].name}">${data.genres[i].name}</a></li>
            `
        }

        detail_serie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="Foto de ${data.name}">

            <article>
                <h2>${data.name}</h2>

                <ul>
                    <li>Calificación: ${data.vote_average}</li>
                    <li>Fecha de estreno: ${data.first_air_date}</li>
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