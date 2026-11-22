import type { RegionId } from '../types';

export interface SoundscapeTrack {
  id: string;
  regionId?: RegionId;
  src: string;
  fallbackSrc: string;
  youtubeId: string;
  artistAndGenre: string;
  labelNl: string;
  labelEn: string;
  labelPt: string;
}

export const REGIONAL_SOUNDSCAPE_TRACKS: SoundscapeTrack[] = [
  {
    id: 'north',
    regionId: 'north',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Heitor_Villa-Lobos_-_Trio_for_Oboe%2C_Clarinet_and_Bassoon_-_1._Anime.ogg',
    fallbackSrc: '/audio/jungle.mp3',
    youtubeId: '-53mGJ4h5sQ',
    artistAndGenre: 'Heitor Villa-Lobos & Carimbó da Amazônia',
    labelNl: 'Noord • Villa-Lobos & Carimbó da Amazônia',
    labelEn: 'North • Villa-Lobos & Amazonian Carimbó',
    labelPt: 'Norte • Villa-Lobos & Carimbó da Amazônia'
  },
  {
    id: 'northeast',
    regionId: 'northeast',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Toque-de-angola.ogg',
    fallbackSrc: '/audio/tropical.mp3',
    youtubeId: 'hDq1wqcjNZA',
    artistAndGenre: 'Berimbau da Bahia, Samba de Roda & Forró',
    labelNl: 'Noordoost • Berimbau da Bahia & Forró',
    labelEn: 'Northeast • Berimbau of Bahia & Forró',
    labelPt: 'Nordeste • Berimbau da Bahia & Forró'
  },
  {
    id: 'center-west',
    regionId: 'center-west',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/ESCOVADO_%28Ernesto_Nazareth%29_-_Ernesto_Nazareth_1907.ogg',
    fallbackSrc: '/audio/desert.mp3',
    youtubeId: 'o2HY--a3vA4',
    artistAndGenre: 'Ernesto Nazareth • Choro & Viola Sertaneja',
    labelNl: 'Centraal-West • Choro & Viola do Cerrado',
    labelEn: 'Center-West • Choro & Viola do Cerrado',
    labelPt: 'Centro-Oeste • Choro & Viola do Cerrado'
  },
  {
    id: 'southeast',
    regionId: 'southeast',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/1_x_0_Pixinguinha_e_Benedito.ogg',
    fallbackSrc: '/audio/volcanic.mp3',
    youtubeId: 'IhwBRphHh8I',
    artistAndGenre: 'Pixinguinha & Benedito Lacerda • Choro & Samba Carioca',
    labelNl: 'Zuidoost • Pixinguinha Choro & Samba Rio',
    labelEn: 'Southeast • Pixinguinha Choro & Rio Samba',
    labelPt: 'Sudeste • Pixinguinha Choro & Samba Carioca'
  },
  {
    id: 'south',
    regionId: 'south',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Milonga_Negra%2C_Milonga.ogg',
    fallbackSrc: '/audio/arctic.wav',
    youtubeId: 'IkUcEkDbpC4',
    artistAndGenre: 'Milonga Gaúcha & Gaita Borgonhese dos Pampas',
    labelNl: 'Zuid • Milonga Gaúcha & Pampa-accordeon',
    labelEn: 'South • Milonga Gaúcha & Pampa Accordion',
    labelPt: 'Sul • Milonga Gaúcha & Gaita dos Pampas'
  }
];
