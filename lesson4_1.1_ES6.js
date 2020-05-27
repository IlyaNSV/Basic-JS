'use strict'
class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price*=0.75;
    }
}

let product1 = new Product('TV',12500);
let product2 = new Product('Laptop', 30000);
console.log(product1.make25PercentDiscount());
console.log(product2);


    
}