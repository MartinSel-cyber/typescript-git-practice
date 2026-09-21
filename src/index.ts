class Product {
    name: string;
    price: number;
    quantity: number;


    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
}

increaseQuantity(amount: number ) {
        this.quantity += amount;
}
changePrice(newPrice: number) {
        this.price = newPrice;
}
checkStock() {
        if (this.quantity <= 0) {
            return "Product is out of stock";
        } else {
            return "Product is available";
        }
}
}
const product = new Product ("Pizza", 13, 1)
const product2 = new Product ("Pasta", 12, 5)

console.log("Product 1:");
console.log(product.checkStock());
console.log(product.name);
console.log(product.getTotalPrice());

console.log("Product 2:");
console.log(product2.checkStock());
console.log(product2.name);
console.log(product2.getTotalPrice());