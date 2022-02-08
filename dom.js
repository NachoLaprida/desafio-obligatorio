// editando html
let texto = document.getElementById("componente")
texto.innerHTML = "Productos disponibles"

// debes crear un contenedor
let contenedorTitulo = document.getElementById("newTitulo");

//Add titulo
let titulo2 = document.createElement("div");
titulo2.innerHTML = "<h3>Productos Limitados</h3>";
contenedorTitulo.appendChild(titulo2);
// document.texto.append(titulo2);


//add productos

const productos = [
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
}


