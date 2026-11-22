import type { RegionId } from '../types';

export interface RegionalPolaroidItem {
  id: string;
  tag: string;
  captionNl: string;
  captionEn: string;
  captionPt: string;
  imageUrl: string;
  rotation: string;
  positionClass: string;
  targetModuleId: string;
}

export interface RegionThemeConfig {
  heroBgClass: string;
  heroBgHex: string;
  badgeBorderClass: string;
  crestBorderClass: string;
  shadowColor: string;
  photoBridgeBgClass: string;
}

export const REGIONAL_THEMES: Record<RegionId, RegionThemeConfig> = {
  north: {
    heroBgClass: 'bg-[#0A4D2E]', // Diep Amazone regenwoudgroen
    heroBgHex: '#0A4D2E',
    badgeBorderClass: 'border-brand-yellow/50',
    crestBorderClass: 'border-brand-yellow/30',
    shadowColor: '#057A44',
    photoBridgeBgClass: 'bg-[#0A4D2E]'
  },
  northeast: {
    heroBgClass: 'bg-[#7D2912]', // Diepe geroosterde Bahiaanse terracottaklei & cacao (WCAG AAA)
    heroBgHex: '#7D2912',
    badgeBorderClass: 'border-brand-yellow/50',
    crestBorderClass: 'border-brand-yellow/30',
    shadowColor: '#D9532E',
    photoBridgeBgClass: 'bg-[#7D2912]'
  },
  'center-west': {
    heroBgClass: 'bg-[#6E3E07]', // Diep Cerrado bronsgoud & Pantanal amber (WCAG AAA)
    heroBgHex: '#6E3E07',
    badgeBorderClass: 'border-brand-yellow/50',
    crestBorderClass: 'border-brand-yellow/30',
    shadowColor: '#E59A23',
    photoBridgeBgClass: 'bg-[#6E3E07]'
  },
  southeast: {
    heroBgClass: 'bg-[#0E2B5C]', // Diep Atlantisch & Guanabara-baai kobaltblauw
    heroBgHex: '#0E2B5C',
    badgeBorderClass: 'border-brand-yellow/50',
    crestBorderClass: 'border-brand-yellow/30',
    shadowColor: '#1E3A8A',
    photoBridgeBgClass: 'bg-[#0E2B5C]'
  },
  south: {
    heroBgClass: 'bg-[#611A34]', // Serra Gaúcha Cabernet & Hoogland wijnrood
    heroBgHex: '#611A34',
    badgeBorderClass: 'border-brand-yellow/50',
    crestBorderClass: 'border-brand-yellow/30',
    shadowColor: '#701A45',
    photoBridgeBgClass: 'bg-[#611A34]'
  }
};

export const REGIONAL_POSTER_LINES: Record<
  RegionId,
  {
    nl: [string, string, string, string];
    en: [string, string, string, string];
    pt: [string, string, string, string];
  }
> = {
  north: {
    nl: ['DUIK IN', 'HET HART', 'VAN DE', 'AMAZONE'],
    en: ['DIVE INTO', 'THE HEART', 'OF THE', 'AMAZON'],
    pt: ['MERGULHE', 'NO CORAÇÃO', 'DA', 'AMAZÔNIA']
  },
  northeast: {
    nl: ['DANS IN', 'DE ZON', 'VAN HET', 'NOORDOOSTEN'],
    en: ['DANCE IN', 'THE SUN', 'OF THE', 'NORTHEAST'],
    pt: ['DANCE NO', 'SOL', 'DO', 'NORDESTE']
  },
  'center-west': {
    nl: ['ONTDEK', 'HET WEIDSE', 'GOUDEN', 'PANTANAL'],
    en: ['EXPLORE', 'THE VAST', 'GOLDEN', 'PANTANAL'],
    pt: ['EXPLORE', 'A IMENSIDÃO', 'DO', 'PANTANAL']
  },
  southeast: {
    nl: ['BELEEF', 'DE ENERGIE', 'VAN HET', 'ZUIDOOSTEN'],
    en: ['EXPERIENCE', 'THE ENERGY', 'OF THE', 'SOUTHEAST'],
    pt: ['VIVA', 'A ENERGIA', 'DO', 'SUDESTE']
  },
  south: {
    nl: ['ADEM', 'DE VRIJHEID', 'VAN DE', 'PAMPA’S'],
    en: ['BREATHE', 'THE FREEDOM', 'OF THE', 'PAMPAS'],
    pt: ['RESPIRE', 'A LIBERDADE', 'DOS', 'PAMPAS']
  }
};

