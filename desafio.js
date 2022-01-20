

let bienvenido = prompt("Ingrese nombre").trim()

if (bienvenido !="") {
alert("Bienvenido a nuestra Tienda " + bienvenido)
} else {
    alert("Falta nombre")
}


let saludo = parseInt(prompt("Somos la mejor tienda de venta de prodcutos de regalos: \nPresione 1 por el producto 1\nPresione 2 por el producto 2\nPresione 3 por el producto 3\nPresione 4 sino queres comprar"))


switch(saludo) {

    case 1:
        alert("Estas interesado en el producto 1")
        break

    case 2:
        alert("Estas interesado en el producto 2")
        break
    
    case 3:
        alert("Estas interesado en el producto 3")
        break
    
    case 4:
        alert("Te esperamos para la próxima visita")
        break

        default:
            alert("No pusiste ninguno de los botones")
            break;
}
let producto1 = 10
let producto2 = 20
let producto3 = 30 

if(saludo == 1) {
    alert("El precio de producto 1 es " + producto1)
}
else if (saludo == 2) {
    alert("el precio de producto 2 es " + producto2)
}
else if (saludo == 3) {
    alert("el precio de producto 3 es " + producto3)
}

let cuota = parseInt(prompt("Como vas a pagar\n"+"1 Efectivo\n"+"2 Cuotas\n"+"3 Cancelar\n"))


switch(cuota) {

    case 1:
        alert("Abonas en efectivo")
        break

    case 2:
        alert("Abonas en cuotas")
        break
    
    case 3:
        alert("Te esperamos para la próxima visita")
        break

        default:
            alert("No pusiste ninguno de los botones")
            break;
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = (x) => x * 0.21
const pagos = x => x / 3
const recargoCuota = x => x * 0.05

let precioFinalA = suma(producto1, iva(producto1))
let precioFinalB = suma(producto2, iva(producto2))
let precioFinalC = suma(producto3, iva(producto3))


if(cuota == 1 && saludo == 1) {
    alert("el precio con iva es de " + precioFinalA)
} 
else if (cuota == 1 && saludo == 2) {
        alert("el precio con iva es de " + precioFinalB)
}
else if (cuota == 1 && saludo == 3) {
        alert("el precio con iva es de " + precioFinalC)
}
/*     else if (cuota == 2) {
    alert("el precio con iva es de " + producto2)
} */


/* let cuota1 = prompt("Como vas a pagar\n"+"1 Efectivo\n"+"2 Cuotas\n"+"3 Cancelar\n"+"4 asdsa")
if (cuota1 == 1) {
    alert("El precio de producto 1 es ")
} */



/* do {
    cuota = parseInt(prompt("Como vas a pagar\n"+"1 Efectivo\n"+"2 Cuotas\n"+"3 Cancelar\n"+"4 asdsa"))


    switch(cuota) {

        case 1:
            alert("Abonas en efectivo")
            break

        case 2:
            alert("Abonas en cuotas 2")
            break
        
        case 3:
            alert("Te esperamos para la próxima visita")
            break
        
        case 4:
            alert("asdasd")
            break

            default:
                alert("No pusiste ninguno de los botones")
                break;

    }
} while(saludo != 3 ) */


/* for(i = 0; i <=3; i++) {

} */


/* while() */


