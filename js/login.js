const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = document.getElementById('emailLogin');
    const passwordInput = document.getElementById('passwordLogin');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const mensaje = document.getElementById('mensajeLogin');

    // 🔴 ERRORES INDIVIDUALES
    const errorEmail = document.getElementById('errorEmailLogin');
    const errorPassword = document.getElementById('errorPasswordLogin');

    // Limpiar errores
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
    } else {
        passwordInput.classList.add("input-ok");
    }

    if (!valido) {
        mostrarMensaje(mensaje, "Corrige los errores ❌", "red");
        return;
    }

    // ==========================
    // VERIFICAR USUARIO
    // ==========================

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
        u => u.email === email && u.password === password
    );

    if (!usuarioValido) {
        mostrarMensaje(mensaje, "Email o contraseña incorrectos ❌", "red");

        // Marcar ambos como error
        emailInput.classList.add("input-error");
        passwordInput.classList.add("input-error");

        return;
    }

    // ==========================
    // GUARDAR SESIÓN 🔥
    // ==========================
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));

    mostrarMensaje(mensaje, `Bienvenido ${usuarioValido.usuario} 🔥`, "#00ff88");

    loginForm.reset();

    emailInput.classList.remove("input-ok");
    passwordInput.classList.remove("input-ok");
});