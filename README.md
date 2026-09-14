# 🚀 Arafat Hossain Sani — Developer Portfolio

<div align="center">

  <!-- Badges -->
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" /></a>

  <br /><br />

  <p align="center">
    <strong>A modern, interactive, and high-performance developer portfolio engineered with React, Three.js, and modern full-stack web standards.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/hossain-sani"><strong>GitHub Profile »</strong></a>
    ·
    <a href="https://www.linkedin.com/in/hossainsani/"><strong>LinkedIn</strong></a>
    ·
    <a href="mailto:sunnycse03@gmail.com"><strong>Get in Touch</strong></a>
  </p>
</div>

---

## 📌 Executive Summary

This repository showcases the portfolio and digital engineering presence of **Arafat Hossain Sani**, a Software Engineer and MERN Stack Developer. 

Engineered with an emphasis on **fluid user experience, responsive architecture, creative computing, and production-grade frontend performance**, this platform highlights real-world applications, engineering philosophy, and live engineering metrics fetched in real-time via GraphQL.

---

## ✨ System Architecture & Highlights

- **🪐 Creative 3D & Particle Visual Computing**:
  - Declarative 3D scene powered by `@react-three/fiber` and `@react-three/drei` featuring wireframe toruses, icosahedrons, and smooth camera parallax tracking cursor trajectories.
  - Custom dynamic particle constellation via `@tsparticles/react` that calculates real-time proximity links and user interaction physics without frame drops.
  - Interactive typewriter presentation showcasing engineering disciplines and core strengths.

- **📊 Live GitHub GraphQL Integration**:
  - Direct integration with GitHub's GraphQL API (v4) to query live repository counts, total commits across production branches, and unique programming languages mastered.
  - Number counter telemetry using `react-countup` with defensive null-checks and graceful API failure fallbacks.

- **🎨 Adaptive Theme Engine (Light / Dark Sync)**:
  - Theme state synchronization across `localStorage`, HTML root class lists, and DaisyUI theme controllers.
  - Dynamic `MutationObserver` architecture in sub-components (such as canvas marquees) to seamlessly re-render theme-dependent gradients on the fly.

- **⚡ Fluid Micro-Interactions & Infinite Marquees**:
  - Viewport-triggered scroll animations driven by `framer-motion` using optimized GPU compositing (`transform`, `opacity`).
  - Dual-directional hardware-accelerated infinite marquees displaying active technologies and tooling competencies.

- **🎓 Comprehensive Career & Education Timeline**:
  - Structured academic background in Computer Science & Engineering (B.Sc CSE, NITER) with verified credentials.
  - Personal milestone narrative detailing evolution from foundational algorithms to modern full-stack systems.

- **📬 Enterprise Contact System & Service Architecture**:
  - Serverless message dispatch integrated with Web3Forms API.
  - Granular service catalog outlining technical capabilities across full-stack development, API engineering, and web performance optimization.

---

## 🛠️ Technology Stack & Core Competencies

### Engineering Stack
| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 (StrictMode, React Router DOM v7, Hooks, Suspense) |
| **Build & Bundling** | Vite 6 (ESM native, HMR, optimized tree-shaking, lightning builds) |
| **3D & Creative Coding** | Three.js, React Three Fiber (R3F), @react-three/drei, tsParticles |
| **Styling & Design System** | Tailwind CSS 3, DaisyUI 5, JetBrains Mono Typography, CSS Variables |
| **Animation & Motion** | Framer Motion, React Fast Marquee, React Simple Typewriter, React CountUp |
| **Backend & Databases (Full-Stack)** | Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication |
| **APIs & Telemetry** | GitHub GraphQL API v4, Web3Forms Serverless Endpoint |
| **DevOps & Infrastructure** | Git, GitHub, Vercel Edge Hosting, Firebase App Engine |

---

## 🏛️ Engineering Standards & Performance Optimization

### 1. Code-Splitting & Progressive Asset Loading
Heavy visual computations—including the Three.js 3D canvas and interactive particle engine—are segregated into isolated asynchronous chunks via `React.lazy` and wrapped in React `Suspense` boundary fallbacks. This ensures **near-instant First Contentful Paint (FCP)** and keeps initial bundle payloads lightweight.

### 2. GPU-Conscious 3D Pipeline
WebGL contexts can easily degrade battery and system performance if not carefully managed. The 3D scene is configured with:
- `powerPreference: "low-power"` to avoid unnecessary dedicated GPU drain.
- Clamped device pixel ratio `[1, 1.5]` to balance razor-sharp visual fidelity with low fill-rate overhead.
- Cached geometries (`useMemo`) to eliminate garbage collection pressure during continuous render loops.

### 3. Defensive API Integration
The GitHub stats pipeline uses declarative GraphQL queries rather than multiple heavy REST calls. Responses are handled through defensive data normalization and safe reduction algorithms, ensuring the UI remains stable even if upstream rate limits or network degradation occurs.

### 4. Semantic Markup & Accessibility (a11y)
- Mobile-first responsive grid system adapting gracefully from mobile viewports to ultra-wide displays.
- High-contrast text palettes complying with WCAG guidelines across both Dark and Light modes.
- Accessible interactive controls with meaningful `aria-label` attributes and keyboard focus styling.

---

## 📂 Codebase Architecture

