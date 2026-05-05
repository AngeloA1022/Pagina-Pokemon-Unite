document.addEventListener("DOMContentLoaded", () => {

    function mostrarMensaje(elemento, mensaje, color) {
        elemento.textContent = mensaje;
        elemento.style.color = color;
    }

    function marcarCampo(input, estado) {
        input.classList.remove("error", "ok");
        input.classList.add(estado);
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ================= REGISTRO =================
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmar = document.getElementById('confirmar');
        const mensaje = document.getElementById('mensajeRegistro');

        if (!usuario.value.trim() || !email.value.trim() || !password.value || !confirmar.value) {
            mostrarMensaje(mensaje, "Todos los campos son obligatorios", "red");
            return;
        }

        if (!regexEmail.test(email.value)) {
            mostrarMensaje(mensaje, "Email no válido", "red");
            marcarCampo(email, "error");
            return;
        }

        if (password.value.length < 8) {
            mostrarMensaje(mensaje, "Mínimo 8 caracteres", "red");
            marcarCampo(password, "error");
            return;
        }

        // 🔥 VALIDACIÓN QUE QUERÍAS
        if (password.value !== confirmar.value) {
            mostrarMensaje(mensaje, "❌ Las contraseñas no coinciden", "red");
            marcarCampo(confirmar, "error");
            return;
        }

        marcarCampo(usuario, "ok");
        marcarCampo(email, "ok");
        marcarCampo(password, "ok");
        marcarCampo(confirmar, "ok");

        mostrarMensaje(mensaje, "Registro exitoso ✅", "green");
        registroForm.reset();
    });

    // ================= LOGIN =================
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');
        const mensaje = document.getElementById('mensajeLogin');

        if (!email.value.trim() || !password.value) {
            mostrarMensaje(mensaje, "Todos los campos son obligatorios", "red");
            return;
        }

        if (!regexEmail.test(email.value)) {
            mostrarMensaje(mensaje, "Email no válido", "red");
            marcarCampo(email, "error");
            return;
        }

        marcarCampo(email, "ok");
        marcarCampo(password, "ok");

        mostrarMensaje(mensaje, "Inicio de sesión exitoso ✅", "green");
        loginForm.reset();
    });

    // ================= CONTACTO =================
    const contactoForm = document.getElementById('contactoForm');
    const mensajeInput = document.getElementById('mensaje');
    const contador = document.getElementById('contador');

    mensajeInput.addEventListener('input', () => {
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
            return;
        }

        mostrarMensaje(mensaje, "Mensaje enviado correctamente ✅", "green");
        contactoForm.reset();
        contador.textContent = "0";
    });

});

