# Build42 Website

Static website for Build42 Labs.

## Edit Content

Most page copy lives in:

- `src/content.js`

Main page structure lives in:

- `index.html`

Visual styling lives in:

- `assets/css/styles.css`

## Preview Locally

Open `index.html` directly in a browser, or run a small local server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Cloudflare Pages

This is a static site.

Recommended Cloudflare Pages settings:

- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

## Domain Notes

When moving `build42.com`, preserve Google Workspace email DNS records:

- MX
- SPF
- DKIM
- DMARC
- Google verification TXT records
