// Esta es una función asyncrona
async function getText(params) {
    return "Hello ADSO";    // Aquí en realidad retorna una promesa
}

// La función anterior con promesas
function getText2() {
    return Promise.resolve("Hello ADSO 2!");   // Una promose se cumple o no se cumple: Suceden dos cosas
}