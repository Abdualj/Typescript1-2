// Type alias for Book
type Book = {
    title: string;
    author: string;
    publicationYear: number;
};

// Function to prompt for book details
function promptForBook(): Book | null {
    const bookTitleEl = document.getElementById("bookTitle") as HTMLInputElement | null;
    const bookAuthorEl = document.getElementById("bookAuthor") as HTMLInputElement | null;
    const bookPublicationYearEl = document.getElementById("bookPublicationYear") as HTMLInputElement | null;

    if (!bookTitleEl || !bookAuthorEl || !bookPublicationYearEl) {
        alert("Required input fields are missing from the DOM.");
        return null;
    }

    // Get user input for book details
    const bookTitle = bookTitleEl.value.trim();
    const bookAuthor = bookAuthorEl.value.trim();
    const bookPublicationYear = parseInt(bookPublicationYearEl.value);

    // Validate inputs
    if (!bookTitle || !bookAuthor || isNaN(bookPublicationYear)) {
        alert("Please fill in all fields with valid values.");
        return null;
    }

    // Create a Book object
    const book: Book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };

    return book;
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement | null;
    const resultContainer = document.getElementById("resultContainer") as HTMLElement | null;
    const bookDetailsOutput = document.getElementById("bookDetailsOutput") as HTMLElement | null;

    if (!submitBtn || !resultContainer || !bookDetailsOutput) {
        console.error("One or more required DOM elements are missing.");
        return;
    }

    // Add event listener to the button
    submitBtn.addEventListener("click", () => {
        const bookDetails = promptForBook();

        if (bookDetails) {
            // Display the details of the book object to the user
            bookDetailsOutput.innerHTML = `
                <div class="book-detail"><span class="detail-label">Title:</span> ${bookDetails.title}</div>
                <div class="book-detail"><span class="detail-label">Author:</span> ${bookDetails.author}</div>
                <div class="book-detail"><span class="detail-label">Publication Year:</span> ${bookDetails.publicationYear}</div>
            `;

            resultContainer.style.display = "block";

            // Also log to console
            console.log("Book Details:");
            console.log(`Title: ${bookDetails.title}`);
            console.log(`Author: ${bookDetails.author}`);
            console.log(`Publication Year: ${bookDetails.publicationYear}`);
        }
    });
});

