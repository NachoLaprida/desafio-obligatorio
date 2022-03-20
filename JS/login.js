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
let username = localStorage.getItem('log')
if(!username || username == 'null') {
    username = prompt('Username:')
    localStorage.setItem('productOnCart', username)
    /* localStorage.setItem('log', username) */
}

const divUsername = document.getElementById('log')
divUsername.innerHTML = `Welcome ${username}`



function