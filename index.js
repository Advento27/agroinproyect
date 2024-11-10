// Activar y desactivar el modo oscuro
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Cambiar texto del botón según el estado del modo oscuro
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Modo Claro';
    } else {
        darkModeButton.textContent = 'Modo Oscuro';
    }
});

// Control de la navegación móvil
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Carrusel de contenido (Nosotros, Historia, Misión, Visión, Valores)
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-section');

        // Desactivar todos los botones del carrusel
        navItems.forEach(navItem => navItem.classList.remove('active'));
        
        // Activar el botón actual
        item.classList.add('active');

        // Ocultar todas las secciones
        sections.forEach(section => section.classList.remove('active'));

        // Mostrar la sección correspondiente
        document.getElementById(targetSection).classList.add('active');
    });
});

// Función para ajustar el tamaño del menú en modo móvil
const adjustMenuForMobile = () => {
    if (window.innerWidth <= 768) {
        menu.classList.remove('active'); // Asegurarse de que el menú esté cerrado
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
        menu.classList.add('active'); // Mostrar el menú en pantallas grandes
    }
};

// Ejecutar la función al cargar la página y al cambiar el tamaño
window.addEventListener('resize', adjustMenuForMobile);
window.addEventListener('load', adjustMenuForMobile);
