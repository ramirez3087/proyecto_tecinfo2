document.addEventListener('DOMContentLoaded', () => {
    // 1. Botón "¡Quiero saber más!" (scroll suave)
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 2. Pop-up de detalles del experto
    const expertDetailsPopup = document.getElementById('expertDetails');
    const closeBtn = expertDetailsPopup ? expertDetailsPopup.querySelector('.close-btn') : null;
    const popupExpertName = document.getElementById('popupExpertName');
    const popupExpertBio = document.getElementById('popupExpertBio');
    const viewProfileBtns = document.querySelectorAll('.view-profile-btn');

    // Datos de los expertos (puedes expandirlos)
    const expertsData = {
        expert1: {
            name: "Dr. Aqua Flow",
            bio: "El Dr. Aqua Flow es un hidrólogo de renombre mundial con más de 20 años de experiencia en la gestión sostenible de recursos hídricos. Ha liderado proyectos innovadores en purificación de agua y conservación en diversas regiones. Su trabajo se centra en la aplicación de tecnologías avanzadas para asegurar el acceso a agua limpia y segura para todos."
        },
        expert2: {
            name: "Dra. Vida Sana",
            bio: "La Dra. Vida Sana es una médica apasionada por la salud pública y el bienestar integral. Con una especialización en nutrición y medicina preventiva, ha dedicado su carrera a educar al público sobre hábitos saludables y el impacto de nuestro entorno en la salud. Es una defensora incansable de la vida sana y consciente."
        },
        expert3: {
            name: "Dr. Tierra Verde",
            bio: "El Dr. Tierra Verde es un ambientalista y experto en sostenibilidad con un profundo conocimiento en cambio climático y ecología. Su investigación se enfoca en estrategias para la conservación de ecosistemas y la promoción de prácticas de desarrollo sostenible. Es un líder inspirador en la lucha por un planeta más verde y resiliente."
        }
    };

    viewProfileBtns.forEach(button => {
        button.addEventListener('click', () => {
            const expertId = button.dataset.expert;
            const expert = expertsData[expertId];

            if (expert && expertDetailsPopup) {
                popupExpertName.textContent = expert.name;
                popupExpertBio.textContent = expert.bio;
                expertDetailsPopup.style.display = 'block'; // Muestra el pop-up
                document.body.classList.add('no-scroll'); // Evita el scroll del fondo
                // Crear y mostrar overlay
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.body.appendChild(overlay);
                overlay.style.display = 'block';

                overlay.addEventListener('click', () => {
                    expertDetailsPopup.style.display = 'none';
                    overlay.style.display = 'none';
                    document.body.classList.remove('no-scroll');
                    overlay.remove(); // Elimina el overlay al cerrar
                });
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            expertDetailsPopup.style.display = 'none'; // Oculta el pop-up
            document.body.classList.remove('no-scroll');
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.remove(); // Elimina el overlay al cerrar
            }
        });
    }

    // Cerrar pop-up si se presiona ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expertDetailsPopup && expertDetailsPopup.style.display === 'block') {
            expertDetailsPopup.style.display = 'none';
            document.body.classList.remove('no-scroll');
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.remove();
            }
        }
    });


    // 3. Acordeón de FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;

            // Cierra todos los demás ítems del acordeón
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherHeader.nextElementSibling;
                if (otherItem !== item && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherContent.style.maxHeight = null;
                }
            });

            // Abre o cierra el ítem actual
            header.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Cierra el acordeón
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'; // Abre el acordeón
            }
        });
    });

    // 4. Botones de "Recordatorio" para Live
    const joinLiveBtns = document.querySelectorAll('.join-live-btn');
    joinLiveBtns.forEach(button => {
        button.addEventListener('click', () => {
            const liveId = button.dataset.live;
            // Aquí podrías integrar una API de calendario (Google Calendar, Outlook)
            // o simplemente mostrar un mensaje de confirmación.
            alert(`¡Recordatorio para el Live ${liveId} activado! Te notificaremos antes del evento.`);
            // Para una implementación más avanzada, podrías:
            // - Cambiar el texto del botón a "Recordatorio activado"
            // - Deshabilitar el botón
            // - Guardar la preferencia del usuario (si tienes backend)
        });
    });
});
