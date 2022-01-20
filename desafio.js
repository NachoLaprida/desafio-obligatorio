

let bienvenido = prompt("Ingrese nombre").trim()

if (bienvenido !="") {
alert("Bienvenido a nuestra Tienda " + bienvenido)
} else {
    alert("Falta nombre")
}

do {
    saludo = parseInt(prompt("Somos la mejor tienda de venta de prodcutos de regalos: \nPresione 1 por el producto 1\nPresione 2 por el producto 2\nPresione 3 por el producto 3\nPresione 4 sino queres comprar"))


    switch(saludo) {

        case 1:
            alert("Estas interesado en el producto 1")
            break;

        case 2:
            alert("Estas interesado en el producto 2")
            break;
        
        case 3:
            alert("Estas interesado en el producto 3")
            break;
        
        case 4:
            alert("Te esperamos para la próxima visita")
            break

            default:
                alert("No pusiste ninguno de los botones")
                break;

    }
} while(saludo != 4)

/* do {
    cuota = parseInt(prompt("Como vas a pagar\n"+"1 Efectivo\n"+"2 Cuotas\n"+"3 Cancelar\n"))


    switch(cuota) {

        case 1:
            alert("Abonas en efectivo")
            break;

        case 2:
            alert("Abonas en cuotas 2")
            break;
        
        case 3:
            alert("Te esperamos para la próxima visita")
            break

            default:
                alert("No pusiste ninguno de los botones")
                break;

    }
} while(saludo |||!= 3 ) */


/* for(i = 0; i <=3; i++) {

} */


/* while() */


