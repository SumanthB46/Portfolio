// AOS Animation
AOS.init();

// Typed.js text animation
new Typed(".typed-text", {
  strings: ["Web Developer", "UI/UX Enthusiast", "Tech Explorer"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("successMessage").classList.remove("d-none");
  this.reset();
  setTimeout(() => {
    document.getElementById("successMessage").classList.add("d-none");
  }, 3000);
});

// Sticky navbar
window.addEventListener("scroll", () => {
  document.querySelector("header")?.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
