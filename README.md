# YEP@Brown — Young Entrepreneurs Program Website

A web platform for YEP@Brown, a free entrepreneurship incubator for local high school students, led by Brown University students. Built with Next.js and TypeScript to support student applications, a marketplace for student-run businesses, and community engagement.

> ⚠️ This repository represents the local development build of the site. It has not yet been deployed to the live YEP@Brown domain.

<img width="1246" height="632" alt="5356ACD1-365A-47E8-AFD1-27081D15EC7D_1_105_c" src="https://github.com/user-attachments/assets/be00c4af-146b-4dcd-9384-86e72e5c7d7f" />


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
- 🧩 **Component-Based Architecture** — Reusable UI components shared across pages, reducing duplicated code and easing future updates
- 🖱️ **Interactive Navigation** — Smooth page-to-page navigation with hover-triggered shadow and motion effects
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

## 🧗 Challenges & What I Learned

Requirements from program stakeholders shifted frequently throughout development, while teammates worked in parallel on separate sections of the site. This made it easy for work to fall out of sync if changes weren't communicated clearly.

To manage this, I focused on:
- **Designing components to be flexible by default** — building layouts and UI elements that could absorb late-stage changes (new copy, new sections, reordered content) without requiring a rewrite
- **Tight communication loops** — frequent check-ins with both stakeholders and teammates to catch scope changes early, before they caused conflicting work
- **Prioritizing clarity over speed** — slowing down to confirm requirements before building, which reduced rework later in the project

This experience reinforced that resilient frontend architecture isn't just about clean code — it's about anticipating change and designing for it from the start.

## 🤝 My Contributions

- Built reusable, responsive page layouts (Home, About, Apply, Contact) using Next.js's component-based architecture, reducing duplicated UI code across the site
- Designed custom UI containers ("bubble" boxes) and a color-coded visual system in partnership with the design team, establishing a consistent design language across the platform
- Implemented client-side navigation with hover-triggered shadow and motion effects to improve page-to-page UX
- Adapted layouts and components throughout development to accommodate frequently changing stakeholder requirements, without major rework

## 👥 Team

Built by a team of 4–6 Brown University students as part of the FullStack@Brown program.
