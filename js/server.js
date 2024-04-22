const http = require('http');

// Función para manejar las solicitudes HTTP
const requestHandler = (request, response) => {
    // Configura las cabeceras de respuesta para permitir CORS (Cross-Origin Resource Sharing)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Verifica la ruta de la solicitud
    if (request.url === '/videos' && request.method === 'GET') {
        // Simula una respuesta con una lista de vídeos
        const videos = [
            { id: 1, title: 'Video 1', url: 'https://example.com/video1' },
            { id: 2, title: 'Video 2', url: 'https://example.com/video2' }
        ];

        // Devuelve la lista de vídeos como JSON
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(videos));
    } else {
        // Maneja otras rutas o métodos de solicitud
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Ruta no encontrada');
    }
};

// Crea un servidor HTTP y asigna el manejador de solicitudes
const server = http.createServer(requestHandler);

// Inicia el servidor y escucha en el puerto 3001
server.listen(3001, (err) => {
    if (err) {
        return console.error('Error al iniciar el servidor:', err);
    }
    console.log('Servidor Node.js escuchando en el puerto 3001');
});
