import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { RegionId } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface FooterProps {
  onSelectRegion: (id: RegionId) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectRegion, onNavigateHome }) => {
  const { language, t } = useLanguage();

  const footerTexts = {
    nl: {
      desc: 'Interactieve cultuur- en reisgids gewijd aan de geografie, geschiedenis, muziek en biodiversiteit van de vijf macro-regio’s van Brazilië.',
      edition: 'Interactieve cultuur- en natuurgids van Brazilië',
      regionsHeader: '5 regio’s van Brazilië',
      sourcesHeader: 'Open data & cartografie',
      colophonHeader: 'Design & technologie',
      colophonBody:
        'Gebouwd met React, TypeScript, Tailwind CSS, Lenis Smooth Scroll, GSAP ScrollTrigger en Leaflet Cartografie.'
    },
    en: {
      desc: 'Interactive cultural and travel guide dedicated to the geography, history, music, and biodiversity of Brazil’s five macro-regions.',
      edition: 'Interactive cultural & nature guide to Brazil',
      regionsHeader: '5 regions of Brazil',
      sourcesHeader: 'Open data & cartography',
      colophonHeader: 'Design & technology',
      colophonBody:
        'Built with React, TypeScript, Tailwind CSS, Lenis Smooth Scroll, GSAP ScrollTrigger, and Leaflet Cartography.'
    },
    pt: {
      desc: 'Guia interativo cultural e de viagem dedicado à geografia, história, música e biodiversidade das cinco macrorregiões do Brasil.',
      edition: 'Guia cultural e natural do Brasil',
      regionsHeader: '5 regiões do Brasil',
      sourcesHeader: 'Dados abertos & cartografia',
      colophonHeader: 'Design & tecnologia',
      colophonBody:
        'Construído com React, TypeScript, Tailwind CSS, Lenis Smooth Scroll, GSAP ScrollTrigger e Cartografia Leaflet.'
    }
  }[language];

  return (
    <footer className="border-t border-white/15 bg-brand-espresso text-stone-300 pt-14 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="space-y-3 md:col-span-1">
          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg p-0.5"
            onClick={onNavigateHome}
            aria-label="Terra Brasilis Home"
          >
            <span className="w-3 h-3 rounded-full bg-brand-yellow" />
            <h2 className="font-display font-bold tracking-wider text-2xl text-white uppercase">
              Terra Brasilis
            </h2>
          </button>
          <p className="text-xs text-stone-300 leading-relaxed font-sans">
            {footerTexts.desc}
          </p>
          <div className="text-[11px] text-brand-yellow font-mono font-bold">
            {footerTexts.edition}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow mb-3">
            {footerTexts.regionsHeader}
          </h3>
          <ul className="space-y-2 text-xs">
            {[
              { id: 'north' as RegionId, num: '01', nl: 'Noord (Amazone & Regenwoud)', en: 'North (Amazon & Rainforest)', pt: 'Norte (Amazônia)' },
              { id: 'northeast' as RegionId, num: '02', nl: 'Noordoost (Kust & Sertão)', en: 'Northeast (Coast & Sertão)', pt: 'Nordeste (Litoral & Sertão)' },
              { id: 'center-west' as RegionId, num: '03', nl: 'Centraal-West (Pantanal & Cerrado)', en: 'Center-West (Pantanal & Cerrado)', pt: 'Centro-Oeste (Pantanal)' },
              { id: 'southeast' as RegionId, num: '04', nl: 'Zuidoost (Metropolen & Koffie)', en: 'Southeast (Metropolises & Coffee)', pt: 'Sudeste (Metrópoles)' },
              { id: 'south' as RegionId, num: '05', nl: 'Zuid (Pampa & Watervallen)', en: 'South (Pampas & Waterfalls)', pt: 'Sul (Pampas & Cataratas)' }
            ].map((reg) => (
              <li key={reg.id}>
                <button
                  type="button"
                  onClick={() => onSelectRegion(reg.id)}
                  className="hover:text-brand-yellow transition-colors text-left"
                >
                  {reg.num}. {language === 'nl' ? reg.nl : language === 'pt' ? reg.pt : reg.en}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow mb-3">
            {footerTexts.sourcesHeader}
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.ibge.gov.br"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow flex items-center gap-1"
              >
                <span>IBGE — Censo &amp; Geociências</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://open-meteo.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow flex items-center gap-1"
              >
                <span>Open-Meteo Live Weather API</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://www.frankfurter.app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow flex items-center gap-1"
              >
                <span>Frankfurter ECB Exchange API</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://whc.unesco.org/en/statesparties/br"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow flex items-center gap-1"
              >
                <span>UNESCO World Heritage Brazil</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow mb-3">
            {language === 'nl' ? 'Auteur & Curatie' : language === 'pt' ? 'Autor & Curadoria' : 'Author & Curation'}
          </h3>
          <p className="text-xs text-stone-200 leading-relaxed mb-3">
            <span className="font-bold text-white font-serif text-sm block">Rody Damman</span>
            {language === 'nl'
              ? 'Concept, samenstelling en visueel ontwerp van de interactieve Terra Brasilis encyclopedie & cultuurgids.'
              : language === 'pt'
              ? 'Conceito, pesquisa e design visual da enciclopédia interativa Terra Brasilis.'
              : 'Concept, research, and visual curation of the Terra Brasilis interactive expedition guide.'}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-emerald text-brand-yellow font-mono text-[11px] font-bold">
            <span>© 2026 Rody Damman • Terra Brasilis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
