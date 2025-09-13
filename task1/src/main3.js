// Function to prompt for book details
function promptForBook() {
    var bookTitleEl = document.getElementById("bookTitle");
    var bookAuthorEl = document.getElementById("bookAuthor");
    var bookPublicationYearEl = document.getElementById("bookPublicationYear");
    if (!bookTitleEl || !bookAuthorEl || !bookPublicationYearEl) {
        alert("Required input fields are missing from the DOM.");
        return null;
    }
    // Get user input for book details
    var bookTitle = bookTitleEl.value.trim();
    var bookAuthor = bookAuthorEl.value.trim();
    var bookPublicationYear = parseInt(bookPublicationYearEl.value);
    // Validate inputs
    if (!bookTitle || !bookAuthor || isNaN(bookPublicationYear)) {
        alert("Please fill in all fields with valid values.");
        return null;
    }
    // Create a Book object
    var book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    var submitBtn = document.getElementById("submitBtn");
    var resultContainer = document.getElementById("resultContainer");
    var bookDetailsOutput = document.getElementById("bookDetailsOutput");
    if (!submitBtn || !resultContainer || !bookDetailsOutput) {
        console.error("One or more required DOM elements are missing.");
        return;
    }
    // Add event listener to the button
    submitBtn.addEventListener("click", function () {
        var bookDetails = promptForBook();
        if (bookDetails) {
            // Display the details of the book object to the user
            bookDetailsOutput.innerHTML = "\n                <div class=\"book-detail\"><span class=\"detail-label\">Title:</span> ".concat(bookDetails.title, "</div>\n                <div class=\"book-detail\"><span class=\"detail-label\">Author:</span> ").concat(bookDetails.author, "</div>\n                <div class=\"book-detail\"><span class=\"detail-label\">Publication Year:</span> ").concat(bookDetails.publicationYear, "</div>\n            ");
            resultContainer.style.display = "block";
            // Also log to console
            console.log("Book Details:");
            console.log("Title: ".concat(bookDetails.title));
            console.log("Author: ".concat(bookDetails.author));
            console.log("Publication Year: ".concat(bookDetails.publicationYear));
        }
    });
});
