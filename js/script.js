document.addEventListener('DOMContentLoaded', () => {
    console.log('La página web de Carpintería Americo Sueiro Pérez ha cargado completamente.');

    // --- Lógica del Menú Hamburguesa ---
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('#main-nav ul li a');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            body.classList.toggle('no-scroll');

            // Cambia el icono de hamburguesa a cruz y viceversa
            const icon = hamburgerBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cierra el menú cuando se hace clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cierra si el menú está activo (para evitar cierres innecesarios en desktop)
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    body.classList.remove('no-scroll');

                    // Vuelve a cambiar el icono a hamburguesa
                    const icon = hamburgerBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Smooth Scrolling para los enlaces de navegación ---
    // Este código ya lo tenías y funciona bien
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Lógica para el formulario de contacto ---
    // Este código ya lo tenías y funciona bien
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // e.preventDefault(); // Descomenta esta línea si quieres manejar el envío con JavaScript (por ejemplo, con AJAX)

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, rellena todos los campos obligatorios.');
                return;
            }

            console.log('Formulario enviado (simulado):', { nombre, email, mensaje });
            // alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
            // contactForm.reset(); // Para limpiar el formulario después de un envío exitoso
        });
    }

    // --- Lógica del botón "Volver Arriba" ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) { // Solo si el botón existe en la página
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Muestra el botón si el scroll es mayor a 300px
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    }
});