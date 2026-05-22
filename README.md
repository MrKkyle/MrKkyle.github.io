# Montrose Park Bible Church Website

Static church website built with plain **HTML**, **CSS**, and **JavaScript**, now prepared for **Decap CMS** so sermons can be published through GitHub.

## What’s Included

- `index.html` – homepage with hero, navigation, quick links, and featured ministry cards
- `styles/main.css` – shared responsive styling and visual theme
- `js/main.js` – mobile menu and footer year
- `pages/*.html` – content pages, including the Bible Messages archive
- `redirects/*.html` + `js/redirect.js` – reusable redirect pages with fallback links
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

1. Replace `YOUR_GITHUB_USERNAME/YOUR_REPO_NAME` in `admin/config.yml` with your real GitHub repo.
2. Deploy the site to a host that serves static files from GitHub, such as **Netlify** or **GitHub Pages**.
3. Visit `https://your-site-url/admin/` to sign in and edit `data/sermons.json` through Decap CMS.
4. Commit and publish sermon updates from the CMS; the Bible Messages page reads the published JSON file.

## Next Steps

1. Connect the repo to GitHub and deploy it on Netlify or GitHub Pages.
2. Configure Decap CMS authentication for the repository.
3. Add more collections later for `latest-updates`, `about` pages, or events.
4. Replace the remaining placeholder redirect URLs in `redirects/*.html`.
