// Este archivo puede contener funcionalidades específicas para la página Acerca de
console.log('Bienvenido a la página Acerca de.');

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
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