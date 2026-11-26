const productId = new URLSearchParams(window.location.search).get("id");
const details = document.getElementById("product-details");
const message = document.getElementById("product-message");

if (typeof products === "undefined") {
  message.textContent = "Couldn't load products. Check the products.js path.";
  message.hidden = false;
} else {
  const product = products.find((item) => String(item.id) === productId);

  if (product) {
    const image = document.getElementById("product-image");

    image.src = product.imgurl;
    image.alt = product.title;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-description").textContent = product.desc;
    document.getElementById("product-price").textContent =
      `$${product.price.toFixed(2)}`;

    details.hidden = false;
  } else {
    message.textContent = productId ? "Product not found." : "Select a product first.";
    message.hidden = false;
  }
}