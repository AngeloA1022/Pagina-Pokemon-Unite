// ==========================
// ELEMENTOS
// ==========================
const contactoForm = document.getElementById('contactoForm');
const nombre = document.getElementById('nombre');
const asunto = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');

const errorNombre = document.getElementById('errorNombre');
const errorAsunto = document.getElementById('errorAsunto');
const errorMensaje = document.getElementById('errorMensaje');

const contador = document.getElementById('contador');
const respuesta = document.getElementById('mensajeContacto');

// ==========================
// FUNCIONES GENERALES
// ==========================

function campoVacio(valor) {
    return valor.trim() === "";
}

function largoMinimo(valor, min) {
    return valor.trim().length >= min;
}

function largoMaximo(valor, max) {
    return valor.trim().length <= max;
}

function mostrarMensaje(elemento, mensaje, color) {
    elemento.textContent = mensaje;
    elemento.style.color = color;

    setTimeout(() => {
        elemento.textContent = "";
    }, 3000);
}

function mostrarError(input, errorElemento, mensaje) {
    input.classList.add("input-error");
    input.classList.remove("input-ok");
    errorElemento.textContent = mensaje;
}

function mostrarCorrecto(input, errorElemento) {
    input.classList.remove("input-error");
    input.classList.add("input-ok");
    errorElemento.textContent = "";
}

// ==========================
// VALIDACIONES
// ==========================

// 🔥 NOMBRE → solo letras + mínimo 3 letras reales
function validarNombre() {
    const valor = nombre.value.trim();

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (campoVacio(valor)) {
        mostrarError(nombre, errorNombre, "El nombre es obligatorio");
        return false;

    } else if (!soloLetras.test(valor)) {
        mostrarError(nombre, errorNombre, "Solo se permiten letras");
        return false;

    } else if (valor.replace(/\s/g, "").length < 3) {
        mostrarError(nombre, errorNombre, "Debe tener al menos 3 letras");
        return false;

    } else {
        mostrarCorrecto(nombre, errorNombre);
        return true;
    }
}

// 🔥 ASUNTO → mínimo 5 letras (permite números y símbolos)
function validarAsunto() {
    const valor = asunto.value.trim();

    const letras = valor.match(/[A-Za-zÁÉÍÓÚáéíóúÑñ]/g);

    if (campoVacio(valor)) {
        mostrarError(asunto, errorAsunto, "El asunto es obligatorio");
        return false;

    } else if (!letras || letras.length < 5) {
        mostrarError(asunto, errorAsunto, "Debe tener al menos 5 letras");
        return false;

    } else {
        mostrarCorrecto(asunto, errorAsunto);
        return true;
    }
}

// MENSAJE
function validarMensaje() {
    const texto = mensajeInput.value;

    if (campoVacio(texto)) {
        mostrarError(mensajeInput, errorMensaje, "El mensaje no puede estar vacío");
        return false;

    } else if (!largoMinimo(texto, 10)) {
        mostrarError(mensajeInput, errorMensaje, "Mínimo 10 caracteres");
        return false;

    } else if (!largoMaximo(texto, 200)) {
        mostrarError(mensajeInput, errorMensaje, "Máximo 200 caracteres");
        return false;

    } else {
        mostrarCorrecto(mensajeInput, errorMensaje);
        return true;
    }
}

// ==========================
// VALIDACIÓN EN TIEMPO REAL
// ==========================

nombre.addEventListener("input", validarNombre);
asunto.addEventListener("input", validarAsunto);

mensajeInput.addEventListener("input", function () {
    contador.textContent = mensajeInput.value.length + " / 200";
    validarMensaje();
});

// ==========================
// ENVÍO DEL FORMULARIO
// ==========================

contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreValido = validarNombre();
    const asuntoValido = validarAsunto();
    const mensajeValido = validarMensaje();

    if (!nombreValido || !asuntoValido || !mensajeValido) {
        mostrarMensaje(respuesta, "Corrige los errores antes de enviar", "red");
        return;
    }

    // ✅ ÉXITO
    mostrarMensaje(respuesta, "Mensaje enviado correctamente", "#00ff88");

    contactoForm.reset();
    contador.textContent = "0 / 200";

    [nombre, asunto, mensajeInput].forEach(input => {
        input.classList.remove("input-ok");
    });
});