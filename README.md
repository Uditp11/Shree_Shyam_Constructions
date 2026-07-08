# Shree Shyam Constructions Website

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://shree-shyam-constructions.vercel.app/)

A premium, modern corporate landing page and client lead-capture web application designed and built for **Shree Shyam Constructions** (a premier contracting business specializing in commercial, industrial, and residential epoxy flooring & waterproofing services).

**Live Demo:** [shree-shyam-constructions.vercel.app](https://shree-shyam-constructions.vercel.app/)

---

## ✨ Features

- **🌐 Client-Side Localization (i18n):** Complete English & Hindi bilingual translation support distributed seamlessly using the React Context API.
- **⚡ Modern Responsive UI:** Crafted with Tailwind CSS v4, dynamic layouts, grid-based background designs, and elegant hover state responses.
- **🎨 Visual Fluidity:** Integrated Framer Motion animations triggering viewport entry transitions (`fadeUp`, `fadeLeft`, `fadeRight`, `scaleUp`), a sleek page preloader/loader, and a custom scroll-progress indicator.
- **📩 Serverless Lead Capture:** Fully functional, interactive quote request form integrated directly with the client's Gmail box via `emailjs-com` without needing a dedicated backend server.
- **🎯 Specialized Showcase Sections:**
  - **Services Grid:** Detailed, interactive cards for Industrial, Decorative, Flake, Digital Paper, Italian, Metallic, 3D Epoxy Floorings, and general Waterproofing.
  - **Training Academy Masterclass:** Visual highlight of the "Learn & Earn" vocational program showing point-by-point details.
  - **Interactive Gallery & Map:** Filterable project showcase and grayscale styled Google Maps location embed.
  - **WhatsApp Chat API:** Quick-access floating action button pointing straight to the business communication channel.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.2 (App Router) & React 19.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS, React Icons
- **Animation:** Framer Motion
- **Integration:** EmailJS, Google Maps API, WhatsApp Link API
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Uditp11/Shree_Shyam_Constructions.git
   cd Shree_Shyam_Constructions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and populate it with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

Generate the optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

---

## 📁 Repository Structure

```
├── public/                 # Static assets (images, logos, favicon)
│   └── pictures/           # High-definition flooring showcases
├── src/
│   ├── app/                # Next.js App Router (layout, global styles, pages)
│   ├── components/         # Reusable React components (Navbar, Hero, Services, Contact, etc.)
│   └── i18n/               # Translation dictionary configuration and React Context
│       ├── en.json         # English translations
│       ├── hi.json         # Hindi translations
│       └── LanguageContext.tsx
├── postcss.config.mjs
├── tailwind.config.js      # CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## ✉️ Lead Dispatch (EmailJS) Setup

This project uses EmailJS for sending user inquiries straight to Gmail. To set it up:
1. Register on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service pointing to Gmail.
3. Create an Email Template matching the form inputs (`from_name`, `phone`, `reply_to`, `message`).
4. Paste the generated IDs into your `.env.local` file.

---

## ⚖️ License

Distributed under the MIT License. Developed for Shree Shyam Constructions by [Udit Parihar](mailto:uditparihar11@gmail.com).
