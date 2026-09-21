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
}
const product = new Product ("Pizza", 2, 3)
product.increaseQuantity(5)
product.changePrice(12)
console.log(product.getTotalPrice());