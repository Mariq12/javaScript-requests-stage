import { apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value.trim();

    try {
        if (datosDeBusqueda) {
            const videosFiltrados = await apiConnection.filtrar(datosDeBusqueda);

            const lista = document.querySelector("[data-lista]");
            lista.innerHTML = ''; // Limpiar contenido previo de la lista

            if (videosFiltrados.length > 0) {
                // Mostrar los videos filtrados
                videosFiltrados.forEach(video => {
                    const card = crearCard(video.titulo, video.descripcion, video.url, video.imagen);
                    lista.appendChild(card);
                });
            } else {
                // Mostrar mensaje si no se encontraron videos
                lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron videos con ese nombre</h2>`;
            }
        } else {
            // Mostrar mensaje si el campo de búsqueda está vacío
            const lista = document.querySelector("[data-lista]");
            lista.innerHTML = `<h2 class="mensaje__titulo">Por favor, ingresa un término de búsqueda válido</h2>`;
        }
    } catch (error) {
        console.error('Error al filtrar videos:', error.message);
        const lista = document.querySelector("[data-lista]");
        lista.innerHTML = `<h2 class="mensaje__titulo">Error al cargar los videos. Inténtalo de nuevo más tarde.</h2>`;
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
botonBusqueda.addEventListener("click", evento => filtrarVideo(evento));

const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        filtrarVideo(e)
    }
});