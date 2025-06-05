let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_genero = queryStringObj.get("genero");

// Capturar el contenedor donde se van a insertar las películas
let peliculas_genero = document.querySelector(".secciones");
let tituloGenero = document.querySelector(".titulo-genero");

// Hacer el pedido a la API para obtener las películas del género
fetch(`https://api.themoviedb.org/3/discover/movie?language=es-ES&with_genres=${id_genero}&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
  .then(function(respuesta) {
    return respuesta.json(); // Convertir la respuesta a objeto JS
  })
  .then(function(datos) {
    // Cambiar el título de la sección
    tituloGenero.innerText = "Películas del género";

    // Si no hay películas
    if (datos.results.length === 0) {
      peliculas_genero.innerHTML = "<p>No se encontraron películas para este género.</p>";
    } else {
      // Si hay películas, recorrerlas y mostrarlas
      let contenido = "";

      for (let i = 0; i < datos.results.length; i++) {
        let pelicula = datos.results[i];

        contenido += `
          <article class="peliculahome">
            <a href="./detail-movie.html?id=${pelicula.id}">
              <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.title}">
              <h4>${pelicula.title}</h4>
              <p>Fecha de estreno: ${pelicula.release_date}</p>
            </a>
          </article>
        `;
      }

      // Insertar todo en el HTML
      peliculas_genero.innerHTML = contenido;
    }
  })
  .catch(function(error) {
    console.log("Ocurrió un error al cargar las películas:", error);
  });
