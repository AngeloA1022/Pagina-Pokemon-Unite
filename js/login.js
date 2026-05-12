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
        mostrarMensaje(mensaje, "Corrige los errores", "red");
        return;
    }

    // ==========================
    // USAR ARREGLO GLOBAL (SIN localStorage)
    // ==========================
    const usuarioValido = usuarios.find(
        u => u.email === email && u.password === password
    );

    if (!usuarioValido) {
        mostrarMensaje(mensaje, "Email o contraseña incorrectos", "red");

        emailInput.classList.add("input-error");
        passwordInput.classList.add("input-error");

        return;
    }

    // ==========================
    // GUARDAR SESIÓN EN MEMORIA
    // ==========================
    if (typeof iniciarSesion === "function") {
        iniciarSesion(usuarioValido);
    }

    mostrarMensaje(mensaje, `Bienvenido ${usuarioValido.usuario}`, "#00ff88");

    // LIMPIAR FORM
    loginForm.reset();

    emailInput.classList.remove("input-ok");
    passwordInput.classList.remove("input-ok");
});