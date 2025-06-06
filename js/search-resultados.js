let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString);

let contenedorBuscar = document.querySelector('.searchResultados');
let search = queryStringObject.get('b');
let mediaType = queryStringObject.get('type');
let spinner = document.querySelector('.spinner');
let busquedaR = document.querySelector('.busquedaR');

let resultados = '';

fetch(`https://api.themoviedb.org/3/search/${mediaType}?query=${search}&include_adult=false&language=es-ES&page=1&api_key=44409d458b80c6cd77fa1ee8e33830c6`)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        spinner.style.display = 'none'

        if (data.results.length === 0){
            resultados = `<p>No se encontraron resultados para "${search}".</p>`;
        } 
        else { 
            for (let i = 0; i < data.results.length; i++) {
                if (mediaType == 'movie') {
                    resultados += `   
                    <article class="peliculahome">
                        <a href="./detail-movie.html?${mediaType}=${data.results[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].title}">
                            <h4>${data.results[i].title}</h4>
                            <p>Fecha de estreno: ${data.results[i].release_date}</p>
                        </a>
                    </article>
                    `  
                } 
                else if (mediaType == 'tv') {
                    resultados += `   
                    <article class="peliculahome">
                        <a href="./detail-serie.html?${mediaType}=${data.results[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Foto de ${data.results[i].name}">
                            <h4>${data.results[i].name}</h4>
                            <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
                        </a>
                    </article>
                    `
                }
                
            }
        }
        busquedaR.innerHTML = `Resultados de la búsqueda: ${search}`;
        contenedorBuscar.innerHTML = resultados;
    })

    .catch(function (error) {
        console.log(error);
    });