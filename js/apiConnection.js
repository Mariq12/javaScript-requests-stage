async function listarVideos(){
    const connection = await fetch('http://localhost:3001/videos');

    const connectionConvert = connection.json();
    
    //console.log(connectionConvert);
	return connectionConvert
}

export const apiConnection={
	listarVideos
}

//listarVdeos();





/*const fetch = require('node-fetch');

async function listarVdeos() {
    try {
        const response = await fetch('http://localhost:3001/videos');
        if (!response.ok) {
            throw new Error(`Error al obtener la lista de vídeos: ${response.statusText}`);
        }
        const videos = await response.json();
        console.log('Lista de vídeos:', videos);
    } catch (error) {
        console.error('Error al obtener la lista de vídeos:', error);
    }
}

// Llama a la función listarVdeos() para hacer la solicitud
listarVdeos();*/



