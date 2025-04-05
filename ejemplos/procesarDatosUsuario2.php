<?php
$nombre = $_POST['txtNombre'] ?? "";
$email  = $_POST['txtEmail'] ?? "";
$edad   = $_POST['txtEdad'] ?? "";

// Llamar a la base de datos y guardar la info
if ($nombre == "" || $email == "" || $edad == "") {
    $mensaje = "Todos los campos son obligatorios";
    $resp = [
        "status" => true,
        "message" => $mensaje
    ];
} else {
    $mensaje = "Usted se llama $nombre, su email es $email";
    if ($edad > 18) {
        $mensaje .= " y es mayor de edad";
    } else {
        $mensaje .= " y es menor de edad";
    }
    $resp = [
        "status" => true,
        "message" => $mensaje
    ];
}
// Establece el tipo de contenido a JSON | Especificar que le contenido de la respuesta es de tipo JSON
header("Content-Type: application/json; charset=UTF-8");
$respJson = json_encode($resp);
echo $respJson;



