const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario');
    const email = document.getElementById('emailRegistro');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const mensaje = document.getElementById('mensajeRegistro');

    let valido = true;

    if (campoVacio(usuario.value)) {
        marcarError(usuario);
        valido = false;
    } else {
        marcarOk(usuario);
    }

    if (!validarEmail(email.value)) {
        marcarError(email);
        valido = false;
    } else {
        marcarOk(email);
    }

    if (!validarPassword(password.value)) {
        marcarError(password);
        valido = false;
    } else {
        marcarOk(password);
    }

    if (!passwordsIguales(password.value, confirmPassword.value)) {
        marcarError(confirmPassword);
        valido = false;
    } else {
        marcarOk(confirmPassword);
    }

    if (!valido) {
        mostrarMensaje(mensaje, "Corrige los errores", "red");
        return;
    }

    mostrarMensaje(mensaje, "Registro exitoso", "#00ff88");
});