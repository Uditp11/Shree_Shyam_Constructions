# Shree Shyam Constructions Website

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://shree-shyam-constructions.vercel.app/)

A landing page and quote request site built for **Shree Shyam Constructions**, a contracting business that does epoxy flooring and waterproofing for industrial, commercial and residential clients. The site is available in English and Hindi.

**Live site:** [shree-shyam-constructions.vercel.app](https://shree-shyam-constructions.vercel.app/)

---

## Features

- **English and Hindi:** A button in the navbar switches the site text between English and Hindi. Translations live in `src/i18n/en.json` and `src/i18n/hi.json` and are served through a React Context.
- **Responsive layout:** Built with Tailwind CSS v4 and works on phone and desktop widths.
- **Animations:** Framer Motion runs entry animations as sections scroll into view (`fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleIn`). There is also a loading screen and a scroll progress bar.
- **Quote request form:** The contact form sends the request by email through EmailJS (`@emailjs/browser`), so the site needs no backend server.
- **Sections:**
  - **Services:** Cards for Industrial, Decorative, Car Parking, Flake, Digital Paper, Italian, Metallic and 3D flooring, plus Waterproofing.
  - **Training Academy:** The "Learn & Earn" training program, listed point by point.
  - **Gallery and map:** A project gallery with Industrial, Commercial and Residential filters and a lightbox, and an embedded Google Map in grayscale.
  - **WhatsApp:** A floating button that opens a WhatsApp chat with the business.

---

## Technology Stack

- **Framework:** Next.js 16.2 (App Router) and React 19.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS, React Icons
- **Animation:** Framer Motion
- **Integrations:** EmailJS, Google Maps embed, WhatsApp click to chat link
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 20.9 or newer (required by Next.js 16)
- npm

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

3. Create a `.env.local` file in the root directory with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

---

## Repository Structure

```
├── public/
│   └── pictures/           # Gallery photos of finished floors
├── src/
│   ├── app/                # Next.js App Router (layout, global styles, page)
│   ├── components/         # Page sections (Navbar, Hero, Services, Contact, and so on)
│   └── i18n/               # Translations and the language React Context
│       ├── en.json         # English
│       ├── hi.json         # Hindi
│       └── LanguageContext.tsx
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs      # Tailwind CSS v4 through PostCSS
└── tsconfig.json
```

---

## EmailJS Setup

The contact form sends each quote request to the business inbox through EmailJS. To set it up:
1. Register on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service connected to the inbox that should receive requests.
3. Create an Email Template that uses the form fields `from_name`, `phone`, `reply_to` and `message`.
4. Paste the generated IDs into your `.env.local` file.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE). Developed for Shree Shyam Constructions by [Udit Parihar](mailto:uditparihar11@gmail.com).
