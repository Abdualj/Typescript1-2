// Create a user object with all properties
var userWithBio = {
    username: "john_doe",
    email: "john@example.com",
    bio: "I love coding and coffee."
};
// Create another user object without the optional bio
var userWithoutBio = {
    username: "jane_smith",
    email: "jane@example.com"
};
// Function to display user information
function displayUserInfo(user) {
    console.log("Username:", user.username);
    console.log("Email:", user.email);
    // Only display bio if it exists
    if (user.bio) {
        console.log("Bio:", user.bio);
    }
    else {
        console.log("Bio: Not provided");
    }
    console.log("-----"); // separator for readability
}
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    var showUsersBtn = document.getElementById("showUsersBtn");
    if (!showUsersBtn)
        return;
    showUsersBtn.addEventListener("click", function () {
        displayUserInfo(userWithBio);
        displayUserInfo(userWithoutBio);
        alert("User info displayed in the console.");
    });
});
