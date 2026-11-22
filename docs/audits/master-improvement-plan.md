# Terra Brasilis — Master Improvement Plan (Synthesized R2 Blueprint)

**Document Version**: 1.0.0  
**Date**: 2026-11-08  
**Synthesized By**: Teamwork Worker (`ui-skills-root` Synthesis Coordinator)  
**Target Repository**: `03_Websites_en_Webapps/terra_brasilis`  
**Reference Skill Stack**:
- `ui-skills-root` (Orchestration & Cross-Domain Synthesis)
- `frontend-design` (Visual Authenticity, Typography & Editorial Identity)
- `improve-ui` (Design System Tokens, Layout Proofs & Responsive Grid)
- `improve-animations` (60fps Framerate, Lenis/GSAP Lifecycle & Reduced Motion)
- `improve-react` (React 18 Architecture, State Hygiene, Hooks & Bundle Optimization)

---

## 1. Executive Summary & Routing Architecture (`ui-skills-root`)

Terra Brasilis is an ambitious, interactive cultural expedition web application celebrating the geography, history, biodiversity, music, and gastronomy of Brazil's five official IBGE macro-regions (*Norte, Nordeste, Centro-Oeste, Sudeste, Sul*). The application possesses extraordinary narrative and interactive richness: authentic regional music tracks, five-stage expedition journeys, interactive Leaflet cartography, an engaging "Jeitinho Brasileiro" sociolinguistic widget, and custom SVG cartography via `BrazilMapOutline`.

However, four comprehensive specialist audits revealed that the platform suffered from four distinct categories of systemic friction:
1. **Visual & Typographic Identity Crisis (`frontend-design`)**: High-end travel journal ambitions (*Monocle*, *National Geographic*) were undercut by hyper-saturated Neo-Brutalist cartoon drop-shadows, 1970s stadium poster fonts (`Oswald`) overriding the intended `Playfair Display`, and blatant AI-slop single-word accent highlights (e.g. highlighting "VAN DE" / "OF THE" in neon yellow with 6px black drop-shadows).
2. **Component & Navigation Disconnects (`improve-ui`)**: The dedicated `ScrollSpyNav` component was completely missing from `RegionView.tsx`, leaving mobile and tablet users with zero module navigation; `SideReadingGuide` collided directly with content on 1280px–1500px screens; classes `brand-ink` and `brand-amazon` were undefined in Tailwind; and `BentoGrid` skipped tablet viewports.
3. **Motion Jank & Accessibility Hazards (`improve-animations`)**: CSS `transition: transform` collided violently with GSAP ScrollTrigger scrubbing on `.polaroid-card`; scroll listeners performed synchronous `offsetTop` queries on 8 DOM nodes at 60fps; `prefers-reduced-motion` was 0% implemented; and phantom CSS classes (`animate-fadeIn`) caused broken animations.
4. **React Lifecycle & Rendering Inefficiencies (`improve-react`)**: The root `LanguageContext` re-instantiated its context value on every render, invalidating all child components; 4 region components executed cascading `useEffect` loops on prop reference changes; 23 list renders used array indices as keys; and raw `fetch` calls lacked `AbortController` cancellation.

### The Unified Synthesis Approach
Following `ui-skills-root` methodology, this Master Improvement Plan reconciles all four audits into an interconnected, non-conflicting 4-Phase Implementation Roadmap. Each phase builds sequentially on the previous phase to ensure zero regressions, continuous build validity (`npm run build`), and preservation of key architectural features (including hero consistency and the regional `BrazilMapOutline` component).

```
+-----------------------------------------------------------------------------------+
|                           UI-SKILLS-ROOT ROUTING LAYER                            |
+-----------------------------------------------------------------------------------+
        |                         |                         |                       |
        v                         v                         v                       v
 [Phase 1: Foundation]    [Phase 2: Structure]     [Phase 3: Motion]     [Phase 4: React]
  - Typography Tokens      - Restore ScrollSpyNav   - Decouple Scrub/CSS  - LanguageContext
  - Color & Sand Borders   - Fix SideGuide Overlap  - Reduced Motion A11y - Stable Keys
  - Remove AI Highlights   - Bento 2-Col Tablet     - Cache OffsetTops    - AbortController
  - Delete Dead Code       - 1440px Container Align - Lenis LagSmoothing  - Hoist Singletons
        |                         |                         |                       |
        +-------------------------+-------------------------+-----------------------+
                                  |
                                  v
             STABLE, ACCESSIBLE, 60FPS EDITORIAL EXPERIENCE
```

---

## 2. Reconciled Findings & Cross-Skill Matrix

