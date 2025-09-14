// document.addEventListener("DOMContentLoaded", () => {
// console.log("Cybersecurity Portfolio Loaded Successfully 🚀");
// code
// Code
// // Toggle navbar for mobile
// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

// // Close mobile nav when a link is clicked
// navLinks.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//         }
//     });
// });

// // Highlight active nav link based on scroll position
// const sections = document.querySelectorAll("section, header");
// const navLi = document.querySelectorAll(".nav-links li a");

// window.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - 90) { // Adjust offset for sticky nav
//             current = section.getAttribute("id");
//         }
//     });

//     navLi.forEach((li) => {
//         li.classList.remove("active");
//         if (li.getAttribute("href").includes(current)) {
//             li.classList.add("active");
//         }
//     });
// });
// });









document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const menuIcon = menuToggle.querySelector('svg');

    if (!menuToggle || !mobileNav || !menuIcon) {
        return;
    }

    const hamburgerIconPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
    const closeIconPath = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';

    const toggleMenu = () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuIcon.innerHTML = isOpen ? closeIconPath : hamburgerIconPath;
        menuToggle.setAttribute('aria-expanded', isOpen);
    };
    
    const closeMenu = () => {
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            menuIcon.innerHTML = hamburgerIconPath;
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    };

    menuToggle.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});