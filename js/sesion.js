// ==========================
// SESIÓN DE USUARIO
// ==========================

// Variable global (se comparte con login.js)
let usuarioActivo = null;

// Mostrar usuario en pantalla
function mostrarUsuario(usuario) {
    const header = document.getElementById("usuarioHeader");

    header.style.display = "block";
    header.innerHTML = `
        👋 Bienvenido, <b>${usuario.nombre}</b>
        <button onclick="cerrarSesion()" class="btn-logout">Cerrar sesión</button>
    `;
}

// Ocultar usuario
function ocultarUsuario() {
    const header = document.getElementById("usuarioHeader");
    header.style.display = "none";
    header.innerHTML = "";
}

// Iniciar sesión (se llama desde login.js)
function iniciarSesion(usuario) {
    usuarioActivo = usuario;
    mostrarUsuario(usuario);
}

// Cerrar sesión
function cerrarSesion() {
    usuarioActivo = null;
    ocultarUsuario();

    alert("Sesión cerrada correctamente");
}