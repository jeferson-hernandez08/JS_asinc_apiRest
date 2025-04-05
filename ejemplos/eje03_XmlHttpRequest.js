document.getElementById("btn_enviar").addEventListener("click", ajax);

function ajax(event) {
    //alert("Envío de datos al servidor ...");
    // Se previene que se envíe el formulario automaticamente
    event.preventDefault();      // Evita recargar el tipe submit  
    let formElement = document.getElementById("myForm");
    let formData = new FormData(formElement);   // Tomamos los datos del formulario

    const xhr = new XMLHttpRequest();
    const url = 'operacion.php';

    xhr.addEventListener('load', resultado);
    xhr.open('POST', url);
    xhr.send(formData); 
}

function resultado() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            //alert(this.responseText);
            //const resultado = document.getElementById('txtResult');     // .value: capturar el dato de un input. innerhtml: Para capturar dato de un div
            //resultado.value = this.responseText;  
            const resultado = document.getElementById('resultado');
            resultado.style.display = 'block';
            resultado.innerHTML = 'Resultado: '+this.responseText;
        } else {
            alert("Error en la petición");
        }
    }
    
}