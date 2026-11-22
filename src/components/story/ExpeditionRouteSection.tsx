import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  ArrowRight,
  Plane,
  Ship,
  Train
} from 'lucide-react';
import type { RegionId } from '../../types';
import { brazilData } from '../../data/brazilData';
import { useLanguage } from '../../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

import { EXPEDITION_ORDER, REGIONS_LIST } from '../../data/expeditionData';

export { EXPEDITION_ORDER, REGIONS_LIST };

interface ExpeditionRouteSectionProps {
  onSelectRegion: (id: RegionId) => void;
}

export const ExpeditionRouteSection: React.FC<ExpeditionRouteSectionProps> = ({
  onSelectRegion
}) => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const regionNames: Record<RegionId, string> =
    language === 'nl'
      ? {
          north: 'Noord',
          northeast: 'Noordoost',
          'center-west': 'Centraal-West',
          southeast: 'Zuidoost',
          south: 'Zuid'
        }
      : language === 'en'
        ? {
            north: 'North',
            northeast: 'Northeast',
            'center-west': 'Center-West',
            southeast: 'Southeast',
            south: 'South'
          }
        : {
            north: 'Norte',
            northeast: 'Nordeste',
            'center-west': 'Centro-Oeste',
            southeast: 'Sudeste',
            south: 'Sul'
          };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: idx * 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 86%'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getTransportIcon = (regionId: RegionId) => {
    switch (regionId) {
      case 'north':
        return <Ship className="w-4 h-4 text-brand-yellow" />;
      case 'northeast':
      case 'center-west':
        return <Compass className="w-4 h-4 text-brand-yellow" />;
      case 'southeast':
        return <Plane className="w-4 h-4 text-brand-yellow" />;
      case 'south':
        return <Train className="w-4 h-4 text-brand-yellow" />;
    }
  };

  return (
    <section
      id="expedition-route"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-brand-emerald text-white relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header in Bold Poster Aesthetic */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-yellow border border-white/15 font-mono text-[11px] font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.expedition.kicker}</span>
          </div>

          <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl text-white tracking-tight leading-[0.95]">
            {t.expedition.title}
          </h2>

          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            {t.expedition.subtitle}
          </p>
        </div>

        {/* Connected 5-Stage Expedition Timeline Cards */}
        <div className="relative">
          {/* Central Vertical Route Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px border-l border-dashed border-white/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-14 lg:space-y-20">
            {EXPEDITION_ORDER.map((regionId, index) => {
              const regionData = brazilData.regions[regionId];
              const stop = t.expedition.stops[regionId];
              const isEven = index % 2 === 0;
              const localizedRegionName = regionNames[regionId];

              if (!regionData || !stop) return null;

              return (
                <div
                  key={regionId}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
                >
                  {/* Center Timeline Node Badge (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-brand-yellow text-brand-espresso border-2 border-[#18130F] shadow-md items-center justify-center font-display font-bold text-base">
                    {stop.stepNumber}
                  </div>

                  {/* Polaroid Stage Visual Card (5 Cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:col-start-1' : 'lg:col-start-8 lg:row-start-1'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onSelectRegion(regionId)}
                      aria-label={`Ontdek regio ${localizedRegionName}`}
                      className="polaroid-card polaroid-card-interactive bg-[#F7F2E7] group cursor-pointer text-left w-full relative transition-transform duration-300"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-900">
                        <img
                          src={regionData.heroImage.url}
                          alt={stop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-espresso/90 text-brand-yellow font-mono text-[10px] font-bold uppercase tracking-wider">
                          {getTransportIcon(regionId)}
                          <span>Etappe {stop.stepNumber} • {stop.durationBadge}</span>
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-brand-espresso px-1">
                        <div>
                          <span className="font-mono text-[10px] font-bold tracking-wider text-brand-terracotta block uppercase">
                            {localizedRegionName} • {regionData.states.length} {language === 'nl' ? 'deelstaten' : language === 'en' ? 'states' : 'estados'}
                          </span>
                          <span className="font-display font-bold text-xl tracking-wide">
                            {stop.stampTitle}
                          </span>
                        </div>
                        <span className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-4 h-4 text-brand-espresso" />
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Story & Tour Guide Content (5 Cols, Clean Dark Editorial) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:col-start-8' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div className="bg-black/20 rounded-3xl p-6 sm:p-8 border border-white/12 space-y-4">
                      <div className="text-[11px] font-mono uppercase tracking-widest font-bold text-brand-yellow">
                        {t.expedition.stepLabel} {stop.stepNumber} — {stop.transportMode}
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight tracking-tight">
                          {stop.title}
                        </h3>
                        <p className="text-xs font-mono text-stone-400 mt-1">
                          {stop.subtitle}
                        </p>
                      </div>

                      <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                        {stop.storyHook}
                      </p>

                      {/* Clean Inline Metadata Strip (No Cluttered Nested Boxes) */}
                      <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-stone-300">
                        <div>
                          <span className="font-mono uppercase text-[10px] tracking-wider font-bold text-brand-yellow mr-1.5">
                            {t.expedition.insiderTipLabel}:
                          </span>
                          <span className="italic">“{stop.insiderTip}”</span>
                        </div>
                        <div>
                          <span className="font-mono uppercase text-[10px] tracking-wider font-bold text-brand-yellow mr-1.5">
                            {t.expedition.soundtrackLabel}:
                          </span>
                          <span className="text-white font-semibold">{stop.musicVibe}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onSelectRegion(regionId)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-brand-yellow hover:bg-white text-brand-espresso font-bold text-sm transition-colors"
                        >
                          <span>
                            {t.expedition.boardStageBtn} {stop.stepNumber} ({localizedRegionName})
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
