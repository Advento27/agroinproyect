// Este archivo puede contener funcionalidades específicas para la página de inicio
console.log('Bienvenido a la página de inicio.');

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
};

// Asignar evento al botón de modo oscuro
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);

// Control de la navegación móvil
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});