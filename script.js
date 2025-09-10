// Small JS enhancements
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully 🚀");
});
// Toggle navbar for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
