document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.getElementById("cart-count");
    const searchInput = document.getElementById("search");
    const products = document.querySelectorAll(".product");
    const cartPage = document.getElementById("cart-page");
    const cartItems = document.getElementById("cart-items");
    const viewCart = document.getElementById("view-cart");
    const checkoutBtn = document.getElementById("checkout-btn");
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    let cart = [];

    // Load cart from localStorage
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        updateCart();
    }

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.getAttribute("data-name");
            const productPrice = product.getAttribute("data-price");
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        });
    });

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - Rs ${item.price}`;
            cartItems.appendChild(li);
        });
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        products.forEach(product => {
            const name = product.getAttribute("data-name").toLowerCase();
            product.style.display = name.includes(query) ? "block" : "none";
        });
    });

    viewCart.addEventListener("click", function () {
        cartPage.classList.toggle("hidden");
    });

    checkoutBtn.addEventListener("click", function () {
        alert("Proceeding to checkout...");
    });

    loginBtn.addEventListener("click", function () {
        alert("Login functionality to be implemented.");
    });

    signupBtn.addEventListener("click", function () {
        alert("Signup functionality to be implemented.");
    });
});
