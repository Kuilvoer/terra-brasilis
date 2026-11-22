import React, { useState, useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  Radio,
  ExternalLink,
  Music,
  ArrowRight,
  ArrowLeft,
  Plane,
  Award,
  Camera,
  ArrowUpRight,
  MapPin,
  Trophy,
  Landmark,
  UtensilsCrossed,
  TrendingUp,
  Expand
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import type { RegionId, RegionData, MediaItem } from '../../types';
import { brazilData } from '../../data/brazilData';
import { SideReadingGuide, type ReadingGuideSection } from './SideReadingGuide';
import { RegionMapSection } from './RegionMapSection';
import { GeographyModule } from './modules/GeographyModule';
import { HistoryModule } from './modules/HistoryModule';
import { CultureModule } from './modules/CultureModule';
import { GastronomyModule } from './modules/GastronomyModule';
import { EconomyModule } from './modules/EconomyModule';
import { SportsModule } from './modules/SportsModule';
import { MasonryGallery } from './MasonryGallery';
import { VideoWrapper } from './VideoWrapper';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  getLocalizedRegionData,
  MODULE_UI_LABELS,
  REGION_MODULE_PHOTOS
} from '../../i18n/regionLocalizations';
import {
  REGIONAL_POSTER_LINES,
  REGIONAL_POLAROIDS,
  REGIONAL_THEMES
} from '../../data/regionalPosterData';
import { EXPEDITION_ORDER } from '../../data/expeditionData';
import { scrollToTarget } from '../../hooks/useLenisGsap';
import { BrazilMapOutline } from '../common/BrazilMapOutline';

interface RegionViewProps {
  region: RegionData;
  onNavigateHome: () => void;
  onSelectRegion: (id: RegionId) => void;
}

const REGION_READING_SECTIONS: ReadingGuideSection[] = [
  {
    id: 'region-hero',
    shortCode: '00',
    labelNl: 'Overzicht & Hero',
    labelEn: 'Overview & Hero',
    labelPt: 'Visão Geral'
  },
  {
    id: 'region-map',
    shortCode: '01',
    labelNl: 'Regiokaart & Topo',
    labelEn: 'Region Map & Topo',
    labelPt: 'Mapa & Topografia'
  },
  {
    id: 'geography',
    shortCode: '02',
    labelNl: 'Geografie & Natuur',
    labelEn: 'Geography & Nature',
    labelPt: 'Geografia & Biomas'
  },
  {
    id: 'history',
    shortCode: '03',
    labelNl: 'Geschiedenis & Tijdlijn',
    labelEn: 'History & Timeline',
    labelPt: 'História & Cronologia'
  },
  {
    id: 'culture',
    shortCode: '04',
    labelNl: 'Cultuur & Festivals',
    labelEn: 'Culture & Festivals',
    labelPt: 'Cultura & Festivais'
  },
  {
    id: 'gastronomy',
    shortCode: '05',
    labelNl: 'Gastronomie & Keuken',
    labelEn: 'Gastronomy & Cuisine',
    labelPt: 'Gastronomia'
  },
  {
    id: 'economy',
    shortCode: '06',
    labelNl: 'Economie & Impact',
    labelEn: 'Economy & Impact',
    labelPt: 'Economia & Impacto'
  },
  {
    id: 'sports',
    shortCode: '07',
    labelNl: 'Sport & Passie',
    labelEn: 'Sports & Passion',
    labelPt: 'Esporte & Paixão'
  },
  {
    id: 'multimedia',
    shortCode: '08',
    labelNl: 'Foto’s, 4K & Audio',
    labelEn: 'Photos, 4K & Audio',
    labelPt: 'Fotos, 4K & Áudio'
  }
];

