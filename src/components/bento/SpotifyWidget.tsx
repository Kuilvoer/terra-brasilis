import React, { useState, useRef, useEffect } from 'react';
import { Radio, ExternalLink, Play, Pause, Disc3, Music2 } from 'lucide-react';
import { VERIFIED_SPOTIFY_PLAYLISTS } from '../../data/fallbacks';
import type { SpotifyPlaylist } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

export const SpotifyWidget: React.FC = () => {
  const { language, t } = useLanguage();
  const playlists: SpotifyPlaylist[] = VERIFIED_SPOTIFY_PLAYLISTS;
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>(playlists[0].id);
  const [isPlayingLocal, setIsPlayingLocal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentPlaylist =
    playlists.find((p) => p.id === selectedPlaylistId) || playlists[0];

  // Choose authentic Brazilian audio recording per region
  const getRegionAudioSrc = (rId?: string) => {
    switch (rId) {
      case 'north':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Heitor_Villa-Lobos_-_Trio_for_Oboe%2C_Clarinet_and_Bassoon_-_1._Anime.ogg';
      case 'northeast':
        return 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Toque-de-angola.ogg';
      case 'center-west':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/49/ESCOVADO_%28Ernesto_Nazareth%29_-_Ernesto_Nazareth_1907.ogg';
      case 'southeast':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/1_x_0_Pixinguinha_e_Benedito.ogg';
      case 'south':
        return 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Milonga_Negra%2C_Milonga.ogg';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/1_x_0_Pixinguinha_e_Benedito.ogg';
    }
  };

  const audioSrc = getRegionAudioSrc(currentPlaylist.regionId);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    if (isPlayingLocal) {
      audio.play().catch(() => setIsPlayingLocal(false));
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [audioSrc]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlayingLocal) {
      audio.pause();
      setIsPlayingLocal(false);
    } else {
      audio
        .play()
        .then(() => setIsPlayingLocal(true))
        .catch(() => setIsPlayingLocal(false));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-brand-emerald" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-brand-emerald">
              {t.bento.spotifyKicker}
            </span>
          </div>
          <a
            href={`https://open.spotify.com/playlist/${currentPlaylist.id}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-bold text-brand-espresso hover:text-brand-emerald flex items-center gap-1"
          >
            <span>Spotify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <h3 className="font-display font-bold text-xl text-brand-espresso mb-2.5">
          {t.bento.spotifyTitle}
        </h3>

        {/* Playlist Pill Tabs (High Contrast) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
          {playlists.map((pl) => {
            const active = selectedPlaylistId === pl.id;
            return (
              <button
                key={pl.id}
                type="button"
                onClick={() => setSelectedPlaylistId(pl.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-brand-espresso text-brand-yellow shadow-sm'
                    : 'bg-brand-surfaceMuted text-brand-espresso hover:bg-brand-yellow'
                }`}
              >
                {pl.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Native Privacy-Free Vinyl Deck Player (Zero Cookie Popups!) */}
      <div className="my-1 p-4 rounded-2xl bg-brand-emerald text-white border border-brand-sand shadow-card flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <button
            type="button"
            onClick={toggleAudio}
            className="w-14 h-14 rounded-2xl bg-brand-yellow hover:bg-white text-brand-espresso border border-brand-sand shadow-subtle flex items-center justify-center shrink-0 transition-transform hover:scale-105"
            aria-label="Play/Pause Audio"
          >
            {isPlayingLocal ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-brand-yellow font-bold">
              <Disc3 className={`w-3.5 h-3.5 ${isPlayingLocal ? 'animate-spin' : ''}`} />
              <span>{currentPlaylist.regionName} • Direct Audio</span>
            </div>
            <div className="font-display font-bold uppercase text-lg text-white truncate">
              {currentPlaylist.title}
            </div>
            <div className="text-xs text-stone-100 truncate">
              {currentPlaylist.description}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end shrink-0">
          <span className="px-2.5 py-1 rounded-full bg-brand-espresso text-brand-yellow font-mono text-[10px] font-bold">
            {isPlayingLocal
              ? language === 'nl'
                ? 'SPEELT NU AF'
                : 'PLAYING'
              : language === 'nl'
              ? 'KLIK PLAY'
              : 'READY'}
          </span>
        </div>
      </div>

      {/* Sleeve Notes Footer */}
      <div className="mt-3 pt-2.5 border-t border-brand-sand flex items-center justify-between text-xs text-brand-slate">
        <div className="truncate max-w-[260px] flex items-center gap-1.5">
          <Music2 className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
          <span className="font-bold text-brand-espresso">{currentPlaylist.regionName}: </span>
          <span>{currentPlaylist.genres.join(' • ')}</span>
        </div>
        <a
          href={`https://open.spotify.com/playlist/${currentPlaylist.id}`}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-mono font-bold text-brand-emerald hover:underline"
        >
          Volledige Playlist ↗
        </a>
      </div>
    </div>
  );
};
