# Montrose Park Bible Church Website

Static church website built with plain **HTML**, **CSS**, and **JavaScript**, prepared for **Decap CMS** with **Netlify Identity + Git Gateway** so sermons and updates can be managed in a browser.

## What’s Included

- `index.html` – homepage with hero, navigation, quick links, and featured ministry cards
- `styles/main.css` – shared responsive styling and visual theme
- `js/main.js` – mobile menu and footer year
- `pages/*.html` – content pages, including the Bible Messages archive
- `pages/map-directions.html` – location, address details, and embedded Google Map
- `data/sermons.json` – Git-backed sermon archive used by the Bible Messages page
- `admin/` – Decap CMS admin entry and configuration

## Run Locally

You can open `index.html` directly in your browser, or run a tiny local server.

```bash
cd "/Users/kylef/Documents/VS-Code/Montrose Park Bible Church website"
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## Decap CMS Setup

This project is configured for the simplest Decap CMS setup on **Netlify**:

1. Push the site to GitHub.
2. Import the repository into **Netlify** as a new site.
3. In Netlify, enable **Identity** and then enable **Git Gateway**.
4. Invite yourself as a Netlify Identity user or enable registration temporarily.
5. Visit `https://your-netlify-site/admin/` to sign in and edit `data/sermons.json` through Decap CMS.

GitHub Pages can host the static site, but Decap login on GitHub Pages requires a separate OAuth service. Netlify avoids that extra authentication setup.

## Next Steps

1. Connect the repo to GitHub and deploy it on Netlify.
2. Enable Netlify Identity and Git Gateway.
3. Add more collections later for sermon pages, `latest-updates`, `about` pages, or events.
4. Replace placeholder contact and donation details with your final church information.
