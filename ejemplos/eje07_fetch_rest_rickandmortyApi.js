let selectCharacters = document.querySelector("#slRickAndMorty");
const url = 'https://rickandmortyapi.com/api/';       // Url de la API Rick And Morty

selectCharacters.addEventListener("change", infoCharacter);

function setCharacters() {
    fetch(`${url}character`)    // Url para acceder a todos los personajes (Documentacion)
        // El primer Then obtiene el Json de la respuesta
        .then(resp => resp.json())
        .then(data => {            // Objeto data es array de toda la API
            let htmlOptions = "";
            console.log(data);
            data.results.sort((a, b) => a.name.localeCompare(b.name));    // Para ordenar los personajes alfabeticamente
            data.results.map((item) => {                                  // Se le agrega .results por que los personajes están dentro de data.results
                htmlOptions += `<option value="${item.id}">${item.name}</option>`;
            });
            console.log('Nombre: ' + data.results[1].name + ' ID: ' + data.results[1].id);    // Prueba con el profe
            // data.forEach((item) => {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // })
            // for (let item of data) {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // }
            selectCharacters.innerHTML = htmlOptions;
        })
}
// Se llama al inicio la función que trae todos los personajes y los coloca en el select
setCharacters(); 

function infoCharacter() {      
    alert('Personaje id Codigo: ' + this.value);
    let id = this.value;
    fetch(`${url}character/${id}`)            // Url para acceder a un personaje (Documentacion).
        // El primer Then obtiene el Json de la respuesta    
        .then(resp => resp.json())
        .then(data => { 
            console.log(data);
            console.log(data.name);
            console.log(data.species);
            
            document.getElementById("tbodyRickAndMorty").innerHTML += `    
            <tr>
                <th>${data.name}</th>
                <th>${data.species}</th>
                <th>${data.gender}</th>
                <th>${data.origin.name}</th>
                <th>${data.location.name}</th>
                <td><img src="${data.image}" alt="${data.name}" width="100"></td>
            </tr>`;
        })
}

//new DataTable('#rickandmorty-info');