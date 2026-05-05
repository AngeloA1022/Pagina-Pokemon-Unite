const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('emailLogin');
    const password = document.getElementById('passwordLogin');
    const mensaje = document.getElementById('mensajeLogin');

    let valido = true;

    if (!validarEmail(email.value)) {
        marcarError(email);
        valido = false;
    } else {
        marcarOk(email);
    }

    if (campoVacio(password.value)) {
        marcarError(password);
        valido = false;
    } else {
        marcarOk(password);
    }

    if (!valido) {
        mostrarMensaje(mensaje, "Datos incorrectos", "red");
        return;
    }

    mostrarMensaje(mensaje, "Login exitoso", "#00ff88");
});