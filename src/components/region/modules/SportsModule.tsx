import React, { useState } from 'react';
import { Trophy, Flag, Waves, Shield, Expand, Flame } from 'lucide-react';
import type { SportsModule as SportsModuleType, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';

interface SportsModuleProps {
  data: SportsModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  naturePhotos?: string[];
  regionName?: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

type SportsTab = 'outdoor' | 'martial';

export const SportsModule: React.FC<SportsModuleProps> = ({
  data,
  featuredPhotoUrl,
  naturePhotos = [],
  regionName,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];
  const [activeTab, setActiveTab] = useState<SportsTab>('outdoor');

  const expeditionMedia: MediaItem[] = data.outdoorAndExtremeSports.map((sp, idx) => ({
    id: `sport-exp-${idx}`,
    url: naturePhotos[idx % Math.max(1, naturePhotos.length)] || featuredPhotoUrl || '',
    alt: sp.sport,
    caption: `${sp.sport} — ${sp.description}`,
    credit: `${regionName || 'Brazilië'} • ${sp.notableHotspots.join(', ')}`,
    aspectRatio: 'landscape'
  }));

  const tabOutdoorLabel =
    language === 'nl'
      ? 'Outdoor & Expedities'
      : language === 'pt'
      ? 'Aventura & Expedições'
      : 'Outdoor & Expeditions';

  const tabMartialLabel =
    language === 'nl'
      ? 'Vechtsport & Sporticonen'
      : language === 'pt'
      ? 'Artes Marciais & Ícones'
      : 'Martial Arts & Legends';

  return (
    <div className="space-y-10 text-white">
      {/* 1. RETRO STADIUM SCOREBOARD — Football Culture, Capacities & Derbies */}
      <div className="bg-black/25 text-white rounded-3xl border border-white/15 overflow-hidden">
        {/* Scoreboard Top Strip */}
        <div className="px-6 sm:px-8 py-5 bg-black/30 border-b border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-yellow text-brand-espresso flex items-center justify-center shrink-0">
              <Flag className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-yellow font-bold">
                {language === 'nl'
                  ? 'STADION-SCOREBORD • VOETBALCULTUUR'
                  : language === 'pt'
                  ? 'PLACAR HISTÓRICO • CULTURA DO FUTEBOL'
                  : 'STADIUM SCOREBOARD • FOOTBALL CULTURE'}
              </div>
              <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight leading-none mt-0.5">
                {labels.mod6FootballTitle}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-brand-yellow bg-white/[0.06] px-3.5 py-1.5 rounded-xl border border-white/10 self-start sm:self-auto tabular-nums">
            <span>{data.football.iconicStadiums.length} {labels.mod6StadiumsTitle.toUpperCase()}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            {data.football.cultureRole}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Stadium Capacity Table (Scoreboard Style) */}
            <div className="lg:col-span-7 p-5 bg-black/25 rounded-2xl border border-white/12 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase font-bold text-brand-yellow border-b border-white/10 pb-2.5">
                <span>{labels.mod6StadiumsTitle}</span>
                <span>{labels.mod6Seats}</span>
              </div>
              <div className="divide-y divide-white/10">
                {data.football.iconicStadiums.map((stadium) => (
                  <div
                    key={stadium.name}
                    className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="font-display font-bold text-lg text-white truncate">
                        {stadium.name}
                      </div>
                      <div className="text-xs font-mono text-stone-300">{stadium.city}</div>
                    </div>
                    <span className="font-mono text-sm font-bold px-3 py-1 rounded-lg bg-brand-yellow text-brand-espresso shrink-0 tabular-nums">
                      {stadium.capacity.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/12 text-xs text-stone-200">
                <span className="font-mono font-bold uppercase text-[10px] tracking-wider text-brand-yellow mr-1.5">
                  {labels.mod6HistoricClubs}:
                </span>
                {data.football.legendaryClubs.join(' • ')}
              </div>
            </div>

            {/* Historic Moments & Derbies */}
            <div className="lg:col-span-5 p-5 bg-black/25 rounded-2xl border border-white/12 flex flex-col justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono uppercase font-bold text-brand-yellow border-b border-white/10 pb-2.5 mb-3">
                  {labels.mod6MomentsTitle}
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200">
                  {data.football.historicMoments.map((mom) => (
                    <li key={mom.slice(0, 30)} className="flex items-start gap-2.5">
                      <span className="text-brand-yellow font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{mom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-white/12 text-xs text-stone-200">
                <span className="font-mono font-bold uppercase text-[10px] tracking-wider text-brand-yellow mr-1.5">
                  {labels.mod6Rivalries}:
                </span>
                {data.football.localDerbies.join(' • ')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CLEAN 2-TAB ACTION SWITCHER: Outdoor & Expeditions ↔ Martial Arts & Legends */}
      <div className="p-6 sm:p-8 bg-black/20 rounded-3xl border border-white/12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="text-[11px] font-mono uppercase font-bold tracking-widest text-brand-yellow mb-1">
              {regionName} •{' '}
              {language === 'nl'
                ? 'ACTIE, NATUUR & SPORTHELDEN'
                : language === 'pt'
                ? 'AÇÃO, NATUREZA & LENDAS'
                : 'ACTION, NATURE & LEGENDS'}
            </div>
            <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-wide">
              {activeTab === 'outdoor' ? labels.mod6ExtremeSportsTitle : labels.mod6MartialArtsTitle}
            </h4>
          </div>

          <div className="flex flex-wrap sm:inline-flex gap-1 p-1 rounded-2xl bg-black/30 border border-white/12 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('outdoor')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-2 rounded-xl font-mono text-xs font-bold transition-colors ${
                activeTab === 'outdoor'
                  ? 'bg-brand-yellow text-brand-espresso'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Waves className="w-3.5 h-3.5 shrink-0" />
              <span>{tabOutdoorLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('martial')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-2 rounded-xl font-mono text-xs font-bold transition-colors ${
                activeTab === 'martial'
                  ? 'bg-brand-yellow text-brand-espresso'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>{tabMartialLabel}</span>
            </button>
          </div>
        </div>

        {activeTab === 'outdoor' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {data.outdoorAndExtremeSports.map((sp, idx) => {
              const spotPhoto =
                naturePhotos[idx % Math.max(1, naturePhotos.length)] || featuredPhotoUrl;

              return (
                <div key={sp.sport} className="space-y-4 group">
                  {spotPhoto && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox?.(expeditionMedia, idx)}
                      className="w-full bg-[#F7F2E7] p-2.5 pb-3 rounded-xl shadow text-left text-brand-espresso cursor-pointer block"
                      title={
                        language === 'nl'
                          ? 'Klik voor fullscreen'
                          : language === 'pt'
                          ? 'Clique para tela cheia'
                          : 'Click for fullscreen'
                      }
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-900">
                        <img
                          src={spotPhoto}
                          alt={sp.sport}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                          <Expand className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <p className="mt-2 font-serif italic text-xs font-bold text-brand-espresso truncate">
                        {sp.sport}
                      </p>
                    </button>
                  )}

                  <div className="space-y-2.5 px-1">
                    <h5 className="font-display font-bold text-2xl text-white leading-tight">
                      {sp.sport}
                    </h5>
                    <p className="text-sm text-stone-200 leading-relaxed">{sp.description}</p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-brand-yellow mr-1">
                        {labels.mod6Hotspots}:
                      </span>
                      {sp.notableHotspots.map((spot) => (
                        <span
                          key={`${sp.sport}-${spot}`}
                          className="px-2.5 py-0.5 rounded-lg bg-white/[0.06] border border-white/12 text-stone-100 font-mono text-[11px]"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.martialArts.map((art) => (
                <div
                  key={art.discipline}
                  className="p-5 bg-white/[0.05] rounded-2xl border border-white/10 text-xs space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="font-display font-bold text-xl text-brand-yellow">
                      {art.discipline}
                    </div>
                    <p className="text-stone-200 leading-relaxed text-xs sm:text-sm">{art.roots}</p>
                    <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-stone-100 italic">
                      {labels.mod6Philosophy}: “{art.philosophy}”
                    </div>
                  </div>
                  <div className="text-xs text-stone-300 pt-2.5 border-t border-white/10">
                    <span className="font-bold text-brand-yellow">{labels.mod6Masters}: </span>
                    {art.renownedMasters.join(', ')}
                  </div>
                </div>
              ))}
            </div>

            {data.motorsportOrSkate && (
              <div className="lg:col-span-5 p-5 sm:p-6 bg-white/[0.05] rounded-2xl border border-white/10 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
                    <Flame className="w-4 h-4" />
                    <span>
                      {language === 'nl'
                        ? 'Sporticonen, Motorsport & Skate'
                        : language === 'pt'
                        ? 'Ícones, Automobilismo & Skate'
                        : 'Sporting Legends, Motorsport & Skate'}
                    </span>
                  </div>
                  <p className="text-sm text-stone-200 leading-relaxed">
                    {data.motorsportOrSkate.narrative}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  {data.motorsportOrSkate.icons.map((icon) => (
                    <span
                      key={icon}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-brand-yellow font-bold"
                    >
                      <Trophy className="w-3.5 h-3.5 shrink-0" />
                      <span>{icon}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
