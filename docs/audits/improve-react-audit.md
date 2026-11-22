# React Architecture & Performance Audit: Terra Brasilis

**Date**: 2026-11-08  
**Auditor**: Teamwork Explorer (`improve-react` senior advisor)  
**Target Repository**: `03_Websites_en_Webapps/terra_brasilis`  
**Target Commit / Tree**: Clean development snapshot (Vite 6 + React 18.3.1 + TypeScript 5.7.3)  
**Primary Output**: `c:\Users\rdamm\Downloads\vibe2\.agents\teamwork\explorer_improve_react\improve-react-audit.md`  

---

## 1. Executive Summary & Recon Map

A comprehensive React architecture, performance, accessibility, security, and maintainability audit was executed on the Terra Brasilis application. Using `react-doctor@0.9.22` as an evidence baseline combined with senior code-level architectural analysis, 102 static diagnostic occurrences were identified, triaged, and evaluated against runtime execution paths.

### 1.1 Technical Stack & Capabilities Recon
- **React Core**: React `18.3.1` + `react-dom` `18.3.1` (Concurrent Features active, StrictMode compatible).
- **TypeScript**: TypeScript `5.7.3` in strict mode.
- **Build System**: Vite `6.1.0` with `@vitejs/plugin-react` `4.3.4`.
- **Styling**: Tailwind CSS `3.4.17` with custom brutalist/editorial theme tokens.
- **State & Context**: React Context (`LanguageContext`), local state (`useState`, `useRef`), URL hash routing.
- **Libraries**: Leaflet `1.9.4` + `react-leaflet` `4.2.1`, GSAP `3.15.1` + `ScrollTrigger`, Lenis `1.3.27`, Lucide-React `0.475.0`.
- **Compiler**: No React Compiler configured (`hasReactCompiler: false`).
- **Initial Bundle Footprint**: Single monolithic JavaScript chunk `index-CQZSfp0S.js` (**994.3 KB** uncompressed) + `index-DfCZfcRv.css` (**66.3 KB**).

### 1.2 Diagnostic Breakdown by Category
| Category | Raw Findings | High Leverage | Medium Leverage | Low / Polish |
|---|:---:|:---:|:---:|:---:|
| **Bugs & Correctness** | 35 | 11 | 24 | 0 |
| **Performance** | 24 | 8 | 14 | 2 |
| **Accessibility (A11y)** | 33 | 14 | 18 | 1 |
| **Security** | 0 | 0 | 0 | 0 (Verified Safe) |
| **Maintainability & Architecture** | 10 | 3 | 4 | 3 |
| **Total** | **102** | **36** | **60** | **6** |

---

## 2. Leverage Map & Hot-Path Hierarchy

To avoid spending engineering effort on premature optimizations in dead or cold paths, issues are triaged by execution frequency and user blast radius:

1. **Hot Path 1: Root Context & Global State Provider (`src/i18n/LanguageContext.tsx`)**
   - *Impact*: Wraps the entire application (`<LanguageProvider> <TerraBrasilisContent /> </LanguageProvider>`).
   - *Blast Radius*: Every single component consuming `useLanguage()` (Navbar, Footer, BentoGrid, RegionView, Modules, Audio widgets) re-renders whenever `LanguageProvider` renders because `value={{ language, setLanguage, t }}` creates a new object reference on every render.
2. **Hot Path 2: Navigation & Hash Synchronization (`src/App.tsx`)**
   - *Impact*: Controls switching between Home view and 5 Regional views.
   - *Blast Radius*: Unstable inline callback allocations (`onNavigateRegion={(id) => navigateToRegion(id)}`) invalidate memoization across child trees.
3. **Hot Path 3: Interactive Leaflet Canvas & Bento Grid (`src/components/bento/MapWidget.tsx`, `BentoGrid.tsx`)**
   - *Impact*: Rendered on the homepage; controls interactive exploration of all 31 national landmarks across Brazil.
   - *Blast Radius*: Unmemoized landmark flat-mapping, inline `L.divIcon` creation on all 31 pins on every render, inline `pathOptions` object on `Polyline`.
4. **Hot Path 4: Heavy Editorial Region Modules (`src/components/region/RegionView.tsx` & `src/components/region/modules/*`)**
   - *Impact*: 900-line god component orchestrating 6 modules, Leaflet regional map, and photo galleries.
   - *Blast Radius*: `getLocalizedRegionData` generates deep fresh object references on every render, triggering cascading `useEffect` state-resetting loops in `RegionMapSection`, `CultureModule`, and `HistoryModule`.
5. **Cold / Dead Paths: Unreferenced Legacy Components (`src/components/story/WebflowHero.tsx`, `TravelPassportBar.tsx`)**
   - *Impact*: 11 diagnostics occur in `WebflowHero.tsx` and `TravelPassportBar.tsx`, which are never mounted in `App.tsx`.

