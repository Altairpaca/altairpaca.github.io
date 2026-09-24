# Zhenzhuo (Altair) Li - Academic & Professional Homepage

Canonical public homepage for Zhenzhuo (Altair) Li (李臻卓), BSc candidate in Data Science and Big Data Technology at HKUST(GZ).

## Role of this site

This repository is the **academic / professional overview surface**. It is designed to make the current profile legible in a few minutes without forcing the reader to infer a career label from scattered repositories.

The public hierarchy is:

1. current quantitative-research positioning;
2. research focus and current market-data work;
3. internship / HPC experience;
4. selected academic research;
5. interviewable systems projects;
6. technical skills;
7. publication, education and distinctions;
8. downloadable CV.

The GitHub profile repository [Altairpaca/Altairpaca](https://github.com/Altairpaca/Altairpaca) complements this site with public engineering and reproducible-research artifacts. It should not be a duplicate CV or a list of every open-source contribution.

## Current narrative

The homepage is intentionally centered on:

- A-share Level-2 / minute quantitative research and market microstructure;
- financial ML with point-in-time, walk-forward and out-of-time evaluation;
- C++ / Rust systems work with correctness and benchmarking;
- CUDA / TensorRT / MPI / Slurm and high-performance computing;
- selected research evidence: LENS, FYP, SpatialReflect and SPY VaR.

Agent-runtime / upstream contribution narratives are intentionally kept out of the main public career framing. The FYP remains a multi-agent financial-forecasting research project because that is the actual academic scope.

## Structure

site/
- index.html - semantic academic / professional homepage
- styles.css - responsive visual-CV system
- assets/avatar.jpg
- assets/resume.pdf - current public English CV
- docs/
- scripts/
- README.md

The page keeps substantive text in the document body for search / AI-crawler accessibility and includes meta description, Open Graph, Twitter Card, and Schema.org identity metadata.

## CV maintenance

assets/resume.pdf is the current public CV baseline and should match the claims on the homepage and GitHub profile.

A legacy local helper exists at scripts/deploy.sh; it points to a machine-local English CV source. **Do not run it unless that local source has first been synchronized to the current resume narrative**, otherwise it can overwrite the public PDF with an older version.

When the CV changes materially, update these together:

1. assets/resume.pdf;
2. index.html;
3. Altairpaca/Altairpaca profile README if the public technical narrative changes;
4. static checks if a section is intentionally renamed or removed.

## SEO & search

Live endpoints include robots.txt and sitemap.xml. Google Search Console / Bing Webmaster Tools setup remains an account-level user action documented under docs/.

## Maintenance rules

- Keep claims conservative, current, and interviewable.
- Distinguish active research from completed results.
- Do not publish employer data, proprietary signals, internal code, credentials or personal financial records.
- Prefer specific evidence (evaluation protocol, benchmark, publication, award, reproducible project) over broad identity labels.
- Keep detailed repository-specific implementation notes inside the relevant repositories.
- Keep assets/resume.pdf, the homepage and GitHub profile aligned after substantive changes.

## License

MIT
