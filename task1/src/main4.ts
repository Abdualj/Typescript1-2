// Define type aliases for products
type ElectronicDevice = {
    type: "electronic";
    brand: string;
    model: string;
};

type Book = {
    type: "book";
    title: string;
    author: string;
};

type Product = ElectronicDevice | Book;

// Factory functions
function createElectronicDevice(brand: string, model: string): ElectronicDevice {
    return { type: "electronic", brand, model };
}

function createBook(title: string, author: string): Book {
    return { type: "book", title, author };
}

// Display the details of a product
function displayProductDetails(product: Product): void {
    const resultContainer = document.getElementById("resultContainer") as HTMLElement | null;
    const resultTitle = document.getElementById("resultTitle") as HTMLElement | null;
    const productDetails = document.getElementById("productDetails") as HTMLElement | null;

    if (!resultContainer || !resultTitle || !productDetails) {
        console.error("Result container elements not found in DOM.");
        return;
    }

    resultTitle.textContent =
        product.type === "electronic" ? "Electronic Device Details:" : "Book Details:";

    let detailsHTML = `
        <div class="product-detail"><span class="detail-label">Product Type:</span> ${product.type}</div>
    `;

    if (product.type === "electronic") {
        detailsHTML += `
            <div class="product-detail"><span class="detail-label">Brand:</span> ${product.brand}</div>
            <div class="product-detail"><span class="detail-label">Model:</span> ${product.model}</div>
        `;
    } else {
        detailsHTML += `
            <div class="product-detail"><span class="detail-label">Title:</span> ${product.title}</div>
            <div class="product-detail"><span class="detail-label">Author:</span> ${product.author}</div>
        `;
    }

    productDetails.innerHTML = detailsHTML;
    resultContainer.style.display = "block";

    // Console log
    console.log(product);
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
    // Tab switching
    const tabs = document.querySelectorAll(".tab");
    const electronicForm = document.getElementById("electronicForm") as HTMLElement | null;
    const bookForm = document.getElementById("bookForm") as HTMLElement | null;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const tabName = tab.getAttribute("data-tab");
            if (tabName === "electronic") {
                if (electronicForm) electronicForm.style.display = "block";
                if (bookForm) bookForm.style.display = "none";
            } else {
                if (electronicForm) electronicForm.style.display = "none";
                if (bookForm) bookForm.style.display = "block";
            }
        });
    });

    // Device button
    const createDeviceBtn = document.getElementById("createDeviceBtn") as HTMLButtonElement | null;
    if (createDeviceBtn) {
        createDeviceBtn.addEventListener("click", () => {
            const brandEl = document.getElementById("deviceBrand") as HTMLInputElement | null;
            const modelEl = document.getElementById("deviceModel") as HTMLInputElement | null;

            if (!brandEl || !modelEl) return alert("Device input fields missing.");

            const brand = brandEl.value.trim();
            const model = modelEl.value.trim();
            if (!brand || !model) return alert("Please fill in all fields for the electronic device.");

            displayProductDetails(createElectronicDevice(brand, model));
        });
    }

    // Book button
    const createBookBtn = document.getElementById("createBookBtn") as HTMLButtonElement | null;
    if (createBookBtn) {
        createBookBtn.addEventListener("click", () => {
            const titleEl = document.getElementById("bookTitle") as HTMLInputElement | null;
            const authorEl = document.getElementById("bookAuthor") as HTMLInputElement | null;

            if (!titleEl || !authorEl) return alert("Book input fields missing.");

            const title = titleEl.value.trim();
            const author = authorEl.value.trim();
            if (!title || !author) return alert("Please fill in all fields for the book.");

            displayProductDetails(createBook(title, author));
        });
    }
});