---

## 3. Prioritized Audit Table

Findings are sorted strictly by leverage (**Impact ÷ Effort**).

| # | Severity | Category | Location | Rule | Finding Summary | Canonical Fix Recipe |
|---|:---:|:---:|---|---|---|---|
| **01** | **HIGH** | Performance | `src/i18n/LanguageContext.tsx:43` | `jsx-no-constructed-context-values` | Root provider creates fresh object value & functions on every render, forcing re-render of entire app | Wrap context value in `useMemo` with `[language, setLanguage]`; wrap `setLanguage` in `useCallback` |
| **02** | **HIGH** | Bugs | `src/components/region/RegionMapSection.tsx:59` | `no-adjust-state-on-prop-change` | Effect resets map center & zoom whenever `region` prop changes reference; `RegionView` recalculates `region` on every render, triggering continuous reset loops | Stabilize `region` with `useMemo` in `RegionView`; derive map defaults during render or reset via key `<RegionMapSection key={region.id} />` |
| **03** | **HIGH** | Bugs | `src/components/region/VideoWrapper.tsx:17-18` | `no-reset-all-state-on-prop-change` | Video playing state manually cleared via effect on `video.youtubeId` change, causing flash and double-render | Eliminate `useEffect`; pass `key={video.youtubeId}` to `<VideoWrapper>` at consumer call site |
| **04** | **HIGH** | Bugs | `src/components/region/modules/HistoryModule.tsx:40-52` | `no-reset-all-state-on-prop-change` + `no-effect-chain` | `activeMilestoneIdx` reset in effect on `headline` change, triggering secondary GSAP effect without cleanup | Reset milestone selection using `key={data.headline}` or state lifting; wrap GSAP animation in `gsap.context()` with cleanup |
| **05** | **HIGH** | Bugs | `src/components/region/modules/CultureModule.tsx:77-78` | `no-adjust-state-on-prop-change` | `isVideoPlaying` and `activeGenreIdx` reset via effect on prop change, causing double renders | Reset internal state by keying the module with `key={regionId}` or resetting inside event handlers |
| **06** | **HIGH** | Bugs | `src/components/bento/MetricsWidget.tsx:17-37` | `no-fetch-in-effect` + `no-fetch-response-used-without-status-check` | Raw `fetch()` in effect has no `AbortController`, no unmount cleanup, and parses JSON without checking `res.ok` | Move fetch logic to `services/demographicsApi.ts` with `AbortController`, check `res.ok`, and add cleanup return function |
| **07** | **HIGH** | Bugs | `src/components/bento/SpotifyWidget.tsx:51` | `exhaustive-deps` | `useEffect` audio initialization closes over stale `isPlayingLocal`; audio plays or fails to synchronize | Use `isPlayingLocal` ref or pass updater function; separate audio element creation from play trigger |
| **08** | **HIGH** | Bugs | `src/components/story/FloatingMusicButton.tsx:126` | `exhaustive-deps` | Effect audio setup omits `currentTrack.src`, `fallbackSrc`, and `isPlaying` from dependency array | Isolate audio instance management from play/pause state; add clean teardown and error handling |
| **09** | **HIGH** | Bugs | 23 instances in `modules/*`, `MasonryGallery`, `ExpeditionRouteSection` | `no-array-index-as-key` | Lists (festivals, dishes, milestones, rivers, biomes) use array index (`key={idx}`) instead of stable IDs | Replace `key={idx}` with stable unique keys (`key={item.id}`, `key={dish.name}`, `key={m.year}`) |
| **10** | **HIGH** | Accessibility | `src/components/common/Navbar.tsx:70` | `click-events-have-key-events` + `no-static-element-interactions` | Primary brand masthead logo click handler is an unstyled `<div>` inaccessible to keyboard / screen readers | Replace `<div onClick={onNavigateHome}>` with `<button type="button" onClick={onNavigateHome} aria-label="Terra Brasilis Home">` |
| **11** | **HIGH** | Accessibility | `src/components/bento/BentoGrid.tsx:127, 145`, `JeitinhoWidget.tsx:112` | `click-events-have-key-events` + `no-static-element-interactions` | Flip cards and interactive bento widgets use non-interactive `<div>` containers for click handling | Convert card wrappers to `<button type="button">` or add `role="button" tabIndex={0} onKeyDown={...}` |
| **12** | **HIGH** | Accessibility | `src/components/region/MasonryGallery.tsx:42`, `VideoWrapper.tsx:44` | `click-events-have-key-events` + `no-static-element-interactions` | Polaroid photo cards and click-to-play video facade use clickable `<div>` without keyboard handlers | Refactor cards into semantic `<button>` elements with clear `aria-label` describing the item |
| **13** | **HIGH** | Performance | `src/components/bento/MapWidget.tsx:89-95, 237-241` | `jsx-no-new-object-as-prop` + render allocations | Flat-mapping all 31 landmarks and instantiating 31 new `L.divIcon` objects on every single render | Wrap landmark extraction in `useMemo([language])`; hoist static `L.divIcon` singletons to module scope |
| **14** | **HIGH** | Performance | `src/components/region/RegionView.tsx:121` | Heavy render allocation | `getLocalizedRegionData` deep-clones entire regional dataset on every render of 900-line component | Wrap in `useMemo(() => getLocalizedRegionData(rawRegion, language), [rawRegion, language])` |
| **15** | **HIGH** | Performance | `src/components/region/LightboxModal.tsx:20-36` | Layout thrashing on effect loop | `document.body.style.overflow` toggled between `'hidden'` and `'auto'` on every Arrow key press | Split effect: lock body scroll only on `[isOpen]`; handle keydown navigation in a separate effect or ref |
| **16** | **MEDIUM** | Performance | 20 instances across Bento, Modules, Hero, Lightbox | `no-transition-all` | Tailwind `transition-all` animates expensive layout and compositor properties, causing frame drops | Replace `transition-all` with targeted transitions: `transition-colors`, `transition-transform`, `transition-opacity` |
| **17** | **MEDIUM** | Performance | `src/data/fallbacks.ts:527, 537` | `js-hoist-intl` | `new Intl.NumberFormat` instantiated inside `formatBrl` and `formatEur` on every function invocation | Hoist `Intl.NumberFormat` instances to module-level constants `brlFormatter` and `eurFormatter` |
| **18** | **MEDIUM** | Performance | `src/components/region/RegionView.tsx:125` | `rerender-state-only-in-handlers` | `const [activeTab, setActiveTab] = useState('region-map')` is never read in render, causing phantom re-renders | Remove unused state or replace with `useRef` if tracking without rendering |
| **19** | **MEDIUM** | Performance | `src/components/bento/MapWidget.tsx:224-232` | `jsx-no-new-object-as-prop` | `pathOptions={{ color: '#D9532E', weight: 3.5, ... }}` creates new object every render, invalidating Leaflet SVG | Hoist `ROUTE_PATH_OPTIONS` to module scope |
| **20** | **MEDIUM** | Maintainability | `src/components/story/ExpeditionRouteSection.tsx:25, 33`, `FloatingMusicButton.tsx:18` | `only-export-components` | Non-component data constants exported from component files break Vite React Fast Refresh / HMR | Move `EXPEDITION_ORDER`, `REGIONS_LIST`, and `REGIONAL_SOUNDSCAPE_TRACKS` to `src/data/` |
| **21** | **MEDIUM** | Maintainability | `src/components/region/RegionView.tsx` (900 lines), `MapWidget.tsx` (368 lines) | `no-giant-component` | God components mixing data fetching, Leaflet initialization, audio controllers, and multi-module tabs | Extract subcomponents: `RegionHero`, `RegionAudioDeck`, `RegionLandmarkDossier`, `MapFilterBar` |
| **22** | **MEDIUM** | Accessibility | `src/components/bento/CurrencyWidget.tsx:88` | `no-placeholder-only-field` | Currency input lacks explicit `id` associated with `<label htmlFor>` | Add `id="currency-amount-input"` to input and `htmlFor="currency-amount-input"` to label |
| **23** | **MEDIUM** | Accessibility | `src/components/bento/WeatherWidget.tsx:99`, `CurrencyWidget.tsx:55`, `FloatingMusicButton.tsx:176` | `control-has-associated-label` | Refresh buttons and track-switch button use title/icon only without `aria-label` | Add explicit `aria-label` attributes to all icon-only buttons |
| **24** | **LOW** | Maintainability | `src/components/story/WebflowHero.tsx`, `TravelPassportBar.tsx` | Dead code | Components exist in `src/components/story/` with 11 diagnostics but are never imported in `App.tsx` | Delete dead files or archive them in `src/components/story/deprecated/` |
| **25** | **LOW** | Performance | `src/components/region/SideReadingGuide.tsx:21-41` | Scroll event layout thrashing | `window.addEventListener('scroll')` queries `el.offsetTop` on every scroll frame without rAF throttling | Wrap scroll handler in `requestAnimationFrame` and cache section offsets |

