# CLAUDE.md · Casa Brigantè Website

This file governs all work on this repository. Claude Code reads it automatically. Follow it without being asked.

## What this is
The public website of Casa Brigantè, the public home of The Commencement, founded by Aries Brigantè. Under the umbrella: books (Excelsa Cornua Rights Group), music (The Commencement Music: VANTA, Moon Realm, Solana Reyes), audio drama (Ascendant Soundworks), and apparel (HAWS). More divisions exist and may be added. Static site: HTML, CSS, vanilla JS. No frameworks, no build step. Preview with Live Server.

## The voice (constitutional, from the Editorial Style Guide v1.0)
The brand is a collision: institutional restraint on the outside, raw street-noir catalog on the inside. The design stays quiet; only the words carry menace. Never write marketing.

Hard rules for ALL text in this repo (copy, alt text, meta tags, commit messages for user-facing strings):
- NO EM DASHES. Ever. Use a comma, a period, or an ellipsis. This is the founder's non-negotiable house rule across all his projects.
- Curly (typographic) quotes and apostrophes in all visible copy.
- Oxford comma always.
- Sentence case for headlines, subheads, nav, buttons, labels. Headlines end in a period.
- No exclamation points anywhere, including error messages.
- Dates as day month year: 12 March 2026. Founding year in Roman numerals: EST. MMXXVI.
- Titles of works in italics (October's Change, Bury Me in Tucson, Pimp Chronicles).

BANNED WORDS (never use in site copy, in any form): creative, creativity, creator, craftsmanship, innovative, immersive, world-building, ecosystem, community, platform, passion, meaningful, experience(s), elevate, transform, empower, visionary, journey, discover, unlock, inspire, authentic, storytelling, storyteller, hustle, grind, curated, bespoke, iconic, exclusive, limited time, don't miss. Also banned: any urgency or scarcity language, "Shop Now," "Learn More," "Subscribe," "Sign Up," "Join," "click here."

Approved button/link lexicon: Take a copy · Read on · Hear it · Listen in · See the catalog · The full catalog · Leave your address · Back to the entryway · Come in · Enter · Continue.

The house metaphor is seasoning, not the meal: it appears ONLY in the footer line ("The public home of The Commencement") and on the 404 page. Do not add more house-themed copy without the founder's sign-off.

## Design laws
- Tokens live at the top of styles.css. Never introduce new colors, fonts, or spacing values; use the variables.
- Fonts: Cormorant Garamond (display), EB Garamond (body prose), Inter (nav, eyebrows, buttons, forms only).
- Dark only: onyx background, ivory text, gold accents. No light mode.
- No new visual patterns on any page without updating this file first (Lockbook rule: refinement, not redesign).
- Photography: roughly 80% documentary, 20% campaign. Photography documents the work; it never advertises it.
- Motion: reveal-on-scroll only, respect prefers-reduced-motion, nothing bouncy.
- Accessibility is non-negotiable: skip link, aria labels, focus-visible states, alt text on every image.

## Phase 1 Direction Lock (founder-ratified, supersedes earlier decisions where noted)
- Navigation locked: Home, Books, Music, Audio Dramas, HAWS, Chronicle, About, Correspondence. Shop is REMOVED as a concept; all merchandise lives under HAWS. Plug & Play Streaming is a standalone page linked from the footer only.
- Homepage section order locked: Hero, Featured Release, Books, Music, Audio Dramas, HAWS, Chronicle, About, Newsletter, Footer.
- Hero: pure black, no photography, CB crest watermark at ~4% opacity. Eyebrow line removed from hero.
- Hero headline status: EXPLORATION, not final. Current: "Some work is made for the moment. Some is made forever." Founder is still refining; do not treat as locked.
- No dedicated founder page; the founder is represented in About and through the books. founder.html redirects to about.html.
- Renames: studio.html→audio-dramas.html, journal.html→chronicle.html (Chronicle is a WORKING TITLE), shop.html→haws.html. Old URLs are redirect stubs; keep them.
- Background entities (The Commencement, Excelsa Cornua, Ascendant Soundworks, Nino & Russia Brown Creative Studio, La Finca Management, TFG Publications, TaxxFree Enterprises) are presented only in About as supporting structure.
- SPELLING FLAG: founder's documents write "Ascendant Soundworks"; the logo artwork reads "ASCENDENT". Site text uses Ascendant per the founder's doc. Founder should rule and correct the artwork or the text.

## Discretion rule (important)
The homepage names the work, never the corporate structure. Operating entity names (Excelsa Cornua, The Commencement Music, Ascendant Soundworks) appear only on subpages and legal text, not on the homepage. Unreleased work is never advertised as "forthcoming" or "coming soon"; it simply appears when it is ready. The phrase "work not yet announced" in the About section is the only permitted gesture at future projects.

## Content rules
- The hero represents the institution. It NEVER features or sells a specific release.
- Featured section ("The newest title") rotates releases without redesign.
- The catalog section lists every published title, in publication order, permanently. Nothing is ever removed.
- Never invent plot details, character names, dates, or facts about the founder's books, music, or dramas. If a fact is needed and unknown, leave a clearly marked TODO and ask.
- New creative decisions (characters, backstory, brand claims) require the founder's explicit sign-off before writing.

## Amazon link mapping (UNVERIFIED, founder must confirm)
Links were provided in this order and wired to the catalog in publication order. If the founder reports a mismatch, swap accordingly:
- October's Change → B0FRF69VDR
- When Love Was Enough → B0FHGJVSLS
- A Song She Wrote → B0FGX9TLYT
- Loyal 2 the Lie → B0FJ6RBG7N

## Pending (ask the founder, do not guess)
- eBay counter is LIVE: https://www.ebay.com/usr/thecommencementllc (wired on shop.html).
- Founding year RULED by founder: MMXXVI (2026) is canon. The brand board artwork showing EST. MMXII is incorrect and needs regeneration before any print use.
- Official Amazon blurbs are SET on all four live book pages (founder-supplied, kept verbatim per his voice rule; author blurbs are the work, not institutional copy, so the banned-word list does not apply inside them). The novel A Song She Wrote does not reveal Solana's incarceration in its blurb; never mention it in book-page copy, only on her artist page where it is public mythology.
- All nine marks now extracted from brand boards with transparency and placed: CB (header/footer), HAWS (homepage apparel tile), ASW (studio.html), ECRG (books.html colophon), VANTA gothic + MOONREALM + Solana (artist pages). Two VANTA identities exist (Modern purple vs Gothic silver); Gothic is placed pending founder ruling. True SVG exports still wanted for print.
- Bury Me in Tucson is not yet live on KDP (blocked on cover). Its links activate at publication; do not label it forthcoming on the site.
- Casa Brigantè crest/wordmark integration (currently a CB monogram placeholder).
- Studio division image is a placeholder (moonrealm.jpg); replace with Pimp Chronicles cover art when ready.
- Music/Audio/Apparel/Journal subpages do not exist yet; homepage links are stubs (#).
- HAWS card uses a typographic tile; replace with Groundwork collection photography when it exists.

## Working style
The founder directs; Claude executes and flags options rather than deciding unilaterally on brand or creative matters. Words first, code second. Protect execution momentum: prefer shipping a small correct change over expanding scope.
