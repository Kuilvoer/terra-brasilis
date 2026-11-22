import React, { useState } from 'react';
import { Video, ExternalLink, Play, Film, Music2, Compass } from 'lucide-react';
import type { VideoItem, RegionId } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../i18n/regionLocalizations';

interface CuratedVideoLink {
  categoryNl: string;
  categoryEn: string;
  categoryPt: string;
  titleNl: string;
  titleEn: string;
  titlePt: string;
  query: string;
  icon: 'film' | 'music' | 'nature';
}

const REGIONAL_VIDEO_EXPLORE: Record<RegionId, CuratedVideoLink[]> = {
  north: [
    {
      categoryNl: 'Natuur & Rivier',
      categoryEn: 'Nature & River',
      categoryPt: 'Natureza & Rio',
      titleNl: 'Encontro das Águas & Amazone 4K',
      titleEn: 'Meeting of Waters & Amazon 4K',
      titlePt: 'Encontro das Águas & Amazônia 4K',
      query: 'Encontro das Aguas Manaus Amazonas 4K drone',
      icon: 'nature'
    },
    {
      categoryNl: 'Festival & Muziek',
      categoryEn: 'Festival & Music',
      categoryPt: 'Festival & Música',
      titleNl: 'Festival de Parintins & Carimbó',
      titleEn: 'Parintins Festival & Carimbó',
      titlePt: 'Festival de Parintins & Carimbó',
      query: 'Festival de Parintins Boi Bumba Carimbo Para',
      icon: 'music'
    },
    {
      categoryNl: 'Keuken & Markt',
      categoryEn: 'Cuisine & Market',
      categoryPt: 'Culinária & Mercado',
      titleNl: 'Ver-o-Peso Markt & Tacacá in Belém',
      titleEn: 'Ver-o-Peso Market & Tacacá in Belém',
      titlePt: 'Mercado Ver-o-Peso & Tacacá Belém',
      query: 'Mercado Ver-o-Peso Belem gastronomia paraense',
      icon: 'film'
    }
  ],
  northeast: [
    {
      categoryNl: 'Landschap 4K',
      categoryEn: 'Landscape 4K',
      categoryPt: 'Paisagem 4K',
      titleNl: 'Lençóis Maranhenses vanuit de lucht',
      titleEn: 'Lençóis Maranhenses Aerial 4K',
      titlePt: 'Lençóis Maranhenses 4K drone',
      query: 'Lencois Maranhenses Brazil 4K drone',
      icon: 'nature'
    },
    {
      categoryNl: 'Cultuur & Ritme',
      categoryEn: 'Culture & Rhythm',
      categoryPt: 'Cultura & Ritmo',
      titleNl: 'Olodum in Pelourinho & Frevo in Olinda',
      titleEn: 'Olodum in Pelourinho & Frevo in Olinda',
      titlePt: 'Olodum no Pelourinho & Frevo em Olinda',
      query: 'Olodum Pelourinho Salvador Frevo Olinda',
      icon: 'music'
    },
    {
      categoryNl: 'Keuken & Straat',
      categoryEn: 'Cuisine & Street',
      categoryPt: 'Culinária & Rua',
      titleNl: 'Acarajé & Bahiaanse keuken in Salvador',
      titleEn: 'Acarajé & Bahian Cuisine in Salvador',
      titlePt: 'Acarajé e culinária baiana Salvador',
      query: 'Acaraje culinaria baiana Salvador documentario',
      icon: 'film'
    }
  ],
  'center-west': [
    {
      categoryNl: 'Wildlife 4K',
      categoryEn: 'Wildlife 4K',
      categoryPt: 'Fauna 4K',
      titleNl: 'Jaguars & reuzenotters in de Pantanal',
      titleEn: 'Jaguars & Giant Otters of the Pantanal',
      titlePt: 'Onças-pintadas no Pantanal 4K',
      query: 'Pantanal jaguars wildlife documentary 4K Brazil',
      icon: 'nature'
    },
    {
      categoryNl: 'Architectuur',
      categoryEn: 'Architecture',
      categoryPt: 'Arquitetura',
      titleNl: 'Oscar Niemeyer & Modernistisch Brasília',
      titleEn: 'Oscar Niemeyer & Modernist Brasília',
      titlePt: 'Oscar Niemeyer e Brasília 4K',
      query: 'Brasilia Oscar Niemeyer architecture 4K documentary',
      icon: 'film'
    },
    {
      categoryNl: 'Muziek & Traditie',
      categoryEn: 'Music & Tradition',
      categoryPt: 'Música & Tradição',
      titleNl: 'Viola Caipira & Siriri in Mato Grosso',
      titleEn: 'Viola Caipira & Siriri in Mato Grosso',
      titlePt: 'Viola Caipira e Siriri Mato Grosso',
      query: 'Viola de cocho Siriri Pantanal musica tradicional',
      icon: 'music'
    }
  ],
  southeast: [
    {
      categoryNl: 'Steden & Kust 4K',
      categoryEn: 'Cities & Coast 4K',
      categoryPt: 'Cidades & Costa 4K',
      titleNl: 'Rio de Janeiro & Suikerbroodberg 4K',
      titleEn: 'Rio de Janeiro & Sugarloaf 4K',
      titlePt: 'Rio de Janeiro e Pão de Açúcar 4K',
      query: 'Rio de Janeiro 4K drone Cristo Redentor',
      icon: 'nature'
    },
    {
      categoryNl: 'Muziek & Samba',
      categoryEn: 'Music & Samba',
      categoryPt: 'Música & Samba',
      titleNl: 'Roda de Samba & Bossa Nova in Ipanema',
      titleEn: 'Roda de Samba & Bossa Nova in Ipanema',
      titlePt: 'Roda de Samba e Bossa Nova Rio',
      query: 'Roda de Samba Rio de Janeiro Bossa Nova documentario',
      icon: 'music'
    },
    {
      categoryNl: 'Erfgoed & Barok',
      categoryEn: 'Heritage & Baroque',
      categoryPt: 'Patrimônio & Barroco',
      titleNl: 'Ouro Preto & de keuken van Minas Gerais',
      titleEn: 'Ouro Preto & Minas Gerais Cuisine',
      titlePt: 'Ouro Preto e culinária mineira',
      query: 'Ouro Preto Minas Gerais historia gastronomia 4K',
      icon: 'film'
    }
  ],
  south: [
    {
      categoryNl: 'Natuurwonder 4K',
      categoryEn: 'Natural Wonder 4K',
      categoryPt: 'Maravilha 4K',
      titleNl: 'Iguaçu-watervallen & Serra Gaúcha 4K',
      titleEn: 'Iguazu Falls & Serra Gaúcha 4K',
      titlePt: 'Cataratas do Iguaçu e Serra Gaúcha 4K',
      query: 'Cataratas do Iguacu 4K drone Brazil',
      icon: 'nature'
    },
    {
      categoryNl: 'Gaúcho-cultuur',
      categoryEn: 'Gaúcho Culture',
      categoryPt: 'Cultura Gaúcha',
      titleNl: 'Milonga, Chimarrão & Chula op de Pampa',
      titleEn: 'Milonga, Chimarrão & Chula on the Pampa',
      titlePt: 'Milonga, Chimarrão e Chula nos Pampas',
      query: 'Cultura Gaucha Rio Grande do Sul musica tradicao',
      icon: 'music'
    },
    {
      categoryNl: 'Kust & Canyons',
      categoryEn: 'Coast & Canyons',
      categoryPt: 'Costa & Cânions',
      titleNl: 'Florianópolis & Cânion Itaimbezinho',
      titleEn: 'Florianópolis & Itaimbezinho Canyon',
      titlePt: 'Florianópolis e Cânion Itaimbezinho 4K',
      query: 'Canion Itaimbezinho Aparados da Serra 4K',
      icon: 'film'
    }
  ]
};

