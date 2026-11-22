import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import {
  Users,
  Scroll,
  ShieldCheck,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  Expand
} from 'lucide-react';
import type { HistoryModule as HistoryModuleType, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';

interface HistoryModuleProps {
  data: HistoryModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  triadPhotos?: [string, string, string];
  regionName?: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

type ArchiveTab = 'indigenous' | 'colonial' | 'afro';

export const HistoryModule: React.FC<HistoryModuleProps> = ({
  data,
  featuredPhotoUrl,
  triadPhotos,
  regionName,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState<number>(0);
  const [activeArchiveTab, setActiveArchiveTab] = useState<ArchiveTab>('indigenous');
  const activeCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeCardRef.current) return;
    gsap.fromTo(
      activeCardRef.current,
      { opacity: 0.3, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );
  }, [activeMilestoneIdx]);

  const handleSelectIdx = (idx: number) => setActiveMilestoneIdx(idx);
  const handlePrev = () =>
    handleSelectIdx((activeMilestoneIdx - 1 + data.milestones.length) % data.milestones.length);
  const handleNext = () =>
    handleSelectIdx((activeMilestoneIdx + 1) % data.milestones.length);

  const activeMilestone = data.milestones[activeMilestoneIdx] || data.milestones[0];

  const photoIndigenous = triadPhotos?.[0] || featuredPhotoUrl || '';
  const photoColonial = triadPhotos?.[1] || featuredPhotoUrl || '';
  const photoAfro = triadPhotos?.[2] || featuredPhotoUrl || '';
  const photoPool = [photoIndigenous, photoColonial, photoAfro].filter(Boolean);

  const triadMedia: MediaItem[] = [
    {
      id: 'hist-indigenous',
      url: photoIndigenous,
      alt: labels.mod2IndigenousTitle,
      caption: `${labels.mod2IndigenousTitle} — ${data.indigenousHeritage.ancestralPeoples.join(', ')}`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    },
    {
      id: 'hist-colonial',
      url: photoColonial,
      alt: labels.mod2ColonialTitle,
      caption: `${labels.mod2ColonialTitle} (${data.colonialAndImperialEra.period})`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    },
    {
      id: 'hist-afro',
      url: photoAfro,
      alt: labels.mod2AfroTitle,
      caption: `${labels.mod2AfroTitle} — ${regionName || 'Brazilië'}`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    }
  ];

  const milestonePhoto =
    photoPool[activeMilestoneIdx % Math.max(1, photoPool.length)] || featuredPhotoUrl || '';

  const archiveEntries: Record<
    ArchiveTab,
    {
      tabLabel: string;
      icon: React.ReactNode;
      mediaIdx: number;
      photo: string;
      photoCaption: string;
      kicker: string;
      title: string;
      body: string;
      metaLabel: string;
      metaValue: string;
    }
  > = {
    indigenous: {
      tabLabel: labels.mod2IndigenousTitle,
      icon: <Users className="w-3.5 h-3.5" />,
      mediaIdx: 0,
      photo: photoIndigenous,
      photoCaption: data.indigenousHeritage.ancestralPeoples.slice(0, 2).join(' & '),
      kicker: labels.mod2IndigenousTitle,
      title: data.indigenousHeritage.ancestralPeoples.slice(0, 2).join(' & '),
      body: data.indigenousHeritage.culturalContinuity,
      metaLabel: labels.mod2OriginalPeoples,
      metaValue: data.indigenousHeritage.ancestralPeoples.join(' • ')
    },
    colonial: {
      tabLabel: labels.mod2ColonialTitle,
      icon: <Scroll className="w-3.5 h-3.5" />,
      mediaIdx: 1,
      photo: photoColonial,
      photoCaption: data.colonialAndImperialEra.period,
      kicker: labels.mod2Period,
      title: data.colonialAndImperialEra.period,
      body: data.colonialAndImperialEra.historicalNarrative,
      metaLabel: labels.mod2EconomicDrivers,
      metaValue: data.colonialAndImperialEra.economicDrivers.join(' • ')
    },
    afro: {
      tabLabel: labels.mod2AfroTitle,
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      mediaIdx: 2,
      photo: photoAfro,
      photoCaption: `${labels.mod2QuilomboLabel} — ${regionName || ''}`,
      kicker: labels.mod2AfroTitle,
      title: labels.mod2QuilomboLabel,
      body: data.afroBrazilianHeritage.culturalLegacy,
      metaLabel: labels.mod2QuilomboLabel,
      metaValue: data.afroBrazilianHeritage.quilomboHistory
    }
  };

  const currentArchive = archiveEntries[activeArchiveTab];

  return (
    <div className="space-y-12 text-white">
      {/* 1. MUSEUM CHRONOLOGY — Interactive Horizontal Timeline on Top */}
      <div className="p-6 sm:p-8 bg-black/20 rounded-3xl border border-white/12 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-brand-yellow font-mono text-[11px] font-bold uppercase tracking-widest mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {language === 'nl'
                  ? 'Museum-chronologie • kies een jaartal'
                  : language === 'pt'
                  ? 'Cronologia histórica • escolha um marco'
                  : 'Museum chronology • pick an era'}
              </span>
            </div>
            <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-wide">
              {labels.mod2MilestonesTitle}
            </h4>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-brand-yellow text-white hover:text-brand-espresso border border-white/15 transition-colors"
              aria-label={language === 'nl' ? 'Vorige mijlpaal' : language === 'pt' ? 'Marco anterior' : 'Previous milestone'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-bold text-brand-yellow px-2 tabular-nums">
              0{activeMilestoneIdx + 1} / 0{data.milestones.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-brand-yellow text-white hover:text-brand-espresso border border-white/15 transition-colors"
              aria-label={language === 'nl' ? 'Volgende mijlpaal' : language === 'pt' ? 'Próximo marco' : 'Next milestone'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timeline Step Bar */}
        <div className="mb-7">
          <div className="hidden sm:block relative mb-3 px-6">
            <div className="h-1 w-full bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-yellow transition-all duration-500 rounded-full"
                style={{
                  width: `${
                    data.milestones.length > 1
                      ? ((activeMilestoneIdx + 0.5) / data.milestones.length) * 100
                      : 100
                  }%`
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {data.milestones.map((m, idx) => {
              const isSelected = idx === activeMilestoneIdx;
              const isPassed = idx < activeMilestoneIdx;
              return (
                <button
                  key={`${m.yearOrEra}-${m.title}`}
                  type="button"
                  onClick={() => handleSelectIdx(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-yellow text-brand-espresso border-brand-yellow shadow-md'
                      : isPassed
                      ? 'bg-white/10 text-white border-white/25 hover:border-brand-yellow/60'
                      : 'bg-white/[0.04] text-stone-200 border-white/12 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span
                      className={`font-mono text-[11px] font-bold ${
                        isSelected ? 'text-brand-espresso/75' : 'text-white/50'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-brand-espresso' : 'text-brand-yellow'
                      }`}
                    >
                      {m.yearOrEra}
                    </span>
                  </div>
                  <div
                    className={`font-sans font-bold text-xs sm:text-sm line-clamp-2 leading-snug ${
                      isSelected ? 'text-brand-espresso' : 'text-white'
                    }`}
                  >
                    {m.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Exhibit Card with Watermark Year */}
        {activeMilestone && (
          <div
            ref={activeCardRef}
            className="relative p-6 sm:p-8 rounded-2xl bg-black/25 text-white border border-white/12 overflow-hidden"
          >
            {/* Subtle Oversized Watermark Era */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-4 right-4 font-display font-bold text-7xl sm:text-9xl text-white/[0.04] tracking-tighter leading-none"
            >
              {activeMilestone.yearOrEra}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-espresso font-mono text-xs font-bold">
                    {activeMilestone.yearOrEra}
                  </span>
                  <span className="text-xs font-mono text-white/60">
                    {language === 'nl'
                      ? `Mijlpaal 0${activeMilestoneIdx + 1} van 0${data.milestones.length}`
                      : language === 'pt'
                      ? `Marco 0${activeMilestoneIdx + 1} de 0${data.milestones.length}`
                      : `Milestone 0${activeMilestoneIdx + 1} of 0${data.milestones.length}`}
                  </span>
                </div>

                <h5 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide leading-tight">
                  {activeMilestone.title}
                </h5>

                <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                  {activeMilestone.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.05] border border-white/12 flex items-start gap-3">
                  <Award className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-stone-100">
                    <span className="font-bold text-brand-yellow mr-1.5">
                      {language === 'nl'
                        ? 'Historische betekenis:'
                        : language === 'pt'
                        ? 'Impacto histórico:'
                        : 'Historical impact:'}
                    </span>
                    <span className="italic">“{activeMilestone.significance}”</span>
                  </div>
                </div>
              </div>

              {milestonePhoto && (
                <div className="lg:col-span-4">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox?.(
                        triadMedia,
                        activeMilestoneIdx % Math.max(1, triadMedia.length)
                      )
                    }
                    className="group w-full bg-[#F7F2E7] p-2.5 pb-3 rounded-xl shadow-lg text-left text-brand-espresso cursor-pointer block"
                    title={language === 'nl' ? 'Klik voor fullscreen' : language === 'pt' ? 'Clique para tela cheia' : 'Click for fullscreen'}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-900">
                      <img
                        src={milestonePhoto}
                        alt={activeMilestone.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                        <Expand className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <p className="mt-2 font-serif italic text-xs font-bold text-brand-espresso truncate">
                      {activeMilestone.yearOrEra} — {activeMilestone.title}
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 2. HERITAGE ARCHIVE FOLDER — 3 Selectable Tabs (1 Open at a Time) */}
      <div className="p-6 sm:p-8 bg-black/20 rounded-3xl border border-white/12 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="text-[11px] font-mono uppercase font-bold tracking-widest text-brand-yellow mb-1">
              {language === 'nl'
                ? 'Archiefmap • Culturele wortels'
                : language === 'pt'
                ? 'Arquivo histórico • Raízes culturais'
                : 'Heritage archive • Cultural roots'}
            </div>
            <h4 className="font-display font-bold uppercase text-xl sm:text-2xl text-white tracking-wide">
              {language === 'nl'
                ? 'Inheems, koloniaal & Afro-Braziliaans erfgoed'
                : language === 'pt'
                ? 'Herança indígena, colonial & afro-brasileira'
                : 'Indigenous, colonial & Afro-Brazilian heritage'}
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['indigenous', 'colonial', 'afro'] as ArchiveTab[]).map((tabKey) => {
              const entry = archiveEntries[tabKey];
              const isActive = activeArchiveTab === tabKey;
              return (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setActiveArchiveTab(tabKey)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-colors border ${
                    isActive
                      ? 'bg-brand-yellow text-brand-espresso border-brand-yellow'
                      : 'bg-white/[0.06] text-white/85 border-white/12 hover:bg-white/15'
                  }`}
                >
                  {entry.icon}
                  <span>{entry.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Archive Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => onOpenLightbox?.(triadMedia, currentArchive.mediaIdx)}
              className="group w-full bg-[#F7F2E7] p-3 pb-4 rounded-xl shadow-lg text-left text-brand-espresso cursor-pointer block"
              title={language === 'nl' ? 'Klik voor fullscreen' : language === 'pt' ? 'Clique para tela cheia' : 'Click for fullscreen'}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-900">
                <img
                  src={currentArchive.photo}
                  alt={currentArchive.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <Expand className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="mt-2.5 font-serif italic text-xs font-bold text-brand-espresso truncate">
                {currentArchive.photoCaption}
              </p>
            </button>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold tracking-wider text-brand-yellow">
              {currentArchive.icon}
              <span>{currentArchive.kicker}</span>
            </div>
            <h5 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
              {currentArchive.title}
            </h5>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              {currentArchive.body}
            </p>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-stone-300 leading-relaxed">
              <span className="text-brand-yellow font-bold uppercase tracking-wider mr-1.5">
                {currentArchive.metaLabel}:
              </span>
              {currentArchive.metaValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