---

## 4. Deep-Dive Section 1: Bugs & Correctness

### 4.1 State Adjustment & Mirroring Effects
**Rule**: `no-adjust-state-on-prop-change` & `no-reset-all-state-on-prop-change`  
**Locations**:
- `src/components/region/RegionMapSection.tsx:57-61`
- `src/components/region/VideoWrapper.tsx:17-19`
- `src/components/region/modules/CultureModule.tsx:76-79`
- `src/components/region/modules/HistoryModule.tsx:40-42`

#### Evidence & Analysis
In `RegionMapSection.tsx`:
```tsx
// Current code (RegionMapSection.tsx:57-61)
useEffect(() => {
  setMapCenter(region.centerCoordinates);
  setMapZoom(5);
  setSelectedLandmark(region.landmarks[0] || null);
}, [region]);
```
In `RegionView.tsx`:
```tsx
// Current code (RegionView.tsx:121)
const region = getLocalizedRegionData(rawRegion, language);
```
`getLocalizedRegionData` produces a new object reference every time `RegionView` renders. Because `region` has changed reference identity, the `useEffect` in `RegionMapSection` fires on *every single render*. When the user clicks a landmark pin to inspect it, `mapZoom` is set to 8. But if any parent state changes (e.g., audio toggle, language toggle, scroll spy), `RegionMapSection`'s effect immediately fires, resetting `mapZoom` back to 5 and resetting the selected landmark!