export const RegionView: React.FC<RegionViewProps> = ({
  region: rawRegion,
  onNavigateHome,
  onSelectRegion
}) => {
  const { language, t } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  // Localize region headlines, overviews, stats, and landmarks to NL, EN, or PT (memoized)
  const region = useMemo(
    () => getLocalizedRegionData(rawRegion, language),
    [rawRegion, language]
  );
  const modulePhotos = REGION_MODULE_PHOTOS[region.id];
  const currentTheme = REGIONAL_THEMES[region.id] || REGIONAL_THEMES.north;

  const [, setActiveTab] = useState<string>('region-map');
  const [lightboxImages, setLightboxImages] = useState<MediaItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const openLightbox = (images: MediaItem[], startIndex = 0) => {
    const validImages = images.filter((img) => Boolean(img?.url));
    if (validImages.length === 0) return;
    setLightboxImages(validImages);
    setLightboxIndex(Math.min(startIndex, validImages.length - 1));
    setLightboxOpen(true);
  };

  const getLocalizedRegionName = (id: RegionId) => {
    const names: Record<RegionId, { nl: string; en: string; pt: string }> = {
      north: { nl: 'Noord', en: 'North', pt: 'Norte' },
      northeast: { nl: 'Noordoost', en: 'Northeast', pt: 'Nordeste' },
      'center-west': { nl: 'Centraal-West', en: 'Center-West', pt: 'Centro-Oeste' },
      southeast: { nl: 'Zuidoost', en: 'Southeast', pt: 'Sudeste' },
      south: { nl: 'Zuid', en: 'South', pt: 'Sul' }
    };
    return names[id]?.[language] || id;
  };

  const currentStageIdx = EXPEDITION_ORDER.indexOf(region.id);
  const nextRegionId = EXPEDITION_ORDER[(currentStageIdx + 1) % EXPEDITION_ORDER.length];
  const prevRegionId =
    EXPEDITION_ORDER[(currentStageIdx - 1 + EXPEDITION_ORDER.length) % EXPEDITION_ORDER.length];

  const nextRegion = brazilData.regions[nextRegionId];
  const prevRegion = brazilData.regions[prevRegionId];

  const stopStory = t.expedition.stops[region.id];
  const nextStopStory = t.expedition.stops[nextRegionId];

  // Combine default gallery with extra curated regional photos (8 high-res photos per region)
  const combinedGallery: MediaItem[] = [
    ...region.gallery,
    ...(modulePhotos?.extraGallery || []).map((item) => ({
      id: item.id,
      url: item.url,
      alt:
        language === 'nl'
          ? item.captionNl
          : language === 'pt'
          ? item.captionPt
          : item.captionEn,
      caption:
        language === 'nl'
          ? item.captionNl
          : language === 'pt'
          ? item.captionPt
          : item.captionEn,
      credit: item.credit,
      aspectRatio: 'landscape' as const
    }))
  ];

  // Real-time Scroll Spy: Track which module/tab is currently in view (cached measurements + rAF)
  useEffect(() => {
    const sectionIds = [
      'region-map',
      'geography',
      'history',
      'culture',
      'gastronomy',
      'economy',
      'sports',
      'multimedia'
    ];

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureTops);
    };
  }, [region.id]);

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const posterTextRef = useRef<HTMLDivElement | null>(null);
  const polaroidRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // GSAP Smooth Animations: Refined Calm Editorial Motion + Reduced-Motion Guard
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Regional 4-Line Poster Staggered Reveal (Calm, dignified editorial easing)
      const lines = posterTextRef.current?.querySelectorAll('.poster-line');
      if (lines && lines.length) {
        gsap.fromTo(
          lines,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.09,
            duration: 0.78,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: posterTextRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }

      // 2. Subtle Parallax Floating Polaroids (No bouncy overshoot or jarring tilt)
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
              trigger: heroSectionRef.current,
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
            trigger: heroSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.0
          }
        });
      });

      // 3. Staggered reveal for cards across all modules as user scrolls down
      const sections = document.querySelectorAll('.region-module-section');
      sections.forEach((sec) => {
        const cards = sec.querySelectorAll('.region-anim-card');
        if (cards.length) {
          gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 82%',
                once: true
              }
            }
          );
        }
      });
    }, heroSectionRef);

    return () => ctx.revert();
  }, [region.id]);

  const scrollToModule = (tabId: string) => {
    setActiveTab(tabId);
    scrollToTarget(`#${tabId}`, -130);
  };

  const HISTORY_TRIAD_PHOTOS: Record<RegionId, [string, string, string]> = {
    north: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/CIDH_aldeia_guyraroka_2.jpg/960px-CIDH_aldeia_guyraroka_2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Fortaleza_de_S%C3%A3o_Jos%C3%A9%2C_Macap%C3%A1-AP.jpg/960px-Fortaleza_de_S%C3%A3o_Jos%C3%A9%2C_Macap%C3%A1-AP.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Dan%C3%A7a_do_Carimb%C3%B3_-_Bel%C3%A9m_-_Par%C3%A1_%2833942798626%29.jpg/960px-Dan%C3%A7a_do_Carimb%C3%B3_-_Bel%C3%A9m_-_Par%C3%A1_%2833942798626%29.jpg'
    ],
    northeast: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg/960px-Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/960px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Arena_da_Capoeira_-_Wiki_Encontros_Salvador_2024_05.jpg/1280px-Arena_da_Capoeira_-_Wiki_Encontros_Salvador_2024_05.jpg'
    ],
    'center-west': [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/1280px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg/1280px-Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Quilombo_Kalunga_%2812704362765%29.jpg/960px-Quilombo_Kalunga_%2812704362765%29.jpg'
    ],
    southeast: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/CIDH_aldeia_guyraroka_2.jpg/960px-CIDH_aldeia_guyraroka_2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/1280px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/2018_Rio_de_Janeiro_-_Pedra_do_Sal.jpg/960px-2018_Rio_de_Janeiro_-_Pedra_do_Sal.jpg'
    ],
    south: [
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Itaimb%C3%A9zinho_Canyon_2006.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/16/Portal_ruinas.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/IBPA_16762_-_Porto_Alegre%2C_RS%2C_20.09.2018-_Cerca_de_10_mil_pessoas_assistiram_ao_-_2018-09-20_-_Joel_Vargas-PMPA.jpg/960px-IBPA_16762_-_Porto_Alegre%2C_RS%2C_20.09.2018-_Cerca_de_10_mil_pessoas_assistiram_ao_-_2018-09-20_-_Joel_Vargas-PMPA.jpg'
    ]
  };

  const SPORTS_OUTDOOR_PHOTOS: Record<RegionId, string[]> = {
    north: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg/960px-Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Alter_do_Chao%2C_Estado_do_Para%2C_Brazil.jpg/1280px-Alter_do_Chao%2C_Estado_do_Para%2C_Brazil.jpg'
    ],
    northeast: [
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/15_-Barrinha%2CSportKitesurf-Jericoacoara%2CCe_Helio_Bastos_Salmon-130722.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg'
    ],
    'center-west': [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/1280px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg/1280px-Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg'
    ],
    southeast: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/Forte_de_Copacabana_panorama.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg'
    ],
    south: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg/1280px-Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Serra_do_Rio_do_Rastro%2C_Santa_Catarina%2C_Brasil.jpg/1280px-Serra_do_Rio_do_Rastro%2C_Santa_Catarina%2C_Brasil.jpg'
    ]
  };

  const regionalLines = REGIONAL_POSTER_LINES[region.id]?.[language] || REGIONAL_POSTER_LINES.north.nl;
  const regionalPolaroids = REGIONAL_POLAROIDS[region.id] || REGIONAL_POLAROIDS.north;

  const renderModuleHeaderBanner = ({
    id,
    shortCode,
    kickerText,
    titleLine1,
    titleLine2,
    headline,
    overview,
    kpis
  }: {
    id: string;
    shortCode: string;
    kickerText: string;
    titleLine1: string;
    titleLine2: string;
    headline: string;
    overview: string;
    icon?: React.ReactNode;
    polaroids?: Array<{ url?: string; caption: string; tag: string }>;
    kpis?: Array<{ label: string; value: string; sub?: string }>;
  }) => (
    <div id={id} className="w-full pt-20 sm:pt-28 pb-10 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/60">
            {shortCode} • {kickerText}
          </div>

          <h3 className="font-display font-bold uppercase text-brand-yellow text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            {titleLine1} {titleLine2}
          </h3>

          <p className="text-base sm:text-lg font-semibold text-white leading-snug pt-1">
            {headline}
          </p>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
            {overview}
          </p>
        </div>

        {/* Unified Warm Off-White KPI Strip (Only where real numeric stats exist: 02 & 06) */}
        {kpis && kpis.length > 0 && (
          <div className="mt-10 bg-[#F7F2E7] rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-sand/70 text-brand-espresso overflow-hidden">
            {kpis.slice(0, 4).map((stat) => (
              <div key={stat.label} className="p-5 sm:p-6">
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-terracotta truncate">
                  {stat.label}
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-espresso mt-1 truncate">
                  {stat.value}
                </div>
                {stat.sub && (
                  <div className="text-[11px] text-brand-slate truncate mt-0.5">{stat.sub}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Whisper-Quiet Collapsible Side Reading Guide */}
      <SideReadingGuide sections={REGION_READING_SECTIONS} />

      {/* ONE Continuous Dominant Regional Background Color (Zero Hard Color Jumps!) */}
      <div
        className="min-h-screen text-white animate-fadeIn transition-colors duration-500 overflow-x-clip"
        style={{ backgroundColor: currentTheme.heroBgHex }}
      >
        {/* 1. Iconic Poster Hero */}
        <section
          id="region-hero"
          ref={heroSectionRef}
          className="relative overflow-hidden text-brand-ink pt-14 sm:pt-20 pb-10 select-none"
        >
        {/* Subtle Tropical Niemeyer Curves Background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
            <path
              d="M-100,750 C320,420 580,880 1020,520 C1240,340 1390,480 1560,290"
              stroke="#FDF8EE"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <circle cx="220" cy="180" r="140" stroke="#FACC15" strokeWidth="1.5" />
            <circle cx="1220" cy="680" r="190" stroke="#FACC15" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb Bar (Clean Z-index & spacing above floating polaroids) */}
          <div className="relative z-30 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-brand-yellow mb-6 sm:mb-10 pointer-events-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:underline flex items-center gap-1 font-bold shrink-0"
              >
                <span>Terra Brasilis</span>
              </button>
              <span>/</span>
              <span className="text-white font-bold truncate">
                {t.regionView.stageBadge} {stopStory?.stepNumber || `0${currentStageIdx + 1}`} —{' '}
                {getLocalizedRegionName(region.id)}
              </span>
            </div>

            {/* Subtle White Line Regional Map Outline Badge */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-black/25 border border-white/20 backdrop-blur-sm text-white select-none shrink-0">
              <BrazilMapOutline regionId={region.id} className="w-5 h-5 text-white" />
              <span className="text-[11px] font-bold font-mono tracking-wider text-white">
                {region.name}
              </span>
            </div>
          </div>

          {/* PART 1: Giant Condensed Poster Typography + 4 Floating Regional Polaroids */}
          <div className="relative min-h-[250px] sm:min-h-[420px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center my-2 sm:my-4">
            {/* Center Condensed Typography Stack */}
            <div
              ref={posterTextRef}
              className="text-center select-none z-10 px-2"
              aria-label={regionalLines.join(' ')}
            >
              <div className="poster-line font-display font-bold uppercase text-brand-espresso text-[3.1rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
                {regionalLines[0]}
              </div>
              <div className="poster-line font-display font-bold uppercase text-brand-espresso text-[3.1rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
                {regionalLines[1]}
              </div>
              <div className="poster-line font-display font-bold uppercase text-brand-yellow drop-shadow-[0_6px_0_rgba(24,19,15,0.95)] text-[3.1rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem] leading-[0.86] tracking-tight">
                {regionalLines[2]}
              </div>
              <div
                className={`poster-line font-display font-bold uppercase text-brand-espresso leading-[0.86] tracking-tight ${
                  regionalLines[3].length > 9
                    ? 'text-[2.6rem] sm:text-[5.2rem] md:text-[6.8rem] lg:text-[8.2rem] xl:text-[9.2rem]'
                    : 'text-[3.1rem] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10.2rem]'
                }`}
              >
                {regionalLines[3]}
              </div>
            </div>

            {/* 4 Floating Regional Polaroids (Desktop & Tablet) */}
            <div className="hidden md:block">
              {regionalPolaroids.map((card, idx) => {
                const cardCaption =
                  language === 'nl'
                    ? card.captionNl
                    : language === 'pt'
                    ? card.captionPt
                    : card.captionEn;
                return (
                  <button
                    key={card.id}
                    ref={(el) => {
                      polaroidRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => scrollToModule(card.targetModuleId)}
                    className={`polaroid-card polaroid-card-interactive group absolute z-20 w-48 lg:w-56 text-left cursor-pointer ${card.rotation} ${card.positionClass}`}
                  >
                    <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[2px] bg-stone-900">
                      <img
                        src={card.imageUrl}
                        alt={cardCaption}
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
                      {cardCaption}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Polaroid Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden mt-4 mb-8">
            {regionalPolaroids.map((card) => {
              const cardCaption =
                language === 'nl'
                  ? card.captionNl
                  : language === 'pt'
                  ? card.captionPt
                  : card.captionEn;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => scrollToModule(card.targetModuleId)}
                  className="polaroid-card polaroid-card-interactive bg-[#F7F2E7] text-left cursor-pointer"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-stone-900">
                    <img
                      src={card.imageUrl}
                      alt={cardCaption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-brand-espresso/80 text-brand-yellow font-mono text-[9px] uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <p className="mt-2 font-serif italic text-xs text-brand-espresso font-semibold line-clamp-1">
                    {cardCaption}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unified Warm Off-White Regional Dossier Strip (Matches Calm Mockup!) */}
      <div className="py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F2E7] rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-sand/70 text-brand-espresso overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-terracotta">
                {t.regionView.population}
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl mt-1">
                {(region.population / 1000000).toFixed(1)} M
              </div>
              <div className="text-[11px] text-brand-slate truncate mt-0.5">
                {region.populationPercentageOfBrazil}% {t.regionView.ofNationalTotal}
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-emerald">
                {t.regionView.area}
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl mt-1">
                {region.areaKm2.toLocaleString('pt-BR')} km²
              </div>
              <div className="text-[11px] text-brand-slate truncate mt-0.5">
                {t.regionView.density}: {region.densityPerKm2} hab/km²
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-ochre">
                {t.regionView.statesAndCapitals}
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl mt-1 text-brand-espresso truncate">
                {region.states.length} {t.regionView.statesCount}
              </div>
              <div className="text-[11px] text-brand-slate truncate mt-0.5">
                {region.states.map((s) => s.capital).join(', ')}
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-espresso">
                {language === 'nl' ? 'Biomen & natuur' : language === 'pt' ? 'Biomas & natureza' : 'Biomes & nature'}
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl mt-1 text-brand-espresso truncate">
                {region.modules.geography.biomes[0]?.name || 'Mata & Fauna'}
              </div>
              <div className="text-[11px] text-brand-slate truncate mt-0.5">
                {region.modules.geography.climate.classification}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE 01: Regiokaart & Topo (Integrated Directly on Continuous Regional Canvas) */}
      <section id="region-map" className="py-10 sm:py-14 scroll-mt-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <RegionMapSection key={region.id} region={region} onOpenLightbox={openLightbox} />
        </div>
      </section>

      {/* MODULE 02: Geografie & Natuur */}
      {renderModuleHeaderBanner({
        id: 'geography',
        shortCode: '02',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'GEOGRAFIE' : language === 'pt' ? 'GEOGRAFIA' : 'GEOGRAPHY',
        titleLine2: language === 'nl' ? '& NATUUR' : language === 'pt' ? '& NATUREZA' : '& NATURE',
        headline: region.modules.geography.headline,
        overview: region.modules.geography.overview,
        icon: <Compass className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.topographyPhoto || modulePhotos?.geography,
            caption: getLocalizedRegionName(region.id),
            tag: labels.mod1TopoTitle
          },
          {
            url: modulePhotos?.hydrologyPhoto || modulePhotos?.climatePhoto,
            caption: region.modules.geography.hydrology.majorBasins[0] || labels.mod1HydroTitle,
            tag: labels.mod1HydroTitle
          }
        ],
        kpis: region.modules.geography.keyStats.map((s) => ({
          label: s.label,
          value: s.value
        }))
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <GeographyModule
            key={region.id}
            data={region.modules.geography}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.geography}
            topographyPhotoUrl={modulePhotos?.topographyPhoto}
            hydrologyPhotoUrl={modulePhotos?.hydrologyPhoto}
            climatePhotoUrl={modulePhotos?.climatePhoto}
            regionName={getLocalizedRegionName(region.id)}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 03: Geschiedenis & Tijdlijn */}
      {renderModuleHeaderBanner({
        id: 'history',
        shortCode: '03',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'GESCHIEDENIS' : language === 'pt' ? 'HISTÓRIA' : 'HISTORY',
        titleLine2: language === 'nl' ? '& TIJDLIJN' : language === 'pt' ? '& LINHA DO TEMPO' : '& TIMELINE',
        headline: region.modules.history.headline,
        overview: region.modules.history.overview,
        icon: <Landmark className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.history,
            caption: labels.mod2ColonialTitle,
            tag: region.modules.history.colonialAndImperialEra.period
          }
        ]
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <HistoryModule
            key={region.id}
            data={region.modules.history}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.history}
            triadPhotos={HISTORY_TRIAD_PHOTOS[region.id]}
            regionName={getLocalizedRegionName(region.id)}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 04: Cultuur & Festivals */}
      {renderModuleHeaderBanner({
        id: 'culture',
        shortCode: '04',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'CULTUUR' : language === 'pt' ? 'CULTURA' : 'CULTURE',
        titleLine2: language === 'nl' ? '& FESTIVALS' : language === 'pt' ? '& FESTIVAIS' : '& FESTIVALS',
        headline: region.modules.culture.headline,
        overview: region.modules.culture.overview,
        icon: <Music className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.culture,
            caption: region.modules.culture.festivals[0]?.name || labels.mod3FestivalsTitle,
            tag: region.modules.culture.festivals[0]?.period || 'Festival'
          }
        ]
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <CultureModule
            key={region.id}
            data={region.modules.culture}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.culture}
            festivalPhotos={modulePhotos?.festivalPhotos}
            regionName={getLocalizedRegionName(region.id)}
            regionId={region.id}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 05: Gastronomie & Keuken */}
      {renderModuleHeaderBanner({
        id: 'gastronomy',
        shortCode: '05',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'GASTRONOMIE' : language === 'pt' ? 'GASTRONOMIA' : 'GASTRONOMY',
        titleLine2: language === 'nl' ? '& KEUKEN' : language === 'pt' ? '& CULINÁRIA' : '& CUISINE',
        headline: region.modules.gastronomy.headline,
        overview: region.modules.gastronomy.overview,
        icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.gastronomy,
            caption: region.modules.gastronomy.signatureDishes[0]?.portugueseName || labels.mod4DishesTitle,
            tag: getLocalizedRegionName(region.id)
          }
        ]
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <GastronomyModule
            key={region.id}
            data={region.modules.gastronomy}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.gastronomy}
            regionName={getLocalizedRegionName(region.id)}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 06: Economie & Impact */}
      {renderModuleHeaderBanner({
        id: 'economy',
        shortCode: '06',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'ECONOMIE' : language === 'pt' ? 'ECONOMIA' : 'ECONOMY',
        titleLine2: language === 'nl' ? '& IMPACT' : language === 'pt' ? '& IMPACTO' : '& IMPACT',
        headline: region.modules.economy.headline,
        overview: region.modules.economy.overview,
        icon: <TrendingUp className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.economy,
            caption: region.modules.economy.leadingSectors[0]?.sector || labels.mod5SectorsTitle,
            tag: getLocalizedRegionName(region.id)
          }
        ],
        kpis: region.modules.economy.economicStats.map((s) => ({
          label: s.label,
          value: s.value
        }))
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <EconomyModule
            key={region.id}
            data={region.modules.economy}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.economy}
            regionName={getLocalizedRegionName(region.id)}
            regionId={region.id}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 07: Sport & Passie */}
      {renderModuleHeaderBanner({
        id: 'sports',
        shortCode: '07',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'SPORT' : language === 'pt' ? 'ESPORTE' : 'SPORTS',
        titleLine2: language === 'nl' ? '& PASSIE' : language === 'pt' ? '& PAIXÃO' : '& PASSION',
        headline: region.modules.sports.headline,
        overview: region.modules.sports.overview,
        icon: <Trophy className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: modulePhotos?.sports,
            caption: region.modules.sports.football.iconicStadiums[0]?.name || labels.mod6FootballTitle,
            tag: region.modules.sports.football.iconicStadiums[0]?.city || getLocalizedRegionName(region.id)
          }
        ]
      })}
      <div className="pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SportsModule
            key={region.id}
            data={region.modules.sports}
            colorToken={region.colorToken}
            featuredPhotoUrl={modulePhotos?.sports}
            naturePhotos={SPORTS_OUTDOOR_PHOTOS[region.id]}
            regionName={getLocalizedRegionName(region.id)}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>

      {/* MODULE 08: Multimedia Showcase + Next Stage Journey Portal */}
      {renderModuleHeaderBanner({
        id: 'multimedia',
        shortCode: '08',
        kickerText: getLocalizedRegionName(region.id).toUpperCase(),
        titleLine1: language === 'nl' ? 'FOTO’S, 4K' : language === 'pt' ? 'FOTOS, 4K' : 'PHOTOS, 4K',
        titleLine2: language === 'nl' ? '& AUDIO' : language === 'pt' ? '& ÁUDIO' : '& AUDIO',
        headline:
          language === 'nl'
            ? `Fotogalerij, 4K documentaire & sfeertrack — ${getLocalizedRegionName(region.id)}`
            : language === 'pt'
            ? `Galeria de fotos, documentário 4K & trilha — ${getLocalizedRegionName(region.id)}`
            : `Photo gallery, 4K documentary & soundtrack — ${getLocalizedRegionName(region.id)}`,
        overview: labels.mod7Subtitle,
        icon: <Camera className="w-3.5 h-3.5" />,
        polaroids: [
          {
            url: region.heroImage.url,
            caption: `${getLocalizedRegionName(region.id)} — ${
              language === 'nl' ? 'Archief' : language === 'pt' ? 'Arquivo' : 'Archive'
            }`,
            tag: 'HD & 4K'
          }
        ]
      })}
      <div className="pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* 8-Photo Polaroid Gallery with Lightbox */}
          <MasonryGallery
            key={region.id}
            images={combinedGallery}
            regionName={getLocalizedRegionName(region.id)}
            onOpenLightbox={openLightbox}
          />

          {/* 4K Drone Video Wrapper (Click-to-Play Editorial Showcase + Regional Playlist) */}
          <VideoWrapper
            key={region.featuredVideo.youtubeId}
            video={region.featuredVideo}
            regionName={getLocalizedRegionName(region.id)}
            regionId={region.id}
          />

          {/* Compact Regional Spotify Playlist Bar (No Duplicate Audio Player) */}
          <div className="p-6 sm:p-7 bg-white/[0.04] text-white rounded-3xl border border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow">
                <Radio className="w-3.5 h-3.5" />
                <span>
                  {labels.mod7SpotifyTitle} — {getLocalizedRegionName(region.id)}
                </span>
              </div>
              <h4 className="font-display font-bold text-2xl text-white tracking-wide mt-1">
                {stopStory?.musicVibe}
              </h4>
            </div>

            <a
              href={`https://open.spotify.com/playlist/${region.spotifyPlaylistId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-yellow hover:bg-white text-brand-espresso font-mono text-xs font-bold transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>{labels.mod7ListenSpotify}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive "Volgende Etappe / Boarding Pass" Journey Portal (No Passport Stamp Clutter) */}
          <section className="pt-4">
            <div className="rounded-3xl bg-black/25 text-white p-8 sm:p-10 border border-white/15 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-espresso text-brand-yellow font-mono text-xs font-bold tracking-wider">
                    <Plane className="w-3.5 h-3.5" />
                    <span>{t.regionView.nextStageKicker}</span>
                  </div>

                  <h3 className="font-display font-bold text-3xl sm:text-5xl text-brand-yellow tracking-tight leading-none">
                    {t.regionView.nextStageTitle}
                  </h3>

                  <p className="text-stone-100 text-sm sm:text-base leading-relaxed">
                    {nextStopStory?.storyHook}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectRegion(nextRegion.id)}
                      className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-brand-yellow hover:bg-white text-brand-espresso font-bold text-sm sm:text-base border border-brand-sand transition-colors shadow-card hover:shadow-card-hover"
                    >
                      <span>
                        {t.regionView.nextStageBtn}: {getLocalizedRegionName(nextRegion.id)} ({nextStopStory?.stepNumber})
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectRegion(prevRegion.id)}
                      className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl bg-brand-espresso hover:bg-brand-yellow text-white hover:text-brand-espresso font-bold text-xs sm:text-sm border border-brand-sand transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{getLocalizedRegionName(prevRegion.id)}</span>
                    </button>

                    <button
                      type="button"
                      onClick={onNavigateHome}
                      className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl bg-brand-espresso hover:bg-brand-yellow text-white hover:text-brand-espresso font-bold text-xs sm:text-sm border border-brand-sand transition-colors"
                    >
                      <Award className="w-4 h-4 text-brand-yellow" />
                      <span>{t.nav.backToHome}</span>
                    </button>
                  </div>
                </div>

                {/* Next Destination Polaroid Preview Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => onSelectRegion(nextRegion.id)}
                    aria-label={`Volgende etappe: ${getLocalizedRegionName(nextRegion.id)}`}
                    className="polaroid-card polaroid-card-interactive cursor-pointer rotate-2 w-full max-w-sm text-brand-espresso text-left"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-900">
                      <img
                        src={nextRegion.heroImage.url}
                        alt={nextRegion.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-brand-espresso text-brand-yellow font-mono text-[10px] font-bold">
                        Etappe {nextStopStory?.stepNumber} • {nextStopStory?.transportMode}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <div className="font-display font-bold text-xl text-brand-espresso">
                          {getLocalizedRegionName(nextRegion.id)}
                        </div>
                        <div className="font-serif italic text-xs text-brand-slate line-clamp-1">
                          {nextStopStory?.title}
                        </div>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-brand-yellow border border-brand-sand flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-brand-espresso" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>

      {/* Shared Universal Fullscreen Lightbox for All Region Photos (Hero Banners & Modules 01-08) */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
};
