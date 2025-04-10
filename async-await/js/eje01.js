// Esta es una función asyncrona
async function getText(params) {
    return "Hello ADSO";    // Aquí en realidad retorna una promesa
}

// La función anterior con promesas
function getText2() {
    return Promise.resolve("Hello ADSO 2!");   // Una promose se cumple o no se cumple: Suceden dos cosas
}

async function getCountries(params) {
    try {                                       // Siempre que manejemos los errors podemos usar el el try catch
        const url = 'https://restcountries.coms/v3.1/all';
        const resp = await fetch(url);
        //const data = await resp.json();
        console.log(resp.ok);
        console.log(resp.status);
        console.log(resp);
        if(resp.ok && resp.status == 200) {
            const data = await resp.json();
            console.log(data);
        } else {
            throw new Error("Error en llamado de API");
        }
    } catch (error) {
        console.log(`Mi errorsito: ${error}`);   
    }
}