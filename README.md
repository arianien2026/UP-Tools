# UP Tools Website v1

A small, bilingual static site for the UP Family. No backend, account system, checkout, analytics, or cookies.

## Preview and build

Open `index.html` directly in a browser, or run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000/`. Run `npm run build` to create `dist/`, which can later be published on GitHub Pages after review.

## Official links to supply

The three Try buttons are intentionally disabled until the official public URLs are confirmed:

- `ENTUBE_UP_URL`
- `ENSAY_UP_URL`
- `ENSOUND_UP_URL`

To activate a link, replace the relevant `<button class="action pending" ...>` in `index.html` with `<a class="action" href="VERIFIED_URL">...</a>`, remove its pending note, and rebuild. Keep EnSwap UP as a preview.

The Privacy Policy, Terms of Service, and Refund Policy are implementation drafts. Review their public wording at launch before publishing. The future NewebPay purchase flow and entitlement system are outside this site.
