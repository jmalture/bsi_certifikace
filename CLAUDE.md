# CLAUDE.md: bsi_certifikace

Pitch redesign of the bsicertifikace.cz front page by Alture, same architecture as BLL_website (Astro 7, static + @astrojs/node, inlined CSS, self-hosted fonts, no CMS). Czech only.
Commands: `npm install`, `npm run dev`, `npm run build` (must pass before push), `npm start`, `npm run format`.
Hostinger: framework Astro, build `npm run build`, output `dist`, entry `server/entry.mjs`, Node 22. Do not switch to `output: 'server'`.
Structure: `src/components/home/NN-name.astro` sections, `src/i18n/*.json` texts, `src/styles/site.css` tokens, `src/scripts/site.ts` behaviour, `public/media` webp portraits.
Gotchas: see the BLL_website CLAUDE.md (clip-path reveals, `overflow: clip` for sticky, SMIL pausing). Playwright: `executablePath: '/opt/pw-browsers/chromium'`; check mobile `scrollWidth === 390`.
Read `docs/BRAND.md`, `docs/STATUS.md`.
