(function () {
  const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setCurrent = (id) => {
    links.forEach((a) => {
      if (a.getAttribute("href") === "#" + id) {
        a.setAttribute("aria-current", "true");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
})();

/* Footer year stays current */
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();