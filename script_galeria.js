document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const altTexto = this.alt;
            alert(`Hiciste clic en: ${altTexto}`); // Muestra el texto alternativo de la imagen
            // Aquí podrías agregar más funcionalidades, como mostrar la imagen en un modal
        });
    });
});