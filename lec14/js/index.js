const products = [
  {
    id: 1,
    title: "Wireless Noise-Canceling",
    imgurl: "https://picsum.photos/seed/headphones/400/400",
    price: 199.99,
    desc: "Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    title: "Gaming Keyboard",
    imgurl: "https://picsum.photos/seed/keyboard/400/400",
    price: 89.50,
    desc: "Compact RGB backlit mechanical keyboard with tactile switches and detachable USB-C cable."
  },
  {
    id: 3,
    title: "Minimalist Backpack",
    imgurl: "https://picsum.photos/seed/backpack/400/400",
    price: 120.00,
    desc: "Water-resistant everyday carry backpack featuring a padded 15-inch laptop compartment."
  },
  {
    id: 4,
    title: "Smart Fitness Watch",
    imgurl: "https://picsum.photos/seed/smartwatch/400/400",
    price: 149.00,
    desc: "Fitness tracker with heart-rate monitoring, built-in GPS, and sleep tracking."
  },
  {
    id: 5,
    title: "Insulated Stainless Mug",
    imgurl: "https://picsum.photos/seed/coffeemug/400/400",
    price: 24.95,
    desc: "Double-wall vacuum-insulated travel mug that keeps beverages hot for up to 8 hours."
  }
];

const productContainer = document.querySelector(".product-container .row");

function displayProducts() {
  products.forEach((p) => {
    productContainer.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="product bg-info rounded overflow-hidden h-100 d-flex flex-column">
          <img class="w-100 product-img" src="${p.imgurl}" alt="${p.title}">
          <div class="content d-flex flex-column gap-2 p-3 flex-grow-1">
            <h5 class="mb-0">${p.title}</h5>
            <p class="mb-0 small">${p.desc}</p>
            <span class="fw-semibold">$${p.price.toFixed(2)}</span>
            <button
              type="button"
              class="btn btn-dark btn-sm text-uppercase fw-bold mt-auto buy-btn"
              data-id="${p.id}">
              Buy now
            </button>
          </div>
        </div>
      </div>`;
  });
}

function fillCart(id) {
  window.location.href = `cart.html?id=${encodeURIComponent(id)}`;
}

if (productContainer) {
  displayProducts();

  productContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".buy-btn");

    if (button) {
      fillCart(button.dataset.id);
    }
  });
}