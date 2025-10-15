🧾 Product Requirements Document (PRD)
Project: Ayam Penyet Best (APB) — Official Landing Page
🏢 Overview

Project Name: Ayam Penyet Best (APB) Official Website
Purpose:
Design and implement a modern, high-performance, and responsive landing page for Ayam Penyet Best, a restaurant brand specializing in authentic Indonesian “Ayam Penyet” cuisine.

TAKE NOTE: By using the existing template adjust and make it tailored to APB, Only Dont make a big defference between the original and the new ones

The website serves as the public-facing digital presence of APB, highlighting the brand’s story, menu offerings, promotions, outlets, and customer experiences while reflecting the restaurant’s vibrant identity and professionalism.

🎯 Objectives

Strengthen APB’s brand identity through a clean and modern website.

Showcase the menu, promotions, and branch locations in an engaging layout.

Optimize for performance, accessibility, and responsiveness.

Drive user engagement with smooth animations, interactive components, and clear CTAs.

Establish a reusable TypeScript + Tailwind CSS component library for scalability.

🧩 Key Features
1. Responsive Design

Fully adaptive layout for mobile, tablet, and desktop.

Built using a mobile-first approach.

Tailwind responsive utilities (sm, md, lg, xl, 2xl) ensure flexible design.

2. Modern UI/UX

Professional, minimal aesthetic following APB’s red–gold–white branding.

Smooth animations and transitions (fade, slide, reveal).

Sticky navigation and easy-to-read typography.

Consistent visual hierarchy for text and imagery.

3. Interactive Components

Hover effects on cards, buttons, and menu items.

Dynamic hero slider powered by Swiper.js.

Scroll-triggered animations using CSS transitions or Framer Motion.

Filterable menu or service categories for interactivity.

4. Performance Optimized

Built with Next.js 15.3.3 (app router architecture).

Uses Next.js <Image /> for optimized loading.

Static site generation (SSG) and caching for speed.

Lighthouse Performance score target: ≥ 95.

Lazy loading for non-critical components.

5. Type Safety

Fully implemented in TypeScript 5.

Strongly typed props, interfaces, and reusable types.

Avoid use of any type — enforce strict mode in tsconfig.json.

6. Tailwind CSS

Styled with Tailwind CSS 4.

Centralized brand theme in tailwind.config.js.

Consistent spacing, color, and typography system.

🛠️ Tech Stack
| Category  | Technology             | Version | Purpose                                  |
| --------- | ---------------------- | ------- | ---------------------------------------- |
| Framework | Next.js                | 15.3.3  | React-based framework for SSG/SSR        |
| Language  | TypeScript             | 5.x     | Static typing and maintainability        |
| Styling   | Tailwind CSS           | 4.x     | Utility-first CSS for design consistency |
| Icons     | Lucide React           | Latest  | Scalable icons for UI                    |
| Sliders   | Swiper.js              | Latest  | Interactive carousel/slider              |
| Fonts     | Geist Sans, Geist Mono | —       | Clean modern typography (Vercel fonts)   |

🧱 Page Structure
Header (Navbar)

Displays APB logo (top-left) and navigation links:

Home, Menu, Promotions, About Us, Contact

Sticky header with background blur and shadow on scroll.

Includes a mobile hamburger menu.

“Order Now” button linking to delivery or order page.

Hero Section

Full-width hero slider featuring promotional images or dishes.

Animated text and dual call-to-action buttons:

View Menu

Find a Location

Uses GenericSlider and DualButtons components.

About Section

Brief introduction to APB’s history and mission.

Text displayed using the CustomeText component with entry animation.

Optional “Read More” button or link.

Menu / Services Section

Grid display of menu categories using ServicesCard components.

Category filters (e.g., “Main Course”, “Drinks”, “Desserts”).

Hover effects to reveal short descriptions or prices.

Promotions Section

Carousel of limited-time deals using GenericSlider.

Each slide uses PortfolioCard or ServicesCard.

Testimonials Section

Customer reviews shown in a slider layout.

Implemented using GenericSlider + ReviewCard.

