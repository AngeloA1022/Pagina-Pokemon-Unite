// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FUNCION MENSAJES
    // ==========================
    function mostrarMensaje(elemento, mensaje, color) {
        elemento.textContent = mensaje;
        elemento.style.color = color;
    }

    function marcarCampo(input, estado) {
        input.classList.remove("error", "ok");
        input.classList.add(estado);
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ==========================
    // REGISTRO
    // ==========================
    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const usuario = document.getElementById('usuario');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmar = document.getElementById('confirmar');
            const mensaje = document.getElementById('mensajeRegistro');

            if (!usuario.value.trim() || !email.value.trim() || !password.value || !confirmar.value) {
                mostrarMensaje(mensaje, "Todos los campos son obligatorios", "red");
                marcarCampo(usuario, "error");
                marcarCampo(email, "error");
                marcarCampo(password, "error");
                marcarCampo(confirmar, "error");
                return;
            }

            if (!regexEmail.test(email.value)) {
                mostrarMensaje(mensaje, "Email no válido", "red");
                marcarCampo(email, "error");
                return;
            } else {
                marcarCampo(email, "ok");
            }

            if (password.value.length < 8) {
                mostrarMensaje(mensaje, "Mínimo 8 caracteres", "red");
                marcarCampo(password, "error");
                return;
            } else {
                marcarCampo(password, "ok");
            }

            if (password.value !== confirmar.value) {
                mostrarMensaje(mensaje, "Las contraseñas no coinciden", "red");
                marcarCampo(confirmar, "error");
                return;
            } else {
                marcarCampo(confirmar, "ok");
            }

            marcarCampo(usuario, "ok");

            mostrarMensaje(mensaje, "Registro exitoso ✅", "green");
            registroForm.reset();
        });
    }

    // ==========================
    // LOGIN
    // ==========================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            const mensaje = document.getElementById('mensajeLogin');

            if (!email.value.trim() || !password.value) {
                mostrarMensaje(mensaje, "Todos los campos son obligatorios", "red");
                marcarCampo(email, "error");
                marcarCampo(password, "error");
                return;
            }

            if (!regexEmail.test(email.value)) {
                mostrarMensaje(mensaje, "Email no válido", "red");
                marcarCampo(email, "error");
                return;
            } else {
                marcarCampo(email, "ok");
            }

            marcarCampo(password, "ok");

            mostrarMensaje(mensaje, "Inicio de sesión exitoso ✅", "green");
            loginForm.reset();
        });
    }

    // ==========================
    // CONTACTO
    // ==========================
    const contactoForm = document.getElementById('contactoForm');

    if (contactoForm) {
        const mensajeInput = document.getElementById('mensaje');
        const contador = document.getElementById('contador');

        // Contador
        mensajeInput.addEventListener('input', function() {
            contador.textContent = mensajeInput.value.length;
        });

        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre');
            const asunto = document.getElementById('asunto');
            const mensajeTexto = mensajeInput.value.trim();
            const mensaje = document.getElementById('mensajeContacto');

            if (!nombre.value.trim() || !asunto.value.trim() || !mensajeTexto) {
                mostrarMensaje(mensaje, "Todos los campos son obligatorios", "red");
                marcarCampo(nombre, "error");
                marcarCampo(asunto, "error");
                marcarCampo(mensajeInput, "error");
                return;
            }

            marcarCampo(nombre, "ok");
            marcarCampo(asunto, "ok");
            marcarCampo(mensajeInput, "ok");

            mostrarMensaje(mensaje, "Mensaje enviado correctamente ✅", "green");
            contactoForm.reset();
            contador.textContent = "0";
        });
    }

});