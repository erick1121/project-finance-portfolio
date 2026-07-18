/* ============================================================================
   Project Finance Portfolio — JS vanilla compartido (home + case study)
   Sin dependencias externas, sin localStorage.
   ============================================================================ */

(function () {
  "use strict";

  /* ---- Filtro de casos de estudio por sector (solo en index.html) ---- */

  function initSectorFilter() {
    const pills = document.querySelectorAll(".pill[data-filter]");
    const cards = document.querySelectorAll(".case-card[data-sector]");
    const emptyState = document.getElementById("empty-state");
    if (!pills.length || !cards.length) return;

    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.setAttribute("aria-pressed", "false"));
        pill.setAttribute("aria-pressed", "true");

        const filter = pill.getAttribute("data-filter");
        let visibleCount = 0;

        cards.forEach((card) => {
          const match = filter === "all" || card.getAttribute("data-sector") === filter;
          card.hidden = !match;
          if (match) visibleCount++;
        });

        if (emptyState) emptyState.hidden = visibleCount !== 0;
      });
    });
  }

  /* ---- Reveal on scroll ---- */

  function initRevealOnScroll() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---- Scroll-spy del TOC (solo en case-study-template.html) ---- */

  function initScrollSpy() {
    const tocLinks = document.querySelectorAll(".case-toc a[href^='#']");
    if (!tocLinks.length) return;

    const sections = Array.from(tocLinks)
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!sections.length) return;

    const linkForSection = new Map();
    tocLinks.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) linkForSection.set(target, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkForSection.get(entry.target);
          if (!link) return;
          if (entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ---- Año en footer ---- */

  function setFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSectorFilter();
    initRevealOnScroll();
    initScrollSpy();
    setFooterYear();
  });
})();
