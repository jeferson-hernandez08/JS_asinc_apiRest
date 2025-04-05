function ajax() {
    // Se cre objeto ForData para representar datos de formulario
    let data = new FormData();
    data.append('num1', 3);     // append: Agregar datos un formulario | Se agrega un dato al formulario
    data.append('num2', 8);     // append: Agregar datos un formulario | Se agrega un dato al formulario

    // Se crea objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();
    const url = 'operacion.php';

    xhr.onreadystatechange = function() {
        // Se valida con el readyState y status de la peticion
        // readyState: 4 = Petición completada y respuesta lista
        // status: 200 = Petición exitosa
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('Estado> ' + xhr.readyState + ' - Status> ' + xhr.readyState);
            console.log(xhr.responseText);
        } else {
            console.log('Estado> ' + xhr.readyState + ' - Status> ' + xhr.readyState);
        }
    };
    xhr.open('POST', url, true);   // Se abre la conexión
    xhr.send(data);   // Se envía la petición

    

};

ajax(); // Se invoca la funcion ajax