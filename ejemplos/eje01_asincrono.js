console.log("Ejecutando eje01_asincrono.js...");

console.log("paso 1");

setTimeout(() => {            // Funcion para ejecutar un codigo en un determinado tiempo
    console.log("Paso 2");
}, 1000);

setTimeout(function () {            // La funcion flecha nos representa la funcion, es lo mismo que hacer la funtion, pero de forma mas reducida
    console.log("Paso 3");
}, 700);

console.log("paso 4");

// ******************************************************************************
let b;
console.log('a');

setTimeout(() => {            
    b = 5;
    console.log(b);
}, 500);
console.log(b);   // undefined