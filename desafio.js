const suma = (a, b) => a + b
const resta = (a, b) => a - b
const div = (a, b) => a / b
const mult = (a, b) => a * b
const iva = (x) => x * 0.21
const fee = (x) => x * 0.1



for(i = 0; i < 5; i++) {
    let bienvenido = prompt("Ingrese nombre").trim().toLocaleUpperCase()
    
    if (bienvenido !="") {
        alert("Bienvenido a nuestra Tienda, " + bienvenido)
        break
    }
    
    else if (bienvenido == ""){
        alert("Falta nombre")
    }
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
let producto1 = 1000
let producto2 = 2000
let producto3 = 3000

if(saludo == 1) {
    alert("El precio de producto 1 es $" + producto1)
}
else if (saludo == 2) {
    alert("el precio de producto 2 es $" + producto2)
}
else if (saludo == 3) {
    alert("el precio de producto 3 es $" + producto3)
}



if( saludo !=4 ) {
    let cuota = parseInt(prompt("Como vas a pagar\n"+"1 Efectivo\n"+"2 Cuotas\n"+"3 Cancelar\n"))
    switch(cuota) {
        
        case 1:
            alert("Abonas en efectivo")
            break

        case 2:
            alert("Abonas en cuotas con interes de %10")
            break
        
        case 3:
            alert("Te esperamos para la próxima visita")
            break

            default:
                alert("No pusiste ninguno de los botones")
                break
    }

    let precioFinalA = suma(producto1, iva(producto1))  
    let precioFinalB = suma(producto2, iva(producto2))
    let precioFinalC = suma(producto3, iva(producto3))

    if(cuota == 1 && saludo == 1) {
        alert("el precio con iva es de $" + precioFinalA)
    } 
    else if (cuota == 1 && saludo == 2) {
        alert("el precio con iva es de $" + precioFinalB)
    }
    else if (cuota == 1 && saludo == 3) {
        alert("el precio con iva es de $" + precioFinalC)
    }
        
    if(cuota == 2) {
        let installment = parseInt(prompt("Cuantas cuotas deseas?"))

        

        let precioFinalProductoA = suma(producto1, iva(producto1))  /* 1000 + 210 */
        let precioFinalProductoB = suma(producto2, iva(producto2))
        let precioFinalProductoC = suma(producto3, iva(producto3))
        let cuotaProductoA = (div(precioFinalProductoA, installment))*1.1 /* 1210 / 6 * 1.1 =221.83 */
        let cuotaProductoB = (div(precioFinalProductoB, installment))*1.1
        let cuotaProductoC = (div(precioFinalProductoC, installment))*1.1



        let precioTotalCuotaA = mult(cuotaProductoA, installment) /* 221.83  */
        let precioTotalCuotaB = mult(cuotaProductoB, installment)
        let precioTotalCuotaC = mult(cuotaProductoC, installment)

    
        
        if (cuota == 2 && saludo == 1) {
            alert("El costo de cada cuota queda en $" + cuotaProductoA)
            alert("El precio Total seria de $" + precioTotalCuotaA)
        }
        else if (cuota == 2 && saludo == 2) {
            alert("El costo de cada cuota queda en $" + cuotaProductoB)
            alert("El precio Total seria de $" + precioTotalCuotaB)
        }
        else if (cuota == 2 && saludo == 3) {
            alert("El costo de cada cuota queda en $" + cuotaProductoC)
            alert("El precio Total seria de $" + precioTotalCuotaC)
        }
    }
}


























