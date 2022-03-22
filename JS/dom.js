
// debes crear un contenedor
/* let ti = document.getElementById("pTienda"); */

//Add titulo
/* let lo = document.createElement("div");

ti.appendChild(lo); */



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



//AJAX Y FECTCH--------------------------------------- productos

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

    const productInCart2 = Cart.find(p => p.id == productId)
    

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


//LocalStorage y cache------------------- carrito de cada usuario en el almacenamiento
const updateCache = () => {
    const username = sessionStorage.getItem("loginSession");

    let userCart = UsersCart.find(x => x.username == username);

    if(userCart){
        userCart.products = Cart;
    }
    else{
        userCart = new UserCart(username, Cart);

        UsersCart.push(userCart);
    }

    let usersCartJson = JSON.stringify(UsersCart);

    localStorage.setItem("usersCart", usersCartJson)
}

const clearCart = () => {
    Cart = [];
    updateCache();
}


//
const getCache = () => {
    const usersCartJson = localStorage.getItem("usersCart")

    let usersCart = JSON.parse(usersCartJson);
    UsersCart = usersCart || [];

    const username = sessionStorage.getItem("loginSession");

    let userCart = UsersCart.find(x => x.username == username);
    if(userCart) {
        userCart.products.forEach(p => Cart.push(new ProductCart(p.id, p.name, p.unit_price, p.img, p.size, p.total, p.quantity)))
    }

    // to do
    mostrarCarritoCompras()
    return userCart;
}
//Total de compra---------------------------------------
const CalculateTotalCart = () => {
    let suma = 0
    Cart.forEach(p => suma += p.total)

    const elemntTotal = document.getElementById("monto-total")
    elemntTotal.innerHTML = `
        Total $${suma}    `
}

getCache()
CalculateTotalCart()

//Finalizacion de la compra---------------------------------------

/* function comprar(e) {
    const buyASD = document.getElementById("buyF")
    const buyProducts = parseInt(e.target.id.split("-")[1])
    const buyProductsCart = Cart.find(p => p.id == buyProducts)

    buyProductsCart.innerHTML = `finaliza tu compra ${buyProductsCart}`
} */


const clickBuy = () => {
//1-buscar lista de productos del carrito
    const products = getCache().products;
    if(products && products.length == 0) {
        swal("No hay productos en el carrito", "", "error")
        return;
    }
    
//2 que voy hacer con esa lista
//limpio cache
    clearCart()
//generar pedido to do

//cartel de compra, compra satifactoria, redirige a la home    
    swal("Has finalizado tu compra, te redigiremos a la home", "", "success")
    .then(() => {window.location = "ecommerce.html"})
}

(function () {
    //comprar
    const btnComprar = document.getElementById("comprar")
    btnComprar.addEventListener("click", clickBuy)
    //Saludo para usuario
    const presentation = document.getElementById("userLogin")
    presentation.innerHTML = `BIENVENIDO ${(sessionStorage.getItem("loginSession")).toUpperCase()}` 
})();


















