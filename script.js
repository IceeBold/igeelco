// Sample product data
const products = [
    { id: 1, name: "Product Name 1", price: 10.00, image: "product1.jpg" },
    { id: 2, name: "Product Name 2", price: 15.00, image: "product2.jpg" },
    { id: 3, name: "Product Name 3", price: 20.00, image: "product3.jpg" },
    { id: 4, name: "Product Name 4", price: 25.00, image: "product4.jpg" },
    { id: 5, name: "Product Name 5", price: 30.00, image: "product5.jpg" },
    { id: 6, name: "Product Name 6", price: 35.00, image: "product6.jpg" },
    { id: 7, name: "Product Name 7", price: 40.00, image: "product7.jpg" },
    { id: 8, name: "Product Name 8", price: 45.00, image: "product8.jpg" },
    { id: 9, name: "Product Name 9", price: 50.00, image: "product9.jpg" },
    { id: 10, name: "Product Name 10", price: 55.00, image: "product10.jpg" },
    { id: 11, name: "Product Name 11", price: 60.00, image: "product11.jpg" },
    { id: 12, name: "Product Name 12", price: 65.00, image: "product12.jpg" },
    { id: 13, name: "Product Name 13", price: 70.00, image: "product13.jpg" },
    { id: 14, name: "Product Name 14", price: 75.00, image: "product14.jpg" },
    { id: 15, name: "Product Name 15", price: 80.00, image: "product15.jpg" },
    { id: 16, name: "Product Name 16", price: 85.00, image: "product16.jpg" },
    { id: 17, name: "Product Name 17", price: 90.00, image: "product17.jpg" },
    { id: 18, name: "Product Name 18", price: 95.00, image: "product18.jpg" },
    { id: 19, name: "Product Name 19", price: 100.00, image: "product19.jpg" },
    { id: 20, name: "Product Name 20", price: 105.00, image: "product20.jpg" },
];

let cart = []; // Array to hold cart items

// Function to display products on the page
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
        displayCart(); // Update the cart display
    }
}

// Function to display cart contents
function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; // Clear the current cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Event listener for "Add to Cart" buttons
function setupEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
}

// Initialize the shop
function initShop() {
    displayProducts();
    setupEventListeners();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); // Save to local storage
        alert(`${product.name} has been added to your cart!`);
        displayCart(); // Update the cart display
    }
}


// Run the shop initialization
initShop();
