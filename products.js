// Funcionalidad para el modo oscuro
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
};

// Funcionalidad para el menú hamburguesa
const toggleMobileMenu = () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
};

// Event Listeners
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);

// Cerrar el menú móvil cuando se hace clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        const hamburger = document.querySelector('.hamburger');
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Función para filtrar productos (si se implementa posteriormente)
const filterProducts = (category) => {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
};