const contactoForm = document.getElementById('contactoForm');
const mensajeInput = document.getElementById('mensaje');
const contador = document.getElementById('contador');

// Contador de caracteres
mensajeInput.addEventListener('input', function() {
    contador.textContent = mensajeInput.value.length + " / 200";

    if (mensajeInput.value.length > 200) {
        mensajeInput.classList.add("input-error");
    } else {
        mensajeInput.classList.remove("input-error");
    }
});

contactoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensajeTexto = document.getElementById('mensaje');

    const errorNombre = document.getElementById('errorNombre');
    const errorAsunto = document.getElementById('errorAsunto');
    const errorMensaje = document.getElementById('errorMensaje');

    const respuesta = document.getElementById('mensajeContacto');

    // Limpiar errores
    errorNombre.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";

    nombre.classList.remove("input-error", "input-ok");
    asunto.classList.remove("input-error", "input-ok");
    mensajeTexto.classList.remove("input-error", "input-ok");

    let valido = true;

    // ==========================
    // VALIDACIONES
    // ==========================

    // NOMBRE
    if (campoVacio(nombre.value)) {
        errorNombre.textContent = "El nombre es obligatorio";
        nombre.classList.add("input-error");
        valido = false;
    } else {
        nombre.classList.add("input-ok");
    }

    // ASUNTO
    if (campoVacio(asunto.value)) {
        errorAsunto.textContent = "El asunto es obligatorio";
        asunto.classList.add("input-error");
        valido = false;
    } else {
        asunto.classList.add("input-ok");
    }

    // MENSAJE
    if (campoVacio(mensajeTexto.value)) {
        errorMensaje.textContent = "El mensaje no puede estar vacío";
        mensajeTexto.classList.add("input-error");
        valido = false;
    } else if (mensajeTexto.value.length > 200) {
        errorMensaje.textContent = "Máximo 200 caracteres";
        mensajeTexto.classList.add("input-error");
        valido = false;
    } else {
        mensajeTexto.classList.add("input-ok");
    }

    if (!valido) {
        mostrarMensaje(respuesta, "Corrige los errores ", "red");
        return;
    }

    //  ÉXITO
    mostrarMensaje(respuesta, "Mensaje enviado correctamente ", "#00ff88");

    contactoForm.reset();
    contador.textContent = "0 / 200";

    nombre.classList.remove("input-ok");
    asunto.classList.remove("input-ok");
    mensajeTexto.classList.remove("input-ok");
});