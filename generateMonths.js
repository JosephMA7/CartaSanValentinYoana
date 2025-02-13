const fs = require("fs");

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

meses.forEach((mes, index) => {
    const contenido = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuerdos de ${mes}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery-container">
        <h1>Recuerdos de ${mes} 💖</h1>
        <div class="gallery">
            <div class="photo-card">
                <img src="img/${mes.toLowerCase()}1.jpg" alt="Momento 1">
                <p>"Un día especial juntos"</p>
            </div>
            <div class="photo-card">
                <img src="img/${mes.toLowerCase()}2.jpg" alt="Momento 2">
                <p>"Nuestro mejor recuerdo"</p>
            </div>
        </div>
        <a href="gallery.html" class="back-button">Volver</a>
    </div>
</body>
</html>`;

    fs.writeFileSync(`mes${index + 1}.html`, contenido);
    console.log(`Archivo mes${index + 1}.html generado`);
});

console.log("Todos los archivos han sido creados.");
