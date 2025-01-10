// Initialisation des animations AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Menu mobile
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Animation du header au scroll
const nav = document.querySelector('nav');
let lastScroll = 0;
   
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Animation des cartes de véhicules
const vehicleCards = document.querySelectorAll('.vehicle-card');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

vehicleCards.forEach(card => {
    observer.observe(card);
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Ferme le menu mobile si ouvert
        if (menuButton.classList.contains('active')) {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animation de soumission
    const submitButton = this.querySelector('.submit-button');
    submitButton.style.width = submitButton.offsetWidth + 'px';
    submitButton.textContent = 'Envoyé !';
    submitButton.disabled = true;
    
    // Réinitialisation du formulaire après un délai
    setTimeout(() => {
        this.reset();
        submitButton.textContent = 'Envoyer';
        submitButton.disabled = false;
    }, 2000);
});

// Animation au survol des services
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
