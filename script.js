let allProducts = [];
let filteredProducts = [];

async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    allProducts = await response.json();
    filteredProducts = allProducts; // Initially show all products
    displayProducts(filteredProducts);
    document.getElementById("loading").style.display = "none"; // Hide loading
  } catch (error) {
    console.error("Failed to load products:", error);
    document.getElementById("loading").innerText = "Failed to load products.";
  }
  console.log(allProducts);
}

function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // reset field

  if (products.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
  }

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title} id="productID">
      <h3>${product.title}</h3>
      <p><strong>$${product.price}</strong></p>
      <div class="product-details">
        <p><em>Category:</em> ${product.category}</p>
      </div>
    `;
    productList.appendChild(productElement);
  });
}

loadProducts();
