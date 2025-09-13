"use strict";
// Create a user object using the defined interface. Add all properties
const user1 = {
    username: "john_doe",
    email: "john@example.com",
    bio: "Software developer passionate about TypeScript and web development"
};
// Create another user object using the defined interface. Don't add bio
const user2 = {
    username: "jane_smith",
    email: "jane@example.com"
};
// Function to display user information
function displayUserInfo(user) {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    // Check if bio exists and display it if provided
    if (user.bio) {
        console.log(`Bio: ${user.bio}`);
    }
    else {
        console.log("Bio: Not provided");
    }
    console.log("---"); // Separator for readability
}
// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
