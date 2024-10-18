<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'recipient@example.com'; // Replace with your email
    $subject = "New message from $name";
    $body = "<p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Message:</strong> $message</p>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Email sent successfully!"]);
    } else {
        echo json_encode(["error" => "Failed to send email"]);
    }
}
?>
