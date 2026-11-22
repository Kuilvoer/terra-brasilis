import React, { useState, useRef, useEffect } from 'react';
import {
  Music2,
  Radio,
  Feather,
  Play,
  Pause,
  Volume2,
  ArrowUpRight,
  Expand,
  Calendar,
  MapPin,
  Disc3,
  Compass
} from 'lucide-react';
import type { CultureModule as CultureModuleType, RegionId, MediaItem } from '../../../types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../../i18n/regionLocalizations';

interface LocalizedDanceText {
  nl: { description: string; badge: string };
  en: { description: string; badge: string };
  pt: { description: string; badge: string };
}

interface RegionalDanceItem {
  name: string;
  origin: string;
  photoUrl: string;
  youtubeSearchQuery: string;
  text: LocalizedDanceText;
}

const REGIONAL_DANCES: Record<RegionId, RegionalDanceItem[]> = {
  north: [
    {
      name: 'Carimbó Amazônico',
      origin: 'Marajó & Belém, Pará',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Dan%C3%A7a_do_Carimb%C3%B3_-_Bel%C3%A9m_-_Par%C3%A1_%2833942798626%29.jpg/960px-Dan%C3%A7a_do_Carimb%C3%B3_-_Bel%C3%A9m_-_Par%C3%A1_%2833942798626%29.jpg',
      youtubeSearchQuery: 'Carimbo+Para+danca+tradicional+Belem',
      text: {
        nl: {
          description: 'Zinderende inheemse en Afro-Amazone dans met wervelende bloemenrokken, stampende voeten en opzwepende ritmes op holle boomstam-trommels (curimbó).',
          badge: 'UNESCO Erfgoed'
        },
        en: {
          description: 'Vibrant Indigenous and Afro-Amazonian circle dance featuring whirling floral skirts, rhythmic footwork, and hollowed-log curimbó drums.',
          badge: 'Cultural Heritage'
        },
        pt: {
          description: 'Dança vibrante de raízes indígenas e afro-amazônicas, marcada por saias floridas rodadas e o pulsar dos tambores curimbó.',
          badge: 'Patrimônio Cultural'
        }
      }
    },
    {
      name: 'Dança do Boi-Bumbá',
      origin: 'Parintins, Amazonas',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Festival_Folcl%C3%B3rico_de_Parintins.jpg',
      youtubeSearchQuery: 'Festival+de+Parintins+Boi+Bumba+Garantido+Caprichoso',
      text: {
        nl: {
          description: 'Theatraal spektakel rond de mythe van de herrezen os, met monumentale choreografieën van de rivaliserende verenigingen Caprichoso en Garantido.',
          badge: 'Volksritueel'
        },
        en: {
          description: 'Monumental open-air theatrical spectacle retelling the legend of the resurrected ox, performed by rival troupes Caprichoso and Garantido.',
          badge: 'Folk Ritual'
        },
        pt: {
          description: 'Espetáculo teatral grandioso que celebra a lenda do boi ressuscitado, conduzido pelas agremiações Caprichoso e Garantido.',
          badge: 'Ritual Popular'
        }
      }
    }
  ],
  northeast: [
    {
      name: 'Frevo de Rua & de Bloco',
      origin: 'Recife & Olinda, Pernambuco',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg/1280px-2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg',
      youtubeSearchQuery: 'Frevo+de+Rua+Olinda+Recife+Carnaval',
      text: {
        nl: {
          description: 'Duizelingwekkende acrobatische dans met felle miniatuur-paraplu’s, hoge sprongen en vurige koperfanfares door historische straatjes.',
          badge: 'UNESCO Immaterieel Erfgoed'
        },
        en: {
          description: 'Dazzling acrobatic street dance performed with colorful miniature umbrellas, soaring leaps, and brass bands through colonial lanes.',
          badge: 'UNESCO Intangible Heritage'
        },
        pt: {
          description: 'Dança acrobática vertiginosa com sombrinhas coloridas, saltos ágeis e orquestras de metais pelas ladeiras históricas.',
          badge: 'Patrimônio UNESCO'
        }
      }
    },
    {
      name: 'Forró Pé-de-Serra',
      origin: 'Sertão do Nordeste',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/960px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG',
      youtubeSearchQuery: 'Forro+Pe+de+Serra+Nordeste+danca',
      text: {
        nl: {
          description: 'Intieme koppeldans vol passie en melancholie, aangedreven door de accordeon (sanfona), grote bastrommel (zabumba) en de zilveren triangel.',
          badge: 'Ziel van het Noordoosten'
        },
        en: {
          description: 'Warm partner dance brimming with joy and longing, driven by the trio of accordion (sanfona), bass drum (zabumba), and triangle.',
          badge: 'Soul of the Northeast'
        },
        pt: {
          description: 'Dança de salão apaixonada e envolvente, embalada pelo trio clássico de sanfona, zabumba e triângulo.',
          badge: 'Alma do Nordeste'
        }
      }
    }
  ],
  'center-west': [
    {
      name: 'Siriri & Cururu',
      origin: 'Cuiabá & Pantanal, Mato Grosso',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg/1280px-Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg',
      youtubeSearchQuery: 'Siriri+e+Cururu+Mato+Grosso+danca',
      text: {
        nl: {
          description: 'Traditionele feestdans met houten mocho-bankjes, ratelende ganzá-stokken en de authentieke viola de cocho gesneden uit één boomstam.',
          badge: 'Pantanal Traditie'
        },
        en: {
          description: 'Festive regional dance accompanied by percussion benches, ganzá shakers, and the hand-carved viola de cocho lute.',
          badge: 'Pantanal Tradition'
        },
        pt: {
          description: 'Dança festiva tradicional acompanhada de mocho, ganzá e da autêntica viola de cocho esculpida em tronco único.',
          badge: 'Tradição Pantaneira'
        }
      }
    },
    {
      name: 'Catira Pantaneira',
      origin: 'Goiás & Mato Grosso do Sul',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Boiadeiros_barretos_Bi_campe%C3%A3o_de_barretos_Benedito_Alves_de_souza_ben%C3%A9_pe%C3%A3o_04.jpg',
      youtubeSearchQuery: 'Catira+Pantaneira+Goias+danca+tradicional',
      text: {
        nl: {
          description: 'Synchroon stampen met zware lederen cowboylaarzen en ritmisch handgeklap door peões en comitivas na een lange tocht door het savanneland.',
          badge: 'Cowboy & Tropeiro'
        },
        en: {
          description: 'Synchronized boot-stomping and rhythmic clapping performed by cattle drivers (peões) celebrating the end of long savanna treks.',
          badge: 'Cowboy & Tropeiro'
        },
        pt: {
          description: 'Sapateado sincronizado com botas de couro e palmas ritmadas, celebrando a cultura dos peões e comitivas do sertão.',
          badge: 'Cultura Tropeira'
        }
      }
    }
  ],
  southeast: [
    {
      name: 'Samba de Gafieira & Enredo',
      origin: 'Rio de Janeiro & São Paulo',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Desfile_Portela_2014_%28906185%29.jpg/1280px-Desfile_Portela_2014_%28906185%29.jpg',
      youtubeSearchQuery: 'Samba+de+Gafieira+Rio+de+Janeiro+danca',
      text: {
        nl: {
          description: 'Van virtuoze salon-gafieira vol zwierige pasjes tot de overweldigende carnavalsoptochten van de sambascholen in de Marquês de Sapucaí.',
          badge: 'Koning van Brazilië'
        },
        en: {
          description: 'From suave ballroom gafieira footwork to the thunderous Carnival parades of Rio and São Paulo’s celebrated samba schools.',
          badge: 'Brazilian Icon'
        },
        pt: {
          description: 'Da elegância da gafieira nos salões cariocas aos desfiles apoteóticos das escolas de samba na Marquês de Sapucaí.',
          badge: 'Ícone Brasileiro'
        }
      }
    },
    {
      name: 'Jongo & Congada',
      origin: 'Vale do Paraíba & Minas Gerais',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/1280px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
      youtubeSearchQuery: 'Jongo+da+Serrinha+Congada+Minas+Gerais',
      text: {
        nl: {
          description: 'Voorouderlijke Afro-Braziliaanse cirkeldans rond magische trommels en koningskroningen, de historische bakermat van de hedendaagse samba.',
          badge: 'Afro-Mineiro Bakermat'
        },
        en: {
          description: 'Ancestral Afro-Brazilian circle dance around ceremonial drums, recognized as one of the foundational roots of modern samba.',
          badge: 'Afro-Brazilian Roots'
        },
        pt: {
          description: 'Dança circular afro-brasileira ancestral ao redor dos tambores, reconhecida como uma das matrizes históricas do samba.',
          badge: 'Matriz Afro-Brasileira'
        }
      }
    }
  ],
  south: [
    {
      name: 'Chula Gaúcha',
      origin: 'Pampas, Rio Grande do Sul',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/18_02_2022_Cerim%C3%B4nia_de_Abertura_da_Festa_da_Uva_2022_%2851890505075%29.jpg/1280px-18_02_2022_Cerim%C3%B4nia_de_Abertura_da_Festa_da_Uva_2022_%2851890505075%29.jpg',
      youtubeSearchQuery: 'Chula+Gaucha+danca+tradicional+Rio+Grande+do+Sul',
      text: {
        nl: {
          description: 'Legendarische solo-tapdans en behendigheidswedstrijd waarbij twee gaucho’s over een 4-meter lange houten lans dansen zonder die te raken.',
          badge: 'Trots van de Pampas'
        },
        en: {
          description: 'Virtuosic solo tap-dance duel in which two gaúchos perform rapid footwork across a 4-meter wooden lance without touching it.',
          badge: 'Pride of the Pampas'
        },
        pt: {
          description: 'Desafio virtuoso de sapateado em que dois peões gaúchos executam passos ágeis sobre uma lança de madeira sem tocá-la.',
          badge: 'Orgulho dos Pampas'
        }
      }
    },
    {
      name: 'Fandango Caiçara',
      origin: 'Paraná & Santa Catarina',
      photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg/1280px-Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
      youtubeSearchQuery: 'Fandango+Caicara+Parana+danca+tradicional',
      text: {
        nl: {
          description: 'Opzwepende houten klompendans (tamancos) met viola machete en rabeca-violen, uitgevoerd bij oogstfeesten en gemeenschappelijke mutirões.',
          badge: 'Caiçara Kusterfgoed'
        },
        en: {
          description: 'Lively wooden-clog dance accompanied by rabeca fiddles and coastal violas, celebrating community harvests and coastal heritage.',
          badge: 'Coastal Heritage'
        },
        pt: {
          description: 'Dança animada com tamancos de madeira, rabeca e viola machete, tradicional nas festas de mutirão do litoral sul.',
          badge: 'Patrimônio Caiçara'
        }
      }
    }
  ]
};

