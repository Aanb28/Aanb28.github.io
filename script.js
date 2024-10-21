// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobile-menu');
// const closeMenu = document.getElementById('close-menu');

// // Function to open the mobile menu
// hamburger.addEventListener('click', () => {
//     mobileMenu.classList.add('active'); // Show mobile menu
// });

// // Function to close the mobile menu
// closeMenu.addEventListener('click', () => {
//     mobileMenu.classList.remove('active'); // Hide mobile menu
// });

// // Optional: Close menu when clicking outside of it
// window.addEventListener('click', (event) => {
//     if (event.target !== hamburger && !mobileMenu.contains(event.target)) {
//         mobileMenu.classList.remove('active'); // Hide mobile menu
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
