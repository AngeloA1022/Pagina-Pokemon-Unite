const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const usuarioInput = document.getElementById('usuario');
    const emailInput = document.getElementById('emailRegistro');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const usuario = usuarioInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    const mensaje = document.getElementById('mensajeRegistro');

    let valido = true;

    // =====================
    // LIMPIAR ERRORES
    // =====================
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.querySelectorAll("#registroForm input").forEach(i => {
        i.classList.remove("input-error", "input-ok");
    });

    // =====================
    // USUARIO
    // =====================
    if (campoVacio(usuario)) {
        document.getElementById("errorUsuario").textContent = "Campo obligatorio";
        usuarioInput.classList.add("input-error");
        valido = false;
    } else if (usuario.length < 3) {
        document.getElementById("errorUsuario").textContent = "Mínimo 3 caracteres";
        usuarioInput.classList.add("input-error");
        valido = false;
    } else {
        usuarioInput.classList.add("input-ok");
    }

    // =====================
    // EMAIL
    // =====================
    if (!validarEmail(email)) {
        document.getElementById("errorEmail").textContent = "Correo inválido";
        emailInput.classList.add("input-error");
        valido = false;
    } else {
        emailInput.classList.add("input-ok");
    }

    // =====================
    // PASSWORD
    // =====================
    if (!validarPassword(password)) {
        document.getElementById("errorPassword").textContent = "Mínimo 8 caracteres";
        passwordInput.classList.add("input-error");
        valido = false;
    } else {
        passwordInput.classList.add("input-ok");
    }

    // =====================
    // CONFIRMAR PASSWORD
    // =====================
    if (!passwordsIguales(password, confirmPassword)) {
        document.getElementById("errorConfirmPassword").textContent = "Las contraseñas no coinciden";
        confirmPasswordInput.classList.add("input-error");
        valido = false;
    } else if (confirmPassword !== "") {
        confirmPasswordInput.classList.add("input-ok");
    }

    // =====================
    // VALIDACIÓN FINAL
    // =====================
    if (!valido) {
        mostrarMensaje(mensaje, "Corrige los errores", "red");
        return;
    }

    // =====================
    // USAR ARREGLO GLOBAL (SIN localStorage)
    // =====================
    const existe = usuarios.find(u => u.email === email);

    if (existe) {
        mostrarMensaje(mensaje, "El correo ya está registrado", "orange");
        emailInput.classList.add("input-error");
        return;
    }

    // GUARDAR EN MEMORIA
    usuarios.push({ usuario, email, password });

    mostrarMensaje(mensaje, "Registro exitoso", "#00ff88");

    registroForm.reset();
});