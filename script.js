// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón "Ver productos"
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#productos').scrollIntoView({
        behavior: 'smooth'
    });
});

// Funcionalidad de los botones "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const productName = product.querySelector('h3').textContent;
        
        alert(`¡${productName} añadido al carrito!`);
        
        // Efecto visual al hacer clic
        this.style.backgroundColor = '#2ecc71';
        this.textContent = '¡Añadido!';
        
        setTimeout(() => {
            this.style.backgroundColor = '#667eea';
            this.textContent = 'Añadir al carrito';
        }, 2000);
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
