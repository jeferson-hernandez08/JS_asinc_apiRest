const url = 'https://dragonball-api.com/api/';       // Url de la API Dragon Ball
const charactersGrid = document.getElementById('characters-grid');

// Aqui por esto era el error hay que iniciar cuando el DOM y que esté listo
document.addEventListener('DOMContentLoaded', setCharacters);


function setCharacters() {
    fetch(`${url}characters`)    // Url para acceder a todos los personajes (Documentacion)
        // El primer Then obtiene el Json de la respuesta
        .then(resp => resp.json())
        .then(data => {            // Objeto data es array de toda la API
            console.log('Datos recibidos:', data);
            charactersGrid.innerHTML = ''; // Limpiar el contenedor

            data.items.sort((a, b) => a.name.localeCompare(b.name));    // Para ordenar los personajes alfabeticamente

            data.items.map((character) => {                                  // Se le agrega .items por que los personajes están dentro de data.items
                //htmlOptions += `<option value="${item.id}">${item.name}</option>`;
                createCharacterCard(character);     // Lamamos la funcion mandano el parametro
            });
            // data.forEach((item) => {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // })
            // for (let item of data) {
            //     htmlOptions += `<option value="${item.cca3}">${item.name.common}</option>`;
            // }
        })
}


function createCharacterCard(character) {         
    //alert('Personaje id Codigo: ' + this.value);
    const card = document.createElement('div');
    card.className = 'character-card';    // DOM

    console.log('Datos de nombres:', character.name);
    console.log('Dato de raza:', character.race);

     // Creamos variable para usar iamged
     const imageUrl = character.image || 'https://via.placeholder.com/250x200?text=Imagen+no+disponible';
    
     card.innerHTML = `
        <img src="${imageUrl}" 
             alt="${character.name || 'Personaje sin nombre'}" 
             class="character-image"
             onerror="this.src='https://via.placeholder.com/250x200?text=Imagen+no+disponible' width="100"">
        <div class="character-info">
            <h3 class="character-name">${character.name || 'Desconocido'}</h3>
            <p class="character-detail"><span>Raza:</span> ${character.race || 'Desconocida'}</p>
            <p class="character-detail"><span>Género:</span> ${character.gender || 'Desconocido'}</p>
            <p class="character-detail"><span>Afiliación:</span> ${character.affiliation || 'Desconocida'}</p>
            ${character.ki ? `<p class="character-detail"><span>Ki:</span> ${character.ki}</p>` : ''}
            ${character.description ? `<p class="character-description">${character.description}</p>` : ''}
        </div>
    `;
    
    charactersGrid.appendChild(card);
}

