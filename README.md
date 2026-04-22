# Pamoja Nigeria — 2025 Opinion Poll

A regionally representative survey of 1,200 adults across Southwest Nigeria on abortion knowledge, attitudes, stigma, media habits, and the strategic Persuadable Middle audience.

## Repository structure

```
.
├── index.html                                  # The main page
├── styles.css                                  # All visual styles, brand tokens
├── script.js                                   # Mobile menu, scroll reveal, Chart.js renders
├── assets/
│   └── favicon.svg                             # Pamoja brand favicon
├── Pamoja_Nigeria_Opinion_Poll_2025_Brief.pdf  # Downloadable brief (linked from site)
└── README.md
```

Keep all files in the same directory when deploying. The download button on the site links to the PDF by relative path.

## How to host on GitHub Pages

1. Push the contents of this folder (or the whole folder) to a GitHub repo.
2. In the repo settings, go to **Pages**.
3. Set the source to **Deploy from a branch** → `main` → `/ (root)`.
4. Wait ~1 minute. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

If you only see a blank page, hard-refresh (Cmd/Ctrl + Shift + R). The first deploy can take a couple of minutes to propagate.

## How to preview locally

The site uses CDN-hosted libraries (Google Fonts and Chart.js), so just opening `index.html` directly in a browser works — no build step needed. If charts don't render in `file://`, run a tiny local server:

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## How to update the content

The site is built with three editable files:

- **`index.html`** — All the copy. Search for the section you want to change.
- **`script.js`** — All the chart data. Look for the dataset arrays (`data: [...]`) inside each `new Chart(...)` block.
- **`styles.css`** — All visual styling. Brand colors live as CSS variables at the top:
  ```css
  --purple: #49267a;
  --pink: #e62b67;
  --yellow: #f8c501;
  ```
  Change them once and they propagate everywhere.

## What's on the site

- **Hero** — Title and key methodology meta (sample size, scope, method, fieldwork).
- **Four key numbers** — TLDR of the most important findings.
- **Why this study matters** — Global, regional, and Nigeria-specific context.
- **Methodology** — How the data was collected.
- **Knowledge gaps** — What people get wrong about Nigerian abortion law (interactive chart).
- **Attitudes** — Where the public actually sits on legalization (interactive chart).
- **Persuadable Middle** — Conceptual explanation, custom Spectrum-of-Allies SVG schema, the three criteria used to define a Persuadable in this dataset, the segment's profile, and a state-by-state ranking.
- **Media habits** — Two interactive charts on platforms and content formats.
- **Six strategic recommendations** — Each one anchored in a specific finding.
- **Download** — Single CTA for the PDF brief.

## Methodology

- **Sample:** 1,200 adults, aged 18–65, six Southwest Nigerian states (Lagos, Ogun, Oyo, Ondo, Osun, Ekiti).
- **Method:** Stratified multistage probability sampling, door-to-door CAPI (Computer-Assisted Personal Interviews) in English or Yoruba.
- **Fieldwork:** May 28 – June 13, 2025.
- **Response rate:** 94%.
- **Survey instrument:** 69 items including the validated Ipas SABAS (Stigmatizing Attitudes, Beliefs and Actions Scale) sub-scales.
- **Data collection:** Edge Research Services (Nigeria).
- **Statistical analysis:** Media Impact Project, USC Annenberg / Norman Lear Center.

## On the "Persuadable Middle"

The concept comes from advocacy and behaviour-change literature, notably George Lakey's **Spectrum of Allies** model and Anat Shenker-Osorio's framework ("fire up the base, persuade the persuadables, alienate the opposition"). The site includes a custom SVG schema explaining where the Persuadable Middle sits in the spectrum and why it's the strategic priority for Pamoja's communication work in Nigeria.

## Project

Pamoja is a regional, collaborative initiative working in nine sub-Saharan African countries on four pillars: self-managed abortion support, advocacy, strategic litigation, and strategic communication. RAES leads the strategic communication pillar.

> Civil Society Organisations Together to Make Abortion Safe in Africa.

## Citation

Findings may be cited with attribution: *RAES / Pamoja, 2025 Opinion Poll on Abortion in Southwest Nigeria.*
