let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_genero = queryStringObj.get("idGenero");
let nombre_genero = queryStringObj.get("nombreGenero");


let peliculas_genero = document.querySelector(".seccionesGeneros");
let tituloGenero = document.querySelector(".titulo-genero");


fetch(`https://api.themoviedb.org/3/discover/movie?language=es-ES&with_genres=${id_genero}&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
  .then(function(respuesta) {
    return respuesta.json(); 
  })
  .then(function(datos) {
    tituloGenero.innerHTML = `Películas del género: ${nombre_genero}`;

    if (datos.results.length === 0) {
      peliculas_genero.innerHTML = "<p>No se encontraron películas para este género.</p>";
    } else {
      let contenido = "";

      for (let i = 0; i < datos.results.length; i++) {
        let pelicula = datos.results[i];

        contenido += `
          <article class="peliculahome">
            <a href="./detail-movie.html?movie=${pelicula.id}">
              <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.title}">
              <h4>${pelicula.title}</h4>
              <p>Fecha de estreno: ${pelicula.release_date}</p>
            </a>
          </article>
        `;
      }

      peliculas_genero.innerHTML = contenido;
    }
  })
  .catch(function(error) {
    console.log("Ocurrió un error al cargar las películas:", error);
  });
