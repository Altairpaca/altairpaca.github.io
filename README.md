# Altair Li — Academic & Research Homepage

Canonical academic homepage for Zhenzhuo (Altair) Li (李臻卓), BSc candidate in Data Science and Big Data Technology at HKUST(GZ).

## Role of this site

This repository is the **academic / research identity surface**. It is the canonical public place for:

- research agenda and current academic direction;
- publications and manuscripts;
- research / internship experience;
- education, awards, and CV-level biography;
- links to the current academic CV and Google Scholar.

The GitHub profile repository [`Altairpaca/Altairpaca`](https://github.com/Altairpaca/Altairpaca) has a different job: it is the **engineering / open-source identity surface**, emphasizing maintained projects, upstream contributions, technical invariants, review outcomes, and active OSS work. The two surfaces may cross-link selected evidence, but they should not become duplicate CVs.

## Design

- **Style**: original academic design — warm paper background, deep-green accent, serif display type with compact technical details.
- **Content hierarchy**: research identity first; selected open-source work appears only as research-engineering evidence.
- **Public source of truth**: this site for CV-level academic facts; GitHub profile README for OSS/engineering presentation.

## Structure

```text
site/
├── index.html       # Self-contained academic page: inline CSS + minimal JS
├── assets/
│   ├── avatar.jpg
│   └── resume.pdf
├── docs/
├── scripts/
└── README.md
```

The page is static HTML with content in the document body for search/AI-crawler accessibility, plus meta description, Open Graph, Twitter Card, and Schema.org metadata.

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

- Keep academic facts, publication status, and CV-level claims conservative and verifiable.
- Keep detailed PR/issue engineering narratives on the GitHub profile or the relevant project repository; the academic site should cite only selected outcomes that materially support the research identity.
- Do not edit `assets/resume.pdf` manually; use the deployment script.

## License

MIT