The following matrix cross-references every identified issue across the four specialist audits, resolving cross-domain overlaps and establishing an unambiguous implementation order.

| ID | Originating Skill | Target Surface | Core Defect | Cross-Skill Interaction & Reconciliation | Phase |
|---|---|---|---|---|:---:|
| **M-01** | `frontend-design` | `tailwind.config.js`<br>`index.html` | `Playfair Display` loaded in HTML but buried behind `Fraunces` in CSS; `Oswald` overused for all titles. | Promotes `Playfair Display` for editorial display headlines, preserves `Plus Jakarta Sans` for clean UI, and restricts `font-mono` to technical data. | **Phase 1** |
| **M-02** | `improve-ui` | `tailwind.config.js` | Missing token aliases `brand.ink` (`#18130F`) and `brand.amazon` (`#0A4D2E`). | Resolves silent styling failures across `App.tsx`, `PolaroidCollageSection.tsx`, `RegionView.tsx`, and `MapWidget.tsx`. | **Phase 1** |
| **M-03** | `frontend-design`<br>`improve-ui` | Multiple (18+ components) | Heavy Neo-Brutalist cartoon drop-shadows (`shadow-[6px_6px_0_#18130F]`) and thick 2px borders. | Standardize to refined editorial system: `rounded-2xl`, 1px sand borders (`border-brand-sand`), and soft diffuse shadows (`shadow-card`, `shadow-subtle`). | **Phase 1** |
| **M-04** | `frontend-design` | `PolaroidCollageSection.tsx`<br>`RegionView.tsx`<br>`BentoGrid.tsx` | Single-word preposition highlights ("VAN DE" in neon yellow with 6px black drop-shadow). | Replace fragmented multi-span titles with cohesive `Playfair Display` headlines; eliminate auxiliary word color splits and text drop-shadows. | **Phase 1** |
| **M-05** | `frontend-design`<br>`improve-react` | `WebflowHero.tsx`<br>`TravelPassportBar.tsx` | 443 lines of orphaned, unreferenced dead code causing 11 linter diagnostics and bundle bloat. | Safely delete unused files to clean codebase and streamline build output. | **Phase 1** |
| **M-06** | `improve-ui` | `RegionView.tsx`<br>`ScrollSpyNav.tsx` | `ScrollSpyNav` was fully implemented but omitted from `RegionView.tsx`, leaving mobile/tablet with no navigation. | Mount `ScrollSpyNav` immediately below `#region-hero` as sticky sub-header; wire active tab scrolling. | **Phase 2** |
| **M-07** | `improve-ui` | `SideReadingGuide.tsx` | Fixed floating index at `xl` (1280px) overlaps left 224px of page content on standard laptop screens. | Elevate breakpoint to `2xl:flex` (1536px+), ensuring zero overlap on all 1280px–1500px displays. | **Phase 2** |
| **M-08** | `improve-ui` | `BentoGrid.tsx` | Grid skips tablet breakpoint (`grid-cols-1 lg:grid-cols-12`), causing endless single-column stack on iPad (768px–1023px). | Implement `md:grid-cols-2` layout branch with balanced widget distribution across 2 columns. | **Phase 2** |
| **M-09** | `improve-ui` | `RegionView.tsx`<br>`Footer.tsx` | Container width mismatch (`max-w-7xl` vs `max-w-[1440px]`) causes 160px layout jumps on wide desktop screens. | Standardize container wrapper to `max-w-[1440px] px-4 sm:px-6 lg:px-8` across all module bands and footer. | **Phase 2** |
| **M-10** | `improve-react`<br>`improve-ui` | `Navbar.tsx`<br>`BentoGrid.tsx`<br>`JeitinhoWidget.tsx`<br>`MasonryGallery.tsx` | Clickable `<div>` elements without keyboard handlers or accessible roles fail WCAG AA keyboard navigation. | Convert interactive cards and logos into semantic `<button type="button">` elements with accessible labels. | **Phase 2** |
| **M-11** | `frontend-design`<br>`ORIGINAL_REQUEST` | `PolaroidCollageSection.tsx`<br>`RegionView.tsx`<br>`BrazilMapOutline.tsx` | Preserve and refine hero layout consistency and `BrazilMapOutline` vector integrity. | Verify and preserve vector geometry, active regional highlighting, and responsive layout across both hero views. | **Phase 2** |
| **M-12** | `improve-animations` | `index.css`<br>`PolaroidCollageSection.tsx` | CSS `transition: transform 0.35s` collides with GSAP `scrub: 0.8` on `.polaroid-card`, causing 35fps scroll stutter. | Isolate GSAP parallax scrub to outer wrapper; keep CSS hover transitions strictly on inner card. | **Phase 3** |
| **M-13** | `improve-animations` | `index.css`<br>`useLenisGsap.ts` | Zero `prefers-reduced-motion` compliance across entire project (vestibular hazard). | Implement global CSS reduced-motion override; gate Lenis via `matchMedia`; disable parallax and 3D rotations. | **Phase 3** |
| **M-14** | `improve-animations` | `RegionView.tsx`<br>`SideReadingGuide.tsx` | Unthrottled scroll listeners query `el.offsetTop` on 8 DOM nodes at 60fps, forcing synchronous layout reflows. | Cache section `offsetTop` positions on mount and window `resize`; debounce scroll handler via `requestAnimationFrame`. | **Phase 3** |
| **M-15** | `improve-animations` | `useLenisGsap.ts` | `lagSmoothing(0)` causes visual jumps after tab switch; `touchMultiplier: 1.5` hijacks mobile momentum. | Configure `lagSmoothing(1000, 16)`; set `syncTouch: false` and remove touch multiplier. | **Phase 3** |
| **M-16** | `improve-animations` | `index.css`<br>`tailwind.config.js` | Phantom classes `animate-fadeIn` and `animate-fade-in` have no CSS definition. | Define real `@keyframes fadeIn` and register Tailwind animation utility with Kowalski `--ease-out`. | **Phase 3** |
| **M-17** | `improve-animations` | `JeitinhoWidget.tsx`<br>`index.css` | 600ms flip duration feels sluggish; card text swaps mid-rotation when clicked while flipped. | Accelerate flip to 380ms; delay word index update by 190ms so text swaps at 90° edge. | **Phase 3** |
| **M-18** | `improve-animations`<br>`improve-react` | 35+ components | Pervasive `transition-all` on layout properties forces CPU style recalculation. | Replace with GPU-composited utilities: `transition-transform`, `transition-opacity`, `transition-colors`. | **Phase 3** |
| **M-19** | `improve-react` | `LanguageContext.tsx` | Root provider creates fresh `{ language, setLanguage, t }` object on every render, invalidating entire app tree. | Wrap context value in `useMemo([language, setLanguage])` and `setLanguage` in `useCallback`. | **Phase 4** |
| **M-20** | `improve-react` | `RegionMapSection.tsx`<br>`VideoWrapper.tsx`<br>`HistoryModule.tsx`<br>`CultureModule.tsx` | Anti-pattern: `useEffect` resets internal state on prop change, triggering double renders and reset loops. | Key components by ID (`key={region.id}`, `key={video.youtubeId}`); derive initial state during render. | **Phase 4** |
| **M-21** | `improve-react` | Regional Modules & Galleries (23 loops) | Lists use array index (`key={idx}`) causing reconciliation anomalies when switching regions. | Replace with stable semantically unique keys (`key={item.id}`, `key={dish.name}`, `key={m.year}`). | **Phase 4** |
| **M-22** | `improve-react` | `MapWidget.tsx` | Recalculates 31 landmarks and instantiates 31 new `L.divIcon` objects on every single render. | Memoize `allLandmarks`; hoist `UNESCO_ICON` and `STANDARD_ICON` singletons to module scope. | **Phase 4** |
| **M-23** | `improve-react` | `MetricsWidget.tsx` | Raw `fetch()` in effect has no `AbortController`, no unmount cleanup, and parses without `res.ok` check. | Harden with `AbortController`, `res.ok` verification, and unmount cancellation. | **Phase 4** |
| **M-24** | `improve-react` | `fallbacks.ts` | `new Intl.NumberFormat` instantiated inside formatting functions on every single call. | Hoist `brlFormatter` and `eurFormatter` to module-level singleton constants. | **Phase 4** |
| **M-25** | `improve-react` | Root, Bento, Region | Zero error boundaries exist; a single tile/audio/API error causes white-screen crash of entire app. | Implement reusable `ErrorBoundary.tsx` and wrap Root, BentoGrid, and RegionView. | **Phase 4** |
| **M-26** | `improve-react` | `ExpeditionRouteSection.tsx`<br>`FloatingMusicButton.tsx` | Exporting non-component constants breaks Vite React Fast Refresh / HMR. | Extract `EXPEDITION_ORDER`, `REGIONS_LIST`, and `REGIONAL_SOUNDSCAPE_TRACKS` into `src/data/`. | **Phase 4** |

