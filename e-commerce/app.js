// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 499.99,
    },
    {
        id: 2,
        name: "Laptop",
        price: 999.99,
    },
    // Add more products here
];

// Sample user cart stored in local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display products
function displayProducts() {
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

// Function to update the cart display
function updateCart() {
    const cartContainer = document.querySelector(".cart");
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${product.name}</p>
            <p>$${product.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}


// Function to calculate and update the cart total
function updateCartTotal() {
    const cartTotalElement = document.getElementById("cart-total");
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    const index = cart.findIndex((product) => product.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}
// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartTotal();
    }
}


// Function to remove an item from the cart
function removeFromCart(productId) {
    const index = cart.findIndex((product) => product.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartTotal();
    }
}


// Add an event listener to handle "Remove" button clicks
document.querySelector(".cart-items").addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const productId = parseInt(event.target.getAttribute("data-product-id"));
        removeFromCart(productId);
    }
});


function addToCart(productId) {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        updateCartTotal();
    }
}




// Initialize the app
displayProducts();
updateCart();
updateCartTotal();


