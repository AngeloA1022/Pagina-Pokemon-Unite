// ==========================
// UI - INTERACCIONES
// ==========================

// Mostrar / ocultar descripción
export function toggleDescription(button) {
    const card = button.closest('.card');
    const p = card.querySelector('p');

    if (p.style.display === 'none') {
        p.style.display = 'block';
        button.textContent = 'Ocultar descripción';
    } else {
        p.style.display = 'none';
        button.textContent = 'Ver descripción';
    }
}

// Mostrar info con radios
export function toggleInfo(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';

    const radios = el.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedId = id + '-selected';
            const selectedElement = document.getElementById(selectedId);

            if (selectedElement) {
                selectedElement.textContent = 'Seleccionado: ' + this.value;
            }
        });
    });
}

// Modales
export function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

export function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

// Cerrar modal al hacer click fuera
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};