import React, { useState } from 'react';
import { Compass, Menu, X, Globe } from 'lucide-react';
import type { RegionId, ActiveView } from '../../types';
import { useLanguage, FlagIcon } from '../../i18n/LanguageContext';
import type { LanguageCode } from '../../i18n/translations';

interface NavbarProps {
  activeView: ActiveView;
  onNavigateHome: () => void;
  onNavigateRegion: (regionId: RegionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigateHome,
  onNavigateRegion
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const regionNamesByLang: Record<LanguageCode, Record<RegionId, string>> = {
    nl: {
      north: 'Noord',
      northeast: 'Noordoost',
      'center-west': 'Centraal-West',
      southeast: 'Zuidoost',
      south: 'Zuid'
    },
    en: {
      north: 'North',
      northeast: 'Northeast',
      'center-west': 'Center-West',
      southeast: 'Southeast',
      south: 'South'
    },
    pt: {
      north: 'Norte',
      northeast: 'Nordeste',
      'center-west': 'Centro-Oeste',
      southeast: 'Sudeste',
      south: 'Sul'
    }
  };

  const regions: Array<{ id: RegionId; num: string; name: string; tag: string }> = [
    { id: 'north', num: '01', name: regionNamesByLang[language].north, tag: 'Amazônia' },
    { id: 'northeast', num: '02', name: regionNamesByLang[language].northeast, tag: 'Bahia & Sertão' },
    { id: 'center-west', num: '03', name: regionNamesByLang[language]['center-west'], tag: 'Pantanal & Brasília' },
    { id: 'southeast', num: '04', name: regionNamesByLang[language].southeast, tag: 'Rio, SP & Minas' },
    { id: 'south', num: '05', name: regionNamesByLang[language].south, tag: 'Iguaçu & Pampas' }
  ];

  const languages: Array<{ code: LanguageCode; label: string; short: string }> = [
    { code: 'nl', label: 'Nederlands', short: 'NL' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'pt', label: 'Português (Brasil)', short: 'PT' }
  ];

  const handleRegionClick = (id: RegionId) => {
    onNavigateRegion(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-espresso text-white border-b border-brand-sand/30 shadow-subtle transition-colors">
      {/* Main Masthead Header — Clean & High Contrast */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-3">
        {/* Left: Brand Masthead (Clicking "Terra Brasilis" navigates to Home) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            aria-label="Terra Brasilis Home"
            className="cursor-pointer group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/60 rounded-lg p-0.5"
          >
            <div className="flex items-center gap-2">
              <FlagIcon code="pt" className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-[3px] shadow-sm border border-white/25 group-hover:scale-110 transition-transform shrink-0" />
              <h1 className="font-display font-bold tracking-wide text-lg sm:text-2xl lg:text-3xl text-white uppercase select-none group-hover:text-brand-yellow transition-colors whitespace-nowrap">
                Terra Brasilis
              </h1>
            </div>
            <p className="hidden md:block text-[10px] font-mono tracking-wider text-stone-300 -mt-0.5 ml-8">
              {t.meta.subtitle}
            </p>
          </button>
        </div>

        {/* Center: Desktop 5-Region Selector Pills (High Contrast Active & Inactive States) */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-black/30 p-1.5 rounded-2xl border border-white/15">
          <button
            type="button"
            onClick={onNavigateHome}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
              activeView.type === 'home'
                ? 'bg-brand-yellow text-brand-espresso shadow-sm'
                : 'text-stone-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{t.nav.overview}</span>
          </button>

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          {regions.map((r) => {
            const isSelected = activeView.type === 'region' && activeView.regionId === r.id;

            return (
              <button
                key={r.id}
                type="button"
                onClick={() => handleRegionClick(r.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-yellow text-brand-espresso shadow-sm'
                    : 'text-stone-200 hover:bg-brand-emerald hover:text-white'
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    isSelected ? 'text-brand-espresso font-bold' : 'text-brand-yellow/80'
                  }`}
                >
                  {r.num}
                </span>
                <span>{r.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: 3-Flag Language Switcher (NL / EN / PT-BR) + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div
            className="flex items-center gap-0.5 sm:gap-1 bg-black/30 p-0.5 sm:p-1 rounded-xl border border-white/15"
            role="group"
            aria-label={t.nav.chooseLanguage}
          >
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  title={lang.label}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-brand-yellow text-brand-espresso shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FlagIcon code={lang.code} className="w-3.5 h-2.5 sm:w-4 sm:h-3 rounded-[2px] shadow-sm" />
                  <span>{lang.short}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/15 bg-brand-espresso px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <button
            onClick={() => {
              onNavigateHome();
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeView.type === 'home'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'bg-white/10 text-white border border-white/15'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{t.nav.overview}</span>
          </button>

          <div className="pt-2 text-[11px] font-mono font-bold tracking-widest uppercase text-brand-yellow px-1">
            5 Macro-Regio&apos;s
          </div>

          {regions.map((r) => {
            const isSelected = activeView.type === 'region' && activeView.regionId === r.id;

            return (
              <button
                key={r.id}
                onClick={() => handleRegionClick(r.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between border ${
                  isSelected
                    ? 'bg-brand-yellow text-brand-espresso border-brand-yellow'
                    : 'bg-white/5 text-white border-white/15 hover:bg-brand-emerald'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs opacity-80">{r.num}</span>
                  <span>{r.name}</span>
                </div>
                <span
                  className={`text-xs font-normal ${
                    isSelected ? 'text-brand-espresso/80 font-semibold' : 'text-stone-300'
                  }`}
                >
                  {r.tag}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
