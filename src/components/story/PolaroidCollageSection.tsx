import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import type { RegionId } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { POLAROID_CARDS } from '../../i18n/translations';
import { BrazilMapOutline } from '../common/BrazilMapOutline';

gsap.registerPlugin(ScrollTrigger);

interface PolaroidCollageSectionProps {
  onSelectRegion: (id: RegionId) => void;
}

export const PolaroidCollageSection: React.FC<PolaroidCollageSectionProps> = ({
  onSelectRegion
}) => {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const posterTextRef = useRef<HTMLDivElement | null>(null);
  const polaroidRefs = useRef<(HTMLDivElement | null)[]>([]);

  const statsLabels =
    language === 'nl'
      ? [
          { kicker: 'Totale bevolking', val: '203,1 M', sub: 'IBGE Censo 2022 • 5 macro-regio’s & 26 deelstaten + DF' },
          { kicker: 'Oppervlakte', val: '8.515.767 km²', sub: '5e grootste land ter wereld' },
          { kicker: 'Biodiversiteit & kust', val: '6 biomen • 7.491 km kust', sub: 'Amazone, Cerrado, Pantanal, Mata Atlântica, Caatinga & Pampa' },
          { kicker: 'Werelderfgoed', val: '23 UNESCO-locaties', sub: '31 interactieve bezienswaardigheden op de kaarten' }
        ]
      : language === 'pt'
      ? [
          { kicker: 'População total', val: '203,1 M', sub: 'IBGE Censo 2022 • 5 macrorregiões & 26 estados + DF' },
          { kicker: 'Área territorial', val: '8.515.767 km²', sub: '5º maior país do planeta' },
          { kicker: 'Biodiversidade & costa', val: '6 biomas • 7.491 km litoral', sub: 'Amazônia, Cerrado, Pantanal, Mata Atlântica, Caatinga & Pampa' },
          { kicker: 'Patrimônio mundial', val: '23 sítios UNESCO', sub: '31 marcos interativos nos mapas regionais' }
        ]
      : [
          { kicker: 'Total population', val: '203.1 M', sub: 'IBGE Census 2022 • 5 macro-regions & 26 states + DF' },
          { kicker: 'Territorial area', val: '8,515,767 km²', sub: '5th largest country on Earth' },
          { kicker: 'Biodiversity & coast', val: '6 biomes • 7,491 km coast', sub: 'Amazon, Cerrado, Pantanal, Atlantic Forest, Caatinga & Pampa' },
          { kicker: 'World heritage', val: '23 UNESCO sites', sub: '31 interactive landmarks on regional maps' }
        ];

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate big condensed poster lines with refined editorial easing
      if (posterTextRef.current) {
        const lines = posterTextRef.current.querySelectorAll('.poster-line');
        gsap.fromTo(
          lines,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.09,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: posterTextRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // Subtle, calm parallax floating polaroids on scroll
      polaroidRefs.current.forEach((card, idx) => {
        if (!card) return;
        const speed = idx % 2 === 0 ? -14 : 12;
        const rot = idx % 2 === 0 ? -1.5 : 1.5;

        gsap.fromTo(
          card,
          { y: 24, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: idx * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );

        gsap.to(card, {
          yPercent: speed,
          rotation: `+=${rot}`,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.0
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="hero-start"
        ref={sectionRef}
        className="relative overflow-hidden bg-brand-emerald text-brand-ink py-14 sm:py-20 select-none transition-colors duration-500"
      >
      {/* Subtle Modernist Brazilian Flag Geometry (Lozenge + Celestial Sphere + Southern Cross) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          className="w-full h-full max-w-[1440px]"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Subtle Niemeyer horizon curve */}
          <path
            d="M-100,760 C320,460 580,860 1020,540 C1240,360 1390,480 1560,290"
            stroke="#FDF8EE"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />

          {/* Iconic Brazilian Flag Yellow Lozenge (Diamond) */}
          <polygon
            points="720,95 1235,450 720,805 205,450"
            fill="#FACC15"
            fillOpacity="0.045"
            stroke="#FACC15"
            strokeOpacity="0.24"
            strokeWidth="2"
          />
          <polygon
            points="720,118 1202,450 720,782 238,450"
            stroke="#FDF8EE"
            strokeOpacity="0.11"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          {/* Central Celestial Sphere (Subtle Flag Blue Tint + Equatorial Arc) */}
          <circle
            cx="720"
            cy="450"
            r="210"
            fill="#002776"
            fillOpacity="0.18"
            stroke="#FDF8EE"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />

          {/* Curved Equatorial Banner Arc */}
          <path
            d="M518,412 Q720,352 922,458"
            stroke="#FDF8EE"
            strokeOpacity="0.22"
            strokeWidth="2"
          />
          <path
            d="M512,440 Q720,380 928,486"
            stroke="#FDF8EE"
            strokeOpacity="0.14"
            strokeWidth="1.5"
          />

          {/* Delicate Constellation Dots (Cruzeiro do Sul & Rio Night Sky) */}
          <g fill="#FDF8EE" fillOpacity="0.35">
            <circle cx="720" cy="495" r="3" />
            <circle cx="720" cy="548" r="2.8" />
            <circle cx="696" cy="520" r="2.5" />
            <circle cx="744" cy="517" r="2.5" />
            <circle cx="732" cy="531" r="1.8" />
            <circle cx="645" cy="485" r="2.2" />
            <circle cx="795" cy="502" r="2.2" />
            <circle cx="762" cy="368" r="2.6" />
            <circle cx="668" cy="566" r="2" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb Bar (Matching Region View - Clean Z-index & spacing above floating polaroids) */}
        <div className="relative z-30 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-brand-yellow mb-6 sm:mb-10 pointer-events-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="font-bold text-brand-yellow shrink-0">Terra Brasilis</span>
            <span>/</span>
            <span className="text-white font-bold truncate">
              {language === 'nl'
                ? 'Nationale Expeditie • 5 Regio’s'
                : language === 'pt'
                ? 'Expedição Nacional • 5 Regiões'
                : 'National Expedition • 5 Regions'}
            </span>
          </div>

          {/* Subtle White Line Country Map Outline Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-black/25 border border-white/20 backdrop-blur-sm text-white select-none shrink-0">
            <BrazilMapOutline className="w-5 h-5 text-white" />
            <span className="text-[11px] font-bold font-mono tracking-wider text-white">
              Brasil
            </span>
          </div>
        </div>

        {/* PART 1: Giant Condensed Poster Typography + Floating Polaroids */}
        <div className="relative min-h-[250px] sm:min-h-[420px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center my-2 sm:my-4">
          {/* Center Condensed Display Stack */}
          <div
            ref={posterTextRef}
            className="text-center select-none z-10 px-2"
            aria-label={`${t.polaroidSection.posterLine1} ${t.polaroidSection.posterLine2} ${t.polaroidSection.posterLine3} ${t.polaroidSection.posterLine4}`}
          >
            <div className="poster-line font-display font-bold uppercase text-brand-espresso text-[3.3rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
              {t.polaroidSection.posterLine1}
            </div>
            <div className="poster-line font-display font-bold uppercase text-brand-espresso text-[3.3rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
              {t.polaroidSection.posterLine2}
            </div>
            <div className="poster-line font-display font-bold uppercase text-brand-yellow drop-shadow-[0_6px_0_rgba(24,19,15,0.95)] text-[3.3rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
              {t.polaroidSection.posterLine3}
            </div>
            <div className="poster-line font-display font-bold uppercase text-brand-espresso text-[3.3rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
              {t.polaroidSection.posterLine4}
            </div>
          </div>

          {/* 4 Floating Polaroid Cards (Desktop & Tablet Floating, Mobile Grid Below) */}
          <div className="hidden md:block">
            {POLAROID_CARDS.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => {
                  polaroidRefs.current[index] = el;
                }}
                className={`absolute z-20 w-48 lg:w-56 ${card.positionClass}`}
              >
                <button
                  type="button"
                  onClick={() => onSelectRegion(card.regionId)}
                  className={`polaroid-card polaroid-card-interactive group w-full text-left cursor-pointer ${card.rotation}`}
                >
                  <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[2px] bg-stone-900">
                    <img
                      src={card.imageUrl}
                      alt={card.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-brand-espresso/85 text-brand-yellow font-mono text-[10px] uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-brand-ochre text-brand-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="mt-2.5 font-serif italic text-xs lg:text-sm text-brand-espresso font-semibold leading-snug line-clamp-1">
                    {card.caption}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Polaroid Row (Visible on small screens) */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-4 mb-8">
          {POLAROID_CARDS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => onSelectRegion(card.regionId)}
              className="polaroid-card polaroid-card-interactive bg-[#F7F2E7] text-left cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-stone-900">
                <img
                  src={card.imageUrl}
                  alt={card.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-brand-espresso/80 text-brand-yellow font-mono text-[9px] uppercase">
                  {card.tag}
                </span>
              </div>
              <p className="mt-2 font-serif italic text-xs text-brand-espresso font-semibold line-clamp-1">
                {card.caption}
              </p>
            </button>
          ))}
        </div>

        </div>
      </section>

      {/* Unified Warm Off-White National Dossier Strip (Continuous Emerald Backdrop) */}
      <div className="bg-brand-emerald py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F2E7] rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-sand/70 text-brand-espresso overflow-hidden">
            {statsLabels.map((item) => (
              <div key={item.kicker} className="p-5 sm:p-6">
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-terracotta">
                  {item.kicker}
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-espresso mt-1">
                  {item.val}
                </div>
                <div className="text-[11px] text-brand-slate truncate mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
