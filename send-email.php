<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address to receive the messages
    $to = "framesmillion@gmail.com";

    // Email content
    $emailSubject = "Contact Form: $subject";
    $emailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message. Try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
    