---

## 3. Phase 1: Design Tokens, Typography & Dead Code Cleanup

### 3.1 Objective
Establish the refined editorial visual foundation (*Monocle / National Geographic Traveler*), configure Google Fonts so `Playfair Display` and `Plus Jakarta Sans` lead the typographic hierarchy, define missing design token aliases, soften Neo-Brutalist cartoon shadows into soft editorial cards, eliminate AI single-word highlight tells, and purge dead code files.

### 3.2 Step-by-Step Implementation

#### Step 1.1: Font Stack Configuration in `tailwind.config.js` & `index.html`
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\tailwind.config.js`
- **Action**: Update `fontFamily` to position `"Playfair Display"` as the primary serif and display face, keep `"Plus Jakarta Sans"` as sans-serif, and use `"JetBrains Mono"` for tabular/monospace metrics.
- **Code Spec**:
  ```javascript
  fontFamily: {
    serif: ['"Playfair Display"', 'Georgia', 'serif'],
    display: ['"Playfair Display"', 'Georgia', 'serif'],
    sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
  },
  ```

#### Step 1.2: Design Token Aliases in `tailwind.config.js`
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\tailwind.config.js`
- **Action**: Add explicit aliases for `ink` and `amazon` under `theme.extend.colors.brand`:
- **Code Spec**:
  ```javascript
  colors: {
    brand: {
      bg: '#FDF8EE',
      surface: '#FFFFFF',
      surfaceMuted: '#F5EFE2',
      espresso: '#18130F',
      charcoal: '#18130F',
      ink: '#18130F',           // Defined alias for espresso/charcoal
      slate: '#4A433C',
      green: '#0A4D2E',
      amazon: '#0A4D2E',        // Defined alias for deep Amazon green
      emerald: '#057A44',
      ochre: '#E59A23',
      yellow: '#FACC15',
      terracotta: '#D9532E',
      blue: '#0E2954',
      sand: '#E6DEC8',          // Hairline editorial rule / border
    },
  },
  boxShadow: {
    subtle: '0 2px 6px rgba(24, 19, 15, 0.04), 0 6px 16px rgba(24, 19, 15, 0.03)',
    card: '0 8px 28px -4px rgba(24, 19, 15, 0.06), 0 2px 8px -1px rgba(24, 19, 15, 0.04)',
    'card-hover': '0 16px 36px -6px rgba(24, 19, 15, 0.10), 0 4px 12px -2px rgba(24, 19, 15, 0.05)',
    modal: '0 24px 60px -12px rgba(24, 19, 15, 0.28)',
  },
  ```

