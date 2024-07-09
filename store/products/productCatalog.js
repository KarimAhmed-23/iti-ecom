document.addEventListener("DOMContentLoaded", function () {
  showProductList();
});

function showProductList() {
  const productsList = JSON.parse(localStorage.getItem("productsList")) || []; // Retrieve products list from local storage
  const productListElement = document.getElementById("product-list");

  productsList.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-4");
      const productHTML = `
      <div class="product-card">
          <img src="${product.images[0]}" alt="Product Image" class="product-image" />
          <div class="product-info">
              <p class="product-name">${product.name}</p>
              <p class="product-price">
                  ${product.discount > 0 ? `<span class="original-price">${product.price} EGP</span> <span class="discounted-price">${(product.price - (product.price * product.discount / 100)).toFixed(2)} EGP</span>` : `${product.price} EGP`}
              </p>
              <p class="product-quantity">Quantity: ${product.quantity}</p>
              <div class="product-buttons">
                  <a href="product_details_screen.html?id=${product.id}" class="btn btn-primary btn-full-width">Details</a>
              </div>
          </div>
      </div>
      `;

      productCard.innerHTML = productHTML;
      productListElement.appendChild(productCard);
  });
}
