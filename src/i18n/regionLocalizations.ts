import type { RegionId, RegionData } from '../types';
import type { LanguageCode } from './translations';
import {
  FESTIVALS_NL,
  MUSIC_AND_DANCE_NL,
  FOLKLORE_NL,
  BIOMES_NL,
  ECONOMY_NL,
  SPORTS_NL,
  CLIMATE_LOCALIZED
} from './regionDetailsNl';

/**
 * Curated high-resolution authentic Brazilian photography per region and category
 * so every module (Geography, History, Culture, Gastronomy, Economy, Sports) and Gallery
 * has rich visual storytelling.
 */
export const REGION_MODULE_PHOTOS: Record<
  RegionId,
  {
    geography: string;
    topographyPhoto: string;
    hydrologyPhoto: string;
    climatePhoto: string;
    history: string;
    culture: string;
    festivalPhotos: string[];
    festivalVideoId: string;
    gastronomy: string;
    economy: string;
    sports: string;
    extraGallery: Array<{
      id: string;
      url: string;
      captionNl: string;
      captionEn: string;
      captionPt: string;
      credit: string;
    }>;
  }
> = {
  north: {
    geography: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/1280px-Amazon17_%285641020319%29.jpg',
    topographyPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Roraima3_%2879%29.JPG/1280px-Roraima3_%2879%29.JPG',
    hydrologyPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Encontro_das_%C3%81guas_-_Manaus.jpg/1280px-Encontro_das_%C3%81guas_-_Manaus.jpg',
    climatePhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg/960px-Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg',
    history: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Noite_no_Teatro_Amazonas_%28cropped%29.jpg',
    culture: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Festival_Folcl%C3%B3rico_de_Parintins.jpg',
    festivalPhotos: [
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Festival_Folcl%C3%B3rico_de_Parintins.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Arco_do_cirio_de_nazar%C3%A9_-_panoramio.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Alter_do_Chao%2C_Estado_do_Para%2C_Brazil.jpg/1280px-Alter_do_Chao%2C_Estado_do_Para%2C_Brazil.jpg'
    ],
    festivalVideoId: '-53mGJ4h5sQ',
    gastronomy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/L1010748-L1010765_copie_%28cropped%29.jpg/1280px-L1010748-L1010765_copie_%28cropped%29.jpg',
    economy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Manaus_amazonas.jpg/1280px-Manaus_amazonas.jpg',
    sports: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Arena-da-Amazonia-2014.jpg/1280px-Arena-da-Amazonia-2014.jpg',
    extraGallery: [
      {
        id: 'n-ext-1',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Encontro_das_%C3%81guas_-_Manaus.jpg/1280px-Encontro_das_%C3%81guas_-_Manaus.jpg',
        captionNl: 'Het beroemde Encontro das Águas bij Manaus waar de Rio Negro en Rio Solimões samenkomen.',
        captionEn: 'The famous Meeting of Waters near Manaus where the Rio Negro and Rio Solimões meet.',
        captionPt: 'O famoso Encontro das Águas em Manaus onde os rios Negro e Solimões correm lado a lado.',
        credit: 'Wikimedia Commons / Amazonia Archive'
      },
      {
        id: 'n-ext-2',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/L1010748-L1010765_copie_%28cropped%29.jpg/1280px-L1010748-L1010765_copie_%28cropped%29.jpg',
        captionNl: 'Traditionele houten rivierboten en de Ver-o-Peso markt aan de baai van Belém.',
        captionEn: 'Traditional wooden riverboats and the Ver-o-Peso market on the bay of Belém.',
        captionPt: 'Barcos regionais tradicionais e o Mercado Ver-o-Peso na baía de Belém.',
        credit: 'Wikimedia Commons / Belém Archive'
      },
      {
        id: 'n-ext-3',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Roraima3_%2879%29.JPG/1280px-Roraima3_%2879%29.JPG',
        captionNl: 'Tafelberg Monte Roraima gehuld in tropische wolken op het drielandenpunt.',
        captionEn: 'Mount Roraima tepui shrouded in tropical mist at the triple border.',
        captionPt: 'Monte Roraima envolto em neblina tropical na tríplice fronteira.',
        credit: 'Wikimedia Commons / Tepui Highlands'
      },
      {
        id: 'n-ext-4',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Festival_Folcl%C3%B3rico_de_Parintins.jpg',
        captionNl: 'Het kleurrijke Boi-Bumbá spektakel tijdens het Festival van Parintins in Amazonas.',
        captionEn: 'The colorful Boi-Bumbá spectacle during the Parintins Folklore Festival in Amazonas.',
        captionPt: 'O espetáculo do Boi-Bumbá durante o Festival Folclórico de Parintins no Amazonas.',
        credit: 'Wikimedia Commons / Parintins'
      }
    ]
  },
  northeast: {
    geography: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/1280px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg',
    topographyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Chapada_diamantina.jpg',
    hydrologyPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Ponta_do_Seixas_Jo%C3%A3o_Pessoa.jpg/960px-Ponta_do_Seixas_Jo%C3%A3o_Pessoa.jpg',
    climatePhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
    history: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg/1280px-Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg',
    culture: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg/1280px-2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg',
    festivalPhotos: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg/1280px-2023-02-18_Carnaval_de_Olinda%2C_Polo_Erasto_Vasconcelos_04.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Festa_de_S%C3%A3o_Jo%C3%A3o_em_Bar%C3%A3o_Geraldo_2.jpg/1280px-Festa_de_S%C3%A3o_Jo%C3%A3o_em_Bar%C3%A3o_Geraldo_2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg/1280px-Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg'
    ],
    festivalVideoId: 'hDq1wqcjNZA',
    gastronomy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Acaraje-Baiana.jpg/960px-Acaraje-Baiana.jpg',
    economy: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Antonio_Vaz_island_-_Recife%2C_Pernambuco%2C_Brazil_%28cropped%29.jpg',
    sports: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Alexius_Arena_Fonte_Nova_Salvador_Bahia.jpg',
    extraGallery: [
      {
        id: 'ne-ext-1',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/1280px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg',
        captionNl: 'Kristalheldere regenwaterlagunes tussen de witte duinen van Lençóis Maranhenses.',
        captionEn: 'Crystal-clear rainwater lagoons among the white dunes of Lençóis Maranhenses.',
        captionPt: 'Lagoas cristalinas entre as dunas brancas dos Lençóis Maranhenses.',
        credit: 'Wikimedia Commons / Maranhão Aerials'
      },
      {
        id: 'ne-ext-2',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
        captionNl: 'Baía dos Porcos en de vulkanische rotspieken van Fernando de Noronha.',
        captionEn: 'Baía dos Porcos and volcanic peaks of Fernando de Noronha.',
        captionPt: 'Baía dos Porcos e o Morro Dois Irmãos em Fernando de Noronha.',
        credit: 'Wikimedia Commons / Eduardo Muruci'
      },
      {
        id: 'ne-ext-3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Chapada_diamantina.jpg',
        captionNl: 'Tafelbergen en groene valleien van het Nationaal Park Chapada Diamantina in Bahia.',
        captionEn: 'Tabletop mesas and valleys of Chapada Diamantina National Park in Bahia.',
        captionPt: 'Morros e vales do Parque Nacional da Chapada Diamantina na Bahia.',
        credit: 'Wikimedia Commons / Chapada Diamantina'
      },
      {
        id: 'ne-ext-4',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg/1280px-Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg',
        captionNl: 'Het koloniale hart van Pelourinho en de Allerheiligenbaai in Salvador da Bahia.',
        captionEn: 'The colonial heart of Pelourinho and All Saints’ Bay in Salvador da Bahia.',
        captionPt: 'O Centro Histórico do Pelourinho e a Baía de Todos-os-Santos em Salvador.',
        credit: 'Wikimedia Commons / Cultura Bahiana'
      }
    ]
  },
  'center-west': {
    geography: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantanal%2C_south-central_South_America_5170.jpg',
    topographyPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/1280px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
    hydrologyPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg/1280px-Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg',
    climatePhoto: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg',
    history: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg/1280px-Centro_Hist%C3%B3rico_Piren%C3%B3polis_1975.jpg',
    culture: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Cavaleiros_das_Cavalhadas_de_Piren%C3%B3polis.jpg/1280px-Cavaleiros_das_Cavalhadas_de_Piren%C3%B3polis.jpg',
    festivalPhotos: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Cavaleiros_das_Cavalhadas_de_Piren%C3%B3polis.jpg/1280px-Cavaleiros_das_Cavalhadas_de_Piren%C3%B3polis.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c0/Boiadeiros_barretos_Bi_campe%C3%A3o_de_barretos_Benedito_Alves_de_souza_ben%C3%A9_pe%C3%A3o_04.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg/1280px-Rio_Formoso_em_Bonito_no_Mato_Grosso_do_Sul%2C_Serra_da_Bodoquena.jpg'
    ],
    festivalVideoId: 'o2HY--a3vA4',
    gastronomy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Churrasco00003.jpg/1280px-Churrasco00003.jpg',
    economy: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg',
    sports: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Arena_Pantanal.jpg/1280px-Arena_Pantanal.jpg',
    extraGallery: [
      {
        id: 'cw-ext-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg',
        captionNl: 'Modernistische architectuur van Oscar Niemeyer in de federale hoofdstad Brasília.',
        captionEn: 'Modernist architecture by Oscar Niemeyer in the federal capital Brasília.',
        captionPt: 'Arquitetura modernista de Oscar Niemeyer na capital federal Brasília.',
        credit: 'Wikimedia Commons / Brasília Modernism'
      },
      {
        id: 'cw-ext-2',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/1280px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
        captionNl: 'Oeroude kwartskliffen en Cerrado-savanne in Nationaal Park Chapada dos Veadeiros.',
        captionEn: 'Ancient quartz bluffs and Cerrado savanna in Chapada dos Veadeiros National Park.',
        captionPt: 'Chapadas de quartzo e cerrado no Parque Nacional da Chapada dos Veadeiros.',
        credit: 'Wikimedia Commons / Cerrado Expeditions'
      },
      {
        id: 'cw-ext-3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg',
        captionNl: 'Wilde jaguar (onça-pintada) langs de rivieroevers van het Pantanal.',
        captionEn: 'Wild jaguar (onça-pintada) patrolling the riverbanks of the Pantanal.',
        captionPt: 'Onça-pintada nas margens dos rios do Pantanal Matogrossense.',
        credit: 'Wikimedia Commons / Pantanal Wildlife'
      },
      {
        id: 'cw-ext-4',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Catedral_Metropolitana_de_Brasilia.jpg',
        captionNl: 'De hyperbolische betonnen zuilen van de Kathedraal van Brasília.',
        captionEn: 'The hyperbolic concrete columns of the Cathedral of Brasília.',
        captionPt: 'As colunas parabólicas da Catedral Metropolitana de Brasília.',
        credit: 'Wikimedia Commons / Brasília Heritage'
      }
    ]
  },
  southeast: {
    geography: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/1280px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
    topographyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
    hydrologyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Forte_de_Copacabana_panorama.jpg',
    climatePhoto: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Instituto_Inhotim_%287%29.jpg',
    history: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/1280px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
    culture: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Desfile_Portela_2014_%28906185%29.jpg/1280px-Desfile_Portela_2014_%28906185%29.jpg',
    festivalPhotos: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Desfile_Portela_2014_%28906185%29.jpg/1280px-Desfile_Portela_2014_%28906185%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg/1280px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/28/Instituto_Inhotim_%287%29.jpg'
    ],
    festivalVideoId: 'IhwBRphHh8I',
    gastronomy: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Feijoada_%C3%A0_transmontada.jpg',
    economy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg/1280px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg',
    sports: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Maracana_2022.jpg/1280px-Maracana_2022.jpg',
    extraGallery: [
      {
        id: 'se-ext-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
        captionNl: 'Panoramisch uitzicht vanaf de Corcovado over de Suikerbroodberg en Guanabara-baai in Rio.',
        captionEn: 'Panoramic view from Corcovado over Sugarloaf Mountain and Guanabara Bay in Rio.',
        captionPt: 'Vista panorâmica do Corcovado sobre o Pão de Açúcar e a Baía de Guanabara no Rio.',
        credit: 'Wikimedia Commons / Rio de Janeiro'
      },
      {
        id: 'se-ext-2',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg/1280px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg',
        captionNl: 'De skyline en architectuur van metropool São Paulo rond Avenida Paulista.',
        captionEn: 'The skyline and architecture of metropolis São Paulo around Avenida Paulista.',
        captionPt: 'O horizonte e a arquitetura da metrópole de São Paulo na Avenida Paulista.',
        credit: 'Wikimedia Commons / São Paulo Urban'
      },
      {
        id: 'se-ext-3',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/1280px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
        captionNl: 'Koloniale barokkerken en geplaveide heuvelstraten van Ouro Preto in Minas Gerais.',
        captionEn: 'Colonial baroque churches and cobbled hill streets of Ouro Preto in Minas Gerais.',
        captionPt: 'Igrejas barrocas coloniais e ladeiras de pedra de Ouro Preto em Minas Gerais.',
        credit: 'Wikimedia Commons / Patrimônio de Minas'
      },
      {
        id: 'se-ext-4',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Desfile_Portela_2014_%28906185%29.jpg/1280px-Desfile_Portela_2014_%28906185%29.jpg',
        captionNl: 'Samba-parade in het Sambódromo Marquês de Sapucaí tijdens het Carnaval van Rio.',
        captionEn: 'Samba parade inside the Sambódromo Marquês de Sapucaí during Rio Carnival.',
        captionPt: 'Desfile das Escolas de Samba na Marquês de Sapucaí durante o Carnaval do Rio.',
        credit: 'Wikimedia Commons / Carnaval do Rio'
      }
    ]
  },
  south: {
    geography: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
    topographyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Itaimb%C3%A9zinho_Canyon_2006.jpg',
    hydrologyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
    climatePhoto: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tangu%C3%A1_Curitiba.jpg',
    history: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Portal_ruinas.JPG',
    culture: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Vila_Germ%C3%A2nica_%288317111665%29.jpg/1280px-Vila_Germ%C3%A2nica_%288317111665%29.jpg',
    festivalPhotos: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Vila_Germ%C3%A2nica_%288317111665%29.jpg/1280px-Vila_Germ%C3%A2nica_%288317111665%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/17.12.2025_%E2%80%93_Ato_de_certifica%C3%A7%C3%A3o_do_Pr%C3%AAmio_Tradicionalismo_Ga%C3%BAcho_-_54990992482.jpg/1280px-17.12.2025_%E2%80%93_Ato_de_certifica%C3%A7%C3%A3o_do_Pr%C3%AAmio_Tradicionalismo_Ga%C3%BAcho_-_54990992482.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Natal_Luz_-_Gramado_-_panoramio.jpg/1280px-Natal_Luz_-_Gramado_-_panoramio.jpg'
    ],
    festivalVideoId: 'IkUcEkDbpC4',
    gastronomy: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Churrasco00003.jpg/1280px-Churrasco00003.jpg',
    economy: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Itaipu_geral.jpg',
    sports: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg/1280px-Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg',
    extraGallery: [
      {
        id: 's-ext-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
        captionNl: 'De donderende Garganta do Diabo (Duivelskeel) van de Iguaçu-watervallen in Paraná.',
        captionEn: 'The thundering Devil’s Throat (Garganta do Diabo) at Iguaçu Falls in Paraná.',
        captionPt: 'A trovejante Garganta do Diabo nas Cataratas do Iguaçu no Paraná.',
        credit: 'Wikimedia Commons / Cataratas do Iguaçu'
      },
      {
        id: 's-ext-2',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Itaimb%C3%A9zinho_Canyon_2006.jpg',
        captionNl: 'De 720 meter diepe basaltkliffen van Cânion do Itaimbezinho in Aparados da Serra.',
        captionEn: 'The 720-meter basalt cliffs of Itaimbezinho Canyon in Aparados da Serra.',
        captionPt: 'Os paredões de basalto do Cânion do Itaimbezinho nos Aparados da Serra.',
        credit: 'Wikimedia Commons / Serra Gaúcha'
      },
      {
        id: 's-ext-3',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Churrasco00003.jpg/1280px-Churrasco00003.jpg',
        captionNl: 'Authentieke Gaúcho Churrasco bereid boven open houtvuur op de zuidelijke Pampa.',
        captionEn: 'Authentic Gaúcho Churrasco roasted over open wood fire on the southern Pampa.',
        captionPt: 'Autêntico Churrasco Gaúcho assado no fogo de chão nos Pampas do Sul.',
        credit: 'Wikimedia Commons / Tradição Gaúcha'
      },
      {
        id: 's-ext-4',
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg/1280px-Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
        captionNl: 'Granieten baaien en Atlantische kustlijn op het eiland Florianópolis.',
        captionEn: 'Granite bays and Atlantic coastline on the island of Florianópolis.',
        captionPt: 'Enseadas de granito e pontes na Ilha da Magia, Florianópolis.',
        credit: 'Wikimedia Commons / Santa Catarina'
      }
    ]
  }
};

export interface ModuleUiLabels {
  mod1Kicker: string;
  mod1BiomesTitle: string;
  mod1Coverage: string;
  mod1KeyFauna: string;
  mod1KeyFlora: string;
  mod1TopoTitle: string;
  mod1HighestPoint: string;
  mod1Formations: string;
  mod1HydroTitle: string;
  mod1Basins: string;
  mod1ClimateTitle: string;
  mod1Zone: string;
  mod1TempRange: string;
  mod1Rainfall: string;
  mod1ChallengesTitle: string;

  mod2Kicker: string;
  mod2IndigenousTitle: string;
  mod2OriginalPeoples: string;
  mod2ColonialTitle: string;
  mod2EconomicDrivers: string;
  mod2Period: string;
  mod2AfroTitle: string;
  mod2QuilomboLabel: string;
  mod2MilestonesTitle: string;
  mod2ImmigrationTitle: string;
  mod2PrimaryGroups: string;

  mod3Kicker: string;
  mod3FestivalsTitle: string;
  mod3Highlight: string;
  mod3MusicTitle: string;
  mod3Instruments: string;
  mod3Pioneers: string;
  mod3TraditionsTitle: string;
  mod3FolkloreTitle: string;

  mod4Kicker: string;
  mod4PhilosophyLabel: string;
  mod4DishesTitle: string;
  mod4MainIngredients: string;
  mod4CulturalMeaning: string;
  mod4NativeIngredientsTitle: string;
  mod4TasteProfile: string;
  mod4TraditionalUse: string;
  mod4BeveragesTitle: string;

  mod5Kicker: string;
  mod5SectorsTitle: string;
  mod5SectorGdp: string;
  mod5RegionalHubs: string;
  mod5ExportsTitle: string;
  mod5Destinations: string;
  mod5InnovationTitle: string;
  mod5TechHubs: string;
  mod5CleanEnergy: string;

