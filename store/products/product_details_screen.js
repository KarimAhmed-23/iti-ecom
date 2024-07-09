window.addEventListener("load", function () {
  showProductDetails();
  setupAddToCartButtonListener();
});

function setupAddToCartButtonListener() {
  const addToCartButton = document.querySelector(".add-to-cart-button button");
  addToCartButton.addEventListener("click", handleAddToCartButtonClick);
}

function handleAddToCartButtonClick() {
  const userData = JSON.parse(localStorage.getItem("userData")) ?? {};

  if (Object.keys(userData).length === 0) {
    handleIfNonAuthenticatedUser();
  } else {
    handleIfAuthenticatedUser(userData.id);
  }
}

function handleIfNonAuthenticatedUser() {
  alert("Please login or provide user information to add to cart.");
}

function handleIfAuthenticatedUser(userId) {
  const cartList = JSON.parse(localStorage.getItem("cartList")) ?? [];
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productsList = JSON.parse(localStorage.getItem("productsList")) ?? [];

  if (!productId) {
    alert("Product ID is missing.");
    return;
  }

  const productToAdd = productsList.find((product) => product.id === productId);

  if (!productToAdd) {
    alert("Product not found.");
    return;
  }

  const cartIndex = cartList.findIndex((cart) => cart.cartOwner === userId);

  if (cartIndex === -1) {
    const newCart = {
      id: 1, 
      cartOwner: userId,
      totalCartPrice: productToAdd.price * 1,
      products: [
        {
          count: 1,
          product: productToAdd,
          totalPrice: productToAdd.price * 1,
        },
      ],
    };
    cartList.push(newCart);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    alert("Product added to cart successfully!");
  } else {
  
    const userCart = cartList[cartIndex];
    const productIndex = userCart.products.findIndex(
      (p) => p.product.id === productId
    );

    if (productIndex === -1) {
      userCart.products.push({
        count: 1,
        product: productToAdd,
        totalPrice: productToAdd.price * 1,
      });
      userCart.totalCartPrice += productToAdd.price * 1;
      cartList[cartIndex] = userCart;
      localStorage.setItem("cartList", JSON.stringify(cartList));
    
      decrementAddedProductQuantity(productId);
      showProductDetails();  
      alert("Product added to cart successfully!");

    } else {
      alert("This product is already in your cart.");
    }
  }
}
function decrementAddedProductQuantity(productId) {
  const productsList = JSON.parse(localStorage.getItem("productsList")) ?? [];
  const productIndex = productsList.findIndex((product) => product.id === productId);

  if (productIndex !== -1) {
    productsList[productIndex].quantity -= 1;
    localStorage.setItem("productsList", JSON.stringify(productsList));
  }
}

function showProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productsList = JSON.parse(localStorage.getItem("productsList")) ?? [];

  if (productId) {
    const product = productsList.find((p) => p.id === productId);

    if (product) {
      populateProductDetails(product);
      populateCarousel(product.images);
    } else {
      handleProductNotFound();
    }
  } else {
    handleMissingProductId();
  }
}

function populateProductDetails(product) {
  document.querySelector(".product-name").textContent = product.name;
  document.querySelector(".product-price").innerHTML =
    product.discount > 0
      ? `<span class="original-price">${
          product.price
        } EGP</span> <span class="discounted-price">${(
          product.price -
          (product.price * product.discount) / 100
        ).toFixed(2)} EGP</span>`
      : `${product.price} EGP`;
  document.querySelector(".product-description").textContent =
    product.description;
  document.querySelector(
    ".product-quantity"
  ).textContent = `Quantity: ${product.quantity}`;
}

function populateCarousel(images) {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");

  carouselInner.innerHTML = "";
  carouselIndicators.innerHTML = "";

  images.forEach((image, index) => {
    const isActive = index === 0 ? "active" : "";

    carouselInner.innerHTML += `
          <div class="carousel-item ${isActive}">
              <img src="${image}" class="d-block w-100" alt="Product Image">
          </div>
      `;

    carouselIndicators.innerHTML += `
          <li data-target="#productImageCarousel" data-slide-to="${index}" class="${isActive}"></li>
      `;
  });

  $("#productImageCarousel").carousel();
}

function handleProductNotFound() {
  document.querySelector(".product-details-body").innerHTML = `
      <div class="no-product-found">
          <img src='no-product-found.png' alt='No product found' class='not-found-image'>
      </div>
  `;
}

function handleMissingProductId() {
  document.querySelector(".product-details-body").innerHTML = `
      <div class="no-product-found">
          <img src='no-product-found.png' alt='No product found' class='not-found-image'>
      </div>
  `;
}
