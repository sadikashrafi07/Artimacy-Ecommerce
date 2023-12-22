// Function to retrieve registered usernames from local storage
function getRegisteredUsernames() {
    var usernames = JSON.parse(localStorage.getItem("registeredUsernames")) || [];
    return usernames;
}

// Function to save registered username to local storage
function saveRegisteredUsername(username) {
    var usernames = getRegisteredUsernames();
    usernames.push(username);
    localStorage.setItem("registeredUsernames", JSON.stringify(usernames));
}

function validateSignUpForm() {
    // Get form inputs
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var accountType = document.querySelector('input[name="accountType"]:checked');
    var address = document.getElementById("address").value;

    // Validation checks
    if (fullname === "" || email === "" || username === "" || password === "" || !accountType || address === "") {
        displayErrorMessage("All fields must be filled out.");
        return false;
    }

    // Check for unique username
    if (isUsernameTaken(username)) {
        displayErrorMessage("Username already taken. Please choose a different username.");
        return false;
    }

    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayErrorMessage("Invalid email format.");
        return false;
    }

    // Password strength check (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        displayErrorMessage("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    // Register the username in local storage
    saveRegisteredUsername(username);

    // Registration successful, show pop-up and redirect
    showSuccessPopUp();
    redirectToSignInPage();

    // Return false to prevent the form from submitting 
    return false;
}

function displayErrorMessage(message) {
    var errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
}

function isUsernameTaken(username) {
    //  it Checks if the username is already registered
    var registeredUsernames = getRegisteredUsernames();
    return registeredUsernames.includes(username);
}

function showSuccessPopUp() {
    alert("Registered successfully!");
}

function redirectToSignInPage() {
    
    window.location.href = "SignIN.html";
}