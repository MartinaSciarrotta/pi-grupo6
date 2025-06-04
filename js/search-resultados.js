let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString);

let contenedorBuscar = document.querySelector('.searchResultados');
let search = queryStringObject.get('b');
let mediaType = queryStringObject.get('type');

let url = "https://api.themoviedb.org/3/search/" + mediaType + "?query=" + search + "&include_adult=false&language=es-ES&page=1&api_key=44409d458b80c6cd77fa1ee8e33830c6";

let resultados = '';

fetch(url)
    .then(function (response) {
        return response.json(); // Convierto a JavaScript
    })

    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            resultados += 
            `   
            <div class="secciones" >
                <article class="peliculahome">
                    <a href="./detail-movie.html?id=${data.results[i].id}">
                        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].title}">
                        <h4>${data.results[i].title}</h4>
                        <p>Fecha de estreno: ${data.results[i].release_date}</p>
                    </a>
                </article>
            </div>
            `
        }
        contenedorBuscar.innerHTML = resultados; // Acá le estoy aplicando los datos al HTML.
    })

    .catch(function (error) {
        console.log(error);
    });