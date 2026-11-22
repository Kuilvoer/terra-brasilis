import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaItem } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface LightboxModalProps {
  images: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

function getHighResUrl(url: string): string {
  if (!url) return url;
  if (url.includes('images.unsplash.com')) {
    if (url.includes('w=')) {
      return url.replace(/w=\d+/g, 'w=1600');
    }
    return `${url}${url.includes('?') ? '&' : '?'}w=1600&auto=format&fit=crop`;
  }
  return url;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const safeIndex = Math.min(Math.max(0, currentIndex), images.length - 1);
  const currentImage = images[safeIndex] || images[0];

  const ofWord = language === 'nl' ? 'van' : language === 'pt' ? 'de' : 'of';
  const archiveLabel =
    language === 'nl'
      ? 'Terra Brasilis Beeldarchief'
      : language === 'pt'
      ? 'Arquivo Terra Brasilis'
      : 'Terra Brasilis Archive';
  const closeTitle =
    language === 'nl' ? 'Sluiten (Esc)' : language === 'pt' ? 'Fechar (Esc)' : 'Close (Esc)';
  const prevTitle =
    language === 'nl'
      ? 'Vorige foto (Pijl links)'
      : language === 'pt'
      ? 'Foto Anterior (Seta Esquerda)'
      : 'Previous photo (Left arrow)';
  const nextTitle =
    language === 'nl'
      ? 'Volgende foto (Pijl rechts)'
      : language === 'pt'
      ? 'Próxima Foto (Seta Direita)'
      : 'Next photo (Right arrow)';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-md transition-opacity animate-fadeIn select-none p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.alt}
    >
      {/* Top Floating Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
          <span className="text-brand-yellow font-bold">
            {safeIndex + 1} {ofWord} {images.length}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-stone-200 hidden sm:inline">{archiveLabel}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-espresso backdrop-blur-md border border-white/20 text-white transition-colors"
          title={closeTitle}
          aria-label={closeTitle}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[86vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getHighResUrl(currentImage.url)}
          alt={currentImage.alt}
          className="max-h-[74vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-white/15 bg-stone-950"
        />

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-3.5 px-4 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs sm:text-sm font-sans text-stone-100 leading-snug">
            {currentImage.caption || currentImage.alt}
          </p>
          {currentImage.credit && (
            <span className="text-[11px] text-brand-yellow font-mono shrink-0">
              {currentImage.credit}
            </span>
          )}
        </div>
      </div>

      {/* Previous / Next Arrow Controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((safeIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-espresso backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105"
            title={prevTitle}
            aria-label={prevTitle}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((safeIndex + 1) % images.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-espresso backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105"
            title={nextTitle}
            aria-label={nextTitle}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};
