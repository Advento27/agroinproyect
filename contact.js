// Función para enviar un mensaje (ejemplo)
const sendMessage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        message: formData.get('message')
    };

    // Simular envío de mensaje
    console.log('Mensaje enviado:', data);
    alert('¡Mensaje enviado con éxito!');
};

// Asignar evento al formulario de contacto
document.getElementById('contactForm').addEventListener('submit', sendMessage);

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