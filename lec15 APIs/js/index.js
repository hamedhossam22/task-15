const productsRow = document.querySelector(".product-container .row");

function getProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      const product = data.products;

      product.forEach((p) => {
        productsRow.innerHTML += `
<div class="col-12 col-md-6 col-lg-3">
  <div class="product bg-white rounded-4 shadow-sm overflow-hidden h-100 d-flex flex-column">

    <div class="product-image position-relative">
      <img class="w-100 product-img" 
           src="${p.images[0]}" 
           alt="${p.title}">

      <span class="badge bg-dark position-absolute top-0 start-0 m-3">
        ${p.category}
      </span>
    </div>

    <div class="content d-flex flex-column gap-3 p-4 flex-grow-1">

      <h5 class="fw-bold text-dark mb-0">${p.title}</h5>

      <p class="product-desc text-secondary small mb-0">
        ${p.description}
      </p>

      <div class="d-flex align-items-center justify-content-between mt-auto">
        <span class="fs-4 fw-bold text-info">$${p.price}</span>

        <span class="text-warning fw-semibold">
          <i class="bi bi-star-fill"></i> ${p.rating}
        </span>
      </div>
<a href="./cart.html"
   class="btn btn-dark rounded-3 py-2 fw-semibold buy-btn"
   onclick="localStorage.setItem('productId', '${p.id}')">
   VIEW PRODUCT
   <i class="bi bi-arrow-right ms-2"></i>
</a>
    </div>
  </div>
</div>
`;
      });
    });
}

getProducts();





function getProductId(id) {

localStorage.setItem("productId", id);

}