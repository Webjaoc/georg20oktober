<?php
// Verificar que el formulario fue enviado por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $anrede = htmlspecialchars($_POST["anrede"]);
    $titel = htmlspecialchars($_POST["titel"]);
    $vorname = htmlspecialchars($_POST["vorname"]);
    $nachname = htmlspecialchars($_POST["nachname"]);
    $email = htmlspecialchars($_POST["email"]);
    $firma = htmlspecialchars($_POST["firma"]);
    
    // Dirección de correo de destino
    $destinatario = "oyhenartjorge@gmail.com";
    
    // Asunto del correo
    $asunto = "Formulario de Contacto";
    
    // Cuerpo del mensaje
    $mensaje = "Anrede: $anrede\n";
    $mensaje = "Titel: $titel\n";
    $mensaje = "Name: $vorname\n";
    $mensaje .= "Nachname: $nachname\n";
    $mensaje .= "Email: $email\n";
    $mensaje .= "Firma: $firma\n";
    
    // Encabezados del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Enviar el correo
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Hubo un error al enviar el mensaje";
    }
} else {
    echo "Método de envío no válido";
}
