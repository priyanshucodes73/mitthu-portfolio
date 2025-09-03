# Mitthu's Portfolio (Animated, Josh‑style)

An original, playful portfolio inspired by micro‑interactions — built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Animated gradient hero
- Delightful hover effects (Framer Motion)
- Dark / Light mode (next-themes)
- Sections: Home, Projects, About, Blog
- Clean components, ready to extend with MDX/blog

## 🚀 Getting Started

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build && npm start
```

Open mitthu.me in your browser.

## 🛠 Tech

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- next-themes

## 📦 Deploy

- **Vercel** (recommended): import this repo → deploy.
- **GitHub Pages** (static): set `images.unoptimized = true` (already set), then `next export` via a custom script if needed.
- **Netlify**: build command `next build` and `next start` (or use Next on Netlify plugin).

## 🔧 Customize

- Edit colors in `tailwind.config.js > theme.extend.colors.brand`
- Update copy on pages in `/app`
- Replace `/public/avatar.png` with your photo/logo
- Add your projects in `ProjectCard` instances

## 🧑‍⚖️ Notes

This is _inspired by_ Josh Comeau’s playful style, but built from scratch and not a clone.
