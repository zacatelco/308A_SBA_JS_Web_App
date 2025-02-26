export function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = products.length
        ? products
            .map(p => `
                <div class="product">
                    <img src="${p.image}" alt="${p.title}" />
                    <h3>${p.title}</h3>
                    <p><strong>$${p.price}</strong></p>
                    <p><em>${p.category}</em></p>
                </div>`)
            .join("")
        : "<p>No products found</p>";
}