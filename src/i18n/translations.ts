import type { RegionId } from '../types';

export type LanguageCode = 'nl' | 'en' | 'pt';

export interface ExpeditionStopTranslation {
  stepNumber: string;
  regionId: RegionId;
  title: string;
  subtitle: string;
  storyHook: string;
  insiderTip: string;
  musicVibe: string;
  stampTitle: string;
  durationBadge: string;
  transportMode: string;
}

export interface PolaroidCardTranslation {
  id: string;
  caption: string;
  tag: string;
  regionId: RegionId;
  imageUrl: string;
  rotation: string;
  positionClass: string;
}

export interface TranslationDictionary {
  meta: {
    editionLabel: string;
    subtitle: string;
    startTourBtn: string;
    exploreAtlasBtn: string;
    tourProgressLabel: string;
    stampsCollected: string;
  };
  nav: {
    overview: string;
    expeditionRoute: string;
    liveDashboard: string;
    backToHome: string;
    chooseLanguage: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    soundscapeNotice: string;
    scrollDownHint: string;
  };
  polaroidSection: {
    kicker: string;
    posterLine1: string;
    posterLine2: string;
    posterLine3: string;
    posterLine4: string;
    storyTitle: string;
    storyBody: string;
    badgeSubtitle: string;
    ctaExplore: string;
  };
  expedition: {
    kicker: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    boardStageBtn: string;
    stampedBadge: string;
    unvisitedBadge: string;
    insiderTipLabel: string;
    soundtrackLabel: string;
    stops: Record<RegionId, ExpeditionStopTranslation>;
  };
  bento: {
    kicker: string;
    title: string;
    subtitle: string;
    mapKicker: string;
    mapTitle: string;
    mapAllBrazil: string;
    mapRouteToggle: string;
    mapExploreRegion: string;
    weatherKicker: string;
    weatherTitle: string;
    weatherFeelsLike: string;
    weatherHumidity: string;
    weatherWind: string;
    currencyKicker: string;
    currencyTitle: string;
    currencyInputEur: string;
    currencyInputBrl: string;
    currencyResultLabel: string;
    jeitinhoKicker: string;
    jeitinhoTitle: string;
    jeitinhoFlipHint: string;
    jeitinhoDeepMeaning: string;
    jeitinhoPrev: string;
    jeitinhoNext: string;
    spotifyKicker: string;
    spotifyTitle: string;
    metricsKicker: string;
  };
  regionView: {
    stageBadge: string;
    statesCount: string;
    switchRegion: string;
    population: string;
    ofNationalTotal: string;
    area: string;
    density: string;
    statesAndCapitals: string;
    tourGuideHeadline: string;
    stampUnlockedMsg: string;
    nextStageKicker: string;
    nextStageTitle: string;
    nextStageBtn: string;
    completeTourTitle: string;
    tabs: {
      geography: string;
      history: string;
      culture: string;
      gastronomy: string;
      economy: string;
      sports: string;
      multimedia: string;
    };
  };
  passportBar: {
    title: string;
    subtitle: string;
    nextStopBtn: string;
    playMusic: string;
    pauseMusic: string;
    allStampsCongrats: string;
  };
}