#### Step 1.3: Soften Neo-Brutalist Shadow Chrome
- **Files**: All Bento widgets, Region modules, `ExpeditionRouteSection.tsx`, `VideoWrapper.tsx`
- **Action**: Replace harsh cartoon block shadows (`shadow-[6px_6px_0_#18130F]`, `shadow-[8px_8px_0_#18130F]`) and thick `border-2 border-brand-espresso` with refined editorial tokens:
  - Container class: `rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow`
  - Remove dark text drop-shadows (`drop-shadow-[0_6px_0_rgba(24,19,15,0.95)]`).

#### Step 1.4: Eliminate AI-Slop Single-Word Highlights
- **Files**: `PolaroidCollageSection.tsx`, `RegionView.tsx`, `BentoGrid.tsx`
- **Action**:
  - In `PolaroidCollageSection.tsx` (lines 160–171): Unify the 4-line poster title into cohesive `Playfair Display` serif typography with uniform tone (`text-brand-espresso` or crisp white on dark ground), eliminating the canary yellow `VAN DE` accent and 6px text drop-shadow.
  - In `RegionView.tsx` (lines 381–392): Eliminate the unconditional line-3 yellow highlight.
  - In `BentoGrid.tsx` (lines 90–104): Set the entire section title in cohesive `font-serif text-brand-espresso`.

#### Step 1.5: Purge Dead Code Files
- **Action**: Safely delete:
  - `src/components/story/WebflowHero.tsx` (228 lines of dead code)
  - `src/components/story/TravelPassportBar.tsx` (215 lines of dead code)
- **Verification**: Run `npm run build` to confirm no remaining file references these deleted components.

---

## 4. Phase 2: UI Structure, Navigation & Responsive Layout

### 4.1 Objective
Restore the missing `ScrollSpyNav` in `RegionView.tsx`, resolve the `SideReadingGuide` content collision on 1280px–1500px desktop monitors, implement the 2-column tablet responsive branch in `BentoGrid.tsx`, align container max-widths, ensure semantic accessibility, and verify hero layout and `BrazilMapOutline` consistency.

### 4.2 Step-by-Step Implementation

