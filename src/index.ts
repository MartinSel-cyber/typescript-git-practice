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
}
const product = new Product ("Pizza", 2, 3)
product.increaseQuantity(5)
console.log(product.getTotalPrice());