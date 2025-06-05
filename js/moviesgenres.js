const movies_genres = document.querySelector("#movies-genres")
let generos = ""

fetch("https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){
        
        for (i = 0; i < data.genres.length; i++){ 
            generos += `
                <article class="peliculahome">
                    <a href="./detail-movie-genres.html?genero=${data.genres[i].id}">
                        <h4>${data.genres[i].name}</h4>
                    </a>
                </article>
            `
        }
        movies_genres.innerHTML = generos
    })
    .catch( function(error){
        console.log(error)
    })