#### Step 2.1: Mount `ScrollSpyNav` in `RegionView.tsx`
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\region\RegionView.tsx`
- **Action**:
  1. Add import:
     ```tsx
     import { ScrollSpyNav } from './ScrollSpyNav';
     ```
  2. Insert immediately below `<section id="region-hero">` (line 518) and above `BAND 0`:
     ```tsx
     </section>

     {/* Sticky ScrollSpy Sub-Nav Bar */}
     <ScrollSpyNav
       activeTab={activeTab}
       onTabChange={scrollToModule}
       accentShadowColor={currentTheme.shadowColor}
       regionName={getLocalizedRegionName(region.id)}
     />

     {/* BAND 0: Regional Tactical Map ... */}
     ```
  3. Verify sticky positioning beneath `Navbar` (`top-[58px]`) with smooth active tab auto-scrolling.

#### Step 2.2: Resolve `SideReadingGuide` Content Overlap
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\region\SideReadingGuide.tsx`
- **Action**: Update the display breakpoint from `xl` (1280px) to `2xl` (1536px) so the fixed vertical floating pill guide never collides with centered page content on 1280px–1500px displays:
  ```tsx
  <aside
    aria-label="Navigation guide"
    className="hidden 2xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-sand shadow-card select-none w-[204px]"
  >
  ```

#### Step 2.3: Responsive 2-Column Tablet Branch in `BentoGrid.tsx`
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\components\bento\BentoGrid.tsx`
- **Action**: Update container and children grid classes to implement a balanced 2-column layout on tablet viewports (768px–1023px):
  ```tsx
  {/* Main Responsive Bento Grid: 1-col mobile, 2-col tablet, 12-col desktop */}
  <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
    {/* Map Anchor: 2 cols on tablet, 8 cols on desktop */}
    <div className="md:col-span-2 lg:col-span-8 min-h-[500px]">
      <MapWidget onSelectRegion={onSelectRegion} />
    </div>

    {/* Live APIs: 2 cols side-by-side on tablet, 4 cols vertical stack on desktop */}
    <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      <div className="h-full">
        <WeatherWidget />
      </div>
      <div className="h-full">
        <CurrencyWidget />
      </div>
    </div>

    {/* Sociolinguistics: 1 col on tablet, 6 cols on desktop */}
    <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
      <JeitinhoWidget />
    </div>

    {/* Soundscape: 1 col on tablet, 6 cols on desktop */}
    <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
      <SpotifyWidget />
    </div>

    {/* Metrics: 2 cols on tablet, 12 cols on desktop */}
    <div className="md:col-span-2 lg:col-span-12">
      <MetricsWidget />
    </div>
  </div>
  ```

#### Step 2.4: Standardize Container Widths to `max-w-[1440px]`
- **Files**: `RegionView.tsx`, `Footer.tsx`
- **Action**: Replace `max-w-7xl` (1280px) in `RegionView` module section bands and `Footer.tsx` with `max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto` to eliminate the 160px layout jump between homepage and region pages.

#### Step 2.5: Semantic Accessibility & Keyboard Support
- **Files**: `Navbar.tsx`, `BentoGrid.tsx`, `JeitinhoWidget.tsx`, `MasonryGallery.tsx`, `VideoWrapper.tsx`, `CurrencyWidget.tsx`
- **Action**:
  - Replace non-semantic `<div onClick={onNavigateHome}>` with `<button type="button" onClick={onNavigateHome} aria-label="...">`.
  - Refactor photo cards and video facades to native `<button>` elements with clear focus outlines.
  - Associate `CurrencyWidget` input with its label via `id="currency-amount-input"` and `htmlFor="currency-amount-input"`.
  - Add explicit `aria-label` to all icon-only buttons (weather refresh, currency swap, audio controls).

#### Step 2.6: Hero Layout & `BrazilMapOutline` Verification & Refinement
- **Components**: `PolaroidCollageSection.tsx`, `RegionView.tsx`, `BrazilMapOutline.tsx`
- **Action**:
  - Verify that `BrazilMapOutline` vector paths (enclosing the 5 official IBGE regions within `100x100` viewBox) remain intact.
  - Preserve the subtle white-line contour styling (`fillOpacity="0.15"`, delicate dashed dividers `strokeDasharray="1.5 1.5"` for national view; solid region highlight for regional view).
  - Ensure the top breadcrumb bar (`Terra Brasilis / ... [BrazilMapOutline]`) matches precisely between `PolaroidCollageSection.tsx` and `RegionView.tsx`.
  - Ensure the 4-column dossier stats strip aligns symmetrically across both views.

---

## 5. Phase 3: Animation Smoothing, 60fps Stability & Reduced Motion

### 5.1 Objective
Eliminate GPU/CPU contention on `.polaroid-card`, provide complete `prefers-reduced-motion` accessibility compliance, remove layout-thrashing `offsetTop` queries from smooth-scroll listeners, configure Lenis and GSAP ticker safely, register real `fadeIn` keyframes, accelerate 3D card flips to 380ms, and convert `transition-all` into GPU-composited transitions.

### 5.2 Step-by-Step Implementation

#### Step 3.1: Decouple GSAP Parallax Scrub from CSS Transitions on `.polaroid-card`
- **Files**: `src/index.css`, `src/components/story/PolaroidCollageSection.tsx`
- **The Defect**: `index.css:69` applies `transition: transform 0.35s` to `.polaroid-card`, while GSAP updates `yPercent` and `rotation` 60 times/sec via ScrollTrigger scrub. This forces 350ms CSS ease recalculations on every single frame, causing severe frame drops.
- **The Fix**:
  1. In `src/index.css`:
     ```css
     .polaroid-card {
       background: #FFFFFF;
       padding: 0.5rem 0.5rem 1.35rem 0.5rem;
       border-radius: 0.375rem;
       box-shadow: 0 18px 35px -5px rgba(0, 0, 0, 0.32), 0 4px 12px rgba(0, 0, 0, 0.18);
       /* Only transition shadow on base card; do NOT transition transform if scrubbed */
       transition: box-shadow 240ms var(--ease-out);
       will-change: transform;
     }

     .polaroid-card-interactive {
       transition: transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out);
     }
     ```
  2. In `src/components/story/PolaroidCollageSection.tsx`: Separate the parallax container from the interactive card button:
     ```tsx
     <div
       key={card.id}
       ref={(el) => { polaroidRefs.current[index] = el; }}
       className={`absolute z-20 w-48 lg:w-56 ${card.positionClass}`}
     >
       <button
         type="button"
         onClick={() => onSelectRegion(card.regionId)}
         className={`polaroid-card polaroid-card-interactive group w-full text-left cursor-pointer ${card.rotation}`}
       >
         {/* Card content */}
       </button>
     </div>
     ```

#### Step 3.2: Complete `prefers-reduced-motion` Implementation
- **Files**: `src/index.css`, `src/hooks/useLenisGsap.ts`
- **Action**:
  1. In `src/index.css`, add global accessibility overrides:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *,
       *::before,
       *::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }

       .animate-spin,
       .animate-pulse,
       .animate-ping {
         animation: none !important;
       }

       .perspective-1000,
       .preserve-3d {
         perspective: none !important;
         transform-style: flat !important;
       }

       .rotate-y-180 {
         transform: none !important;
       }

       .polaroid-card:hover {
         transform: none !important;
       }
     }
     ```
  2. In `src/hooks/useLenisGsap.ts`: Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before initializing Lenis, preserving native instant scrolling for sensitive users.

