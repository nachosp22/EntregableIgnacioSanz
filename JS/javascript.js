function cambiarColor() {
    const h1 = document.querySelector('h1');
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    h1.style.color = colorAleatorio;
}

setInterval(cambiarColor, 1000); // Cambia de color cada segundo