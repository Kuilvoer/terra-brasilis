import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Camera } from 'lucide-react';
import type { RegionId } from '../../types';
import { MapWidget } from './MapWidget';
import { WeatherWidget } from './WeatherWidget';
import { CurrencyWidget } from './CurrencyWidget';
import { JeitinhoWidget } from './JeitinhoWidget';
import { SpotifyWidget } from './SpotifyWidget';
import { MetricsWidget } from './MetricsWidget';
import { useLanguage } from '../../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface BentoGridProps {
  onSelectRegion: (id: RegionId) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onSelectRegion
}) => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%'
            }
          }
        );
      }

      if (gridRef.current) {
        const items = gridRef.current.children;
        gsap.fromTo(
          items,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="live-bento-atlas"
      ref={sectionRef}
      className="w-full bg-brand-emerald py-20 sm:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Poster-Style Header Banner in "VOEL HET RITME VAN DE TROPEN" Emerald & Polaroid Aesthetic */}
      <div
        ref={bannerRef}
        className="relative bg-black/20 text-white rounded-3xl p-6 sm:p-10 border border-white/12 overflow-hidden"
      >
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border-2 border-dashed border-brand-yellow/25 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-espresso text-brand-yellow font-mono text-xs font-bold tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.bento.kicker}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-none text-brand-yellow">
              {language === 'nl'
                ? 'Interactieve atlas & live reisdata'
                : language === 'pt'
                  ? 'Atlas interativo & dados ao vivo'
                  : 'Interactive atlas & live travel data'}
            </h2>

            <p className="text-sm sm:text-base text-stone-100 font-sans max-w-2xl leading-relaxed">
              {t.bento.subtitle}
            </p>
          </div>

          {/* Right Polaroid Collage Accent */}
          <div className="lg:col-span-4 hidden sm:flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => onSelectRegion('center-west')}
              aria-label="Pantanal & Cerrado"
              className="polaroid-card polaroid-card-interactive cursor-pointer -rotate-3 w-44 hover:rotate-0 transition-transform text-left"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-stone-900">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantanal%2C_south-central_South_America_5170.jpg"
                  alt="Pantanal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-brand-espresso text-[11px] font-serif italic font-bold">
                <span>Pantanal &amp; Cerrado</span>
                <Camera className="w-3 h-3 text-brand-emerald" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectRegion('south')}
              aria-label="Cataratas do Iguaçu"
              className="polaroid-card polaroid-card-interactive cursor-pointer rotate-3 w-44 -ml-6 mt-6 hover:rotate-0 transition-transform text-left"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-stone-900">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Iguazu_Cataratas2.jpg"
                  alt="Foz do Iguaçu"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-brand-espresso text-[11px] font-serif italic font-bold">
                <span>Cataratas do Iguaçu</span>
                <Camera className="w-3 h-3 text-brand-terracotta" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Bento Grid: 1-col mobile, 2-col tablet, 12-col desktop */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Interactive Map Anchor (8 cols on desktop, 2 cols on tablet) */}
        <div className="md:col-span-2 lg:col-span-8 min-h-[500px]">
          <MapWidget onSelectRegion={onSelectRegion} />
        </div>

        {/* Live APIs Stack (4 cols on desktop, 2 cols side-by-side on tablet) */}
        <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="h-full">
            <WeatherWidget />
          </div>
          <div className="h-full">
            <CurrencyWidget />
          </div>
        </div>

        {/* Interactive Sociolinguistics (6 cols on desktop, 1 col on tablet) */}
        <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
          <JeitinhoWidget />
        </div>

        {/* Regional Audio & Spotify Soundscape Player (6 cols on desktop, 1 col on tablet) */}
        <div className="md:col-span-1 lg:col-span-6 min-h-[300px]">
          <SpotifyWidget />
        </div>

        {/* Full-Width Macro Metrics & Open Data Strip (12 cols on desktop, 2 cols on tablet) */}
        <div className="md:col-span-2 lg:col-span-12">
          <MetricsWidget />
        </div>
      </div>
      </div>
    </section>
  );
};