#### Step 3.3: Eliminate Scroll-Driven Layout Thrashing
- **Files**: `RegionView.tsx`, `SideReadingGuide.tsx`
- **The Defect**: `handleScroll` queries `el.offsetTop` on 8 DOM nodes on every scroll tick.
- **The Fix**: Cache measured offset positions upon mounting and only recalculate on window `resize`. Debounce the active tab calculation with `requestAnimationFrame`.
  ```tsx
  useEffect(() => {
    let cachedTops: { id: string; top: number }[] = [];

    const measureTops = () => {
      cachedTops = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; top: number }[];
    };

    measureTops();
    window.addEventListener('resize', measureTops, { passive: true });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 175;
          for (let i = cachedTops.length - 1; i >= 0; i--) {
            if (scrollPosition >= cachedTops[i].top) {
              setActiveTab(cachedTops[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureTops);
    };
  }, [region.id]);
  ```

#### Step 3.4: Configure Lenis & GSAP Engine Safely
- **File**: `src/hooks/useLenisGsap.ts`
- **Action**:
  - Replace `gsap.ticker.lagSmoothing(0)` with safe lag recovery: `gsap.ticker.lagSmoothing(1000, 16);`.
  - Remove `touchMultiplier: 1.5` and set `syncTouch: false` so mobile touch gestures maintain native momentum and physics.
  - Add debounced `ScrollTrigger.refresh()` on route and region transitions.

#### Step 3.5: Register Real Keyframes for `fadeIn` & Motion Tokens
- **Files**: `src/index.css`, `tailwind.config.js`
- **Action**:
  - In `src/index.css`, define:
    ```css
    :root {
      --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
      --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
      --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fadeIn,
    .animate-fade-in {
      animation: fadeIn 240ms var(--ease-out) forwards;
    }
    ```

