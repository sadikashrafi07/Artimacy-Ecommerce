<?php
// Assuming you have a MySQL database connection
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_dbname";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the username and password from the AJAX request
$username = $_POST["username"];
$password = $_POST["password"];

// Query to check the username and password in the database
$sql = "SELECT * FROM registration WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    // Valid username and password
    $response["success"] = true;
} else {
    // Invalid username or password
    $response["success"] = false;
}

// Send the JSON response back to the JavaScript
echo json_encode($response);

// Close the database connection
$conn->close();
?>
