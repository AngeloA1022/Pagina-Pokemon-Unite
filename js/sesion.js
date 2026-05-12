// ==========================
// SESIÓN DE USUARIO
// ==========================

// Variable global (se comparte con login.js)
let usuarioActivo = null;
const sesionKey = "sesionPokemonUnite";

function guardarSesionActiva(usuario) {
    localStorage.setItem(sesionKey, JSON.stringify({ email: usuario.email }));
}

function cargarSesionActiva() {
    const data = localStorage.getItem(sesionKey);
    if (!data) return null;
    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
}

function eliminarSesionActiva() {
    localStorage.removeItem(sesionKey);
}

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
    guardarSesionActiva(usuario);
    mostrarUsuario(usuario);
}

function restaurarSesion() {
    const sesion = cargarSesionActiva();
    if (!sesion || !sesion.email) return;

    const usuarioValido = usuarios.find(u => u.email === sesion.email);
    if (usuarioValido) {
        usuarioActivo = usuarioValido;
        mostrarUsuario(usuarioValido);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restaurarSesion);
} else {
    restaurarSesion();
}

// Cerrar sesión
function cerrarSesion() {
    usuarioActivo = null;
    eliminarSesionActiva();
    ocultarUsuario();

    alert("Sesión cerrada correctamente");
}