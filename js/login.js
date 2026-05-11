const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('emailLogin').value.trim();
    const password = document.getElementById('passwordLogin').value.trim();
    const mensaje = document.getElementById('mensajeLogin');

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario
    const usuarioValido = usuarios.find(u => u.email === email && u.password === password);

    if (!usuarioValido) {
        mostrarMensaje(mensaje, "Email o contraseña incorrectos ❌", "red");
        return;
    }

    // ==========================
    // GUARDAR SESIÓN 🔥
    // ==========================
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));

    mostrarMensaje(mensaje, `Bienvenido ${usuarioValido.usuario} 🔥`, "#00ff88");

    loginForm.reset();
});