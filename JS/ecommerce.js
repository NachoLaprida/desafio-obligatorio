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
    handleAddCartClick()
}

const handleAddCartClick = () => {
    const btnAddCarts = document.getElementsByClassName("Agregar")    
    for (const btn of btnAddCarts) {
        btn.onclick = addCart
    }
}

(function(){
    const presentation = document.getElementById("userLogin");
    presentation.innerHTML = `BIENVENIDO ${(sessionStorage.getItem("loginSession")).toUpperCase()}` ;
    
    pedirData();

})();
