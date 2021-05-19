<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'econuoha@uh.edu';
    $email_subject = 'New Form Submission';
    $email_body = 'User Name: $firstname.\n'. 
                    'User Email:$visitor_email.\n'.
                        'User Message:$message.\n';
    $to = 'emanonuoha@gmail.com';
    $headers = 'From:$email_from\r\n';
    $headers = 'Reply-To:$visitor_email\r\n';
        mail($to, $email_subject, $email_body, $headers);
        header(Location: contact.html);

?>