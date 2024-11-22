<?php
$server = "localhost";
$user = "root";
$pass = "";
$db = "eventos";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_errno) {

    die("Conexion Fallida" $conexion->connect_errno);

} else {
     echo" conectado";

}

function closeConexion($conexion) {
    $conexion->close();
}

closeConexion($conexion);
?>