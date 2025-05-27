// ==================== BOTÓN VOLVER ARRIBA (SCROLL TO TOP) ====================

// 1. Obtener referencia al botón
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 2. Definir cuándo mostrar/ocultar el botón
function handleScroll() {
    // Si el usuario ha bajado más de 300px (puedes ajustar este valor)
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show"); // Muestra el botón añadiendo la clase 'show'
    } else {
        scrollTopBtn.classList.remove("show"); // Oculta el botón quitando la clase 'show'
    }
}

// 3. Definir qué hacer al hacer clic
function scrollToTop() {
    window.scrollTo({
        top: 0, // Ir al inicio de la página (posición 0)
        behavior: 'smooth' // ¡Hacerlo con una animación suave!
    });
}

// 4. Asignar los "escuchadores" de eventos
window.addEventListener("scroll", handleScroll); // Ejecuta handleScroll cada vez que se hace scroll
scrollTopBtn.addEventListener("click", scrollToTop); // Ejecuta scrollToTop cuando se hace clic


