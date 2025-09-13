// Define an interface for the cart item
interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const runButton = document.getElementById('runButton');

    if (runButton) {
        runButton.addEventListener('click', function() {
            // Clear previous results
            const resultElement = document.getElementById('result');
            const cartItemsElement = document.getElementById('cartItems');

            if (resultElement && cartItemsElement) {
                resultElement.style.display = 'none';
                cartItemsElement.innerHTML = '';

                // Implementation of the shopping cart functionality
                const cart: CartItem[] = [];

                while (true) {
                    const itemName = prompt("Enter item name (leave empty to finish):");

                    if (itemName === "" || itemName === null) {
                        break;
                    }

                    const itemPriceInput = prompt("Enter item price:");
                    const itemQuantityInput = prompt("Enter item quantity:");

                    if (itemPriceInput === null || itemQuantityInput === null) {
                        break;
                    }

                    const itemPrice = parseFloat(itemPriceInput);
                    const itemQuantity = parseInt(itemQuantityInput);

                    if (isNaN(itemPrice) || isNaN(itemQuantity)) {
                        alert("Invalid input. Please enter valid numbers for price and quantity.");
                        continue;
                    }

                    const newItem: CartItem = {
                        name: itemName,
                        price: itemPrice,
                        quantity: itemQuantity
                    };

                    cart.push(newItem);
                }

                const totalCost = cart
                    .map(item => item.price * item.quantity)
                    .reduce((sum, cost) => sum + cost, 0);

                // Display results in console
                console.log("Shopping Cart Items:", cart);
                console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);

                // Display results on page
                if (cart.length > 0) {
                    resultElement.style.display = 'block';

                    cart.forEach(item => {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'item';
                        itemElement.textContent = `${item.quantity} x ${item.name} - $${item.price.toFixed(2)} each = $${(item.price * item.quantity).toFixed(2)}`;
                        cartItemsElement.appendChild(itemElement);
                    });

                    const cartTotalElement = document.getElementById('cartTotal');
                    if (cartTotalElement) {
                        cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
                    }
                } else {
                    alert("No items were added to the cart.");
                }
            }
        });
    }
});
