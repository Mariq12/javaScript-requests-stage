# Alura Play
## Descripción
Proyecto realizado en el Curso de Javascript: consumiendo y manejando datos de una API de  Alura Latam.

**Comandos utilizados:**

Para crear el archivo `package.json`:

`npm init`

Para crear la carpeta `node_modules`:

`npm install json-server`

Luego de crear la carpeta `node_modules` ir al buscador de windows y buscar Windows PoweShell.

    Ejecutar clic derecho como administrador.
    Ejecutar el comado:
`Set-ExecutionPolicy RemoteSigned`

Set-ExecutionPolicy RemoteSigned permitirá ejeuctar código JavaScript
    Seleccionar SI "S"


De forma local dentro de VSCode ejecutar:

`npx json-server --watch db.json --port 3001`

Este comando dice que ejecute el servidor JSON server, observando el archivo `db.json` en el puerto 3001.

Se usa un identificador en el index para indicar que los videos se van a mostrar dentro de la tag ul através de un identificador
ese identificador se coloca usando el patron *data-* y una palabra en este caso es lista

Esto se lama data structure. Este es un elemento que permite individualizar o identificar los elementos existentes dentro del HTML y ser llamados dentro del archivo JS.
`data-lista`

Comando de teclado para agregar comillas invertidas:

` Ctrl + Alt + llave = `` `

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