  mod6Kicker: string;
  mod6FootballTitle: string;
  mod6StadiumsTitle: string;
  mod6Seats: string;
  mod6HistoricClubs: string;
  mod6MomentsTitle: string;
  mod6Rivalries: string;
  mod6MartialArtsTitle: string;
  mod6Philosophy: string;
  mod6Masters: string;
  mod6ExtremeSportsTitle: string;
  mod6Hotspots: string;

  mod7Kicker: string;
  mod7Title: string;
  mod7Subtitle: string;
  mod7VideoKicker: string;
  mod7WatchYoutube: string;
  mod7Duration: string;
  mod7GalleryTitle: string;
  mod7PhotosCount: string;
  mod7SpotifyTitle: string;
  mod7ListenSpotify: string;

  mapSectionKicker: string;
  mapSectionTitle: string;
  mapSectionSubtitle: string;
  mapLayerSatellite: string;
  mapLayerTopo: string;
  mapLayerClean: string;
  mapUnescoBadge: string;
  mapLandmarksCount: string;

  metricsTitle: string;
  metricsTotalPop: string;
  metricsPopRank: string;
  metricsArea: string;
  metricsAreaRank: string;
  metricsCapital: string;
  metricsCapitalNote: string;
  metricsUnesco: string;
  metricsUnescoNote: string;
  metricsCoast: string;
  metricsCoastNote: string;
  metricsTimezones: string;
}

export const MODULE_UI_LABELS: Record<LanguageCode, ModuleUiLabels> = {
  nl: {
    mod1Kicker: 'Module 01 • Biomen, reliëf & klimaat',
    mod1BiomesTitle: 'Belangrijkste biomen & biodiversiteit',
    mod1Coverage: 'Dekking',
    mod1KeyFauna: 'Kenmerkende fauna',
    mod1KeyFlora: 'Kenmerkende flora',
    mod1TopoTitle: 'Topografie & reliëf',
    mod1HighestPoint: 'Hoogste punt',
    mod1Formations: 'Formaties',
    mod1HydroTitle: 'Rivierstelsel & waterbekkens',
    mod1Basins: 'Stroomgebieden',
    mod1ClimateTitle: 'Klimaatregime',
    mod1Zone: 'Klimaatzones',
    mod1TempRange: 'Temperatuur',
    mod1Rainfall: 'Jaarlijkse neerslag',
    mod1ChallengesTitle: 'Ecologische uitdagingen & natuurbehoud',

    mod2Kicker: 'Module 02 • Wortels, verzet & samenleving',
    mod2IndigenousTitle: 'Inheems voorouderlijk erfgoed',
    mod2OriginalPeoples: 'Oorspronkelijke volkeren',
    mod2ColonialTitle: 'Koloniale cycli & keizerrijk',
    mod2EconomicDrivers: 'Economische motoren',
    mod2Period: 'Periode',
    mod2AfroTitle: 'Afro-Braziliaanse aanwezigheid & quilombos',
    mod2QuilomboLabel: 'Vrijheidsgemeenschappen',
    mod2MilestonesTitle: 'Beslissende historische mijlpalen',
    mod2ImmigrationTitle: 'Immigratiegolven & hedendaagse demografie',
    mod2PrimaryGroups: 'Belangrijkste groepen',

    mod3Kicker: 'Module 03 • Ritmes, volksfeesten & mythen',
    mod3FestivalsTitle: 'Grote festivals & collectieve rituelen',
    mod3Highlight: 'Hoogtepunt',
    mod3MusicTitle: 'Muziekgenres & typische instrumenten',
    mod3Instruments: 'Instrumenten',
    mod3Pioneers: 'Pioniers & iconen',
    mod3TraditionsTitle: 'Ambachten, dans & levende tradities',
    mod3FolkloreTitle: 'Folklore, legenden & mystiek',

    mod4Kicker: 'Module 04 • Inheemse smaken, stoofschotels & identiteit',
    mod4PhilosophyLabel: 'Regionale culinaire filosofie',
    mod4DishesTitle: 'Iconische gerechten & traditie',
    mod4MainIngredients: 'Hoofdingrediënten',
    mod4CulturalMeaning: 'Culturele betekenis',
    mod4NativeIngredientsTitle: 'Inheemse ingrediënten & culinaire plantkunde',
    mod4TasteProfile: 'Smaakprofiel',
    mod4TraditionalUse: 'Traditioneel gebruik',
    mod4BeveragesTitle: 'Traditionele dranken & infusies',

    mod5Kicker: 'Module 05 • Industrie, wereldhandel & innovatie',
    mod5SectorsTitle: 'Industriële clusters & strategische sectoren',
    mod5SectorGdp: 'Aandeel BBP',
    mod5RegionalHubs: 'Regionale hubs',
    mod5ExportsTitle: 'Belangrijkste wereldwijde exportproducten',
    mod5Destinations: 'Bestemmingen',
    mod5InnovationTitle: 'Technologische grenzen & groene transitie',
    mod5TechHubs: 'Technologieparken',
    mod5CleanEnergy: 'Duurzame energie',

    mod6Kicker: 'Module 06 • Voetbal, vechtkunst & outdoorsport',
    mod6FootballTitle: 'Voetbalcultuur & legendarische klassiekers',
    mod6StadiumsTitle: 'Voetbaltempels (stadions)',
    mod6Seats: 'plaatsen',
    mod6HistoricClubs: 'Historische clubs',
    mod6MomentsTitle: 'Onvergetelijke sportmomenten',
    mod6Rivalries: 'Rivaliteiten',
    mod6MartialArtsTitle: 'Vechtkunsten & gevechtsfilosofie',
    mod6Philosophy: 'Filosofie',
    mod6Masters: 'Meesters & iconen',
    mod6ExtremeSportsTitle: 'Extreme sporten & natuuravontuur',
    mod6Hotspots: 'Toplocaties',

    mod7Kicker: 'Module 07 • Fotografie, 4K-dronevideo & muziek',
    mod7Title: 'Fotografische impressie & luchtcinema 4K',
    mod7Subtitle:
      'Verken haarscherpe fotografie op volledig scherm en bekijk 4K-dronedocumentaires over de landschappen en steden van deze regio.',
    mod7VideoKicker: 'Luchtexpedities & documentaire • 4K UHD',
    mod7WatchYoutube: 'Bekijk op YouTube',
    mod7Duration: 'Duur',
    mod7GalleryTitle: 'Geselecteerde fotogalerij',
    mod7PhotosCount: 'hoge-resolutiefoto’s (klik om te vergroten)',
    mod7SpotifyTitle: 'Officiële regionale soundtrack',
    mod7ListenSpotify: 'Open in Spotify',

    mapSectionKicker: 'Cartografie & bezienswaardigheden',
    mapSectionTitle: 'Interactieve regiokaart, satelliet & topografie',
    mapSectionSubtitle:
      'Schakel rechtsboven op de kaart tussen Satellietbeeld (Esri World Imagery), Hoogtelijnen (OpenTopoMap) en Overzichtskaart (OpenStreetMap). Klik op een locatie voor foto’s en achtergronden.',
    mapLayerSatellite: 'Satelliet (Esri World Imagery)',
    mapLayerTopo: 'Topografie & reliëf (OpenTopoMap)',
    mapLayerClean: 'Overzichtskaart (OpenStreetMap)',
    mapUnescoBadge: 'UNESCO-werelderfgoed',
    mapLandmarksCount: 'bezienswaardigheden in deze regio',

    metricsTitle: 'Nationale kerncijfers & geografie',
    metricsTotalPop: 'Totale bevolking',
    metricsPopRank: '7e grootste ter wereld',
    metricsArea: 'Oppervlakte',
    metricsAreaRank: '5e grootste land',
    metricsCapital: 'Federale hoofdstad',
    metricsCapitalNote: 'Plano Piloto (1960)',
    metricsUnesco: 'UNESCO-werelderfgoed',
    metricsUnescoNote: 'Cultuur & natuur',
    metricsCoast: 'Atlantische kustlijn',
    metricsCoastNote: 'Tropische & subtropische kust',
    metricsTimezones: 'Tijdzones'
  },
  en: {
    mod1Kicker: 'Module 01 • Biomes, Relief & Climate',
    mod1BiomesTitle: 'Predominant Biomes & Biodiversity',
    mod1Coverage: 'Coverage',
    mod1KeyFauna: 'Key Fauna',
    mod1KeyFlora: 'Key Flora',
    mod1TopoTitle: 'Topography & Relief',
    mod1HighestPoint: 'Highest Point',
    mod1Formations: 'Formations',
    mod1HydroTitle: 'Hydrographic Network',
    mod1Basins: 'Major Basins',
    mod1ClimateTitle: 'Climatic Regime',
    mod1Zone: 'Climate Zones',
    mod1TempRange: 'Temperature',
    mod1Rainfall: 'Annual Rainfall',
    mod1ChallengesTitle: 'Ecological Challenges & Conservation',

    mod2Kicker: 'Module 02 • Roots, Resistance & Society',
    mod2IndigenousTitle: 'Ancestral Indigenous Heritage',
    mod2OriginalPeoples: 'Original Peoples',
    mod2ColonialTitle: 'Colonial Cycles & Empire',
    mod2EconomicDrivers: 'Economic Drivers',
    mod2Period: 'Period',
    mod2AfroTitle: 'Afro-Brazilian Presence & Quilombos',
    mod2QuilomboLabel: 'Quilombo Territories',
    mod2MilestonesTitle: 'Decisive Historical Milestones',
    mod2ImmigrationTitle: 'Immigration Waves & Modern Demographics',
    mod2PrimaryGroups: 'Primary Groups',

    mod3Kicker: 'Module 03 • Rhythms, Popular Festivals & Myths',
    mod3FestivalsTitle: 'Major Festivals & Collective Rituals',
    mod3Highlight: 'Highlight',
    mod3MusicTitle: 'Musical Genres & Typical Instruments',
    mod3Instruments: 'Instruments',
    mod3Pioneers: 'Pioneers & Icons',
    mod3TraditionsTitle: 'Crafts, Dances & Living Traditions',
    mod3FolkloreTitle: 'Folklore, Legends & Mysticism',

    mod4Kicker: 'Module 04 • Native Flavors, Stews & Identity',
    mod4PhilosophyLabel: 'Regional Culinary Philosophy',
    mod4DishesTitle: 'Signature Dishes & Tradition',
    mod4MainIngredients: 'Key Ingredients',
    mod4CulturalMeaning: 'Cultural Significance',
    mod4NativeIngredientsTitle: 'Native Ingredients & Culinary Botany',
    mod4TasteProfile: 'Taste Profile',
    mod4TraditionalUse: 'Traditional Use',
    mod4BeveragesTitle: 'Traditional Beverages & Infusions',

    mod5Kicker: 'Module 05 • Industry, Global Trade & Innovation',
    mod5SectorsTitle: 'Industrial Clusters & Strategic Sectors',
    mod5SectorGdp: 'Sector GDP',
    mod5RegionalHubs: 'Regional Hubs',
    mod5ExportsTitle: 'Leading Global Export Commodities',
    mod5Destinations: 'Key Markets',
    mod5InnovationTitle: 'Technological Frontiers & Green Transition',
    mod5TechHubs: 'Technology Hubs',
    mod5CleanEnergy: 'Clean Energy',

    mod6Kicker: 'Module 06 • Football, Martial Arts & Outdoor Sports',
    mod6FootballTitle: 'Football Culture & Legendary Classics',
    mod6StadiumsTitle: 'Temples of Sport (Stadiums)',
    mod6Seats: 'seats',
    mod6HistoricClubs: 'Historic Clubs',
    mod6MomentsTitle: 'Unforgettable Sporting Moments',
    mod6Rivalries: 'Local Derbies',
    mod6MartialArtsTitle: 'Martial Arts & Combat Philosophy',
    mod6Philosophy: 'Philosophy',
    mod6Masters: 'Masters & Icons',
    mod6ExtremeSportsTitle: 'Extreme Sports & Nature Adventure',
    mod6Hotspots: 'Notable Hotspots',

    mod7Kicker: 'Module 07 • Photography, 4K Drone Video & Music',
    mod7Title: 'Photographic Immersion & 4K Aerial Cinema',
    mod7Subtitle:
      'Explore high-resolution photography in full-screen Lightbox view and watch 4K drone documentaries capturing the landscapes of this region.',
    mod7VideoKicker: 'Aerial Expeditions & Cinema • 4K UHD',
    mod7WatchYoutube: 'Watch on YouTube',
    mod7Duration: 'Duration',
    mod7GalleryTitle: 'Curated Photo Gallery',
    mod7PhotosCount: 'High-Resolution Photographs (Click to enlarge)',
    mod7SpotifyTitle: 'Official Regional Soundtrack',
    mod7ListenSpotify: 'Open in Spotify',

    mapSectionKicker: 'TACTICAL CARTOGRAPHY & LANDMARKS',
    mapSectionTitle: 'Interactive Regional Map, Satellite & Topography',
    mapSectionSubtitle:
      'Switch in the top-right corner of the map between Satellite Imagery (Esri), Topographic Relief (OpenTopoMap), and Clean Atlas. Click any marker for photos and details.',
    mapLayerSatellite: 'Satellite (Esri World Imagery)',
    mapLayerTopo: 'Topography & Relief (OpenTopoMap)',
    mapLayerClean: 'Clean Atlas (Voyager)',
    mapUnescoBadge: 'UNESCO World Heritage',
    mapLandmarksCount: 'Landmarks in this region',

    metricsTitle: 'National Macroeconomic & Territory Indicators',
    metricsTotalPop: 'Total Population',
    metricsPopRank: '7th largest globally',
    metricsArea: 'Territorial Area',
    metricsAreaRank: '5th largest country',
    metricsCapital: 'Federal Capital',
    metricsCapitalNote: 'Plano Piloto (1960)',
    metricsUnesco: 'UNESCO Sites',
    metricsUnescoNote: 'Culture & Nature',
    metricsCoast: 'Atlantic Coastline',
    metricsCoastNote: 'Continuous coast',
    metricsTimezones: 'Timezones'
  },
  pt: {
    mod1Kicker: 'Módulo 01 • Biomas, Relevo & Clima',
    mod1BiomesTitle: 'Biomas Predominantes & Biodiversidade',
    mod1Coverage: 'Cobertura',
    mod1KeyFauna: 'Fauna Chave',
    mod1KeyFlora: 'Flora Chave',
    mod1TopoTitle: 'Topografia & Relevo',
    mod1HighestPoint: 'Ponto Culminante',
    mod1Formations: 'Formações',
    mod1HydroTitle: 'Rede Hidrográfica',
    mod1Basins: 'Bacias',
    mod1ClimateTitle: 'Regime Climático',
    mod1Zone: 'Zonas Climáticas',
    mod1TempRange: 'Temperatura',
    mod1Rainfall: 'Pluviosidade Anual',
    mod1ChallengesTitle: 'Desafios Ecológicos & Conservação',

    mod2Kicker: 'Módulo 02 • Raízes, Resistência & Sociedade',
    mod2IndigenousTitle: 'Herança Indígena Ancestral',
    mod2OriginalPeoples: 'Povos Originários',
    mod2ColonialTitle: 'Ciclos Coloniais & Império',
    mod2EconomicDrivers: 'Motores Econômicos',
    mod2Period: 'Período',
    mod2AfroTitle: 'Presença Afro-Brasileira & Quilombos',
    mod2QuilomboLabel: 'Territórios & Resistência',
    mod2MilestonesTitle: 'Marcos Históricos Decisivos',
    mod2ImmigrationTitle: 'Ondas Imigratórias & Demografia Moderna',
    mod2PrimaryGroups: 'Grupos Principais',

    mod3Kicker: 'Módulo 03 • Ritmos, Festas Populares & Mitos',
    mod3FestivalsTitle: 'Grandes Festivais & Rituais Coletivos',
    mod3Highlight: 'Destaque',
    mod3MusicTitle: 'Gêneros Musicais & Instrumentação Típica',
    mod3Instruments: 'Instrumentos',
    mod3Pioneers: 'Pioneiros & Ícones',
    mod3TraditionsTitle: 'Ofícios, Danças & Saberes Tradicionais',
    mod3FolkloreTitle: 'Folclore, Lendas & Misticismo',

    mod4Kicker: 'Módulo 04 • Sabores Nativos, Panelados & Identidade',
    mod4PhilosophyLabel: 'Filosofia Culinária Regional',
    mod4DishesTitle: 'Pratos Emblemáticos & Tradição',
    mod4MainIngredients: 'Ingredientes Principais',
    mod4CulturalMeaning: 'Significado Cultural',
    mod4NativeIngredientsTitle: 'Ingredientes Nativos & Botânica Culinária',
    mod4TasteProfile: 'Perfil de Sabor',
    mod4TraditionalUse: 'Uso Tradicional',
    mod4BeveragesTitle: 'Bebidas Tradicionais & Infusões',

    mod5Kicker: 'Módulo 05 • Indústria, Cadeias Globais & Inovação',
    mod5SectorsTitle: 'Polos Industriais & Setores Estratégicos',
    mod5SectorGdp: 'PIB Setorial',
    mod5RegionalHubs: 'Hubs Regionais',
    mod5ExportsTitle: 'Principais Pautas de Exportação Mundial',
    mod5Destinations: 'Destinos',
    mod5InnovationTitle: 'Fronteiras Tecnológicas & Transição Ecológica',
    mod5TechHubs: 'Parques Tecnológicos',
    mod5CleanEnergy: 'Energia Limpa',

    mod6Kicker: 'Módulo 06 • Futebol, Artes Marciais & Esportes Radicais',
    mod6FootballTitle: 'Cultura do Futebol & Grandes Clássicos',
    mod6StadiumsTitle: 'Templos do Esporte (Estádios)',
    mod6Seats: 'lugares',
    mod6HistoricClubs: 'Clubes Históricos',
    mod6MomentsTitle: 'Momentos Históricos Inesquecíveis',
    mod6Rivalries: 'Rivalidades',
    mod6MartialArtsTitle: 'Artes Marciais & Filosofia de Combate',
    mod6Philosophy: 'Filosofia',
    mod6Masters: 'Mestres & Ícones',
    mod6ExtremeSportsTitle: 'Esportes Radicais & Natureza',
    mod6Hotspots: 'Picos Notáveis',

    mod7Kicker: 'Módulo 07 • Fotografia, Vídeo 4K & Música',
    mod7Title: 'Imersão Fotográfica & Cinema Aéreo 4K',
    mod7Subtitle:
      'Explore fotografias em alta resolução em tela cheia e assista a documentários 4K captados por drones sobre as paisagens desta região.',
    mod7VideoKicker: 'Cinema & Expedições Aéreas • 4K UHD',
    mod7WatchYoutube: 'Assistir no YouTube',
    mod7Duration: 'Duração',
    mod7GalleryTitle: 'Galeria Fotográfica Editorial',
    mod7PhotosCount: 'Fotografias em Alta Resolução (Clique para ampliar)',
    mod7SpotifyTitle: 'Trilha Sonora Oficial da Região',
    mod7ListenSpotify: 'Ouvir no Spotify',

    mapSectionKicker: 'CARTOGRAFIA TÁTICA & MARCOS HISTÓRICOS',
    mapSectionTitle: 'Mapa Regional Interativo, Satélite & Topografia',
    mapSectionSubtitle:
      'Alterne no canto superior direito do mapa entre Satélite (Esri World Imagery), Topografia (OpenTopoMap) e Mapa Limpo. Clique nos pinos para fotos e detalhes.',
    mapLayerSatellite: 'Satélite (Esri World Imagery)',
    mapLayerTopo: 'Topografia & Relevo (OpenTopoMap)',
    mapLayerClean: 'Mapa Editorial (Voyager)',
    mapUnescoBadge: 'Patrimônio Mundial UNESCO',
    mapLandmarksCount: 'Marcos nesta região',

    metricsTitle: 'Indicadores Nacionais & Território',
    metricsTotalPop: 'População Total',
    metricsPopRank: '7ª maior mundial',
    metricsArea: 'Área Territorial',
    metricsAreaRank: '5º maior país',
    metricsCapital: 'Capital Federal',
    metricsCapitalNote: 'Plano Piloto (1960)',
    metricsUnesco: 'Sítios UNESCO',
    metricsUnescoNote: 'Cultura e Natureza',
    metricsCoast: 'Costa Atlântica',
    metricsCoastNote: 'Litoral contínuo',
    metricsTimezones: 'Fusos Horários'
  }
};