interface VideoWrapperProps {
  video: VideoItem;
  regionName: string;
  regionId?: RegionId;
}

export const VideoWrapper: React.FC<VideoWrapperProps> = ({
  video,
  regionName,
  regionId = 'north'
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];
  const [isPlaying, setIsPlaying] = useState(false);

  const curatedClips = REGIONAL_VIDEO_EXPLORE[regionId] || REGIONAL_VIDEO_EXPLORE.north;

  const renderIcon = (kind: CuratedVideoLink['icon']) => {
    if (kind === 'music') return <Music2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />;
    if (kind === 'nature') return <Compass className="w-3.5 h-3.5 text-brand-yellow shrink-0" />;
    return <Film className="w-3.5 h-3.5 text-brand-yellow shrink-0" />;
  };

  return (
    <div className="bg-black/20 rounded-3xl border border-white/12 shadow-2xl overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-white/10 bg-black/25 text-white flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-brand-yellow" />
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-brand-yellow">
            {labels.mod7VideoKicker} — {regionName}
          </span>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-stone-300 hover:text-brand-yellow flex items-center gap-1 font-mono font-bold transition-colors"
        >
          <span>{labels.mod7WatchYoutube}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 16:9 Editorial Click-to-Play Video Facade */}
      <div className="relative w-full aspect-video bg-brand-espresso overflow-hidden">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Speel video af: ${video.title}`}
            className="relative w-full h-full cursor-pointer group text-left block"
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-brand-yellow text-brand-espresso shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform mb-4">
                <Play className="w-9 h-9 fill-current ml-1" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-brand-espresso/85 text-[#F7F2E7] border border-white/20 font-mono text-xs font-bold uppercase tracking-wider">
                {language === 'nl'
                  ? 'Speel 4K documentaire af'
                  : language === 'pt'
                  ? 'Reproduzir documentário 4K'
                  : 'Play 4K documentary'}
              </span>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>

      {/* Video Editorial Details + 3 Curated Regional Video Chapters */}
      <div className="p-5 sm:p-6 bg-black/25 space-y-5 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <h4 className="font-display font-bold uppercase text-xl text-white mb-1">
              {video.title}
            </h4>
            <p className="text-stone-300 leading-relaxed font-sans max-w-2xl">
              {video.description}
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-brand-yellow text-brand-espresso self-start sm:self-center">
            {labels.mod7Duration}: {video.duration}
          </div>
        </div>

        {/* Enriched Regional Video Collection */}
        <div className="pt-4 border-t border-white/10">
          <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-white/60 mb-3">
            {language === 'nl'
              ? `Meer video-reportages uit ${regionName}`
              : language === 'pt'
              ? `Mais reportagens em vídeo — ${regionName}`
              : `More curated video stories — ${regionName}`}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {curatedClips.map((clip) => {
              const cat =
                language === 'nl'
                  ? clip.categoryNl
                  : language === 'pt'
                  ? clip.categoryPt
                  : clip.categoryEn;
              const title =
                language === 'nl'
                  ? clip.titleNl
                  : language === 'pt'
                  ? clip.titlePt
                  : clip.titleEn;

              return (
                <a
                  key={clip.query}
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(clip.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-yellow">
                      {renderIcon(clip.icon)}
                      <span>{cat}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-brand-yellow transition-colors shrink-0" />
                  </div>
                  <div className="font-sans text-xs sm:text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors leading-snug">
                    {title}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
