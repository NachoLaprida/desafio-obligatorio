let UsersCart = [];

let Cart = []

let Products = []


class ProductCart {
    constructor(id, name, price, img, size, total, quantity) {
        this.id = id
        this.name = name
        this.unit_price = price
        this.img = img
        this.size = size

        this.total = total
        this.quantity = quantity
    }
    add() {
        this.quantity++
        this.total += this.unit_price
    }
    
}

class UserCart {
    constructor(username, products){
        this.username = username;
        this.products = products;
    }
}

