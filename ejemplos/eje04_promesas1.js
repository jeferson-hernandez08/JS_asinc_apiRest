const promise = new Promise((resolve, reject) => {   // Se crea una promesa
    // Generar un numero de manera aleatoria
    let number = Math.floor(Math.random() * 10);    // Se genera un numero aleatorio entre 0 y 10

    setTimeout(() => {      // Se ejecuta una funcion despues de un determinado tiempo
        if (number > 5) {   // Si el numero es mayor a 5
            resolve(number);    // Se resuelve la promesa con el numero generado            
        } else {
            reject("El número es menor o igual a 5");     // Se rechaza la promesa con el numero generado
        }
    }, 1000);
});

promise
    .then(number => { console.log('Número: ' + number) })         // Se ejecuta si la promesa se resuelve con exito                 
    .catch(error => { console.error('Error: ' + error) });        // Se ejecuta si la promesa se rechaza  
     
    