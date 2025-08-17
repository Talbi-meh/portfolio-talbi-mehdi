document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL TO TOP ON LOAD ---
    window.scrollTo(0, 0);

    // --- AOS INITIALIZATION ---
    AOS.init({
        duration: 800, // Durée de l'animation
        once: true,    // L'animation ne se joue qu'une fois
    });

    // --- BURGER MENU LOGIC ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // --- SCROLL PROGRESS BAR & BACK TO TOP BUTTON ---
    const progressBar = document.querySelector('.scroll-progress-bar');
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Progress bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';

        // Back to top button
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // --- TYPING ANIMATION RESET ---
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const typingContainer = typedText.parentElement;
        typingContainer.addEventListener('click', () => {
            typedText.style.animation = 'none';
            typedText.offsetHeight; /* Trigger reflow */
            typedText.style.animation = null; 
        });
    }

    // --- PARTICLE GENERATION ---
    const hero = document.querySelector('.hero');
    if (hero) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            particle.style.setProperty('--x', Math.random() * 200 - 100);
            particle.style.setProperty('--y', Math.random() * 200 - 100);
            
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;

            hero.appendChild(particle);
        }
    }
});