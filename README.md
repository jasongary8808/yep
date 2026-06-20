# YEP@Brown — Young Entrepreneurs Program Website

A web platform built for the Young Entrepreneurs Program (YEP), a free entrepreneurship incubator for local high school students, led by Brown University students. The site introduces the program to prospective students, partner schools, and the broader community.

> **Note:** This repository represents the local development build of the site. It has not yet been deployed to the live YEP@Brown domain.

## Features

- **Marketplace** — An online storefront highlighting and supporting student-run businesses
- **Program Pages** — Dedicated pages for Home, About, Team, Programs, FAQ, and Apply
- **Applications** — Support for student and program leadership applications
- **Contact & Mailing List** — Contact forms and mailing list signup for community engagement
- **Responsive UI** — Custom page layouts, color-coded sections, and interactive hover/motion effects across the site

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **UI:** React, component-based architecture
- **Styling:** Custom CSS (`globals.css`)

## Project Structure

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

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. Pages auto-update as you edit files in `app/`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically load and optimize [Geist](https://vercel.com/font), Vercel's font family.

## My Contributions

- Built and styled core pages, including Home, About, Apply, and Contact
- Designed page layouts and custom UI containers, including bubble-style content boxes
- Collaborated with the design team to implement a color-coded visual system across pages
- Implemented client-side navigation between pages and interactive hover effects (shadows, motion transitions) to improve UX

## Team

Built by a team of 4–6 Brown University students as part of the YEP@Brown program.

## Learn More

To learn more about the underlying framework, check out the [Next.js Documentation](https://nextjs.org/docs).
