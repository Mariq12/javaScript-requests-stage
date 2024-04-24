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


/*import { apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value.trim();

    try {
        if (datosDeBusqueda) {
            const videosFiltrados = await apiConnection.filtrar(datosDeBusqueda);

            const lista = document.querySelector("[data-lista]");
            lista.replaceChildren();

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
*/


/*import { apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

    try {
        const video = await apiConnection.buscarVideo(datosDeBusqueda);

        const lista = document.querySelector("[data-lista]");

        lista.replaceChildren();

        if (video && typeof video === 'object') {
            // Crear elemento HTML para mostrar el video
            const card = crearCard(video.titulo, video.descripcion, video.url, video.imagen);
            lista.appendChild(card);
        } else {
            // Mostrar mensaje si no se encontró el video
            lista.innerHTML = `<h2 class="mensaje__titulo">Video no encontrado</h2>`;
        }
    } catch (error) {
        console.error('Error al filtrar videos:', error.message);
        // Mostrar mensaje de error en la lista
        lista.innerHTML = `<h2 class="mensaje__titulo">Error al cargar el video. Inténtalo de nuevo más tarde.</h2>`;
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click", evento => filtrarVideo(evento));
*/


/*import { apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

    try {
        const busqueda = await apiConnection.buscarVideo(datosDeBusqueda);

        const lista = document.querySelector("[data-lista]");

        lista.replaceChildren();

        // Verificar si la respuesta es un array válido y no está vacío
        if (Array.isArray(busqueda) && busqueda.length > 0) {
            busqueda.forEach(element => {
                lista.appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen));
            });
        } else {
            // Mostrar mensaje si no se encontraron resultados
            lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron resultados</h2>`;
        }
    } catch (error) {
        // Manejar errores de la llamada a buscarVideo
        console.error('Error al filtrar videos:', error.message);
        // Mostrar un mensaje de error en la lista
        lista.innerHTML = `<h2 class="mensaje__titulo">Error al cargar los videos. Inténtalo de nuevo más tarde.</h2>`;
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click", evento => filtrarVideo(evento));
*/



/*import { apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await apiConnection.buscarVideo(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    lista.replaceChildren();

    if (busqueda && Array.isArray(busqueda)) {
        busqueda.forEach(element => {
            lista.appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen));
        });
    } else {
        // No se encontraron resultados
        lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron resultados</h2>`;
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click", evento => filtrarVideo(evento));
*/


/*import {  apiConnection } from "./apiConnection.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo (evento) {
	evento.preventDefault();
	
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
	const busqueda = await apiConnection.buscarVideo(datosDeBusqueda);

	const lista = document.querySelector("[data-lista]");

	lista.remplaceChildren();
	
	busqueda.forEach(element => lista.appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen)));

	if (busqueda.length === 0) {
		lista.innerHTML=`<h2 class="mensaje__titulo">No se encontraron resultados</h2>`;
	}

		//console.log(busqueda)
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>filtrarVideo(evento))
*/