# Chris Schmidt — Portfolio

A modern, minimal portfolio site built with [Astro](https://astro.build), showcasing ML/AI engineering work.

**Live site:** https://pcschmidt.github.io/

> **Tagline:** Machine Learning Engineer | JHU AI Engineering (MSE)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v4 (static output) |
| Styling | Scoped CSS + global variables |
| Deployment | GitHub Actions → GitHub Pages |
| Content | Astro component files (`src/pages/`, `src/components/`) |

---

## Local Development

### Prerequisites

- Node.js ≥ 18 (tested on v20)
- npm ≥ 9

### Setup

```bash
git clone https://github.com/PCSchmidt/PCSchmidt.github.io.git
cd PCSchmidt.github.io
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

### Build

```bash
npm run build       # outputs to ./dist
npm run preview     # serve the built site locally
```

---

## Site Structure

```
src/
  layouts/
    Layout.astro        # Base HTML shell (Header + Footer)
  components/
    Header.astro        # Sticky nav
    Footer.astro        # Footer with social links
    ProjectCard.astro   # Reusable project case-study card
  pages/
    index.astro         # Home — hero, bio, skills, featured projects
    projects.astro      # Full projects listing (case-study format)
    resume.astro        # Résumé page with PDF download button
  styles/
    global.css          # CSS custom properties + base reset

public/
  images/
    MyImage.jpg         # Headshot
  resume/
    ChrisSchmidt_Resume.pdf   ← ADD YOUR RESUME HERE (see below)
    README.txt          # Instructions
  favicon.svg
```

---

## ⚠️ Action Required: Add Resume PDF

The resume page links to `/resume/ChrisSchmidt_Resume.pdf`.
**This file is not yet in the repository.**

To add it:

1. Copy your resume PDF from:
   `C:\Users\pchri\Documents\ChrisStuff\ChrisSchmidt_Resume.pdf`

2. Place it at:
   `public/resume/ChrisSchmidt_Resume.pdf`

3. Commit and push:
   ```bash
   git add public/resume/ChrisSchmidt_Resume.pdf
   git commit -m "add resume PDF"
   git push
   ```

The download and "View in Browser" buttons on `/resume` will then work automatically.

---

## Customization Guide

### Update social/contact links

- **Email:** Search for `placeholder@example.com` in `src/pages/index.astro` and `src/components/Footer.astro` and replace with your actual email.
- **LinkedIn:** Already set to your LinkedIn URL in `Header.astro` and `Footer.astro`. Update if needed.
- **GitHub:** Already set to `https://github.com/PCSchmidt`.

### Update project content

All project data is in `src/pages/projects.astro` and `src/pages/index.astro` (featured projects array).
Each project has:

```ts
{
  title: string;
  problem: string;       // One sentence: what problem was solved
  approach: string;      // What you built and how
  impact: string;        // Measurable outcomes or skills demonstrated
  stack: string[];       // Tech tags
  repoUrl?: string;      // GitHub repo link
  demoUrl?: string;      // Live demo link
  paperUrl?: string;     // Write-up or paper link
  badge?: string;        // Category label (e.g. "RAG / LLM")
  featured?: boolean;    // Show highlighted border
}
```

### Update bio/experience on Resume page

Open `src/pages/resume.astro` and replace the placeholder comments in the Experience and Education sections with your actual content.

---

## Deployment

The site deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

### First-time setup

1. In your GitHub repository: go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically.

---

## Legacy Site

The original Jekyll-based site is preserved in the **`legacy`** branch.
To create/view it: `git checkout legacy` (or browse it on GitHub).

---

## License

© Chris Schmidt. All rights reserved.