Each card includes reviewer photo, rating, and text.

Blog / Updates Section

Latest APB announcements or blog posts.

Displayed as a grid of Blog components with hover animations.

Find Us Section

List or embedded map of restaurant locations.

Contact info displayed using CustomeText and icons.

Footer

Contains:

Business contact info

Quick navigation links

Social media icons (Facebook, Instagram, TikTok)

Styled using Tailwind with APB’s color theme.

🎨 Components Overview
| Component       | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| **Navbar**      | Responsive navigation bar with logo, links, sticky scroll, and mobile menu. |
| **Footer**      | Displays contact info, copyright, and social media links.                   |
| **CustomeText** | Reusable text component supporting animated entry and multiple styles.      |

🧩 UI Components
| Component         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| **GenericSlider** | Flexible Swiper.js-based slider for banners, testimonials, or promos. |
| **ServicesCard**  | Displays services/menu categories with hover effects.                 |
| **PortfolioCard** | Used for showcasing branches, interiors, or dishes.                   |
| **ReviewCard**    | Customer testimonial card with photo, text, and star ratings.         |
| **Blog**          | Blog/news post preview card with image, title, and summary.           |
| **ArrowButton**   | Animated directional arrow button for sliders or navigation.          |
| **OrangeButton**  | Styled gradient button for CTAs (Order Now, Learn More).              |
| **DualButtons**   | Dual CTA button component (primary + secondary actions).              |

💡 Component Guidelines

All components written in TypeScript (TSX) and styled with Tailwind CSS.

Must follow APB brand colors and Geist fonts.

Accessible with ARIA roles and keyboard support.

Components live under:
src/components/
├── Navbar.tsx
├── Footer.tsx
├── CustomeText.tsx
└── ui/
    ├── GenericSlider.tsx
    ├── ServicesCard.tsx
    ├── PortfolioCard.tsx
    ├── ReviewCard.tsx
    ├── Blog.tsx
    ├── ArrowButton.tsx
    ├── OrangeButton.tsx
    └── DualButtons.tsx

#Read the file structure for confirmation

⚙️ Functional Requirements
| ID    | Requirement                                                      | Priority |
| ----- | ---------------------------------------------------------------- | -------- |
| FR-01 | Website must be fully responsive on mobile, tablet, and desktop. | High     |
| FR-02 | Hero banner must use Swiper.js for auto-rotating slides.         | High     |
| FR-03 | Navbar must support a mobile dropdown menu.                      | High     |
| FR-04 | Tailwind CSS used exclusively for styling.                       | High     |
| FR-05 | All components must use TypeScript with type safety.             | High     |
| FR-06 | Lighthouse performance score must be ≥ 95.                       | High     |
| FR-07 | Page load time (LCP) < 2.5 seconds.                              | High     |
| FR-08 | Smooth animations without performance drops.                     | Medium   |
| FR-09 | “Order Now” button must link to a valid route or placeholder.    | Medium   |

🎨 Branding & Design Guidelines

Color Palette (APB Brand)

Primary Red: #B91C1C

Gold Accent: #FACC15

Background White: #FFFFFF

Text Gray: #1F2937

Typography

Headings: Geist Sans

Body Text: Geist Mono

UI Style

Rounded corners: rounded-md

Drop shadows for depth: shadow-md, shadow-lg

Button gradient: bg-gradient-to-r from-red-600 to-yellow-400

Hover transitions: transition-all duration-300 ease-in-out

📈 Performance Goals
| Metric                         | Target |
| ------------------------------ | ------ |
| Lighthouse Score               | ≥ 95   |
| First Contentful Paint (FCP)   | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS)  | < 0.1  |
| Total Page Weight              | < 1MB  |

✅ Acceptance Criteria
Website adapts perfectly to all device sizes.
Hero section auto-plays and supports manual slide navigation.
All animations run smoothly at 60 FPS.
Lighthouse performance score ≥ 95.
No TypeScript or ESLint errors.
Brand colors and fonts match APB design guide.
Navbar and footer links function correctly.
Image assets optimized and lazy-loaded.