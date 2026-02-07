# Altair Li — Personal Website

[![Live Site](https://img.shields.io/badge/website-live-brightgreen?style=flat&logo=github)](https://altairpaca.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A professional portfolio for **Altair Li** (李臻卓), designed for graduate admissions and FinTech opportunities.

> 🔑 **Dual Identity Strategy**:  
> - **Professional brand**: Altair Li (used on GitHub, LinkedIn, resume)  
> - **Academic continuity**: Research published as **Zhenzhuo Li** (legal name)

This site bridges industry-ready engineering with peer-reviewed research — all under a consistent digital identity.

---

## 🌐 Live Demo

👉 [https://altairpaca.github.io](https://altairpaca.github.io)

---

## 🎯 Key Features

- **Clear naming strategy**: Altair Li as primary identity, with explicit academic attribution
- **Flexible academic status**: Easily update from "Year 3" to "MSc Candidate" via `config.js`
- **Research traceability**: Published projects cite `Zhenzhuo Li et al., Conference, Year`
- **Zero dependencies**: Vanilla HTML/CSS/JS — fast, secure, and future-proof

---

## 📁 Project Structure
altairpaca.github.io/
├── index.html
├── assets/
│ ├── avatar.jpg # Your photo (140×140 recommended)
│ └── resume.pdf # Resume (use "Altair Li" on CV)
├── css/style.css # Modern dark theme
├── js/
│ ├── config.js # ← Edit your info here
│ └── main.js # Rendering logic
├── LICENSE
└── README.md


---

## 🛠️ How to Customize

1. **Update personal info** in [`js/config.js`](js/config.js):
   - `displayName`, `academicName`, `academicStatus`
   - Education, projects, social links
2. **Replace assets**:
   - `assets/avatar.jpg`
   - `assets/resume.pdf`
3. **Deploy**:
   - Repository must be named: `altairpaca.github.io`
   - Push to `main` branch → auto-deploys via GitHub Pages

> 💡 Tip: Set `isPublished: true` and fill `conference`/`year` for academic projects.

---

## 🎨 Design Philosophy

- **Color**: Catppuccin Mocha (deep, refined, low eye strain)
- **Typography**: System fonts for speed and clarity
- **Layout**: Single-column, card-based, mobile-first
- **Performance**: < 50 KB total (excluding images)

---

## 📜 License

MIT License — see [`LICENSE`](LICENSE) for details.

---

> © 2026 Altair Li (Zhenzhuo Li). Crafted for impact in both academia and industry.