import React, { useState } from 'react';
import { RotateCw, Sparkles, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import type { JeitinhoTerm } from '../../types';
import { brazilData } from '../../data/brazilData';
import { useLanguage } from '../../i18n/LanguageContext';

const JEITINHO_TRANSLATIONS_NL: Record<
  string,
  { literalNl: string; meaningNl: string; contextNl: string }
> = {
  Saudade: {
    literalNl: 'Diep nostalgisch verlangen; de aanwezigheid van een afwezigheid',
    meaningNl:
      'Het meest iconische woord uit het Portugees: de bitterzoete heimwee naar een geliefde persoon, een plek of een voorbij moment dat je voor altijd in je hart draagt.',
    contextNl: 'Nationale Braziliaanse ziel & bossa nova-poëzie'
  },
  'Jeitinho Brasileiro': {
    literalNl: 'De kleine Braziliaanse manier / creatieve improvisatie',
    meaningNl:
      'De kunst om met charme, humor, menselijkheid en vindingrijkheid een schijnbaar onmogelijke bureaucratische of praktische hindernis op te lossen.',
    contextNl: 'Dagelijks sociaal verkeer & vindingrijkheid'
  },
  Cafuné: {
    literalNl: 'Liefdevol met je vingertoppen door het haar van een geliefde strijken',
    meaningNl:
      'Een intiem, teder gebaar van genegenheid (afkomstig uit het Kimbundu) waarbij je iemand tot rust brengt door zachtjes over de hoofdhuid en door het haar te aaien.',
    contextNl: 'Intimiteit, familie & Afro-Braziliaanse taalerfenis'
  },
  Ginga: {
    literalNl: 'De ritmische wiegende basisbeweging van capoeira, voetbal en het leven',
    meaningNl:
      'De vloeiende lichaamsbeheersing waarmee een capoeirista (of voetballer als Pelé en Ronaldinho) zijn tegenstander op het verkeerde been zet.',
    contextNl: 'Capoeira, voetbal & straatkunst'
  },
  Axé: {
    literalNl: 'Heilige levenskracht, positieve energie en zegen (Yoruba: àṣẹ)',
    meaningNl:
      'Uit de Afro-Braziliaanse candomblé in Bahia: de vitale spirituele kracht die alles in beweging zet, én een warme groet om iemand geluk en goede energie te wensen.',
    contextNl: 'Bahia, candomblé & muziek'
  },
  Malandragem: {
    literalNl: 'Straatslimheid, charme en bohemien levensvreugde',
    meaningNl:
      'Het archetypische karakter van de "malandro" uit de samba van Rio de Janeiro in zijn witte linnen pak: iemand die met humor en elegantie langs de scherpe randjes van het leven danst.',
    contextNl: 'Samba van Rio de Janeiro & Lapa'
  },
  Gambiarra: {
    literalNl: 'Geniale geïmproviseerde technische noodoplossing',
    meaningNl:
      'Wanneer je met ijzerdraad, tape en pure creativiteit een apparaat of situatie weer aan de praat krijgt wanneer officiële onderdelen ontbreken.',
    contextNl: 'Alledaagse techniek & improvisatie'
  }
};

export const JeitinhoWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const vocabulary: JeitinhoTerm[] = brazilData.jeitinhoVocabulary;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const currentTerm = vocabulary[currentIndex] || vocabulary[0];
  const nlTrans = language === 'nl' ? JEITINHO_TRANSLATIONS_NL[currentTerm.term] : undefined;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
      }, 190);
    } else {
      setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
      }, 190);
    } else {
      setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }
  };

  const handleRandom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(randomIndex);
      }, 190);
    } else {
      setCurrentIndex(randomIndex);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-brand-terracotta" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-brand-terracotta">
            {t.bento.jeitinhoKicker}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleRandom}
            title="Willekeurig woord"
            aria-label="Willekeurige Braziliaanse term tonen"
            className="p-1.5 rounded-lg hover:bg-brand-surfaceMuted text-brand-slate hover:text-brand-espresso transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>
          <div className="text-xs font-mono font-bold text-brand-espresso bg-brand-surfaceMuted px-2 py-0.5 rounded-md border border-brand-sand">
            {currentIndex + 1} / {vocabulary.length}
          </div>
        </div>
      </div>

      <h3 className="font-display font-bold text-xl text-brand-espresso mb-2.5">
        {t.bento.jeitinhoTitle}
      </h3>

      {/* 3D Flip Card Container */}
      <div
        role="button"
        tabIndex={0}
        aria-label={language === 'nl' ? 'Draai Braziliaanse term kaart om' : 'Flip Brazilian term card'}
        className="perspective-1000 my-1 cursor-pointer select-none min-h-[175px] focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 rounded-2xl"
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
      >
        <div
          className={`relative w-full h-full min-h-[175px] preserve-3d transition-transform-380 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden bg-brand-surfaceMuted rounded-2xl p-4 border border-brand-sand flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-emerald text-brand-yellow">
                  {currentTerm.regionOrScope === 'National' && language === 'nl'
                    ? 'Heel Brazilië'
                    : currentTerm.regionOrScope}
                </span>
                <span className="text-xs text-brand-slate font-mono font-bold">
                  {currentTerm.phonetic}
                </span>
              </div>
              <h4 className="font-display font-bold text-3xl text-brand-espresso mt-2 mb-1 tracking-wide">
                {currentTerm.term}
              </h4>
              <p className="text-xs sm:text-sm text-brand-slate line-clamp-2 font-serif italic">
                “{nlTrans ? nlTrans.literalNl : currentTerm.literalTranslation}”
              </p>
            </div>

            <div className="pt-2.5 border-t border-brand-sand flex items-center justify-between text-xs text-brand-slate font-medium">
              <span className="truncate max-w-[230px]">
                {nlTrans ? nlTrans.contextNl : currentTerm.culturalContext}
              </span>
              <span className="flex items-center gap-1 text-brand-emerald font-bold shrink-0">
                <span>{language === 'nl' ? 'Draai om' : language === 'pt' ? 'Girar' : 'Flip'}</span>
                <RotateCw className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-espresso text-white rounded-2xl p-4 border border-brand-yellow/50 flex flex-col justify-between">
            <div className="editorial-scrollbar overflow-y-auto max-h-[125px] pr-1">
              <div className="text-[11px] font-mono font-bold text-brand-yellow mb-1">
                {t.bento.jeitinhoDeepMeaning}
              </div>
              <p className="text-xs text-stone-100 leading-relaxed mb-2">
                {nlTrans ? nlTrans.meaningNl : currentTerm.culturalMeaning}
              </p>
              <div className="p-2 rounded-xl bg-white/10 border border-white/15 text-[11px] text-stone-100">
                <div className="font-serif italic text-brand-yellow">
                  “{currentTerm.exampleSentencePt}”
                </div>
                <div className="text-stone-300 text-[10px] mt-0.5">
                  {currentTerm.exampleSentenceEn}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-brand-yellow font-mono">
              <span>{language === 'nl' ? 'Klik om terug te draaien' : 'Click to flip back'}</span>
              <RotateCw className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-3 pt-2.5 border-t border-brand-sand flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={handlePrev}
          aria-label={t.bento.jeitinhoPrev}
          className="px-3 py-1.5 rounded-xl bg-brand-surfaceMuted hover:bg-brand-yellow text-brand-espresso border border-brand-sand font-bold flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{t.bento.jeitinhoPrev}</span>
        </button>
        <span className="text-[11px] text-brand-slate hidden sm:inline">
          {t.bento.jeitinhoFlipHint}
        </span>
        <button
          type="button"
          onClick={handleNext}
          aria-label={t.bento.jeitinhoNext}
          className="px-3 py-1.5 rounded-xl bg-brand-surfaceMuted hover:bg-brand-yellow text-brand-espresso border border-brand-sand font-bold flex items-center gap-1 transition-colors"
        >
          <span>{t.bento.jeitinhoNext}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
