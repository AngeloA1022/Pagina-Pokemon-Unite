// ==========================
// SESIÓN DE USUARIO
// ==========================

// Variable global (se comparte con login.js)
let usuarioActivo = null;

// Mostrar usuario en pantalla
function mostrarUsuario(usuario) {
    const header = document.querySelector(".usuario-header");
    if (!header) return;

    header.style.display = "block";
    header.innerHTML = `
        👋 Bienvenido, <b>${usuario.usuario}</b>
        <button onclick="cerrarSesion()" class="cerrar-sesion">Cerrar sesión</button>
    `;
}

// Ocultar usuario
function ocultarUsuario() {
    const header = document.querySelector(".usuario-header");
    if (!header) return;
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