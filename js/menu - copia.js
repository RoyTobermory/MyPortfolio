// FUNCIÓN PARA CREAR EL MENÚ NUEVO
function createNavbar() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <!-- LOGO COMO BOTÓN -->
                <a href="index.html" class="logo-button">
                    <img src="img/Logo.png" alt="Logo" class="logo-image">
                </a>
                
                <!-- NOMBRE -->
                <div class="name">Rodrigo Mondragón</div>
                
                <!-- BOTONES DEL MENÚ -->
                <ul class="nav-menu">
                    <li><a href="3d.html" class="nav-link" data-page="3d">3D</a></li>
                    <li><a href="concept-art.html" class="nav-link" data-page="concept-art">ConceptArt</a></li>
                    <li><a href="ilustracion.html" class="nav-link" data-page="ilustracion">Ilustración</a></li>
                    <li><a href="sobre-mi.html" class="nav-link" data-page="sobre-mi">Sobre Mí</a></li>
                </ul>
                
                <!-- MENÚ MÓVIL -->
                <button class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;
}

// FUNCIÓN PARA CREAR EL FOOTER
function createFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 Rodrigo Mondragón. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
}

// FUNCIÓN PARA INICIALIZAR EL MENÚ
function initializeMenu() {
    // Crear el menú
    document.body.insertAdjacentHTML('afterbegin', createNavbar());
    
    // Crear el footer
    document.body.insertAdjacentHTML('beforeend', createFooter());

    // Marcar el enlace activo
    markActiveLink();
    
    // Configurar menú móvil
    setupMobileMenu();
}

// FUNCIÓN PARA MARCAR EL ENLACE ACTIVO
function markActiveLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// FUNCIÓN PARA OBTENER LA PÁGINA ACTUAL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === '' || page === 'index.html') return 'index';
    return page.replace('.html', '');
}

// FUNCIÓN PARA EL MENÚ MÓVIL
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// INICIALIZAR TODO
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
});