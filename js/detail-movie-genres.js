let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id_genero = queryStringObj.get("genero")

let peliculas_genero = document.querySelector(".secciones")

fetch(`https://api.themoviedb.org/3/discover/movie?&language=es-ES&with_genres=${id_genero}&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
    .then(

    )
    .then(

    )
    .catch(

    )