export const POLAROID_CARDS: PolaroidCardTranslation[] = [
  {
    id: 'pol-1',
    caption: 'Pelourinho & Carnaval, Salvador da Bahia',
    tag: 'Nordeste',
    regionId: 'northeast',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/960px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG',
    rotation: '-rotate-6',
    positionClass: 'top-8 sm:top-10 lg:top-12 left-0 sm:left-2 lg:left-4 xl:left-8'
  },
  {
    id: 'pol-2',
    caption: 'Pão de Açúcar & Guanabara-baai, Rio de Janeiro',
    tag: 'Sudeste',
    regionId: 'southeast',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/960px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
    rotation: 'rotate-6',
    positionClass: 'top-10 sm:top-14 lg:top-16 right-0 sm:right-2 lg:right-4 xl:right-8'
  },
  {
    id: 'pol-3',
    caption: 'Amazônia & Rio Negro, Teatro Amazonas',
    tag: 'Norte',
    regionId: 'north',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Amazon_Theatre%2C_Teatro_Amazonas._Manaus%2C_Brazil._03.jpg/960px-Amazon_Theatre%2C_Teatro_Amazonas._Manaus%2C_Brazil._03.jpg',
    rotation: 'rotate-3',
    positionClass: 'bottom-6 left-0 sm:left-2 lg:left-4 xl:left-8'
  },
  {
    id: 'pol-4',
    caption: 'Cataratas do Iguaçu, Garganta do Diabo',
    tag: 'Sul',
    regionId: 'south',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Iguazu_Cataratas.jpg/960px-Iguazu_Cataratas.jpg',
    rotation: '-rotate-3',
    positionClass: 'bottom-4 right-0 sm:right-2 lg:right-4 xl:right-8'
  }
];

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  nl: {
    meta: {
      editionLabel: 'Interactieve rondreis & cultuurgids',
      subtitle: 'Geografie, cultuur, muziek en smaken van Brazilië',
      startTourBtn: 'Start de rondreis',
      exploreAtlasBtn: 'Reisdashboard',
      tourProgressLabel: 'Jouw reispaspoort',
      stampsCollected: 'Stempels verzameld'
    },
    nav: {
      overview: 'Home',
      expeditionRoute: '5-etappe route',
      liveDashboard: 'Live reisdata',
      backToHome: 'Terug naar Home',
      chooseLanguage: 'Taal'
    },
    hero: {
      kicker: 'Van de Amazone tot de watervallen van Iguaçu',
      titleLine1: 'Ontdek de ziel',
      titleLine2: 'van Brazilië',
      description:
        'Stap aan boord van een zintuiglijke reis dwars door het grootste tropische rijk op aarde. Van de mistige rivierkronkels van de Amazone en de Afro-Braziliaanse drums van Bahia tot de bossa nova op Ipanema en de donderende watervallen van het zuiden.',
      primaryCta: 'Start etappe 1: de Amazone',
      secondaryCta: 'Bekijk de 5 etappes',
      soundscapeNotice: 'Zet het geluid aan voor regionale Braziliaanse muziek',
      scrollDownHint: 'Direct naar kaart & live data'
    },
    polaroidSection: {
      kicker: 'Brasil Tropical • Terra do Sol, Café & Cachaça',
      posterLine1: 'VOEL HET',
      posterLine2: 'RITME',
      posterLine3: 'VAN DE',
      posterLine4: 'TROPEN',
      storyTitle: 'Meer dan een land: een continent vol ritme, kleur en saudade',
      storyBody:
        'In Brazilië loopt cultuur niet door musea, maar over straat. Het zit in een gloeiend kopje verse cafezinho in Minas Gerais, het hypnotiserende berimbau-ritme van capoeira bij zonsondergang in Salvador, en de collectieve extase in een kolkend voetbalstadion.',
      badgeSubtitle: 'Terra do Sol, Café & Cachaça • 5 unieke werelden',
      ctaExplore: 'Klik op een polaroid om direct naar die regio te reizen'
    },
    expedition: {
      kicker: 'De grote Brazilië-rondreis • 5 etappes',
      title: 'Volg het kompas van noord naar zuid',
      subtitle:
        'Alle vijf de macro-regio’s zijn gekoppeld tot één doorlopende ontdekkingsreis van 8.500 kilometer: van het equatoriale regenwoud in het noorden tot de subtropische canyons en pampa’s in het zuiden.',
      stepLabel: 'Etappe',
      boardStageBtn: 'Verken etappe',
      stampedBadge: 'Bezocht',
      unvisitedBadge: 'Ontdek regio',
      insiderTipLabel: 'Tip van de gids:',
      soundtrackLabel: 'Regionale muziek:',
      stops: {
        north: {
          stepNumber: '01',
          regionId: 'north',
          title: 'De rivierzee en het regenwoud',
          subtitle: 'Noord (Norte) • Manaus, Belém & de Amazone',
          storyHook:
            'Onze reis begint op de evenaar. Hier zijn geen snelwegen, maar varen we over de zwarte wateren van de Rio Negro langs 50 meter hoge samaúma-bomen en het Belle Époque-operahuis midden in de jungle.',
          insiderTip: 'Proef bij zonsondergang op een plein in Belém een hete kalebas tacacá met de tintelende jambu-bloem.',
          musicVibe: 'Carimbó do Pará & Guitarrada',
          stampTitle: 'Amazone-expeditie',
          durationBadge: 'Etappe 1 • 3,85M km² regenwoud',
          transportMode: 'Per rivierboot & watervliegtuig'
        },
        northeast: {
          stepNumber: '02',
          regionId: 'northeast',
          title: 'Gouden duinen en Afro-Braziliaanse ziel',
          subtitle: 'Noordoost (Nordeste) • Salvador, Olinda & Lençóis Maranhenses',
          storyHook:
            'Vanuit de monding van de Amazone trekken we langs 3.300 km tropische kustlijn. Tussen de spierwitte duinlagunes van Maranhão en de pastelkleurige barokstraten van Pelourinho klopt het Afrikaanse hart van Brazilië.',
          insiderTip: 'Volg op dinsdagavond het percussie-orkest van Olodum door de kinderkopjes van Salvador.',
          musicVibe: 'Forró Raiz, Baião & Samba-Reggae',
          stampTitle: 'Zon van het Noordoosten',
          durationBadge: 'Etappe 2 • 9 staten aan zee',
          transportMode: 'Per duinbuggy & kustzeiler'
        },
        'center-west': {
          stepNumber: '03',
          regionId: 'center-west',
          title: 'Het rijk van de jaguar en modernistisch Brasília',
          subtitle: 'Centraal-West (Centro-Oeste) • Pantanal, Cerrado & Brasília',
          storyHook:
            'We trekken diep het binnenland in naar de hoogvlaktes van de Cerrado en de Pantanal—het grootste drasland ter wereld waar jaguars langs de rivieroevers jagen en Oscar Niemeyers futuristische hoofdstad uit de rode aarde oprijst.',
          insiderTip: 'Snorkel in het kristalheldere bronwater van Bonito en drink ijskoude tereré met de pantaneiro-cowboys.',
          musicVibe: 'Viola Caipira & Moda Sertaneja',
          stampTitle: 'Pantanal & Cerrado',
          durationBadge: 'Etappe 3 • Hart van Zuid-Amerika',
          transportMode: 'Per 4x4-safari & te paard'
        },
        southeast: {
          stepNumber: '04',
          regionId: 'southeast',
          title: 'Bossa nova, koffiebergen en wereldsteden',
          subtitle: 'Zuidoost (Sudeste) • Rio de Janeiro, São Paulo & Ouro Preto',
          storyHook:
            'Over de bergpassen van Minas Gerais dalen we af naar de granieten suikerbroodbergen van Rio de Janeiro en de wolkenkrabbers van São Paulo. De regio waar bossa nova werd geboren en zaterdag heilig is voor feijoada.',
          insiderTip: 'Wandel bij schemering over het golfmozaïek van Ipanema naar de rotsen van Arpoador.',
          musicVibe: 'Bossa Nova Classics & Samba de Raiz',
          stampTitle: 'Corcovado & Samba',
          durationBadge: 'Etappe 4 • Culturele motor',
          transportMode: 'Per kabelbaan & koloniale trein'
        },
        south: {
          stepNumber: '05',
          regionId: 'south',
          title: 'Donderende watervallen, pampa’s en wijngaarden',
          subtitle: 'Zuid (Sul) • Cataratas do Iguaçu, Serra Gaúcha & Florianópolis',
          storyHook:
            'De grote finale van onze reis brengt ons onder de Steenbokskeerkring. Hier storten 275 watervallen zich in de Duivelskeel van Iguaçu, roosteren gaúcho’s churrasco boven open houtvuur en rijpen mousserende wijnen in de bergen.',
          insiderTip: 'Deel een warme kalebas chimarrão bij een kampvuur in de kloven van Aparados da Serra.',
          musicVibe: 'Gaita Gaúcha & Milonga Pampa',
          stampTitle: 'Watervallen van het Zuiden',
          durationBadge: 'Etappe 5 • Subtropische finale',
          transportMode: 'Per serra-trein & bergpas'
        }
      }
    },
    bento: {
      kicker: 'Interactieve veldatlas & actuele data',
      title: 'Interactieve kaart en live Brazilië-data',
      subtitle:
        'Verken de interactieve kaart met alle 31 bezienswaardigheden (via gratis OpenStreetMap- en satellietkaarten), bekijk het actuele weer in alle 5 de regio’s, reken euro’s om naar reais en luister naar regionale muziek.',
      mapKicker: 'Cartografie & expeditieroute',
      mapTitle: 'Interactieve kaart van de 5 regio’s & 31 hoogtepunten',
      mapAllBrazil: 'Heel Brazilië',
      mapRouteToggle: 'Toon reisroute',
      mapExploreRegion: 'Open regiogids',
      weatherKicker: 'Live klimaat per regio',
      weatherTitle: 'Actueel weer in de 5 regio’s (Open-Meteo)',
      weatherFeelsLike: 'Voelt als',
      weatherHumidity: 'Luchtvochtigheid',
      weatherWind: 'Wind',
      currencyKicker: 'Wisselkoers & reisbudget',
      currencyTitle: 'Live EUR ➔ BRL omrekenen',
      currencyInputEur: 'Bedrag in euro (€)',
      currencyInputBrl: 'Bedrag in real (R$)',
      currencyResultLabel: 'Omgerekend bedrag',
      jeitinhoKicker: 'De ziel van de taal',
      jeitinhoTitle: 'Jeitinho & onvertaalbare woorden',
      jeitinhoFlipHint: 'Klik op de kaart voor de culturele betekenis',
      jeitinhoDeepMeaning: 'Culturele betekenis',
      jeitinhoPrev: 'Vorige',
      jeitinhoNext: 'Volgende',
      spotifyKicker: 'Regionale soundscapes',
      spotifyTitle: 'Luister naar de muziek van elke regio',
      metricsKicker: 'Nationale kerncijfers & open data (IBGE / Wereldbank)'
    },
    regionView: {
      stageBadge: 'Expeditie-etappe',
      statesCount: 'deelstaten',
      switchRegion: 'Wissel van regio',
      population: 'Inwoners',
      ofNationalTotal: 'van totaal Brazilië',
      area: 'Oppervlakte',
      density: 'Dichtheid',
      statesAndCapitals: 'Deelstaten & hoofdsteden',
      tourGuideHeadline: 'Introductie & sfeerimpressie',
      stampUnlockedMsg: 'Regio verkend',
      nextStageKicker: 'Vervolg je rondreis door Brazilië',
      nextStageTitle: 'Klaar voor de volgende etappe van de reis?',
      nextStageBtn: 'Reis verder naar',
      completeTourTitle: 'Je hebt alle 5 de regio’s van Brazilië verkend!',
      tabs: {
        geography: 'Geografie & natuur',
        history: 'Geschiedenis & volk',
        culture: 'Cultuur & muziek',
        gastronomy: 'Gastronomie',
        economy: 'Economie & impact',
        sports: 'Sport & passie',
        multimedia: 'Fotogalerij & video'
      }
    },
    passportBar: {
      title: 'Reispaspoort',
      subtitle: 'Jouw 5-etappe rondreis',
      nextStopBtn: 'Volgende etappe',
      playMusic: 'Sfeermuziek aan',
      pauseMusic: 'Muziek pauzeren',
      allStampsCongrats: 'Voltooid!'
    }
  },

  en: {
    meta: {
      editionLabel: 'Interactive Tour & Cultural Guide',
      subtitle: 'Geography, Soul, Music & Flavors of Brazil',
      startTourBtn: 'Start Guided Tour',
      exploreAtlasBtn: 'Travel Dashboard',
      tourProgressLabel: 'Your Travel Passport',
      stampsCollected: 'Stamps collected'
    },
    nav: {
      overview: 'Home',
      expeditionRoute: '5-Stage Route',
      liveDashboard: 'Live Travel Data',
      backToHome: 'Back to Home',
      chooseLanguage: 'Language'
    },
    hero: {
      kicker: 'From the Amazon to Iguazu Falls',
      titleLine1: 'Discover the',
      titleLine2: 'Soul of Brazil',
      description:
        'Embark on a sensory voyage across the greatest tropical realm on Earth. From the misty river bends of the Amazon and the Afro-Brazilian drums of Bahia to Ipanema bossa nova and the thundering cataracts of the South.',
      primaryCta: 'Start Stage 1: The Amazon',
      secondaryCta: 'Explore the 5 Regions',
      soundscapeNotice: 'Turn on sound for regional Brazilian music',
      scrollDownHint: 'Jump to map & live data'
    },
    polaroidSection: {
      kicker: 'Brasil Tropical • Terra do Sol, Café & Cachaça',
      posterLine1: 'FEEL THE',
      posterLine2: 'RHYTHM',
      posterLine3: 'OF THE',
      posterLine4: 'TROPICS',
      storyTitle: 'More than a country: a continent of rhythm, color, and saudade',
      storyBody:
        'In Brazil, culture does not sit behind museum glass—it dances in the streets. It lives in a steaming cup of fresh cafezinho in Minas Gerais, the hypnotic berimbau pulse of capoeira at sunset in Salvador, and the roar of a packed stadium.',
      badgeSubtitle: 'Terra do Sol, Café & Cachaça • 5 unique worlds',
      ctaExplore: 'Click any polaroid to travel directly to that region'
    },
    expedition: {
      kicker: '5 regions from North to South',
      title: 'Follow the compass across Brazil',
      subtitle:
        'All five macro-regions are linked into one continuous 8,500-kilometer journey from the equatorial rainforest down to the southern pampas.',
      stepLabel: 'Stage',
      boardStageBtn: 'Explore region',
      stampedBadge: 'Visited',
      unvisitedBadge: 'Explore region',
      insiderTipLabel: 'Local tip:',
      soundtrackLabel: 'Regional music:',
      stops: {
        north: {
          stepNumber: '01',
          regionId: 'north',
          title: 'The River Sea & The Rainforest Canopy',
          subtitle: 'Norte • Manaus, Belém & The Amazon',
          storyHook:
            'Our expedition begins right on the Equator. Here there are no highways—instead we sail the dark waters of the Rio Negro past 50-meter kapok trees and a Belle Époque opera house in the heart of the jungle.',
          insiderTip: 'At sunset in Belém, sip a piping-hot gourd of Tacacá with tongue-tingling jambu flowers.',
          musicVibe: 'Carimbó do Pará & Guitarrada',
          stampTitle: 'AMAZON EXPEDITION',
          durationBadge: 'Stage 1 • 3.85M km² Jungle',
          transportMode: 'By Riverboat & Floatplane'
        },
        northeast: {
          stepNumber: '02',
          regionId: 'northeast',
          title: 'Golden Dunes & The Afro-Brazilian Soul',
          subtitle: 'Nordeste • Salvador, Olinda & Lençóis Maranhenses',
          storyHook:
            'From the mouth of the Amazon we follow 3,300 km of sun-drenched coastline. Between the turquoise dune lagoons of Maranhão and the pastel baroque cobblestones of Pelourinho beats the African heart of Brazil.',
          insiderTip: 'Follow the Olodum percussion drums through the historic hills of Salvador on Tuesday night.',
          musicVibe: 'Forró Raiz, Baião & Samba-Reggae',
          stampTitle: 'SOL DO NORDESTE',
          durationBadge: 'Stage 2 • 9 Coastal States',
          transportMode: 'By Dune Buggy & Coastal Sail'
        },
        'center-west': {
          stepNumber: '03',
          regionId: 'center-west',
          title: 'Realm of the Jaguar & Modernist Brasília',
          subtitle: 'Centro-Oeste • Pantanal, Cerrado & Brasília',
          storyHook:
            'We head deep inland to the quartz plateaus of the Cerrado and the Pantanal—the world’s largest tropical wetland where jaguars prowl the riverbanks and Oscar Niemeyer’s futuristic capital rises from the red earth.',
          insiderTip: 'Snorkel the crystal-clear karst rivers of Bonito and share ice-cold Tereré with Pantanal cowboys.',
          musicVibe: 'Viola Caipira & Moda Sertaneja',
          stampTitle: 'PANTANAL SAFARI',
          durationBadge: 'Stage 3 • Heart of South America',
          transportMode: 'By 4x4 Safari & Horseback'
        },
        southeast: {
          stepNumber: '04',
          regionId: 'southeast',
          title: 'Bossa Nova Elegance, Coffee Hills & Metropolises',
          subtitle: 'Sudeste • Rio de Janeiro, São Paulo & Ouro Preto',
          storyHook:
            'Crossing the mountain passes of Minas Gerais, we descend to the granite peaks of Rio de Janeiro and the skyline of São Paulo—where Bossa Nova was born and Saturday belongs to Feijoada.',
          insiderTip: 'Stroll the wave-patterned mosaic of Ipanema at dusk to watch the sunset from Arpoador rock.',
          musicVibe: 'Bossa Nova Classics & Samba de Raiz',
          stampTitle: 'CORCOVADO & SAMBA',
          durationBadge: 'Stage 4 • Cultural Powerhouse',
          transportMode: 'By Cable Car & Colonial Train'
        },
        south: {
          stepNumber: '05',
          regionId: 'south',
          title: 'Thundering Cataracts, Pampas & Vineyards',
          subtitle: 'Sul • Iguazu Falls, Serra Gaúcha & Florianópolis',
          storyHook:
            'Our grand finale takes us below the Tropic of Capricorn. Here 275 waterfalls plunge into the Devil’s Throat at Iguazu, gaúchos slow-roast churrasco over wood embers, and sparkling wines age in misty valleys.',
          insiderTip: 'Share a warm gourd of Chimarrão beside a fireplace overlooking the canyons of Aparados da Serra.',
          musicVibe: 'Gaita Gaúcha & Milonga Pampa',
          stampTitle: 'CATARATAS DO SUL',
          durationBadge: 'Stage 5 • Subtropical Finale',
          transportMode: 'By Serra Train & Mountain Pass'
        }
      }
    },
    bento: {
      kicker: 'LIVE TRAVEL BRIEFING & INTERACTIVE ATLAS',
      title: 'Expedition Dashboard & Live Brazil Data',
      subtitle:
        'Explore the interactive map with all 31 landmarks, check live weather across 4 climate zones, convert Euros to Brazilian Reais, and master untranslatable Brazilian expressions.',
      mapKicker: 'Cartography & Expedition Route',
      mapTitle: 'Interactive Map of the 5 Regions & 31 Landmarks',
      mapAllBrazil: 'All Brazil',
      mapRouteToggle: 'Show Tour Route',
      mapExploreRegion: 'Travel to Region',
      weatherKicker: 'Live Climate Comparison',
      weatherTitle: 'Real-Time Weather (Open-Meteo)',
      weatherFeelsLike: 'Feels like',
      weatherHumidity: 'Humidity',
      weatherWind: 'Wind',
      currencyKicker: 'Exchange & Budget',
      currencyTitle: 'Live EUR ➔ BRL Calculator',
      currencyInputEur: 'Amount in Euro (€)',
      currencyInputBrl: 'Amount in Real (R$)',
      currencyResultLabel: 'Estimated Conversion',
      jeitinhoKicker: 'Soul of the Language',
      jeitinhoTitle: 'Jeitinho & Untranslatable Words',
      jeitinhoFlipHint: 'Click card to flip',
      jeitinhoDeepMeaning: 'Cultural Meaning',
      jeitinhoPrev: 'Previous',
      jeitinhoNext: 'Next',
      spotifyKicker: 'Musical Travel Guide',
      spotifyTitle: 'Listen to the Regions on Spotify',
      metricsKicker: 'National Baseline Metrics & Geography'
    },
    regionView: {
      stageBadge: 'EXPEDITION STAGE',
      statesCount: 'Federal States',
      switchRegion: 'Jump to Stage',
      population: 'Population',
      ofNationalTotal: 'of Brazil’s total',
      area: 'Territory Area',
      density: 'Density',
      statesAndCapitals: 'States & Capitals',
      tourGuideHeadline: 'Tour Guide Introduction & Atmosphere',
      stampUnlockedMsg: 'Passport Stamp Unlocked!',
      nextStageKicker: 'CONTINUE YOUR VOYAGE ACROSS BRAZIL',
      nextStageTitle: 'Ready for the next stage of the expedition?',
      nextStageBtn: 'Continue Journey to',
      completeTourTitle: 'You have explored all 5 regions of Brazil!',
      tabs: {
        geography: 'Geography & Nature',
        history: 'History & Society',
        culture: 'Culture & Music',
        gastronomy: 'Gastronomy',
        economy: 'Economy & Impact',
        sports: 'Sports & Passion',
        multimedia: 'Photo Gallery & 4K Video'
      }
    },
    passportBar: {
      title: 'Travel Passport',
      subtitle: 'Your 5-Stage Tour',
      nextStopBtn: 'Next Stage',
      playMusic: 'Play Brasil Vibes',
      pauseMusic: 'Pause Music',
      allStampsCongrats: 'Complete! 5/5 Stamps'
    }
  },

  pt: {
    meta: {
      editionLabel: 'Expedição Interativa & Guia Cultural',
      subtitle: 'Geografia, Alma, Música & Sabores do Brasil',
      startTourBtn: 'Iniciar Expedição',
      exploreAtlasBtn: 'Painel de Viagem',
      tourProgressLabel: 'Seu Passaporte',
      stampsCollected: 'Carimbos coletados'
    },
    nav: {
      overview: 'Início',
      expeditionRoute: 'Roteiro 5 Etapas',
      liveDashboard: 'Dados ao Vivo',
      backToHome: 'Voltar ao Início',
      chooseLanguage: 'Idioma'
    },
    hero: {
      kicker: 'Da Amazônia às Cataratas do Iguaçu',
      titleLine1: 'Descubra a alma',
      titleLine2: 'do Brasil',
      description:
        'Embarque em uma jornada sensorial pelo maior território tropical do planeta. Das curvas do Rio Negro e dos tambores afro-baianos de Salvador à bossa nova de Ipanema e às cataratas do Sul.',
      primaryCta: 'Iniciar etapa 1: Amazônia',
      secondaryCta: 'Ver as 5 regiões',
      soundscapeNotice: 'Ative o som para ouvir a música regional brasileira',
      scrollDownHint: 'Ir para o mapa & dados ao vivo'
    },
    polaroidSection: {
      kicker: 'Brasil Tropical • Terra do Sol, Café & Cachaça',
      posterLine1: 'SINTA O',
      posterLine2: 'RITMO',
      posterLine3: 'DOS',
      posterLine4: 'TRÓPICOS',
      storyTitle: 'Mais que um país: um continente de ritmo, cor e saudade',
      storyBody:
        'No Brasil, a cultura não fica trancada em museus—ela dança nas calçadas. Vive no cafezinho passado na hora em Minas Gerais, no toque hipnótico do berimbau ao pôr do sol na Bahia e na paixão que faz tremer os estádios.',
      badgeSubtitle: 'Terra do Sol, Café & Cachaça • 5 mundos únicos',
      ctaExplore: 'Clique em uma polaroid para viajar diretamente à região'
    },
    expedition: {
      kicker: 'As 5 regiões do Brasil • de Norte a Sul',
      title: 'Siga a bússola de norte a sul',
      subtitle:
        'Conectamos todas as cinco macrorregiões em uma viagem contínua de 8.500 quilômetros, da floresta equatorial aos pampas gaúchos.',
      stepLabel: 'Etapa',
      boardStageBtn: 'Explorar região',
      stampedBadge: 'Visitado',
      unvisitedBadge: 'Descobrir região',
      insiderTipLabel: 'Dica local:',
      soundtrackLabel: 'Música regional:',
      stops: {
        north: {
          stepNumber: '01',
          regionId: 'north',
          title: 'O Rio-Mar & A Floresta Infinita',
          subtitle: 'Norte • Manaus, Belém & Amazônia',
          storyHook:
            'Nossa jornada começa na linha do Equador. Aqui os rios são as estradas: navegamos pelas águas escuras do Rio Negro entre samaúmas gigantes e o esplendor do Teatro Amazonas em plena selva.',
          insiderTip: 'Ao entardecer em Belém, tome uma cuia fumegante de Tacacá com a dormência elétrica da flor de jambu.',
          musicVibe: 'Carimbó do Pará & Guitarrada',
          stampTitle: 'EXPEDIÇÃO AMAZÔNIA',
          durationBadge: 'Etapa 1 • 3,85M km² de Floresta',
          transportMode: 'Barco Regional & Hidroavião'
        },
        northeast: {
          stepNumber: '02',
          regionId: 'northeast',
          title: 'Dunas Douradas & A Alma Afro-Brasileira',
          subtitle: 'Nordeste • Salvador, Olinda & Lençóis Maranhenses',
          storyHook:
            'Da foz do Amazonas seguimos 3.300 km de litoral ensolarado. Entre as lagoas cristalinas dos Lençóis Maranhenses e os casarões coloniais do Pelourinho pulsa o coração africano do Brasil.',
          insiderTip: 'Siga os tambores do Olodum pelas ladeiras históricas de Salvador na noite de terça-feira.',
          musicVibe: 'Forró Raiz, Baião & Samba-Reggae',
          stampTitle: 'SOL DO NORDESTE',
          durationBadge: 'Etapa 2 • 9 Estados Costeiros',
          transportMode: 'Buggy nas Dunas & Jangada'
        },
        'center-west': {
          stepNumber: '03',
          regionId: 'center-west',
          title: 'O Reino da Onça-Pintada & Brasília Modernista',
          subtitle: 'Centro-Oeste • Pantanal, Cerrado & Brasília',
          storyHook:
            'Adentramos o coração do continente rumo às chapadas de quartzo do Cerrado e ao Pantanal—a maior planície alagável do mundo, onde a onça-pintada reina e as curvas de Oscar Niemeyer brilham no Planalto Central.',
          insiderTip: 'Flutue nas águas transparentes de Bonito e compartilhe uma roda de Tereré gelado com os peões pantaneiros.',
          musicVibe: 'Viola Caipira & Moda Sertaneja',
          stampTitle: 'SAFÁRI PANTANAL',
          durationBadge: 'Etapa 3 • Coração da América do Sul',
          transportMode: 'Safári 4x4 & Comitiva'
        },
        southeast: {
          stepNumber: '04',
          regionId: 'southeast',
          title: 'Elegância Bossa Nova, Serras de Café & Metrópoles',
          subtitle: 'Sudeste • Rio de Janeiro, São Paulo & Ouro Preto',
          storyHook:
            'Cruzando as montanhas barrocas de Minas Gerais, chegamos aos morros cariocas e à metrópole de São Paulo—onde nasceu a Bossa Nova e o sábado é sagrado para a Feijoada Completa.',
          insiderTip: 'Caminhe pelo calçadão de Ipanema ao entardecer para aplaudir o pôr do sol na pedra do Arpoador.',
          musicVibe: 'Bossa Nova Classics & Samba de Raiz',
          stampTitle: 'CORCOVADO & SAMBA',
          durationBadge: 'Etapa 4 • Motor Cultural',
          transportMode: 'Bondinho & Trem da Serra'
        },
        south: {
          stepNumber: '05',
          regionId: 'south',
          title: 'Cataratas Trovejantes, Pampas & Vinhedos',
          subtitle: 'Sul • Cataratas do Iguaçu, Serra Gaúcha & Florianópolis',
          storyHook:
            'O grande final da nossa expedição cruza o Trópico de Capricórnio. Aqui 275 quedas d’água mergulham na Garganta do Diabo em Iguaçu, o churrasco assa no fogo de chão e os espumantes maturam nos vales.',
          insiderTip: 'Compartilhe um Chimarrão quente diante dos cânions gigantes de Aparados da Serra.',
          musicVibe: 'Gaita Gaúcha & Milonga Pampa',
          stampTitle: 'CATARATAS DO SUL',
          durationBadge: 'Etapa 5 • Finale Subtropical',
          transportMode: 'Trem da Serra & Cânions'
        }
      }
    },
    bento: {
      kicker: 'PREPARAÇÃO DE VIAGEM & ATLAS INTERATIVO',
      title: 'Painel da Expedição & Dados ao Vivo',
      subtitle:
        'Navegue pelo mapa interativo com 31 marcos históricos, consulte o clima em tempo real nas capitais, converta Euros para Reais e descubra as expressões intraduzíveis do português brasileiro.',
      mapKicker: 'Cartografia & Roteiro de Viagem',
      mapTitle: 'Mapa Interativo das 5 Regiões & 31 Marcos',
      mapAllBrazil: 'Todo o Brasil',
      mapRouteToggle: 'Mostrar Rota',
      mapExploreRegion: 'Viajar para Região',
      weatherKicker: 'Climatologia ao Vivo',
      weatherTitle: 'Tempo em Tempo Real (Open-Meteo)',
      weatherFeelsLike: 'Sensação',
      weatherHumidity: 'Umidade',
      weatherWind: 'Vento',
      currencyKicker: 'Câmbio & Moeda',
      currencyTitle: 'Conversor EUR ➔ BRL ao Vivo',
      currencyInputEur: 'Valor em Euro (€)',
      currencyInputBrl: 'Valor em Real (R$)',
      currencyResultLabel: 'Valor Convertido Estimado',
      jeitinhoKicker: 'Alma Sociolinguística',
      jeitinhoTitle: 'Jeitinho & Palavras Intraduzíveis',
      jeitinhoFlipHint: 'Clique no cartão para girar',
      jeitinhoDeepMeaning: 'Significado Cultural',
      jeitinhoPrev: 'Anterior',
      jeitinhoNext: 'Próximo',
      spotifyKicker: 'Guia Musical Regional',
      spotifyTitle: 'Ouça as Regiões no Spotify',
      metricsKicker: 'Indicadores Nacionais & Território'
    },
    regionView: {
      stageBadge: 'ETAPA DA EXPEDIÇÃO',
      statesCount: 'Estados Federados',
      switchRegion: 'Ir para Etapa',
      population: 'População',
      ofNationalTotal: 'do total nacional',
      area: 'Área Territorial',
      density: 'Densidade',
      statesAndCapitals: 'Estados & Capitais',
      tourGuideHeadline: 'Introdução do Guia & Atmosfera Local',
      stampUnlockedMsg: 'Carimbo de Passaporte Conquistado!',
      nextStageKicker: 'CONTINUE SUA EXPEDIÇÃO PELO BRASIL',
      nextStageTitle: 'Pronto para o próximo destino da viagem?',
      nextStageBtn: 'Seguir Viagem para',
      completeTourTitle: 'Você explorou todas as 5 regiões do Brasil!',
      tabs: {
        geography: 'Geografia & Natureza',
        history: 'História & Sociedade',
        culture: 'Cultura & Música',
        gastronomy: 'Gastronomia',
        economy: 'Economia & Inovação',
        sports: 'Esportes & Paixão',
        multimedia: 'Galeria & Vídeo 4K'
      }
    },
    passportBar: {
      title: 'Passaporte Brasil',
      subtitle: 'Sua Expedição (5 Etapas)',
      nextStopBtn: 'Próxima Etapa',
      playMusic: 'Tocar Clima Brasil',
      pauseMusic: 'Pausar Música',
      allStampsCongrats: 'Completo! 5/5 Carimbos'
    }
  }
};
