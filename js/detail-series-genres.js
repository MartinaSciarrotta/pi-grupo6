let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_genero = queryStringObj.get("idGenero");
let nombre_genero = queryStringObj.get("nombreGenero");

let series_genero = document.querySelector(".seccionesGeneros");
let tituloGenero = document.querySelector(".titulo-genero");


fetch(`https://api.themoviedb.org/3/discover/tv?language=es-ES&with_genres=${id_genero}&api_key=2c3f31bcc0252bb3b9edba5fa7b52869`)
  .then(function(respuesta) {
    return respuesta.json(); 
  })
  .then(function(datos) {
    tituloGenero.innerText = `Series del género: ${nombre_genero}`;

    if (datos.results.length === 0) {
      series_genero.innerHTML = "<p>No se encontraron series para este género.</p>";
    } else {

      let contenido = "";

      for (let i = 0; i < datos.results.length; i++) {
        let serie = datos.results[i];

        contenido += `
          <article class="peliculahome">
            <a href="./detail-serie.html?tv=${serie.id}">
              <img src="https://image.tmdb.org/t/p/w300${serie.poster_path}" alt="${serie.name}">
              <h4>${serie.name}</h4>
              <p>Fecha de estreno: ${serie.first_air_date}</p>
            </a>
          </article>
        `;
      }


      series_genero.innerHTML = contenido;
    }
  })
  .catch(function(error) {
    console.log("Ocurrió un error al cargar las series:", error);
  });
