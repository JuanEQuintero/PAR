<?php
include("conexion.php");


if (!empty($_POST["registrar"])) {
    if(!empty(($_POST["nombre"])) or !empty(($_POST["email"])) or !empty(($_POST["pet"])) or !empty(($_POST["password"])) or !empty(($_POST["confirm"]))){
        $nombre = $_POST["nombre"];
        $correo = $_POST["email"];
        $usuario = $_POST["pet"];
        $contraseña = $_POST["password"];
        $confirmacion = $_POST["confirm"];
        $sql=$connection->query("INSERT INTO registro (nombre, correo, usuario, contraseña, confirmacion) 
        VALUES ('$nombre', '$correo','$usuario', '$contraseña', '$confirmacion')");
        if ($sql == 1) {
            echo '<div class = "alerta">Usuario registrado correctamente</div>';
        }else{
            echo '<div class = "alerta">error al registrar</div>';
        }

    }else{
        echo '<div class = "alerta">Uno de los campos esta vacio</div> ';
    }
    
}


?>
    