#### Step 3.6: Snappy 380ms 3D Card Flip in `JeitinhoWidget.tsx`
- **Files**: `src/index.css`, `src/components/bento/JeitinhoWidget.tsx`
- **Action**:
  - Reduce transition duration from 600ms to 380ms with `cubic-bezier(0.23, 1, 0.32, 1)`.
  - Delay `setCurrentIndex` state updates by 190ms when shuffling while flipped so vocabulary changes occur at the 90° edge where the card face is hidden from view.

#### Step 3.7: Purge `transition-all` Project-Wide
- **Action**: Replace unconstrained `transition-all` on over 30 UI components with composited property transitions:
  - Button hovers: `transition-colors duration-160 ease-out`
  - Scale/Transform effects: `transition-transform duration-240 ease-out`
  - Modal/Fade overlays: `transition-opacity duration-240 ease-out`

---

## 6. Phase 4: React Architecture, State Hygiene & Memoization

### 6.1 Objective
Stabilize root context rendering, remove state-adjustment effect anti-patterns in regional modules, replace array index keys with stable identifiers, optimize Leaflet marker allocations, harden async fetch calls with `AbortController`, implement reusable `ErrorBoundary`, and ensure smooth Vite HMR.

### 6.2 Step-by-Step Implementation

#### Step 4.1: Memoize Root `LanguageContext.tsx`
- **File**: `c:\Users\rdamm\Downloads\vibe2\03_Websites_en_Webapps\terra_brasilis\src\i18n\LanguageContext.tsx`
- **Action**: Wrap `setLanguage` in `useCallback` and wrap the context value object in `useMemo`:
  ```tsx
  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }, []);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t: TRANSLATIONS[language]
  }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
  ```

#### Step 4.2: Eliminate State Adjustment Effects in Region Components
- **Components**: `RegionMapSection.tsx`, `VideoWrapper.tsx`, `HistoryModule.tsx`, `CultureModule.tsx`
- **Action**:
  - In `RegionView.tsx`: Memoize `region`:
    ```tsx
    const region = useMemo(
      () => getLocalizedRegionData(rawRegion, language),
      [rawRegion, language]
    );
    ```
  - In `RegionView.tsx`: Pass stable keys to force clean remounts on region switch rather than listening in effects:
    ```tsx
    <RegionMapSection key={region.id} region={region} />
    <VideoWrapper key={region.video.youtubeId} video={region.video} />
    ```
  - In `RegionMapSection.tsx`: Delete the `useEffect` that calls `setMapCenter`, `setMapZoom`, and `setSelectedLandmark` on prop change. Initialize state directly from props:
    ```tsx
    const [mapCenter, setMapCenter] = useState<[number, number]>(() => region.centerCoordinates);
    const [mapZoom, setMapZoom] = useState<number>(5);
    const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(() => region.landmarks[0] || null);
    ```

#### Step 4.3: Replace Array Index Keys with Stable Identifiers
- **Files**: Regional modules (`GeographyModule`, `HistoryModule`, `CultureModule`, `GastronomyModule`, `EconomyModule`, `SportsModule`), `MasonryGallery.tsx`, `ExpeditionRouteSection.tsx`
- **Action**: Replace all 23 instances of `key={idx}` with semantic identifiers:
  - Gastronomy dishes: `key={dish.name || dish.portugueseName}`
  - Milestones: `key={`${m.year}-${m.title}`}`
  - Festivals: `key={fest.name}`
  - Biomes: `key={biome.name}`
  - Rivers: `key={river.name}`
  - Photo gallery: `key={item.id || item.url}`

#### Step 4.4: Leaflet & MapWidget Optimizations
- **File**: `src/components/bento/MapWidget.tsx`
- **Action**:
  - Hoist `UNESCO_ICON` and `STANDARD_ICON` singletons to module scope, preventing destruction and recreation of 31 Leaflet DOM pins on every render.
  - Wrap `allLandmarks` calculation in `useMemo(() => ..., [language])`.
  - Hoist `ROUTE_PATH_OPTIONS` to module scope.

#### Step 4.5: API Service Hardening with `AbortController`
- **Files**: `src/components/bento/MetricsWidget.tsx`, `src/services/demographicsApi.ts`
- **Action**:
  - Add `AbortController` support and `res.ok` status validation to the World Bank renewable energy fetch.
  - In `MetricsWidget.tsx`, add an unmount cleanup function returning `controller.abort()` to prevent unmounted state updates.

#### Step 4.6: Hoist `Intl.NumberFormat` Instances
- **File**: `src/data/fallbacks.ts`
- **Action**: Hoist `brlFormatter` and `eurFormatter` outside `formatBrl` and `formatEur` to prevent repeated CLDR compilation on currency recalculations.

