
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
    }).showToast();
    updateUserCart();
}

const removeCart = (e) => {
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

    updateUserCart()
}

const getUserCart = () => {
    const usersCartJson = localStorage.getItem("usersCart")

    let usersCart = JSON.parse(usersCartJson);
    UsersCart = usersCart || [];

    const username = sessionStorage.getItem("loginSession");

    let userCart = UsersCart.find(x => x.username == username);
    
    if(userCart) {
        userCart.products.forEach(p => Cart.push(new ProductCart(p.id, p.name, p.unit_price, p.img, p.size, p.total, p.quantity)))
    }

    return userCart;
}

const updateUserCart = () => {
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
    updateUserCart();
}

let UsersCart = [];
let Cart = [];
let Products = [];

(function(){
    
    getUserCart()
})();

