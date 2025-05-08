document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel-slide');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');
    let indiceActual = 0;

    function mostrarSlide(indice) {
        slides.forEach(slide => {
            slide.classList.remove('activo');
        });
        slides[indice].classList.add('activo');
    }

    function siguienteSlide() {
        indiceActual = (indiceActual + 1) % slides.length;
        mostrarSlide(indiceActual);
    }

    function anteriorSlide() {
        indiceActual = (indiceActual - 1 + slides.length) % slides.length;
        mostrarSlide(indiceActual);
    }

    // Mostrar la primera imagen al cargar la página
    mostrarSlide(indiceActual);

    // Event listeners para los botones
    botonSiguiente.addEventListener('click', siguienteSlide);
    botonAnterior.addEventListener('click', anteriorSlide);
});