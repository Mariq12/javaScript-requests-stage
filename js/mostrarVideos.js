import {  apiConnection} from "./apiConnection.js";

const lista = document.querySelector("[data-lista]")

function crearCard(titulo,descripcion,url,imagen){
	const video = document.createElement("li");
	video.className="videos__item";
	video.innerHTML=`<li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src="${imagen}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>`
	
	
	/*video.innerHTML=`<li class="videos__item">
            <iframe width="100%" height="72%" src="https://www.youtube.com/embed/QjOWz9avkg8"
                title="Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src="./images/logo.png" alt="logo canal alura">
                <h3>Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!</h3>
                <p>236 mil visualizaciones</p>
            </div>`*/
	return video;
}

async function listarVideos(){
	const listaAPI = await apiConnection.listarVideos()
	
	listaAPI.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)))
}

listarVideos()