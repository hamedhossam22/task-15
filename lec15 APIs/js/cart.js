// Selectors
const productContainer = document.getElementById("product-container");
const productId = localStorage.getItem("productId");

// Functions
function getProduct() {
  if (productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        displayProduct(data);
      });
  }
}

function displayProduct(p) {
  productContainer.innerHTML = `
    <div class="row align-items-center g-5 bg-white rounded-4 shadow-sm p-4">

      <!-- Product Image -->
      <div class="col-12 col-md-6">
        <img
          src="${p.images[0]}"
          class="img-fluid w-100 rounded-4"
          alt="${p.title}">
      </div>

      <!-- Product Content -->
      <div class="col-12 col-md-6">

        <span class="badge bg-dark mb-3">${p.category}</span>

        <h1 class="fw-bold mb-3">${p.title}</h1>

        <p class="text-warning fw-semibold mb-3">
          ★ ${p.rating} / 5
        </p>

        <p class="text-secondary lh-lg mb-4">
          ${p.description}
        </p>

        <h2 class="text-info fw-bold mb-4">$${p.price}</h2>

        <button class="btn btn-dark btn-lg w-100 rounded-3 fw-semibold">
          BUY NOW
        </button>

      </div>

    </div>
  `;
}

getProduct();