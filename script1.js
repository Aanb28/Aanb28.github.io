const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // Toggle mobile menu visibility
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Hide mobile menu when closing
});
