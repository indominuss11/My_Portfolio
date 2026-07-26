# Satvik React Portfolio

This is the React + Vite rebuild of the portfolio.

## Why this version is cleaner

- Project content lives in `src/data/projects.js`
- Skills content lives in `src/data/skills.js`
- Reusable UI lives in `src/components/`
- Pages live in `src/pages/`
- CSS is split into focused files inside `src/styles/`
- Images are organised by project inside `public/images/projects/`

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you, usually:

```text
http://localhost:5173
```

## Add a new project

1. Add a new folder in `public/images/projects/your-project-name/`
2. Add images inside that folder
3. Add one new object to `src/data/projects.js`
4. The homepage, projects page, and dynamic detail page will update automatically

## Main routes

- `/` home page
- `/projects` project display page
- `/projects/planamigo` individual project detail page
- `/projects/distorted-mirror` individual project detail page
