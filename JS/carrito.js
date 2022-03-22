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

    handleAddCartClick()
    handleRemoveCartClick()
}

const handleAddCartClick = () => {
    const btnAddCarts = document.getElementsByClassName("Agregar")    
    for (const btn of btnAddCarts) {
        btn.onclick = handleAddCart
    }
}

const handleAddCart = (e) => {
    addCart(e)
    mostrarCarritoCompras()
    calculateTotalCart()
}

//quitar productos del carrito

const handleRemoveCartClick = () => {

    const btnRmCarts = document.getElementsByClassName("Quitar")
    for (const btn of btnRmCarts) {
        btn.onclick = handleRemoveCart
    }
}
const handleRemoveCart = (e) => {
    removeCart(e)
    mostrarCarritoCompras()
    calculateTotalCart()
}

const calculateTotalCart = () => {
    let suma = 0
    Cart.forEach(p => suma += p.total)

    const elemntTotal = document.getElementById("monto-total")
    elemntTotal.innerHTML = `
        Total $${suma}    `
}

const clickBuy = () => {
    //1-buscar lista de productos del carrito
        const products = getUserCart().products;
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

    const pedirData = async () => {
        const resp = await fetch(`/data.json`)
        const data = await resp.json()
        Products = data
    }

(function(){
    const btnComprar = document.getElementById("comprar")
    btnComprar.addEventListener("click", clickBuy)
    pedirData()
    mostrarCarritoCompras()
    calculateTotalCart()
})()


