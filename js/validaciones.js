// ==========================
// DATOS GLOBALES
// =========================

const usuariosKey = "usuariosPokemonUnite";
const usuarios = cargarUsuarios();

function cargarUsuarios() {
    const data = localStorage.getItem(usuariosKey);
    if (!data) return [];

    try {
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function guardarUsuarios() {
    localStorage.setItem(usuariosKey, JSON.stringify(usuarios));
}

// ==========================
// VALIDACIONES GENERALES
// ==========================

function campoVacio(valor) {
    return valor.trim() === "";
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}

function passwordsIguales(p1, p2) {
    return p1 === p2;
}

function mostrarMensaje(elemento, mensaje, color) {
    elemento.textContent = mensaje;
    elemento.style.color = color;
}

// ==========================
// ESTILOS INPUT
// ==========================

function marcarError(input) {
    input.classList.add("input-error");
    input.classList.remove("input-ok");
}

function marcarOk(input) {
    input.classList.add("input-ok");
    input.classList.remove("input-error");
}

// ==========================
// VALIDACIONES INDIVIDUALES
// ==========================

function validarUsuarioInput() {
    const input = document.getElementById("usuario");
    const error = document.getElementById("errorUsuario");

    if (campoVacio(input.value)) {
        mostrarMensaje(error, "Campo obligatorio", "red");
        marcarError(input);
        return false;
    }

    if (input.value.length < 3) {
        mostrarMensaje(error, "Mínimo 3 caracteres", "red");
        marcarError(input);
        return false;
    }

    mostrarMensaje(error, "Correcto", "#00ff88");
    marcarOk(input);
    return true;
}

function validarEmailInput(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (campoVacio(input.value)) {
        mostrarMensaje(error, "Campo obligatorio", "red");
        marcarError(input);
        return false;
    }

    if (!validarEmail(input.value)) {
        mostrarMensaje(error, "Correo inválido", "red");
        marcarError(input);
        return false;
    }

    mostrarMensaje(error, "Correcto", "#00ff88");
    marcarOk(input);
    return true;
}

function validarPasswordInput() {
    const input = document.getElementById("password");
    const error = document.getElementById("errorPassword");

    if (campoVacio(input.value)) {
        mostrarMensaje(error, "Campo obligatorio", "red");
        marcarError(input);
        return false;
    }

    if (!validarPassword(input.value)) {
        mostrarMensaje(error, "Mínimo 8 caracteres con letras y números", "red");
        marcarError(input);
        return false;
    }

    mostrarMensaje(error, "Correcto", "#00ff88");
    marcarOk(input);
    return true;
}

function validarConfirmPasswordInput() {
    const pass = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");
    const error = document.getElementById("errorConfirmPassword");

    if (campoVacio(confirm.value)) {
        mostrarMensaje(error, "Campo obligatorio", "red");
        marcarError(confirm);
        return false;
    }

    if (!passwordsIguales(pass.value, confirm.value)) {
        mostrarMensaje(error, "Las contraseñas no coinciden", "red");
        marcarError(confirm);
        return false;
    }

    mostrarMensaje(error, "Correcto", "#00ff88");
    marcarOk(confirm);
    return true;
}

// ==========================
// VALIDACIÓN EN TIEMPO REAL
// ==========================

document.getElementById("usuario")?.addEventListener("input", validarUsuarioInput);

document.getElementById("emailRegistro")?.addEventListener("input", () => {
    validarEmailInput("emailRegistro", "errorEmail");
});

document.getElementById("password")?.addEventListener("input", validarPasswordInput);

document.getElementById("confirmPassword")?.addEventListener("input", validarConfirmPasswordInput);

document.getElementById("emailLogin")?.addEventListener("input", () => {
    validarEmailInput("emailLogin", "errorEmailLogin");
});

document.getElementById("passwordLogin")?.addEventListener("input", () => {
    const input = document.getElementById("passwordLogin");
    const error = document.getElementById("errorPasswordLogin");

    if (campoVacio(input.value)) {
        mostrarMensaje(error, "Campo obligatorio", "red");
        marcarError(input);
    } else {
        mostrarMensaje(error, "", "");
        marcarOk(input);
    }
});