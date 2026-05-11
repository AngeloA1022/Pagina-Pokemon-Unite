// ==========================
// VALIDACIONES GENERALES
// ==========================

function campoVacio(valor) {
    return valor.trim() === "";
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}

function passwordsIguales(p1, p2) {
    return p1 === p2;
}

function mostrarMensaje(elemento, mensaje, color) {
    elemento.textContent = mensaje;
    elemento.style.color = color;
}

function marcarError(input, mensaje) {
    input.style.border = "2px solid red";
}

function marcarOk(input) {
    input.style.border = "2px solid #00ff88";
}