interface CultureModuleProps {
  data: CultureModuleType;
  colorToken: string;
  featuredPhotoUrl?: string;
  festivalPhotos?: string[];
  festivalVideoId?: string;
  regionName?: string;
  regionId?: RegionId;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

export const CultureModule: React.FC<CultureModuleProps> = ({
  data,
  featuredPhotoUrl,
  festivalPhotos = [],
  regionName,
  regionId = 'northeast',
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedTrackIdx, setSelectedTrackIdx] = useState<number>(0);
  const [activeFestivalIdx, setActiveFestivalIdx] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const regionalAudioSrc =
    regionId === 'north'
      ? 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Heitor_Villa-Lobos_-_Trio_for_Oboe%2C_Clarinet_and_Bassoon_-_1._Anime.ogg'
      : regionId === 'northeast'
      ? 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Toque-de-angola.ogg'
      : regionId === 'center-west'
      ? 'https://upload.wikimedia.org/wikipedia/commons/4/49/ESCOVADO_%28Ernesto_Nazareth%29_-_Ernesto_Nazareth_1907.ogg'
      : regionId === 'southeast'
      ? 'https://upload.wikimedia.org/wikipedia/commons/9/9e/1_x_0_Pixinguinha_e_Benedito.ogg'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Milonga_Negra%2C_Milonga.ogg';

  const regionalFallbackSrc =
    regionId === 'north'
      ? '/audio/jungle.mp3'
      : regionId === 'northeast'
      ? '/audio/tropical.mp3'
      : regionId === 'center-west'
      ? '/audio/desert.mp3'
      : regionId === 'southeast'
      ? '/audio/volcanic.mp3'
      : '/audio/arctic.wav';

  const genreAudioPool = [
    regionalAudioSrc,
    'https://upload.wikimedia.org/wikipedia/commons/8/88/MASSADA_%28Lulu_Cavaquinho%29_-_Choro_Carioca_1911.ogg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Samba_de_fato_1932.ogg'
  ];

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = regionalAudioSrc;
    audio.loop = true;
    audio.volume = 0.55;
    audio.onerror = () => {
      if (audio.src !== window.location.origin + regionalFallbackSrc) {
        audio.src = regionalFallbackSrc;
      }
    };
    audioRef.current = audio;
    setIsAudioPlaying(false);
    setSelectedTrackIdx(0);
    setActiveFestivalIdx(0);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [regionalAudioSrc, regionalFallbackSrc]);