/**
 * Dutch (NL) & Portuguese (PT) translations for the regional module headlines and overviews
 * so when the user selects NL or PT, the deep regional pages read naturally in that language
 * without sudden English blocks.
 */
interface LocalizedModuleSummaries {
  tagline: string;
  climateOverview: string;
  geography: {
    headline: string;
    overview: string;
    terrainSummary: string;
    riverSystemSummary: string;
    environmentalChallenges: string[];
  };
  history: {
    headline: string;
    overview: string;
    indigenousContinuity: string;
    colonialNarrative: string;
    afroLegacy: string;
    modernSummary: string;
  };
  culture: {
    headline: string;
    overview: string;
  };
  gastronomy: {
    headline: string;
    overview: string;
    philosophy: string;
  };
  economy: {
    headline: string;
    overview: string;
    cleanEnergyFocus: string;
  };
  sports: {
    headline: string;
    overview: string;
    footballRole: string;
  };
}

export const LOCALIZED_REGION_SUMMARIES: Record<
  'nl' | 'pt',
  Record<RegionId, LocalizedModuleSummaries>
> = {
  nl: {
    north: {
      tagline: 'De rivierzee, oerwoudkruinen en mystiek van de Amazone',
      climateOverview: 'Equatoriaal super-vochtig (26°C tot 32°C het hele jaar door met >2.500 mm regenval)',
      geography: {
        headline: 'Het Amazonebekken, het Guyana-schild en vliegende rivieren',
        overview:
          'De regio Noord (Norte) beslaat ruim 45% van het Braziliaanse grondgebied (3,85 miljoen km²) en vormt het grootste aaneengesloten tropische regenwoud op aarde. Het landschap wordt gedomineerd door de machtige Amazone-rivier en geflankeerd door de miljarden jaren oude tafelbergen (tepuis) van het Guyana-schild in het noorden.',
        terrainSummary:
          'Een immens sedimentair rivierbekken omringd door de pre-cambrische hooglanden van het Guyana-schild (met de Pico da Neblina op 2.995 m als hoogste punt van Brazilië) en het Centraal-Braziliaanse schild.',
        riverSystemSummary:
          'Het grootste hydrografische netwerk ter wereld (20% van al het vloeibare zoetwater op aarde). Omvat zwartwaterrivieren (Rio Negro), witwaterrivieren vol vruchtbaar slib uit de Andes (Solimões) en helderwaterrivieren (Tapajós en Xingu).',
        environmentalChallenges: [
          'Ontbossingsdruk langs de zuidelijke "Boog van Ontbossing" door illegale houtkap en veeteelt',
          'Illegale goudwinning (garimpo) die kwikvervuiling veroorzaakt in inheemse rivierstelsels',
          'Extreme droogtes en bosbranden door opwarming van de Atlantische Oceaan en El Niño'
        ]
      },
      history: {
        headline: 'Duizenden jaren inheemse beschaving, het rubbertijdperk en bosbeschermers',
        overview:
          'Archeologisch onderzoek bewijst dat de Amazone geen onbewoonde wildernis was, maar miljoenen inwoners telde in complexe samenlevingen die vruchtbare zwarte aarde (Terra Preta) creëerden. Eind 19e eeuw bracht het rubbertijdperk Europese belle-époquerijkdom naar Manaus en Belém.',
        indigenousContinuity:
          'Meer dan 180 inheemse volkeren spreken vandaag ruim 150 talen in het Amazonegebied. Zij beheren meer dan 110 miljoen hectare beschermd regenwoud als levende apotheek en kosmologisch thuisland.',
        colonialNarrative:
          'Portugese expedities bouwden in 1616 Forte do Presépio (Belém) om de riviermonding te verdedigen tegen Nederlanders en Fransen. Tussen 1879 en 1912 zorgde het monopolie op natuurlijk rubber (Hevea brasiliensis) voor het legendarische Teatro Amazonas midden in de jungle.',
        afroLegacy:
          'Tot slaaf gemaakte Afrikanen die naar plantages in Pará en Maranhão werden gebracht, stichtten vrije quilombo-gemeenschappen diep langs de Trombetas- en Tocantins-rivieren, waar Afrikaanse en inheemse landbouwkennis samensmolten.',
        modernSummary:
          'Vandaag vormt de regio een levendige mix van ribeirinhos (rivierbewoners), inheemse naties en moderne metropolen als Manaus (2,2 miljoen inwoners) en Belém (gastheer van VN-klimaattop COP30).'
      },
      culture: {
        headline: 'Boi-Bumbá-spektakel in Parintins, carimbó-ritmes en regenwoudmythen',
        overview:
          'De cultuur van het Noorden draait om de cadans van de rivier en de mystiek van het woud. Van het gigantische openluchttheater van het Festival van Parintins (Caprichoso vs. Garantido) tot de opzwepende carimbó- en tecnobrega-muziek aan de kades van Belém.',
      },
      gastronomy: {
        headline: 'De meest authentieke keuken van Brazilië: tucupi, jambu en wilde açaí',
        overview:
          'In tegenstelling tot de rest van het land is de noordelijke gastronomie bijna puur inheems gebleven. Kokkinnen gebruiken gefermenteerd manioksap (tucupi), het tintelende kruid jambu dat de lippen laat vibreren, verse açaí en reuzenvissen zoals de pirarucu.',
        philosophy:
          'Het regenwoud als heilige voorraadkast: eeuwenoude inheemse fermentatietechnieken zetten giftige wilde cassave om in verfijnde, umami-rijke bouillons.'
      },
      economy: {
        headline: 'De vrijhandelszone van Manaus, ijzererts van Carajás en bio-economie',
        overview:
          'De economie van het Noorden combineert hightech elektronica- en tweewielerproductie in de Zona Franca de Manaus met ’s werelds grootste ijzerertsmijnen in Pará en een snelgroeiende duurzame bio-economie rond açaí, paranoten en cosmetica.',
        cleanEnergyFocus:
          'Waterkrachtcentrales zoals Belo Monte en Tucuruí leveren een groot deel van de nationale groene stroom, terwijl zonne-energie en bio-economie opkomen voor geïsoleerde riviergemeenschappen.'
      },
      sports: {
        headline: 'De Re-Pa-klassieker in Belém, kano-expedities en Braziliaans jiu-jitsu',
        overview:
          'Voetbal leeft intens in het Noorden met de rivaliteit tussen Remo en Paysandu (de meest gespeelde derby ter wereld), terwijl Manaus een van de belangrijkste broedplaatsen is voor Braziliaans jiu-jitsu en MMA-wereldkampioenen.',
        footballRole:
          'De Arena da Amazônia in Manaus (ontworpen als inheemse rieten mand) en het Mangueirão-stadion in Belém vormen het podium voor gepassioneerde regionale derby’s.'
      }
    },
    northeast: {
      tagline: 'De Afro-Braziliaanse ziel, koloniale barok, witte duinen en zonnekust',
      climateOverview: 'Tropisch aan de kust (25°C–30°C) en semi-aride in de binnenlandse Sertão',
      geography: {
        headline: '3.300 km tropische kustlijn, de Caatinga-Sertão en tafelbergen van Chapada',
        overview:
          'De regio Noordoost (Nordeste) telt 9 staten en biedt spectaculaire geografische contrasten: van de laguneduinen van Lençóis Maranhenses en de vulkanische archipel Fernando de Noronha tot de droge, veerkrachtige Caatinga en de watervallen van Chapada Diamantina.',
        terrainSummary:
          'Bestaat uit de vruchtbare kuststrook (Zona da Mata), het overgangsgebied (Agreste), het droge binnenland (Sertão) en oude zandsteenplateaus zoals Chapada Diamantina.',
        riverSystemSummary:
          'De Rio São Francisco ("Velho Chico") van 2.830 km lang is de levensader die vanuit Minas Gerais dwars door de droge Sertão naar de Atlantische Oceaan stroomt.',
        environmentalChallenges: [
          'Verwoestijning en langdurige droogtecycli in het semi-aride Caatinga-bioom',
          'Kusterosie en verbleking van koraalriffen langs de Atlantische kust',
          'Bescherming van zeereservaten rond Abrolhos en Fernando de Noronha'
        ]
      },
      history: {
        headline: 'De geboorteplaats van Brazilië, Salvador da Bahia en Quilombo dos Palmares',
        overview:
          'In 1500 zetten de Portugezen voor het eerst voet aan wal in Bahia. Salvador was ruim twee eeuwen de eerste hoofdstad van Brazilië. Tegelijkertijd ontstond in Recife en Olinda tussen 1630 en 1654 Nederlands-Brazilië onder Johan Maurits van Nassau.',
        indigenousContinuity:
          'Tupi-volkeren zoals de Tupinambá en Potiguara bewoonden de kust, terwijl de Pataxó en Xukuru tot op de dag van vandaag hun gebieden en tradities beschermen.',
        colonialNarrative:
          'Suikerrietplantages (engenhos) maakten Pernambuco en Bahia in de 16e en 17e eeuw tot de rijkste koloniën ter wereld, zichtbaar in de gouden barokkerken van het Pelourinho.',
        afroLegacy:
          'Bahia wordt liefkozend het "Zwarte Rome van Amerika" genoemd. Hier bleven West-Afrikaanse Yoruba- en Fon-tradities (candomblé, capoeira, percussie) het puurst bewaard, en streed Zumbi dos Palmares een eeuw lang voor vrijheid.',
        modernSummary:
          'Het huidige Noordoosten (57 miljoen inwoners) is een culturele grootmacht die heel Brazilië voorziet van literatuur, muziek, gastronomie en duurzame energie.'
      },
      culture: {
        headline: 'Straatcarnaval van Salvador en Olinda, Festa Junina en forró-accordeons',
        overview:
          'Geen enkele regio heeft zoveel muzikale ritmes voortgebracht: van axé, samba-reggae (Olodum) en frevo met vliegende parapluutjes tot de warme Festa Junina-oogstfeesten met forró en baião.',
      },
      gastronomy: {
        headline: 'Dendê-palmolie, kokosmelk, acarajé en zongedroogd vlees uit de Sertão',
        overview:
          'In Bahia proef je de directe Afrikaanse erfenis in de vorm van acarajé (krokante bonenbeignets in rode dendê-olie) en moqueca baiana met garnalen en kokosmelk, terwijl het binnenland bekendstaat om hartige carne de sol en tapioca.',
        philosophy:
          'Een zintuiglijke samensmelting van West-Afrikaanse heilige kruiden, Portugese banketbakkerij en inheemse cassave.'
      },
      economy: {
        headline: 'Braziliës groene-energiekampioen (wind & zon), tech-eiland Porto Digital en toerisme',
        overview:
          'Het Noordoosten wekt meer dan 85% van alle Braziliaanse windenergie op langs de winderige duinkust, huisvest in Recife het grootste stedelijke technologiepark van het land (Porto Digital) en exporteert tropisch fruit uit de geïrrigeerde São Francisco-vallei.',
        cleanEnergyFocus:
          'Koploper in groene waterstof (haven van Pecém in Ceará) en grootschalige wind- en zonneparken.'
      },
      sports: {
        headline: 'Capoeira-cirkels op straat, kitesurf-mekka Ceará en wereldkampioenen surfen',
        overview:
          'Naast fanatieke voetbalclubs als Bahia, Vitória, Sport Recife en Fortaleza is het Noordoosten het wereldwijde mekka voor kitesurfers (Cumbuco en Jericoacoara) en de bakermat van olympisch en WSL-surfkampioen Ítalo Ferreira.',
        footballRole:
          'De Copa do Nordeste ("Lampions League") zorgt elk jaar voor kolkende stadions in Salvador, Recife en Fortaleza.'
      }
    },
    'center-west': {
      tagline: 'De Cerrado-savanne, jaguars in het Pantanal en modernistisch Brasília',
      climateOverview: 'Tropisch savanneklimaat (Aw) met een duidelijk regenseizoen (okt–mrt) en droge winter (apr–sep)',
      geography: {
        headline: 'Het Pantanal-moerasparadijs, de wieg van de wateren en kristalrivieren van Bonito',
        overview:
          'Centraal-West (Centro-Oeste) herbergt twee spectaculaire ecosystemen: het Pantanal (het grootste tropische wetland op aarde met de hoogste concentratie jaguars en ara’s) en de Cerrado (de oudste en meest biodiverse savanne ter wereld, waar de grote rivieren van Zuid-Amerika ontspringen).',
        terrainSummary:
          'Uitgestrekte hoogvlaktes en zandstenen tafelbergen (Chapada dos Veadeiros en Chapada dos Guimarães) die plotseling aflopen naar de overstromingsvlakte van het Pantanal.',
        riverSystemSummary:
          'Bekend als de "Watertoren van Brazilië": hier ontspringen de bronrivieren van zowel het Amazonebekken, het Paraná/Plata-bekken als het São Francisco-bekken.',
        environmentalChallenges: [
          'Snelle omzetting van inheemse Cerrado-savanne naar grootschalige soja- en katoenvelden',
          'Natuurbranden in het Pantanal tijdens extreme droogtejaren',
          'Bescherming van de kristalheldere kalksteenbronnen van Bonito en de Araguaia-rivier'
        ]
      },
      history: {
        headline: 'Van 18e-eeuwse goudpioniers en het Xingu-park tot de droomstad Brasília (1960)',
        overview:
          'Eeuwenlang was het Centraal-Westen het domein van inheemse volkeren en koloniale goudzoekers in stadjes als Pirenópolis en Goiás Velho. In 1956–1960 verplaatste president Juscelino Kubitschek het zwaartepunt van het land naar het binnenland met de bouw van de futuristische hoofdstad Brasília.',
        indigenousContinuity:
          'Het Território Indígena do Xingu (opgericht in 1961 door de gebroeders Villas-Bôas) beschermt 16 volkeren die hun beroemde Kuarup-rituelen en keramiekkunst in ere houden.',
        colonialNarrative:
          'Bandeirantes trokken in de 18e eeuw over de rivieren op zoek naar goud en diamanten in Mato Grosso en Goiás, wat leidde tot charmante barokstadjes.',
        afroLegacy:
          'De Kalunga-gemeenschap in het ruige bergland van Chapada dos Veadeiros vormt het grootste erkende quilombo-territorium van Brazilië (262.000 hectare).',
        modernSummary:
          'Door de bouw van Brasília en moderne landbouwtechnologie groeide Centro-Oeste in zestig jaar van een dunbevolkte grensregio naar het politieke en agrarische machtscentrum van het land.'
      },
      culture: {
        headline: 'Sertanejo-muziek, pantaneiro-cowboys en modernistische kunst van Niemeyer en Bulcão',
        overview:
          'Het culturele leven combineert de poëtische cowboytradities (comitivas pantaneiras) en de razend populaire sertanejo-muziek uit Goiânia met de futuristische kathedralen en azulejo-tegelkunst van Oscar Niemeyer en Athos Bulcão in Brasília.',
      },
      gastronomy: {
        headline: 'Arroz com pequi uit de Cerrado, verse riviervis uit het Pantanal en tereré',
        overview:
          'De keuken wordt gekenmerkt door de goudgele vrucht pequi (de ziel van Goiás), verse pintado- en pacu-riviervis uit het Pantanal en het verfrissende ijskoude maté-ritueel tereré dat door cowboys uit een hoornen beker (guampa) wordt gedronken.',
        philosophy:
          'Voedzame, eerlijke gerechten van de savanne en de rivier, gemaakt voor lange dagen te paard.'
      },
      economy: {
        headline: 'De graanschuur van de wereld, staatsbestuur in Brasília en bio-ethanol',
        overview:
          'Dankzij door onderzoeksinstituut Embrapa ontwikkelde tropische gewassen is Mato Grosso de grootste producent van soja, maïs, katoen en rundvlees van Brazilië, terwijl Brasília het hoogste BBP per hoofd van de bevolking heeft.',
        cleanEnergyFocus:
          'Enorme productie van suikerriet- en maïs-ethanol, biodiesel en grootschalige zonneparken op het Centraal Plateau.'
      },
      sports: {
        headline: 'Wildlife-ecotoerisme, canyoning in de chapadas en stadion Mané Garrincha',
        overview:
          'De regio biedt wereldklasse ecotoerisme: snorkelen in de glazen rivieren van Bonito, hiken langs 120 meter hoge watervallen in Chapada dos Veadeiros en topvoetbal in het monumentale Estádio Mané Garrincha in Brasília.',
        footballRole:
          'Goiás en Cuiabá vertegenwoordigen de regio in de nationale competities, terwijl Brasília regelmatig het toneel is van Supercup-finales en interlands van de Seleção.'
      }
    },
    southeast: {
      tagline: 'De wereldsteden Rio & São Paulo, gouden barok van Minas en het Atlantisch Woud',
      climateOverview: 'Tropisch aan de kust van Rio en Espírito Santo; subtropisch hooglandklimaat in Minas en São Paulo',
      geography: {
        headline: 'Granieten suikerbroodbergen, groene kustgebergten (Serra do Mar) en Minas-hooglanden',
        overview:
          'De regio Zuidoost (Sudeste) combineert de meest dramatische kustgeografie ter wereld—waar granieten monolieten als de Pão de Açúcar en Corcovado direct uit het Atlantisch Woud en de oceaan oprijzen—met de mistige bergketens van de Serra da Mantiqueira en de ijzerrijke heuvels van Minas Gerais.',
        terrainSummary:
          'Gedomineerd door het Atlantisch Plateau, de steile kustwand van de Serra do Mar en de hoge toppen van de Serra da Mantiqueira en Serra do Caparaó (Pico da Bandeira, 2.891 m).',
        riverSystemSummary:
          'Belangrijke rivieren zijn de Paraíba do Sul (tussen Rio en São Paulo), de Tietê en Paraná, en de bovenloop van de Rio São Francisco in de Serra da Canastra.',
        environmentalChallenges: [
          'Slechts ~12% van het oorspronkelijke Atlantisch Regenwoud (Mata Atlântica) is nog intact',
          'Waterbeheer en luchtkwaliteit in de megasteden São Paulo (22M) en Rio de Janeiro (13M)',
          'Herstel van rivierbekkens na historische mijnbouwactiviteiten in Minas Gerais'
        ]
      },
      history: {
        headline: 'De 18e-eeuwse goudkoorts in Ouro Preto, keizerlijke hofstad Rio en het koffie-imperium',
        overview:
          'In de 18e eeuw financierde het goud van Minas Gerais de Portugese kroon en ontstonden meesterwerken van barokbeeldhouwer Aleijadinho in Ouro Preto. In 1808 werd Rio de Janeiro de enige Europese hoofdstad buiten Europa, gevolgd door de koffieboom en Europese en Japanse immigratie die São Paulo tot industriële reus maakten.',
        indigenousContinuity:
          'Tamoio-, Tupiniquim- en Guarani Mbya-gemeenschappen lieten talloze plaatsnamen na (Niterói, Anhangabaú, Ipanema, Mantiqueira) en leven voort in beschermde kustdorpen.',
        colonialNarrative:
          'De goudcyclus (1695–1780) bracht de onafhankelijkheidsbeweging Inconfidência Mineira (Tiradentes) voort, waarna de koffiecyclus (1830–1930) spoorwegen en kapitaal naar São Paulo bracht.',
        afroLegacy:
          'De Valongo-kade en de wijk Pequena África in Rio de Janeiro vormen het hart waar eind 19e eeuw de moderne samba en het grootste carnaval ter wereld werden geboren.',
        modernSummary:
          'Met 85 miljoen inwoners (42% van de bevolking) en de grootste Japanse, Italiaanse en Libanese diaspora’s buiten hun thuislanden is Sudeste de kosmopolitische motor van Zuid-Amerika.'
      },
      culture: {
        headline: 'Samba en bossa nova op Ipanema, kunstmusea MASP en Inhotim en barok van Minas',
        overview:
          'Van de Sambódromo-parades in Rio en de zachte akkoorden van Tom Jobims "Garota de Ipanema" tot het zwevende betonnen MASP-museum aan Avenida Paulista en Inhotim—het grootste openluchtmuseum voor hedendaagse kunst ter wereld tussen de botanische tuinen van Minas.',
      },
      gastronomy: {
        headline: 'Feijoada completa op zaterdag, pão de queijo uit Minas en specialty koffie',
        overview:
          'Sudeste schonk Brazilië zijn nationale gerecht feijoada (zwarte-bonenstoofpot met sinaasappel en boerenkool), de onweerstaanbare kaasbroodjes (pão de queijo) en ambachtelijke kazen uit de Serra da Canastra, én de culinaire wereldstad São Paulo.',
        philosophy:
          'De gastvrije houtkachel van de Mineiro-boerderij gecombineerd met de kosmopolitische gastronomie van São Paulo en de ontspannen boteco-cultuur van Rio.'
      },
      economy: {
        headline: 'Het financiële hart van Latijns-Amerika (Faria Lima), Embraer-luchtvaart en koffie',
        overview:
          'Sudeste genereert ruim 53% van het Braziliaanse BBP. São Paulo is het financiële en tech-centrum (unicorns als Nubank), São José dos Campos bouwt met Embraer straalvliegtuigen voor de hele wereld, en Minas Gerais is wereldkampioen duurzame Arabica-koffie.',
        cleanEnergyFocus:
          'Wereldleider in flex-fuel bio-ethanoltechnologie, zonne-energie in Minas Gerais en elektrificatie van stadsvervoer.'
      },
      sports: {
        headline: 'De heilige grond van het Maracanã, Formule 1 op Interlagos en Braziliaans jiu-jitsu',
        overview:
          'Hier klopt het sporthart van de wereld: het legendarische Maracanã-stadion in Rio, Pelé’s historische club Santos FC, het Formule 1-circuit van Interlagos (het thuis van Ayrton Senna), en de geboorte van Gracie Jiu-Jitsu en olympisch skateboarden.',
        footballRole:
          'De thuisbasis van giganten als Flamengo, Fluminense, Vasco, Botafogo, Corinthians, Palmeiras, São Paulo FC, Santos, Atlético Mineiro en Cruzeiro.'
      }
    },
    south: {
      tagline: 'De donderende Iguaçu-watervallen, subtropische araucaria-bossen, wijngaarden en gaúcho-pampa',
      climateOverview: 'Subtropisch (Cfa & Cfb) met vier duidelijke seizoenen, milde zomers en koele winters met vorst in de bergen',
      geography: {
        headline: '275 watervallen van Iguaçu, duizelingwekkende canyons en de zuidelijke pampa',
        overview:
          'De regio Zuid (Sul: Paraná, Santa Catarina en Rio Grande do Sul) ligt vrijwel geheel ten zuiden van de Steenbokskeerkring. Het landschap varieert van het wereldwonder van de Iguaçu-watervallen en eeuwenoude araucaria-dennenbossen tot 1.000 meter diepe canyons (Itaimbezinho) en de golvende graslanden van de pampa.',
        terrainSummary:
          'Basaltplateaus, de spectaculaire bergpassen van de Serra do Rio do Rastro, diepe basaltcanyons van Aparados da Serra en de uitgestrekte groene heuvels (coxilhas) van de gaúcho-pampa.',
        riverSystemSummary:
          'Gedomineerd door het Paraná- en Uruguay-rivierbekken, inclusief de Iguaçu-rivier en de reusachtige kustlagune Lagoa dos Patos.',
        environmentalChallenges: [
          'Het araucaria-woud (Mata das Araucárias) is een van de meest bedreigde subtropische bossen',
          'Toenemende extreme regenval en overstromingen in de riviervalleien van Rio Grande do Sul',
          'Bescherming van de natuurlijke pampa-graslanden tegen monocultuur'
        ]
      },
      history: {
        headline: 'Guaraní-missies, de Farroupilha-revolutie en Europese pioniersdorpen',
        overview:
          'In de 17e eeuw stichtten jezuïeten en het Guaraní-volk de beroemde Zeven Missiedorpen (zoals UNESCO-erfgoed São Miguel das Missões). In de 19e eeuw vestigden Italiaanse, Duitse, Poolse, Oekraïense en Azoriaanse immigranten zich in de bergvalleien en op het eiland Florianópolis.',
        indigenousContinuity:
          'De Guaraní, Kaingang en Xokleng zijn de oorspronkelijke bewoners van het Zuiden; zij lieten onder meer de kennis van de yerba-matéplant (chimarrão) na.',
        colonialNarrative:
          'Grensconflicten tussen het Portugese en Spaanse rijk vormden de trotse, onafhankelijke gaúcho-cultuur te paard, met als hoogtepunt de tienjarige Farroupilha-revolutie (1835–1845).',
        afroLegacy:
          'Zwarte lansiers (Lanceiros Negros) vochten in de voorhoede van de zuidelijke geschiedenis, en levendige Afro-gaúcho-gemeenschappen verrijkten de cultuur van Porto Alegre en Pelotas.',
        modernSummary:
          'De regio Sul staat bekend om de hoogste levensstandaard (HDI) van Brazilië, met Curitiba als wereldberoemd model voor groene stadsplanning en Florianópolis als innovatie-eiland.'
      },
      culture: {
        headline: 'Gaúcho-tradities rond het vuur, Italiaanse wijnoogstfeesten en Oktoberfest in Blumenau',
        overview:
          'De cultuur van het Zuiden viert gemeenschapszin: het van hand tot hand doorgeven van de hete chimarrão-maté, de accordeonmuziek van de pampa, vakwerkarchitectuur in Blumenau en Pomerode, en de wijnoogstfeesten in de Serra Gaúcha.',
      },
      gastronomy: {
        headline: 'Fogo de chão-churrasco, mousserende wijnen uit Vale dos Vinhedos en barreado',
        overview:
          'Het Zuiden is het wereldwijde vaderland van het Braziliaanse churrasco-steakhouse (rodízio), geboren rond de open kampvuren van de gaúcho’s. Daarnaast proef je aan de kust van Paraná de langzaam gegaarde stoofschotel barreado, verse oesters in Florianópolis en bekroonde mousserende wijnen in Bento Gonçalves.',
        philosophy:
          'Respect voor puur rundvlees, zeezout en houtvuur, vergezeld van bittere chimarrão en bergwijnen uit familiewijnhuizen.'
      },
      economy: {
        headline: 'De Itaipu-waterkrachtcentrale, tech-hub "Ilha do Silício" en coöperatieve landbouw',
        overview:
          'Op de grens bij Foz do Iguaçu levert de gigantische Itaipu-dam schone waterkracht voor miljoenen huishoudens. Florianópolis heeft de hoogste dichtheid aan tech-startups per inwoner van Brazilië, en de zuidelijke staten vormen een machtige agro-industriële en meubelcluster.',
        cleanEnergyFocus:
          'Itaipu Binacional is een van de grootste producenten van duurzame waterkracht ter wereld, aangevuld met windparken in het zuiden van Rio Grande do Sul.'
      },
      sports: {
        headline: 'De vuurkracht van de Gre-Nal-derby, surfparadijs Florianópolis en skateboard-bowls',
        overview:
          'De rivaliteit tussen Grêmio en Internacional in Porto Alegre (Gre-Nal) geldt als de meest intense stadsderby van Brazilië. Aan de kust van Santa Catarina (Praia do Rosa en Joaquina) trainen de beste surfers en olympische skateboarders zoals Pedro Barros.',
        footballRole:
          'Geboortegrond van voetbalmagiër Ronaldinho Gaúcho en thuisbasis van Grêmio, Internacional, Athletico Paranaense en Coritiba.'
      }
    }
  },
  pt: {
    north: {
      tagline: 'O Rio-Mar, Dossel Ancestral & Misticismo Amazônico',
      climateOverview: 'Equatorial super-úmido (26°C a 32°C o ano todo com mais de 2.500mm de chuvas)',
      geography: {
        headline: 'A Bacia Amazônica, o Escudo das Guianas & os Rios Voadores',
        overview:
          'A Região Norte abrange mais de 45% do território brasileiro (3,85 milhões de km²) e abriga a maior floresta tropical contínua do planeta. O território é cortado pelo monumental Rio Amazonas e emoldurado pelos tepuis milenares do Escudo das Guianas ao norte.',
        terrainSummary:
          'Imensa planície sedimentar amazônica ladeada pelos planaltos pré-cambrianos do Escudo das Guianas (onde se ergue o Pico da Neblina a 2.995m, ponto mais alto do Brasil) e do Escudo Brasileiro.',
        riverSystemSummary:
          'A maior rede hidrográfica da Terra (20% de toda a água doce líquida superficial do planeta). Reúne rios de águas negras (Rio Negro), águas brancas ricas em sedimentos andinos (Solimões) e águas claras esverdeadas (Tapajós e Xingu).',
        environmentalChallenges: [
          'Pressão de desmatamento ao longo do chamado "Arco do Desmatamento" no sul da bacia',
          'Garimpo ilegal e contaminação por mercúrio em rios de territórios indígenas',
          'Eventos extremos de seca severa e incêndios florestais associados a mudanças climáticas'
        ]
      },
      history: {
        headline: 'Milênios de Civilização Indígena, o Ciclo da Borracha & Guardiões da Floresta',
        overview:
          'A arqueologia contemporânea comprova que a Amazônia abrigou milhões de habitantes em sociedades complexas que produziram a fértil Terra Preta de Índio e a cerâmica Marajoara. No final do século XIX, o Ciclo da Borracha levou a opulência da Belle Époque europeia a Manaus e Belém.',
        indigenousContinuity:
          'Mais de 180 povos originários falam mais de 150 línguas vivas na Amazônia brasileira, protegendo mais de 110 milhões de hectares de terras demarcadas.',
        colonialNarrative:
          'A fundação do Forte do Presépio em Belém (1616) garantiu a soberania luso-brasileira na foz do Amazonas. Entre 1879 e 1912, o monopólio do látex ergueu joias como o Teatro Amazonas e o Mercado Ver-o-Peso.',
        afroLegacy:
          'Africanos escravizados levados ao Grão-Pará fundaram comunidades quilombolas livres ao longo dos rios Trombetas, Erepecuru e Tocantins.',
        modernSummary:
          'Hoje a região une populações ribeirinhas, povos originários e grandes metrópoles como Manaus (2,2 milhões de habitantes) e Belém (sede da COP30).'
      },
      culture: {
        headline: 'O Duelo do Boi-Bumbá em Parintins, o Círio de Nazaré & os Ritmos do Carimbó',
        overview:
          'A cultura nortista pulsa entre o sagrado e a festa: a procissão fluvial e terrestre do Círio de Nazaré em Belém, o duelo apoteótico entre Caprichoso e Garantido na Ilha de Parintins, e os giros do Carimbó e do Tecno-Brega.',
      },
      gastronomy: {
        headline: 'A Cozinha Mais Autêntica do Brasil: Tucupi, Jambu, Tacacá & Açaí Nativo',
        overview:
          'Eleita Patrimônio Cultural, a gastronomia do Norte preserva técnicas indígenas milenares: o caldo dourado do tucupi extraído da mandioca brava, a folha de jambu que adormece os lábios, o pato no tucupi, o pirarucu manejado e o açaí espesso consumido com peixe frito.',
        philosophy:
          'A floresta em pé como despensa sagrada: sabedoria ancestral que transforma a mandioca brava em alta gastronomia.'
      },
      economy: {
        headline: 'Polo Industrial de Manaus, Minério de Carajás & Bioeconomia da Floresta',
        overview:
          'A economia articula a indústria de alta tecnologia e duas rodas da Zona Franca de Manaus com a província mineral de Carajás no Pará e a bioeconomia sustentável de açaí, castanha-do-brasil e óleos amazônicos.',
        cleanEnergyFocus:
          'Grandes usinas hidrelétricas como Belo Monte e Tucuruí, além da expansão de sistemas solares para comunidades ribeirinhas isoladas.'
      },
      sports: {
        headline: 'O Clássico Re-Pa em Belém, Travessias de Canoagem & Berço do Jiu-Jitsu e MMA',
        overview:
          'O duelo entre Remo e Paysandu (Re-Pa) é o clássico mais disputado do futebol mundial com mais de 770 jogos, enquanto Manaus é um dos maiores celeiros mundiais de campeões de Jiu-Jitsu Brasileiro e MMA.',
        footballRole:
          'A Arena da Amazônia em Manaus e o novo Mangueirão em Belém vibram com a paixão das torcidas nortistas.'
      }
    },
    northeast: {
      tagline: 'Alma Afro-Brasileira, Barroco Colonial, Dunas Brancas & Costa do Sol',
      climateOverview: 'Tropical úmido no litoral (25°C–30°C) e semiárido no Sertão interiorano',
      geography: {
        headline: '3.300 km de Litoral Tropical, o Sertão da Caatinga & a Chapada Diamantina',
        overview:
          'Composta por 9 estados, a Região Nordeste exibe paisagens deslumbrantes: das lagoas entre dunas dos Lençóis Maranhenses e o arquipélago vulcânico de Fernando de Noronha até a Caatinga (único bioma 100% brasileiro) e os cânions da Chapada Diamantina.',
        terrainSummary:
          'Divide-se em quatro sub-regiões clássicas: Zona da Mata costeira, Agreste de transição, Sertão semiárido e Meio-Norte maranhense.',
        riverSystemSummary:
          'O Rio São Francisco ("Velho Chico") é o grande rio da integração nacional, levando vida, irrigação e energia por 2.830 km até o Atlântico.',
        environmentalChallenges: [
          'Risco de desertificação e secas prolongadas em áreas vulneráveis do semiárido',
          'Erosão costeira e conservação dos recifes de corais e manguezais',
          'Preservação dos santuários marinhos de Abrolhos e Fernando de Noronha'
        ]
      },
      history: {
        headline: 'Berço Histórico do Brasil, Salvador da Bahia, Olinda & o Quilombo dos Palmares',
        overview:
          'Foi no litoral da Bahia que os portugueses desembarcaram em 1500. Salvador foi a primeira capital do Brasil até 1763, enquanto Pernambuco protagonizou o ciclo do açúcar, o período holandês de Maurício de Nassau (1630–1654) e a epopeia de Zumbi dos Palmares.',
        indigenousContinuity:
          'Povos Tupi como os Potiguara, Tupinambá e Pataxó moldaram a cultura costeira, enquanto os Fulni-ô e Xukuru preservam seus rituais e línguas no interior.',
        colonialNarrative:
          'Os engenhos de açúcar dos séculos XVI e XVII ergueram o esplendor barroco de Salvador, Olinda e São Luís (famosa por seus azulejos coloniais).',
        afroLegacy:
          'A Bahia é celebrada como a "Roma Negra das Américas": berço do Candomblé, da Capoeira, do Samba de Roda do Recôncavo e dos blocos afro como Ilê Aiyê e Olodum.',
        modernSummary:
          'Com mais de 57 milhões de habitantes, o Nordeste é o coração criativo da literatura, da música, do cinema e da transição energética do Brasil.'
      },
      culture: {
        headline: 'Carnaval de Salvador e Olinda, São João Gigante, Bumba Meu Boi & Forró',
        overview:
          'Do frevo eletrizante nas ladeiras de Olinda e dos trios elétricos na Bahia até os arraiais de São João em Campina Grande e Caruaru ao som da sanfona de Luiz Gonzaga.',
      },
      gastronomy: {
        headline: 'Azeite de Dendê, Leite de Coco, Acarajé, Moqueca Baiana & Carne de Sol',
        overview:
          'No litoral reina o dendê africano e o leite de coco nos tabuleiros das Baianas de Acarajé e nas moquecas fumegantes; no Sertão brilham a Carne de Sol na nata, o Baião de Dois, o queijo coalho assado e o Bolo de Rolo pernambucano.',
        philosophy:
          'Alquimia sagrada entre os temperos da África Ocidental, a mandioca indígena e a doçaria conventual portuguesa.'
      },
      economy: {
        headline: 'Potência Mundial em Energia Eólica e Solar, Porto Digital do Recife & Fruticultura',
        overview:
          'O Nordeste gera mais de 85% da energia eólica do Brasil graças aos ventos alísios constantes, abriga no Recife o Porto Digital (maior parque tecnológico urbano do país) e exporta frutas tropicais do Vale do São Francisco.',
        cleanEnergyFocus:
          'Liderança em hidrogênio verde (Complexo do Pecém no Ceará) e parques eólicos e solares no RN, Bahia e Piauí.'
      },
      sports: {
        headline: 'Rodas de Capoeira, Meca Mundial do Kitesurf no Ceará & Campeões do Surfe',
        overview:
          'O litoral do Ceará e do Rio Grande do Norte atrai kitesurfistas do mundo inteiro, além de ser o berço do campeão olímpico e mundial de surfe Ítalo Ferreira e da tricampeã mundial de futebol Marta.',
        footballRole:
          'A Copa do Nordeste reúne multidões apaixonadas nos estádios Fonte Nova (Salvador), Castelão (Fortaleza) e Arena Pernambuco.'
      }
    },
    'center-west': {
      tagline: 'Savana do Cerrado, Santuário do Pantanal & Modernismo de Brasília',
      climateOverview: 'Tropical estacional (Aw) com verão chuvoso (out–mar) e inverno seco ensolarado (abr–set)',
      geography: {
        headline: 'O Santuário do Pantanal, o Berço das Águas do Cerrado & as Águas de Bonito',
        overview:
          'O Centro-Oeste guarda dois tesouros naturais: o Pantanal (a maior planície alagável do planeta, reino das onças-pintadas e tuiuiús) e o Cerrado (a savana mais biodiversa da Terra, cujas chapadas alimentam as grandes bacias hidrográficas sul-americanas).',
        terrainSummary:
          'Planaltos cristalinos e chapadas de arenito milenares (Chapada dos Veadeiros e Chapada dos Guimarães) que descem em direção à vasta depressão pantaneira.',
        riverSystemSummary:
          'Conhecido como a "Caixa d’Água do Brasil": suas nascentes abastecem as bacias Amazônica (Xingu e Araguaia), Platina (Paraguai e Paraná) e do São Francisco.',
        environmentalChallenges: [
          'Conservação do Cerrado frente à expansão da fronteira agrícola',
          'Prevenção de incêndios florestais no Pantanal durante ciclos de seca severa',
          'Proteção das nascentes e rios calcários cristalinos da Serra da Bodoquena (Bonito)'
        ]
      },
      history: {
        headline: 'Das Minas de Ouro Coloniais e do Parque do Xingu à Construção de Brasília (1960)',
        overview:
          'Antigo território de povos originários e de cidades coloniais do ouro como Pirenópolis e Cidade de Goiás, a região ganhou projeção mundial em 21 de abril de 1960 com a inauguração de Brasília, obra-prima modernista de Lúcio Costa e Oscar Niemeyer.',
        indigenousContinuity:
          'O Território Indígena do Xingu protege 16 etnias que mantêm vivos rituais milenares como o Kuarup e a arte plumária e cerâmica.',
        colonialNarrative:
          'As entradas e bandeiras do século XVIII fundaram Cuiabá, Vila Bela da Santíssima Trindade e Goiás Velho em torno das jazidas de ouro.',
        afroLegacy:
          'O Sítio Histórico Kalunga, nas serras da Chapada dos Veadeiros (GO), é o maior território quilombola demarcado do Brasil.',
        modernSummary:
          'Em seis décadas, o Centro-Oeste tornou-se o centro decisório da República em Brasília e o coração produtivo do agronegócio brasileiro.'
      },
      culture: {
        headline: 'Comitivas Pantaneiras, Capital do Sertanejo & Arte Modernista de Niemeyer e Bulcão',
        overview:
          'A cultura celebra a viola caipira, as comitivas de peões pantaneiros conduzindo boiadas pelas águas, a poesia de Cora Coralina e os monumentos esculturais de Brasília.',
      },
      gastronomy: {
        headline: 'Arroz com Pequi do Cerrado, Pintado na Brasa, Empadão Goiano & Tereré',
        overview:
          'O sabor marcante do Pequi (fruto dourado do Cerrado), os peixes nobres do Pantanal (Pintado, Pacu e Piraputanga) e a roda de Tereré gelado com erva-mate e limão definem a mesa regional.',
        philosophy:
          'Cozinha farta das fazendas e rios, nascida das tropas e comitivas do coração do Brasil.'
      },
      economy: {
        headline: 'Celeiro Agrícola Global, Administração Federal em Brasília & Bioenergia',
        overview:
          'Liderado por Mato Grosso, Goiás e Mato Grosso do Sul, o Centro-Oeste é líder mundial na produção tecnológica de soja, milho, algodão e proteína animal, enquanto Brasília ostenta a maior renda per capita do país.',
        cleanEnergyFocus:
          'Polo continental de biocombustíveis (etanol de cana e de milho, biodiesel) e geração solar fotovoltaica.'
      },
      sports: {
        headline: 'Ecoturismo de Classe Mundial em Bonito, Travessias nas Chapadas & Arena Mané Garrincha',
        overview:
          'Mergulhos de flutuação nos rios cristalinos de Bonito, trilhas pelas cachoeiras da Chapada dos Veadeiros, safáris fotográficos no Pantanal e grandes jogos no Estádio Mané Garrincha.',
        footballRole:
          'Goiás, Vila Nova, Atlético Goianiense e Cuiabá representam a força do futebol regional.'
      }
    },
    southeast: {
      tagline: 'Metrópoles Rio & São Paulo, Barroco Mineiro & Mata Atlântica',
      climateOverview: 'Tropical atlântico no litoral e tropical de altitude ameno nas serras de Minas e São Paulo',
      geography: {
        headline: 'Morros Cariocas à Beira-Mar, Serra da Mantiqueira & Serras de Minas Gerais',
        overview:
          'O Sudeste reúne a geografia costeira mais icônica do planeta—onde o Pão de Açúcar e o Corcovado emergem entre praias e a Floresta da Tijuca—com os mares de morros da Serra da Mantiqueira, a Serra da Canastra e o Pico da Bandeira (2.891m).',
        terrainSummary:
          'Domínio dos Mares de Morros cristalinos, escarpas abruptas da Serra do Mar e planaltos de altitude da Mantiqueira e do Espinhaço.',
        riverSystemSummary:
          'Cortado pelos rios Paraíba do Sul, Tietê, Grande, Paraná, Doce e pela nascente histórica do Rio São Francisco na Serra da Canastra.',
        environmentalChallenges: [
          'Restauração dos corredores ecológicos da Mata Atlântica',
          'Segurança hídrica e mobilidade sustentável nas megacidades de São Paulo e Rio',
          'Recuperação ambiental de bacias mineradoras em Minas Gerais'
        ]
      },
      history: {
        headline: 'O Ciclo do Ouro em Ouro Preto, a Corte Imperial no Rio & a Metrópole do Café',
        overview:
          'No século XVIII, o ouro e os diamantes de Minas Gerais financiaram o apogeu do Barroco com Aleijadinho e inspiraram a Inconfidência Mineira. No século XIX, o Rio tornou-se capital do Império e o ciclo do café impulsionou a industrialização e a diversidade imigratória de São Paulo.',
        indigenousContinuity:
          'Aldeias Guarani Mbya, Tupiniquim, Pataxó e Krenak preservam sua cultura no litoral e nos vales do Sudeste.',
        colonialNarrative:
          'Das vilas barrocas de Ouro Preto, Diamantina, Tiradentes e Paraty aos palácios imperiais de Petrópolis e do Rio de Janeiro.',
        afroLegacy:
          'Na Pequena África e no Cais do Valongo (Rio de Janeiro) germinaram o Samba urbano, as Escolas de Samba e os ranchos carnavalescos.',
        modernSummary:
          'Com mais de 85 milhões de habitantes, o Sudeste é a região mais populosa, urbana e cosmopolita da América do Sul.'
      },
      culture: {
        headline: 'Samba & Bossa Nova, Desfiles da Sapucaí, MASP, Inhotim & Barroco de Aleijadinho',
        overview:
          'Do maior espetáculo da Terra na Marquês de Sapucaí e dos acordes da Bossa Nova em Ipanema até a Semana de Arte Moderna de 1922 em São Paulo e o museu a céu aberto de Inhotim em Minas.',
      },
      gastronomy: {
        headline: 'Feijoada Carioca, Pão de Queijo & Queijo Canastra Mineiro e Alta Gastronomia Paulistana',
        overview:
          'A mesa sudestina celebra a Feijoada completa de sábado, a hospitalidade do fogão a lenha mineiro (Pão de Queijo, Feijão Tropeiro, Doce de Leite), a Moqueca Capixaba na panela de barro e a cena gastronômica mundial de São Paulo.',
        philosophy:
          'O encontro entre o aconchego das fazendas históricas de Minas, a boemia carioca e o cosmopolitismo paulistano.'
      },
      economy: {
        headline: 'Centro Financeiro da Faria Lima, Aviação Embraer, Café Especial & Energia',
        overview:
          'Responsável por mais de 53% do PIB nacional, o Sudeste concentra a bolsa de valores B3 na Avenida Faria Lima (SP), a indústria aeroespacial da Embraer em São José dos Campos, os cafés especiais de Minas e os portos de Santos e Vitória.',
        cleanEnergyFocus:
          'Liderança em etanol avançado de cana-de-açúcar, geração solar distribuída em Minas Gerais e centros de pesquisa energética.'
      },
      sports: {
        headline: 'Templo do Maracanã, Fórmula 1 em Interlagos, Jiu-Jitsu & Skate Olímpico',
        overview:
          'Palco de duas finais de Copa do Mundo e das Olimpíadas Rio 2016 no Maracanã, do Grande Prêmio de Fórmula 1 em Interlagos (eternizado por Ayrton Senna) e de alguns dos clubes mais vitoriosos do planeta.',
        footballRole:
          'Berço de Pelé (Santos FC), Zico (Flamengo) e Ronaldo, com clássicos históricos em São Paulo, Rio e Belo Horizonte.'
      }
    },
    south: {
      tagline: 'Cataratas do Iguaçu, Matas de Araucárias, Vinhedos da Serra & Pampa Gaúcho',
      climateOverview: 'Subtropical úmido (Cfa e Cfb) com as quatro estações bem definidas e invernos frios nas serras',
      geography: {
        headline: 'As 275 Quedas de Iguaçu, Cânions Gigantes de Aparados da Serra & os Pampas',
        overview:
          'Localizada abaixo do Trópico de Capricórnio, a Região Sul (Paraná, Santa Catarina e Rio Grande do Sul) encanta pelas monumentais Cataratas do Iguaçu, pelos bosques de Araucárias, pelos cânions verticais de Itaimbezinho e Fortaleza e pelas coxilhas do Pampa Gaúcho.',
        terrainSummary:
          'Planaltos basálticos, serras escarpadas como a Serra do Rio do Rastro, cânions profundos e as campinas suaves da Campanha Gaúcha.',
        riverSystemSummary:
          'Integrada pelas bacias dos rios Paraná, Iguaçu e Uruguai, além do complexo lagunar da Lagoa dos Patos.',
        environmentalChallenges: [
          'Preservação dos remanescentes da Mata das Araucárias',
          'Adaptação climática e prevenção de cheias nos vales do Rio Grande do Sul',
          'Conservação da biodiversidade nativa dos campos do Pampa'
        ]
      },
      history: {
        headline: 'As Missões Jesuítico-Guarani, a Revolução Farroupilha & a Herança Imigrante',
        overview:
          'Das históricas reduções jesuítico-guarani dos Sete Povos das Missões no século XVII até a Revolução Farroupilha (1835–1845) e as colônias de imigrantes italianos, alemães, açorianos, poloneses e ucranianos que moldaram a paisagem cultural sulista.',
        indigenousContinuity:
          'Os povos Guarani, Kaingang e Xokleng são os guardiões ancestrais das matas de araucárias e do ritual da erva-mate.',
        colonialNarrative:
          'As disputas de fronteira na bacia do Prata forjaram a identidade do Gaúcho campeiro e as fortalezas açorianas da Ilha de Santa Catarina.',
        afroLegacy:
          'Os heroicos Lanceiros Negros na história gaúcha e a forte tradição afro-brasileira de Porto Alegre, Pelotas e Rio Grande.',
        modernSummary:
          'O Sul destaca-se pelos elevados indicadores de qualidade de vida, pelo urbanismo ecológico modelo de Curitiba e pela inovação de Florianópolis.'
      },
      culture: {
        headline: 'Roda de Chimarrão, Tradição Gaúcha, Vindima na Serra & Festas Germânicas',
        overview:
          'A hospitalidade sulista começa na cuia de Chimarrão compartilhada entre amigos, passa pela gaita gaúcha nos CTGs, pelas festas da colheita da uva (Vindima) na Serra Gaúcha e pela Oktoberfest em Blumenau.',
      },
      gastronomy: {
        headline: 'Churrasco Fogo de Chão, Vinhos e Espumantes da Serra Gaúcha & Barreado',
        overview:
          'Berço do verdadeiro Churrasco Gaúcho assado lentamente no fogo de chão, dos espumantes premiados com Denominação de Origem do Vale dos Vinhedos, do Barreado do litoral paranaense e das ostras frescas de Florianópolis.',
        philosophy:
          'Respeito absoluto ao corte nobre na brasa, ao sal grosso e ao convívio ao redor do fogo e da mesa colonial.'
      },
      economy: {
        headline: 'Usina de Itaipu, "Ilha do Silício" em Florianópolis & Cooperativismo Agroindustrial',
        overview:
          'Em Foz do Iguaçu opera a gigante hidrelétrica binacional de Itaipu; Florianópolis lidera em densidade de startups de tecnologia, Curitiba é polo automotivo e o interior sulista possui as maiores cooperativas agroindustriais e vinícolas do país.',
        cleanEnergyFocus:
          'Itaipu Binacional é referência mundial em geração hidrelétrica limpa, somada aos complexos eólicos do litoral sul gaúcho.'
      },
      sports: {
        headline: 'A Paixão do Clássico Gre-Nal, Surfe em Santa Catarina & Skate Bowl em Floripa',
        overview:
          'O clássico Gre-Nal (Grêmio vs. Internacional) divide o Rio Grande do Sul em azul e vermelho, enquanto as praias de Florianópolis, Guarda do Embaú e Praia do Rosa formam campeões mundiais de surfe e skate.',
        footballRole:
          'Terra natal de Ronaldinho Gaúcho e palco de conquistas continentais de Grêmio, Internacional e Athletico Paranaense.'
      }
    }
  }
};

