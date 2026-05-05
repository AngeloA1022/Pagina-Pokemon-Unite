const contactoForm = document.getElementById('contactoForm');
const mensajeInput = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensajeInput.addEventListener('input', function() {
    contador.textContent = mensajeInput.value.length + " / 200";
});

contactoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensajeTexto = document.getElementById('mensaje');
    const respuesta = document.getElementById('mensajeContacto');

    let valido = true;

    if (campoVacio(nombre.value)) {
        marcarError(nombre);
        valido = false;
    } else {
        marcarOk(nombre);
    }

    if (campoVacio(asunto.value)) {
        marcarError(asunto);
        valido = false;
    } else {
        marcarOk(asunto);
    }

    if (campoVacio(mensajeTexto.value)) {
        marcarError(mensajeTexto);
        valido = false;
    } else {
        marcarOk(mensajeTexto);
    }

    if (!valido) {
        mostrarMensaje(respuesta, "Completa todos los campos", "red");
        return;
    }

    mostrarMensaje(respuesta, "Mensaje enviado correctamente", "#00ff88");

    contactoForm.reset();
    contador.textContent = "0 / 200";
});