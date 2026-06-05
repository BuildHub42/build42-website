# Website Migration Plan

Goal: move the current simple informational website off Google Cloud to the cheapest maintainable setup, using GitHub for source control and Cloudflare Pages for hosting.

## Recommended Target Setup

- Source code: GitHub repository owned by the work account or organization
- Hosting: Cloudflare Pages free plan
- Domain/DNS: keep current registrar if preferred, but point the website records to Cloudflare Pages
- Email: keep Google Workspace Gmail records unchanged
- Maintenance: edit locally with Codex, preview changes, commit to GitHub, deploy automatically

## Information To Collect

- Current public website URL
- Current domain registrar and DNS provider
- Google Cloud project name or service currently hosting the site
- Whether the site has a contact form, booking widget, analytics, embedded maps, or other integrations
- Current source files exported from Google AI Studio or Google Cloud
- Existing brand assets: logo, photos, icons, PDFs, fonts

## Migration Steps

1. Inventory current site
   - Visit every public page
   - Record page URLs, titles, forms, images, downloads, and integrations
   - Check mobile and desktop layouts

2. Export source code
   - Download or clone the current project files
   - Identify the framework: plain HTML, Vite, React, Next.js, Astro, or another setup
   - Confirm whether the site can be fully static

3. Clean project for easy maintenance
   - Remove unnecessary generated files
   - Put editable copy in obvious content files
   - Put images and documents in predictable folders
   - Add local preview instructions

4. Create work-owned GitHub repo
   - Push the cleaned site source
   - Use a clear repo name, such as `company-website`
   - Protect ownership under the work account or organization

5. Deploy to Cloudflare Pages
   - Connect the GitHub repo
   - Configure the build command and output folder
   - Test the temporary Cloudflare Pages URL

6. Domain cutover
   - Preserve Google Workspace email DNS records
   - Add Cloudflare Pages custom domain records
   - Verify HTTPS and redirects
   - Keep old Google Cloud site active until the new site is confirmed

7. Final cleanup
   - Add maintenance notes
   - Document how to edit pages and images
   - Remove or shut down the old Google Cloud hosting after DNS has fully settled

## Suggested Project Structure

```text
company-website/
├─ public/
│  ├─ images/
│  └─ documents/
├─ src/
│  ├─ content/
│  ├─ pages/
│  ├─ components/
│  └─ styles/
├─ README.md
├─ package.json
└─ MIGRATION_PLAN.md
```

## DNS Safety Notes For Google Workspace

Do not delete Google Workspace mail records during migration.

Keep or recreate:

- MX records for Gmail
- SPF TXT record
- DKIM TXT record
- DMARC TXT record, if present
- Google site/domain verification TXT records

## Next Action

Current public site checked: https://build42.com

Notes from first inspection:

- `https://www.buid42.com` does not resolve, so the likely intended domain is `https://build42.com`.
- The current site is served by Google Frontend.
- DNS points the root domain at Google IPs, and `www.build42.com` points to `ghs.googlehosted.com`.
- The live page appears to be a Google AI Studio-style React/Vite app bundled into the HTML.
- A static Cloudflare Pages migration should be feasible.

First local static version added:

- `index.html`
- `src/content.js`
- `src/main.js`
- `assets/css/styles.css`
- `public/images/favicon.svg`

Next action: preview the local version, adjust copy/design, then move it into a work-owned GitHub repository connected to Cloudflare Pages.
