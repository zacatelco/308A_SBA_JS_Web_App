import { fetchProducts } from "./api.js";
import { displayProducts } from "./ui.js";

let allProducts = [];
let userProducts = [];

async function init() {
    document.getElementById("loading").style.display = "block";
    
    allProducts = await fetchProducts();
    document.getElementById("loading").style.display = "none";
    
    populateCategoryFilter();
    displayProducts([...allProducts, ...userProducts]);
}

function populateCategoryFilter() {
    const categoryFilter = document.getElementById("filter-category");
    const categories = [...new Set(allProducts.map(product => product.category))];

    categoryFilter.innerHTML = `<option value="">Filter by category</option>`;
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = [...allProducts, ...userProducts].filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

function filterByCategory() {
    const selectedCategory = document.getElementById("filter-category").value;
    const filteredProducts = selectedCategory
        ? [...allProducts, ...userProducts].filter(product => product.category === selectedCategory)
        : [...allProducts, ...userProducts];
    displayProducts(filteredProducts);
}

function filterByPrice() {
    const selectedPrice = document.getElementById("filter-price").value;
    const sortedProducts = [...allProducts, ...userProducts].sort((a, b) => 
        selectedPrice === "asc" ? a.price - b.price : b.price - a.price
    );
    displayProducts(sortedProducts);
}

function addProduct(event) {
    event.preventDefault();

    const title = document.getElementById("productTitle").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value;

    const newProduct = {
        id: Date.now(),
        title,
        price,
        category,
        image: "https://via.placeholder.com/150"
    };

    userProducts.push(newProduct);
    displayProducts([...allProducts, ...userProducts]);
}

// Event Listeners
document.getElementById("search-bar").addEventListener("input", searchProducts);
document.getElementById("filter-category").addEventListener("change", filterByCategory);
document.getElementById("filter-price").addEventListener("change", filterByPrice);
document.getElementById("addProductForm").addEventListener("submit", addProduct);

// Initialize App
init();
