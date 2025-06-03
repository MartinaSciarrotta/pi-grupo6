const pagina_index = document.querySelector("main")

let seccion1 = ""
peliculas = ""

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){ 
        for (i = 0; i < 5; i++){ 
            peliculas += `
                <article class="peliculahome">
                    <a href="./detail-movie.html">
                        <img src="${data.results[i].poster_path}" alt="Foto de ${data.results[i].original_title}">
                        <h4>${data.results[i].original_title}</h4>
                        <p>Fecha de estreno: ${data.results[i].release_date}</p>
                    </a>
                </article>
            ` 
        }
        seccion1 += `
        <h2>Top Rated Movies</h2>
        <div class="secciones">
            ${peliculas}
        </div>
        `
        pagina_index.innerHTML = seccion1
    })
    .catch( function(error){
        console.log(error)
    })

let seccion2 = ""
series = ""

fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){ 
        for (i=0; i < 5; i++){ 
            series += `
                <article class="peliculahome">
                    <a href="./detail-serie.html">
                        <img src="${data.results[i].poster_path}" alt="Foto de ${data.results[i].original_name}">
                        <h4>${data.results[i].original_name}</h4>
                        <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
                    </a>
                </article>
            ` 
        }
        
        seccion2 += `
            <h2>Top Rated Series</h2>
            <div class="secciones">
                ${series}
            </div>
        `
        pagina_index.innerHTML += seccion2
    })
    .catch( function(error){
        console.log(error)
    })

let seccion3 = ""
talk_shows = ""

fetch("https://api.themoviedb.org/3/tv/popular?api_key=2c3f31bcc0252bb3b9edba5fa7b52869")
    .then( function(response){
        return response.json()
    })
    .then( function(data){ 
        for (i=0; i < 5; i++){ 
            talk_shows += `
                <article class="peliculahome">
                    <a href="./detail-serie.html">
                        <img src="${data.results[i].poster_path}" alt="Foto de ${data.results[i].original_name}">
                        <h4>${data.results[i].original_name}</h4>
                        <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
                    </a>
                </article>
            ` 
        }
        
        seccion3 += `
            <h2>Talk shows</h2>
            <div class="secciones">
                ${talk_shows}
            </div>
        `
        pagina_index.innerHTML += seccion3
    })
    .catch( function(error){
        console.log(error)
    })