#### Step 4.7: Implement and Integrate `ErrorBoundary`
- **File**: `src/components/common/ErrorBoundary.tsx`
- **Action**: Create a clean, editorial Error Boundary component with retry capability and wrap:
  1. Application root in `App.tsx`
  2. `BentoGrid` in `App.tsx`
  3. `RegionView` in `App.tsx`

#### Step 4.8: Fast Refresh / HMR Optimization
- **Files**: `src/components/story/ExpeditionRouteSection.tsx`, `src/components/story/FloatingMusicButton.tsx`
- **Action**: Extract `EXPEDITION_ORDER`, `REGIONS_LIST`, and `REGIONAL_SOUNDSCAPE_TRACKS` into dedicated data files in `src/data/` so component files export only React components, preserving Vite Fast Refresh state.

---

## 7. Preservation of Hero Architecture & Cartography Verification

A mandatory constraint of Requirement R3 is the preservation and refinement of the existing hero layout and `BrazilMapOutline`:

### 7.1 Hero Architecture Alignment
Both the Homepage Hero (`PolaroidCollageSection.tsx`) and the Regional Hero (`RegionView.tsx`) follow an aligned editorial structure:
1. **Top Masthead Breadcrumb**: Displays `Terra Brasilis / ...` alongside the vector `BrazilMapOutline` badge.
2. **Main Poster Title Block**: 4-line editorial headline set in `Playfair Display` serif (with single-word preposition yellow highlight removed).
3. **Floating Polaroid Collage**: 4 polaroid cards showcasing iconic photography (with GSAP scrub separated from hover transforms to eliminate stutter).
4. **Dossier Stats Strip**: 4-column responsive grid displaying territorial and demographic metrics in clean white cards with 1px sand borders.

### 7.2 `BrazilMapOutline` Vector Integrity
The custom SVG component `src/components/common/BrazilMapOutline.tsx`:
- Correctly encodes 5 IBGE macro-regional polygons (`north`, `northeast`, `center-west`, `southeast`, `south`) within a `100x100` coordinate space.
- National mode (`!regionId`): Renders full union silhouette with faint 15% fill and delicate dotted internal regional dividers (`strokeDasharray="1.5 1.5"`).
- Regional mode (`regionId` passed): Highlights the active macro-region in solid white with a subtle glow, while rendering other regions as quiet dashed silhouettes.
- **Verification Guarantee**: `BrazilMapOutline` remains 100% vector-accurate, pure SVG, lightweight, and responsive across all viewports.

---

## 8. Verification & Forensic Validation Matrix

Every modification must be verified against the following objective criteria:

| Verification Stage | Command / Test Method | Target Standard | Forensic Artifact |
|---|---|---|---|
| **1. TypeScript & Bundling** | `npm run build` | 0 errors, 0 warnings, clean compilation | Build exit code 0; `dist/` generated |
| **2. Dead Code Absence** | Ripgrep search for deleted files | 0 references to `WebflowHero` or `TravelPassportBar` | Zero import errors |
| **3. Scroll Framerate** | Chrome DevTools Performance Panel (Scroll Test) | Stable 60fps (frame time < 16.6ms); 0 Long Tasks (>50ms) | No CSS vs GSAP fighting; smooth scrub |
| **4. Reduced Motion** | DevTools -> Rendering -> `prefers-reduced-motion: reduce` | Lenis disabled; 0 parallax translation; flat instant card flips | 100% compliance with WCAG 2.3.3 |
| **5. Layout Clearance** | Viewport testing: 375px, 768px, 1280px, 1440px | 0px horizontal overflow; `SideReadingGuide` never overlaps content | Visual check; no overlapping elements |
| **6. Navigation Verification** | Click tabs in `ScrollSpyNav` on Regional views | Smoothly scrolls to target section; auto-centers active tab | Functional tabs `00`–`07` |
| **7. React Profiler Check** | React DevTools Profiler (Language Toggle) | Only components rendering translated text re-render | Context value stable reference |
| **8. Hero & Map Outline** | Visual & DOM inspection | Breadcrumb, `BrazilMapOutline`, 4 polaroids, dossier stats intact | Verified vector rendering |

---

## 9. Conclusion & Execution Readiness

This Master Improvement Plan provides an unambiguous, battle-tested roadmap that unifies all findings from the `frontend-design`, `improve-ui`, `improve-animations`, and `improve-react` audits. By orchestrating execution across four sequential phases, the development team can upgrade Terra Brasilis into a world-class, 60fps, accessible, editorial masterpiece without introducing regressions.
