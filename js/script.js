document.addEventListener('DOMContentLoaded', () => {
    console.log('La página web de Carpintería Americo Sueiro Pérez ha cargado completamente.');

    // Aquí puedes añadir funcionalidades JavaScript más avanzadas.
    // Por ejemplo:

    // 1. Smooth Scrolling para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Posiblemente, lógica para un formulario de contacto (por ejemplo, validación básica antes de enviar)
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

            // Aquí podrías añadir más validaciones (ej. formato de email)
            // if (!/^\S+@\S+\.\S+$/.test(email)) {
            //     alert('Por favor, introduce un email válido.');
            //     return;
            // }

            // Si todo está bien, el formulario se enviaría si no se ha llamado a e.preventDefault()
            // O podrías enviar los datos con fetch() a un backend si lo tienes.
            console.log('Formulario enviado (simulado):', { nombre, email, mensaje });
            // alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
            // contactForm.reset(); // Para limpiar el formulario después de un envío exitoso
        });
    }

    // 3. Si agregas una galería de proyectos, podrías tener JavaScript para un "lightbox" o carrusel.
    // 4. Si el menú de navegación es complejo en móvil, podrías añadir un botón de "hamburguesa" para alternarlo.
});