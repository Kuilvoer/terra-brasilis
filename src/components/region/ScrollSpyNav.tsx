import React, { useRef, useEffect } from 'react';
import {
  MapPin,
  Compass,
  Landmark,
  Music,
  UtensilsCrossed,
  TrendingUp,
  Trophy,
  Camera
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ScrollSpyNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  accentShadowColor?: string;
  regionName?: string;
}

export const ScrollSpyNav: React.FC<ScrollSpyNavProps> = ({
  activeTab,
  onTabChange,
  accentShadowColor = '#18130F',
  regionName
}) => {
  const { language, t } = useLanguage();
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const tabs: Array<{ id: string; shortCode: string; label: string; icon: React.ReactNode }> = [
    {
      id: 'region-map',
      shortCode: '00',
      label: language === 'nl' ? 'Regiokaart' : language === 'pt' ? 'Mapa regional' : 'Region map',
      icon: <MapPin className="w-3.5 h-3.5" />
    },
    {
      id: 'geography',
      shortCode: '01',
      label: t.regionView.tabs.geography,
      icon: <Compass className="w-3.5 h-3.5" />
    },
    {
      id: 'history',
      shortCode: '02',
      label: t.regionView.tabs.history,
      icon: <Landmark className="w-3.5 h-3.5" />
    },
    {
      id: 'culture',
      shortCode: '03',
      label: t.regionView.tabs.culture,
      icon: <Music className="w-3.5 h-3.5" />
    },
    {
      id: 'gastronomy',
      shortCode: '04',
      label: t.regionView.tabs.gastronomy,
      icon: <UtensilsCrossed className="w-3.5 h-3.5" />
    },
    {
      id: 'economy',
      shortCode: '05',
      label: t.regionView.tabs.economy,
      icon: <TrendingUp className="w-3.5 h-3.5" />
    },
    {
      id: 'sports',
      shortCode: '06',
      label: t.regionView.tabs.sports,
      icon: <Trophy className="w-3.5 h-3.5" />
    },
    {
      id: 'multimedia',
      shortCode: '07',
      label: t.regionView.tabs.multimedia,
      icon: <Camera className="w-3.5 h-3.5" />
    }
  ];

  // Auto-scroll the tab bar horizontally so active item is always visible/centered
  useEffect(() => {
    const el = tabButtonRefs.current[activeTab];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  return (
    <div className="sticky top-[58px] md:top-[66px] z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-sand py-2.5 px-3 sm:px-6 shadow-subtle transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
        {/* Region Badge on Left for immediate context */}
        {regionName && (
          <div className="hidden lg:flex items-center gap-2 pr-3 border-r border-brand-sand shrink-0">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-sm"
              style={{ backgroundColor: accentShadowColor }}
            />
            <span className="font-display font-bold uppercase tracking-wider text-xs text-brand-espresso">
              {regionName}
            </span>
          </div>
        )}

        {/* Horizontal Scrollable Tabs */}
        <div className="flex-1 flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                ref={(el) => {
                  tabButtonRefs.current[tab.id] = el;
                }}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 sm:gap-2 transition-colors border shrink-0 ${
                  isActive
                    ? 'bg-brand-espresso text-brand-yellow border-brand-espresso shadow-sm'
                    : 'bg-white text-brand-espresso border-brand-sand hover:border-brand-ochre hover:bg-brand-surfaceMuted'
                }`}
              >
                <span
                  className={`text-[10px] font-mono px-1 py-0.5 rounded font-bold ${
                    isActive
                      ? 'bg-brand-yellow text-brand-espresso'
                      : 'bg-brand-surfaceMuted text-brand-slate'
                  }`}
                >
                  {tab.shortCode}
                </span>
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
