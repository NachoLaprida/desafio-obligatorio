const Products = [
    {id: 1, name: "Perro",       price: 120, stock: 10, img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/6124cf315cafe8c3101f8bab/perro-slide_0.jpg"},
    {id: 2, name: "Gato",        price: 80, stock: 10, img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"},
    {id: 3, name: "Raton",          price: 100, stock: 10, img: ""},
    {id: 4, name: "Iguana",       price: 70, stock: 10, img: ""},
    {id: 5, name: "Erizo",           price: 150, stock: 10, img: ""},
    {id: 6, name: "Gallina",   price: 95, stock: 10, img: ""}
]

const Cart = []

class ProductCart {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.unit_price = obj.price
        this.img = obj.img

        this.total = this.unit_price
        this.quantity = 1
    }
    add() {
        this.quantity++
        this.total += this.unit_price
    }
}