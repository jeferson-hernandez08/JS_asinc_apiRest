let selectCountries = document.querySelector("#slPaises");
const url = 'https://restcountries.com/v3.1/';

selectCountries.addEventListener("change", infoCountry);

function setCountries() {
    fetch(`${url}all`)
        // El primer Then obtiene el Json de la respuesta
        .then(resp => resp.json())
        .then(data => { 
            let htmlOptions = "";
            console.log(data);
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));    // Para ordenar los países alfabeticamente
            data.map((item) => {
                htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            });
            // data.forEach((item) => {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // })
            // for (let item of data) {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // }
            selectCountries.innerHTML = htmlOptions;
        })
}
// Se llama al inicio la función que trae todos los paises y los coloca en el select
setCountries(); 

function infoCountry() {
    //alert('Codigo: '+this.value);
    let code = this.value;
    fetch(`${url}alpha/${code}`) 
        // El primer Then obtiene el Json de la respuesta    
        .then(resp => resp.json())
        .then(data => { 
            console.log(data);
            console.log(data[0].name.common);
            console.log(data[0].currencies);
            console.log(data[0].languages);
            console.log(Object.values(data[0].currencies).join(', '));
            document.getElementById("tbodyCountries").innerHTML += `    
            <tr>
                <th>${data[0].name.common}</th>
                <th>${data[0].capital}</th>
                <th>${data[0].population}</th>
                <td>${data[0].currencies ? Object.values(data[0].currencies).map(currency => {return `${currency.name} (${currency.symbol})` }).join(', ') : 'No disponible'}</td>   
                <td>${data[0].languages ? Object.values(data[0].languages).join(', ') : 'No disponible'}</td>
                <th><img src="${data[0].flags.png}" with:"100px" class="img-fluid"></th>
            </tr>`;
        })
}

new DataTable('#countries-info');