#### Canonical Fix Recipe
1. In `RegionView.tsx`, memoize `region`:
```tsx
const region = useMemo(
  () => getLocalizedRegionData(rawRegion, language),
  [rawRegion, language]
);
```
2. In `RegionView.tsx`, key the section so React resets state natively when the region changes:
```tsx
<RegionMapSection key={region.id} region={region} />
```
3. In `RegionMapSection.tsx`, eliminate the redundant `useEffect` entirely. Initialize state directly from `region`:
```tsx
const [mapCenter, setMapCenter] = useState<[number, number]>(() => region.centerCoordinates);
const [mapZoom, setMapZoom] = useState<number>(5);
const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(() => region.landmarks[0] || null);
```

---

### 4.2 Array Index as Key (`no-array-index-as-key`)
**Rule**: `no-array-index-as-key`  
**Locations**: 23 distinct loops across 7 files (`CultureModule.tsx`, `EconomyModule.tsx`, `GastronomyModule.tsx`, `GeographyModule.tsx`, `HistoryModule.tsx`, `SportsModule.tsx`, `MasonryGallery.tsx`).

#### Evidence
```tsx
// src/components/region/modules/GastronomyModule.tsx:127
{data.signatureDishes.map((dish, idx) => (
  <div key={idx} className="flip-card ...">
```
```tsx
// src/components/region/modules/HistoryModule.tsx:234
{data.milestones.map((m, idx) => (
  <button key={idx} onClick={() => handleSelectIdx(idx)}>
```

#### Why it's a bug
When switching between macro-regions (e.g. from North to Northeast), the length of `signatureDishes` or `milestones` may match. React reconciles DOM elements by key (`0`, `1`, `2`, ...). Child DOM nodes, flip-card transforms, and internal image loading states are retained rather than remounted. Users experience visual glitches where the previous region's card state or cached image remains visible while text updates underneath.

#### Canonical Fix Recipe
Use stable, semantically unique properties:
- Dishes: `key={dish.name || dish.portugueseName}`
- Milestones: `key={`${m.year}-${m.title}`}`
- Festivals: `key={fest.name}`
- Biomes: `key={biome.name}`
- Rivers: `key={river.name}`
- Gallery: `key={item.id || item.url}`

---

### 4.3 Async Lifecycle & Error Resilience in API Services
**Rule**: `no-fetch-in-effect` & `no-fetch-response-used-without-status-check`  
**Locations**: `src/components/bento/MetricsWidget.tsx:17-37`, `src/services/weatherApi.ts`, `src/services/currencyApi.ts`.

#### Evidence
In `MetricsWidget.tsx`:
```tsx
useEffect(() => {
  fetchBrazilDemographics().then((data) => {
    setMetrics(data);
    setLoading(false);
  });

  // World Bank fetch
  fetch('https://api.worldbank.org/v2/country/BRA/indicator/EG.ELC.RNEW.ZS?format=json&per_page=5')
    .then((res) => res.json())
    .then((json) => {
      // state update...
    })
    .catch(() => {});
}, []);
```
1. **Unmounted state updates**: If the user navigates from Home to a Region before the promise resolves, React 18 logs warnings and leaks the unresolved promise closure.
2. **Missing `res.ok` check**: `fetch()` only rejects on network failures, not on HTTP 404/500/429. Calling `res.json()` on an error response body risks parsing errors or silently failing to fall back.
3. **No AbortController on World Bank fetch**: Unlike `weatherApi.ts` and `currencyApi.ts`, the World Bank request has no timeout and cannot be aborted.

