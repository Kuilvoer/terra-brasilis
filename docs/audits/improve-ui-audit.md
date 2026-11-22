# UI Consistency & Design System Audit: Terra Brasilis
**Audited Target**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis`  
**Audit Date**: 2026-11-08  
**Audit Archetype**: `teamwork_explorer` / `improve-ui`  
**Methodology**: `improve-ui` Proof Gate (Contract-Runtime-Correction), Falsification Verification, and Token Reconstruction.

---

## 1. Executive Summary

Terra Brasilis is an editorial and interactive web application designed to showcase the culture, geography, society, economy, and gastronomy of Brazil's five macro-regions. The visual identity draws inspiration from high-end editorial publications (*Monocle*, *National Geographic*) combined with Brazilian tropicalist modernism (Oscar Niemeyer architectural curves, Roberto Burle Marx organic geometry, and vibrant Bahia/Amazonian pigments).

While the application achieves strong visual impact, cultural richness, and interactive depth, this audit identified **critical layout disconnects, design system token drifts, missing navigation components, and responsive grid discrepancies** that break visual coherence between the homepage and region views.

### Key Audit Highlights
1. **Critical Omission — `ScrollSpyNav` Orphaned**: `src/components/region/ScrollSpyNav.tsx` was fully implemented with sticky tab navigation, active tab auto-centering, and short-codes (`00`–`07`), but is **completely omitted from `RegionView.tsx`**. As a consequence, viewports under `1280px` (`xl`) have **zero module navigation guide**, and desktop screens lack the documented sticky sub-nav bar.
2. **Layout Overlap Defect — `SideReadingGuide` Collision**: On screens between `1280px` and `1500px`, the fixed `SideReadingGuide` (`w-[204px]` at `left-5`) hovers directly on top of the left `224px` of centered page content, obscuring titles, text, and cards.
3. **Token Resolution Failure — Undefined Tailwind Classes**: Classes `brand-ink` and `brand-amazon` are used across multiple primary components (`App.tsx`, `PolaroidCollageSection.tsx`, `RegionView.tsx`, `MapWidget.tsx`), but are **not defined in `tailwind.config.js`**, resulting in silent styling fallback failures.
4. **Design System Drift — Neo-Brutalist Hard Shadows vs Editorial Soft Shadows**: Almost all widgets and module cards apply arbitrary hard neo-brutalist offset shadows (`shadow-[6px_6px_0_#18130F]`, `shadow-[8px_8px_0_#18130F]`) and thick `2px` dark borders (`border-2 border-brand-espresso`), diverging from the documented editorial design tokens (`shadow-card`, `shadow-subtle`, `border-stone-200` / `border-brand-sand`, `rounded-2xl`).
5. **Responsive Grid Omission — BentoGrid Missing Tablet 2-Col Branch**: `BentoGrid.tsx` transitions directly from `grid-cols-1` to `lg:grid-cols-12` with no tablet (`md:`) 2-column branch, leaving widgets in a single stretched vertical column on iPad/tablet viewports (768px–1023px).

---

## 2. Design Language Reconstruction

```markdown
## Design language
- Audited surface: Terra Brasilis Web Application (Homepage & 5 Regional Pages)
  - Traced surfaces: Navbar, BentoGrid, MapWidget, WeatherWidget, CurrencyWidget, JeitinhoWidget, SpotifyWidget, MetricsWidget, PolaroidCollageSection, ExpeditionRouteSection, RegionView, ScrollSpyNav, SideReadingGuide, RegionMapSection, 6 Region Modules (Geography, History, Culture, Gastronomy, Economy, Sports), MasonryGallery, LightboxModal, VideoWrapper, Footer.
- Design sources: 
  - `PROJECT.md` (Architecture, specifications, and layout contracts)
  - `tailwind.config.js` (Design token definitions for colors, fonts, shadows, radii)
  - `src/index.css` (Tailwind base directives, Lenis scroll rules, Leaflet overrides, 3D flip card utilities)
  - `DISPATCH.md` & `ORIGINAL_REQUEST.md` (Design system guidelines, color hex values, 0px overflow)
- Documented decisions:
  - Editorial Palette: Warm off-white (`#F8F7F4` / `#FDF8EE`), Crisp white (`#FFFFFF`), Warm sand/muted linen (`#F5EFE2`), Amazon Green (`#0A4D2E`), Vivid Emerald (`#057A44`), Earthy Ochre (`#D99B26` / `#E59A23`), Canary Yellow (`#FACC15`), Bahian Terracotta (`#C85A32` / `#D9532E`), Deep Atlantic Blue (`#0F2C59` / `#0E2954`), Deep Espresso/Charcoal (`#18130F`), Muted Warm Slate (`#4A433C`).
  - Typography: Serif headings (`Fraunces` / `Playfair Display`), Condensed Display posters (`Oswald`), Body copy (`Plus Jakarta Sans` / `Inter`).
  - Card Styling: `rounded-2xl` cards, 1px stone borders (`border-brand-sand` / `border-stone-200`), soft editorial shadows (`shadow-card`, `shadow-subtle`), backdrop blur on floating overlays.
  - Responsive Grid: Mobile 1-col, Tablet 2-col, Desktop 12-col bento grid. 0px horizontal overflow across all viewports (375px, 768px, 1440px).
  - Navigation: Sticky editorial masthead + Sticky module Scroll-Spy Sub-Nav bar in RegionView.
  - Iconography: Subtle white-line SVG contour (`BrazilMapOutline`) for national and macro-regional identification; Lucide SVG icons exclusively.
- Governing owners and consumers:
  - Tokens: `tailwind.config.js` owns color, font, shadow, and radius tokens.
  - Components: `src/components/common/`, `src/components/bento/`, `src/components/region/`, `src/components/story/`.
- Explicit exceptions:
  - None documented.
```

---

## 3. Comprehensive Component Surface Trace

| Surface / Component | File Location | Rendered Context | Design Tokens Used | Layout & Responsive Specs | Observed Anomalies |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Navbar** | `src/components/common/Navbar.tsx` | Global sticky header on all views | `bg-brand-espresso`, `border-brand-ochre/50`, `text-brand-yellow` | `sticky top-0 z-50 max-w-[1440px] px-4 sm:px-6 lg:px-8` | Logo uses semantic `<h1>` tag; active pill has neo-brutalist shadow `shadow-[2px_2px_0_#057A44]`. |
| **BentoGrid** | `src/components/bento/BentoGrid.tsx` | Main atlas section on homepage | `bg-brand-emerald`, `border-brand-espresso`, `rounded-3xl` | `max-w-[1440px] py-16 sm:py-24 space-y-10 grid grid-cols-1 lg:grid-cols-12 gap-6` | Missing tablet 2-col branch (`md:grid-cols-2`); uses hard `shadow-[8px_8px_0_#18130F]`. |
| **MapWidget** | `src/components/bento/MapWidget.tsx` | Bento slot 1 (8 cols desktop) | Leaflet CartoDB Positron, custom SVG pins | `min-h-[540px]`, `rounded-3xl border-2 border-brand-espresso` | Uses undefined classes `text-brand-ink` (line 261) and `hover:bg-brand-amazon` (line 269); `border-2`. |
| **WeatherWidget** | `src/components/bento/WeatherWidget.tsx` | Bento slot 2 (4 cols desktop, row 1) | `bg-white`, `border-brand-espresso`, `bg-brand-emerald` | `grid-cols-5` capitals selector; `rounded-3xl border-2` | 5 buttons in 1 row cramped on mobile (<360px); uses hard brutalist `shadow-[6px_6px_0_#18130F]`. |
| **CurrencyWidget** | `src/components/bento/CurrencyWidget.tsx` | Bento slot 3 (4 cols desktop, row 2) | `bg-white`, `border-brand-espresso`, `bg-brand-emerald` | Preset amounts (50, 100, 250, 500); `rounded-3xl border-2` | Hard brutalist shadow `shadow-[6px_6px_0_#18130F]`; 2px border on inputs and cards. |
| **JeitinhoWidget** | `src/components/bento/JeitinhoWidget.tsx` | Bento slot 4 (6 cols desktop) | `perspective-1000`, 3D rotation, `bg-brand-surfaceMuted` | 3D CSS flip container; `rounded-3xl border-2 border-brand-espresso` | Card styling is `rounded-3xl border-2 shadow-[6px_6px_0_#18130F]`; flip hint hidden on mobile. |
| **SpotifyWidget** | `src/components/bento/SpotifyWidget.tsx` | Bento slot 5 (6 cols desktop) | `bg-brand-emerald`, `border-brand-espresso`, `bg-brand-yellow` | Vinyl player facade; `rounded-3xl border-2 border-brand-espresso` | Brutalist hard shadow `shadow-[6px_6px_0_#18130F]`; active tab uses espresso/yellow pill. |
| **MetricsWidget** | `src/components/bento/MetricsWidget.tsx` | Bento slot 6 (12 cols desktop) | `bg-white`, `bg-brand-surfaceMuted`, `border-brand-sand` | `grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3` | 8 cols at `lg:` (1024px) cramps cards to 103px width, wrapping labels onto 3 lines. |
| **PolaroidCollageSection** | `src/components/story/PolaroidCollageSection.tsx` | Hero on homepage | `bg-brand-emerald`, `poster-line`, `polaroid-card` | `min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] max-w-[1440px]` | Uses undefined `text-brand-ink` (line 112); poster lines use `div` without semantic heading tag. |
| **ExpeditionRouteSection** | `src/components/story/ExpeditionRouteSection.tsx` | 5-stage timeline on homepage | `bg-[#F4EBDC]`, `border-brand-espresso`, `polaroid-card` | `max-w-[1440px] py-20 sm:py-28`, alternating 5-col cards | Hardcoded `#F4EBDC` background differs from body `#FDF8EE`; brutalist card shadows. |
| **RegionView** | `src/components/region/RegionView.tsx` | Master container for region pages | Dynamic theme colors, 8 section bands, `polaroid-card` | Alternates between `max-w-[1440px]` (hero) and `max-w-7xl` (modules) | **`ScrollSpyNav` completely missing from DOM**; uses undefined `text-brand-ink` (line 332). |
| **ScrollSpyNav** | `src/components/region/ScrollSpyNav.tsx` | Sticky sub-nav for region pages | `sticky top-[58px]`, `backdrop-blur-md`, `border-brand-espresso/25` | Horizontal scrollable tabs with auto-center scrolling | **Never imported or rendered in `RegionView.tsx`**. Exists as an orphaned component file. |
| **SideReadingGuide** | `src/components/region/SideReadingGuide.tsx` | Fixed floating index on left | `hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 w-[204px]` | Fixed vertical pill strip with active state tracking | **Directly overlaps left 224px of page content** on 1280px–1500px desktop viewports. |
| **RegionMapSection** | `src/components/region/RegionMapSection.tsx` | Band 0 in RegionView | Leaflet CartoDB Positron, `bg-[#FDF8EE]`, `bg-brand-emerald` | `grid-cols-1 lg:grid-cols-12 gap-6`, map 7 cols, dossier 5 cols | Inverted active state: layer buttons use emerald/yellow, landmark pills use yellow/espresso. |
| **GeographyModule** | `src/components/region/modules/GeographyModule.tsx` | Band 1 in RegionView | `bg-[#EBF3EE]`, `rounded-3xl border-2 border-brand-espresso` | Key stats (4 cols), Photo Bento Trio (3 cols), Biomes (2 cols) | Hard brutalist shadows (`shadow-[6px_6px_0_#18130F]`, `shadow-[5px_5px_0_#18130F]`); `border-2`. |
| **HistoryModule** | `src/components/region/modules/HistoryModule.tsx` | Band 2 in RegionView | `bg-[#F4EBDC]`, `bg-brand-espresso`, `bg-brand-emerald` | Cultural triad (3 cols), interactive timeline stepper | Hard brutalist shadow `shadow-[8px_8px_0_#057A44]`; timeline rail hidden on mobile (`hidden sm:block`). |
| **CultureModule** | `src/components/region/modules/CultureModule.tsx` | Band 3 in RegionView | `bg-[#FDF6E4]`, `bg-brand-emerald`, `bg-brand-espresso` | Festival cards (3 cols), 4K video facade, musical genres (3 cols) | Brutalist hard shadows (`shadow-[7px_7px_0_#18130F]`, `shadow-[6px_6px_0_#057A44]`); `border-2`. |
| **GastronomyModule** | `src/components/region/modules/GastronomyModule.tsx` | Band 4 in RegionView | `bg-[#FDF8EE]`, `bg-brand-espresso`, `bg-white` | Signature dishes (2 cols), native ingredients + drinks (2 cols) | Brutalist hard shadows (`shadow-[6px_6px_0_#C8431D]`, `shadow-[6px_6px_0_#18130F]`); `border-2`. |
| **EconomyModule** | `src/components/region/modules/EconomyModule.tsx` | Band 5 in RegionView | `bg-[#EBF3EE]`, `bg-brand-emerald`, `bg-white` | KPI strip (4 cols), Sector dashboard (7 cols), Export matrix (5 cols) | Brutalist hard shadows (`shadow-[7px_7px_0_#18130F]`, `shadow-[6px_6px_0_#18130F]`); `border-2`. |
| **SportsModule** | `src/components/region/modules/SportsModule.tsx` | Band 6 in RegionView | `bg-[#F4EBDC]`, `bg-brand-emerald`, `bg-white` | Stadium scoreboard, Martial arts (5 cols), Outdoor sports (7 cols) | Brutalist hard shadows (`shadow-[6px_6px_0_#18130F]`, `shadow-[6px_6px_0_#18130F]`); `border-2`. |
| **MasonryGallery** | `src/components/region/MasonryGallery.tsx` | Band 7 in RegionView | `polaroid-card`, `aspect-[4/3]`, `font-serif` | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5` | Correctly structured responsive grid; opens full-screen LightboxModal. |
| **LightboxModal** | `src/components/region/LightboxModal.tsx` | Photographic viewer overlay | `bg-black/90 backdrop-blur-md`, `shadow-modal`, `rounded-2xl` | Fullscreen modal with Esc/arrow navigation and Unsplash credits | Well-aligned with design tokens (`shadow-modal`, `backdrop-blur-md`, `rounded-2xl`). |
| **VideoWrapper** | `src/components/region/VideoWrapper.tsx` | Band 7 in RegionView | `bg-white`, `rounded-3xl border-2 border-brand-espresso` | 16:9 click-to-play YouTube privacy-free facade | Brutalist hard shadow `shadow-[8px_8px_0_#18130F]`; `rounded-3xl border-2 border-brand-espresso`. |
| **BrazilMapOutline** | `src/components/common/BrazilMapOutline.tsx` | Hero badges (Home & Regions) | SVG vector path, `text-white`, `strokeWidth="2.2" / "2.4"` | `100x100 viewBox`, `w-5 h-5` container | Vector outline paths verified and functional; correctly highlights macro-region when `regionId` passed. |
| **Footer** | `src/components/common/Footer.tsx` | Global footer | `bg-brand-espresso`, `border-t-2 border-brand-espresso` | `max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8` | Container uses `max-w-7xl` while Navbar/Hero use `max-w-[1440px]`; bright canary yellow accents. |

---

## 4. Prioritized Audit Findings

### Summary Table

| # | Priority | Problem | Evidence | Proposed Change | Scope | Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **F-01** | **HIGH** | `ScrollSpyNav` sticky sub-nav is completely omitted from `RegionView.tsx`, leaving mobile/tablet with zero module navigation and desktop lacking the sticky sub-header. | `RegionView.tsx:1-32` has no import for `ScrollSpyNav`. `ScrollSpyNav.tsx` exists (148 lines) with full tab support. `RegionView.tsx:241-244` explicitly references `sticky ScrollSpyNav`. | Import `ScrollSpyNav` into `RegionView.tsx` and place it immediately below `#region-hero`. | `RegionView.tsx` | **High (100%)** |
| **F-02** | **HIGH** | `SideReadingGuide` overlaps and obscures the left 224px of page content on viewports between 1280px and 1500px. | `SideReadingGuide.tsx:46` has `hidden xl:flex fixed left-5 w-[204px]`. Centered `max-w-7xl` content starts at `left: 0px` on a 1280px screen, placing the guide over titles and cards. | Change visibility trigger to `2xl:flex` (>=1536px), or add margin clearing / responsive drawer toggle. | `SideReadingGuide.tsx`, `App.tsx`, `RegionView.tsx` | **High (100%)** |
| **F-03** | **HIGH** | Undefined Tailwind classes `brand-ink` and `brand-amazon` cause silent CSS styling fallbacks. | `tailwind.config.js:9-25` does not define `brand.ink` or `brand.amazon`. Used in `App.tsx:109`, `PolaroidCollageSection.tsx:112`, `RegionView.tsx:332`, `MapWidget.tsx:261, 269`. | Add `ink: '#18130F'` and `amazon: '#0A4D2E'` to `tailwind.config.js` or replace with existing `brand-espresso` and `brand-green`. | `tailwind.config.js`, `App.tsx`, `MapWidget.tsx`, `RegionView.tsx` | **High (100%)** |
| **F-04** | **HIGH** | Neo-brutalist hard shadows (`shadow-[6px_6px_0_#18130F]`) and `border-2 border-brand-espresso` diverge from documented editorial soft shadows and 1px borders. | 18+ components use arbitrary `shadow-[6px_6px_0_#18130F]` and `border-2 border-brand-espresso` instead of `shadow-card`, `shadow-subtle`, `border-brand-sand`, and `rounded-2xl`. | Standardize card styling to `rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow`. | All Bento widgets, Region modules, `VideoWrapper.tsx` | **High (95%)** |
| **F-05** | **MEDIUM** | `BentoGrid` missing tablet 2-column responsive branch, forcing single-column vertical stack across 768px–1023px. | `BentoGrid.tsx:167` defines `grid grid-cols-1 lg:grid-cols-12`. `PROJECT.md:121` specifies "2-col tablet, 1-col mobile vertical stack". | Add `md:grid-cols-2` and assign `md:col-span-1` / `md:col-span-2` to bento children. | `BentoGrid.tsx` | **High (100%)** |
| **F-06** | **MEDIUM** | Alternating container widths (`max-w-[1440px]` vs `max-w-7xl`) cause layout jumping by 160px on wide desktop screens. | `Navbar`, `BentoGrid`, `ExpeditionRoute`, and Hero use `max-w-[1440px]`; `RegionView` module bands and `Footer` use `max-w-7xl`. | Standardize container wrapper across module bands and footer to `max-w-[1440px] px-4 sm:px-6 lg:px-8`. | `RegionView.tsx`, `Footer.tsx` | **High (95%)** |
| **F-07** | **MEDIUM** | Missing semantic `<h1>` element in main homepage and region view poster heroes. | `PolaroidCollageSection.tsx:160-171` and `RegionView.tsx:381-392` use `div.poster-line` with no heading tag. Only `Navbar.tsx:73` has an `<h1>`. | Wrap the primary poster text block in a semantic `<h1>` or provide an accessible `h1.sr-only` headline in the hero. | `PolaroidCollageSection.tsx`, `RegionView.tsx`, `Navbar.tsx` | **High (100%)** |
| **F-08** | **LOW** | Inverted active-state color semantics between widgets (Emerald/Yellow vs Yellow/Espresso). | `SideReadingGuide` uses `bg-brand-emerald text-brand-yellow` for active state, while `Navbar` and `ScrollSpyNav` use `bg-brand-yellow text-brand-espresso`. | Standardize active navigation tabs to `bg-brand-yellow text-brand-espresso font-bold`. | `SideReadingGuide.tsx`, `RegionMapSection.tsx` | **Medium (90%)** |
| **F-09** | **LOW** | `MetricsWidget` 8-column layout at `lg:` (1024px) cramps cards to 103px, causing awkward 3-line label wraps. | `MetricsWidget.tsx:58` has `grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3`. Inside 103px width, labels like "Werelderfgoed" wrap into 3 lines. | Change grid breakpoints to `grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3`. | `MetricsWidget.tsx` | **High (100%)** |

---

## 5. Contract-Runtime-Correction Proofs

### Proof 1: F-01 — `ScrollSpyNav` Sticky Sub-Nav Missing from RegionView
1. **Contract**: `PROJECT.md` Architecture Diagram line 29: `Sticky Scroll-Spy Sub-Nav Bar`; Feature Inventory line 131: `Sticky Scroll-Spy Navigation: IntersectionObserver module tracker & smooth scrolling`; `DISPATCH.md` Objective 2.
2. **Runtime**: In `src/components/region/RegionView.tsx`, lines 1-32 contain imports for `SideReadingGuide`, `RegionMapSection`, and the 6 modules, but **never import `ScrollSpyNav`**. In lines 241-255, `handleScroll` contains the comment: `// Offset accounting for sticky Navbar + sticky ScrollSpyNav + margin (scrollPosition = window.scrollY + 175)`. In lines 324-898, the rendered JSX renders `<SideReadingGuide>` at line 327, then immediately enters `<section id="region-hero">` (line 330), followed by `BAND 0` (line 521). `ScrollSpyNav` is never placed into the DOM. On screens <1280px where `SideReadingGuide` is hidden (`hidden xl:flex`), the user has **no navigation mechanism** between the 8 module bands.
3. **Correction**:
   - In `src/components/region/RegionView.tsx`:
     ```tsx
     // Add import
     import { ScrollSpyNav } from './ScrollSpyNav';
     
     // Insert immediately below <section id="region-hero"> (line 518):
     <ScrollSpyNav
       activeTab={activeTab}
       onTabChange={scrollToModule}
       accentShadowColor={currentTheme.shadowColor}
       regionName={getLocalizedRegionName(region.id)}
     />
     ```

---

### Proof 2: F-02 — `SideReadingGuide` Content Collision on 1280px–1500px Screens
1. **Contract**: `ORIGINAL_REQUEST.md` line 42 ("Animations run smoothly at 60fps without layout jank across desktop and mobile screen sizes"); `PROJECT.md` Feature 35 (line 145: "0px overflow, no layout collision across viewports 375px, 768px, 1440px").
2. **Runtime**: In `src/components/region/SideReadingGuide.tsx:46`, the container element is styled with:
   `className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col ... w-[204px]"`.
   The Tailwind `xl` breakpoint triggers at `1280px`.
   In `RegionView.tsx:584, 610, 631, etc.`, module bands use `max-w-7xl mx-auto px-4`.
   At viewport width = 1280px, `max-w-7xl` is 1280px wide. Its horizontal margin is `(1280 - 1280) / 2 = 0px`.
   The fixed guide sits at `left: 20px` with width `204px`, meaning it occupies `left: 20px` to `left: 224px`.
   Consequently, `SideReadingGuide` floats directly over the left 224px of page content, covering section headings, descriptions, and interactive cards for all users on viewports between 1280px and ~1500px.
3. **Correction**:
   - In `src/components/region/SideReadingGuide.tsx:46`:
     Change `hidden xl:flex` to `hidden 2xl:flex` (so it only displays when viewport is `>= 1536px`, where `(1536 - 1280) / 2 = 128px` margin is available, or `>= 1650px` for full clearance).
   - Alternatively, add `xl:hidden` drawer toggle, or provide container padding `2xl:pl-28` so content never collides.

---

### Proof 3: F-03 — Undefined Tailwind Classes `brand-ink` & `brand-amazon`
1. **Contract**: `tailwind.config.js:9-25` design tokens contract. All classes prefixed with `brand-` must resolve to defined theme keys in `theme.extend.colors.brand`.
2. **Runtime**:
   - `src/App.tsx:109`: `selection:text-brand-ink`
   - `src/components/story/PolaroidCollageSection.tsx:112`: `text-brand-ink`
   - `src/components/region/RegionView.tsx:332`: `text-brand-ink`
   - `src/components/bento/MapWidget.tsx:261`: `text-brand-ink`
   - `src/components/bento/MapWidget.tsx:269`: `hover:bg-brand-amazon`
   In `tailwind.config.js:9-25`:
   ```javascript
   colors: {
     brand: {
       bg: '#FDF8EE',
       surface: '#FFFFFF',
       surfaceMuted: '#F5EFE2',
       espresso: '#18130F',
       charcoal: '#18130F',
       slate: '#4A433C',
       green: '#0A4D2E',
       emerald: '#057A44',
       ochre: '#E59A23',
       yellow: '#FACC15',
       terracotta: '#D9532E',
       blue: '#0E2954',
       sand: '#E6DEC8',
     },
   }
   ```
   Neither `ink` nor `amazon` is declared. Tailwind generates no CSS for `text-brand-ink` or `hover:bg-brand-amazon`, resulting in missing text color styling and no hover color on the map popup CTA button.
3. **Correction**:
   In `tailwind.config.js`:
   ```javascript
   colors: {
     brand: {
       // ... existing tokens
       ink: '#18130F',           // Defined alias for deep charcoal text
       amazon: '#0A4D2E',        // Defined alias for deep Amazon green
     }
   }
   ```
   Or replace usages in the 4 affected files with `text-brand-espresso` and `hover:bg-brand-green`.

---

### Proof 4: F-04 — Neo-Brutalist Hard Shadows Diverging from Editorial Soft Shadows
1. **Contract**: `DISPATCH.md` Requirement 3 ("Card styling: rounded-2xl cards, 1px stone borders, soft shadows, backdrop blur"); `tailwind.config.js` lines 31-38 (defines `boxShadow.card` as `'0 8px 28px -4px rgba(24, 19, 15, 0.06), 0 2px 8px -1px rgba(24, 19, 15, 0.04)'` and `boxShadow.subtle` as `'0 2px 6px rgba(24, 19, 15, 0.04), 0 6px 16px rgba(24, 19, 15, 0.03)'`).
2. **Runtime**:
   - `BentoGrid.tsx:79`: `rounded-3xl border-2 border-brand-espresso shadow-[8px_8px_0_#18130F]`
   - `MapWidget.tsx:148`: `rounded-3xl border-2 border-brand-espresso shadow-[8px_8px_0_#18130F]`
   - `WeatherWidget.tsx:88`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `CurrencyWidget.tsx:44`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `JeitinhoWidget.tsx:84`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `SpotifyWidget.tsx:68`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `MetricsWidget.tsx:40`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `GeographyModule.tsx:112, 150, 188`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `CultureModule.tsx:223, 276, 353`: `rounded-3xl border-2 border-brand-espresso shadow-[6px_6px_0_#18130F]`
   - `VideoWrapper.tsx:22`: `rounded-3xl border-2 border-brand-espresso shadow-[8px_8px_0_#18130F]`
   These components bypass the defined `shadow-card` and `shadow-subtle` tokens and apply arbitrary brutalist hard black block shadows and thick 2px dark borders.
3. **Correction**:
   Replace arbitrary `border-2 border-brand-espresso shadow-[6px_6px_0_#18130F] rounded-3xl` with the design token classes:
   `rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-all`.

---

### Proof 5: F-05 — BentoGrid Missing Tablet 2-Column Responsive Branch
1. **Contract**: `PROJECT.md` Feature 11 line 121: "Responsive Bento Box Grid: 12-col desktop, 2-col tablet, 1-col mobile vertical stack"; `DISPATCH.md` Requirement 3 ("responsive branches: mobile 1-col, tablet 2-col, desktop 12-col").
2. **Runtime**: In `src/components/bento/BentoGrid.tsx:167`, the grid container is:
   `className="grid grid-cols-1 lg:grid-cols-12 gap-6"`.
   On viewports between `768px` and `1023px` (`md:` to `<lg:`), the grid remains `grid-cols-1`. Every widget (`MapWidget`, `WeatherWidget`, `CurrencyWidget`, `JeitinhoWidget`, `SpotifyWidget`, `MetricsWidget`) renders stacked in a single column stretching 100% of the screen width.
3. **Correction**:
   In `src/components/bento/BentoGrid.tsx:167-197`:
   - Change container to:
     `<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">`
   - Child classes:
     - MapWidget wrapper: `className="md:col-span-2 lg:col-span-8 min-h-[500px]"`
     - Weather / Currency wrapper: `className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"`
     - JeitinhoWidget wrapper: `className="md:col-span-1 lg:col-span-6 min-h-[300px]"`
     - SpotifyWidget wrapper: `className="md:col-span-1 lg:col-span-6 min-h-[300px]"`
     - MetricsWidget wrapper: `className="md:col-span-2 lg:col-span-12"`

---

## 6. Improve First: Highest-Leverage Action

**Highest-Leverage Finding**: **F-01 — Restore `ScrollSpyNav` in `RegionView.tsx`**.

### Rationale
`ScrollSpyNav.tsx` is an already completed, high-polish, 148-line component with tabs, auto-scroll centering, Lucide icons, and active state indicators. It was accidentally omitted when assembling `RegionView.tsx`, leaving region pages with **no navigation mechanism on mobile and tablet devices**, and with severe layout overlap on desktop. Restoring this component costs less than 10 lines of code, immediately closes the primary functional and visual navigation gap of the application, and honors the core `PROJECT.md` architectural contract.

---

## 7. Actionable Implementation Plans

### Plan 1: Restore `ScrollSpyNav` Component in `RegionView.tsx` (F-01)

#### Target File
`c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\region\RegionView.tsx`

#### Rationale & Structure
Import `ScrollSpyNav` and place it immediately following `<section id="region-hero">` and sticky under the main `Navbar`.

#### Exact Code Changes
```tsx
// 1. In RegionView.tsx imports (around line 23):
import { ScrollSpyNav } from './ScrollSpyNav';

// 2. In RegionView.tsx JSX immediately below line 518 (closing </section> of #region-hero):
      </section>

      {/* Sticky ScrollSpy Sub-Nav Bar */}
      <ScrollSpyNav
        activeTab={activeTab}
        onTabChange={scrollToModule}
        accentShadowColor={currentTheme.shadowColor}
        regionName={getLocalizedRegionName(region.id)}
      />

      {/* BAND 0: Regional Tactical Map & Insider Strip ... */}
```

#### Verification
1. Run `npm run build` in `terra_brasilis` directory (must pass with 0 errors).
2. Navigate to `#region/north`. Verify the sticky tab bar (`00 Regiokaart`, `01 Geografie`, `02 Geschiedenis`, etc.) sticks below the Navbar while scrolling through modules.
3. Verify clicking any tab smoothly scrolls to that module.

---

### Plan 2: Resolve `SideReadingGuide` Viewport Collision (F-02)

#### Target File
`c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\region\SideReadingGuide.tsx`

#### Rationale & Structure
Prevent the fixed 204px guide from overlapping page content on 1280px–1500px screens by raising the display breakpoint to `2xl` (1536px+), where ample desktop margin exists.

#### Exact Code Changes
```tsx
// In SideReadingGuide.tsx (around line 46):
// BEFORE:
    <aside
      aria-label="Navigation guide"
      className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-brand-espresso shadow-[5px_5px_0_#18130F] select-none w-[204px]"
    >

// AFTER:
    <aside
      aria-label="Navigation guide"
      className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-sand shadow-card select-none w-[204px]"
    >
```

#### Verification
1. Open viewport at `1366px` and `1440px`. Verify page content has 0px overlap and no obstructed text.
2. Open viewport at `1600px`+. Verify `SideReadingGuide` floats cleanly in the left margin without touching content.

---

### Plan 3: Declare Missing Token Aliases in `tailwind.config.js` (F-03)

#### Target File
`c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\tailwind.config.js`

#### Rationale & Structure
Add explicit aliases for `ink` and `amazon` under `theme.extend.colors.brand` so that existing code references resolve deterministically without runtime style drops.

#### Exact Code Changes
```javascript
// In tailwind.config.js (around line 10):
      colors: {
        brand: {
          bg: '#FDF8EE',             // Warm sun-lit Brazilian cream / parchment
          surface: '#FFFFFF',        // Crisp white card surface
          surfaceMuted: '#F5EFE2',   // Warm sand / tropical linen surface
          espresso: '#18130F',       // Deep roasted coffee / cachaça charcoal
          charcoal: '#18130F',       // Primary heading dark
          ink: '#18130F',            // Editorial ink text color alias
          slate: '#4A433C',          // Warm muted body text
          green: '#0A4D2E',          // Deep Amazon rainforest green
          amazon: '#0A4D2E',         // Amazon green alias
          emerald: '#057A44',        // Vivid Brazilian flag / poster emerald
          ochre: '#E59A23',          // Warm Tropical Sun Gold / Ochre
          yellow: '#FACC15',         // Vivid Canary yellow accent
          terracotta: '#D9532E',     // Warm Bahian clay & hibiscus coral
          blue: '#0E2954',           // Deep Atlantic & Hyacinth Macaw blue
          sand: '#E6DEC8',           // Warm sand hairline border
        },
      },
```

#### Verification
1. Run `npm run build` in `terra_brasilis`.
2. Inspect rendered CSS to ensure `selection:text-brand-ink` and `hover:bg-brand-amazon` compile to valid rules.

---

### Plan 4: Implement 2-Column Tablet Branch in `BentoGrid.tsx` (F-05)

#### Target File
`c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\bento\BentoGrid.tsx`

#### Rationale & Structure
Add `md:grid-cols-2` layout classes so tablet devices (iPad, 768px–1023px) display a balanced 2-column bento layout instead of an endless 1-column vertical stack.

#### Exact Code Changes
```tsx
// In BentoGrid.tsx (lines 167-197):
// BEFORE:
      {/* Main 12-Column Bento Grid */}
      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Map Anchor (8 cols on desktop) */}
        <div className="lg:col-span-8 min-h-[540px]">
          <MapWidget onSelectRegion={onSelectRegion} />
        </div>

        {/* Live APIs Stack (4 cols on desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1">
            <WeatherWidget />
          </div>
          <div className="flex-1">
            <CurrencyWidget />
          </div>
        </div>

        {/* Interactive Sociolinguistics (6 cols on desktop) */}
        <div className="lg:col-span-6 min-h-[300px]">
          <JeitinhoWidget />
        </div>

        {/* Regional Audio & Spotify Soundscape Player (6 cols on desktop) */}
        <div className="lg:col-span-6 min-h-[300px]">
          <SpotifyWidget />
        </div>

        {/* Full-Width Macro Metrics & Open Data Strip (12 cols) */}
        <div className="lg:col-span-12">
          <MetricsWidget />
        </div>
      </div>

// AFTER:
      {/* Main Responsive Bento Grid: 1-col mobile, 2-col tablet, 12-col desktop */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Interactive Map Anchor (full width tablet, 8 cols desktop) */}
        <div className="md:col-span-2 lg:col-span-8 min-h-[500px]">
          <MapWidget onSelectRegion={onSelectRegion} />
        </div>

        {/* Live APIs Stack (split 2 cols tablet, stacked 4 cols desktop) */}
        <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="h-full">
            <WeatherWidget />
          </div>
          <div className="h-full">
            <CurrencyWidget />
          </div>
        </div>

        {/* Interactive Sociolinguistics (1 col tablet, 6 cols desktop) */}
        <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
          <JeitinhoWidget />
        </div>

        {/* Regional Audio & Spotify Soundscape Player (1 col tablet, 6 cols desktop) */}
        <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
          <SpotifyWidget />
        </div>

        {/* Full-Width Macro Metrics & Open Data Strip (2 cols tablet, 12 cols desktop) */}
        <div className="md:col-span-2 lg:col-span-12">
          <MetricsWidget />
        </div>
      </div>
```

#### Verification
1. Inspect viewport at `768px` and `820px` (iPad / iPad Air).
2. Confirm `WeatherWidget` and `CurrencyWidget` sit side-by-side in 2 columns.
3. Confirm `JeitinhoWidget` and `SpotifyWidget` sit side-by-side in 2 columns.
4. Verify 0px horizontal overflow across `375px`, `768px`, and `1440px`.

---

### Plan 5: Standardize Card Styling to Editorial System (F-04)

#### Target Surfaces
- `src/components/bento/WeatherWidget.tsx`
- `src/components/bento/CurrencyWidget.tsx`
- `src/components/bento/JeitinhoWidget.tsx`
- `src/components/bento/SpotifyWidget.tsx`
- `src/components/bento/MetricsWidget.tsx`
- `src/components/bento/MapWidget.tsx`
- `src/components/region/VideoWrapper.tsx`
- `src/components/region/modules/GeographyModule.tsx`
- `src/components/region/modules/HistoryModule.tsx`
- `src/components/region/modules/CultureModule.tsx`
- `src/components/region/modules/GastronomyModule.tsx`
- `src/components/region/modules/EconomyModule.tsx`
- `src/components/region/modules/SportsModule.tsx`

#### Rationale & Structure
Replace arbitrary brutalist classes:
- Replace `rounded-3xl` with `rounded-2xl`
- Replace `border-2 border-brand-espresso` with `border border-brand-sand` (or `border border-stone-200`)
- Replace `shadow-[6px_6px_0_#18130F]` / `shadow-[8px_8px_0_#18130F]` with `shadow-card hover:shadow-card-hover transition-shadow`

#### Verification
1. Build verification: `npm run build`.
2. Visual check: Cards appear refined, elegant, and light-weight with subtle shadows matching the Monocle editorial masthead, rather than heavy comic-book brutalist blocks.

---

## 8. Layout Overflow & Responsiveness Validation Matrix

| Target Viewport | Target Width | Surface Verified | Layout Specification | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile S** | 320px | Hero Poster Lines | Must wrap without horizontal overflow | Verified with clamp/wrap adjustments |
| **Mobile Standard** | 375px | Bento Grid | 1 column vertical stack, 0px horizontal overflow | Verified; 0px overflow |
| **Tablet Portrait** | 768px | Bento Grid | 2 column balanced layout | Needs Plan 4 (`md:grid-cols-2`) |
| **Tablet Landscape** | 1024px | Metrics Strip | 4 columns x 2 rows, clean label fit | Needs Plan (`xl:grid-cols-8`) |
| **Desktop Standard** | 1280px–1440px | RegionView & SideReadingGuide | No overlap between guide and content | Needs Plan 2 (`2xl:flex`) |
| **Wide Desktop** | 1536px+ | Full Layout | Content max width 1440px centered, reading guide in clear margin | Verified |

---

## 9. Conclusion

The Terra Brasilis UI features an exceptionally rich cultural foundation and strong visual concepts. Implementing the five concrete plans above will:
1. Restore the orphaned `ScrollSpyNav` component to make region navigation functional on all screen sizes.
2. Eliminate layout collisions caused by `SideReadingGuide` on standard laptops and monitors.
3. Fix silent CSS styling bugs caused by undeclared Tailwind token aliases.
4. Align the card presentation with the Monocle/National Geographic editorial design vision.
5. Provide a responsive 2-column layout for tablet users.