```text
portfolio-sunny/
├── public/
│   ├── Front-End Developer Resume Of Sani.pdf  # Downloadable verified resume
│   └── favicon / icons
├── src/
│   ├── assets/                                 # Brand assets, project screenshots, credentials
│   ├── component/                              # Modular, atomic UI components
│   │   ├── AboutMe/                            # Academic timeline, journey milestones & skill panels
│   │   │   ├── Education.jsx                   # Chronological timeline with institute badges
│   │   │   ├── Journey.jsx                     # Engineering career path breakdown
│   │   │   ├── SkilPanelAnimation.jsx          # Animated proficiency meters with percentage bars
│   │   │   └── SkillPanel.jsx                  # Modular skill display wrapper
│   │   ├── Archrive/                           # Specialized navigation & theme controllers
│   │   │   ├── NavbarLite.jsx                  # Sticky responsive navigation with animated states
│   │   │   └── ThemeToggle.jsx                 # Dark/Light mode switcher with persistence
│   │   ├── Projects/                           # Project showcase cards with meta badges
│   │   │   ├── CardText.jsx                    # Dynamic Blog Platform card
│   │   │   ├── CartText2.jsx                   # Safety Move Logistics Full-Stack card
│   │   │   └── CardText3.jsx                   # Responsive Sports Platform card
│   │   ├── AboutMe.jsx                         # Comprehensive biographical & philosophy section
│   │   ├── ContactMe.jsx                       # Serverless message form & service offerings
│   │   ├── Footer.jsx                          # Site-wide persistent footer
│   │   ├── Hero3DScene.jsx                     # Three.js 3D Canvas scene with pointer tracking
│   │   ├── MyProject.jsx                       # Featured projects grid container
│   │   ├── MySkill.jsx                         # Dynamic dual-direction skill marquee
│   │   ├── ParticlesBackground.jsx             # Hardware-accelerated tsParticles network
│   │   ├── PhotoNew.jsx                        # Hero banner combining 3D backdrop & CTAs
│   │   └── StatsGithubConnection.jsx           # Live GitHub GraphQL real-time metric counter
│   ├── layout/
│   │   └── MainLayout.jsx                      # Root application layout shell with fixed navbar
│   ├── fonts/
│   │   └── JetBrains Mono.woff2                # Typography font file
│   ├── Home.jsx                                # Landing page composition
│   ├── index.css                               # Tailwind directives & global utility styling
│   └── main.jsx                                # SPA entry point & client-side router
├── tailwind.config.js                          # Tailwind configuration & custom keyframe tokens
├── vercel.json                                 # Production routing rewrite rules
├── vite.config.js                              # Vite build optimization pipeline
└── package.json                                # Project manifest & dependency specifications
```

---

## 🌟 Featured Engineering Projects

| Project | Architectural Overview | Key Technologies | Access |
| :--- | :--- | :--- | :--- |
| **Safety Move** | Enterprise parcel logistics management system. Features role-based access control, real-time parcel booking, user dashboard metrics, payment gateway integration, and administrator management portals. | React, Node.js, Express, MongoDB, JWT, Tailwind CSS | [Live Application](https://safely-move.web.app/) · [Client Repo](https://github.com/hossain-sani/parcel-management-clint) · [Server Repo](https://github.com/hossain-sani/parcel-management-server) |
| **Blog Website** | Dynamic full-stack content publishing platform. Implements token-based authentication (JWT), dynamic category filtering, interactive comments, secure wishlists, and responsive UI states. | React, Node.js, Express, MongoDB, JWT, Tailwind CSS | [Live Application](https://blog-website-sani42.web.app/) · [Client Repo](https://github.com/hossain-sani/blog-website-clint) · [Server Repo](https://github.com/hossain-sani/blog-website-server) |
| **Hockey Club Portal** | Modern responsive web layout designed for sports organizations, featuring multi-tiered service grids, team showcases, and fluid responsive styling across all devices. | HTML5, CSS3, Tailwind CSS, Responsive Design | [Live Application](https://hossain-sani.github.io/A03-Hockey/) · [Repository](https://github.com/hossain-sani/A03-Hockey) |

---

## 💼 What I Bring to Your Team

- **Full-Stack Competence**: Experience spanning the full development lifecycle—from conceptualizing clean database schemas in MongoDB to building bulletproof Node/Express backends and crafting responsive, accessible React frontends.
- **Attention to Detail & UX Craftsmanship**: Deep appreciation for micro-interactions, typography, color harmony, and smooth transitions that turn ordinary apps into delightful user experiences.
- **Problem-Solving Mindset**: Strong academic foundation in Computer Science & Engineering, with disciplined analytical thinking and rapid adaptability to new frameworks and tools.
- **Collaboration & Continuous Improvement**: Clear communicator, disciplined version control habits, proactive team player, and always enthusiastic about adopting industry best practices.

---

## 📬 Professional Contact & Inquiry

I am actively open to **Full-Time Software Engineer**, **Frontend Developer**, and **Full-Stack Developer** opportunities (Remote, Hybrid, or On-site).

<div align="center">

| Channel | Details |
| :--- | :--- |
| **Full Name** | Arafat Hossain Sani |
| **Direct Email** | [sunnycse03@gmail.com](mailto:sunnycse03@gmail.com) / [sanicse03@gmail.com](mailto:sanicse03@gmail.com) |
| **LinkedIn** | [linkedin.com/in/hossainsani](https://www.linkedin.com/in/hossainsani/) |
| **GitHub** | [github.com/hossain-sani](https://github.com/hossain-sani) |
| **WhatsApp / Phone** | (+880) 1601707200 |
| **Location** | Nabinagar, Savar, Dhaka, Bangladesh |

</div>

<br />

<div align="center">
  <sub>Engineered with precision & passion by <strong>Arafat Hossain Sani</strong></sub>
</div>
