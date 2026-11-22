// Mobile navigation, footer year and back-to-top control.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile menu after selecting a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Show the back-to-top button after scrolling down.
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 450);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