const LOCALIZED_STATS_AND_LANDMARKS: Record<
  'nl' | 'pt',
  Record<
    RegionId,
    {
      keyStats: Array<{ label: string; value: string }>;
      economicStats: Array<{ label: string; value: string }>;
      landmarks: Record<string, { description: string; highlightFact: string }>;
    }
  >
> = {
  nl: {
    north: {
      keyStats: [
        { label: 'Aandeel Grondgebied', value: '45,2% (3,85M km²)' },
        { label: 'Zoetwatervoorraad', value: '20% van Wereldwijde Rivierafvoer' },
        { label: 'Hoogste Berg van Brazilië', value: 'Pico da Neblina (2.995 m)' },
        { label: 'Boomsoorten in Amazone', value: '16.000+ (390 Miljard Bomen)' }
      ],
      economicStats: [
        { label: 'Industriepool Manaus Omzet', value: 'R$ 175+ Miljard / Jaar' },
        { label: 'Wereldmarkt Açaí', value: '94% (Geleid door Pará)' },
        { label: 'IJzererts Zuiverheid Carajás', value: '66,7% Fe (Wereldtop)' },
        { label: 'COP30 Klimaatstad', value: 'Belém do Pará' }
      ],
      landmarks: {
        'lm-teatro-amazonas': {
          description:
            'Geopend in 1896 op het hoogtepunt van de Rubberboom in Manaus. Dit Belle Époque operagebouw heeft een koepel met 36.000 geglazuurde keramische tegels in de kleuren van de Braziliaanse vlag en trappen van Carrara-marmer.',
          highlightFact:
            'Schepen brachten Italiaans marmer, Schots gietijzer en Parijse kroonluchters 1.500 km stroomopwaarts vanaf de Atlantische Oceaan.'
        },
        'lm-encontro-das-aguas': {
          description:
            'Een spectaculair natuurverschijnsel waarbij het donkere, zure water van de Rio Negro ruim zes kilometer lang zij aan zij stroomt met het zandkleurige water van de Rio Solimões zonder te mengen.',
          highlightFact:
            'De twee rivieren mengen niet direct door verschillen in stroomsnelheid (2 km/u vs 6 km/u), temperatuur (28°C vs 22°C) en dichtheid.'
        },
        'lm-monte-roraima': {
          description:
            'Een oeroude precambrische zandstenen tafelberg (tepui) die 2.810 meter hoog door de wolken rijst op het drielandenpunt van Brazilië, Venezuela en Guyana, heilig voor de Pemón en Macuxi.',
          highlightFact:
            'Het geïsoleerde topplateau van 31 km² herbergt endemische vleesetende planten en kwartskristalvalleien van meer dan 1,8 miljard jaar oud.'
        },
        'lm-alter-do-chao': {
          description:
            'Bekend als de "Caraïben van de Amazone": tijdens het droge seizoen verschijnen kilometers spierwitte kwartszandstranden in het heldere blauwgroene water van de Tapajós-rivier.',
          highlightFact:
            'Thuisbasis van het eeuwenoude Sairé-festival waarin inheemse Borari-rituelen en de dans van de roze rivierdolfijnen samenkomen.'
        },
        'lm-parque-nacional-jau': {
          description:
            'Met 2,3 miljoen hectare aan intacte zwartwaterrivieren en overstroomde igapó-bossen vormt Nationaal Park Jaú de kern van het Centraal-Amazone UNESCO Werelderfgoed.',
          highlightFact:
            'Beschermt cruciale leefgebieden voor de Amazone-lamantijn, zwarte kaaiman, pirarucu en roze rivierdolfijn.'
        },
        'lm-fortaleza-sao-jose': {
          description:
            'Gebouwd tussen 1764 en 1782 in stervormige Vauban-geometrie pal op de evenaar om de noordelijke monding van de Amazone te beschermen.',
          highlightFact:
            'Gelegen vlak bij Marco Zero, waar bezoekers tegelijkertijd op het noordelijk en zuidelijk halfrond kunnen staan.'
        }
      }
    },
    northeast: {
      keyStats: [
        { label: 'Atlantische Kustlijn', value: '3.338 km (Langste van Brazilië)' },
        { label: 'Aantal Deelstaten', value: '9 Federale Staten' },
        { label: 'Uniek Braziliaans Bioom', value: 'Caatinga (844.453 km²)' },
        { label: 'Zonuren per Jaar', value: '3.000+ Uur / Jaar' }
      ],
      economicStats: [
        { label: 'Aandeel Windenergie Brazilië', value: '85%+ Opgewekt in Nordeste' },
        { label: 'Porto Digital Tech-Hub', value: '18.000+ IT-specialisten (Recife)' },
        { label: 'Fruitexport São Francisco', value: '95% van Braziliaanse Druiven & Mango’s' },
        { label: 'Groene Waterstof Investering', value: 'USD 30+ Miljard (Pecém, CE)' }
      ],
      landmarks: {
        'lm-pelourinho-salvador': {
          description:
            'Gesticht in 1549 als eerste hoofdstad van Brazilië. De historische bovenstad van Salvador schittert met pastelkleurige herenhuizen, de met bladgoud beklede São Francisco-kerk en de trommels van Olodum.',
          highlightFact:
            'De 72 meter hoge Art Deco Elevador Lacerda verbindt de koloniale bovenstad (Cidade Alta) in 30 seconden met de havenmarkt (Cidade Baixa).'
        },
        'lm-lencois-maranhenses': {
          description:
            'Sinds 2024 UNESCO Werelderfgoed: dit surrealistische kustduinlandschap vangt jaarlijks 1.600 mm regen op in duizenden kristalheldere turquoise zoetwaterlagunes tussen 40 meter hoge witte duinen.',
          highlightFact:
            'Hoewel het op een woestijn lijkt, valt hier drie keer zoveel regen als in de Sahara, waardoor lagunes als Lagoa Azul en Lagoa Bonita ontstaan.'
        },
        'lm-fernando-de-noronha': {
          description:
            'Een vulkanische eilandengroep op 350 km voor de kust, beroemd om Baía do Sancho—meermaals verkozen tot mooiste strand ter wereld—en beschermde baaien vol spinnerdolfijnen en zeeschildpadden.',
          highlightFact:
            'Strenge bezoekersquota beschermen 70% van de archipel als ongerept Nationaal Marien Park.'
        },
        'lm-centro-historico-olinda': {
          description:
            'Gelegen op groene heuvels boven Recife en de Atlantische Oceaan combineert Olinda 16e-eeuwse kloosters, tropische tuinen, kunstenaarsateliers en het uitbundige Frevo-straatcarnaval.',
          highlightFact:
            'Wereldberoemd om de Bonecos Gigantes de Olinda—4 meter hoge reuzenpoppen die door de steile kasseienstraten dansen.'
        },
        'lm-chapada-diamantina': {
          description:
            'Een spectaculair hoogland van 1.520 km² in het hart van Bahia met tafelbergen, de 340 meter hoge Cachoeira da Fumaça en ondergrondse grotten zoals Poço Encantado.',
          highlightFact:
            'In de 19e eeuw het decor van een diamantkoorts rond het monumentale bergstadje Lençóis.'
        },
        'lm-ponta-do-seixas': {
          description:
            'Op 34°47\'35" WL markeert Ponta do Seixas het meest oostelijke punt van het Amerikaanse continent—"Waar de Zon het Eerst Opkomt"—bekroond door de vuurtoren van Cabo Branco.',
          highlightFact:
            'Gelegen op slechts 2.800 km over de Zuid-Atlantische Oceaan vanaf de westkust van Afrika.'
        }
      }
    },
    'center-west': {
      keyStats: [
        { label: 'Cerrado Biodiversiteit', value: '11.000+ Plantensoorten (4.400 Endemisch)' },
        { label: 'Oppervlakte Pantanal', value: '150.000+ km² Wetland' },
        { label: 'Jaguardichtheid Pantanal', value: 'Hoogste van heel Amerika' },
        { label: 'Watertoren van Brazilië', value: 'Voedt 8 van de 12 Rivierbekkens' }
      ],
      economicStats: [
        { label: 'Graanproductie Mato Grosso', value: '100+ Miljoen Ton / Jaar' },
        { label: 'BBP per Inwoner Brasília', value: 'Hoogste van Brazilië (R$ 87.000+)' },
        { label: 'Katoenproductie Aandeel', value: '70%+ Geproduceerd in MT' },
        { label: 'Ecotoerisme Pantanal & Bonito', value: 'USD 150M+ per Jaar' }
      ],
      landmarks: {
        'lm-praca-tres-poderes': {
          description:
            'Het monumentale staatsplein ontworpen door Lúcio Costa en Oscar Niemeyer waar de uitvoerende (Palácio do Planalto), rechterlijke (Supremo Tribunal) en wetgevende macht (Congresso Nacional) samenkomen.',
          highlightFact:
            'De dubbele torens en de twee schalen (bol voor de Kamer, hol voor de Senaat) symboliseren democratische openheid en balans.'
        },
        'lm-catedral-brasilia': {
          description:
            'Een kroon van 16 gebogen parabolische betonnen kolommen van elk 90 ton die naar de hemel reiken, met glas-in-loodramen van Marianne Peretti in kobaltblauw, smaragdgroen en wit.',
          highlightFact:
            'Bezoekers lopen door een donkere ondergrondse galerij voordat ze het met zonlicht overgoten middenschip betreden.'
        },
        'lm-pantanal-matogrossense': {
          description:
            'Het grootste zoetwater-wetland ter wereld (ruim 150.000 km²), met de hoogste concentratie jaguars (onça-pintada), capibara’s, reuzenotters en kaaimannen van Amerika.',
          highlightFact:
            'Tijdens het regenseizoen staat ruim 80% van het landschap onder water en verandert het in een labyrint van drijvende eilanden.'
        },
        'lm-gruta-lago-azul': {
          description:
            'Een kolossale kalksteengrot met stalactieten die bijna 100 meter afdaalt naar een ondergronds meer waarvan het water elektrisch saffierblauw oplicht in het ochtendzonlicht.',
          highlightFact:
            'Op de bodem van het meer vonden paleontologen fossielen van prehistorische reuzenluiaards en sabeltandtijgers.'
        },
        'lm-chapada-veadeiros': {
          description:
            'Oeroude 1,8 miljard jaar oude kwartskristal-plateaus in de hoge Cerrado, beroemd om spectaculaire watervallen (Saltos do Rio Preto), diepe canyons en natuurlijke rotsbaden.',
          highlightFact:
            'Door de enorme concentratie bergkristal in de bodem schittert het plateau zelfs op satellietbeelden.'
        },
        'lm-chapada-guimaraes': {
          description:
            'Rode zandsteenkliffen, panoramische uitzichtpunten en de 86 meter hoge vrij vallende waterval Cachoeira Véu de Noiva midden in het galerijwoud.',
          highlightFact:
            'Markeert het exacte geodetische middelpunt van Zuid-Amerika, precies halverwege de Atlantische en Stille Oceaan.'
        }
      }
    },
    southeast: {
      keyStats: [
        { label: 'Aandeel Bevolking', value: '39,4% (84,8M Inwoners — Dichtstbevolkt)' },
        { label: 'Hoogste Punt in Regio', value: 'Pico da Bandeira (2.892 m)' },
        { label: 'Metropool São Paulo', value: '22+ Miljoen (Grootste van Amerika)' },
        { label: 'Atlantisch Woud Biodiversiteit', value: '20.000+ Plantensoorten (40% Endemisch)' }
      ],
      economicStats: [
        { label: 'Aandeel Braziliaans BBP', value: '49,8% (Motor van de Economie)' },
        { label: 'Haven van Santos', value: 'Grootste Containerhaven Latijns-Amerika' },
        { label: 'Petrobras Olieproductie', value: '3,4+ Miljoen Vaten / Dag' },
        { label: 'B3 Beurs São Paulo', value: 'USD 800+ Miljard Marktwaarde' }
      ],
      landmarks: {
        'lm-cristo-redentor': {
          description:
            'Gelegen op 710 meter hoogte boven de Guanabara-baai op de top van de Corcovado. Dit 38 meter hoge Art Deco-beeld van speksteen-mozaïek werd in 1931 ontworpen door Heitor da Silva Costa en Paul Landowski en is een van de Nieuwe Zeven Wereldwonderen.',
          highlightFact:
            'Bedekt met miljoenen kleine driehoekige speksteentegeltjes, waarvan vele tijdens de bouw door lokale bewoners aan de achterkant zijn beschreven met gebeden en namen.'
        },
        'lm-pao-de-acucar': {
          description:
            'Een monolithische graniet- en kwartspiek van 396 meter die direct oprijst uit de monding van de Guanabara-baai, sinds 1912 verbonden door de iconische kabelbaan (Bondinho).',
          highlightFact:
            'De Bondinho do Pão de Açúcar was de derde passagierskabelbaan ter wereld en vervoerde al meer dan 50 miljoen bezoekers.'
        },
        'lm-masp-paulista': {
          description:
            'Ontworpen door de Italiaans-Braziliaanse architecte Lina Bo Bardi in 1968: een brutalistisch meesterwerk dat zweeft aan vier vuurrode betonnen pijlers boven een open stadsplein van 74 meter aan Avenida Paulista.',
          highlightFact:
            'Schilderijen van Rembrandt, Van Gogh en Portinari zweven in de zaal op glazen ezels ontworpen door Bo Bardi.'
        },
        'lm-maracana': {
          description:
            'De heilige kathedraal van het wereldvoetbal. Gebouwd voor het WK van 1950 en decor van de WK-finale van 2014 en de Olympische Spelen van 2016, waar Pelé in 1969 zijn 1.000ste doelpunt scoorde.',
          highlightFact:
            'Tijdens de WK-wedstrijd Brazilië–Uruguay in 1950 zaten er bijna 200.000 toeschouwers op de tribunes—het hoogste bezoekersaantal ooit.'
        },
        'lm-autodromo-interlagos': {
          description:
            'Het historische tempelcircuit van de Braziliaanse autosport tussen twee stuwmeren in São Paulo, thuisbasis van de Formule 1 Grand Prix van Brazilië en de legendarische thuiszeges van Ayrton Senna in 1991 en 1993.',
          highlightFact:
            'Beroemd om de vloeiende Senna-S bocht en de hoogteverschillen die garant staan voor spectaculaire races.'
        },
        'lm-ouro-preto': {
          description:
            'In 1980 uitgeroepen tot het allereerste UNESCO Werelderfgoed van Brazilië: Ouro Preto was het hart van de 18e-eeuwse goudkoorts en telt talloze barokkerken met speksteensculpturen van Aleijadinho.',
          highlightFact:
            'Geboorteplaats van de onafhankelijkheidsbeweging Inconfidência Mineira (1789) onder leiding van vrijheidsheld Tiradentes.'
        },
        'lm-instituto-inhotim': {
          description:
            'Het grootste openluchtmuseum voor hedendaagse kunst ter wereld, ingebed in 140 hectare botanische tuinen in Minas Gerais met 23 kunstpaviljoens en meer dan 4.500 zeldzame plantensoorten.',
          highlightFact:
            'Bezit de grootste collectie palmboomsoorten ter wereld (ruim 1.400 variëteiten) rond monumentale kunstinstallaties.'
        }
      }
    },
    south: {
      keyStats: [
        { label: 'Wintervorst & Sneeuw', value: 'Jaarlijks in Serra Gaúcha & Catarinense' },
        { label: 'Schone Waterkracht', value: 'Itaipu-dam (14.000 MW — Wereldtop)' },
        { label: 'Grootste Kustlagune', value: 'Lagoa dos Patos (10.144 km²)' },
        { label: 'Levensstandaard (HDI)', value: 'Hoogste Regionale Score in Brazilië' }
      ],
      economicStats: [
        { label: 'Aandeel Braziliaans BBP', value: '16,8% (Tweede Economische Regio)' },
        { label: 'Tech Startups Florianópolis', value: 'Hoogste Dichtheid per Inwoner' },
        { label: 'Itaipu Groene Stroom', value: 'Ruim 3 Miljard MWh Geproduceerd' },
        { label: 'Agro-coöperaties Export', value: '60%+ van Braziliaanse Pluimvee & Varkens' }
      ],
      landmarks: {
        'lm-cataratas-iguacu': {
          description:
            'Het grootste en meest majestueuze watervalsysteem op aarde, bestaande uit 275 donderende watervallen over een breedte van 2,7 kilometer op de grens van Brazilië en Argentinië, bekroond door de Duivelskeel (Garganta do Diabo).',
          highlightFact:
            'Toen First Lady Eleanor Roosevelt de Iguaçu-watervallen zag, riep ze beroemd uit: "Arme Niagara!"'
        },
        'lm-jardim-botanico-curitiba': {
          description:
            'Het icoon van de groene modelstad Curitiba, met strakke Franse geometrische bloementuinen en een Art Nouveau glazen kas met drie koepels vol Atlantische en tropische flora.',
          highlightFact:
            'Bevat de Tuin der Zintuigen, waar bezoekers inheemse planten met gesloten ogen ervaren via geur en aanraking.'
        },
        'lm-serra-rio-do-rastro': {
          description:
            'Een adembenemende bergpas (SC-390) met 284 haarspeldbochten die over 1.400 meter afdaalt langs steile basaltkliffen en nevelwouden van het hoogland naar de kustvallei.',
          highlightFact:
            '’s Nachts verlichten honderden lampen op zonne-energie de kronkelende bergweg als een lichtgevend lint tegen de bergwand.'
        },
        'lm-vale-dos-vinhedos': {
          description:
            'De groene wijnheuvels van de Serra Gaúcha, aangelegd door 19e-eeuwse Italiaanse immigranten uit Veneto en Trentino, beroemd om bekroonde mousserende wijnen (espumantes) en Merlot.',
          highlightFact:
            'De allereerste officiële herkomstbenaming (Denominação de Origem) voor kwaliteitswijnen in Brazilië.'
        },
        'lm-missoes-jesuiticas': {
          description:
            'De indrukwekkende okerkleurige zandsteenruïnes van de 18e-eeuwse Jezuïeten- en Guaraní-missiestad São Miguel Arcanjo, symbool van inheemse kunst en gemeenschapszin.',
          highlightFact:
            'Guaraní-leider Sepé Tiaraju verdedigde dit gebied met de beroemde woorden: "Esta terra tem dono!" (Dit land heeft een eigenaar!).'
        },
        'lm-canion-itaimbezinho': {
          description:
            'Een kolossale kloof in het basaltplateau met loodrechte wanden van 720 meter diep over een lengte van 5,8 kilometer, omringd door watervallen en eeuwenoude Araucaria-dennen.',
          highlightFact:
            'De naam komt uit het Tupi en betekent "gesneden steen"; ochtendmist rolt hier als een wolkenwaterval over de rand.'
        }
      }
    }
  },
  pt: {
    north: {
      keyStats: [
        { label: 'Share do Território Nacional', value: '45,2% (3,85M km²)' },
        { label: 'Reserva de Água Doce', value: '20% da Descarga Fluvial Global' },
        { label: 'Ponto Mais Alto do Brasil', value: 'Pico da Neblina (2.995 m)' },
        { label: 'Espécies de Árvores', value: '16.000+ (390 Bilhões de Árvores)' }
      ],
      economicStats: [
        { label: 'Faturamento Polo de Manaus', value: 'R$ 175+ Bilhões / Ano' },
        { label: 'Produção Global de Açaí', value: '94% (Liderado pelo Pará)' },
        { label: 'Pureza do Minério de Carajás', value: '66,7% Fe (Referência Mundial)' },
        { label: 'Sede da COP30', value: 'Belém do Pará' }
      ],
      landmarks: {}
    },
    northeast: {
      keyStats: [
        { label: 'Litoral Atlântico', value: '3.338 km (O Maior do Brasil)' },
        { label: 'Estados na Região', value: '9 Estados Federais' },
        { label: 'Bioma 100% Brasileiro', value: 'Caatinga (844.453 km²)' },
        { label: 'Insolação Anual', value: '3.000+ Horas de Sol / Ano' }
      ],
      economicStats: [
        { label: 'Geração Eólica Nacional', value: '85%+ Gerada no Nordeste' },
        { label: 'Porto Digital (Recife)', value: '18.000+ Profissionais de TI' },
        { label: 'Exportação Vale São Francisco', value: '95% das Uvas e Mangas do País' },
        { label: 'Hidrogênio Verde (Pecém)', value: 'US$ 30+ Bilhões em Projetos' }
      ],
      landmarks: {}
    },
    'center-west': {
      keyStats: [
        { label: 'Biodiversidade do Cerrado', value: '11.000+ Espécies de Plantas' },
        { label: 'Área do Pantanal', value: '150.000+ km² de Planície Alagável' },
        { label: 'Densidade de Onças-Pintadas', value: 'A Maior das Américas' },
        { label: 'Berço das Águas', value: 'Alimenta 8 das 12 Bacias do Brasil' }
      ],
      economicStats: [
        { label: 'Safra de Grãos em MT', value: '100+ Milhões de Toneladas / Ano' },
        { label: 'PIB per Capita (Brasília)', value: 'O Maior do Brasil (R$ 87.000+)' },
        { label: 'Produção de Algodão', value: '70%+ Produzido no Mato Grosso' },
        { label: 'Ecoturismo Pantanal e Bonito', value: 'US$ 150M+ Anuais' }
      ],
      landmarks: {}
    },
    southeast: {
      keyStats: [
        { label: 'Participação Populacional', value: '39,4% (84,8M Habitantes)' },
        { label: 'Ponto Mais Alto da Região', value: 'Pico da Bandeira (2.892 m)' },
        { label: 'Grande São Paulo', value: '22+ Milhões (Maior das Américas)' },
        { label: 'Biodiversidade Mata Atlântica', value: '20.000+ Espécies de Plantas' }
      ],
      economicStats: [
        { label: 'Participação no PIB Nacional', value: '49,8% (Motor Econômico)' },
        { label: 'Porto de Santos', value: 'Maior Porto da América Latina' },
        { label: 'Produção Pré-Sal Petrobras', value: '3,4+ Milhões de Barris / Dia' },
        { label: 'Bolsa de Valores B3 (SP)', value: 'US$ 800+ Bilhões de Valor' }
      ],
      landmarks: {}
    },
    south: {
      keyStats: [
        { label: 'Geada e Neve nas Serras', value: 'Invernos Rigorosos na Serra' },
        { label: 'Potência Hidrelétrica', value: 'Usina de Itaipu (14.000 MW)' },
        { label: 'Maior Lagoa Costeira', value: 'Lagoa dos Patos (10.144 km²)' },
        { label: 'Índice de Desenvolvimento (IDH)', value: 'Maior Média Regional do País' }
      ],
      economicStats: [
        { label: 'Participação no PIB Nacional', value: '16,8% (2ª Maior Economia)' },
        { label: 'Densidade de Startups (Floripa)', value: 'A Maior per Capita do Brasil' },
        { label: 'Geração Histórica de Itaipu', value: 'Mais de 3 Bilhões de MWh' },
        { label: 'Exportação Proteína Animal', value: '60%+ da Produção Brasileira' }
      ],
      landmarks: {}
    }
  }
};

