<?php
    if(isset($_POST['submit'])){
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'econuoha@uh.edu';
    $headers = "From: "$visitor_email;
    $txt = "You have recieved an e-mail from ".$firstname.".\n\n".$message;
    
    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact.html?mailsend");
    }