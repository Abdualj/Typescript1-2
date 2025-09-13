// Factory functions
function createElectronicDevice(brand, model) {
    return { type: "electronic", brand: brand, model: model };
}
function createBook(title, author) {
    return { type: "book", title: title, author: author };
}
// Display the details of a product
function displayProductDetails(product) {
    var resultContainer = document.getElementById("resultContainer");
    var resultTitle = document.getElementById("resultTitle");
    var productDetails = document.getElementById("productDetails");
    if (!resultContainer || !resultTitle || !productDetails) {
        console.error("Result container elements not found in DOM.");
        return;
    }
    resultTitle.textContent =
        product.type === "electronic" ? "Electronic Device Details:" : "Book Details:";
    var detailsHTML = "\n        <div class=\"product-detail\"><span class=\"detail-label\">Product Type:</span> ".concat(product.type, "</div>\n    ");
    if (product.type === "electronic") {
        detailsHTML += "\n            <div class=\"product-detail\"><span class=\"detail-label\">Brand:</span> ".concat(product.brand, "</div>\n            <div class=\"product-detail\"><span class=\"detail-label\">Model:</span> ").concat(product.model, "</div>\n        ");
    }
    else {
        detailsHTML += "\n            <div class=\"product-detail\"><span class=\"detail-label\">Title:</span> ".concat(product.title, "</div>\n            <div class=\"product-detail\"><span class=\"detail-label\">Author:</span> ").concat(product.author, "</div>\n        ");
    }
    productDetails.innerHTML = detailsHTML;
    resultContainer.style.display = "block";
    // Console log
    console.log(product);
}
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Tab switching
    var tabs = document.querySelectorAll(".tab");
    var electronicForm = document.getElementById("electronicForm");
    var bookForm = document.getElementById("bookForm");
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            tabs.forEach(function (t) { return t.classList.remove("active"); });
            tab.classList.add("active");
            var tabName = tab.getAttribute("data-tab");
            if (tabName === "electronic") {
                if (electronicForm)
                    electronicForm.style.display = "block";
                if (bookForm)
                    bookForm.style.display = "none";
            }
            else {
                if (electronicForm)
                    electronicForm.style.display = "none";
                if (bookForm)
                    bookForm.style.display = "block";
            }
        });
    });
    // Device button
    var createDeviceBtn = document.getElementById("createDeviceBtn");
    if (createDeviceBtn) {
        createDeviceBtn.addEventListener("click", function () {
            var brandEl = document.getElementById("deviceBrand");
            var modelEl = document.getElementById("deviceModel");
            if (!brandEl || !modelEl)
                return alert("Device input fields missing.");
            var brand = brandEl.value.trim();
            var model = modelEl.value.trim();
            if (!brand || !model)
                return alert("Please fill in all fields for the electronic device.");
            displayProductDetails(createElectronicDevice(brand, model));
        });
    }
    // Book button
    var createBookBtn = document.getElementById("createBookBtn");
    if (createBookBtn) {
        createBookBtn.addEventListener("click", function () {
            var titleEl = document.getElementById("bookTitle");
            var authorEl = document.getElementById("bookAuthor");
            if (!titleEl || !authorEl)
                return alert("Book input fields missing.");
            var title = titleEl.value.trim();
            var author = authorEl.value.trim();
            if (!title || !author)
                return alert("Please fill in all fields for the book.");
            displayProductDetails(createBook(title, author));
        });
    }
});
