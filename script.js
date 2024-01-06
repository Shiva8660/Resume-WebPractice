function toggleUserDetails() {
    var UserDetails = document.getElementById("UserDetails");
    var welcomeMessage = document.getElementById("welcomeMessage");

    if (UserDetails.style.display === "block") {
        UserDetails.style.display = "none";
    } else {
        UserDetails.style.display = "block";
        welcomeMessage.innerText = "Welcome, Shivanand Reddy"; // Change the welcome message text
    }
}
