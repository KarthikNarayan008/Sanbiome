// Mobile menu
const menu = document.querySelector(".menu"), nav = document.getElementById("nav");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded", nav.classList.toggle("open")));

// Shield clip path shared by the hero portrait (matches the logo's shield)
document.body.insertAdjacentHTML("beforeend", '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><clipPath id="shield" clipPathUnits="objectBoundingBox"><path d="M0,0.1 L0.47,0.01 Q0.5,0 0.53,0.01 L1,0.1 L1,0.62 Q1,0.86 0.5,1 Q0,0.86 0,0.62 Z"/></clipPath></svg>');

// Calendly links open as an in-page popup; without JS or before the widget loads they fall back to a normal link
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="https://calendly.com/"]');
  if (a && window.Calendly) { e.preventDefault(); Calendly.initPopupWidget({ url: a.href }); }
});
