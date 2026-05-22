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
