# Sanbiome website

Static site, zero dependencies. `node build.mjs` writes `dist/`.

- Copy: `content.mjs` (programs, FAQs, blog, policies)
- Business details, booking links, fees, testimonials: `site.config.mjs`
- Look: `assets/style.css`

Local: `npm run build && npm start`

## Deploy on Render
1. Push this folder to a Git repo.
2. Render > New > Blueprint > pick the repo (reads `render.yaml`), or New > Static Site with build `node build.mjs`, publish dir `dist`.
3. Set env vars: `SITE_URL` (live URL), optional `ANALYTICS_DOMAIN`.

## Before launch (unset = hidden or inert, never faked)
- [ ] `bookingLinks.free`: set to the Calendly link. If emptied, buttons go to the Contact page.
- [ ] Email, WhatsApp, Instagram, LinkedIn in `site.config.mjs` (footer shows only those set).
- [ ] Program frequency, response time, fees (`programDetails`). Only shown when filled.
- [ ] Testimonials: add only real ones with permission.
- [ ] Review and approve the sample article and the four policy pages (`content.mjs`); refund terms especially are generic.
- [ ] Confirm the founder photo is a real photo of Manisha.
- [ ] Custom domain, then update `SITE_URL`.
