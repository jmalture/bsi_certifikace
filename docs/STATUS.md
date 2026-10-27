# Status

Front page (Czech only) built: hero with live isometric BIM scene and ribbon waves, credentials, Proč s námi (scroll-lit words), lecturers, certification path, student discount (count-up), contact.
Registrace / Přihlášení point to the live bsicertifikace.cz pages.

## New copy (needs client approval)

- Chips "IFC", "openBIM", "bSI" in the hero scene; credentials strip labels (derived from the "Proč s námi?" text); "Cesta k certifikátu" steps Školení / Zkouška / Certifikát bSI; stat captions "den intenzivního kurzu", "předepsaných tematických bloků"; meta title/description; "Design-náhled" none.

## Open

- Portraits are only 169x226 px on the live site: request originals.
- Footer: the original's third icon links to LinkedIn (no YouTube).
- The dated terms are not in the front page HTML (badge links to /registrace/).
- Next: di5-tech.cz front page (keep its 3D models).

## Round 2 (feedback)
- "Proč s námi": pinned horizontal scroll of morphing bubbles with drawn line and progress counter (scroll-snap rail below 901px).
- Bubbles (`ui/Bubbles.astro`) across sections, like the original site.
- Lecturer portraits upscaled 4x with Magnific (`ultra-sublime`), 338 and 676 px webp.
- Školení → Zkouška → Certifikát: dark "journey" band with orbs, ripples and a travelling glow.
- Hero background: live canvas ribbon (`ui/Ribbon.astro`), a remake of vlny-1.svg; pauses off screen, static under reduced motion.
