# 📜 AUM-IC ARCHITECTURAL MANIFESTO

> 🌐 **Navigation:** 🇺🇸 [Read in English](./MANIFEST.md) &nbsp;|&nbsp; 🇲🇽 [Leer en Español](./MANIFEST.es.md) &nbsp;|&nbsp; 📖 [README (EN)](./README.md)

This document contains the physical laws and unbreakable technical standards of the **Arquitectura de Universos Multidimensionales de Ingeniería Creativa (AUM-IC)**.

---

## 1. The Cosmic Scale (The View / Front-end)

Interface rendering (The "View" in MVC) abandons clutter and adopts strict hierarchical assembly. To guarantee perfect sorting, directories use numeric prefixes:

### ⚛️ Level 1: Atoms (`1-atoms/`)
*   **Definition:** The smallest, indivisible visual unit.
*   **Examples:** `<Button />`, `<TextInput />`, `<Label />`, `<SVGIcon />`.
*   **Golden Rule:** They are 100% ignorant. They don't know what page they are on, they make no web requests, and they don't translate languages. They only receive visual data (*props*) and render it. They possess their own isolated SCSS style.

### 🧬 Level 2: Molecules (`2-molecules/`)
*   **Definition:** The union of two or more atoms to build a component with purpose.
*   **Examples:** `<FormField />` (Combines Atom `Label` + Atom `TextInput` + Atom `ErrorText`).
*   **Golden Rule:** They introduce interface encapsulation but remain devoid of complex business logic.

### 🦠 Level 3: Cells (`3-cells/`)
*   **Definition:** Complete functional containers composed of molecules and atoms.
*   **Examples:** `<ContactForm />` (Form with visual validation and submit button).
*   **Golden Rule:** They handle user events (clicks, submits) but delegate deep processing to higher layers.

### 🦖 Level 4: Organisms (`4-organisms/`)
*   **Definition:** Complex, highly independent interactive blocks.
*   **Examples:** `<SubscriptionBlock />` (Marketing text, promotional image, and the form Cell).
*   **Golden Rule:** They are pieces of software that can be moved from one page to another and will continue to function as an autonomous living being.

### 🌍 Level 5: Planets (`5-planets/`)
*   **Definition:** Massive macro-sections defining a page's structural division. They correspond to semantic HTML tags (`<header>`, `<footer>`, `<section>`).
*   **Examples:** `<MainHeader />`, `<HeroSection />`, `<ServicesGrid />`.
*   **Golden Rule:** They are the "home" for Organisms and Cells. They structure the general grid (Grid/Flexbox) of the section.

### ☀️ Level 6: Solar Systems (`6-layouts/`)
*   **Definition:** Master templates or the gravitational skeleton.
*   **Examples:** `<BaseLayout />`, `<DashboardLayout />`.
*   **Golden Rule:** They are the *only* files authorized to contain root HTML tags (`<html>`, `<head>`, `<body>`). They handle SEO metadata, typography imports, and open the space (`<slot />`) for Galaxies to inject their Planets.

---

## 2. The Force of Gravity: Logic & Data (Strict MVC)

Under AUM-IC, it is **strictly forbidden** for a visual component to query a database directly. 

### 💾 The Model (`src/models/` or `src/services/`)
The DNA of the universe. Pure TypeScript classes, functions, and repositories live here to interact with the outside world (External APIs, SQL/NoSQL databases, Stripe, etc.).
*   **Why:** If the company migrates from PostgreSQL to MongoDB tomorrow, only the Model files change. The View remains completely oblivious and unbroken.

### 🌌 The Controller (`src/pages/` — Galaxies)
In frameworks like Astro or Next.js, pages act as Controllers.
*   **Their only job:** Receive the web request, call the **Model** to extract data, initialize environment variables, decide which **Solar System** to use, and pass down the information. Galaxies contain very little code; they act purely as orchestra conductors.

---

## 3. The Physics of the Universe: Styles and SCSS

AUM-IC bans cluttered utility classes (Tailwind) in HTML. Instead, it utilizes the power of SCSS and Scoped Styles.

1.  **Isolation (Scoped CSS):** Every component (from 1 to 5) manages its own style. Upon compilation, the engine assigns a unique hash (e.g., `class="btn-submit astro-XYZ123"`). **Why:** It mathematically guarantees that an Atom's styles will never collide with another component.
2.  **The Global Core (`src/styles/`):** A single center of gravity exists for the overall design:
    *   `_variables.scss`: Hex colors, typography, spacing variables.
    *   `_mixins.scss`: SCSS functions for Media Queries (Responsive) and animations.
    *   **Rule:** Hardcoded colors (`#FFF`) are banned inside components. They must invoke variables (`$color-primary`). If a brand undergoes a corporate redesign, one single file is changed, and the entire universe mutates instantly.

---

## 4. Multidimensionality: Internationalization (i18n)

Building a multi-language (multidimensional) application is often destructive to the codebase. AUM-IC solves this by isolating dictionaries.

1.  **Dictionaries (`src/i18n/`):** All texts live in JSON or TS formats (`en.json`, `es.json`).
2.  **Atomic Agnosticism:** An Atom cannot translate. If a Button needs to say "Submit", the Planet or Cell invoking it must read the dictionary and pass the word "Submit" as a prop.
3.  **Spatial Awareness (Routes):** Galaxies (`/es/contacto`, `/en/contact`) know what language they are in. They use a "Universal Translator" (`useTranslations(lang)`) to inject the correct language downwards, avoiding cascading variables through 6 levels (Prop Drilling).

---

## 5. Unbreakable Technical Standards

Any project under AUM-IC must pass these quality filters:

*   **Anatomy Cards (Invisible JSDoc):** Every component file must begin with an explanatory comment (Type, Purpose, Composition). Because it is written in the Server block, this comment is destroyed during compilation and **never reaches the client's HTML**, protecting intellectual property and reducing transfer weight.
*   **TypeScript Contracts (Interfaces):** Every component receiving data (Props) must define a strict `interface Props {}`. If a Molecule demands a `string`, the engine will throw a build error if it receives a number. Zero surprises in production.
*   **Absolute Aliases (Path Aliases):** The `tsconfig.json` must define shortcuts (e.g., `@atoms/`, `@layouts/`). Destructive relative paths like `../../../../1-atoms/Button.astro` are strictly prohibited.
*   **Islands of Interactivity (Zero JS by default):** Code will compile into ultra-fast pure HTML/CSS. JavaScript will only be sent to the user's browser using strict directives (e.g., `client:load`, `client:visible` in Astro) exclusively on the Organisms or Cells that genuinely require it.
