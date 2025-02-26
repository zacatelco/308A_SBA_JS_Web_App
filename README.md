# Product Search Web App

## 📌 Overview
This project is a **responsive web application** that fetches products from an external API, allowing users to:
- Search for products dynamically.
- Filter products by price and category.
- Add new products (simulated locally).
- Display products in an Amazon-like UI.

It demonstrates **asynchronous JavaScript** concepts using:
- **Fetch API** for data retrieval.
- **Promises & async/await** for handling API calls.
- **Modules & imports** for code organization.

---
## 🚀 Features
✅ Fetch and display products from [Fake Store API](https://fakestoreapi.com/).  
✅ **Search products** dynamically using an input field.  
✅ **Filter products** by price (low to high, high to low).  
✅ **Add new products** (stored locally in an array).  
✅ **Amazon-like UI** using modern CSS styles.  

---
## 🛠️ Technologies Used
- **HTML5, CSS3** (Styled to resemble Amazon)
- **JavaScript (ES6+)**
- **Fetch API (async/await)**
- **Modules & Imports**

---
## 📂 Project Structure
```
📁 product-search-app
│── 📜 index.html      # Main HTML file
│── 📜 styles.css      # Amazon-like styling
│── 📜 script.js       # Main script (fetch, display logic)
│── 📜 utils.js        # Utility functions (filtering, search)
│── 📜 addProduct.js   # Logic for adding new products
│── 📜 README.md       # Project documentation
```

---
## 🎯 How It Works
### 1️⃣ **Fetching & Displaying Products**
- The app fetches product data from **Fake Store API** on page load.
- Data is displayed in a **grid layout** with Amazon-like styling.

### 2️⃣ **Searching & Filtering**
- Users can search by product name dynamically.
- Price filtering allows sorting from **low to high** or **high to low**.
- Category filtering is available in a dropdown.

### 3️⃣ **Adding a New Product (Simulated)**
- Users can add a product using an **input form**.
- The product is stored in a local **array (userProducts)**.
- The UI updates dynamically, merging local & API-fetched products.

