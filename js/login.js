const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = document.getElementById('emailLogin');
    const passwordInput = document.getElementById('passwordLogin');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const mensaje = document.getElementById('mensajeLogin');

    // ERRORES INDIVIDUALES
    const errorEmail = document.getElementById('errorEmailLogin');
    const errorPassword = document.getElementById('errorPasswordLogin');

    // ==========================
    // LIMPIAR ERRORES
    // ==========================
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    mensaje.textContent = "";

    emailInput.classList.remove("input-error", "input-ok");
    passwordInput.classList.remove("input-error", "input-ok");

    let valido = true;

    // ==========================
    // VALIDACIONES
    // ==========================

    // EMAIL
    if (email === "") {
        errorEmail.textContent = "El correo es obligatorio";
        emailInput.classList.add("input-error");
        valido = false;
    } else if (!validarEmail(email)) {
        errorEmail.textContent = "Formato de correo inválido";
        emailInput.classList.add("input-error");
        valido = false;
    } else {
        emailInput.classList.add("input-ok");
    }

    // PASSWORD
    if (password === "") {
        errorPassword.textContent = "La contraseña es obligatoria";
        passwordInput.classList.add("input-error");
        valido = false;
    }

    // VALIDACIÓN GENERAL
    if (!valido) {
        const usuario = usuarios.find(u => u.email === email);
        if (usuario) {
            mostrarMensaje(mensaje, "Ingresa tu contraseña", "red");
        } else {
            mostrarMensaje(mensaje, "Corrige los errores", "red");
        }
        return;
    }

    // ==========================
    // VALIDAR USUARIO (MEJORADO)
    // ==========================
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        errorEmail.textContent = "Este correo no está registrado";
        emailInput.classList.add("input-error");

        mostrarMensaje(mensaje, "Usuario no encontrado", "red");
        return;
    }

    // ==========================
    // VALIDAR CONTRASEÑA (MEJORADO)
    // ==========================
    if (usuario.password !== password) {
        errorPassword.textContent = "Contraseña incorrecta";
        passwordInput.classList.add("input-error");

        // BORRAR PASSWORD (MEJOR UX)
        passwordInput.value = "";

        mostrarMensaje(mensaje, "La contraseña no coincide", "red");
        return;
    }

    // ==========================
    // LOGIN CORRECTO
    // ==========================
    if (typeof iniciarSesion === "function") {
        iniciarSesion(usuario);
    }

    mostrarMensaje(mensaje, `Bienvenido ${usuario.usuario}`, "#00ff88");    

    // LIMPIAR FORM
    loginForm.reset();

    emailInput.classList.remove("input-ok");
    passwordInput.classList.remove("input-ok");
});