const revealElements = document.querySelectorAll(
  ".card, .about-grid, .about-text, .about-skills, .contact-inner",
);
revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--text)" : "";
        });
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((s) => navObserver.observe(s));

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.style.borderBottomColor =
    window.scrollY > 50 ? "var(--border)" : "transparent";
});
