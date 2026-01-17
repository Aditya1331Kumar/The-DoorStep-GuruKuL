/* ================= POPUP CONTROL ================= */
const popup = document.getElementById("entryPopup");
const skipBtn = document.getElementById("skipPopup");

skipBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

/* ================= REVEAL ON SCROLL ================= */
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

/* ================= NAVBAR SHADOW ================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* ================= SMOOTH ANCHOR FIX ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
