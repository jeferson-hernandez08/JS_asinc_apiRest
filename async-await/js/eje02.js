(async function () {
    try {

        const inputCodigo = document.getElementById('countryCode');
        const btnBuscar = document.getElementById('enviar');
    
        // Evento click
        btnBuscar.addEventListener('click', async function() {
            const codigo = inputCodigo.value.trim().toLowerCase();
            try {
                let pais = await infoCountry("co");   // Cargar país por defecto
                if(codigo) {
                    //infoCountry(codigo);
                    let pais = await infoCountry(codigo); 
                    console.log(pais)
                    pais = pais[0]
                    
                    const country = document.querySelector(".country");
                    country.innerHTML = `
                        <div class="country-content">
                            <h2>Pais</h2>
                            <span>${pais.name.common}</span>
                        </div>
                        <div class="country-content">
                            <h2>Capital</h2>
                            <span>${pais.capital[0]}</span>
                        </div>
                        <div class="country-content">
                            <h2>Población</h2>
                            <span>${pais.population}</span>
                        </div>
                        <div class="country-content">
                            <h2>Región</h2>
                            <span>${pais.region}</span>
                        </div>
                        <div class="country-content">
                            <h2>Continente</h2>
                            <span>${pais.continents[0]}</span>
                        </div>
                    
                    `;
                } else {
                    alert('Ingrese Codigo de País');
                }
            } catch (error) {
                const errorTarget = document.querySelector(".country");
                errorTarget.innerHTML = `
                    <div class="country-content">
                        <h2>Error:</h2>
                        <span>Error en el codigo ingresado, Ej:(co, br). Verifique Código e Intente nuevamente</span>
                    </div>
                `;
            }
        });
    } catch (error) {
        //throw new Error(`Mi errorsito: ${error}`);
        const errorTarget = document.querySelector(".country");
        errorTarget.innerHTML = `
            <div class="country-content">
                <h2>Error:</h2>
                <span>Tenemos un error de código, Verifique e intente de nuevo</span>
            </div>
        `;
    }
})();

async function infoCountry(codeCountry) { 
    const url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    const resp = await fetch(url);
    let data = null;

    if(resp.ok && resp.status == 200) {
        data = await resp.json();
        //console.log(data);
    } else {
        throw new Error("Error llamado en API");
    }
    return data;     // Lo que retorna aqui es una promesa
}


