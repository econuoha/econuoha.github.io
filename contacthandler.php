<?php

        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $visitor_email = $_POST['email'];
        $message = $_POST['message'];
        $company = $_POST['company'];

        $mailTo = "econuoha@uh.edu";
        $headers = "From: ".$visitor_email;
        $txt = "You have received an e-mail from ".$firstname." ".$lastname.".".$company."".$message;
        $email_subject = "Website Contact: ".$firstname." ".$company.;
        mail($mailTo, $email_subject, $txt, $headers);
        header("Location: contact.html?mailsend");

?>