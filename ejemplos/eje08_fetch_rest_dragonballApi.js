let selectCharacters = document.querySelector("#slDragonBall");
const url = 'https://dragonball-api.com/api/';       // Url de la API Dragon Ball

selectCharacters.addEventListener("change", infoCharacter);

function setCharacters() {
    fetch(`${url}characters`)    // Url para acceder a todos los personajes (Documentacion)
        // El primer Then obtiene el Json de la respuesta
        .then(resp => resp.json())
        .then(data => {            // Objeto data es array de toda la API
            let htmlOptions = "";
            console.log(data);
            //data.items.sort((a, b) => a.name.localeCompare(b.name));    // Para ordenar los personajes alfabeticamente
            data.items.map((item) => {                                  // Se le agrega .items por que los personajes están dentro de data.items
                htmlOptions += `<option value="${item.id}">${item.name}</option>`;
            });
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
    fetch(`${url}characters/${id}`)          // Url para acceder a un personaje (Documentacion).
        // El primer Then obtiene el Json de la respuesta    
        .then(resp => resp.json())
        .then(data => { 
            console.log(data);
            console.log(data.name);
            console.log(data.race);
            
            document.getElementById("tbodyDragonBall").innerHTML += `    
            <tr>
                <th>${data.name}</th>
                <th>${data.race}</th>
                <th>${data.gender}</th>
                <th>${data.affiliation}</th>
                <th>${data.description}</th>
                <td><img src="${data.image}" alt="${data.name}" width="100"></td>
            </tr>`;
        })
}

//new DataTable('#dragonball-info');