#### Canonical Fix Recipe
Extract the World Bank call to `src/services/demographicsApi.ts` with timeout & AbortController:
```ts
export async function fetchRenewableShare(signal?: AbortSignal): Promise<string> {
  try {
    const res = await fetch(
      'https://api.worldbank.org/v2/country/BRA/indicator/EG.ELC.RNEW.ZS?format=json&per_page=5',
      { signal, headers: { Accept: 'application/json' } }
    );
    if (!res.ok) throw new Error(`World Bank API error: ${res.status}`);
    const json = await res.json();
    if (Array.isArray(json) && Array.isArray(json[1])) {
      const valid = json[1].find((entry: any) => typeof entry?.value === 'number');
      if (valid && typeof valid.value === 'number') {
        return `${valid.value.toFixed(1).replace('.', ',')}%`;
      }
    }
    return '88,4%';
  } catch {
    return '88,4%';
  }
}
```
In `MetricsWidget.tsx`, handle cleanup:
```tsx
useEffect(() => {
  const controller = new AbortController();
  let isMounted = true;

  Promise.all([
    fetchBrazilDemographics(controller.signal),
    fetchRenewableShare(controller.signal)
  ]).then(([demoData, renewableVal]) => {
    if (!isMounted) return;
    setMetrics(demoData);
    setRenewableShare(renewableVal);
    setLoading(false);
  });

  return () => {
    isMounted = false;
    controller.abort();
  };
}, []);
```

---

## 5. Deep-Dive Section 2: Performance & Re-render Optimization

### 5.1 Root Context Provider Instability (`jsx-no-constructed-context-values`)
**Rule**: `jsx-no-constructed-context-values`  
**Location**: `src/i18n/LanguageContext.tsx:42-50`

#### Evidence
```tsx
// Current code (LanguageContext.tsx:42-50)
return (
  <LanguageContext.Provider
    value={{
      language,
      setLanguage,
      t: TRANSLATIONS[language]
    }}
  >
    {children}
  </LanguageContext.Provider>
);
```
Every render of `LanguageProvider` instantiates a brand new object literal `{ language, setLanguage, t }` as the Context value. Because `LanguageProvider` sits at the very root of `App.tsx` (line 157), any re-render of `LanguageProvider` forces **every component in the application** calling `useLanguage()` to re-render, bypassing all child `React.memo` boundaries.

#### Canonical Fix Recipe
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

---

### 5.2 Hot-Path Allocations in Leaflet Map (`MapWidget.tsx`)
**Rule**: `jsx-no-new-object-as-prop` & pure function recreation  
**Location**: `src/components/bento/MapWidget.tsx:89-132, 224-241`

#### Evidence
1. `allLandmarks` is re-calculated on every render:
```tsx
const allLandmarks: Landmark[] = (
  ['north', 'northeast', 'center-west', 'southeast', 'south'] as RegionId[]
).flatMap((rId) => getLocalizedRegionData(brazilData.regions[rId], language).landmarks);
```
2. In the JSX render loop:
```tsx
{filteredLandmarks.map((lm) => (
  <Marker
    key={lm.id}
    position={lm.coordinates}
    icon={createCustomMarker(lm.category, lm.isUnesco)}
  >
```
`createCustomMarker` creates a new Leaflet `divIcon` for all 31 landmark pins on *every single render*. In React-Leaflet, when the `icon` prop changes reference identity, Leaflet completely destroys and recreates the DOM node for the marker on the Leaflet overlay pane!

