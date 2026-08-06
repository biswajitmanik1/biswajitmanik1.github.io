// ============================
// SCROLL REVEAL
// ============================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        const idx = Array.from(siblings).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ============================
// NAV SCROLL SHADOW
// ============================
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(11,13,18,0.96)";
    } else {
      navbar.style.background = "rgba(11,13,18,0.85)";
    }
  },
  { passive: true },
);

// ============================
// HAMBURGER MENU
// ============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ============================
// SMOOTH SCROLL WITH NAV OFFSET
// ============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 65,
      behavior: "smooth",
    });
  });
});

// ============================
// CONTACT FORM
// ============================
function handleSubmit(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button[type="submit"]');
  const success = document.getElementById("form-success");

  btn.textContent = "Sending…";
  btn.disabled = true;

  // Simulate a short delay (replace with real API call / Formspree)
  setTimeout(() => {
    btn.textContent = "Send Message →";
    btn.disabled = false;
    success.style.display = "block";
    event.target.reset();
    setTimeout(() => {
      success.style.display = "none";
    }, 5000);
  }, 800);
}
