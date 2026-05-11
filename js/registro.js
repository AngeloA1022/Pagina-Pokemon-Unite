const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario');
    const email = document.getElementById('emailRegistro');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const mensaje = document.getElementById('mensajeRegistro');

    let valido = true;

    // ==========================
    // VALIDAR USUARIO
    // ==========================
    if (campoVacio(usuario.value)) {
        marcarError(usuario, "El usuario no puede estar vacío");
        valido = false;
    } else if (usuario.value.length < 4) {
        marcarError(usuario, "Debe tener al menos 4 caracteres");
        valido = false;
    } else {
        marcarOk(usuario);
    }

    // ==========================
    // VALIDAR EMAIL
    // ==========================
    if (campoVacio(email.value)) {
        marcarError(email, "El correo es obligatorio");
        valido = false;
    } else if (!validarEmail(email.value)) {
        marcarError(email, "Formato de correo inválido");
        valido = false;
    } else {
        marcarOk(email);
    }

    // ==========================
    // VALIDAR PASSWORD
    // ==========================
    if (campoVacio(password.value)) {
        marcarError(password, "La contraseña es obligatoria");
        valido = false;
    } else if (!validarPassword(password.value)) {
        marcarError(password, "Mínimo 8 caracteres, con número y letra");
        valido = false;
    } else {
        marcarOk(password);
    }

    // ==========================
    // CONFIRMAR PASSWORD
    // ==========================
    if (campoVacio(confirmPassword.value)) {
        marcarError(confirmPassword, "Debes confirmar la contraseña");
        valido = false;
    } else if (!passwordsIguales(password.value, confirmPassword.value)) {
        marcarError(confirmPassword, "Las contraseñas no coinciden");
        valido = false;
    } else {
        marcarOk(confirmPassword);
    }

    // ==========================
    // RESULTADO FINAL
    // ==========================
    if (!valido) {
        mostrarMensaje(mensaje, "Corrige los campos marcados", "red");
        return;
    }

    mostrarMensaje(mensaje, "Registro exitoso 🎉", "#00ff88");
});