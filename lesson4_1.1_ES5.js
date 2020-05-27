'use strict'
function Product(name,price) {
    this.name=name;
    this.price=price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let product1 = new Product("TV",12500);
let product2 = new Product("Laptop", 30000);

console.log(product1.make25PercentDiscount());
console.log(product2);
