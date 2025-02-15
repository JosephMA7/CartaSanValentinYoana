function openGallery() {
    window.location.href = "carta.html"; // Ahora lleva a la carta antes de la galería
}

// Función para generar corazones flotantes
function createFloatingImages() {
    const body = document.querySelector('body');
    const numberOfImages = 20; // Número de corazones flotantes que quieres

    for (let i = 0; i < numberOfImages; i++) {
        const image = document.createElement('div');
        image.classList.add('floating-image');
        
        // Posición aleatoria en el eje X y Y de la página
        image.style.left = `${Math.random() * 100}vw`;
        image.style.top = `${Math.random() * 100}vh`;

        // Duración y retraso aleatorio para la animación
        image.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración entre 3s y 6s
        image.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio entre 0s y 5s

        body.appendChild(image);

        // Eliminar la imagen después de que termine la animación
        image.addEventListener('animationend', () => {
            image.remove();
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.createElement("audio");
    audio.src = "audio/LATIN MAFIA - Yo siempre contesto. (Visualizer).mp3"; // Ruta del archivo de audio
    audio.loop = true;
    
    // Verificar si la música ya estaba reproduciéndose
    let wasPlaying = localStorage.getItem("musicPlaying");

    if (wasPlaying === "true") {
        audio.play();
    }

    document.body.appendChild(audio);

    // Evento para iniciar la música al hacer clic (Chrome bloquea autoplay)
    document.addEventListener("click", function() {
        audio.play();
        localStorage.setItem("musicPlaying", "true");
    }, { once: true });

    // Guardar la posición del audio al salir
    window.addEventListener("beforeunload", function() {
        localStorage.setItem("musicTime", audio.currentTime);
    });

    // Restaurar la posición del audio
    let lastTime = localStorage.getItem("musicTime");
    if (lastTime) {
        audio.currentTime = parseFloat(lastTime);
    }
});



// Llamar a la función para crear los corazones flotantes al cargar la página
window.onload = createFloatingImages;