/**
 * High-resolution Wikimedia Commons culinary photos for all 20 signature dishes
 * plus Dutch translations for descriptions, ingredients, and cultural meaning.
 */
export const DISH_PHOTOS_AND_NL: Record<
  string,
  {
    imageUrl: string;
    originStateNl: string;
    descriptionNl: string;
    mainIngredientsNl: string[];
    culturalSignificanceNl: string;
  }
> = {
  // North (01)
  'Pato no Tucupi': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/BrunaBrandao_Pato_no_Tucupi_Belem_PA_%2826185651117%29.jpg/960px-BrunaBrandao_Pato_no_Tucupi_Belem_PA_%2826185651117%29.jpg',
    originStateNl: 'Pará (Belém)',
    descriptionNl:
      'Langzaam geroosterde eend die urenlang wordt gestoofd in goudgele tucupi (gefermenteerde wilde cassavebouillon) met jambu-kruid en geroosterde cassavemeel (farinha d’água).',
    mainIngredientsNl: [
      'Geroosterde eend',
      'Tucupi (gefermenteerd cassavesap)',
      'Jambu-bladeren (Acmella oleracea)',
      'Chicória-do-Pará & alfavaca',
      'Krokante farinha d’água de Bragança'
    ],
    culturalSignificanceNl:
      'Het feestelijke hoofdgerecht tijdens het Círio de Nazaré-festival in Belém, waar families maandenlang naar uitkijken.'
  },
  'Tacacá': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Tacac%C3%A1_soup_at_Tacac%C3%A1_do_Renato%2C_Bel%C3%A9m%2C_Brazil_03.jpg/960px-Tacac%C3%A1_soup_at_Tacac%C3%A1_do_Renato%2C_Bel%C3%A9m%2C_Brazil_03.jpg',
    originStateNl: 'Pará & Amazonas',
    descriptionNl:
      'Een dampend hete, licht zure bouillon geserveerd in een gepolijste kalebas (cuia), gemaakt van tucupi, fluweelzachte tapiocagom, gedroogde riviergarnalen en tintelende jambu.',
    mainIngredientsNl: [
      'Kokendhete tucupi',
      'Goma de tapioca (cassavezetmeel)',
      'Gezouten gedroogde garnalen (camarão seco)',
      'Tintelende jambu-bloemen',
      'Gele cheiro-peper'
    ],
    culturalSignificanceNl:
      'Bereid door "tacacazeiras" (erkend als immaterieel cultureel erfgoed) op straathoeken bij zonsondergang, zelfs bij 32°C.'
  },
  'Pirarucu de Casaca': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Lan%C3%A7amento_do_Festival_Gosto_da_Amaz%C3%B4nia_%2851384927913%29.jpg/960px-Lan%C3%A7amento_do_Festival_Gosto_da_Amaz%C3%B4nia_%2851384927913%29.jpg',
    originStateNl: 'Amazonas (Manaus)',
    descriptionNl:
      'Ovenschotel van gezouten en geplukte pirarucu (de reuzenvis van de Amazone), gelaagd met gebakken bakbanaan, krokante farofa, kokosmelk en paranoten.',
    mainIngredientsNl: [
      'Gezouten pirarucu-filet',
      'Rijpe gebakken bakbanaan (banana-da-terra)',
      'Farinha d’ovinha (krokante cassavekorrels)',
      'Kokosmelk & paranoten'
    ],
    culturalSignificanceNl:
      'Symbool van het duurzame visbeheer door riviergemeenschappen in het Mamirauá-reservaat.'
  },
  'Maniçoba': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/BrunaBrandao_Manicoba_Belem_PA_%2841014496962%29.jpg/960px-BrunaBrandao_Manicoba_Belem_PA_%2841014496962%29.jpg',
    originStateNl: 'Pará',
    descriptionNl:
      'De "feijoada van de Amazone": gemalen bladeren van de cassaveplant (maniva) die zeven dagen lang worden gekookt om het natuurlijke blauwzuur te verwijderen, verrijkt met gerookt vlees.',
    mainIngredientsNl: [
      'Gemalen cassavebladeren (maniva)',
      'Zongedroogd rundvlees (charque)',
      'Gerookte varkensrib & worst',
      'Witte rijst en pittige tucupi-pepersaus'
    ],
    culturalSignificanceNl:
      'Een eeuwenoud inheems meesterwerk van voedselchemie dat een giftige plant verandert in een diepgroene delicatesse.'
  },

  // Northeast (02)
  'Moqueca Baiana': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/MOQUECAB.jpg/960px-MOQUECAB.jpg',
    originStateNl: 'Bahia',
    descriptionNl:
      'Geurige zeevruchtenstoofpot in een aardewerken schaal van zeebaars en grote garnalen, langzaam gegaard in romige kokosmelk, goudoranje dendê-palmolie, limoen en verse koriander.',
    mainIngredientsNl: [
      'Verse witvis & oceaangarnalen',
      'Azeite de dendê (rode palmolie)',
      'Verse kokosmelk',
      'Paprika, tomaat, limoen & koriander',
      'Pirão (romige visbouillon-polenta)'
    ],
    culturalSignificanceNl:
      'Verenigt de inheemse stoofpot in kleipotten met West-Afrikaanse dendê-olie en kokosmelk.'
  },
  'Acarajé da Bahia': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Acaraje-Baiana.jpg/960px-Acaraje-Baiana.jpg',
    originStateNl: 'Bahia (Salvador)',
    descriptionNl:
      'Krokant gefrituurde beignet van gepelde ogenbonen in kokende dendê-olie, opengesneden en gevuld met vatapá (garnalen-notencrème), caruru (okrastof) en gedroogde garnalen.',
    mainIngredientsNl: [
      'Gepelde en gemalen ogenbonen (feijão-fradinho)',
      'Kokende azeite de dendê',
      'Vatapá (gember-, pinda-, cashewnotencrème)',
      'Caruru (okra) & gedroogde garnalen'
    ],
    culturalSignificanceNl:
      'Oorspronkelijk heilig voedsel voor de orixá Iansã in de candomblé; het ambacht van de Baianas de Acarajé is nationaal erfgoed.'
  },
  'Baião de Dois com Carne-de-Sol e Queijo Coalho': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Bai%C3%A3o_de_Dois_%28superior_view%29.jpg/960px-Bai%C3%A3o_de_Dois_%28superior_view%29.jpg',
    originStateNl: 'Ceará, Paraíba & Pernambuco',
    descriptionNl:
      'Samen gekookte rijst en groene ogenbonen met geklaarde roomboter (manteiga de garrafa), blokjes geroosterde queijo coalho en malse plakken zongedroogd rundvlees.',
    mainIngredientsNl: [
      'Groene bonen (feijão-de-corda) & rijst',
      'Carne de sol (gezouten rundvlees)',
      'Queijo coalho (grillkaas)',
      'Manteiga de garrafa (geklaarde boter)'
    ],
    culturalSignificanceNl:
      'Vernoemd naar de baião-dans van Luiz Gonzaga; het symbool van de veerkracht en gastvrijheid van de Sertão.'
  },
  'Bolo de Rolo': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg/960px-Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg',
    originStateNl: 'Pernambuco (Recife & Olinda)',
    descriptionNl:
      'Flinterdunne, bijna transparante lagen biscuitdeeg die strak worden opgerold met gesmolten rode guavepasta (goiabada) uit de koloniale suikermolens.',
    mainIngredientsNl: [
      'Fijn tarwebloem, boter & eieren',
      'Ambachtelijke rode guavepasta (goiabada)',
      'Fijne kristalsuiker'
    ],
    culturalSignificanceNl:
      'Ontstaan uit Portugese kloosterrecepten die werden aangepast met Braziliaanse guave en suikerriet.'
  },

  // Center-West (03)
  'Arroz com Pequi': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Arroz_com_pequi.jpg/960px-Arroz_com_pequi.jpg',
    originStateNl: 'Goiás & Mato Grosso',
    descriptionNl:
      'Goudgele eenpansrijst gekookt met hele vruchten van de inheemse pequi-boom uit de Cerrado, scharrelkip (galinha caipira), knoflook en saffraan.',
    mainIngredientsNl: [
      'Verse pequi-vruchten (Caryocar brasiliense)',
      'Langkorrelige rijst',
      'Scharrelkip (galinha caipira)',
      'Açafrão-da-terra (kurkuma) & lente-ui'
    ],
    culturalSignificanceNl:
      'Het culinaire embleem van Goiás. De pequi mag nooit worden doorgebeten vanwege de fijne stekels in de pit, maar wordt voorzichtig afgeschraapt.'
  },
  'Empadão Goiano': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Empad%C3%A3o_Goiano..jpg/960px-Empad%C3%A3o_Goiano..jpg',
    originStateNl: 'Goiás (Stad Goiás & Goiânia)',
    descriptionNl:
      'Rijkgevulde hartige taart in een kruimelige korst met kip, varkenslende, pittige linguiça-worst, meia-cura kaas, guariroba-palmharten en pequi.',
    mainIngredientsNl: [
      'Kipfilet, varkensvlees & linguiça',
      'Bittere guariroba-palmharten',
      'Queijo meia-cura & olijven',
      'Goudbruin boterdeeg'
    ],
    culturalSignificanceNl:
      'Eeuwenoud familierecept uit de voormalige koloniale hoofdstad Vila Boa de Goiás.'
  },
  'Macarrão de Comitiva com Carne-Seca': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Arroz_Carreteiro_1.jpg/960px-Arroz_Carreteiro_1.jpg',
    originStateNl: 'Mato Grosso do Sul & Mato Grosso (Pantanal)',
    descriptionNl:
      'Stevig cowboygerecht van de Pantanal-veedrijvers: geroosterde pasta gekookt in een gietijzeren pot met gedroogd rundvlees (charque) en knoflook.',
    mainIngredientsNl: [
      'Zongedroogd rundvlees (carne-seca / charque)',
      'Geroosterde pasta',
      'Knoflook, ui & reuzel',
      'Groene kruiden & limoen'
    ],
    culturalSignificanceNl:
      'Ontstaan uit de comitivas: maandenlange tochten te paard door het Pantanal waarbij voedsel zonder koeling houdbaar moest zijn.'
  },
  'Caldo de Piranha': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Caldo_de_peixe.jpg/960px-Caldo_de_peixe.jpg',
    originStateNl: 'Pantanal (Corumbá & Cuiabá)',
    descriptionNl:
      'Krachtige, kruidige bouillon van vers gevangen Pantanal-piranha’s, gekookt met tomaten, paprika, koriander en malagueta-peper.',
    mainIngredientsNl: [
      'Verse piranha uit het Pantanal',
      'Tomaat, paprika & ui',
      'Cassavemeel (farinha de mandioca)',
      'Koriander & malagueta-peper'
    ],
    culturalSignificanceNl:
      'Onmisbaar welkomstritueel in de lodges en vissersgemeenschappen langs de Paraguay- en Cuiabá-rivier.'
  },

  // Southeast (04)
  'Feijoada Completa': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Feijoada_01.jpg/960px-Feijoada_01.jpg',
    originStateNl: 'Rio de Janeiro (Nationaal icoon)',
    descriptionNl:
      'Rijke stoofpot van zwarte bonen en gezouten en gerookte varkensdelen, traditioneel op zaterdagmiddag geserveerd met rijst, gebakken boerenkool, farofa en sinaasappel.',
    mainIngredientsNl: [
      'Zwarte bonen (feijão-preto)',
      'Carne-seca, paio-worst & gerookte ribbetjes',
      'Fijngesneden boerenkool (couve mineira) met knoflook',
      'Geroosterde farofa & verse sinaasappelpartjes'
    ],
    culturalSignificanceNl:
      'Algemeen beschouwd als het nationale gerecht van Brazilië, onlosmakelijk verbonden met samba-middagen op zaterdag.'
  },
  'Feijoada Completa – Carioca': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Feijoada_01.jpg/960px-Feijoada_01.jpg',
    originStateNl: 'Rio de Janeiro (Nationaal icoon)',
    descriptionNl:
      'Rijke stoofpot van zwarte bonen en gezouten en gerookte varkensdelen, traditioneel op zaterdagmiddag geserveerd met rijst, gebakken boerenkool, farofa en sinaasappel.',
    mainIngredientsNl: [
      'Zwarte bonen (feijão-preto)',
      'Carne-seca, paio-worst & gerookte ribbetjes',
      'Fijngesneden boerenkool (couve mineira) met knoflook',
      'Geroosterde farofa & verse sinaasappelpartjes'
    ],
    culturalSignificanceNl:
      'Algemeen beschouwd als het nationale gerecht van Brazilië, onlosmakelijk verbonden met samba-middagen op zaterdag.'
  },
  'Pão de Queijo Mineiro': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Pao_de_queijo_brasil.jpg/960px-Pao_de_queijo_brasil.jpg',
    originStateNl: 'Minas Gerais',
    descriptionNl:
      'Goudbruine, van nature glutenvrije kaasbroodjes van gefermenteerd cassavezetmeel (polvilho) en gerijpte rauwmelkse kaas uit de Serra da Canastra: knapperig vanbuiten en zacht vanbinnen.',
    mainIngredientsNl: [
      'Polvilho doce & polvilho azedo (cassavezetmeel)',
      'Gerijpte Queijo Minas Artesanal (Canastra)',
      'Boerderij-eieren, melk & boter'
    ],
    culturalSignificanceNl:
      'Het symbool van de gastvrijheid van Minas Gerais, altijd warm geserveerd met een vers gezet kopje koffie.'
  },
  'Feijão Tropeiro Mineiro': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Feij%C3%A3o_tropeiro_1.jpg/960px-Feij%C3%A3o_tropeiro_1.jpg',
    originStateNl: 'Minas Gerais & binnenland van São Paulo',
    descriptionNl:
      'Stevig gerecht van de 18e-eeuwse muildierkaravanen (tropeiros): bruine bonen gebakken met krokant spek (torresmo), worst, cassavemeel, eieren en boerenkool.',
    mainIngredientsNl: [
      'Feijão carioca (bruine bonen)',
      'Geroosterd cassavemeel (farinha de mandioca)',
      'Krokant spek (torresmo), linguiça & eieren',
      'Fijngesneden boerenkool'
    ],
    culturalSignificanceNl:
      'Voedde de handelskaravanen die de koloniale goudmijnen van Ouro Preto verbonden met São Paulo en Rio.'
  },
  'Moqueca Capixaba': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Moqueca_Capixaba_na_Panela_de_Barro.jpg/960px-Moqueca_Capixaba_na_Panela_de_Barro.jpg',
    originStateNl: 'Espírito Santo (Vitória)',
    descriptionNl:
      'Lichte, verfijnde visstoofpot zonder palmolie of kokosmelk, gekleurd met rode urucum-zaadjes en kokend geserveerd in een handgemaakte zwarte kleipot (panela de barro).',
    mainIngredientsNl: [
      'Verse zeevis (badejo of robalo)',
      'Urucum-olie (annatto)',
      'Rijpe tomaten, uien, knoflook & koriander',
      'Zwarte aardewerken pot van Goiabeiras'
    ],
    culturalSignificanceNl:
      'Beroemd om de vriendschappelijke culinaire strijd tussen Bahia en Espírito Santo: "Moqueca é capixaba, o resto é peixada!"'
  },

  // South (05)
  'Churrasco Gaúcho com Costela de Chão': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Churrasco_Campeiro.jpg/960px-Churrasco_Campeiro.jpg',
    originStateNl: 'Rio Grande do Sul (Pampa)',
    descriptionNl:
      'Runderribben (costelão) en picanha van grasgevoerd vee uit de pampa, alleen gekruid met grof zeezout en urenlang langzaam geroosterd boven gloeiende houtskool.',
    mainIngredientsNl: [
      'Runderribben (costela de chão) & picanha',
      'Grof zeezout (sal grosso)',
      'Houtskool van edelhout',
      'Farofa, vinagrete & gekookte cassave'
    ],
    culturalSignificanceNl:
      'Het heilige zondagse ritueel van het Zuiden, geboren rond de kampvuren van de gaúcho-veedrijvers.'
  },
  'Barreado Tradicional de Morretes': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Barreado.jpg/960px-Barreado.jpg',
    originStateNl: 'Paraná (Morretes & Antonina)',
    descriptionNl:
      'Stoofpot van rundvlees, spek en komijn die tot 24 uur lang wordt gegaard in een kleipot die luchtdicht is verzegeld met een pasta van cassavemeel.',
    mainIngredientsNl: [
      'Mager rundvlees & gerookt spek',
      'Komijn, laurier, ui & knoflook',
      'Fijn wit cassavemeel (farinha de mandioca)',
      'Gebakken banaan'
    ],
    culturalSignificanceNl:
      'Ruim 300 jaar oude traditie aan de voet van de Serra do Mar, geserveerd na de spectaculaire treinrit van Curitiba naar Morretes.'
  },
  'Galeto al Primo Canto com Polenta Frita': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Polenta_com_Lingui%C3%A7a.jpg/960px-Polenta_com_Lingui%C3%A7a.jpg',
    originStateNl: 'Rio Grande do Sul (Serra Gaúcha)',
    descriptionNl:
      'Gegrilde jonge kip gemarineerd in witte wijn, salie en knoflook, geserveerd met knapperige gebakken polenta, pompoen-tortéi en radicchio-salade.',
    mainIngredientsNl: [
      'Jonge kip gemarineerd in witte wijn en salie',
      'Krokant gebakken maïspolenta',
      'Handgemaakte tortéi met pompoen',
      'Radicchio met gebakken spekjes'
    ],
    culturalSignificanceNl:
      'Het culinaire erfgoed van de Italiaanse immigranten uit Veneto in de wijnvalleien van Bento Gonçalves en Caxias do Sul.'
  },
  'Pinhão Cozido ou na Brasa (Sapecada)': {
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Entrevero_de_pinh%C3%A3o_de_Telemaco_Borba01.jpg/960px-Entrevero_de_pinh%C3%A3o_de_Telemaco_Borba01.jpg',
    originStateNl: 'Paraná, Santa Catarina & Rio Grande do Sul',
    descriptionNl:
      'Voedzame zaden van de eeuwenoude araucaria-den, in de herfst en winter gekookt of geroosterd boven een open vuur van dennennaalden (sapecada).',
    mainIngredientsNl: [
      'Verse pinhão-zaden (Araucaria angustifolia)',
      'Grof zeezout',
      'Houtvuur van araucaria-naalden (grimpas)'
    ],
    culturalSignificanceNl:
      'Hield de inheemse Kaingang en de vroege bergpioniers warm en gevoed tijdens de ijskoude winters in de zuidelijke hooglanden.'
  }
};

