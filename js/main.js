/* ── Year ── */
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ── Mobile nav ── */
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });
}

/* ── Auto-hide header on scroll ── */
function initAutoHideHeader() {
  const header = document.querySelector(".site-header");

  if (!header || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let lastScrollY = window.scrollY || 0;
  let ticking = false;
  const showThreshold = 10;
  const hideThreshold = 14;

  const updateHeaderState = () => {
    const currentScrollY = window.scrollY || 0;
    const delta = currentScrollY - lastScrollY;
    const mobileNavOpen = siteNav ? siteNav.classList.contains("is-open") : false;

    if (mobileNavOpen || currentScrollY <= showThreshold || delta < -showThreshold) {
      header.classList.remove("is-hidden");
    } else if (delta > hideThreshold) {
      header.classList.add("is-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (siteNav && !siteNav.classList.contains("is-open")) {
      updateHeaderState();
    }
  });
}

initAutoHideHeader();

/* ── About dropdown ── */
const aboutDropdown = document.getElementById("aboutDropdown");
const aboutDropdownToggle = document.getElementById("aboutDropdownToggle");

if (aboutDropdown && aboutDropdownToggle) {
  const closeAboutDropdown = () => {
    aboutDropdown.classList.remove("is-open");
    aboutDropdownToggle.setAttribute("aria-expanded", "false");
  };

  aboutDropdownToggle.addEventListener("click", () => {
    const isOpen = aboutDropdown.classList.toggle("is-open");
    aboutDropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!aboutDropdown.contains(event.target)) {
      closeAboutDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAboutDropdown();
    }
  });
}

/* ── Dark / light theme ── */
const THEME_KEY = "mpbc-theme";

const ICONS = {
  light: "☀️",
  dark:  "🌙",
};

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // storage blocked – silently ignore
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    const isDark = theme === "dark";
    btn.textContent = isDark ? ICONS.light : ICONS.dark;
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title",      isDark ? "Light mode"            : "Dark mode");
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
}

/* Inject the toggle button into every .nav-wrapper found on the page.
   We append it as the last child of the wrapper (after the nav) so it
   sits naturally at the far right in the header. */
function injectToggleButtons() {
  const wrappers = document.querySelectorAll(".nav-wrapper");
  wrappers.forEach((wrapper) => {
    const btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    wrapper.appendChild(btn);
    btn.addEventListener("click", toggleTheme);
  });
}

/* Initialise on DOMContentLoaded so the toggle button is ready in the
   header before first paint completes. */
(function init() {
  const stored = getStoredTheme();
  // Default to light; only go dark if explicitly saved.
  const theme = stored === "dark" ? "dark" : "light";
  applyTheme(theme);
  injectToggleButtons();
  // Re-apply so the injected buttons get the right icon straight away.
  applyTheme(theme);
})();

/* ── Scroll reveal animations ── */
function initRevealAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealGroups = [
    { selector: "main > section", reveal: "fade", stagger: 80 },
    { selector: ".section-head", reveal: "up", stagger: 90 },
    { selector: ".quick-item", reveal: "up", stagger: 70 },
    { selector: ".feature-card", reveal: "up", stagger: 80 },
    { selector: ".page-box", reveal: "up", stagger: 90 },
    { selector: ".faq-item", reveal: "up", stagger: 55 },
    { selector: ".sermon-card", reveal: "up", stagger: 45 },
    { selector: ".update-card", reveal: "up", stagger: 45 },
    { selector: ".parallax-card", reveal: "fade", stagger: 120 },
    { selector: ".map-page-grid .page-box", reveal: "up", stagger: 100 },
    { selector: ".admin-callout", reveal: "fade", stagger: 0 },
    { selector: ".redirect-card", reveal: "up", stagger: 0 }
  ];

  const candidates = new Set();
  revealGroups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((element, index) => {
      if (!element.hasAttribute("data-reveal")) {
        element.setAttribute("data-reveal", group.reveal);
      }
      if (!element.style.getPropertyValue("--reveal-delay") && group.stagger > 0) {
        element.style.setProperty("--reveal-delay", `${index * group.stagger}ms`);
      }
      candidates.add(element);
    });
  });

  if (reducedMotion) {
    candidates.forEach((element) => element.classList.add("is-visible"));
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
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  const observeElement = (element) => {
    if (!element || element.classList.contains("is-visible")) {
      return;
    }
    observer.observe(element);
  };

  candidates.forEach(observeElement);

  const dynamicSelectors = [".sermon-card", ".update-card"];
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        dynamicSelectors.forEach((selector) => {
          const dynamicNodes = node.matches(selector)
            ? [node]
            : Array.from(node.querySelectorAll(selector));

          dynamicNodes.forEach((element, index) => {
            if (!element.hasAttribute("data-reveal")) {
              element.setAttribute("data-reveal", "up");
            }

            if (!element.style.getPropertyValue("--reveal-delay")) {
              element.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 45}ms`);
            }

            observeElement(element);
          });
        });
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

initRevealAnimations();

/* ── Smooth page transitions ── */
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  if (!link || link.target === "_blank" || link.href.startsWith("mailto:") || link.href.startsWith("tel:") || link.origin !== location.origin) return;
  e.preventDefault();
  document.body.classList.add("is-navigating");
  setTimeout(() => { window.location.href = link.href; }, 180);
});

/* ── Remove image shimmer once loaded ── */
document.querySelectorAll(".feature-card img, .slide .image").forEach((img) => {
  const markLoaded = () => img.setAttribute("complete", "");
  if (img.complete) markLoaded();
  else img.addEventListener("load", markLoaded);
});
