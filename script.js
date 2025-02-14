function openGallery() {
    window.location.href = "carta.html"; // Ahora lleva a la carta antes de la galería
}

// Función para generar corazones flotantes
function createFloatingHearts() {
    const body = document.querySelector('body');
    const numberOfHearts = 20; // Aumenta el número de corazones flotantes si quieres más

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posición aleatoria en el eje X y Y de la página
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;

        // Duración y retraso aleatorio para la animación
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración entre 3s y 6s
        heart.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio entre 0s y 5s

        body.appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Llamar a la función para crear los corazones al cargar la página
window.onload = createFloatingHearts;
