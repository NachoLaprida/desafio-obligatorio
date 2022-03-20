let User = []

if(JSON.parse(localStorage.getItem("logins"))!=null) {
    User = JSON.parse(localStorage.getItem("logins"))
}

class Login {
    constructor(newUser, newUserPass) {
        this.newUser = newUser
        this.newUserPass = newUserPass
    }
}

function registrar(e){
    e.preventDefault()
    const nuevoUsuario = document.getElementById("new-user").value
    const nuevoPass = document.getElementById("new-pass").value
    const buscadorRegistro = User.find(u => u.username == nuevoUsuario)
    
    if(buscadorRegistro){swal("El usuario ya se encuentra registrado", "", "warning")}
    
    else if(nuevoUsuario.length < 6 || nuevoUsuario.length > 12 || nuevoPass.length < 6 || nuevoPass.length > 12 ){
        swal("El usuario y clave deben tener entre 6 y 12 caracteres", "", "error")
    }
    else{
        swal("Usuario creado!")
        .then(() => {
        const nuevoRegistro = new Login(nuevoUsuario, nuevoPass)
        User.push(nuevoRegistro)
        const UsuariosJSON = JSON.stringify(User)
        localStorage.setItem("logins", UsuariosJSON)
        sessionStorage.setItem("loginSession", nuevoUsuario)
        createUser.addEventListener("click", window.location.href = "index.html")
        })
    }
}

const createUser = document.querySelector(".inicio__signup__submit")
createUser.addEventListener("click", registrar)


function logine(e){
    e.preventDefault()
    const usuarioLogin = document.getElementById("login-user").value
    const passLogin = document.getElementById("login-pass").value
    const buscadorLoginNuevo = User.find(u => u.newUser == usuarioLogin)
    if(!buscadorLoginNuevo) {swal("El usuario no se encuentra registrado", "", "warning")}
    else if(buscadorLoginNuevo.newUserPass!=passLogin){swal("Contraseña incorrecta", "", "warning")}
    else{
        swal("Has ingresado correctamente!", "", "success")
        .then(() => {    
            sessionStorage.setItem("loginSession", usuarioLogin)
            createUser.addEventListener("click", window.location = "index.html")
        })
    }
}

const logUser = document.querySelector(".inicio__login__submit")
logUser.addEventListener("click", logine)