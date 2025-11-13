// cart-updates.js

function updateCartCount() {
  fetch("/cart.js")
    .then((response) => response.json())
    .then((cart) => {
      const itemCount = cart.item_count;
      document.getElementById("cart-badge").textContent = itemCount;
    })
    .catch((error) => console.error("Error fetching cart:", error));
}

// Update the cart count when the page loads
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});

// Listen for cart add events dispatched by theme.liquid
document.addEventListener("ggs:cart-item-added", function () {
  updateCartCount();
});
