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

// Listen for form submissions to update the cart count
document.addEventListener("submit", function (event) {
  if (event.target.matches('form[action="/cart/add"]')) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const variantId = formData.get("id");
    const quantity = formData.get("quantity") || 1;

    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: variantId, quantity: quantity }),
    })
      .then((response) => response.json())
      .then(() => {
        updateCartCount(); // Update cart count after adding item
      })
      .catch((error) => console.error("Error adding item to cart:", error));
  }
});
