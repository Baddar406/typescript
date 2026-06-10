"use strict";
let products = JSON.parse(localStorage.getItem("products") || "[]");
function totalStock(warehouse) {
    return warehouse.reduce((a, b) => a + b, 0);
}
function stockStatus(warehouse) {
    let total = totalStock(warehouse);
    if (total == 0)
        return "OUT";
    if (total <= 2)
        return "LOW";
    return "IN STOCK";
}
function save() {
    localStorage.setItem("products", JSON.stringify(products));
}
function render() {
    let container = document.getElementById("list");
    container.innerHTML = "";
    products.forEach(p => {
        let card = document.createElement("div");
        card.className = "product";
        let total = totalStock(p.warehouse);
        card.innerHTML = "<h3>" + p.name + "</h3>" + "<p>Category: " + p.category + "</p>" + "<p>Price: $" + p.price.toFixed(2) + "</p>" + "<p>Available: " + total + "</p>" + "<span class='status'>" + stockStatus(p.warehouse) + "</span>";
        if (p.specs) {
            let text = "";
            for (let k in p.specs) {
                text += k + "=" + p.specs[k] + " ";
            }
            let specs = document.createElement("p");
            specs.innerText = "Specs: " + text;
            card.appendChild(specs);
        }
        container.appendChild(card);
    });
}
function addProduct() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = Number(document.getElementById("price").value);
    let warehouseText = document.getElementById("warehouse").value;
    let specsText = document.getElementById("specs").value;
    if (!name || !category || !price) {
        alert("Fill all fields");
        return;
    }
    let warehouse = warehouseText.split(",").map(Number);
    let specs = {};
    if (specsText) {
        let pairs = specsText.split(",");
        pairs.forEach(p => {
            let parts = p.split("=");
            specs[parts[0]] = parts[1];
        });
    }
    let product = { name, category, price, warehouse, specs };
    products.push(product);
    save();
    render();
}
function setup() {
    let app = document.getElementById("app");
    app.innerHTML =
        `
<form>

<h2>Add Product</h2>

<input id="name"placeholder="Name">

<input id="category"placeholder="Category">

<input id="price"placeholder="Price">

<input id="warehouse"placeholder="5,3,2">

<input id="specs"placeholder="pages=350">

<button type="button"id="add"> Add Product </button>

</form>

<input id="filter" placeholder="Search">

<select id="sort">

<option value="price"> Price </option>

<option value="name"> Name </option>

</select>

<div id="list">

</div>
`;
    document.getElementById("add").onclick = addProduct;
    document.getElementById("filter").oninput = function () {
        let text = this.value;
        products = products.filter(p => p.name.includes(text));
        render();
    };
    document.getElementById("sort").onchange = function () {
        let value = this.value;
        if (value == "price") {
            products.sort((a, b) => a.price - b.price);
        }
        if (value == "name") {
            products.sort((a, b) => a.name.localeCompare(b.name));
        }
        render();
    };
    render();
}
setup();