/**
 * Dutch translations for all 20 historical milestones and regional history details
 * so the timeline and cards in HistoryModule are 100% Dutch when language === 'nl'.
 */
export const HISTORY_DETAILS_NL: Record<
  RegionId,
  {
    keyCycles: string[];
    period: string;
    quilomboHistory: string;
    milestones: Array<{
      year: string;
      title: string;
      description: string;
      impact: string;
    }>;
  }
> = {
  north: {
    keyCycles: [
      'Drogas do Sertão (boskruiden, cacao, vanille)',
      'Natuurlijk rubber (Ciclo da Borracha)',
      'Jute & rivierhandel'
    ],
    period: '1616 (Stichting van Belém) – 1912 (Einde van de eerste rubberboom)',
    quilomboHistory:
      'Quilombo-gemeenschappen in Pará (zoals Pacoval en Oriximiná) smeedden een uniek bondgenootschap met inheemse volkeren en beheersten de stroomversnellingen en duurzame bosoogst.',
    milestones: [
      {
        year: '1616',
        title: 'Stichting van Santa Maria de Belém do Grão-Pará',
        description:
          'Portugese expeditie onder leiding van Francisco Caldeira Castelo Branco bouwt Forte do Presépio aan de monding van de Amazone.',
        impact:
          'Verzekerde de Portugese soevereiniteit over het Amazonebekken tegenover concurrerende Europese machten.'
      },
      {
        year: '1835–1840',
        title: 'De Cabanagem-volksopstand',
        description:
          'Inheemse volkeren, caboclos en vrije zwarte burgers grijpen de macht in Belém in een opstand tegen de keizerlijke elite.',
        impact:
          'Een van de meest ingrijpende sociale revoluties in de Braziliaanse geschiedenis, symbool van het verzet van de Amazone-bevolking.'
      },
      {
        year: '1896',
        title: 'Opening van het Teatro Amazonas',
        description:
          'Feestelijke opening in Manaus met Ponchielli’s opera La Gioconda op het hoogtepunt van het rubbertijdperk.',
        impact:
          'Veranderde Manaus in het "Parijs van de Tropen" met elektrische trams en Europese architectuur midden in het regenwoud.'
      },
      {
        year: '1988',
        title: 'Chico Mendes & de beweging voor extractieve reservaten',
        description:
          'Vakbondsleider en rubbertapper Chico Mendes verenigt bosbewoners en inheemse volkeren in Acre voor het behoud van het woud.',
        impact:
          'Leidde tot de oprichting van duurzame natuurreservaten (RESEX) en de Braziliaanse grondwet van 1988 voor inheemse landrechten.'
      }
    ]
  },
  northeast: {
    keyCycles: [
      'Pau-Brasil (roodverfhout)',
      'Suikerrietplantages (Engenhos de Açúcar)',
      'Katoen, tabak & veehouderij in de Sertão'
    ],
    period: '1500 (Aankomst van Cabral) – 1763 (Overdracht van de hoofdstad van Salvador naar Rio)',
    quilomboHistory:
      'Quilombo dos Palmares in de Serra da Barriga (Alagoas) groeide uit tot een vrije confederatie van meer dan 20.000 inwoners onder leiding van Ganga Zumba en Zumbi dos Palmares.',
    milestones: [
      {
        year: '1549',
        title: 'Stichting van Salvador als eerste hoofdstad van Brazilië',
        description:
          'Tomé de Souza sticht São Salvador da Bahia de Todos os Santos op de kliffen boven de Allerheiligenbaai.',
        impact:
          'Fungeerde 214 jaar lang als het politieke, religieuze en economische centrum van Portugees-Amerika.'
      },
      {
        year: '1630–1654',
        title: 'Nederlands-Brazilië & Johan Maurits van Nassau in Recife',
        description:
          'De West-Indische Compagnie bestuurt Pernambuco; Maurits van Nassau bouwt bruggen, een sterrenwacht en botanische tuinen met schilders Frans Post en Albert Eckhout.',
        impact:
          'De Slag bij Guararapes (1648–1649) verenigde inheemse, zwarte en Portugese troepen en geldt als de geboorte van het Braziliaanse leger.'
      },
      {
        year: '1695',
        title: 'Verdediging van Quilombo dos Palmares door Zumbi',
        description:
          'Na bijna een eeuw van onafhankelijkheid valt de vrije republiek Palmares na zware koloniale belegeringen; leider Zumbi sterft op 20 november 1695.',
        impact:
          '20 november wordt vandaag in heel Brazilië gevierd als nationale feestdag: Dia da Consciência Negra (Dag van het Zwarte Bewustzijn).'
      },
      {
        year: '1798',
        title: 'De Revolta dos Alfaiates (Kleermakersrevolutie) in Bahia',
        description:
          'Vrije ambachtslieden, kleermakers, soldaten en tot slaaf gemaakten in Salvador eisen een vrije republiek en directe afschaffing van de slavernij.',
        impact:
          'De eerste volksbeweging in Brazilië die politieke onafhankelijkheid koppelde aan volledige gelijke rechten voor alle rassen.'
      }
    ]
  },
  'center-west': {
    keyCycles: [
      'Goud- en diamantwinning (Goiás & Cuiabá)',
      'Veehouderij in het Pantanal & de Cerrado',
      'Bouw van Brasília & moderne agro-technologie'
    ],
    period: '1719 (Stichting van Cuiabá) – 1960 (Inhuldiging van Brasília)',
    quilomboHistory:
      'Het Kalunga-volk stichtte in de 18e eeuw onbereikbare dorpen tussen de kloven van Chapada dos Veadeiros en bewaarde eeuwenoude tradities in vrijheid.',
    milestones: [
      {
        year: '1719–1727',
        title: 'Ontdekking van goud in Cuiabá en Vila Boa de Goiás',
        description:
          'Expedities over de rivieren ontdekken rijke goudvelden diep in het Zuid-Amerikaanse binnenland.',
        impact:
          'Verschoof de Braziliaanse grens duizenden kilometers naar het westen voorbij de oorspronkelijke Tordesillas-lijn.'
      },
      {
        year: '1864–1870',
        title: 'Grensverdediging en heropbouw van Corumbá',
        description:
          'De riviersteden van Mato Grosso vormen het strategische front langs het stroomgebied van de Paraguay-rivier.',
        impact:
          'Versterkte de Braziliaanse verbindingen met het Pantanal en de telegraaflijnen onder leiding van maarschalk Cândido Rondon.'
      },
      {
        year: '1960',
        title: 'Inhuldiging van de futuristische hoofdstad Brasília',
        description:
          'Op 21 april 1960 opent president Juscelino Kubitschek de in slechts 41 maanden gebouwde hoofdstad van urbanist Lúcio Costa en architect Oscar Niemeyer.',
        impact:
          'Opende het Braziliaanse binnenland via nieuwe snelwegen en werd in 1987 het eerste 20e-eeuwse UNESCO-werelderfgoed.'
      },
      {
        year: '1961',
        title: 'Oprichting van het Inheemse Park Xingu',
        description:
          'Dankzij de gebroeders Orlando, Cláudio en Leonardo Villas-Bôas en antropoloog Darcy Ribeiro wordt het eerste grote inheemse territorium beschermd.',
        impact:
          'Zette de wereldwijde standaard voor grootschalige bescherming van zowel inheemse culturen als biodiversiteit.'
      }
    ]
  },
  southeast: {
    keyCycles: [
      'Goud- en diamantcyclus in Minas Gerais (18e eeuw)',
      'Koffiecyclus in de Paraíba-vallei & São Paulo (19e–20e eeuw)',
      'Industrialisatie, financiën & hightech'
    ],
    period: '1695 (Goudvondst in Minas) – 1922 (Week van de Moderne Kunst in São Paulo)',
    quilomboHistory:
      'Stedelijke quilombos in Rio de Janeiro (zoals Pedra do Sal in Pequena África) en landelijke quilombos in Minas Gerais vormden de broedplaats van de samba en burgerrechten.',
    milestones: [
      {
        year: '1789',
        title: 'De Inconfidência Mineira in Ouro Preto',
        description:
          'Dichters, juristen en vaandrig Joaquim José da Silva Xavier (Tiradentes) beramen een republikeinse onafhankelijkheidsopstand tegen de Portugese belastingkroon.',
        impact:
          'Tiradentes werd de nationale martelaar voor de vrijheid; de driehoek op de vlag van Minas Gerais ("Libertas Quæ Sera Tamen") herinnert hieraan.'
      },
      {
        year: '1808',
        title: 'Aankomst van het Portugese koningshuis in Rio de Janeiro',
        description:
          'Op de vlucht voor Napoleon verplaatst prins-regent Dom João VI het hele Portugese hof naar Rio de Janeiro en opent de Braziliaanse havens.',
        impact:
          'Rio werd de hoofdstad van een wereldrijk met de oprichting van de Nationale Bibliotheek, Botanische Tuin en Bank van Brazilië.'
      },
      {
        year: '1822',
        title: 'De Kreet van Ipiranga: Onafhankelijkheid van Brazilië',
        description:
          'Op 7 september 1822 roept kroonprins Dom Pedro I aan de oever van de Ipiranga-beek in São Paulo de onafhankelijkheid van Brazilië uit.',
        impact:
          'Maakte een einde aan 322 jaar koloniaal bestuur en stichtte het Braziliaanse Keizerrijk.'
      },
      {
        year: '1922',
        title: 'De Week van de Moderne Kunst (Semana de Arte Moderna)',
        description:
          'Kunstenaars als Tarsila do Amaral, Anita Malfatti, Mário de Andrade en componist Heitor Villa-Lobos presenteren in het Theatro Municipal van São Paulo een vernieuwende Braziliaanse kunsttaal.',
        impact:
          'Lanceerde het Braziliaanse modernisme en de "Antropofagia"-beweging die inheemse, Afrikaanse en Europese invloeden versmolt.'
      }
    ]
  },
  south: {
    keyCycles: [
      'Jezuïeten- en Guaraní-missies & yerba-maté (erva-mate)',
      'Veehouderij, charqueadas & muildierroutes naar Sorocaba',
      'Wijnbouw, familiecoöperaties & schone waterkracht'
    ],
    period: '1626 (Eerste Guaraní-missies) – 1875 (Begin van de Italiaanse en Duitse immigratie)',
    quilomboHistory:
      'De Lanceiros Negros (Zwarte Lansiers) streden voor hun vrijheid tijdens de Farroupilha-revolutie, en Rio Grande do Sul telt vandaag meer dan 130 levendige quilombo-gemeenschappen en zwarte sociale clubs.',
    milestones: [
      {
        year: '1682–1756',
        title: 'De Zeven Volkomen Missiesteden (Sete Povos das Missões)',
        description:
          'Guaraní-ambachtslieden en jezuïeten bouwen monumentale baroksteden zoals São Miguel Arcanjo met scholen, drukkerijen en muziekateliers.',
        impact:
          'Liet indrukwekkende UNESCO-ruïnes na en het heroïsche verzet van Guaraní-leider Sepé Tiaraju.'
      },
      {
        year: '1835–1845',
        title: 'De Farroupilha-revolutie (Revolução Farroupilha)',
        description:
          'Tienjarige republikeinse opstand van de gaúcho’s in Rio Grande do Sul en Santa Catarina (met steun van Giuseppe en Anita Garibaldi) tegen hoge keizerlijke belastingen.',
        impact:
          'Vormde de sterke regionale identiteit van het Zuiden, elk jaar gevierd op 20 september (Dia do Gaúcho).'
      },
      {
        year: '1824 & 1875',
        title: 'Aankomst van Duitse en Italiaanse pioniers in de bergvalleien',
        description:
          'Immigranten stichten dorpen als São Leopoldo, Blumenau, Bento Gonçalves en Caxias do Sul op basis van kleine familieboerderijen.',
        impact:
          'Introduceerde de Braziliaanse wijnbouw, vakwerkarchitectuur, ambachtelijke brouwerijen en coöperatieve industrie.'
      },
      {
        year: '1984',
        title: 'Ingebruikname van de Itaipu-waterkrachtcentrale',
        description:
          'Brazilië en Paraguay voltooien aan de Paraná-rivier bij Foz do Iguaçu een van de grootste ingenieurswerken uit de wereldgeschiedenis.',
        impact:
          'Voorziet miljoenen huishoudens van 100% duurzame waterkracht en financiert tegelijkertijd grensoverschrijdend natuurbehoud.'
      }
    ]
  }
};

