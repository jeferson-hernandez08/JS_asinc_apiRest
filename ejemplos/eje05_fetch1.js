let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", fetchData);

function fetchData(event) {
    //Evita que se envíe el formulario
    event.preventDefault();
    const url = 'procesarDatosUsuario.php';
    // Obtenemos los datos del formulario
    const formData = new FormData(myForm);
    // Enviamos los datos al servidor | Se realiza la petición con fetch
    fetch(url, {
        method: 'POST',   // Se envíam datos por POST
        body: formData    // Se envían los datos formulario
    })
    .then(resp => {
        if (resp.ok) {
            // Devuelve una Promesa con el texto de la respuesta
            return resp.text();
        }  
     })

    .then(data => {
        document.getElementById("resultado").innerHTML = data; 
        document.getElementById("resultado").style.display = 'block';
        myForm.reset();
    })

    .catch(error => console.error("Error", error));
   
        

}