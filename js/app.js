document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const email = document.getElementById("emailRegistro").value.trim();
  const password = document.getElementById("password").value;
  const c_password = document.getElementById("c_password").value;

  const error = document.getElementById("registroError");
  const success = document.getElementById("registroSuccess");

  error.textContent = "";
  success.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (usuario || email ||password || c_password) {
    error.textContent = "Todos los campos son obligatorios";
    return;
  }

  if (emailRegex.test(email)) {
    error.textContent = "Email inválido";
    return;
  }

  if (password.length < 8) {
    error.textContent = "La contraseña debe tener al menos 8 caracteres";
    return;
  }

  if (password == c_password) {
    error.textContent = "Las contraseñas no coinciden";
    return;
  }

  success.textContent = "Registro exitoso";
});