// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var runButton = document.getElementById('runButton');
    if (runButton) {
        runButton.addEventListener('click', function () {
            // Clear previous results
            var resultElement = document.getElementById('result');
            var cartItemsElement = document.getElementById('cartItems');
            if (resultElement && cartItemsElement) {
                resultElement.style.display = 'none';
                cartItemsElement.innerHTML = '';
                // Implementation of the shopping cart functionality
                var cart = [];
                while (true) {
                    var itemName = prompt("Enter item name (leave empty to finish):");
                    if (itemName === "" || itemName === null) {
                        break;
                    }
                    var itemPriceInput = prompt("Enter item price:");
                    var itemQuantityInput = prompt("Enter item quantity:");
                    if (itemPriceInput === null || itemQuantityInput === null) {
                        break;
                    }
                    var itemPrice = parseFloat(itemPriceInput);
                    var itemQuantity = parseInt(itemQuantityInput);
                    if (isNaN(itemPrice) || isNaN(itemQuantity)) {
                        alert("Invalid input. Please enter valid numbers for price and quantity.");
                        continue;
                    }
                    var newItem = {
                        name: itemName,
                        price: itemPrice,
                        quantity: itemQuantity
                    };
                    cart.push(newItem);
                }
                var totalCost = cart
                    .map(function (item) { return item.price * item.quantity; })
                    .reduce(function (sum, cost) { return sum + cost; }, 0);
                // Display results in console
                console.log("Shopping Cart Items:", cart);
                console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
                // Display results on page
                if (cart.length > 0) {
                    resultElement.style.display = 'block';
                    cart.forEach(function (item) {
                        var itemElement = document.createElement('div');
                        itemElement.className = 'item';
                        itemElement.textContent = "".concat(item.quantity, " x ").concat(item.name, " - $").concat(item.price.toFixed(2), " each = $").concat((item.price * item.quantity).toFixed(2));
                        cartItemsElement.appendChild(itemElement);
                    });
                    var cartTotalElement = document.getElementById('cartTotal');
                    if (cartTotalElement) {
                        cartTotalElement.textContent = "Total: $".concat(totalCost.toFixed(2));
                    }
                }
                else {
                    alert("No items were added to the cart.");
                }
            }
        });
    }
});
