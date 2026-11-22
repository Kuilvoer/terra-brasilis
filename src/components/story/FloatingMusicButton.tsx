import React, { useEffect, useRef, useState } from 'react';
import { Music, Volume2, Disc3 } from 'lucide-react';
import type { RegionId } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { REGIONAL_SOUNDSCAPE_TRACKS, type SoundscapeTrack } from '../../data/soundscapes';

export type { SoundscapeTrack };

interface FloatingMusicButtonProps {
  activeRegionId?: RegionId;
}

export const FloatingMusicButton: React.FC<FloatingMusicButtonProps> = ({
  activeRegionId
}) => {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(1); // Default to tropical on home
  const [showTooltip, setShowTooltip] = useState(false);

  // Automatically sync track with activeRegionId when navigating to a region
  useEffect(() => {
    if (!activeRegionId) return;
    const foundIdx = REGIONAL_SOUNDSCAPE_TRACKS.findIndex(
      (t) => t.regionId === activeRegionId
    );
    if (foundIdx !== -1) {
      setTrackIndex(foundIdx);
    }
  }, [activeRegionId]);

  const currentTrack = REGIONAL_SOUNDSCAPE_TRACKS[trackIndex] || REGIONAL_SOUNDSCAPE_TRACKS[0];

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = currentTrack.src;
    audio.loop = true;
    audio.volume = 0.55;
    audio.onerror = () => {
      if (audio.src !== window.location.origin + currentTrack.fallbackSrc) {
        audio.src = currentTrack.fallbackSrc;
        if (isPlaying) {
          audio.play().catch(() => setIsPlaying(false));
        }
      }
    };
    audioRef.current = audio;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [trackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const switchTrack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackIndex((prev) => (prev + 1) % REGIONAL_SOUNDSCAPE_TRACKS.length);
  };

  const trackLabel =
    language === 'nl'
      ? currentTrack.labelNl
      : language === 'pt'
        ? currentTrack.labelPt
        : currentTrack.labelEn;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Compact Track Pill (Only visible on hover or when playing) */}
      {(showTooltip || isPlaying) && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-brand-espresso text-white border border-brand-sand shadow-card text-xs animate-fadeIn">
          <Disc3
            className={`w-4 h-4 text-brand-yellow shrink-0 ${
              isPlaying ? 'animate-spin' : ''
            }`}
          />
          <span className="font-mono text-[11px] font-bold text-brand-yellow truncate max-w-[220px]">
            {trackLabel}
          </span>
          <button
            type="button"
            onClick={switchTrack}
            className="px-2 py-0.5 rounded bg-white/15 hover:bg-brand-yellow hover:text-brand-espresso text-[10px] font-mono font-bold transition-colors"
            title={
              language === 'nl'
                ? 'Volgende regionale sfeer'
                : language === 'pt'
                  ? 'Próxima região'
                  : 'Next regional soundscape'
            }
          >
            ↻
          </button>
        </div>
      )}

      {/* Subtle Corner Music Note Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label="Braziliaanse regionale sfeermuziek"
        title={
          isPlaying
            ? `${trackLabel} (Klik om te pauzeren)`
            : `${trackLabel} (Klik om af te spelen)`
        }
        className={`w-12 h-12 rounded-2xl border shadow-lg hover:shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-0.5 backdrop-blur-md ${
          isPlaying
            ? 'bg-brand-yellow text-brand-espresso border-brand-yellow'
            : 'bg-[#18130F]/90 text-brand-yellow border-white/20 hover:bg-brand-yellow hover:text-brand-espresso hover:border-brand-yellow'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
