document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Get the values of username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are empty
    if (username === "" || password === "") {
        alert("Please fill in both username and password fields.");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else {
        // If the fields are filled correctly, navigate to the main_page.html
        window.location.href = "main_page.html";
    }
});