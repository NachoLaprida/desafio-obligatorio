<<<<<<< HEAD
=======
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
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f

// debes crear un contenedor
let ti = document.getElementById("pTienda");

//Add titulo
let lo = document.createElement("div");
<<<<<<< HEAD

ti.appendChild(lo);

=======
/* lo.innerHTML = `<h3>Nuestros Productos</h3>`; */
ti.appendChild(lo);
// document.texto.append(titulo2);
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f


//mostrar carrito de compras con los productos seleccionados
const mostrarCarritoCompras = () => {
    const boxProducts = document.getElementById("productOnCart")
    let allProducts = ""
    Cart.forEach(post => {
        allProducts += `
    
        
        <tbody>
            <tr>
                <th scope="row">${post.id}</th>
                    <td>${post.name}</td>
                    <td>${post.quantity}</td>
                    <td>${post.size}</td>
                    <td>${post.unit_price}</td>
                    <td>${post.total}</td>
                    <td><button class="Agregar btn btn-success" id="ID-${post.id}">Agregar 🛒</button></td>
                    <td><button class="Quitar btn btn-danger" id="ID-${post.id}">Quitar 🛒</button></td>
            </tr>
        </tbody>

        `
    })


    boxProducts.innerHTML = allProducts

    clickProd()
    clickProd2()
}


<<<<<<< HEAD

=======
//mostrar productos en la page
/* const funcionProductos = () => {
    const boxProducts = document.getElementById("listado")
    let allProducts = ""
    Products.forEach(producto => {
        allProducts += `
            
            <div class="card m-3" style="width: 18rem;">
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
} */
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f

//AJAX Y FECTCH---------------------------------------

const lista = document.getElementById(`listado`)
const pedirData = async () => {
    const resp = await fetch(`/data.json`)
    const data = await resp.json()
    Products = data
    
    
    data.forEach((post) => {
        const li = document.createElement(`div`)
        li.className = "card m-3"
        li.innerHTML = `
                <img src="${post.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${post.name}</h5>
                        <p class="card-text">$ ${post.price}</p>
                        <p class="card-text">Tamaño: ${post.size}</p>
                        <button class="Agregar btn btn-success" id="ID-${post.id}">Agregar al Carrito 🛒</button>
                    
                    </div>
        `
        lista.append(li)
    })
    clickProd()
}


pedirData()

//evento para agregar
const clickProd = () => {

    const btnAddCarts = document.getElementsByClassName("Agregar")
    
    for (const btn of btnAddCarts) {
        btn.onclick = addCart
    }

}

const addCart = (e) => {
    const productId = parseInt(e.target.id.split("-")[1])
    
    const p = Products.find(p => p.id == productId)
    const productCart = new ProductCart(p.id, p.name, p.price, p.img, p.size, p.price, 1)

    const productInCart = Cart.find(p => p.id == productId)

    productInCart ? productInCart.add() : Cart.push(productCart) //operador ternario
    Toastify({
        text: "Agregaste un producto al carrito",
        duration: 1000,
        gravity: `top`,
        position: `left`,
        style: {
            background: `linear-gradient(to right, green, grey)`
        }
    }).showToast()

    updateCache()
    mostrarCarritoCompras()
    CalculateTotalCart()

}

//quitar productos del carrito

const clickProd2 = () => {

    const btnRmCarts = document.getElementsByClassName("Quitar")
    for (const btn of btnRmCarts) {
        btn.onclick = RmCart
    }
}

const RmCart = (e) => {
    const productId = parseInt(e.target.id.split("-")[1])

<<<<<<< HEAD
    const productInCart2 = Cart.find(p => p.id == productId)
    
=======
    /* const product = Cart.find(p => p.id == productId) */
    /* const productCart = new ProductCart(product) */

    const productInCart2 = Cart.find(p => p.id == productId)
    /* if(!productInCart2) {
        console.log("Product not found on cart") 
        return
    } */
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f

    productInCart2.quantity--
    productInCart2.total -= productInCart2.unit_price

    if (productInCart2.quantity < 1) {
        const idx = Cart.indexOf(productInCart2)
        Cart.splice(idx, 1)


    }
    Toastify({
        text: "Eliminaste un producto al carrito",
        duration: 1000,
        gravity: `top`,
        position: `right`,
        style: {
            background: `linear-gradient(to right, red, grey)`
        }
    }).showToast()

    updateCache()
    mostrarCarritoCompras()
    CalculateTotalCart()
}


//LocalStorage y cache
const updateCache = () => {
    const cartJSON = JSON.stringify(Cart)
    localStorage.setItem("productOnCart", cartJSON)
}

const getCache = () => {
    const cartJSON = localStorage.getItem("productOnCart")
<<<<<<< HEAD
    
=======
    /* if (cartJSON) Cart = JSON.parse(cartJSON) */
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f
    let daltar = JSON.parse(cartJSON)
    daltar.forEach(p => Cart.push(new ProductCart(p.id, p.name, p.unit_price, p.img, p.size, p.total, p.quantity)))
    mostrarCarritoCompras()
}

const CalculateTotalCart = () => {
    let suma = 0
    Cart.forEach(p => suma += p.total)

    const elemntTotal = document.getElementById("monto-total")
    elemntTotal.innerHTML = `Total $${suma}`
}

getCache()
<<<<<<< HEAD
=======

/* funcionProductos() */
>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f
CalculateTotalCart()



<<<<<<< HEAD
=======
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

//falta desarrollar el login//////////////////////////////////////////////////////////////

>>>>>>> 0d999d63bebc111c48c522c3531ee4abd5fa5a8f