export function getLocalizedRegionData(region: RegionData, lang: LanguageCode): RegionData {
  // Always enrich all signatureDishes with high-res food photos regardless of language
  const enrichedDishes = region.modules.gastronomy.signatureDishes.map((dish) => {
    const dishMeta = DISH_PHOTOS_AND_NL[dish.portugueseName] || DISH_PHOTOS_AND_NL[dish.name];
    if (!dishMeta) return dish;
    if (lang === 'nl') {
      return {
        ...dish,
        imageUrl: dishMeta.imageUrl,
        originState: dishMeta.originStateNl,
        description: dishMeta.descriptionNl,
        keyIngredients: dishMeta.mainIngredientsNl,
        culturalSignificance: dishMeta.culturalSignificanceNl
      };
    }
    return {
      ...dish,
      imageUrl: dishMeta.imageUrl || dish.imageUrl
    };
  });

  if (lang === 'en') {
    return {
      ...region,
      modules: {
        ...region.modules,
        gastronomy: {
          ...region.modules.gastronomy,
          signatureDishes: enrichedDishes
        }
      }
    };
  }

  const loc = LOCALIZED_REGION_SUMMARIES[lang]?.[region.id];
  const extraLoc = LOCALIZED_STATS_AND_LANDMARKS[lang]?.[region.id];
  const historyNl = lang === 'nl' ? HISTORY_DETAILS_NL[region.id] : undefined;
  const festivalsNl = lang === 'nl' ? FESTIVALS_NL[region.id] : undefined;
  const musicNl = lang === 'nl' ? MUSIC_AND_DANCE_NL[region.id] : undefined;
  const folkloreNl = lang === 'nl' ? FOLKLORE_NL[region.id] : undefined;
  const economyNl = lang === 'nl' ? ECONOMY_NL[region.id] : undefined;
  const sportsNl = lang === 'nl' ? SPORTS_NL[region.id] : undefined;
  if (!loc) return region;

  const localizedLandmarks = region.landmarks.map((lm) => {
    const lmTranslation = extraLoc?.landmarks?.[lm.id];
    if (!lmTranslation) return lm;
    return {
      ...lm,
      description: lmTranslation.description,
      highlightFact: lmTranslation.highlightFact
    };
  });

  return {
    ...region,
    tagline: loc.tagline,
    climateOverview: loc.climateOverview,
    landmarks: localizedLandmarks,
    modules: {
      ...region.modules,
      geography: {
        ...region.modules.geography,
        headline: loc.geography.headline,
        overview: loc.geography.overview,
        keyStats: extraLoc?.keyStats || region.modules.geography.keyStats,
        biomes:
          lang === 'nl'
            ? region.modules.geography.biomes.map((b) => {
                const nl =
                  BIOMES_NL[b.name] ||
                  (b.name.toLowerCase().includes('caatinga')
                    ? BIOMES_NL['Caatinga (White Forest - 100% Exclusive to Brazil)']
                    : b.name.toLowerCase().includes('amaz')
                    ? BIOMES_NL['Amazônia (Amazon Rainforest)']
                    : b.name.toLowerCase().includes('arauc')
                    ? BIOMES_NL['Mata de Araucárias (Paraná Pine Moist Forest)']
                    : b.name.toLowerCase().includes('pantanal')
                    ? BIOMES_NL['Pantanal (The World\'s Greatest Tropical Wetland)']
                    : b.name.toLowerCase().includes('pampa')
                    ? BIOMES_NL['Pampa (Campos Sulinos & Gaucho Grasslands)']
                    : b.name.toLowerCase().includes('atlant')
                    ? BIOMES_NL['Mata Atlântica (Atlantic Forest Hotspot)']
                    : b.name.toLowerCase().includes('cerrado')
                    ? BIOMES_NL['Cerrado (The Inverted Forest & Continental Water Tower)']
                    : undefined);
                return nl ? { ...b, ...nl } : b;
              })
            : region.modules.geography.biomes,
        topography: {
          ...region.modules.geography.topography,
          terrainSummary: loc.geography.terrainSummary
        },
        hydrology: {
          ...region.modules.geography.hydrology,
          riverSystemSummary: loc.geography.riverSystemSummary
        },
        climate:
          lang === 'nl' || lang === 'pt'
            ? {
                ...region.modules.geography.climate,
                ...CLIMATE_LOCALIZED[lang][region.id]
              }
            : region.modules.geography.climate,
        environmentalChallenges: loc.geography.environmentalChallenges
      },
      history: {
        ...region.modules.history,
        headline: loc.history.headline,
        overview: loc.history.overview,
        indigenousHeritage: {
          ...region.modules.history.indigenousHeritage,
          culturalContinuity: loc.history.indigenousContinuity
        },
        colonialAndImperialEra: {
          ...region.modules.history.colonialAndImperialEra,
          economicDrivers:
            historyNl?.keyCycles || region.modules.history.colonialAndImperialEra.economicDrivers,
          period: historyNl?.period || region.modules.history.colonialAndImperialEra.period,
          historicalNarrative: loc.history.colonialNarrative
        },
        afroBrazilianHeritage: {
          ...region.modules.history.afroBrazilianHeritage,
          culturalLegacy: loc.history.afroLegacy,
          quilomboHistory:
            historyNl?.quilomboHistory || region.modules.history.afroBrazilianHeritage.quilomboHistory
        },
        milestones: historyNl
          ? historyNl.milestones.map((m) => ({
              yearOrEra: m.year,
              title: m.title,
              description: m.description,
              significance: m.impact
            }))
          : region.modules.history.milestones
      },
      culture: {
        ...region.modules.culture,
        headline: loc.culture.headline,
        overview: loc.culture.overview,
        festivals: festivalsNl || region.modules.culture.festivals,
        musicAndDance: musicNl || region.modules.culture.musicAndDance,
        folklore: folkloreNl || region.modules.culture.folklore
      },
      gastronomy: {
        ...region.modules.gastronomy,
        headline: loc.gastronomy.headline,
        overview: loc.gastronomy.overview,
        philosophy: loc.gastronomy.philosophy,
        signatureDishes: enrichedDishes
      },
      economy: {
        ...region.modules.economy,
        headline: loc.economy.headline,
        overview: loc.economy.overview,
        economicStats: extraLoc?.economicStats || region.modules.economy.economicStats,
        leadingSectors: economyNl?.leadingSectors || region.modules.economy.leadingSectors,
        keyExports: economyNl?.keyExports || region.modules.economy.keyExports,
        innovationAndFuture: {
          ...region.modules.economy.innovationAndFuture,
          renewableEnergy: loc.economy.cleanEnergyFocus
        }
      },
      sports: {
        ...region.modules.sports,
        headline: loc.sports.headline,
        overview: loc.sports.overview,
        football: {
          ...region.modules.sports.football,
          cultureRole: loc.sports.footballRole,
          historicMoments: sportsNl?.footballMoments || region.modules.sports.football.historicMoments
        },
        martialArts: sportsNl?.martialArts || region.modules.sports.martialArts,
        outdoorAndExtremeSports: sportsNl?.extremeSports || region.modules.sports.outdoorAndExtremeSports,
        motorsportOrSkate: sportsNl?.motorsportOrSkate || region.modules.sports.motorsportOrSkate
      }
    }
  };
}