export const REGIONAL_POLAROIDS: Record<RegionId, RegionalPolaroidItem[]> = {
  north: [
    {
      id: 'pol-n-1',
      tag: 'Manaus, AM',
      captionNl: 'Teatro Amazonas & Belle Époque',
      captionEn: 'Teatro Amazonas & Belle Époque',
      captionPt: 'Teatro Amazonas & Belle Époque',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/42/Noite_no_Teatro_Amazonas_%28cropped%29.jpg',
      rotation: '-rotate-6',
      positionClass: 'top-3 sm:top-5 lg:top-7 left-0 sm:left-1 lg:left-2 xl:left-6',
      targetModuleId: 'culture'
    },
    {
      id: 'pol-n-2',
      tag: 'Rio Negro & Solimões',
      captionNl: 'Encontro das Águas zonder menging',
      captionEn: 'Meeting of the Waters Phenomenon',
      captionPt: 'Encontro das Águas dos Rios',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Encontro_das_%C3%81guas_-_Manaus.jpg/1280px-Encontro_das_%C3%81guas_-_Manaus.jpg',
      rotation: 'rotate-5',
      positionClass: 'top-6 sm:top-8 lg:top-10 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-n-3',
      tag: 'Santarém, PA',
      captionNl: 'Alter do Chão, zoetwaterstranden',
      captionEn: 'Alter do Chão Caribbean of the Amazon',
      captionPt: 'Alter do Chão e Praias do Tapajós',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Por_do_sol_na_Praia_de_Alter_do_Ch%C3%A3o_Santar%C3%A9m_Par%C3%A1_Brasil.jpg/960px-Por_do_sol_na_Praia_de_Alter_do_Ch%C3%A3o_Santar%C3%A9m_Par%C3%A1_Brasil.jpg',
      rotation: 'rotate-3',
      positionClass: 'top-[44%] -translate-y-1/2 left-0 sm:left-1 lg:left-2 xl:left-4',
      targetModuleId: 'multimedia'
    },
    {
      id: 'pol-n-4',
      tag: 'Roraima, RR',
      captionNl: 'Monte Roraima, Precambrisch plateau',
      captionEn: 'Mount Roraima Ancient Tepui Plateau',
      captionPt: 'Monte Roraima e Platô Pré-Cambriano',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Roraima-Tepui_Wand.jpg/960px-Roraima-Tepui_Wand.jpg',
      rotation: '-rotate-4',
      positionClass: 'bottom-6 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'geography'
    }
  ],
  northeast: [
    {
      id: 'pol-ne-1',
      tag: 'Salvador, BA',
      captionNl: 'Pelourinho & Olodum ritmes',
      captionEn: 'Pelourinho Historic Center & Olodum',
      captionPt: 'Pelourinho & Ritmos do Olodum',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/960px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG',
      rotation: '-rotate-8',
      positionClass: 'top-3 sm:top-5 lg:top-7 left-0 sm:left-1 lg:left-2 xl:left-6',
      targetModuleId: 'culture'
    },
    {
      id: 'pol-ne-2',
      tag: 'Maranhão, MA',
      captionNl: 'Witte duinen van Lençóis Maranhenses',
      captionEn: 'White Dunes of Lençóis Maranhenses',
      captionPt: 'Lagoas dos Lençóis Maranhenses',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg/960px-Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg',
      rotation: 'rotate-6',
      positionClass: 'top-3 sm:top-5 lg:top-7 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-ne-3',
      tag: 'Pernambuco, PE',
      captionNl: 'Fernando de Noronha & Baía dos Porcos',
      captionEn: 'Fernando de Noronha Archipelago',
      captionPt: 'Fernando de Noronha & Baía dos Porcos',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg/960px-EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
      rotation: 'rotate-4',
      positionClass: 'top-[44%] -translate-y-1/2 left-0 sm:left-1 lg:left-2 xl:left-4',
      targetModuleId: 'multimedia'
    },
    {
      id: 'pol-ne-4',
      tag: 'Olinda, PE',
      captionNl: 'Koloniale heuvels & Frevo-traditie',
      captionEn: 'Historic Olinda & Frevo Carnival',
      captionPt: 'Centro Histórico de Olinda & Frevo',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg/960px-Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg',
      rotation: '-rotate-4',
      positionClass: 'top-[48%] -translate-y-1/2 right-0 sm:right-1 lg:right-2 xl:right-4',
      targetModuleId: 'culture'
    }
  ],
  'center-west': [
    {
      id: 'pol-cw-1',
      tag: 'Mato Grosso, MT',
      captionNl: 'Pantanal wetlands & jaguar leefgebied',
      captionEn: 'Pantanal Wetlands & Jaguar Habitat',
      captionPt: 'Pantanal & Território das Onças',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Pantanal%2C_south-central_South_America_5170.jpg/960px-Pantanal%2C_south-central_South_America_5170.jpg',
      rotation: '-rotate-5',
      positionClass: 'top-3 sm:top-5 lg:top-7 left-0 sm:left-1 lg:left-2 xl:left-6',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-cw-2',
      tag: 'Brasília, DF',
      captionNl: 'Catedral Metropolitana van Niemeyer',
      captionEn: 'Niemeyer’s Cathedral of Brasília',
      captionPt: 'Catedral Metropolitana de Brasília',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Catedral_Metropolitana_de_Brasilia.jpg/960px-Catedral_Metropolitana_de_Brasilia.jpg',
      rotation: 'rotate-7',
      positionClass: 'top-3 sm:top-5 lg:top-7 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'culture'
    },
    {
      id: 'pol-cw-3',
      tag: 'Bonito, MS',
      captionNl: 'Gruta do Lago Azul, kristalheldere grot',
      captionEn: 'Blue Lake Cave in Bonito',
      captionPt: 'Gruta do Lago Azul em Bonito',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG/960px-Abismo_Anhumas%2C_Bonito%2C_MS.JPG',
      rotation: 'rotate-4',
      positionClass: 'top-[44%] -translate-y-1/2 left-0 sm:left-1 lg:left-2 xl:left-4',
      targetModuleId: 'multimedia'
    },
    {
      id: 'pol-cw-4',
      tag: 'Goiás, GO',
      captionNl: 'Chapada dos Veadeiros & kwartslandschap',
      captionEn: 'Chapada dos Veadeiros Crystal Valley',
      captionPt: 'Chapada dos Veadeiros & Vale da Lua',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/960px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
      rotation: '-rotate-5',
      positionClass: 'top-[48%] -translate-y-1/2 right-0 sm:right-1 lg:right-2 xl:right-4',
      targetModuleId: 'geography'
    }
  ],
  southeast: [
    {
      id: 'pol-se-1',
      tag: 'Rio de Janeiro, RJ',
      captionNl: 'Cristo Redentor atop Corcovado',
      captionEn: 'Christ the Redeemer atop Corcovado',
      captionPt: 'Cristo Redentor no Morro do Corcovado',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/960px-Christ_the_Redeemer_-_Cristo_Redentor.jpg',
      rotation: '-rotate-5',
      positionClass: 'top-3 sm:top-5 lg:top-7 left-0 sm:left-1 lg:left-2 xl:left-6',
      targetModuleId: 'culture'
    },
    {
      id: 'pol-se-2',
      tag: 'Rio de Janeiro, RJ',
      captionNl: 'Pão de Açúcar & Guanabara-baai',
      captionEn: 'Sugarloaf Mountain & Guanabara Bay',
      captionPt: 'Pão de Açúcar & Baía de Guanabara',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/960px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
      rotation: 'rotate-7',
      positionClass: 'top-6 sm:top-8 lg:top-10 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-se-3',
      tag: 'São Paulo, SP',
      captionNl: 'MASP & Avenida Paulista skyline',
      captionEn: 'MASP & Avenida Paulista Metropol',
      captionPt: 'MASP e Avenida Paulista',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_05.jpg/960px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_05.jpg',
      rotation: 'rotate-3',
      positionClass: 'top-[44%] -translate-y-1/2 left-0 sm:left-1 lg:left-2 xl:left-4',
      targetModuleId: 'economy'
    },
    {
      id: 'pol-se-4',
      tag: 'Minas Gerais, MG',
      captionNl: 'Ouro Preto, barokke heuvelstad',
      captionEn: 'Ouro Preto Baroque UNESCO City',
      captionPt: 'Conjunto Barroco de Ouro Preto',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/960px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
      rotation: '-rotate-4',
      positionClass: 'bottom-6 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'history'
    }
  ],
  south: [
    {
      id: 'pol-s-1',
      tag: 'Foz do Iguaçu, PR',
      captionNl: 'Cataratas do Iguaçu & Garganta do Diabo',
      captionEn: 'Iguazu Falls & Devil’s Throat',
      captionPt: 'Cataratas do Iguaçu & Garganta do Diabo',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Iguazu_Cataratas.jpg/960px-Iguazu_Cataratas.jpg',
      rotation: '-rotate-7',
      positionClass: 'top-3 sm:top-5 lg:top-7 left-0 sm:left-1 lg:left-2 xl:left-6',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-s-2',
      tag: 'Curitiba, PR',
      captionNl: 'Jardim Botânico & Art Nouveau kas',
      captionEn: 'Curitiba Botanical Garden Greenhouse',
      captionPt: 'Estufa do Jardim Botânico de Curitiba',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Curitiba_jardim_botanico.jpg/960px-Curitiba_jardim_botanico.jpg',
      rotation: 'rotate-5',
      positionClass: 'top-6 sm:top-8 lg:top-10 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'multimedia'
    },
    {
      id: 'pol-s-3',
      tag: 'Santa Catarina, SC',
      captionNl: 'Serra do Rio do Rastro bergwegen',
      captionEn: 'Serra do Rio do Rastro Cloud Pass',
      captionPt: 'Serra do Rio do Rastro nas Nuvens',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Panorama_Serra_do_Rio_do_Rastro.jpg/960px-Panorama_Serra_do_Rio_do_Rastro.jpg',
      rotation: 'rotate-4',
      positionClass: 'top-[44%] -translate-y-1/2 left-0 sm:left-1 lg:left-2 xl:left-4',
      targetModuleId: 'geography'
    },
    {
      id: 'pol-s-4',
      tag: 'Rio Grande do Sul, RS',
      captionNl: 'Ruínas de São Miguel das Missões',
      captionEn: 'Ruins of São Miguel das Missões',
      captionPt: 'Ruínas de São Miguel das Missões',
      imageUrl:
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Ru%C3%ADnas_de_S%C3%A3o_Miguel_das_Miss%C3%B5es.jpg/960px-Ru%C3%ADnas_de_S%C3%A3o_Miguel_das_Miss%C3%B5es.jpg',
      rotation: '-rotate-4',
      positionClass: 'bottom-6 right-0 sm:right-1 lg:right-2 xl:right-6',
      targetModuleId: 'history'
    }
  ]
};
