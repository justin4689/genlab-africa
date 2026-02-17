/* =====================================================
   GENLAB AFRICA — script.js
   Banner : géré entièrement en CSS (transform + keyframes)
   Ce fichier gère uniquement :
     1. Menu burger mobile
     2. Lottie animation
   ===================================================== */

/* ── 1. NAV TOGGLE (burger menu mobile) ────────────── */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ferme le menu quand on clique sur un lien
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Ferme le menu quand on clique en dehors
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove("nav-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ── 2. LOTTIE ──────────────────────────────────────── */
const lottieContainer = document.getElementById("lottie-container");

if (lottieContainer && typeof lottie !== "undefined") {
  lottie.loadAnimation({
    container: lottieContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/animation.json", // ← remplace par ton chemin réel
  });
}