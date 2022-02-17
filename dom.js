// editando html
/* let texto = document.getElementById("componente")
texto.innerHTML = "Productos disponibles" */

// debes crear un contenedor
/* let contenedorTitulo = document.getElementById("newTitulo"); */

//Add titulo
/* let titulo2 = document.createElement("div");
titulo2.innerHTML = "<h3>Productos Limitados</h3>";
contenedorTitulo.appendChild(titulo2); */
// document.texto.append(titulo2);


//add productos

/* const productos = [
    {id: 1, name: "Lampara", price: 120},
    {id: 2, name: "Plato", price: 150},
    {id: 3, name: "Apoya vasos", price: 80},
    {id: 4, name: "Portaretrato", price: 60}
]

const padre = document.getElementById("productosTienda")

for(const producto of productos) {

    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
    
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 p-2">
                <h3> ID: ${producto.id}</h3>
                <p> Producto: ${producto.name}</p>
                <b> $ ${producto.price}</b>
                <hr>
            </div>
        </div>
    
`
padre.appendChild(contenedor)
} */

// debes crear un contenedor
let ti = document.getElementById("pTienda");

//Add titulo
let lo = document.createElement("div");
/* lo.innerHTML = `<h3>Nuestros Productos</h3>`; */
ti.appendChild(lo);
// document.texto.append(titulo2);


//mostrar carrito de compras con los productos seleccionados
const mostrarCarritoCompras = () => {
    const boxProducts = document.getElementById("productOnCart")
    let allProducts =""
    Cart.forEach(producto => {
        allProducts +=`
        <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.name}</h5>
            <i>Cantidad: ${producto.quantity}</i>
            <p class="card-text">Tamaño: ${producto.size}</p>
            <p class="card-text">Precio por unidad: $ ${producto.unit_price}</p>
            <p class="card-text">Total: $ ${producto.total}</p>
            <button class="Quitar btn btn-danger" id="ID-${producto.id}">Quitar del Carrito 🛒</button>

        </div>
    </div>
    `
    })

    boxProducts.innerHTML = allProducts

    clickProd()
    clickProd2()
}

//mostrar productos en la page
const funcionProductos = () => {
    const boxProducts = document.getElementById("listado")
    let allProducts =""
    Products.forEach(producto => {
        allProducts +=`
            
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">$ ${producto.price}</p>
                    <p class="card-text">Tamaño: ${producto.size}</p>
                    <button class="Agregar btn btn-success" id="ID-${producto.id}">Agregar al Carrito 🛒</button>
                    
                </div>
            </div>
    `
    })

    boxProducts.innerHTML = allProducts

    clickProd()
}

//evento para agregar
const clickProd = () => {

    const btnAddCarts = document.getElementsByClassName("Agregar")
    for(const btn of btnAddCarts) {
        btn.onclick = addCart
    }
}

const addCart = (e) => {
    const productId = parseInt(e.target.id.split("-")[1])

    const product = Products.find(p => p.id == productId)
    const productCart = new ProductCart(product)

    const productInCart = Cart.find(p => p.id == productId)
    if(productInCart) {
        productInCart.add()
    } else {
        Cart.push(productCart)
    }
    updateCache()
    mostrarCarritoCompras()
}

//quitar productos del carrito

const clickProd2 = () => {

    const btnRmCarts = document.getElementsByClassName("Quitar")
    for(const btn of btnRmCarts) {
        btn.onclick = RmCart
    }
}

const RmCart = (e) => {
    const productId = parseInt(e.target.id.split("-")[1])

    /* const product = Cart.find(p => p.id == productId) */
    /* const productCart = new ProductCart(product) */

    const productInCart2 = Cart.find(p => p.id == productId)
    if(!productInCart2) {
        console.log("Product not found on cart") 
        return
    }

    productInCart2.quantity--
    
    if(productInCart2.quantity < 1) {
        const idx = Cart.indexOf(productInCart2)
        Cart.splice(idx , 1)
    }

    /* const clickProd2 = () => {

        const btnRmCarts = document.getElementsByClassName("Quitar")
        for(const btn of btnRmCarts) {
            btn.onclick = RmCart
        }
    } */




   /*  if(productInCart2) {
        productInCart2.splice()
    } else {
        Cart.push(productCart)
    }
    if(productInCart2.stock < 1) {
        const idx = Cart.indexOff(p => p.id == id)
        Cart.splice(idx - 1, 1)
    } */

    updateCache()
    mostrarCarritoCompras()
}

/* const rmProduct = (id, stock = 1) => {
    const product = Cart.find(p => p.id == id)
    if(!product) {
        console.log("Product not found on cart") 
        return
    }

    product.stock -= stock

    if(product.stock < 1) {
        const idx = Cart.indexOff(p => p.id == id)
        Cart.splice(idx - 1, 1)
    }
}
const clickProd2 = () => {

    const btnRmCarts = document.getElementsByClassName("Agregar")
    for(const btn of btnRmCarts) {
        btn.onclick = addCart
    }
} */

//LocalStorage y cache
const updateCache = () => {
    const cartJSON = JSON.stringify(Cart)
    localStorage.setItem("productOnCart", cartJSON)
}

const getCache = () => {
    const cartJSON = localStorage.getItem("productOnCart")
    if(cartJSON) Cart = JSON.parse(cartJSON)
    mostrarCarritoCompras()
}

getCache()

funcionProductos()

//login////////////////////////////////////////

let login = document.getElementById("log")
let boxlogin = document.createElement("div")
login.appendChild(boxlogin)
boxlogin.innerHTML = `
    <form class="container">
        <h3>Registrate para poder empezar a comprar nuestros productos</h3>
        <div>
            <label for="colFormLabel" class="col-sm-2 col-form-label">Ingresa nombre de usuario</label>
            <input type="text" class="form-control" placeholder="Usuario" aria-label="First name">
        </div>
        <div>
            <label for="colFormLabel" class="col-sm-2 col-form-label">Ingresa email</label>
            <input type="email" class="form-control" id="colFormLabel" placeholder="Email">
        </div>
        <div>
            <label for="colFormLabel" class="col-sm-2 col-form-label">Ingresa contraseña</label>
            <input type="password" class="form-control" placeholder="Contraseña">
        </div>
        <div class="py-2 text-center">
            <button class="btn btn-success p-2" type="submit">Registrar</button>  
        </div>
    </form>
`

//falta desarrollar el login






