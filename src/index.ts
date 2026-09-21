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
const product = new Product ("Pizza", 2, 3)
product.quantity = 3
console.log(product.checkStock());
product.changePrice(12)
console.log(product.getTotalPrice());