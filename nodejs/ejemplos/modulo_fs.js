const fs = require('fs');
const path = require('path');

function leer(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        console.log(data);       // Mostrar el buffer
        callback(data.toString());   // MOstrar el contenido del archivo como texto

    })
}

function escribir(ruta, contenido) { 
    fs.writeFile(ruta, contenido, function (error) {
        if (error) {
            console.error('Error al escribir el archivo:'+error);
        } 
    })
}

//escribir(`${__dirname}/archivoTest.txt`, 'Contenido Adicional del archivo');
leer(`${__dirname}/archivoTest.txt`, console.log);    // Recibe una funcion callback como segundo argumento