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
    const dominiosPermitidos = /^[^\s@]+@(gmail|hotmail)\.(com|es)$/i;
    return dominiosPermitidos.test(email);
}

function validarPassword(password) {
    // Al menos 8 caracteres, una letra, un número y un carácter especial
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/.test(password);
}

function obtenerErrorPassword(password) {
    const errores = [];
    
    if (!password || password.length < 8) {
        errores.push("Mínimo 8 caracteres");
    }
    if (!/[A-Za-z]/.test(password)) {
        errores.push("al menos una letra");
    }
    if (!/\d/.test(password)) {
        errores.push("al menos un número");
    }
    if (!/[@$!%*?&_#]/.test(password)) {
        errores.push("al menos un carácter especial (@$!%*?&_#)");
    }
    
    return errores.length > 0 ? "Necesita: " + errores.join(", ") : "";
}

function obtenerErrorEmail(email) {
    if (!/@/.test(email)) {
        return "Debe contener @";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Formato incorrecto";
    }
    if (!/gmail|hotmail/i.test(email)) {
        return "Solo se permiten dominios @gmail.com, @gmail.es, @hotmail.com o @hotmail.es";
    }
    return "";
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
        input.classList.remove("input-error", "input-ok");
    }
});