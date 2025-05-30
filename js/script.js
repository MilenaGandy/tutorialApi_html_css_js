document.addEventListener('DOMContentLoaded', function() {
    const modoToggleBtn = document.getElementById('modoToggleBtn');
    // La referencia al icono ahora es la etiqueta <i>
    const modoIcono = document.getElementById('modoIcono'); 
    const body = document.body;

    // Clases de Font Awesome para los iconos
    const claseSol = 'fa-sun'; // De "fas fa-sun"
    const claseLuna = 'fa-moon'; // De "fas fa-moon"

    // Función para cambiar el icono
    function actualizarIcono(modoActual) {
        if (modoActual === 'dark') {
            modoIcono.classList.remove(claseSol); // Quita la clase del sol
            modoIcono.classList.add(claseLuna);   // Añade la clase de la luna
            // modoToggleBtn.title = "Cambiar a Modo Claro"; // Opcional
        } else {
            modoIcono.classList.remove(claseLuna); // Quita la clase de la luna
            modoIcono.classList.add(claseSol);    // Añade la clase del sol
            // modoToggleBtn.title = "Cambiar a Modo Oscuro"; // Opcional
        }
    }

    // Función para aplicar el modo (claro u oscuro)
    function aplicarModo(modo) {
        if (modo === 'dark') {
            body.classList.add('dark-mode');
            localStorage.setItem('modo', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('modo', 'light');
        }
        actualizarIcono(modo); // Actualizar el icono después de aplicar el modo
    }

    // Event listener para el botón
    if (modoToggleBtn) {
        modoToggleBtn.addEventListener('click', function() {
            const esModoOscuroActual = body.classList.contains('dark-mode');
            aplicarModo(esModoOscuroActual ? 'light' : 'dark');
        });
    }

    // Cargar el modo guardado al iniciar la página
    const modoGuardado = localStorage.getItem('modo');
    // Si no hay modo guardado, el icono por defecto es el sol (modo claro)
    const modoInicial = modoGuardado || 'light'; 
    // Establecemos la clase inicial del icono antes de aplicar el modo,
    // para que actualizarIcono funcione correctamente la primera vez.
    if (modoIcono) { // Asegurarse que el icono existe
        if (modoInicial === 'dark') {
            modoIcono.classList.remove(claseSol);
            modoIcono.classList.add(claseLuna);
        } else {
            modoIcono.classList.remove(claseLuna);
            modoIcono.classList.add(claseSol);
        }
    }
    aplicarModo(modoInicial); 
});