#### Canonical Fix Recipe
Hoist the marker icons as static singletons:
```ts
const UNESCO_ICON = L.divIcon({
  className: 'leaflet-div-icon',
  html: `<div style="width:30px;height:30px;background:#18130F;border:3px solid #FACC15;border-radius:50%;box-shadow:0 4px 12px rgba(24,19,15,0.35);display:flex;align-items:center;justify-content:center;cursor:pointer;transform:translate(-15px,-15px);"><div style="width:9px;height:9px;border-radius:50%;background:#FACC15;"></div></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const STANDARD_ICON = L.divIcon({
  className: 'leaflet-div-icon',
  html: `<div style="width:30px;height:30px;background:#18130F;border:3px solid #057A44;border-radius:50%;box-shadow:0 4px 12px rgba(24,19,15,0.35);display:flex;align-items:center;justify-content:center;cursor:pointer;transform:translate(-15px,-15px);"><div style="width:9px;height:9px;border-radius:50%;background:#057A44;"></div></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});
```
In `Marker`:
```tsx
icon={lm.isUnesco ? UNESCO_ICON : STANDARD_ICON}
```
And memoize `allLandmarks`:
```tsx
const allLandmarks = useMemo(() => {
  return (['north', 'northeast', 'center-west', 'southeast', 'south'] as RegionId[])
    .flatMap((rId) => getLocalizedRegionData(brazilData.regions[rId], language).landmarks);
}, [language]);
```

---

### 5.3 Hoisting Intl Formatters (`js-hoist-intl`)
**Rule**: `js-hoist-intl`  
**Location**: `src/data/fallbacks.ts:527, 537`

#### Evidence
```ts
// Current code (src/data/fallbacks.ts:526-541)
export function formatBrl(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function formatEur(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);
}
```
In V8, compiling an `Intl.NumberFormat` instance requires loading CLDR locale data and option validation. Creating it per keystroke in `CurrencyWidget` generates garbage collector pressure.

#### Canonical Fix Recipe
```ts
const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const eurFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

export function formatBrl(value: number): string {
  return brlFormatter.format(value);
}

export function formatEur(value: number): string {
  return eurFormatter.format(value);
}
```

---

## 6. Deep-Dive Section 3: Accessibility (A11y)

### 6.1 Keyboard Navigation & Static Element Interactions
**Rule**: `click-events-have-key-events` & `no-static-element-interactions`  
**Locations**: 16 occurrences across 8 components:
- `Navbar.tsx:70`: Brand logo home button
- `BentoGrid.tsx:127, 145`: Jeitinho card flip buttons
- `JeitinhoWidget.tsx:112`: Jeitinho widget card flip
- `Footer.tsx:48`: Back-to-top / brand click
- `MasonryGallery.tsx:42`: Photo cards triggering Lightbox
- `VideoWrapper.tsx:44`: Video facade click-to-play
- `RegionView.tsx:290, 304, 863`: Flip cards and interactive buttons
- `ExpeditionRouteSection.tsx:167`: Polaroid route stop cards

#### Problem
In all these instances, an `onClick` handler is attached to a `<div>` element without `tabIndex`, without keyboard listeners (`onKeyDown`), and without ARIA role semantics. Keyboard-only users (Tab, Enter, Space) and screen reader users cannot activate these elements or even discover that they are interactive.

#### Canonical Fix Recipe
Replace non-semantic `<div>` elements with native `<button type="button">` elements styled to preserve the layout:
```tsx
// Before (Navbar.tsx:70)
<div onClick={onNavigateHome} className="cursor-pointer group flex flex-col">
  ...
</div>

// After
<button
  type="button"
  onClick={onNavigateHome}
  aria-label="Terra Brasilis - Ga naar overzicht"
  className="text-left cursor-pointer group flex flex-col bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg"
>
  ...
</button>
```

---

### 6.2 Form Control Association & Missing Labels
**Rule**: `no-placeholder-only-field` & `control-has-associated-label`  
**Locations**:
- `CurrencyWidget.tsx:88`: `<input type="number" ... />` lacks `id` + `<label htmlFor="...">`.
- `WeatherWidget.tsx:99`: Refresh button has only icon, missing `aria-label`.
- `CurrencyWidget.tsx:55`: Refresh button has only icon, missing `aria-label`.
- `FloatingMusicButton.tsx:176`: Track skip button `<button>↻</button>` has symbol text only without `aria-label`.

#### Canonical Fix Recipe
1. In `CurrencyWidget.tsx`:
```tsx
<label htmlFor="currency-calculator-amount" className="block text-xs font-sans font-bold text-brand-slate mb-1">
  {direction === 'EUR_TO_BRL' ? t.bento.currencyInputEur : t.bento.currencyInputBrl}
</label>
<input
  id="currency-calculator-amount"
  type="number"
  value={amount}
  aria-label={direction === 'EUR_TO_BRL' ? t.bento.currencyInputEur : t.bento.currencyInputBrl}
  ...
/>
```
2. In icon buttons:
```tsx
<button
  onClick={loadWeather}
  aria-label={language === 'nl' ? 'Ververs Open-Meteo weerdata' : 'Refresh weather data'}
  className="..."
>
  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
</button>
```

---

### 6.3 Lightbox Modal A11y & Scroll Locking
**Location**: `src/components/region/LightboxModal.tsx`

#### Issues
1. `document.body.style.overflow` toggles between `'auto'` and `'hidden'` on every Arrow key press because `currentIndex` is in the effect dependency array.
2. The modal dialog lacks `role="dialog"`, `aria-modal="true"`, and `aria-label="Foto weergave"`.
3. Navigation buttons lack explicit accessible names.
4. Focus is not trapped inside the modal, and focus does not return to the originating photo card when closed.

#### Canonical Fix Recipe
Separate scroll lock from keydown navigation, add ARIA attributes and focus return ref:
```tsx
// Lock body scroll only when modal opens/closes
useEffect(() => {
  if (!isOpen) return;
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, [isOpen]);

// Keyboard navigation (Escape, Left, Right)
useEffect(() => {
  if (!isOpen) return;
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [isOpen, currentIndex, images.length, onClose, onNavigate]);
```
Add dialog attributes:
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-label="Foto galerij uitvergroting"
  className="fixed inset-0 z-50 ..."
>
```

---

## 7. Deep-Dive Section 4: Security

### 7.1 Static Code Sinks Audit
All standard React security sinks were surveyed:
- `dangerouslySetInnerHTML`: **0 occurrences**. No raw HTML string injection sinks in JSX.
- `eval()` / `Function()`: **0 occurrences**.
- `javascript:` URLs in hrefs: **0 occurrences**.
- `target="_blank"` without safe rel: Verified across `Footer.tsx`, `SpotifyWidget.tsx`, `VideoWrapper.tsx`, and `RegionView.tsx`. All external links declare `rel="noreferrer"` (which implies `noopener` in modern browsers).
- Client secrets: No API tokens, keys, or private secrets embedded in client code. All APIs utilized (Open-Meteo, Frankfurter ECB, REST Countries, World Bank) are free public Open APIs requiring no API keys.
- SVG flags in `LanguageContext.tsx`: Clean SVGs using inline vector paths and geometry only, no script tags or foreignObject nodes.
- Leaflet `divIcon` injection: Verified that `html` strings in `MapWidget.tsx` and `RegionMapSection.tsx` interpolate only verified hex colors (`#FACC15`, `#057A44`), preventing XSS.

**Security Verdict**: Clean / Low Risk.

---

## 8. Deep-Dive Section 5: Maintainability & Architecture

### 8.1 Vite Fast Refresh Degradation (`only-export-components`)
**Rule**: `only-export-components`  
**Locations**:
- `src/components/story/ExpeditionRouteSection.tsx:25` (`export const EXPEDITION_ORDER`)
- `src/components/story/ExpeditionRouteSection.tsx:33` (`export const REGIONS_LIST`)
- `src/components/story/FloatingMusicButton.tsx:18` (`export const REGIONAL_SOUNDSCAPE_TRACKS`)

#### Problem
In Vite with `@vitejs/plugin-react`, a file that exports both React components and constants/functions cannot be Hot Module Replaced (HMR) safely. When any part of `ExpeditionRouteSection.tsx` or `FloatingMusicButton.tsx` is modified during development, Vite must perform a full page reload rather than preserving component state via Fast Refresh.

#### Canonical Fix Recipe
Move constant data structures to dedicated modules:
- Create `src/data/expeditionData.ts` exporting `EXPEDITION_ORDER` and `REGIONS_LIST`.
- Create `src/data/soundscapeData.ts` exporting `REGIONAL_SOUNDSCAPE_TRACKS`.
- Ensure component files export only React components.

---

### 8.2 Decommissioning Dead Code
Two components in `src/components/story/` contain 11 diagnostics but are never mounted or imported in `App.tsx`:
1. `src/components/story/WebflowHero.tsx` (228 lines, 10 diagnostics)
2. `src/components/story/TravelPassportBar.tsx` (215 lines, 1 diagnostic)

Keeping orphaned code increases bundle maintenance overhead and confuses subsequent developers.  
**Recommendation**: Remove both unused files.

---

## 9. Architectural Missed Opportunities (Beyond the Scan)

### 9.1 Root & Subtree Error Boundaries
**Defect**: Zero Error Boundaries exist across the application.  
**Consequence**: If Leaflet throws an unhandled tile load error, if Open-Meteo returns a malformed structure, or if an audio playback promise rejects unhandled, React 18 unmounts the entire component tree, displaying a completely blank white screen to the user.  
**Proposed Solution**: Create a reusable `ErrorBoundary.tsx` component with graceful fallback UI and place it:
1. At the application root in `App.tsx` (catching fatal crashes).
2. Around `BentoGrid` (protecting the home page if Leaflet or third-party APIs fail).
3. Around `RegionView` (protecting the regional view).

```tsx
// src/components/common/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Terra Brasilis ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 my-6 bg-brand-surfaceMuted rounded-3xl border-2 border-brand-espresso text-center">
          <h3 className="font-display font-bold text-xl text-brand-espresso mb-2">
            {this.props.fallbackTitle || 'Er is een weergavefout opgetreden'}
          </h3>
          <p className="text-xs text-brand-slate mb-4">
            De interactieve module kon niet geladen worden. Herlaad de pagina om door te gaan.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-brand-espresso text-brand-yellow rounded-xl font-bold text-xs"
          >
            Opnieuw proberen
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

---

### 9.2 Bundle Optimization: Dynamic Imports & Suspense for Leaflet & RegionView
**Defect**: The entire application builds into a single monolithic **994 KB** JavaScript asset (`index-CQZSfp0S.js`).  
**Consequence**: A user landing on the home page downloads all 6 heavy regional modules, all regional photography datasets, and all map polygons upfront, significantly degrading First Contentful Paint (FCP) and Time to Interactive (TTI) on mobile devices.  
**Proposed Solution**:
1. Code-split `RegionView` using `React.lazy()` and `<Suspense>`:
```tsx
const RegionView = React.lazy(() =>
  import('./components/region/RegionView').then((m) => ({ default: m.RegionView }))
);
```
2. Code-split `MapWidget` (which carries `leaflet` and `react-leaflet`):
```tsx
const MapWidget = React.lazy(() =>
  import('./MapWidget').then((m) => ({ default: m.MapWidget }))
);
```
3. Configure Rollup manual chunking in `vite.config.ts`:
```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-leaflet': ['leaflet', 'react-leaflet'],
        'vendor-gsap': ['gsap'],
        'vendor-lenis': ['lenis']
      }
    }
  }
}
```
**Expected Impact**: Cuts initial load JS bundle by **~55%** (from ~994 KB down to ~450 KB), isolating Leaflet and Region modules to demand-driven chunks.

---

### 9.3 Unified Audio Coordination Service
**Defect**: Three independent components create their own `new Audio(...)` instances without coordinating playback:
1. `SpotifyWidget.tsx` (local regional audio sample)
2. `FloatingMusicButton.tsx` (soundscape audio track)
3. `CultureModule.tsx` (music genre preview)
4. `RegionView.tsx` (regional anthem/soundtrack)

**Consequence**: Users can accidentally activate multiple audio tracks simultaneously, creating overlapping audio cacophony.  
**Proposed Solution**: Introduce a centralized audio coordinator (either a custom hook `useSoundscape` or an event bus) that automatically pauses any running audio track when a new track begins playback.

---

## 10. Recommended Implementation Roadmap

Execution should follow a phased 4-step sequence:

### Phase 1: High-Leverage Correctness & React Hygiene (Target: Zero Bugs)
1. **LanguageContext Memoization**: Wrap provider value in `useMemo` and `setLanguage` in `useCallback`.
2. **State Adjustment Effect Removal**: Refactor `RegionMapSection`, `VideoWrapper`, `HistoryModule`, and `CultureModule` to reset state via React `key` props and render derivation.
3. **Array Index Keys**: Replace all 23 instances of `key={idx}` with semantic unique keys across all regional modules and galleries.
4. **API Service Hardening**: Add AbortController and `res.ok` status check to `MetricsWidget` World Bank request.

### Phase 2: Performance & Motion Smoothing (Target: 60fps & Smooth Scroll)
1. **Transition-All Purge**: Replace all 20 `transition-all` Tailwind utilities with targeted `transition-colors`, `transition-transform`, or `transition-opacity`.
2. **Intl Formatters Hoisting**: Hoist `brlFormatter` and `eurFormatter` in `fallbacks.ts`.
3. **MapWidget Landmark & Marker Stabilization**: Hoist `UNESCO_ICON` and `STANDARD_ICON` singletons; memoize `allLandmarks`.
4. **Remove Unused State**: Clean up `activeTab` in `RegionView.tsx`.

### Phase 3: Accessibility & Screen Reader Compliance (Target: WCAG 2.1 AA)
1. **Semantic Button Refactor**: Convert clickable `<div>` elements in Navbar, BentoGrid, JeitinhoWidget, Footer, MasonryGallery, and VideoWrapper to `<button type="button">`.
2. **Form Association**: Bind CurrencyWidget input to label with explicit `id` and `htmlFor`.
3. **Accessible Labels**: Add `aria-label` to all icon-only buttons (weather refresh, currency refresh, track skip).
4. **Lightbox Dialog Semantics**: Add `role="dialog"`, `aria-modal="true"`, and decouple scroll lock from Arrow keydown navigation.

### Phase 4: Architectural Resilience & Code Splitting (Target: Bundle Optimization)
1. **Error Boundaries**: Implement `ErrorBoundary.tsx` and wrap root, BentoGrid, and RegionView.
2. **Code Splitting & Lazy Loading**: Lazy-load `RegionView` and `MapWidget` with `Suspense` and skeleton fallbacks.
3. **Clean Dead Code**: Delete unused `WebflowHero.tsx` and `TravelPassportBar.tsx`.
4. **Fast Refresh HMR Fix**: Move exported non-components in `ExpeditionRouteSection.tsx` and `FloatingMusicButton.tsx` to `src/data/`.
