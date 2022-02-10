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
            <p class="card-text">Precio por unidad: $ ${producto.unit_price}</p>
            <p class="card-text">Total: $ ${producto.total}</p>
        </div>
    </div>
    `
    })

    boxProducts.innerHTML = allProducts

    clickProd()
}

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
                    <button class="Agregar btn btn-success" id="ID-${producto.id}">Agregar al Carrito 🛒</button>
                </div>
            </div>
    `
    })

    boxProducts.innerHTML = allProducts

    clickProd()
}

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

    mostrarCarritoCompras()
}

funcionProductos()