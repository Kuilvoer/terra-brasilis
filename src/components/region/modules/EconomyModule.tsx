import React from 'react';
import { Globe2, Factory, Leaf, Expand, Ship } from 'lucide-react';
import type { EconomyModule as EconomyModuleType, RegionId, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';

const REGIONAL_COMPANIES: Record<string, { name: string; tag: string; bg: string }[]> = {
  north: [
    { name: 'VALE', tag: 'Carajás Mineração', bg: 'bg-[#D97706] text-white' },
    { name: 'SAMSUNG / LG', tag: 'Polo Industrial Manaus', bg: 'bg-[#0284C7] text-white' },
    { name: 'HONDA', tag: 'Motocicletas Manaus', bg: 'bg-[#DC2626] text-white' },
    { name: 'NATURA', tag: 'Bioeconomia Amazônica', bg: 'bg-[#057A44] text-white' }
  ],
  northeast: [
    { name: 'BYD', tag: 'Polo Automotivo Camaçari', bg: 'bg-[#0284C7] text-white' },
    { name: 'BRASKEM', tag: 'Polo Petroquímico BA/AL', bg: 'bg-[#2563EB] text-white' },
    { name: 'M. DIAS BRANCO', tag: 'Líder Alimentos Fortaleza', bg: 'bg-[#DC2626] text-white' },
    { name: 'SUZANO', tag: 'Celulose Mucuri', bg: 'bg-[#057A44] text-white' }
  ],
  'center-west': [
    { name: 'JBS / FRIBOI', tag: 'Agro & Proteína Animal', bg: 'bg-[#DC2626] text-white' },
    { name: 'AMAGGI', tag: 'Grãos & Logística MT', bg: 'bg-[#057A44] text-white' },
    { name: 'INPASA', tag: 'Biorrefinarias Etanol Milho', bg: 'bg-[#D97706] text-white' },
    { name: 'SLC AGRÍCOLA', tag: 'Agricultura de Precisão', bg: 'bg-[#15803D] text-white' }
  ],
  southeast: [
    { name: 'PETROBRAS', tag: 'Offshore & Pré-Sal RJ', bg: 'bg-[#057A44] text-white' },
    { name: 'EMBRAER', tag: 'Aviação S.J. dos Campos', bg: 'bg-[#0284C7] text-white' },
    { name: 'ITAÚ / B3', tag: 'Hub Financeiro São Paulo', bg: 'bg-[#EA580C] text-white' },
    { name: 'GERDAU / CSN', tag: 'Siderurgia & Aço MG/RJ', bg: 'bg-[#2563EB] text-white' }
  ],
  south: [
    { name: 'WEG', tag: 'Motores & Automação SC', bg: 'bg-[#0284C7] text-white' },
    { name: 'KLABIN', tag: 'Papel & Embalagens PR', bg: 'bg-[#057A44] text-white' },
    { name: 'TRAMONTINA', tag: 'Metalurgia & Cutelaria RS', bg: 'bg-[#DC2626] text-white' },
    { name: 'BRF / SADIA', tag: 'Agroindústria Chapecó', bg: 'bg-[#D97706] text-white' }
  ]
};

const EXPORT_COMMODITY_PHOTOS: Record<string, string> = {
  'Soja (Soybeans)': 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop',
  'IJzererts (Iron Ore)': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&auto=format&fit=crop',
  'Koffie (Café)': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop',
  'Rundvlees (Beef)': 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&auto=format&fit=crop',
  'Vliegtuigen (Aircraft)': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop',
  'Ruwe Aardolie (Crude Oil)': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop',
  'Suiker & Bio-ethanol': 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop',
  'Cellulose & Papier': 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&auto=format&fit=crop',
  'Halfgeleiders & Elektronica': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop'
};

function getCommodityPhoto(commodity: string, fallback?: string): string | undefined {
  if (EXPORT_COMMODITY_PHOTOS[commodity]) return EXPORT_COMMODITY_PHOTOS[commodity];
  const c = commodity.toLowerCase();
  if (c.includes('soja') || c.includes('soy')) return EXPORT_COMMODITY_PHOTOS['Soja (Soybeans)'];
  if (c.includes('ijzer') || c.includes('iron') || c.includes('mineral') || c.includes('minério'))
    return EXPORT_COMMODITY_PHOTOS['IJzererts (Iron Ore)'];
  if (c.includes('koffie') || c.includes('café') || c.includes('coffee'))
    return EXPORT_COMMODITY_PHOTOS['Koffie (Café)'];
  if (c.includes('rund') || c.includes('beef') || c.includes('vlees') || c.includes('pluimvee') || c.includes('varken') || c.includes('carne'))
    return EXPORT_COMMODITY_PHOTOS['Rundvlees (Beef)'];
  if (c.includes('vliegtuig') || c.includes('aircraft') || c.includes('embraer') || c.includes('aeronave'))
    return EXPORT_COMMODITY_PHOTOS['Vliegtuigen (Aircraft)'];
  if (c.includes('olie') || c.includes('oil') || c.includes('petro'))
    return EXPORT_COMMODITY_PHOTOS['Ruwe Aardolie (Crude Oil)'];
  if (c.includes('suiker') || c.includes('sugar') || c.includes('ethanol') || c.includes('açúcar'))
    return EXPORT_COMMODITY_PHOTOS['Suiker & Bio-ethanol'];
  if (c.includes('cellulose') || c.includes('celulose') || c.includes('papier') || c.includes('hout'))
    return EXPORT_COMMODITY_PHOTOS['Cellulose & Papier'];
  if (c.includes('elektron') || c.includes('motor') || c.includes('halfgeleider') || c.includes('eletrôn'))
    return EXPORT_COMMODITY_PHOTOS['Halfgeleiders & Elektronica'];
  if (c.includes('açaí') || c.includes('fruit') || c.includes('mango') || c.includes('druif') || c.includes('fruta'))
    return 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop';
  return fallback;
}

interface EconomyModuleProps {
  data: EconomyModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  regionName?: string;
  regionId?: RegionId;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

export const EconomyModule: React.FC<EconomyModuleProps> = ({
  data,
  featuredPhotoUrl,
  regionName,
  regionId = 'southeast',
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const exportMedia: MediaItem[] = data.keyExports.map((exp, idx) => ({
    id: `export-${idx}`,
    url: getCommodityPhoto(exp.commodity, featuredPhotoUrl) || '',
    alt: exp.commodity,
    caption: `${exp.commodity} — ${exp.economicSignificance}`,
    credit: `${exp.globalRank || regionName || 'Export'} • ${exp.keyMarkets.join(', ')}`,
    aspectRatio: 'landscape'
  }));

  const labelGdpHubs =
    language === 'nl'
      ? 'BBP-aandeel & hubs'
      : language === 'pt'
      ? 'Participação no PIB & polos'
      : 'GDP share & hubs';

  const labelCompanies =
    language === 'nl'
      ? 'Toonaangevende bedrijven'
      : language === 'pt'
      ? 'Empresas de destaque'
      : 'Leading companies';

  const labelManifestKicker =
    language === 'nl'
      ? 'Handelsmanifest • Wereldwijde export'
      : language === 'pt'
      ? 'Manifesto comercial • Exportações globais'
      : 'Trade manifest • Global exports';

  return (
    <div className="space-y-8 text-white">
      {/* MAIN 12-COL TRADE & SECTOR DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT (7 cols): Sector Share Breakdown + Corporate Champions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-7 bg-black/20 rounded-3xl border border-white/12 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
              <h4 className="font-display font-bold uppercase text-2xl text-white flex items-center gap-2 tracking-wide">
                <Factory className="w-5 h-5 text-brand-yellow" />
                <span>{labels.mod5SectorsTitle}</span>
              </h4>
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-brand-yellow text-brand-espresso">
                {labelGdpHubs}
              </span>
            </div>

            <div className="space-y-4">
              {data.leadingSectors.map((sec, idx) => (
                <div
                  key={sec.sector}
                  className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded-lg bg-brand-yellow text-brand-espresso font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <h5 className="font-display font-bold text-lg sm:text-xl text-white truncate">
                        {sec.sector}
                      </h5>
                    </div>
                    {sec.contributionGdpPercentage && (
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-brand-yellow shrink-0 tabular-nums">
                        {sec.contributionGdpPercentage}% {labels.mod5SectorGdp}
                      </span>
                    )}
                  </div>

                  {sec.contributionGdpPercentage && (
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-yellow rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(100, sec.contributionGdpPercentage * 2)}%` }}
                      />
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="pt-2 border-t border-white/10 text-xs flex flex-wrap items-center gap-1.5">
                    <span className="font-bold text-brand-yellow">{labels.mod5RegionalHubs}:</span>
                    {sec.regionalHubs.map((hub) => (
                      <span
                        key={hub}
                        className="px-2 py-0.5 rounded bg-white/10 border border-white/12 text-stone-100 font-medium text-[11px]"
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Champions Strip */}
          <div className="p-6 bg-black/20 rounded-3xl border border-white/12 space-y-4">
            <div className="text-[11px] font-mono uppercase font-bold tracking-widest text-brand-yellow flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5" />
              <span>{labelCompanies}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(REGIONAL_COMPANIES[regionId] || REGIONAL_COMPANIES.southeast).map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.05] border border-white/10"
                >
                  <span className={`px-2.5 py-1 rounded font-mono font-bold text-[10px] tracking-wider shrink-0 ${comp.bg}`}>
                    {comp.name}
                  </span>
                  <span className="text-xs text-stone-200 font-medium text-right truncate">
                    {comp.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT (5 cols): Global Trade Manifest Rows + Clean Energy Innovation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 bg-black/25 rounded-3xl border border-white/15 space-y-5">
            <div className="border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow mb-1">
                <Ship className="w-3.5 h-3.5" />
                <span>{labelManifestKicker}</span>
              </div>
              <h4 className="font-display font-bold uppercase text-2xl text-white tracking-wide">
                {labels.mod5ExportsTitle}
              </h4>
            </div>

            <div className="divide-y divide-white/10">
              {data.keyExports.map((exp, idx) => {
                const photo = getCommodityPhoto(exp.commodity, featuredPhotoUrl);
                return (
                  <div key={exp.commodity} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    {photo && (
                      <button
                        type="button"
                        onClick={() => onOpenLightbox?.(exportMedia, idx)}
                        className="group relative w-20 h-20 rounded-xl overflow-hidden bg-stone-900 border border-white/15 shrink-0 cursor-pointer"
                        title={
                          language === 'nl'
                            ? `Bekijk ${exp.commodity} fullscreen`
                            : language === 'pt'
                            ? `Ver ${exp.commodity} em tela cheia`
                            : `View ${exp.commodity} fullscreen`
                        }
                      >
                        <img
                          src={photo}
                          alt={exp.commodity}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute inset-0 bg-brand-espresso/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Expand className="w-4 h-4 text-brand-yellow" />
                        </span>
                      </button>
                    )}

                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="font-display font-bold text-lg text-white leading-tight">
                          {exp.commodity}
                        </h5>
                        {exp.globalRank && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-yellow text-brand-espresso font-mono text-[10px] font-bold uppercase shrink-0">
                            <Globe2 className="w-3 h-3" />
                            {exp.globalRank}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed">
                        {exp.economicSignificance}
                      </p>
                      <div className="text-[11px] font-mono text-stone-300">
                        <span className="text-brand-yellow font-bold uppercase">
                          {labels.mod5Destinations}:{' '}
                        </span>
                        {exp.keyMarkets.join(' • ')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Innovation & Clean Energy Card */}
          <div className="p-6 bg-black/20 text-white rounded-3xl border border-white/12 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow">
              <Leaf className="w-3.5 h-3.5" />
              <span>
                {language === 'nl'
                  ? 'Innovatie & Groene Energie'
                  : language === 'pt'
                  ? 'Inovação & Energia Limpa'
                  : 'Innovation & Clean Energy'}
              </span>
            </div>
            <p className="text-sm text-stone-100 leading-relaxed">
              {data.innovationAndFuture.renewableEnergy}
            </p>
            {(data.innovationAndFuture.aviationOrTech ||
              data.innovationAndFuture.sustainableAgribusiness) && (
              <div className="pt-3 border-t border-white/15 space-y-1.5 text-xs text-stone-200">
                {data.innovationAndFuture.aviationOrTech && (
                  <p className="leading-relaxed">{data.innovationAndFuture.aviationOrTech}</p>
                )}
                {data.innovationAndFuture.sustainableAgribusiness && (
                  <p className="leading-relaxed">
                    {data.innovationAndFuture.sustainableAgribusiness}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
