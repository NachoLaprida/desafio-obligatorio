//OBJETOS
class Producto {
    constructor(product, price, stock) {
        this.product = product
        this.price = parseFloat(price)
        this.stock = parseFloat(stock)
    }
    /* prueba(){
        console.log("El precio de " + (this.product) + " es de " + (this.price) + " y contamos con " + (this.stock) + " unidades")
    } */
    sumarIva(){
        this.price = this.price *1.21
    }
}


//ARRAYS
const productos = []
productos.push(new Producto(prompt("Ingrese nombre del producto"), prompt("Ingrese precio"), prompt("Ingrese unidades")))
productos.push(new Producto(prompt("Ingrese nombre del producto"), prompt("Ingrese precio"), prompt("Ingrese unidades")))
productos.push(new Producto(prompt("Ingrese nombre del producto"), prompt("Ingrese precio"), prompt("Ingrese unidades")))


for(const producto of productos ) {
    producto.sumarIva()
}
console.log(productos)

//METODO DE BUSQUEDA
const baratos = productos.filter(item => item.price <= 1500)
console.log(baratos)

const preCios = productos.map(obj => obj.price)
console.log(preCios)

baratos.forEach(item => {
    alert("los productos mas baratos son "+ item.product)
})