<?php
$num1 = intval($_POST['num1']) ?? 0;   // intval: Hace lo que este adentro del post lo convierta a un entero
$num2 = intval($_POST['num2']) ?? 0;

$suma = $num1 + $num2;

echo $suma;