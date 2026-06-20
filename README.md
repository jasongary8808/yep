# YEP@Brown — Young Entrepreneurs Program Website

A web platform for YEP@Brown, a free entrepreneurship incubator for local high school students, led by Brown University students. Built with Next.js and TypeScript to support student applications, a marketplace for student-run businesses, and community engagement.

> ⚠️ This repository represents the local development build of the site. It has not yet been deployed to the live YEP@Brown domain.

<img width="1246" height="632" alt="5356ACD1-365A-47E8-AFD1-27081D15EC7D_1_105_c" src="https://github.com/user-attachments/assets/14d18abc-c541-46f6-9d62-be99f1cb5743" />

## 🎯 What It Does

YEP@Brown's site connects prospective students, partner schools, and the community with the program through a set of purpose-built pages:

1. 🏠 **Homepage** — Introduces the program and its mission
2. ℹ️ **About** — Program background and goals
3. 🛍️ **Marketplace** — Showcases and supports student-run businesses
4. 📝 **Apply** — Application flow for students and program leaders
5. 👥 **Team** — Directory of directors, mentors, and staff
6. ❓ **FAQ** — Common questions for prospective applicants
7. ✉️ **Contact** — Contact form and mailing list signup

## 📁 Project Structure

```
app/
├── about/        # About page
├── api/          # API routes
├── apply/        # Application forms
├── components/   # Shared, reusable UI components
├── contact/      # Contact form
├── data/         # Static data/content
├── faq/          # FAQ page
├── lib/          # Utility functions and helpers
├── marketplace/  # Student marketplace
├── team/         # Team directory pages
├── layout.tsx    # Root layout
├── page.tsx      # Home page
└── globals.css   # Global styles
public/           # Static assets (images, icons)
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` in your browser to view the site. Pages auto-update as you edit files in `app/`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically load and optimize [Geist](https://vercel.com/font), Vercel's font family.

## ✨ Features

- 🎨 **Custom Visual System** — Color-coded sections designed in collaboration with the design team for visual consistency
- 🧩 **Component-Based Architecture** — Reusable UI components across pages for consistent layout and easier maintenance
- 🖱️ **Interactive Navigation** — Smooth page-to-page navigation with hover effects and motion transitions
- 🛍️ **Marketplace Pages** — Dedicated layout for highlighting student-run businesses
- 📝 **Application Flow** — Pages supporting student and program leadership applications
- 📱 **Responsive Layout** — Custom containers and spacing tuned for different screen sizes

## 🏗️ Architecture

**Framework & Language**
- Next.js (App Router)
- TypeScript
- React

**Styling**
- Custom CSS (`globals.css`)

**Structure**
- Component-based architecture for shared UI elements across pages

## 🤝 My Contributions

- Built and styled core pages, including Home, About, Apply, and Contact
- Designed page layouts and custom UI containers, including bubble-style content boxes
- Collaborated with the design team to implement a color-coded visual system across pages
- Implemented client-side navigation and hover-based motion effects (shadows, transitions) to improve UX

## 👥 Team

Built by a team of 4–6 Brown University students as part of the FullStack@Brown team.
