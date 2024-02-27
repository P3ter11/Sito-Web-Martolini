<?php

$email = $_POST['email'];
$nome = $_POST['nome'];
$telefono = $_POST['telefono'];
$richiesta = $_POST['richiesta'];
$citta = $_POST['citta'];
$indirizzo = $_POST['indirizzo'];
$provincia = $_POST['provincia'];
$oggetto = $_POST['oggetto'];

$to = "m4rt0z01@gmail.com";

$emailBody = 
"<html>
<head>
    <title>New Email from ".$nome."</title>
</head>
<body>
    <h2>You have a new message from the website!</h2>
    <p><b>Name: </b>".$nome."</p>
    <p><b>Email: </b>".$email."</p>
    <p><b>Telephone number: </b>".$telefono."</p>
    <p><b>City: </b>".$citta.", ".$provincia."</p>
    <p><b>Address: </b>".$indirizzo."</p>
    <p><b>Requested service: </b>".$richiesta."</p>
    
</body>
</html>";

/* mail($to, $oggetto, $emailBody); */
echo 'Your email has been sent successfully';
echo $emailBody;
?>