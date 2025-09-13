// Define the interface User with an optional 'bio' property
interface User {
    username: string;
    email: string;
    bio?: string; // optional
}

// Create a user object with all properties
const userWithBio: User = {
    username: "john_doe",
    email: "john@example.com",
    bio: "I love coding and coffee."
};

// Create another user object without the optional bio
const userWithoutBio: User = {
    username: "jane_smith",
    email: "jane@example.com"
};

// Function to display user information
function displayUserInfo(user: User): void {
    console.log("Username:", user.username);
    console.log("Email:", user.email);

    // Only display bio if it exists
    if (user.bio) {
        console.log("Bio:", user.bio);
    } else {
        console.log("Bio: Not provided");
    }

    console.log("-----"); // separator for readability
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const showUsersBtn = document.getElementById("showUsersBtn") as HTMLButtonElement | null;

    if (!showUsersBtn) return;

    showUsersBtn.addEventListener("click", () => {
        displayUserInfo(userWithBio);
        displayUserInfo(userWithoutBio);
        alert("User info displayed in the console.");
    });
});
