<?php
$nombre = $_POST['txtNombre'] ?? "";
$email  = $_POST['txtEmail'] ?? "";
$edad   = $_POST['txtEdad'] ?? "";

// Llamar a la base de datos y guardar la info
if ($nombre == "" || $email == "" || $edad == "") {
    $mensaje = "Todos los campos son obligatorios";
} else {
    $mensaje = "Usted se llama $nombre, su email es $email";
    if ($edad > 18) {
        $mensaje .= " y es mayor de edad";
    } else {
        $mensaje .= " y es menor de edad";
    }
}
echo $mensaje;
