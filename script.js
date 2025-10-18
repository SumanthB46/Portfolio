document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
  });

  // Initialize Typed.js if element exists
  const typedTarget = document.querySelector(".typed-text");
  if (typedTarget) {
    new Typed(".typed-text", {
      strings: ["Web Developer", "UI/UX Enthusiast", "Tech Explorer"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  // Contact form submission with success message
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Simulate form success (you can integrate actual API here)
      successMessage.classList.remove("d-none");
      this.reset();

      setTimeout(() => {
        successMessage.classList.add("d-none");
      }, 3000);
    });
  }

  // Sticky navbar logic (optional enhancement: add 'sticky' class to navbar itself)
  window.addEventListener("scroll", () => {
    document.querySelector("nav.custom-navbar")?.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Optional: Close nav on link click (good for mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
});
