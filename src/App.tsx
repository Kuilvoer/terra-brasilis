import React, { useState, useEffect } from 'react';
import type { RegionId, ActiveView, ModuleCategory } from './types';
import { brazilData } from './data/brazilData';
import { LanguageProvider } from './i18n/LanguageContext';
import { useLenisGsap, scrollToTarget } from './hooks/useLenisGsap';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { PolaroidCollageSection } from './components/story/PolaroidCollageSection';
import { ExpeditionRouteSection } from './components/story/ExpeditionRouteSection';
import { FloatingMusicButton } from './components/story/FloatingMusicButton';
import { BentoGrid } from './components/bento/BentoGrid';
import { RegionView } from './components/region/RegionView';
import { SideReadingGuide, type ReadingGuideSection } from './components/region/SideReadingGuide';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const HOME_READING_SECTIONS: ReadingGuideSection[] = [
  {
    id: 'hero-start',
    shortCode: '01',
    labelNl: 'Tropisch ritme',
    labelEn: 'Tropical rhythm',
    labelPt: 'Ritmo tropical'
  },
  {
    id: 'expedition-route',
    shortCode: '02',
    labelNl: '5-etappe route',
    labelEn: '5-stage route',
    labelPt: 'Roteiro 5 etapas'
  },
  {
    id: 'live-bento-atlas',
    shortCode: '03',
    labelNl: 'Kaart & live data',
    labelEn: 'Map & live data',
    labelPt: 'Mapa & dados ao vivo'
  }
];

function TerraBrasilisContent() {
  // Activate Lenis Smooth Scrolling + GSAP ScrollTrigger synchronization
  useLenisGsap();

  const [activeView, setActiveView] = useState<ActiveView>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('region/')) {
      const parts = hash.split('/');
      const rId = parts[1] as RegionId;
      if (rId in brazilData.regions) {
        return {
          type: 'region',
          regionId: rId,
          activeModuleId: parts[2] as ModuleCategory | undefined
        };
      }
    }
    return { type: 'home' };
  });

  // Keep window.location.hash synchronized with activeView
  useEffect(() => {
    if (activeView.type === 'home') {
      if (window.location.hash && window.location.hash.startsWith('#region/')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    } else if (activeView.type === 'region') {
      const newHash = activeView.activeModuleId
        ? `#region/${activeView.regionId}/${activeView.activeModuleId}`
        : `#region/${activeView.regionId}`;
      if (window.location.hash !== newHash) {
        window.history.pushState(null, '', newHash);
      }
    }
  }, [activeView]);

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('region/')) {
        const parts = hash.split('/');
        const rId = parts[1] as RegionId;
        if (rId in brazilData.regions) {
          setActiveView({
            type: 'region',
            regionId: rId,
            activeModuleId: parts[2] as ModuleCategory | undefined
          });
          return;
        }
      }
      setActiveView({ type: 'home' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToHome = () => {
    setActiveView({ type: 'home' });
    scrollToTarget(0, 0);
  };

  const navigateToRegion = (regionId: RegionId, activeModuleId?: ModuleCategory) => {
    setActiveView({ type: 'region', regionId, activeModuleId });
    scrollToTarget(0, 0);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between selection:bg-brand-ochre/30 selection:text-brand-ink">
      <Navbar
        activeView={activeView}
        onNavigateHome={navigateToHome}
        onNavigateRegion={(id) => navigateToRegion(id)}
      />

      <main className="flex-1">
        {activeView.type === 'home' ? (
          <>
            {/* Subtle Side Reading Guide ("Leeswijzer") on Homepage */}
            <SideReadingGuide sections={HOME_READING_SECTIONS} />

            {/* 1. Grand Opening Hero: Iconic "VOEL HET RITME VAN DE TROPEN" Poster Typography & Floating Polaroids */}
            <PolaroidCollageSection onSelectRegion={(id) => navigateToRegion(id)} />

            {/* 3. Interactive 5-Stage Guided Expedition Route ("A Grande Expedição") */}
            <ExpeditionRouteSection onSelectRegion={(id) => navigateToRegion(id)} />

            {/* 4. Live Interactive Bento Atlas (Leaflet Map, Open-Meteo, Frankfurter EUR/BRL, Jeitinho, Audio) */}
            <div className="bg-[#FDF8EE]">
              <ErrorBoundary fallbackTitle="Interactive Atlas Interrupted">
                <BentoGrid onSelectRegion={(id) => navigateToRegion(id)} />
              </ErrorBoundary>
            </div>
          </>
        ) : (
          <ErrorBoundary fallbackTitle="Regional Dossier Interrupted">
            <RegionView
              region={brazilData.regions[activeView.regionId]}
              onNavigateHome={navigateToHome}
              onSelectRegion={(id) => navigateToRegion(id)}
            />
          </ErrorBoundary>
        )}
      </main>

      <Footer
        onSelectRegion={(id) => navigateToRegion(id)}
        onNavigateHome={navigateToHome}
      />

      {/* Subtle Corner Music Note Button (Privacy-Free Local Brazilian Audio per Region) */}
      <FloatingMusicButton
        activeRegionId={activeView.type === 'region' ? activeView.regionId : undefined}
      />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary fallbackTitle="Terra Brasilis Unavailable">
      <LanguageProvider>
        <TerraBrasilisContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