  const playOrToggleTrack = (idx: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying && selectedTrackIdx === idx) {
      audio.pause();
      setIsAudioPlaying(false);
      return;
    }

    const trackUrl = genreAudioPool[idx % genreAudioPool.length];
    if (audio.src !== trackUrl) {
      audio.src = trackUrl;
    }
    setSelectedTrackIdx(idx);
    audio
      .play()
      .then(() => setIsAudioPlaying(true))
      .catch(() => setIsAudioPlaying(false));
  };

  const dances = REGIONAL_DANCES[regionId] || REGIONAL_DANCES.northeast;
  const activeTrack = data.musicAndDance[selectedTrackIdx] || data.musicAndDance[0];
  const activeFestival = data.festivals[activeFestivalIdx] || data.festivals[0];

  const albumCoverUrl =
    festivalPhotos[selectedTrackIdx % Math.max(1, festivalPhotos.length)] ||
    featuredPhotoUrl ||
    dances[0]?.photoUrl ||
    '';

  const festivalMedia: MediaItem[] = data.festivals.map((fest, idx) => ({
    id: `fest-${idx}`,
    url: festivalPhotos[idx] || featuredPhotoUrl || festivalPhotos[0] || '',
    alt: fest.name,
    caption: `${fest.name} (${fest.period}) — ${fest.description}`,
    credit: fest.location,
    aspectRatio: 'landscape'
  }));

  const danceMedia: MediaItem[] = dances.map((d, idx) => ({
    id: `dance-${idx}`,
    url: d.photoUrl,
    alt: d.name,
    caption: `${d.name} (${d.origin}) — ${d.text[language].description}`,
    credit: d.text[language].badge,
    aspectRatio: 'landscape'
  }));

  const labelPlay = language === 'nl' ? 'Speel af' : language === 'pt' ? 'Tocar' : 'Play';
  const labelPause = language === 'nl' ? 'Pauzeer' : language === 'pt' ? 'Pausar' : 'Pause';
  const labelNowPlaying =
    language === 'nl' ? 'Nu aan het draaien' : language === 'pt' ? 'Tocando agora' : 'Now spinning';

  return (
    <div className="space-y-12 text-white">
      {/* 1. BRAZILIAN VINYL JUKEBOX — Album Sleeve + Spinning Record + Interactive Tracklist */}
      <div className="p-6 sm:p-8 bg-black/25 rounded-3xl border border-white/15 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow mb-1">
              <Radio className="w-3.5 h-3.5" />
              <span>
                {language === 'nl'
                  ? 'Vinyl Jukebox • Regionale muziek & instrumenten'
                  : language === 'pt'
                  ? 'Vitrola Regional • Ritmos & Instrumentos'
                  : 'Vinyl Jukebox • Regional Music & Instruments'}
              </span>
            </div>
            <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight">
              {labels.mod3MusicTitle}
            </h4>
          </div>

          <button
            type="button"
            onClick={() => playOrToggleTrack(selectedTrackIdx)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-colors self-start sm:self-auto ${
              isAudioPlaying
                ? 'bg-brand-yellow text-brand-espresso'
                : 'bg-white/10 text-white border border-white/15 hover:bg-brand-yellow hover:text-brand-espresso'
            }`}
          >
            {isAudioPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>{labelPause}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {language === 'nl'
                    ? 'Draai deze plaat'
                    : language === 'pt'
                    ? 'Tocar este disco'
                    : 'Spin this record'}
                </span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Album Cover + Peeking Spinning Vinyl Disc */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-5">
            <div className="relative flex items-center justify-center pr-10 sm:pr-16 py-2 max-w-full">
              {/* Spinning Vinyl Disc Behind Sleeve */}
              <div
                className={`absolute right-0 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#14110F] border border-white/15 shadow-2xl flex items-center justify-center transition-transform duration-700 ${
                  isAudioPlaying ? 'translate-x-2 animate-[spin_5s_linear_infinite]' : 'translate-x-0'
                }`}
                style={{
                  backgroundImage:
                    'repeating-radial-gradient(circle at center, #1C1917 0px, #1C1917 3px, #0D0B0A 4px, #0D0B0A 6px)'
                }}
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-yellow border-4 border-[#14110F] flex flex-col items-center justify-center text-brand-espresso text-center px-1">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-tighter leading-none">
                    TERRA
                  </span>
                  <span className="font-display text-[10px] font-bold uppercase leading-tight truncate max-w-full">
                    {regionName}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#14110F] mt-1" />
                </div>
              </div>

              {/* Square Tactile Album Cover Sleeve */}
              <button
                type="button"
                onClick={() => playOrToggleTrack(selectedTrackIdx)}
                className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-xl overflow-hidden bg-[#F7F2E7] p-1.5 shadow-2xl border border-white/20 group cursor-pointer text-left"
                title={isAudioPlaying ? labelPause : labelPlay}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-stone-900">
                  {albumCoverUrl && (
                    <img
                      src={albumCoverUrl}
                      alt={activeTrack?.genre || 'Album cover'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex flex-col justify-between p-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-brand-espresso/85 text-brand-yellow font-mono text-[10px] font-bold uppercase">
                        LP • 0{selectedTrackIdx + 1}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-brand-yellow text-brand-espresso flex items-center justify-center shadow">
                        {isAudioPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-white leading-tight truncate">
                        {activeTrack?.genre}
                      </div>
                      <div className="font-mono text-[10px] text-white/75 truncate">
                        {activeTrack?.originEra}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Active Track Details */}
            {activeTrack && (
              <div className="w-full space-y-3 bg-white/[0.04] rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-brand-yellow">
                  <span className="inline-flex items-center gap-1.5 font-bold uppercase">
                    <Disc3 className={`w-3.5 h-3.5 ${isAudioPlaying ? 'animate-spin' : ''}`} />
                    {isAudioPlaying ? labelNowPlaying : activeTrack.originEra}
                  </span>
                  <span className="text-white/60">SIDE A</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {activeTrack.description}
                </p>
                <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {activeTrack.traditionalInstruments.map((inst) => (
                      <span
                        key={inst}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.08] border border-white/12 text-stone-100 font-medium text-[11px]"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                  <div className="text-stone-300">
                    <span className="font-bold text-brand-yellow">{labels.mod3Pioneers}: </span>
                    {activeTrack.keyPioneers.join(', ')}
                  </div>
                  <div className="pt-1 flex flex-wrap gap-2">
                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                        `${activeTrack.genre} ${activeTrack.keyPioneers[0] || ''} Brasil`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-brand-yellow hover:text-brand-espresso text-white font-mono text-[11px] font-bold transition-colors border border-white/15"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>
                        {language === 'nl'
                          ? 'Volledige opnames op YouTube'
                          : language === 'pt'
                          ? 'Ouvir completo no YouTube'
                          : 'Full tracks on YouTube'}
                      </span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Selectable Jukebox Tracklist */}
          <div className="lg:col-span-7 space-y-3">
            {data.musicAndDance.map((genre, idx) => {
              const isSelected = selectedTrackIdx === idx;
              const isSpinning = isAudioPlaying && isSelected;
              return (
                <button
                  key={genre.genre}
                  type="button"
                  onClick={() => playOrToggleTrack(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white/[0.12] border-brand-yellow/70 shadow-md'
                      : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                        isSpinning
                          ? 'bg-brand-yellow text-brand-espresso'
                          : isSelected
                          ? 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40'
                          : 'bg-white/10 text-white/75'
                      }`}
                    >
                      {isSpinning ? <Volume2 className="w-4 h-4 animate-pulse" /> : `0${idx + 1}`}
                    </span>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-lg sm:text-xl text-white truncate">
                        {genre.genre}
                      </div>
                      <div className="text-xs text-stone-300 truncate">
                        {genre.originEra} • {genre.traditionalInstruments.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-bold shrink-0 ${
                      isSpinning
                        ? 'bg-brand-yellow text-brand-espresso'
                        : 'bg-white/10 text-white/90'
                    }`}
                  >
                    {isSpinning ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span>{labelPause}</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>{labelPlay}</span>
                      </>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. FESTIVAL CALENDAR STRIP — Clickable Calendar Tabs + 1 Focused Photo */}
      <div className="p-6 sm:p-8 bg-black/20 rounded-3xl border border-white/12 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold tracking-widest text-brand-yellow mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {language === 'nl'
                  ? 'Feestkalender • kies een viering'
                  : language === 'pt'
                  ? 'Calendário de festas • escolha um festival'
                  : 'Festival calendar • pick a celebration'}
              </span>
            </div>
            <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-wide">
              {labels.mod3FestivalsTitle}
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.festivals.map((fest, idx) => {
              const isActive = activeFestivalIdx === idx;
              return (
                <button
                  key={fest.name}
                  type="button"
                  onClick={() => setActiveFestivalIdx(idx)}
                  className={`px-3.5 py-2 rounded-xl text-left border transition-colors ${
                    isActive
                      ? 'bg-brand-yellow text-brand-espresso border-brand-yellow'
                      : 'bg-white/[0.06] text-white/85 border-white/12 hover:bg-white/15'
                  }`}
                >
                  <div className={`font-mono text-[10px] font-bold uppercase ${isActive ? 'text-brand-espresso/75' : 'text-brand-yellow'}`}>
                    {fest.period}
                  </div>
                  <div className="font-sans text-xs font-bold truncate max-w-[180px]">
                    {fest.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {activeFestival && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => onOpenLightbox?.(festivalMedia, activeFestivalIdx)}
                className="group w-full bg-[#F7F2E7] p-3 pb-4 rounded-xl shadow-lg text-left text-brand-espresso cursor-pointer block"
                title={language === 'nl' ? 'Klik voor fullscreen' : language === 'pt' ? 'Clique para tela cheia' : 'Click for fullscreen'}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-900">
                  <img
                    src={festivalPhotos[activeFestivalIdx] || featuredPhotoUrl || festivalPhotos[0] || ''}
                    alt={activeFestival.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="mt-2.5 font-serif italic text-xs font-bold text-brand-espresso truncate">
                  {activeFestival.name} — {activeFestival.period}
                </p>
              </button>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold tracking-wider text-brand-yellow">
                <MapPin className="w-3.5 h-3.5" />
                <span>
                  {activeFestival.location} • {activeFestival.period}
                </span>
              </div>
              <h5 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                {activeFestival.name}
              </h5>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                {activeFestival.description}
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/12 text-xs sm:text-sm text-stone-200">
                <span className="text-brand-yellow font-bold font-mono uppercase text-[10px] tracking-wider block mb-1">
                  {labels.mod3Highlight}
                </span>
                {activeFestival.highlight}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. TRADITIONAL DANCES (Localized NL / EN / PT) */}
      <div className="space-y-6">
        <div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow mb-1">
            {regionName} •{' '}
            {language === 'nl'
              ? 'LEVEND ERFGOED & CHOREOGRAFIE'
              : language === 'pt'
              ? 'PATRIMÔNIO VIVO & DANÇA'
              : 'LIVING HERITAGE & DANCE'}
          </div>
          <h4 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight">
            {language === 'nl'
              ? 'Traditionele dansen'
              : language === 'pt'
              ? 'Danças tradicionais'
              : 'Traditional dances'}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {dances.map((dance, idx) => {
            const loc = dance.text[language];
            return (
              <div key={dance.name} className="p-5 bg-black/20 rounded-3xl border border-white/12 space-y-4 group">
                <button
                  type="button"
                  onClick={() => onOpenLightbox?.(danceMedia, idx)}
                  className="w-full bg-[#F7F2E7] p-2.5 pb-3 rounded-xl shadow text-left text-brand-espresso cursor-pointer block"
                  title={language === 'nl' ? 'Klik voor fullscreen' : language === 'pt' ? 'Clique para tela cheia' : 'Click for fullscreen'}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-900">
                    <img
                      src={dance.photoUrl}
                      alt={dance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-brand-espresso/85 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <Expand className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="mt-2 font-serif italic text-xs font-bold text-brand-espresso truncate">
                    {dance.name} — {loc.badge}
                  </p>
                </button>

                <div className="space-y-2.5 px-1">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-brand-yellow">
                    <Music2 className="w-3.5 h-3.5" />
                    <span>{dance.origin}</span>
                  </div>
                  <h5 className="font-display font-bold text-2xl text-white leading-tight">
                    {dance.name}
                  </h5>
                  <p className="text-sm text-stone-200 leading-relaxed">{loc.description}</p>
                  <div className="pt-1">
                    <a
                      href={`https://www.youtube.com/results?search_query=${dance.youtubeSearchQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-brand-espresso text-white font-mono text-xs font-bold transition-colors border border-white/15"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {language === 'nl'
                          ? `Bekijk dansvideo’s`
                          : language === 'pt'
                          ? `Assistir vídeos`
                          : `Watch dance videos`}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. TRADITIONS & FOLKLORE SPLIT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-black/20 rounded-3xl border border-white/12">
          <h4 className="font-display font-bold uppercase text-2xl text-white mb-4 flex items-center gap-2 tracking-tight">
            <Compass className="w-5 h-5 text-brand-yellow" />
            <span>{labels.mod3TraditionsTitle}</span>
          </h4>
          <div className="space-y-3">
            {data.traditions.map((trad) => (
              <div
                key={trad.title}
                className="p-4 bg-white/[0.05] rounded-2xl border border-white/10 text-sm"
              >
                <div className="flex items-center justify-between font-bold text-white mb-1 gap-2">
                  <span>{trad.title}</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-yellow text-brand-espresso shrink-0">
                    {trad.type}
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed text-sm">{trad.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-black/20 rounded-3xl border border-white/12">
          <h4 className="font-display font-bold uppercase text-2xl text-white mb-4 flex items-center gap-2 tracking-tight">
            <Feather className="w-5 h-5 text-brand-yellow" />
            <span>{labels.mod3FolkloreTitle}</span>
          </h4>
          <div className="space-y-3">
            {data.folklore.map((myth) => (
              <div
                key={myth.entity}
                className="p-4 bg-white/[0.05] rounded-2xl border border-white/10 text-sm"
              >
                <div className="font-bold text-brand-yellow mb-1">{myth.entity}</div>
                <p className="text-stone-300 leading-relaxed text-sm">{myth.lore}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
