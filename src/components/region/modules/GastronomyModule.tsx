import React, { useState } from 'react';
import { Flame, Coffee, Citrus, Expand, UtensilsCrossed, MapPin } from 'lucide-react';
import type { GastronomyModule as GastronomyModuleType, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';
import { LightboxModal } from '../LightboxModal';

interface GastronomyModuleProps {
  data: GastronomyModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  regionName?: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

export const GastronomyModule: React.FC<GastronomyModuleProps> = ({
  data,
  featuredPhotoUrl,
  regionName,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [activeDishIdx, setActiveDishIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const dishImages: MediaItem[] = data.signatureDishes.map((dish, i) => ({
    id: `dish-${i}`,
    url: dish.imageUrl || featuredPhotoUrl || '',
    alt: dish.portugueseName,
    caption: `${dish.portugueseName} (${dish.name}) — ${dish.description}`,
    credit: `${dish.originState} • ${dish.culturalSignificance}`,
    aspectRatio: 'landscape'
  }));

  const openDishLightbox = (idx: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(dishImages, idx);
    } else {
      setActiveDishIdx(idx);
      setLightboxOpen(true);
    }
  };

  const activeDish = data.signatureDishes[activeDishIdx] || data.signatureDishes[0];

  return (
    <div className="space-y-10 text-white">
      {/* 1. AUTHENTIC BRAZILIAN PRINTED MENU (CARDÁPIO) on Warm Parchment */}
      <div className="bg-[#F7F2E7] text-brand-espresso rounded-3xl shadow-xl border border-stone-300/70 overflow-hidden">
        {/* Menu Header Banner */}
        <div className="px-6 sm:px-9 py-5 border-b border-brand-espresso/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-espresso text-brand-yellow flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-brand-espresso/65">
                CARDÁPIO REGIONAL • {regionName?.toUpperCase() || 'BRASIL'}
              </div>
              <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-brand-espresso tracking-tight leading-none mt-0.5">
                {labels.mod4DishesTitle}
              </h4>
            </div>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-brand-espresso/80 max-w-md">
            “{data.philosophy}”
          </p>
        </div>

        {/* Menu Split: Left Clickable Dish List, Right Featured Plate Photo & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Typographic Menu List */}
          <div className="lg:col-span-5 divide-y divide-brand-espresso/10 border-b lg:border-b-0 lg:border-r border-brand-espresso/15">
            {data.signatureDishes.map((dish, idx) => {
              const isSelected = activeDishIdx === idx;
              return (
                <button
                  key={dish.portugueseName || dish.name}
                  type="button"
                  onClick={() => setActiveDishIdx(idx)}
                  className={`w-full text-left px-6 sm:px-8 py-5 transition-colors flex flex-col gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-espresso text-[#F7F2E7]'
                      : 'hover:bg-brand-espresso/[0.05] text-brand-espresso'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-2.5 min-w-0">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 ${
                          isSelected ? 'text-brand-yellow' : 'text-brand-espresso/45'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="font-display font-bold text-xl tracking-tight truncate">
                        {dish.portugueseName}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[10px] uppercase font-bold shrink-0 ${
                        isSelected ? 'text-brand-yellow' : 'text-brand-espresso/60'
                      }`}
                    >
                      {dish.originState}
                    </span>
                  </div>

                  <div
                    className={`font-serif italic text-xs ${
                      isSelected ? 'text-stone-300' : 'text-brand-espresso/70'
                    }`}
                  >
                    {dish.name}
                  </div>

                  <div
                    className={`text-[11px] font-mono truncate mt-0.5 ${
                      isSelected ? 'text-stone-300/90' : 'text-brand-espresso/55'
                    }`}
                  >
                    {dish.keyIngredients.slice(0, 4).join(' • ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Dish Photo & Culinary Story */}
          {activeDish && (
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <button
                  type="button"
                  onClick={() => openDishLightbox(activeDishIdx)}
                  className="group relative block w-full aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 shadow-md cursor-pointer"
                  title={
                    language === 'nl'
                      ? 'Klik voor fullscreen'
                      : language === 'pt'
                      ? 'Clique para tela cheia'
                      : 'Click for fullscreen'
                  }
                >
                  <img
                    src={activeDish.imageUrl || featuredPhotoUrl || ''}
                    alt={activeDish.portugueseName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (featuredPhotoUrl && target.src !== featuredPhotoUrl) {
                        target.src = featuredPhotoUrl;
                      }
                    }}
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <Expand className="w-4 h-4" />
                  </span>
                </button>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-display font-bold text-2xl sm:text-3xl text-brand-espresso leading-tight">
                      {activeDish.portugueseName}
                    </h5>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-espresso/10 text-brand-espresso font-mono text-[11px] font-bold">
                      <MapPin className="w-3 h-3" />
                      {activeDish.originState}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-brand-espresso/85 leading-relaxed">
                    {activeDish.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-espresso/15 space-y-3 text-xs sm:text-sm">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono uppercase text-[10px] tracking-wider font-bold text-brand-espresso/65 mr-1">
                    {labels.mod4MainIngredients}:
                  </span>
                  {activeDish.keyIngredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-0.5 rounded-full bg-brand-espresso/10 text-brand-espresso font-medium text-xs"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
                <div className="p-3.5 rounded-xl bg-brand-espresso/[0.06] text-brand-espresso/90 flex items-start gap-2.5">
                  <Flame className="w-4 h-4 text-brand-espresso shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-bold mr-1">{labels.mod4CulturalMeaning}:</span>
                    {activeDish.culturalSignificance}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. COMPACT NATIVE INGREDIENTS & BEVERAGES BAR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-black/20 rounded-3xl border border-white/12">
          <h4 className="font-display font-bold uppercase text-xl sm:text-2xl text-white mb-4 flex items-center gap-2 tracking-tight">
            <Citrus className="w-5 h-5 text-brand-yellow" />
            <span>{labels.mod4NativeIngredientsTitle}</span>
          </h4>
          <div className="space-y-3">
            {data.nativeIngredients.map((ing) => (
              <div
                key={ing.name}
                className="p-4 bg-white/[0.05] rounded-2xl border border-white/10 text-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-base text-white">{ing.name}</span>
                  {ing.indigenousOrScientificName && (
                    <span className="text-[11px] font-mono text-brand-yellow font-bold italic">
                      {ing.indigenousOrScientificName}
                    </span>
                  )}
                </div>
                <div className="text-stone-300 leading-relaxed mb-1 text-xs sm:text-sm">
                  <span className="font-bold text-stone-100">{labels.mod4TasteProfile}: </span>
                  {ing.tasteProfile}
                </div>
                <div className="text-stone-300 text-xs sm:text-sm">
                  <span className="font-bold text-stone-100">{labels.mod4TraditionalUse}: </span>
                  {ing.traditionalUsage}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-black/20 rounded-3xl border border-white/12">
          <h4 className="font-display font-bold uppercase text-xl sm:text-2xl text-white mb-4 flex items-center gap-2 tracking-tight">
            <Coffee className="w-5 h-5 text-brand-yellow" />
            <span>{labels.mod4BeveragesTitle}</span>
          </h4>
          <div className="space-y-3">
            {data.traditionalBeverages.map((bev) => (
              <div
                key={bev.name}
                className="p-4 bg-white/[0.05] rounded-2xl border border-white/10 text-sm"
              >
                <div className="flex items-center justify-between font-bold text-white mb-1 gap-2">
                  <span className="text-base">{bev.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold shrink-0 ${
                      bev.alcoholic
                        ? 'bg-brand-terracotta text-white'
                        : 'bg-brand-yellow text-brand-espresso'
                    }`}
                  >
                    {bev.alcoholic
                      ? language === 'nl'
                        ? 'Alcoholisch'
                        : language === 'pt'
                        ? 'Alcoólico'
                        : 'Alcoholic'
                      : language === 'nl'
                      ? 'Alcoholvrij'
                      : language === 'pt'
                      ? 'Sem álcool'
                      : 'Non-alcoholic'}
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed text-xs sm:text-sm">
                  {bev.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!onOpenLightbox && (
        <LightboxModal
          images={dishImages}
          currentIndex={activeDishIdx}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveDishIdx}
        />
      )}
    </div>
  );
};
