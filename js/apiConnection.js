async function listarVideos(){
    const connection = await fetch('http://localhost:3001/videos');

    const connectionConvert = connection.json();
    
    //console.log(connectionConvert);
	return connectionConvert
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const connection = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    })
    const connectionConvert = connection.json();

    if(!connection.ok){
        throw new Error("No es posible enviar el video");
    }

    return connectionConvert;
}

async function buscarVideo(palabraClave) {
    const url = `http://localhost:3001/videos/${palabraClave}`;
    console.log(url);
    try {
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
            // Manejar errores de respuesta no exitosa (404 u otros códigos de error)
            throw new Error(`Error al buscar video: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Capturar errores de red u otros errores de fetch
        console.error('Error en la búsqueda de video:', error.message);
        throw error; // Re-lanzar el error para que se maneje en el código que llama a esta función
    }
}

// Funcion que buusca por el nombre
async function filtrar(nombre) {
    try {
        const videos = await listarVideos(); // Obtener la lista completa de videos

        // Filtrar videos por título que contenga el nombre buscado (ignorar mayúsculas/minúsculas)
        const videosFiltrados = videos.filter(video =>
            video.titulo.toLowerCase().includes(nombre.toLowerCase())
        );

        return videosFiltrados; // Devolver el array de videos filtrados
    } catch (error) {
        console.error('Error al filtrar videos:', error.message);
        throw error;
    }
}

export const apiConnection={
	listarVideos,enviarVideo,buscarVideo,filtrar
}