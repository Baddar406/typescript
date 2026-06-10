"use strict";
function getStockStatus(warehouse) {
    let total = warehouse.reduce((a, b) => a + b, 0);
    if (total == 0)
        return "OUT";
    if (total <= 2)
        return "LOW";
    return "IN STOCK";
}
function getAverageRating(ratings) {
    if (!ratings || ratings.length == 0) {
        return "no reviews";
    }
    let avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return avg.toFixed(2);
}
function getDiscount(price, category) {
    let discount = 0;
    if (category == "Books")
        discount = 0.1;
    if (category == "Electronics")
        discount = 0.15;
    let finalPrice = price - (price * discount);
    if (discount > 0) {
        return price.toFixed(2) + " -> " + finalPrice.toFixed(2);
    }
    return price.toFixed(2);
}
function formatSpecs(specs) {
    if (!specs)
        return "";
    let result = "";
    for (let key in specs) {
        result += key + ":" + specs[key] + ", ";
    }
    return result;
}
let product = [
    {
        name: "Clean Code",
        category: "Books",
        price: 29.99,
        warehouse: [5, 3, 4],
        ratings: [5, 4, 5],
        specs: {
            pages: "350",
            language: "EN"
        }
    },
    {
        name: "Keyboard",
        category: "Electronics",
        price: 100,
        warehouse: [0, 1],
        ratings: [4, 3]
    }
];
console.log("Store Analytics Report");
products.forEach(p => {
    console.log(p.name + " | " + p.category + " | " + getStockStatus(p.warehouse) + " | " + "rating " + getAverageRating(p.ratings) + " | " + "price $" + getDiscount(p.price, p.category));
});
