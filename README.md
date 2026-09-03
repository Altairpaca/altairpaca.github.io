# Zhenzhuo (Altair) Li — Academic & Research Homepage

Canonical academic homepage for Zhenzhuo (Altair) Li (李臻卓), BSc candidate in Data Science and Big Data Technology at HKUST(GZ).

## Role of this site

This repository is the **application-oriented academic / research identity surface**: a visual CV for prospective PhD supervisors, research collaborators, and research-oriented employers. Its first job is to make the research trajectory and future direction legible before a reader opens the PDF CV.

The public hierarchy is:

1. research identity and current positioning;
2. methodological research focus;
3. forward research / career direction;
4. selected research and publication evidence;
5. research / internship experience;
6. education and distinctions;
7. one compact bridge to engineering / open-source evidence.

The GitHub profile repository [`Altairpaca/Altairpaca`](https://github.com/Altairpaca/Altairpaca) has a different job: it is the **engineering / open-source identity surface**, emphasizing maintained projects, upstream contributions, technical invariants, review outcomes, and active OSS work. The two surfaces cross-link, but should not become duplicate CVs or duplicate OSS profiles.

## Design principles

- **Research before repositories**: organize the homepage around research questions, trajectory, and evidence rather than project inventory.
- **Visual-CV density**: use a compact portrait hero, left-rail section labels, chronological experience, and publication-style research rows.
- **Research visuals carry meaning**: diagrams and thumbnails support research interpretation rather than act as decorative product cards.
- **Restrained academic palette**: warm neutral canvas, ink typography, deep blue and muted sage accents, minimal motion.
- **No badge wall / stats cards**: social proof comes from publications, research experience, distinctions, and verifiable outcomes.

## Structure

```text
site/
├── index.html       # semantic application-oriented academic homepage
├── styles.css       # responsive visual-CV system
├── assets/
│   ├── avatar.jpg
│   └── resume.pdf
├── docs/
├── scripts/
└── README.md
```

The page keeps its substantive text in the document body for search / AI-crawler accessibility and includes meta description, Open Graph, Twitter Card, and Schema.org identity metadata.

## Deployment

Push to `altairpaca.github.io` → GitHub Pages auto-deploys.

CV updates go through `scripts/deploy.sh`. It compiles the PDF from the CV source, syncs it into `assets/resume.pdf`, then commits and pushes the change.

### `scripts/deploy.sh`

Requires `xelatex` on `PATH`.

- `scripts/deploy.sh --dry-run`: print planned steps without changing files.
- `scripts/deploy.sh <note>`: compile, sync the PDF, commit, and push.

Pipeline:

1. **compile** — run `xelatex` twice in a fresh temporary directory;
2. **copy** — update `assets/resume.pdf` only after a successful build;
3. **commit** — commit the CV artifact with an explicit note;
4. **push** — publish to `main`.

## SEO & search

Live endpoints include `robots.txt` and `sitemap.xml`. Google Search Console / Bing Webmaster Tools setup remains an account-level user action documented under `docs/`.

## Maintenance rules

- Keep research focus broad enough to express transferable methodological questions rather than locking the profile to one application or supervisor.
- Keep academic facts, publication status, and CV-level claims conservative and verifiable.
- Keep detailed PR / issue engineering narratives on the GitHub profile or the relevant project repository.
- Open source belongs here only when it materially supports research capability or reproducibility.
- Do not edit `assets/resume.pdf` manually; use the deployment script.

## License

MIT