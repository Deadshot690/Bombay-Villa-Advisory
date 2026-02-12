# Bombay Vila Advisory

## Overview
Bombay Vila Advisory is a modern real estate website built with React, Vite, and Tailwind CSS. It showcases private villa projects, investment opportunities, client testimonials, and more. The site is designed for performance, accessibility, and a beautiful user experience.

---

## Features
- Home page with hero section, project cards, investment opportunities, and client testimonials
- Individual pages for About, Projects, Project Details, Gallery, Contact, Investment Opportunities, and Client Testimonials
- Animated counters and scroll reveal effects
- Frequently Asked Questions (FAQ) section
- Responsive design using Tailwind CSS
- Modular component structure
- Easy navigation with React Router

---

## Folder Structure
```
villa-vision-main/
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── public/
│   ├── robots.txt
│   └── images/
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   ├── components/
│   │   ├── AnimatedCounter.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   ├── PageHero.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── ClientTestimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Index.tsx
│   │   ├── InvestmentOpportunities.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Projects.tsx
│   │   └── test/
│   └── test/
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun (for package management)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Deadshot690/Bombay-Villa-Advisory.git
   cd villa-vision-main
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```
2. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

---

## Building for Production
1. Build the site:
   ```bash
   npm run build
   # or
   bun run build
   ```
2. The output will be in the `dist/` folder.

---

## Deploying to Cloudflare Pages
1. Push your code to a GitHub repository.
2. Create a Cloudflare account and go to Cloudflare Pages.
3. Connect your GitHub repository.
4. Set build command to `npm run build` and output folder to `dist`.
5. Deploy your site. Cloudflare will provide a live URL.
6. (Optional) Add a custom domain in Cloudflare Pages settings.

---

## Project Structure Explained
- **src/components/**: Reusable UI components (Navbar, Footer, Hero, etc.)
- **src/pages/**: Main pages of the site (Home, About, Projects, etc.)
- **src/assets/**: Images and static assets
- **src/hooks/**: Custom React hooks
- **src/lib/**: Utility functions
- **public/**: Static files served directly (robots.txt, images, etc.)
- **test/**: Example tests and setup

---

## Customization
- Change images in `public/images/` or `src/assets/`
- Update text/content in `src/pages/`
- Modify styles in `App.css`, `index.css`, or Tailwind config
- Add new pages/components as needed

---

## FAQ
**Q: How do I add a new project?**
- Edit `src/pages/Index.tsx` and add a new project object to the `projects` array.

**Q: How do I change the hero section?**
- Update `src/components/PageHero.tsx` or the props passed in each page.

**Q: How do I add more FAQs?**
- Edit the `faqs` array in `src/pages/InvestmentOpportunities.tsx`.

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

---

## License
This project is licensed under the MIT License.

---

## Contact
For questions or support, contact the project team at:
- Email: your@email.com
- Phone: +91-9730877806

---

## Credits
- Built with React, Vite, Tailwind CSS, and Cloudflare Pages
- Icons by Lucide
- Animations by Framer Motion

---

Enjoy building and customizing your villa vision website!
