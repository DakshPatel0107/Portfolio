<?php
// Get the form data
$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare the email
$to = "dakshpatel@gmail.com"; // Replace with your email address
$subject = "New Contact Form Submission from $firstName $lastName";
$body = "You have received a new message from your contact form.\n\n";
$body .= "First Name: $firstName\n";
$body .= "Last Name: $lastName\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
} else {
    echo "Failed to send the message. Please try again.";
}
?>
