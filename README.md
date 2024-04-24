# Alura Play
## Descripción
Proyecto realizado en el Curso de Javascript: consumiendo y manejando datos de una API de  Alura Latam.

**Comandos utilizados:**

Para crear el archivo `package.json`:

    npm init

---- 

Para crear la carpeta `node_modules`:

    npm install json-server

---- 

Luego de crear la carpeta `node_modules` ir al buscador de windows y buscar Windows PoweShell.

    Ejecutar clic derecho como administrador.
    Ejecutar el comado:
    `Set-ExecutionPolicy RemoteSigned`

Set-ExecutionPolicy RemoteSigned permitirá ejeuctar código JavaScript
    Seleccionar SI "S"

---- 

De forma local dentro de VSCode ejecutar:

    npx json-server --watch db.json --port 3001

Este comando dice que ejecute el servidor JSON server, observando el archivo `db.json` en el puerto 3001.

---- 

Se usa un identificador en el index para indicar que los videos se van a mostrar dentro de la tag ul através de un identificador
ese identificador se coloca usando el patron *data-* y una palabra en este caso es lista

Esto se llama data structure. Este es un elemento que permite individualizar o identificar los elementos existentes dentro del HTML y ser llamados dentro del archivo JS.
`data-lista`

## Comando de teclado para agregar comillas invertidas

Se tiene precionado la tecla *Ctrl + Alt + llave* y como resultado se obtiene las comillass invertidas:

` Ctrl + Alt + } = `` `

Para agregar video manualmente se debe considerar esta estructura de datos y de la url del video:

    ,

        {

        "titulo": "LA PELICULA COMPLETA DE - INTERCAMBIO DE PRINCESAS 2 EN ESPAÑOL LATINO | PELICULA NAVIDEÑA",
        "descripcion": "5.58 K visualizaciones",
        "url": "https://www.youtube.com/embed/cbfhLXk4-9I",
        "imagem": "https://purr.objects-us-east-1.dream.io/i/OoNx6.jpg",
        "id": 12
        
        }

"url": "https://www.youtube.com/embed/cbfhLXk4-9I",

## Para buscar un video por el nombre:

    const connection = fetch("http://localhost:3001/videos")

    const videos = connection.json()

----

    const video_seleccionado = videos.filter(() => true)

    const video_seleccionado = videos.filter(() => false)

----

    const video_seleccionado = videos.filter((video) => video.name === "un_nombre_cualquiera")

----

    [
        {
            "id": 1,
            "name": "Primer nombre"
        },
        {
            "id": 2,
            "name": "Segundo nombre"
        },
        {
            "id": 3,
            "name": "Tercer nombre"
        }
    ]

----

    const videoSeleccionado = videos.filter((video) => video.name === "Primer nombre")

---- 

    [
        {
            "id": 1,
            "name": "Primer nombre"
        }
    ]

## Función para buscar dando enter 

En el archivo `filtrarVideo.js`, este código: 

    const inputEle = document.getElementById('buscar');
    inputEle.addEventListener('keyup', function(e){
        var key = e.which || e.keyCode;
        if (key == 13) { 
            filtrarVideo(e)
        }
    });

Permite la activación de la función filtrarVideo cuando el usuario presiona "Enter" en el campo de búsqueda.

## Para agregar Vite al proyecto

### Primero ejecutar el comando

    npm install -D

### En el archivo `package.json` agregar el script debajo de `main`

    "scripts": {
        "db": "npx json-server --watch db.json --port 3001",
        "dev": "vite"
    }

### Ejecutar el comando 

Para levantar db.json y el servidor

    npm run db

----

Para levantar el proyecto con vite

    npm run dev

