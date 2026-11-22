import React, { useState } from 'react';
import { Compass, Mountain, Trees, Waves, AlertTriangle, Expand } from 'lucide-react';
import type { GeographyModule as GeographyModuleType, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';

const BIOME_FLORA_FAUNA_IMAGES: Record<string, { label: string; photo: string; type: 'fauna' | 'flora' }[]> = {
  'Amazônia (Amazon Rainforest)': [
    { label: 'Onça-pintada (Jaguar)', photo: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Boto-cor-de-rosa', photo: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Vitória-régia', photo: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop', type: 'flora' },
    { label: 'Samaúma', photo: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=400&auto=format&fit=crop', type: 'flora' }
  ],
  Cerrado: [
    { label: 'Lobo-guará', photo: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Tamanduá-bandeira', photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Myrmecophaga_tridactyla_134850711.jpg/960px-Myrmecophaga_tridactyla_134850711.jpg', type: 'fauna' },
    { label: 'Capim-dourado', photo: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop', type: 'flora' },
    { label: 'Ipê-amarelo', photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop', type: 'flora' }
  ],
  Caatinga: [
    { label: 'Arara-azul', photo: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Tatu-bola', photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Brazilian_three-banded_armadillo_%28Tolypeutes_tricinctus%29_2%2C_Natural_History_Museum%2C_London%2C_Mammals_Gallery.JPG/960px-Brazilian_three-banded_armadillo_%28Tolypeutes_tricinctus%29_2%2C_Natural_History_Museum%2C_London%2C_Mammals_Gallery.JPG', type: 'fauna' },
    { label: 'Mandacaru', photo: 'https://images.unsplash.com/photo-1509223197845-458d87318791?w=400&auto=format&fit=crop', type: 'flora' },
    { label: 'Umbuzeiro', photo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop', type: 'flora' }
  ],
  'Mata Atlântica': [
    { label: 'Mico-leão-dourado', photo: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Tucano-toco', photo: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Pau-Brasil', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Caesalpinia_echinata_0001.jpeg', type: 'flora' },
    { label: 'Bromélias', photo: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=400&auto=format&fit=crop', type: 'flora' }
  ],
  Pantanal: [
    { label: 'Onça-pintada', photo: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Capivara', photo: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Tuiuiú', photo: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Vitória-régia', photo: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop', type: 'flora' }
  ],
  Pampa: [
    { label: 'Gralha-azul', photo: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Veado-campeiro', photo: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=400&auto=format&fit=crop', type: 'fauna' },
    { label: 'Araucária', photo: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop', type: 'flora' },
    { label: 'Campos Nativos', photo: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop', type: 'flora' }
  ]
};

function getBiomeFloraFauna(biomeName: string) {
  if (BIOME_FLORA_FAUNA_IMAGES[biomeName]) return BIOME_FLORA_FAUNA_IMAGES[biomeName];
  const lower = biomeName.toLowerCase();
  if (lower.includes('amaz')) return BIOME_FLORA_FAUNA_IMAGES['Amazônia (Amazon Rainforest)'];
  if (lower.includes('caatinga')) return BIOME_FLORA_FAUNA_IMAGES.Caatinga;
  if (lower.includes('pantanal')) return BIOME_FLORA_FAUNA_IMAGES.Pantanal;
  if (lower.includes('pampa') || lower.includes('arauc')) return BIOME_FLORA_FAUNA_IMAGES.Pampa;
  if (lower.includes('atlânt') || lower.includes('atlant')) return BIOME_FLORA_FAUNA_IMAGES['Mata Atlântica'];
  if (lower.includes('cerrado')) return BIOME_FLORA_FAUNA_IMAGES.Cerrado;
  return BIOME_FLORA_FAUNA_IMAGES['Amazônia (Amazon Rainforest)'];
}

interface GeographyModuleProps {
  data: GeographyModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  topographyPhotoUrl?: string;
  hydrologyPhotoUrl?: string;
  climatePhotoUrl?: string;
  regionName?: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

export const GeographyModule: React.FC<GeographyModuleProps> = ({
  data,
  featuredPhotoUrl,
  topographyPhotoUrl,
  hydrologyPhotoUrl,
  climatePhotoUrl,
  regionName,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [activeLayer, setActiveLayer] = useState<'topo' | 'hydro' | 'climate'>('topo');
  const [activeBiomeIdx, setActiveBiomeIdx] = useState(0);

  const trioImages: MediaItem[] = [
    {
      id: 'geo-topo',
      url: topographyPhotoUrl || featuredPhotoUrl || '',
      alt: labels.mod1TopoTitle,
      caption: `${labels.mod1TopoTitle} — ${data.topography.highestPoint} (${data.topography.elevationMeters}m)`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    },
    {
      id: 'geo-hydro',
      url: hydrologyPhotoUrl || featuredPhotoUrl || '',
      alt: labels.mod1HydroTitle,
      caption: `${labels.mod1HydroTitle} — ${data.hydrology.majorBasins.join(', ')}`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    },
    {
      id: 'geo-climate',
      url: climatePhotoUrl || featuredPhotoUrl || '',
      alt: labels.mod1ClimateTitle,
      caption: `${labels.mod1ClimateTitle} — ${data.climate.classification}`,
      credit: regionName || 'Terra Brasilis',
      aspectRatio: 'landscape'
    }
  ];

  const activeLayerIndex = activeLayer === 'topo' ? 0 : activeLayer === 'hydro' ? 1 : 2;
  const activePhoto = trioImages[activeLayerIndex].url;

  const activeBiome = data.biomes[activeBiomeIdx] || data.biomes[0];
  const floraFaunaItems = activeBiome ? getBiomeFloraFauna(activeBiome.name) : [];
  const floraFaunaMedia: MediaItem[] = floraFaunaItems.map((it, i) => ({
    id: `${activeBiome?.name}-ff-${i}`,
    url: it.photo,
    alt: it.label,
    caption: `${it.label} — ${activeBiome?.name}`,
    credit: it.type === 'fauna' ? 'Fauna' : 'Flora',
    aspectRatio: 'square'
  }));

  const yearUnit = language === 'nl' ? 'jaar' : language === 'pt' ? 'ano' : 'year';
  const elevationPct = Math.min(100, Math.round((data.topography.elevationMeters / 3000) * 100));
  const rainPct = Math.min(100, Math.round((data.climate.annualRainfallMm / 3000) * 100));

  return (
    <div className="space-y-14 text-white">
      {/* 1. Interactive Nature Dossier (Single Focused Split-View instead of 3 Cloned Cards) */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-display font-bold uppercase text-xl sm:text-2xl text-white/95 tracking-wide">
            {language === 'nl'
              ? 'Natuur-dossier: reliëf, water & klimaat'
              : language === 'pt'
              ? 'Dossiê natural: relevo, águas & clima'
              : 'Nature dossier: relief, waters & climate'}
          </h4>

          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/25 border border-white/12">
            <button
              type="button"
              onClick={() => setActiveLayer('topo')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeLayer === 'topo'
                  ? 'bg-brand-yellow text-brand-espresso'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>{labels.mod1TopoTitle}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveLayer('hydro')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeLayer === 'hydro'
                  ? 'bg-brand-yellow text-brand-espresso'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>{labels.mod1HydroTitle}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveLayer('climate')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeLayer === 'climate'
                  ? 'bg-brand-yellow text-brand-espresso'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{labels.mod1ClimateTitle}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/20 p-6 sm:p-8 rounded-3xl border border-white/12">
          {/* Left (6 cols): Large Straight Framed Photo */}
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => onOpenLightbox?.(trioImages, activeLayerIndex)}
              className="polaroid-card polaroid-card-interactive bg-[#F7F2E7] group w-full text-left text-brand-espresso cursor-pointer"
              title="Fullscreen"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-900">
                <img
                  src={activePhoto}
                  alt={trioImages[activeLayerIndex].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <Expand className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="mt-2.5 font-serif italic text-xs font-bold text-brand-espresso truncate">
                {activeLayer === 'topo'
                  ? `${data.topography.highestPoint} (${data.topography.elevationMeters}m)`
                  : activeLayer === 'hydro'
                  ? data.hydrology.majorBasins[0]
                  : data.climate.temperatureRange}
              </p>
            </button>
          </div>

          {/* Right (6 cols): Structured Editorial Specs + Visual Meter */}
          <div className="lg:col-span-6 space-y-5">
            {activeLayer === 'topo' && (
              <>
                <div className="font-mono text-[11px] uppercase tracking-widest text-brand-yellow font-bold">
                  {labels.mod1HighestPoint}
                </div>
                <h5 className="font-display font-bold text-3xl text-white leading-tight">
                  {data.topography.highestPoint} — {data.topography.elevationMeters} m
                </h5>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-white/60">
                    <span>0 m</span>
                    <span>{data.topography.elevationMeters} m</span>
                    <span>3.000 m</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-brand-yellow rounded-full transition-all duration-500"
                      style={{ width: `${elevationPct}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {data.topography.terrainSummary}
                </p>
                <div className="pt-3 border-t border-white/10 text-xs text-white/70">
                  <span className="font-mono uppercase text-[10px] tracking-wider text-brand-yellow font-bold mr-2">
                    {labels.mod1Formations}:
                  </span>
                  {data.topography.majorFormations.join(' • ')}
                </div>
              </>
            )}

            {activeLayer === 'hydro' && (
              <>
                <div className="font-mono text-[11px] uppercase tracking-widest text-brand-yellow font-bold">
                  {labels.mod1Basins}
                </div>
                <h5 className="font-display font-bold text-3xl text-white leading-tight">
                  {data.hydrology.majorBasins[0]}
                </h5>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {data.hydrology.riverSystemSummary}
                </p>
                <div className="pt-3 border-t border-white/10 text-xs text-white/70">
                  <span className="font-mono uppercase text-[10px] tracking-wider text-brand-yellow font-bold mr-2">
                    {labels.mod1Basins}:
                  </span>
                  {data.hydrology.majorBasins.join(' • ')}
                </div>
              </>
            )}

            {activeLayer === 'climate' && (
              <>
                <div className="font-mono text-[11px] uppercase tracking-widest text-brand-yellow font-bold">
                  {data.climate.classification}
                </div>
                <h5 className="font-display font-bold text-3xl text-white leading-tight">
                  {data.climate.temperatureRange}
                </h5>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-white/70">
                    <span>{labels.mod1Rainfall}</span>
                    <span className="text-brand-yellow font-bold">
                      {data.climate.annualRainfallMm} mm / {yearUnit}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-brand-yellow rounded-full transition-all duration-500"
                      style={{ width: `${rainPct}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {data.climate.characteristics}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 2. Interactive Biome Field Guide Switcher */}
      {activeBiome && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-display font-bold uppercase text-xl sm:text-2xl text-white/95 tracking-wide flex items-center gap-2">
              <Trees className="w-5 h-5 text-brand-yellow" />
              <span>{labels.mod1BiomesTitle}</span>
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {data.biomes.map((b, i) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setActiveBiomeIdx(i)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors border ${
                    i === activeBiomeIdx
                      ? 'bg-brand-yellow text-brand-espresso border-brand-yellow'
                      : 'bg-black/20 text-white/80 border-white/12 hover:text-white'
                  }`}
                >
                  {b.name.split('(')[0].trim()} ({b.coveragePercentage}%)
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-black/20 rounded-3xl border border-white/12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h5 className="font-display font-bold text-2xl text-white">{activeBiome.name}</h5>
                <span className="font-mono text-xs font-bold text-brand-yellow shrink-0">
                  {activeBiome.coveragePercentage}% {labels.mod1Coverage}
                </span>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">{activeBiome.description}</p>
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-white/80">
                <div>
                  <span className="font-mono uppercase text-[10px] tracking-wider text-brand-yellow font-bold mr-2">
                    {labels.mod1KeyFauna}:
                  </span>
                  {activeBiome.keyFauna.join(' • ')}
                </div>
                <div>
                  <span className="font-mono uppercase text-[10px] tracking-wider text-brand-yellow font-bold mr-2">
                    {labels.mod1KeyFlora}:
                  </span>
                  {activeBiome.keyFlora.join(' • ')}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {floraFaunaItems.map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => onOpenLightbox?.(floraFaunaMedia, idx)}
                  className="group relative rounded-xl overflow-hidden bg-black/40 aspect-square border border-white/15 cursor-pointer text-left"
                  title={item.label}
                >
                  <img
                    src={item.photo}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white leading-tight line-clamp-2">
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Compact Environmental Challenges Footer */}
      <div className="p-6 bg-black/20 rounded-2xl border border-white/10">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow mb-3">
          <AlertTriangle className="w-4 h-4" />
          <span>{labels.mod1ChallengesTitle}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-white/80">
          {data.environmentalChallenges.map((ch, idx) => (
            <div key={ch.slice(0, 30)} className="flex items-start gap-2.5">
              <span className="text-brand-yellow font-mono font-bold shrink-0">0{idx + 1}</span>
              <span className="leading-relaxed">{ch}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
