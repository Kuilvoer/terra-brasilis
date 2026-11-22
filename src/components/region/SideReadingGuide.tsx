import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToTarget } from '../../hooks/useLenisGsap';
import { useLanguage } from '../../i18n/LanguageContext';

export interface ReadingGuideSection {
  id: string;
  shortCode: string;
  labelNl: string;
  labelEn: string;
  labelPt: string;
}

interface SideReadingGuideProps {
  sections: ReadingGuideSection[];
}

export const SideReadingGuide: React.FC<SideReadingGuideProps> = ({ sections }) => {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveId(sections[0]?.id || '');

    let ticking = false;
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.35;
      let current = sections[0]?.id || '';

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = sec.id;
          }
        }
      }
      setActiveId(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections]);

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <aside
      aria-label="Inhoudsopgave"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-40 select-none"
    >
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-2 px-2.5 py-3 rounded-2xl bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/15 text-white/90 transition-all shadow-lg"
          aria-label="Open inhoudsopgave"
        >
          <Menu className="w-4 h-4 text-brand-yellow" />
          <span className="font-mono text-[11px] font-bold text-brand-yellow">
            {activeSection?.shortCode || '00'}
          </span>
        </button>
      ) : (
        <div className="flex flex-col gap-1 p-2.5 rounded-2xl bg-[#18130F]/92 backdrop-blur-md border border-white/15 shadow-2xl w-[210px] animate-fadeIn">
          <div className="flex items-center justify-between px-2.5 py-1.5 mb-1 border-b border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">
              {language === 'nl' ? 'Inhoud' : language === 'pt' ? 'Índice' : 'Contents'}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-0.5"
              aria-label="Sluit inhoudsopgave"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            const label =
              language === 'nl'
                ? sec.labelNl
                : language === 'pt'
                ? sec.labelPt
                : sec.labelEn;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => {
                  setActiveId(sec.id);
                  scrollToTarget(`#${sec.id}`, -95);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-colors ${
                  isActive
                    ? 'bg-brand-yellow text-brand-espresso font-bold'
                    : 'text-white/75 hover:bg-white/10 hover:text-white font-medium'
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-bold shrink-0 ${
                    isActive ? 'text-brand-espresso' : 'text-brand-yellow/80'
                  }`}
                >
                  {sec.shortCode}
                </span>
                <span className="text-xs truncate leading-snug">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
};
