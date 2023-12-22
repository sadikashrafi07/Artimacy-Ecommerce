function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create a FormData object to send data to the server
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: POST-type request, send data as JSON
    xhr.open("POST", "signin.php", true);

    // Define the function to run on successful data submission
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parse the JSON response
            var response = JSON.parse(xhr.responseText);

            if (response.success) {
                // Clear any previous error message
                document.getElementById("error-message").textContent = "";
                // Display a login successful message using a popup
                alert("Login successful!");
                // Allow the form to submit naturally or redirect to a new page
                window.location.href = "index.html";
                return true;
            } else {
                // Display an error message below the password field
                document.getElementById("error-message").textContent = "Invalid username or password.";
                // Prevent the form submission
                return false;
            }
        }
    };

    // Send the request with the form data
    xhr.send(formData);

    // Prevent the form from submitting naturally
    return false;
}


