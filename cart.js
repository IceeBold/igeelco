// Retrieve cart data from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart contents
function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; // Clear current cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let total = 0; // Initialize total price

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItem);

            total += item.price; // Calculate total
        });

        // Update total price display
        document.getElementById('total-price').textContent = total.toFixed(2);
    }
}

// Call displayCart to show items
displayCart();
