import React, { useState, useRef } from 'react';
import { Expand, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import type { MediaItem } from '../../types';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../i18n/regionLocalizations';

interface MasonryGalleryProps {
  images: MediaItem[];
  regionName: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  regionName,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const stripRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (index: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(images, index);
    } else {
      setSelectedPhotoIndex(index);
      setLightboxOpen(true);
    }
  };

  const scrollToSlide = (targetIdx: number) => {
    const el = stripRef.current;
    if (!el || images.length === 0) return;
    const clamped = Math.max(0, Math.min(images.length - 1, targetIdx));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft,
        behavior: 'smooth'
      });
    }
    setActiveSlideIdx(clamped);
  };

  const handleScroll = () => {
    const el = stripRef.current;
    if (!el || images.length === 0) return;
    const firstCard = el.children[0] as HTMLElement | undefined;
    if (!firstCard) return;
    const step = firstCard.offsetWidth + 24;
    if (step > 0) {
      const idx = Math.round(el.scrollLeft / step);
      setActiveSlideIdx(Math.max(0, Math.min(images.length - 1, idx)));
    }
  };

  const formatNum = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="space-y-5">
      {/* Header + Filmstrip Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow mb-1">
            <Camera className="w-3.5 h-3.5" />
            <span>
              {regionName} •{' '}
              {language === 'nl'
                ? 'Polaroid-filmstrip • sleep of klik'
                : language === 'pt'
                ? 'Galeria Polaroid • deslize ou clique'
                : 'Polaroid filmstrip • slide or click'}
            </span>
          </div>
          <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-wide">
            {labels.mod7GalleryTitle}
          </h4>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <span className="font-mono text-xs font-bold text-brand-yellow tabular-nums mr-1">
            {formatNum(activeSlideIdx + 1)} / {formatNum(images.length)}
          </span>
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlideIdx - 1)}
            disabled={activeSlideIdx === 0}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-brand-yellow text-white hover:text-brand-espresso border border-white/15 transition-colors disabled:opacity-35 disabled:pointer-events-none"
            aria-label={language === 'nl' ? 'Vorige foto' : language === 'pt' ? 'Foto anterior' : 'Previous photo'}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlideIdx + 1)}
            disabled={activeSlideIdx >= images.length - 1}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-brand-yellow text-white hover:text-brand-espresso border border-white/15 transition-colors disabled:opacity-35 disabled:pointer-events-none"
            aria-label={language === 'nl' ? 'Volgende foto' : language === 'pt' ? 'Próxima foto' : 'Next photo'}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Polaroid Filmstrip Carousel */}
      <div
        ref={stripRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {images.map((item, idx) => (
          <button
            key={item.id || item.url || idx}
            type="button"
            onClick={() => openLightbox(idx)}
            className="snap-start shrink-0 w-[82vw] sm:w-[340px] lg:w-[360px] bg-[#F7F2E7] p-3 pb-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left text-brand-espresso border border-stone-300/60"
            title={
              language === 'nl'
                ? 'Klik voor fullscreen'
                : language === 'pt'
                ? 'Clique para tela cheia'
                : 'Click for fullscreen'
            }
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-900">
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-brand-espresso/80 text-brand-yellow font-mono text-[10px] font-bold tabular-nums">
                {formatNum(idx + 1)}
              </span>
              <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <Expand className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="mt-3">
              <p className="font-serif italic text-xs sm:text-sm font-bold text-brand-espresso line-clamp-2 leading-snug">
                {item.caption || item.alt}
              </p>
              <span className="text-[10px] text-brand-slate font-mono block mt-1.5 truncate">
                {item.credit}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Filmstrip Position Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {images.map((item, idx) => (
            <button
              key={`dot-${item.id || idx}`}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeSlideIdx
                  ? 'w-7 bg-brand-yellow'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Fallback Local Lightbox Modal */}
      {!onOpenLightbox && (
        <LightboxModal
          images={images}
          currentIndex={selectedPhotoIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setSelectedPhotoIndex}
        />
      )}
    </div>
  );
};
