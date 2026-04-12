# Chris Schmidt — Portfolio

**Machine Learning Engineer | JHU AI Engineering (MSE)**

Personal portfolio site built with [Astro](https://astro.build/). Hosted on GitHub Pages at [pcschmidt.github.io](https://pcschmidt.github.io).

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The dev server supports hot module replacement — changes are reflected immediately.

### Build for production

```bash
npm run build
```

Built files are output to `dist/`.

### Preview production build locally

```bash
npm run preview
```

---

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: build & deploy to Pages
├── public/
│   ├── images/
│   │   └── MyImage.jpg       # Headshot
│   └── resume/
│       └── ChrisSchmidt_Resume.pdf
├── src/
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro      # Shared page layout + nav/footer
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── projects.astro    # Projects (case studies)
│   │   └── resume.astro      # Resume + PDF embed
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Deployment

This site deploys automatically to GitHub Pages via **GitHub Actions** on every push to `master`.

The workflow (`.github/workflows/deploy.yml`):
1. Installs dependencies
2. Builds the Astro site (`npm run build`)
3. Deploys the `dist/` output via the GitHub Pages deployment action

### First-time setup (GitHub Pages configuration)

1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Source**, select **GitHub Actions**.
3. Push to `master` — the site will build and deploy automatically.

---

## Customization

### Updating projects

Edit `src/pages/projects.astro` and the `projects` array in `src/pages/index.astro`. Each project entry contains:

```ts
{
  title: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  status: 'featured' | 'in-progress' | 'placeholder';
  metrics: string[];
  github?: string;   // optional GitHub link
  demo?: string;     // optional demo link
  paper?: string;    // optional paper/report link
}
```

### Updating social links

In `src/pages/index.astro`, find the `.hero-social` section and update the `href` values for GitHub, LinkedIn, and email.

### Updating the resume

Replace `public/resume/ChrisSchmidt_Resume.pdf` with an updated version. The path is referenced automatically by the Resume page.

### Updating the headshot

Replace `public/images/MyImage.jpg` with an updated photo.

---

## Legacy site

The original Jekyll-based portfolio is preserved on the `legacy` branch for reference.
