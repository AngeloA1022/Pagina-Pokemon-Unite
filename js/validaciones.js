function campoVacio(valor) {
    return valor.trim() === "";
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarPassword(password) {
    return password.length >= 8;
}

function passwordsIguales(p1, p2) {
    return p1 === p2;
}

function mostrarMensaje(elemento, mensaje, color) {
    elemento.textContent = mensaje;
    elemento.style.color = color;
}

// 🔥 VISUAL
function marcarError(input) {
    input.classList.remove("ok");
    input.classList.add("error");
}

function marcarOk(input) {
    input.classList.remove("error");
    input.classList.add("ok");
}