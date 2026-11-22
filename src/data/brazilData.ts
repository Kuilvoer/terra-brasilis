/**
 * Terra Brasilis — Master Editorial Dataset
 * File: src/data/brazilData.ts
 *
 * Complete, deeply researched editorial dataset covering:
 * - All 5 official IBGE macro-regions (North, Northeast, Center-West, Southeast, South)
 * - All 6 core educational modules per region (Geography, History, Culture, Gastronomy, Economy, Sports)
 * - 31 curated landmarks with exact coordinates and UNESCO status
 * - 15 "Jeitinho Brasileiro" sociolinguistic idioms with IPA phonetics and usage examples
 * - Verified Unsplash photography and 4K YouTube scenic documentaries
 * - Static API resilience fallbacks for Weather, Currency, and Demographics
 */

import type {
  TerraBrasilisDataset,
  BrazilDemographics,
  CityWeather,
  ExchangeRateState,
  JeitinhoTerm,
  RegionData
} from '../types';

const DEMOGRAPHICS_DATA: BrazilDemographics = {
  commonName: 'Brazil',
  officialName: 'República Federativa do Brasil',
  capital: 'Brasília',
  population: 203080756,
  populationFormatted: '215.3 Million',
  areaKm2: 8515767,
  areaFormatted: '8,515,767 km² (5th largest globally)',
  coastlineKm: 7491,
  unescoSitesCount: 23,
  subregion: 'South America',
  currencyCode: 'BRL',
  currencyName: 'Brazilian Real',
  currencySymbol: 'R$',
  languages: ['Portuguese'],
  borders: [
    'Argentina',
    'Bolivia',
    'Colombia',
    'French Guiana',
    'Guyana',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
    'Venezuela'
  ],
  timezones: [
    'UTC-05:00 (Acre)',
    'UTC-04:00 (Amazon)',
    'UTC-03:00 (Brasília Official)',
    'UTC-02:00 (Fernando de Noronha)'
  ],
  flagSvgUrl: 'https://flagcdn.com/br.svg',
  coatOfArmsSvgUrl: 'https://mainfacts.com/media/images/coats_of_arms/br.svg',
  hdiIndex: 0.760,
  giniIndex: 53.4,
  motto: 'Ordem e Progresso'
};

const FALLBACK_WEATHER: CityWeather[] = [
  {
    city: 'Manaus',
    region: 'North (Amazonas)',
    regionId: 'north',
    lat: -3.1190,
    lon: -60.0217,
    temperature: 31.4,
    apparentTemperature: 37.2,
    humidity: 78,
    windSpeed: 6.2,
    weatherCode: 1,
    conditionLabel: 'Mainly Clear / Humid',
    iconName: 'SunMedium',
    climateTag: 'Equatorial Rainforest',
    isFallback: true
  },
  {
    city: 'Salvador',
    region: 'Northeast (Bahia)',
    regionId: 'northeast',
    lat: -12.9714,
    lon: -38.5014,
    temperature: 26.5,
    apparentTemperature: 28.8,
    humidity: 74,
    windSpeed: 14.5,
    weatherCode: 2,
    conditionLabel: 'Partly Cloudy / Coastal Breeze',
    iconName: 'CloudSun',
    climateTag: 'Tropical Atlantic',
    isFallback: true
  },
  {
    city: 'São Paulo',
    region: 'Southeast (São Paulo)',
    regionId: 'southeast',
    lat: -23.5505,
    lon: -46.6333,
    temperature: 21.2,
    apparentTemperature: 21.5,
    humidity: 70,
    windSpeed: 9.8,
    weatherCode: 3,
    conditionLabel: 'Overcast / Garoa',
    iconName: 'Cloud',
    climateTag: 'Subtropical Highland',
    isFallback: true
  },
  {
    city: 'Curitiba',
    region: 'South (Paraná)',
    regionId: 'south',
    lat: -25.4284,
    lon: -49.2733,
    temperature: 16.8,
    apparentTemperature: 16.0,
    humidity: 82,
    windSpeed: 7.2,
    weatherCode: 51,
    conditionLabel: 'Light Drizzle / Cool',
    iconName: 'CloudDrizzle',
    climateTag: 'Subtropical Plateau',
    isFallback: true
  }
];

const FALLBACK_EXCHANGE: ExchangeRateState = {
  baseCurrency: 'EUR',
  targetCurrency: 'BRL',
  rate: 6.05,
  date: '2026-10-29',
  lastUpdated: '2026-10-29T22:20:00Z',
  isFallback: true
};

const JEITINHO_VOCABULARY: JeitinhoTerm[] = [
  {
    id: 'saudade',
    term: 'Saudade',
    phonetic: '/sawˈda.dʒi/',
    literalTranslation: 'Deep nostalgic longing; the presence of absence',
    culturalMeaning:
      'Often regarded as the most untranslatable word in the Portuguese language, saudade is not mere sadness, but a poetic, bittersweet ache for a person, place, flavor, or era that is distant or gone—accompanied by deep gratitude that it was once experienced.',
    exampleSentencePt: 'Quando estou longe de casa, sinto uma saudade imensa do cheiro do café da minha mãe.',
    exampleSentenceEn: 'When I am far from home, I feel an immense saudade for the aroma of my mother’s coffee.',
    culturalContext: 'Universal Brazilian Identity & Bossa Nova Poetics',
    regionOrScope: 'National',
    tags: ['Emotion', 'Poetics', 'Identity']
  },
  {
    id: 'cafune',
    term: 'Cafuné',
    phonetic: '/ka.fuˈnɛ/',
    literalTranslation: 'Running one’s fingers tenderly through someone’s hair',
    culturalMeaning:
      'An intimate, soothing gesture of wordless affection and care, typically performed while a loved one rests their head on your lap. Derived from the Kimbundu word kifuné, it embodies Brazil’s deep Afro-descendant linguistic tenderness.',
    exampleSentencePt: 'Ela deitou a cabeça no meu colo e adormeceu enquanto eu fazia um cafuné.',
    exampleSentenceEn: 'She rested her head on my lap and drifted to sleep while I gently stroked her hair.',
    culturalContext: 'Intimate Affection & Afro-Brazilian Linguistic Heritage',
    regionOrScope: 'National',
    tags: ['Affection', 'Intimacy', 'Kimbundu Roots']
  },
  {
    id: 'gambiarra',
    term: 'Gambiarra',
    phonetic: '/ɡɐ̃.biˈa.ʁɐ/',
    literalTranslation: 'Improvisational fix; spontaneous makeshift engineering',
    culturalMeaning:
      'The celebrated art of Brazilian everyday resourcefulness. When official spare parts or budgets are unavailable, a gambiarra solves the problem through sheer lateral thinking, wire, and ingenuity—turning scarcity into creative triumph.',
    exampleSentencePt: 'O suporte do microfone quebrou antes do show, mas o técnico resolveu tudo com uma gambiarra genial.',
    exampleSentenceEn: 'The microphone stand broke right before the concert, but the technician solved it with a brilliant gambiarra.',
    culturalContext: 'Everyday Ingenuity & Creative Problem Solving',
    regionOrScope: 'National',
    tags: ['Ingenuity', 'Improvisation', 'Street Genius']
  },
  {
    id: 'jeitinho-brasileiro',
    term: 'Jeitinho Brasileiro',
    phonetic: '/ʒejˈtʃĩ.ɲu bɾa.ziˈlej.ɾu/',
    literalTranslation: 'The Brazilian little way; creative social navigation',
    culturalMeaning:
      'A quintessential social lubrication strategy used to bypass rigid bureaucracy or resolve seemingly impossible impasses through warmth, empathy, humor, and interpersonal connection rather than confrontation.',
    exampleSentencePt: 'O restaurante já ia fechar, mas conversando com simpatia o chef deu um jeitinho e preparou nosso jantar.',
    exampleSentenceEn: 'The restaurant was about to close, but after a warm chat the chef found a jeitinho and cooked our dinner.',
    culturalContext: 'Social Navigation & Interpersonal Warmth',
    regionOrScope: 'National',
    tags: ['Sociology', 'Diplomacy', 'Flexibility']
  },
  {
    id: 'malandragem',
    term: 'Malandragem',
    phonetic: '/ma.lɐ̃ˈdɾa.ʒẽj/',
    literalTranslation: 'Poetic street smarts; rhythmic agility in the face of adversity',
    culturalMeaning:
      'Immortalized by the white-linen-suited Lapa samba archetype (O Malandro), malandragem is the art of navigating life’s hardships with charm, quick wit, and musicality rather than brute force.',
    exampleSentencePt: 'Com pura malandragem e um sorriso no rosto, ele convenceu o porteiro a deixá-lo assistir ao ensaio da escola de samba.',
    exampleSentenceEn: 'With pure street charm and a smile, he convinced the doorman to let him watch the samba school rehearsal.',
    culturalContext: 'Rio de Janeiro Samba Lore & Urban Folklore',
    regionOrScope: 'Southeast',
    tags: ['Samba', 'Street Smarts', 'Carioca Soul']
  },
  {
    id: 'mutirao',
    term: 'Mutirão',
    phonetic: '/mu.tʃiˈɾɐ̃w/',
    literalTranslation: 'Collective community mutual-aid gathering',
    culturalMeaning:
      'Derived from the indigenous Tupi word motyrõ ("working together"), a mutirão brings neighbors together on a weekend to build a family’s house roof, clean a park, or harvest crops without pay, ending in music and a shared feast.',
    exampleSentencePt: 'No domingo, toda a comunidade fez um mutirão para reformar a biblioteca da escola.',
    exampleSentenceEn: 'On Sunday, the entire community joined in a mutirão to renovate the school library.',
    culturalContext: 'Indigenous Tupi Heritage & Civic Solidarity',
    regionOrScope: 'National',
    tags: ['Tupi Roots', 'Community', 'Solidarity']
  },
  {
    id: 'chamego',
    term: 'Chamego',
    phonetic: '/ʃaˈme.ɡu/',
    literalTranslation: 'Sweet close embrace; tender romantic warmth',
    culturalMeaning:
      'Deeply woven into Northeastern Forró culture and Luiz Gonzaga’s ballads, chamego describes both the cozy physical closeness of two people dancing cheek-to-cheek and the person who inspires that sweet affection.',
    exampleSentencePt: 'Nada melhor do que dançar um xote bem coladinho no chamego da pessoa amada.',
    exampleSentenceEn: 'Nothing beats dancing a slow xote held close in the sweet chamego of the one you love.',
    culturalContext: 'Northeastern Forró & Romantic Warmth',
    regionOrScope: 'Northeast',
    tags: ['Forró', 'Romance', 'Northeast']
  },
  {
    id: 'xodo',
    term: 'Xodó',
    phonetic: '/ʃɔˈdɔ/',
    literalTranslation: 'Cherished darling; treasured favorite person or object',
    culturalMeaning:
      'A warm term of endearment reserved for the person, pet, or heirloom that holds the most sheltered, irreplaceable corner of your heart, popularized globally by Dominguinhos’ song "Eu Só Quero um Xodó".',
    exampleSentencePt: 'Esse violão antigo de jacarandá é o meu xodó; herdei do meu avô no interior da Bahia.',
    exampleSentenceEn: 'This vintage rosewood guitar is my xodó; I inherited it from my grandfather in the Bahian countryside.',
    culturalContext: 'Tender Attachment & Musical Heritage',
    regionOrScope: 'Northeast',
    tags: ['Endearment', 'Heritage', 'Music']
  },
  {
    id: 'calcadao',
    term: 'Calçadão',
    phonetic: '/kɐw.saˈdɐ̃w/',
    literalTranslation: 'Mosaic oceanfront promenade; the democratic urban living room',
    culturalMeaning:
      'More than a sidewalk, the Portuguese stone wave-patterned calçadão along Brazilian beaches is a egalitarian civic stage where joggers, poets, retirees, and skateboarders mingle from dawn until midnight.',
    exampleSentencePt: 'Ao entardecer, caminhamos pelo calçadão de Copacabana tomando água de coco gelada.',
    exampleSentenceEn: 'At dusk, we strolled along the Copacabana calçadão sipping ice-cold coconut water.',
    culturalContext: 'Coastal Urbanism & Public Leisure',
    regionOrScope: 'Southeast',
    tags: ['Urbanism', 'Beach Culture', 'Architecture']
  },
  {
    id: 'pipoca',
    term: 'Pipoca',
    phonetic: '/piˈpɔ.kɐ/',
    literalTranslation: 'Popcorn; the joyful, ropeless street carnival crowd',
    culturalMeaning:
      'In Salvador’s street Carnaval, while paying revellers dance inside roped VIP sections (blocos), the pipoca is the massive, egalitarian crowd dancing freely outside the ropes—leaping in unison like popping corn kernels as the trio elétrico sound truck rolls by.',
    exampleSentencePt: 'A verdadeira energia do Carnaval da Bahia está no meio da pipoca atrás do trio elétrico.',
    exampleSentenceEn: 'The true energy of Bahia’s Carnival is right in the middle of the pipoca following the sound truck.',
    culturalContext: 'Bahian Street Carnaval & Democratic Joy',
    regionOrScope: 'Northeast',
    tags: ['Carnaval', 'Bahia', 'Street Culture']
  },
  {
    id: 'ginga',
    term: 'Ginga',
    phonetic: '/ˈʒĩ.ɡɐ/',
    literalTranslation: 'Rhythmic body sway; fluid footwork and life cadence',
    culturalMeaning:
      'Born as the fundamental rocking step of Afro-Brazilian Capoeira to keep the body in perpetual deceptive motion, ginga describes the unmistakable fluidity of Brazilian football legends, samba dancers, and everyday walk.',
    exampleSentencePt: 'O camisa dez driblou dois marcadores com uma ginga que levantou o Maracanã inteiro.',
    exampleSentenceEn: 'The number ten dribbled past two defenders with a fluid ginga that brought the entire Maracanã to its feet.',
    culturalContext: 'Capoeira Philosophy & Football Artistry',
    regionOrScope: 'National',
    tags: ['Capoeira', 'Football', 'Movement']
  },
  {
    id: 'desabafar',
    term: 'Desabafar',
    phonetic: '/de.za.baˈfaʁ/',
    literalTranslation: 'To unburden the chest; to pour one’s heart out',
    culturalMeaning:
      'Literally meaning "to remove the suffocating lid," desabafar is the essential Brazilian friendship ritual of sitting down over coffee or a cold chope to speak openly about life’s weight until the spirit feels light again.',
    exampleSentencePt: 'Obrigado por me ouvir; eu precisava muito desabafar com um amigo de verdade hoje.',
    exampleSentenceEn: 'Thank you for listening to me; I really needed to desabafar with a true friend today.',
    culturalContext: 'Emotional Openness & Friendship Rituals',
    regionOrScope: 'National',
    tags: ['Friendship', 'Catharsis', 'Conversation']
  },
  {
    id: 'folgado',
    term: 'Folgado',
    phonetic: '/fowˈɡa.du/',
    literalTranslation: 'Loose-fitting; someone who takes cheeky, uninvited liberties',
    culturalMeaning:
      'Used with a mix of exasperation and humor to describe someone who makes themselves overly comfortable at another’s expense—arriving late, asking for favors without hesitation, and acting as if they own the place.',
    exampleSentencePt: 'Meu primo é tão folgado que veio passar um fim de semana e ficou o mês inteiro.',
    exampleSentenceEn: 'My cousin is so folgado that he came for a weekend visit and stayed the entire month.',
    culturalContext: 'Everyday Humor & Social Boundaries',
    regionOrScope: 'National',
    tags: ['Humor', 'Colloquial', 'Personality']
  },
  {
    id: 'marrento',
    term: 'Marrento',
    phonetic: '/maˈʁẽ.tu/',
    literalTranslation: 'Full of swagger; proudly defiant and self-assured',
    culturalMeaning:
      'A classic Carioca expression describing someone who carries an air of unshakeable confidence or tough-to-impress attitude—often hiding a warm heart beneath a cool, streetwise exterior.',
    exampleSentencePt: 'Ele faz pose de marrento na praia, mas abre um sorriso largo quando encontra os amigos.',
    exampleSentenceEn: 'He puts on a marrento swagger on the beach, but breaks into a wide smile when he sees his friends.',
    culturalContext: 'Rio de Janeiro Beach & Sporting Attitude',
    regionOrScope: 'Southeast',
    tags: ['Slang', 'Attitude', 'Rio de Janeiro']
  },
  {
    id: 'farofa',
    term: 'Farofa',
    phonetic: '/faˈɾɔ.fɐ/',
    literalTranslation: 'Toasted cassava flour delicacy; a lively, unpretentious gathering',
    culturalMeaning:
      'In gastronomy, farofa is the indispensable golden toasted manioc flour that crowns feijoada and churrasco. Culturally, "fazer farofa" celebrates a joyous, unpretentious family outing packed with homemade food and laughter.',
    exampleSentencePt: 'Um verdadeiro almoço de domingo brasileiro exige feijão fresquinho e uma farofa crocante na mesa.',
    exampleSentenceEn: 'A true Brazilian Sunday lunch demands fresh beans and a crunchy farofa on the table.',
    culturalContext: 'Culinary Heritage & Family Conviviality',
    regionOrScope: 'National',
    tags: ['Gastronomy', 'Family', 'Tradition']
  }
];

const NORTH_REGION: RegionData = {
  id: 'north',
  name: 'Norte',
  nameEnglish: 'North',
  tagline: 'The River Sea, Ancient Canopies & Amazonian Mysticism',
  colorToken: '#0A4D2E',
  states: [
    { code: 'AM', name: 'Amazonas', capital: 'Manaus' },
    { code: 'PA', name: 'Pará', capital: 'Belém' },
    { code: 'AC', name: 'Acre', capital: 'Rio Branco' },
    { code: 'RO', name: 'Rondônia', capital: 'Porto Velho' },
    { code: 'RR', name: 'Roraima', capital: 'Boa Vista' },
    { code: 'AP', name: 'Amapá', capital: 'Macapá' },
    { code: 'TO', name: 'Tocantins', capital: 'Palmas' }
  ],
  areaKm2: 3853676,
  population: 17354884,
  populationPercentageOfBrazil: 8.5,
  densityPerKm2: 4.85,
  climateOverview: 'Equatorial Super-Humid (Af & Am) — 26°C to 32°C year-round with 2,500mm+ rainfall',
  centerCoordinates: [-3.1190, -60.0217],
  coordinates: [-3.1190, -60.0217],
  bounds: [
    [-13.69, -73.98],
    [5.27, -46.06]
  ],
  spotifyPlaylistId: '37i9dQZF1DX8yF6vP57T2L',
  heroImage: {
    id: 'north-hero',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/1280px-Amazon17_%285641020319%29.jpg',
    alt: 'Aerial view of the winding Amazon River through dense rainforest canopy',
    caption: 'Meandering tributaries of the Amazon Basin slicing through primary equatorial rainforest.',
    credit: 'Wikimedia Commons / Amazonia Archive',
    aspectRatio: 'landscape'
  },
  gallery: [
    {
      id: 'north-gal-1',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/1280px-Amazon17_%285641020319%29.jpg',
      alt: 'Winding Amazon River tributaries from above',
      caption: 'Aerial winding loops of the Amazon River slicing through virgin rainforest canopy.',
      credit: 'Wikimedia Commons / Amazon Aerials',
      aspectRatio: 'landscape'
    },
    {
      id: 'north-gal-2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Noite_no_Teatro_Amazonas_%28cropped%29.jpg',
      alt: 'Teatro Amazonas in Manaus at night',
      caption: 'The iconic Belle Époque dome of Teatro Amazonas in the heart of Manaus.',
      credit: 'Wikimedia Commons / Manaus Heritage',
      aspectRatio: 'portrait'
    },
    {
      id: 'north-gal-3',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Encontro_das_%C3%81guas_-_Manaus.jpg/1280px-Encontro_das_%C3%81guas_-_Manaus.jpg',
      alt: 'Meeting of Waters in Manaus',
      caption: 'The dark waters of the Rio Negro meeting the sandy-colored Rio Solimões near Manaus.',
      credit: 'Wikimedia Commons / Hydrography Brazil',
      aspectRatio: 'square'
    },
    {
      id: 'north-gal-4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Festival_Folcl%C3%B3rico_de_Parintins.jpg',
      alt: 'Festival Folclórico de Parintins in Amazonas',
      caption: 'Spectacular Boi-Bumbá pageantry inside the Bumbódromo on Parintins Island.',
      credit: 'Wikimedia Commons / Cultura Amazônica',
      aspectRatio: 'landscape'
    }
  ],
  featuredVideo: {
    id: 'north-video',
    youtubeId: '-53mGJ4h5sQ',
    title: 'Amazon in 4K — The World’s Largest Tropical Rainforest',
    description: 'High-altitude 4K aerial cinematography exploring the blackwater tributaries, flooded igapó forests, and biodiversity of the Brazilian Amazon.',
    duration: '30:12',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/1280px-Amazon17_%285641020319%29.jpg'
  },
  landmarks: [
    {
      id: 'lm-teatro-amazonas',
      name: 'Teatro Amazonas',
      nativeName: 'Teatro Amazonas',
      city: 'Manaus',
      state: 'AM',
      regionId: 'north',
      coordinates: [-3.1303, -60.0234],
      category: 'architecture',
      isUnesco: false,
      description: 'Inaugurated in 1896 at the height of the Rubber Boom, this Belle Époque opera house features a dome clad in 36,000 glazed Alsatian ceramic tiles in the colors of the Brazilian republic and Carrara marble staircases.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Amazon_Theatre%2C_Teatro_Amazonas._Manaus%2C_Brazil._03.jpg/960px-Amazon_Theatre%2C_Teatro_Amazonas._Manaus%2C_Brazil._03.jpg',
      highlightFact: 'Ships carried Italian marble, Scottish cast iron, and Parisian chandeliers 1,500 km upriver from the Atlantic.'
    },
    {
      id: 'lm-encontro-das-aguas',
      name: 'Encontro das Águas',
      nativeName: 'Encontro das Águas',
      city: 'Manaus',
      state: 'AM',
      regionId: 'north',
      coordinates: [-3.1367, -59.9056],
      category: 'nature',
      isUnesco: false,
      description: 'A hydrological phenomenon where the dark, humic-acid-rich waters of the Rio Negro flow side by side with the pale, sediment-laden waters of the Rio Solimões for over six kilometers without mixing.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Encontro_das_%C3%81guas_-_Manaus.jpg/1280px-Encontro_das_%C3%81guas_-_Manaus.jpg',
      highlightFact: 'The two rivers remain distinct due to differences in flow velocity (2 km/h vs 6 km/h), temperature (28°C vs 22°C), and acidity.'
    },
    {
      id: 'lm-monte-roraima',
      name: 'Monte Roraima',
      nativeName: 'Tepui Roraima',
      city: 'Uiramutã',
      state: 'RR',
      regionId: 'north',
      coordinates: [5.1433, -60.7625],
      category: 'nature',
      isUnesco: false,
      description: 'An ancient Precambrian sandstone tabletop mountain (tepui) rising 2,810 meters through perpetual clouds at the triple border of Brazil, Venezuela, and Guyana, sacred to the Pemón and Macuxi peoples.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Roraima-Tepui_Wand.jpg/960px-Roraima-Tepui_Wand.jpg',
      highlightFact: 'Its isolated 31-square-kilometer summit plateau harbors endemic carnivorous plants and quartz crystal valleys over 1.8 billion years old.'
    },
    {
      id: 'lm-alter-do-chao',
      name: 'Alter do Chão',
      nativeName: 'Alter do Chão',
      city: 'Santarém',
      state: 'PA',
      regionId: 'north',
      coordinates: [-2.5056, -54.9536],
      category: 'nature',
      isUnesco: false,
      description: 'Known as the "Caribbean of the Amazon," Alter do Chão reveals kilomètres of powdery white quartz sandbars emerging from the crystal-clear blue-green waters of the Tapajós River during the dry season.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Por_do_sol_na_Praia_de_Alter_do_Ch%C3%A3o_Santar%C3%A9m_Par%C3%A1_Brasil.jpg/960px-Por_do_sol_na_Praia_de_Alter_do_Ch%C3%A3o_Santar%C3%A9m_Par%C3%A1_Brasil.jpg',
      highlightFact: 'Home to the centuries-old Sairé festival, blending Borari indigenous river rituals with Portuguese folkloric pageantry.'
    },
    {
      id: 'lm-parque-nacional-jau',
      name: 'Parque Nacional do Jaú',
      nativeName: 'Complexo de Conservação da Amazônia Central',
      city: 'Novo Airão',
      state: 'AM',
      regionId: 'north',
      coordinates: [-2.1667, -62.5000],
      category: 'nature',
      isUnesco: true,
      description: 'Spanning 2.3 million hectares of intact blackwater river ecosystems and igapó flooded forests, Jaú National Park forms the core of the Central Amazon Conservation Complex UNESCO World Heritage Site.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg/960px-Corredeiras_no_Parque_Nacional_do_Ja%C3%BA_-_Amaz%C3%B4nia_-_Brasil.jpg',
      highlightFact: 'Protects critical habitats for the Amazonian manatee, black caiman, arapaima, and pink river dolphin.'
    },
    {
      id: 'lm-fortaleza-sao-jose',
      name: 'Fortaleza de São José de Macapá',
      nativeName: 'Fortaleza de São José',
      city: 'Macapá',
      state: 'AP',
      regionId: 'north',
      coordinates: [0.0298, -51.0494],
      category: 'heritage',
      isUnesco: false,
      description: 'Constructed between 1764 and 1782 in Vauban star-fortress geometry directly on the Equator line to guard the northern mouth of the Amazon River against French, Dutch, and British incursions.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Fortaleza_de_S%C3%A3o_Jos%C3%A9%2C_Macap%C3%A1-AP.jpg/960px-Fortaleza_de_S%C3%A3o_Jos%C3%A9%2C_Macap%C3%A1-AP.jpg',
      highlightFact: 'Situated just meters from Marco Zero, where visitors can stand simultaneously in the Northern and Southern hemispheres.'
    }
  ],
  modules: {
    geography: {
      headline: 'The Continental River Sea & Equatorial Canopy',
      overview:
        'Covering 45% of Brazilian national territory across 3.85 million square kilometers, the North is defined by the Amazon Basin—the planet’s largest hydrographic network and tropical rainforest. Here, geography is dictated not by roads, but by the seasonal pulse of floodwaters (cheia and vazante) across three distinct forest strata: unflooded terra firme uplands, fertile whitewater várzea floodplains, and mystical blackwater igapós.',
      biomes: [
        {
          name: 'Amazônia (Amazon Rainforest)',
          coveragePercentage: 92,
          description:
            'The largest intact tropical forest on Earth, housing an estimated 10% of all known biodiversity and recycling 20 billion tons of water vapor daily into atmospheric flying rivers.',
          keyFauna: ['Onça-pintada (Jaguar)', 'Boto-cor-de-rosa (Pink River Dolphin)', 'Harpia (Harpy Eagle)', 'Pirarucu (Arapaima)', 'Peixe-boi-da-amazônia (Amazonian Manatee)'],
          keyFlora: ['Samaúma (Kapok Giant)', 'Castanheira-do-pará (Brazil Nut Tree)', 'Vitória-régia (Giant Water Lily)', 'Seringueira (Rubber Tree)', 'Açaizeiro']
        },
        {
          name: 'Cerrado & Lavrado Transitions (Tocantins & Roraima)',
          coveragePercentage: 8,
          description:
            'Open savanna formations in Tocantins (Jalapão golden dune plateaus) and the northern Guiana Shield grasslands (Lavrado of Roraima) bordering ancient tepui table mountains.',
          keyFauna: ['Lobo-guará (Maned Wolf)', 'Tamanduá-bandeira (Giant Anteater)', 'Arara-azul (Hyacinth Macaw)'],
          keyFlora: ['Capim-dourado (Golden Grass)', 'Buriti Palm', 'Ipê-amarelo']
        }
      ],
      topography: {
        highestPoint: 'Pico da Neblina (Serra do Imeri)',
        elevationMeters: 2995,
        terrainSummary:
          'A vast sedimentary lowland basin (100m–200m elevation) flanked to the north by the crystalline Guiana Shield—where Brazil’s highest peaks, Pico da Neblina (2,995m) and Pico 31 de Março (2,974m), pierce equatorial clouds—and to the south by the Brazilian Central Plateau.',
        majorFormations: ['Planície Amazônica (Amazon Lowland)', 'Planalto das Guianas (Guiana Shield & Tepuis)', 'Chapada das Mangabeiras & Jalapão (Tocantins)']
      },
      hydrology: {
        majorBasins: ['Bacia Amazônica (Amazon Basin)', 'Bacia do Tocantins-Araguaia'],
        riverSystemSummary:
          'Discharging 209,000 cubic meters of freshwater per second into the Atlantic—20% of the entire world’s river discharge—the Amazon system features three water chemistries: muddy, nutrient-rich whitewaters (Solimões, Madeira), tea-colored acidic blackwaters (Negro), and crystalline green clearwaters (Tapajós, Xingu).'
      },
      climate: {
        classification: 'Köppen Af (Equatorial Rainforest) & Am (Equatorial Monsoon)',
        temperatureRange: '24°C – 33°C (Minimal annual thermal amplitude of ~2°C)',
        annualRainfallMm: 2800,
        characteristics:
          'Perpetually warm and humid with relative humidity averaging 80%–90%. Rather than winter and summer, locals divide the year into the "rainy winter" (December–May) when rivers rise up to 15 meters, and the "Amazonian summer" (June–November) when white river beaches emerge.'
      },
      environmentalChallenges: [
        'Combating illegal deforestation and land grabbing along the southern "Arc of Deforestation"',
        'Protecting indigenous territories and riverine ecosystems from illegal gold mining (garimpo) and mercury contamination',
        'Scaling a high-value standing-forest bioeconomy that rewards local guardians for carbon and biodiversity stewardship'
      ],
      keyStats: [
        { label: 'Share of National Territory', value: '45.2% (3.85M km²)' },
        { label: 'Freshwater Share', value: '20% of Global River Discharge' },
        { label: 'Highest Peak in Brazil', value: 'Pico da Neblina (2,995 m)' },
        { label: 'Cataloged Tree Species', value: '16,000+ (390 Billion Trees)' }
      ]
    },
    history: {
      headline: 'Millennia of Indigenous Civilization & The Belle Époque Rubber Fever',
      overview:
        'Long before European caravels entered the Rio Mar in 1541, the Amazon supported complex indigenous societies of millions who engineered fertile terra preta (dark anthropogenic soils) and vast geoglyphs in Acre. Later shaped by Portuguese river fortresses, the fierce Cabanagem popular revolution, and the opulent late-19th-century Rubber Boom, the North remains Brazil’s deepest link to its ancestral indigenous and ribeirinho soul.',
      indigenousHeritage: {
        ancestralPeoples: ['Yanomami', 'Tikuna', 'Kayapó (Mẽbêngôkre)', 'Munduruku', 'Ashaninka', 'Macuxi', 'Baniwa', 'Wajãpi'],
        culturalContinuity:
          'Home to over 180 distinct indigenous peoples speaking more than 150 languages across demarcation zones covering over 23% of the Amazon region. Indigenous agronomy gave humanity cassava (mandioca), cacao, guaraná, açaí, Brazil nuts, and natural rubber (hevea brasiliensis).',
        currentDemographics: 'Over 750,000 Indigenous citizens reside in the North—representing nearly 45% of Brazil’s total Indigenous population.'
      },
      colonialAndImperialEra: {
        period: '1616 (Founding of Belém) – 1912 (End of the First Rubber Boom)',
        economicDrivers: ['Drogas do Sertão (Forest spices, cacao, vanilla)', 'Latex / Natural Rubber (Ciclo da Borracha)', 'Jute & River Navigation'],
        historicalNarrative:
          'Founded in 1616 with Forte do Presépio in Belém to expel French and Dutch traders, the Grão-Pará and Rio Negro captaincies were long governed directly from Lisbon rather than Rio de Janeiro. Between 1879 and 1912, the global monopoly on vulcanized rubber turned Manaus and Belém into the wealthiest cities in South America—boasting electric trams, French avenue cafés, and the Teatro Amazonas before British plantation seeds smuggled to Malaya broke the monopoly.'
      },
      afroBrazilianHeritage: {
        culturalLegacy:
          'Enslaved Africans brought to work sugar, rice, and cacao plantations in Grão-Pará established vibrant riverine quilombos along the Trombetas, Erepecuru, and Tocantins rivers.',
        quilomboHistory:
          'Quilombola communities in Pará (such as Pacoval and Oriximiná) forged a unique alliance with indigenous peoples, mastering rapids navigation and forest extraction.',
        influenceOnIdentity:
          'Visible today in the syncopated drums of Carimbó, the Afro-indigenous Marabaixo cycle of Amapá, and syncretic Pajelança healing rituals.'
      },
      immigrationWaves: [
        {
          origin: 'Northeastern Brazil (Ceará & Sertão — Os Soldados da Borracha)',
          period: '1877–1912 & 1942–1945',
          settlementAreas: ['Acre', 'Amazonas', 'Rondônia'],
          contribution:
            'Hundreds of thousands of Northeasterners fled severe droughts to tap rubber trees in the deep jungle, securing Acre for Brazil (Treaty of Petrópolis, 1903) and supplying Allied rubber during World War II.'
        },
        {
          origin: 'Japan (Tomé-Açu Agricultural Colony)',
          period: '1929–1950s',
          settlementAreas: ['Tomé-Açu (Pará)', 'Parintins (Amazonas)'],
          contribution:
            'Pioneered black pepper cultivation in Pará and developed the world-renowned SAF (Successional Agroforestry System) combining cacao, cupuaçu, and hardwood trees.'
        },
        {
          origin: 'Sephardic Moroccan Jews & Levantine Merchants',
          period: '1850–1920',
          settlementAreas: ['Belém', 'Manaus', 'Óbidos', 'Itacoatiara'],
          contribution:
            'Established river trading networks (regatões) across the Amazon Basin, leaving historic synagogues and commercial houses in Belém and Manaus.'
        }
      ],
      milestones: [
        {
          yearOrEra: '1616',
          title: 'Founding of Santa Maria de Belém do Grão-Pará',
          description: 'Portuguese expedition led by Francisco Caldeira Castelo Branco establishes Forte do Presépio at the mouth of the Amazon.',
          significance: 'Secured Portuguese sovereignty over the Amazon Basin ahead of rival European powers.'
        },
        {
          yearOrEra: '1835–1840',
          title: 'Revolta da Cabanagem',
          description: 'Indigenous people, caboclos, and freed Black citizens seize power in Belém against imperial elites.',
          significance: 'One of the most profound popular uprisings in Brazilian history, where common forest dwellers briefly governed a province.'
        },
        {
          yearOrEra: '1896',
          title: 'Inauguration of Teatro Amazonas',
          description: 'Grand opening in Manaus with Ponchielli’s opera La Gioconda during the zenith of the Rubber Boom.',
          significance: 'Symbolized the cosmopolitan Gilded Age transformation of the Amazonian metropolis.'
        },
        {
          yearOrEra: '1988',
          title: 'Chico Mendes & The Extractive Reserve Movement',
          description: 'Rubber tapper union leader Chico Mendes unites forest dwellers and indigenous leaders in Acre before his assassination.',
          significance: 'Birthed the global concept of Sustainable Extractive Reserves (RESEX) and modern socio-environmentalism.'
        }
      ],
      demographicProfile: {
        urbanRatePercentage: 78.5,
        dominantHeritage: 'Caboclo / Ribeirinho (Indigenous-European-African synthesis) & Indigenous',
        summaryMetrics: [
          { label: 'Regional Population', value: '18.67 Million' },
          { label: 'Largest Metropolis', value: 'Manaus (2.25M) & Belém (2.5M Metro)' },
          { label: 'Indigenous Population Share', value: '44.8% of Brazil’s Total' }
        ]
      }
    },
    culture: {
      headline: 'Operatic Jungle Pageantry, Carimbó Drums & River Mythology',
      overview:
        'Northern culture is a spellbinding dialogue between the forest and the river. From the thunderous arena duels of Boi Garantido and Boi Caprichoso on the island of Parintins to the coastal whirling skirts of Pará’s Carimbó and the two-million-strong Marian devotion of Círio de Nazaré, the Amazon celebrates life on a mythic scale.',
      festivals: [
        {
          name: 'Festival Folclórico de Parintins (Boi-Bumbá)',
          period: 'Last weekend of June',
          location: 'Parintins, Amazonas (Bumbódromo)',
          description:
            'A three-night operatic spectacle where the island splits cleanly into two rival camps—red (Boi Garantido, the bull of the heart on the forehead) and blue (Boi Caprichoso, the bull of the star). Colossal 20-meter articulated floats, indigenous rituals, and 400-piece percussion sections compete without speaking a word to the opposing color.',
          highlight: 'Recognized by UNESCO as Intangible Cultural Heritage; rival fans refuse even to buy brands carrying the opposing team’s color during June.'
        },
        {
          name: 'Círio de Nazaré',
          period: 'Second Sunday of October',
          location: 'Belém, Pará',
          description:
            'Known as the "Christmas of the Amazon," over two million pilgrims walk through the mango-tree-lined avenues of Belém following the diminutive wooden statue of Our Lady of Nazareth, clinging to a 400-meter sisal rope (A Corda) in fulfillment of sacred vows.',
          highlight: 'Features the Romaria Fluvial—hundreds of decorated riverboats escorting the saint across Guajará Bay—followed by the traditional family Almoço do Círio.'
        },
        {
          name: 'Festa do Sairé (Çairé)',
          period: 'Mid-September',
          location: 'Alter do Chão (Santarém), Pará',
          description:
            'A 300-year-old celebration originating from Borari indigenous welcoming ceremonies along the Tapajós River, blending sacred processions of a ribbon-bedecked wooden arch with the theatrical duel of the Pink and Tucuxi river dolphins (Festival dos Botos).',
          highlight: 'Celebrates Amazonian river ecology and the mythical transformation of the boto dolphin.'
        }
      ],
      musicAndDance: [
        {
          genre: 'Carimbó',
          originEra: '18th Century (Marajó Island & Salgado Coast, Pará)',
          traditionalInstruments: ['Curimbó (hollowed tree-trunk drums played sitting astride)', 'Banjo Amazônico', 'Maracas', 'Flauta de Madeira'],
          keyPioneers: ['Verequete', 'Mestre Cupijó', 'Pinduca', 'Dona Onete'],
          description:
            'An infectious Afro-indigenous rhythm and courtship dance where women in voluminous floral skirts whirl and attempt to throw a handkerchief over their partner’s head, mimicking the movements of coastal birds and fishes.'
        },
        {
          genre: 'Guitarrada & Tecnobrega',
          originEra: '1970s (Guitarrada) / 2000s (Tecnobrega in Belém)',
          traditionalInstruments: ['Clean Electric Guitar with Caribbean reverb', 'Synthesizers', 'Giant Aparelhagem Sound Systems'],
          keyPioneers: ['Mestre Vieira', 'Aldo Sena', 'Gaby Amarantos', 'Gang do Eletro'],
          description:
            'Pará’s musical port absorbed Caribbean merengue, cumbia, and calypso via shortwave radio, giving birth to guitar-driven Guitarrada and later Tecnobrega—an electrifying electronic sound-system culture born in Belém’s periphery.'
        },
        {
          genre: 'Toada de Boi-Bumbá',
          originEra: '20th Century (Amazonas)',
          traditionalInstruments: ['Palminhas', 'Surdo', 'Repique', 'Rocar', 'Charango'],
          keyPioneers: ['Chico da Silva', 'Arlindo Júnior', 'David Assayag', 'Israel Paulain'],
          description:
            'Epic, anthemic percussion compositions celebrating Amazonian indigenous nations, forest preservation, and river legends.'
        }
      ],
      traditions: [
        {
          title: 'Cerâmica Marajoara & Tapajônica',
          type: 'Craft',
          description:
            'Intricate geometric and anthropomorphic pottery tradition dating back over 1,500 years on Marajó Island, using labyrinthine incisions and natural slip pigments.'
        },
        {
          title: 'Artesanato em Capim Dourado (Golden Grass)',
          type: 'Craft',
          description:
            'In the Jalapão region of Tocantins, Quilombola artisans weave the naturally metallic-gold stems of Syngonanthus nitens with buriti palm silk into luminous baskets, jewelry, and hats.'
        },
        {
          title: 'Banhos de Cheiro no Ver-o-Peso',
          type: 'Ritual',
          description:
            'Herbalists (erveiras) at Belém’s historic 1625 Ver-o-Peso market prepare fragrant infusions of priprioca, patchouli, and catinga-de-mulata roots to attract good fortune and heal the spirit.'
        }
      ],
      folklore: [
        {
          entity: 'O Boto Cor-de-Rosa (The Pink River Dolphin)',
          lore:
            'During riverside June festivals, the Amazon pink dolphin emerges from the blackwaters disguised as a dashing young man in a crisp white linen suit and panama hat—worn low to conceal the blowhole on the crown of his head—who enchants young women on the dance floor before diving back into the river before dawn.'
        },
        {
          entity: 'Curupira (Guardian of the Canopy)',
          lore:
            'A flame-haired forest spirit whose feet are turned backward—leaving footprints that lead poachers and loggers deeper into the jungle labyrinth while he protects trees and wildlife.'
        },
        {
          entity: 'Cobra-Grande (Boiúna) & Vitória-Régia',
          lore:
            'Legend tells of Naiá, an indigenous maiden so entranced by the Moon god Jaci that she dove into the reflection of a midnight lake and was transformed into the giant starry water lily, Vitória-régia, whose white blossoms turn blush pink at sunrise.'
        }
      ]
    },
    gastronomy: {
      headline: 'The Untamed Pantry: Tucupi, Jambu & Freshwater Giants',
      overview:
        'Celebrated by international chefs as the most original and authentically indigenous cuisine in the Americas, Northern gastronomy revolves around ingenious ancestral chemistry—transforming toxic wild bitter cassava juice into golden culinary gold (tucupi) and pairing it with the electric tingling sensation of jambu flowers and colossal river fish.',
      philosophy:
        'Amazonian cuisine honors the seasonal rhythms of the forest and river without European dairy or wheat, relying on fermented cassava derivatives (tucupi, farinha d’água, goma), aromatic herbs (chicória, alfavaca), and sustainable wild fruits.',
      signatureDishes: [
        {
          name: 'Duck in Tucupi Broth with Jambu',
          portugueseName: 'Pato no Tucupi',
          type: 'Main',
          originState: 'Pará',
          description:
            'The crown jewel of Belém’s festive table, especially during the Círio de Nazaré. Free-range duck is roasted with garlic and chicória, carved, and slow-simmered in golden fermented tucupi broth topped with generous bunches of jambu leaves and served alongside crunchy farinha d’água de Bragança.',
          keyIngredients: ['Free-range Duck', 'Tucupi (fermented wild cassava broth)', 'Jambu (Acmella oleracea)', 'Chicória-do-Pará', 'Alfavaca'],
          culturalSignificance: 'Considered the sacred Sunday and Círio de Nazaré feast dish of Pará families.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/BrunaBrandao_Pato_no_Tucupi_Belem_PA_%2826185651117%29.jpg/960px-BrunaBrandao_Pato_no_Tucupi_Belem_PA_%2826185651117%29.jpg'
        },
        {
          name: 'Tacacá in a Cuia Gourd',
          portugueseName: 'Tacacá',
          type: 'Street Food',
          originState: 'Pará / Amazonas',
          description:
            'Served piping hot at late-afternoon street corners by tacacazeiras dressed in crisp white lace, this restorative soup layers translucent sour tapioca gum, boiling seasoned tucupi, mouth-numbing jambu flowers, and smoky salted dried river prawns inside a polished calabash gourd.',
          keyIngredients: ['Tucupi', 'Goma de Tapioca', 'Jambu Leaves & Flowers', 'Camarão Seco (Salted River Shrimp)', 'Pimenta de Cheiro'],
          culturalSignificance: 'Eaten hot even on 33°C afternoons using a tiny wooden toothpick—never a spoon—directly from the gourd.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Tacac%C3%A1_soup_at_Tacac%C3%A1_do_Renato%2C_Bel%C3%A9m%2C_Brazil_03.jpg/960px-Tacac%C3%A1_soup_at_Tacac%C3%A1_do_Renato%2C_Bel%C3%A9m%2C_Brazil_03.jpg'
        },
        {
          name: 'Shredded Pirarucu Bake',
          portugueseName: 'Pirarucu de Casaca',
          type: 'Main',
          originState: 'Amazonas',
          description:
            'Prepared with cured fillets of the giant Pirarucu—the "cod of the Amazon," which can reach 3 meters and 200 kg—layered with golden fried plantains (banana-pacovã), buttery farofa d’água, coconut milk, and fresh herbs.',
          keyIngredients: ['Sun-dried Pirarucu Fish', 'Banana-da-Terra (Plantain)', 'Farinha do Uarini', 'Coconut Milk', 'Bell Peppers'],
          culturalSignificance: 'Showcases community-managed sustainable lake fishing that rescued the pirarucu from extinction.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Lan%C3%A7amento_do_Festival_Gosto_da_Amaz%C3%B4nia_%2851384927913%29.jpg/960px-Lan%C3%A7amento_do_Festival_Gosto_da_Amaz%C3%B4nia_%2851384927913%29.jpg'
        },
        {
          name: 'Seven-Day Cassava Leaf Stew',
          portugueseName: 'Maniçoba',
          type: 'Main',
          originState: 'Pará',
          description:
            'Often called the "Amazonian Feijoada," Maniçoba replaces black beans with finely ground wild cassava leaves (maniva) that must be boiled continuously for seven full days to eliminate natural hydrocyanic acid before smoked pork cuts and sausages are added.',
          keyIngredients: ['Maniva (Ground Cassava Leaves)', 'Smoked Pork Ribs', 'Paio & Chouriço', 'Salted Beef', 'Farinha d’Água'],
          culturalSignificance: 'A triumph of indigenous food science that turns a poisonous leaf into a velvety, deeply savory delicacy.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/BrunaBrandao_Manicoba_Belem_PA_%2841014496962%29.jpg/960px-BrunaBrandao_Manicoba_Belem_PA_%2841014496962%29.jpg'
        }
      ],
      nativeIngredients: [
        {
          name: 'Jambu (Erva-de-Tremor)',
          indigenousOrScientificName: 'Acmella oleracea',
          tasteProfile: 'Herbaceous and grassy, followed within seconds by an effervescent, champagne-like tingling numbness across the lips and tongue.',
          traditionalUsage: 'Rich in spilanthol; essential in Tacacá, Pato no Tucupi, and artisanal Amazonian cachaças.'
        },
        {
          name: 'Tucupi',
          indigenousOrScientificName: 'Manihot esculenta extract',
          tasteProfile: 'Bright, citrusy, umami-rich, and gently fermented sourness with golden turmeric hues.',
          traditionalUsage: 'Extracted by pressing grated wild bitter cassava in a woven tipiti press, resting for starch separation, and boiling with garlic and chicória.'
        },
        {
          name: 'Açaí Tradicional do Norte',
          indigenousOrScientificName: 'Euterpe oleracea',
          tasteProfile: 'Earthy, nutty, velvety, and unsweetened with notes of dark cacao and olive oil.',
          traditionalUsage: 'Unlike southern sweet frozen bowls, locals in Belém consume fresh room-temperature açaí as a savory main course alongside fried fish or charque and crunchy tapioca.'
        },
        {
          name: 'Cupuaçu & Bacuri',
          indigenousOrScientificName: 'Theobroma grandiflorum / Platonia insignis',
          tasteProfile: 'Intensely aromatic tropical pulp balancing creamy white-chocolate richness with bright passionfruit acidity.',
          traditionalUsage: 'Whipped into mousses, artisanal sorbets, and compotes across Belém and Manaus.'
        }
      ],
      traditionalBeverages: [
        {
          name: 'Cachaça de Jambu',
          description: 'Artisanal sugarcane spirit infused with jambu blossoms that leaves a pleasant electric tingle on the palate.',
          alcoholic: true
        },
        {
          name: 'Guaraná de Maués (Ralado na Língua do Pirarucu)',
          description: 'Pure roasted guaraná sticks from the Sateré-Mawé indigenous territory, traditionally grated against the rough dried tongue bone of the pirarucu fish into cold water.',
          alcoholic: false
        },
        {
          name: 'Suco de Taperebá (Cajá) & Cupuaçu',
          description: 'Fragrant, vitamin-rich nectars pressed from wild forest fruits.',
          alcoholic: false
        }
      ],
      streetFoodCulture:
        'At Belém’s Ver-o-Peso market and Manaus’s Adolpho Lisboa market, dawn breaks with riverboats unloading baskets of açaí and pirarucu, while afternoon squares fill with the aroma of boiling tucupi at tacacá stalls and crispy Uarini tapioca pancakes.'
    },
    economy: {
      headline: 'Green Industrial Hub, Carajás Minerals & The Standing-Forest Bioeconomy',
      overview:
        'The Northern economy balances two powerful engines: the high-tech tax-free manufacturing hub of the Manaus Free Trade Zone (Zona Franca de Manaus) and the world’s richest mineral and biological reserves in Pará. Today, the region is pioneering a 21st-century bioeconomy that transforms non-timber forest products—açaí, cosmetics, carbon credits, and biopharmaceuticals—into sustainable global value.',
      gdpContributionPercent: 6.3,
      leadingSectors: [
        {
          sector: 'Polo Industrial de Manaus (ZFM — Electronics & Two-Wheelers)',
          regionalHubs: ['Manaus (AM)'],
          contributionGdpPercentage: 42,
          description:
            'Established in 1967 to create an urban economic alternative to deforestation, the Manaus Industrial Pole houses over 500 corporations (Honda, Yamaha, Samsung, LG, Sony) generating over USD 30 billion annually in motorcycles, televisions, air conditioners, and microelectronics.'
        },
        {
          sector: 'High-Grade Mineral Extraction (Serra dos Carajás)',
          regionalHubs: ['Parauapebas (PA)', 'Canaã dos Carajás (PA)', 'Barcarena (PA)'],
          contributionGdpPercentage: 31,
          description:
            'Operated in southeastern Pará, the Carajás Mineral Province holds the highest-purity iron ore deposits on Earth (~67% Fe content), alongside major copper, bauxite, aluminum, and manganese complexes.'
        },
        {
          sector: 'Amazonian Bioeconomy, Cosmetics & Agroforestry',
          regionalHubs: ['Belém (PA)', 'Benevides (PA)', 'Castanhal (PA)', 'Rio Branco (AC)'],
          contributionGdpPercentage: 18,
          description:
            'Pará produces over 90% of global açaí supply—an industry exceeding USD 1.5 billion that keeps millions of palm trees standing. In Benevides (PA), Natura’s Ecoparque partners with over 40 extractivist cooperatives to turn ucuuba, murumuru, and andiroba oils into luxury global skincare.'
        }
      ],
      keyExports: [
        {
          commodity: 'High-Purity Iron Ore & Bauxite/Alumina',
          globalRank: '#1 Highest Grade Iron Ore Deposit Globally (Carajás)',
          keyMarkets: ['China', 'Japan', 'European Union', 'South Korea'],
          economicSignificance: 'Drives Pará to maintain one of the largest trade surpluses of any Brazilian state.'
        },
        {
          commodity: 'Açaí Pulp, Brazil Nuts (Castanha-do-Pará) & Black Pepper',
          globalRank: '#1 Global Producer of Açaí & Brazil Nuts',
          keyMarkets: ['United States', 'European Union', 'Japan', 'Australia'],
          economicSignificance: 'Provides direct livelihood to over 300,000 riverine (ribeirinho) and agroforestry families.'
        },
        {
          commodity: 'Sustainable Soy & Low-Carbon Grains (Arco Norte Ports)',
          globalRank: 'Fastest-Growing Maritime Grain Corridor in South America',
          keyMarkets: ['China', 'Western Europe', 'Middle East'],
          economicSignificance: 'Barge convoys along the Tapajós and Amazon rivers to Barcarena and Santana cut Atlantic shipping distances to Europe and Panama by 4 days.'
        }
      ],
      innovationAndFuture: {
        aviationOrTech:
          'CBA (Centro de Biotecnologia da Amazônia) in Manaus and Guamá Science & Technology Park in Belém are sequencing rainforest microbiomes for biodegradable polymers and pharmaceuticals.',
        renewableEnergy:
          'Home to the Belo Monte (11,233 MW) and Tucuruí (8,370 MW) hydroelectric complexes in Pará, alongside floating solar microgrids powering remote riverine communities.',
        sustainableAgribusiness:
          'Expansion of the Japanese-Brazilian Tomé-Açu Agroforestry System (SAFTA), regenerating degraded pastures with high-yield cacao, black pepper, açaí, and mahogany.'
      },
      economicStats: [
        { label: 'Manaus Industrial Pole Revenue', value: 'R$ 175+ Billion / Year' },
        { label: 'Global Açaí Market Share', value: '94% (Led by Pará)' },
        { label: 'Carajás Iron Ore Purity', value: '66.7% Fe (World Benchmark)' },
        { label: 'COP30 Host City (2025/2026 Legacy)', value: 'Belém do Pará' }
      ]
    },
    sports: {
      headline: 'Cradle of Jiu-Jitsu Champions, River Regattas & Indigenous Games',
      overview:
        'In the North, sporting passion flows from the tatami mats of Manaus—arguably the world’s highest per-capita incubator of Brazilian Jiu-Jitsu black belts and MMA champions—to the century-old Re-Pa football derby in Belém and traditional indigenous canoeing across flooded jungle waterways.',
      football: {
        cultureRole:
          'Belém hosts the legendary "Re-Pa" (Clube do Remo vs. Paysandu SC)—officially the most-played football derby in world history with over 770 matches since 1914. Meanwhile, Manaus’s Amazonas FC has surged into national prominence playing inside the World Cup-built Arena da Amazônia.',
        legendaryClubs: ['Paysandu Sport Club (Belém)', 'Clube do Remo (Belém)', 'Amazonas FC (Manaus)', 'Nacional FC (Manaus)', 'Tuna Luso Brasileira (Belém)'],
        iconicStadiums: [
          { name: 'Arena da Amazônia', city: 'Manaus (AM)', capacity: 44000 },
          { name: 'Estádio Olímpico do Pará (Mangueirão)', city: 'Belém (PA)', capacity: 53635 },
          { name: 'Estádio da Curuzu', city: 'Belém (PA)', capacity: 16200 }
        ],
        historicMoments: [
          'Paysandu defeating Argentine giants Boca Juniors 1–0 inside La Bombonera in the 2003 Copa Libertadores',
          'Arena da Amazônia hosting four memorable 2014 FIFA World Cup matches (including England vs. Italy) with a façade inspired by indigenous straw baskets',
          'Over 770 editions of the Clássico Rei da Amazônia (Remo vs. Paysandu), paralyzing Belém on derby Sundays'
        ],
        localDerbies: ['Clássico Re-Pa (Remo vs. Paysandu — 770+ matches)', 'Rio-Nal (Rio Negro vs. Nacional in Manaus)']
      },
      martialArts: [
        {
          discipline: 'Amazonian Brazilian Jiu-Jitsu (BJJ) & MMA',
          roots:
            'Introduced to Manaus in the 1970s by masters trained under the Gracie and Oswaldo Fadda lineages, BJJ fused with indigenous Luta Marajoara grappling traditions to create an aggressive, submission-oriented style.',
          philosophy: 'Relentless forward pressure, technical guard passing, and community social projects in Manaus neighborhoods.',
          renownedMasters: ['José Aldo (UFC Featherweight Legend)', 'Ronaldo "Jacaré" Souza', 'Saulo & Xande Ribeiro', 'Wallid Ismail', 'Deiveson Figueiredo (Soure, Marajó)']
        },
        {
          discipline: 'Luta Marajoara (Huka-Huka & Traditional Grappling)',
          roots: 'Practiced on Marajó Island during Saint Sebastian festivals and buffalo ranch gatherings, blending indigenous and caboclo upright wrestling.',
          philosophy: 'Strength, balance, and respect on sandy riverbanks without strikes.',
          renownedMasters: ['Iuri Alcântara', 'Deiveson "Deus da Guerra" Figueiredo']
        }
      ],
      outdoorAndExtremeSports: [
        {
          sport: 'Jungle Ultra-Marathons & Canopy Expeditions',
          notableHotspots: ['Floresta Nacional do Tapajós (PA)', 'Presidente Figueiredo Waterfalls (AM)', 'Monte Roraima Trek (RR)'],
          description: 'Multi-day self-supported ultra-endurance footraces through 90% humidity, river crossings, and dense primary rainforest trails.'
        },
        {
          sport: 'Kitesurfing & River Regattas',
          notableHotspots: ['Alter do Chão (PA)', 'Ilha do Marajó (PA)', 'Ponta Negra (Manaus)'],
          description: 'Trade winds funneling up the Tapajós and Amazon rivers create premier freshwater kitesurfing and traditional wooden-canoe regattas.'
        }
      ],
      motorsportOrSkate: {
        narrative:
          'Tocantins and Pará host dramatic stages of the Sertões Rally across the golden dunes of Jalapão, while Belém and Manaus feature vibrant riverfront skateparks along the Estação das Docas and Ponta Negra.',
        icons: ['Jogos Mundiais dos Povos Indígenas (Palmas, TO)', 'Rally dos Sertões (Jalapão Stage)']
      }
    }
  }
};

const NORTHEAST_REGION: RegionData = {
  id: 'northeast',
  name: 'Nordeste',
  nameEnglish: 'Northeast',
  tagline: 'Cradle of Afro-Brazilian Soul, Golden Dunes & Sun-Drenched Joy',
  colorToken: '#C85A32',
  states: [
    { code: 'BA', name: 'Bahia', capital: 'Salvador' },
    { code: 'PE', name: 'Pernambuco', capital: 'Recife' },
    { code: 'CE', name: 'Ceará', capital: 'Fortaleza' },
    { code: 'MA', name: 'Maranhão', capital: 'São Luís' },
    { code: 'PB', name: 'Paraíba', capital: 'João Pessoa' },
    { code: 'RN', name: 'Rio Grande do Norte', capital: 'Natal' },
    { code: 'AL', name: 'Alagoas', capital: 'Maceió' },
    { code: 'SE', name: 'Sergipe', capital: 'Aracaju' },
    { code: 'PI', name: 'Piauí', capital: 'Teresina' }
  ],
  areaKm2: 1554291,
  population: 54658515,
  populationPercentageOfBrazil: 26.9,
  densityPerKm2: 36.91,
  climateOverview: 'Tropical Atlantic Coastal (As) & Semi-Arid Caatinga Interior (BSh) — 300+ sunny days per year',
  centerCoordinates: [-12.9714, -38.5014],
  coordinates: [-12.9714, -38.5014],
  bounds: [
    [-18.35, -48.75],
    [-1.05, -34.79]
  ],
  spotifyPlaylistId: '37i9dQZF1DWVl5B55l9H9P',
  heroImage: {
    id: 'northeast-hero',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/1280px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg',
    alt: 'White sand dunes and turquoise lagoons of Lençóis Maranhenses',
    caption: 'Wind-sculpted quartz sand dunes embracing seasonal turquoise rainwater lagoons in Lençóis Maranhenses.',
    credit: 'Wikimedia Commons / Maranhão Archive',
    aspectRatio: 'landscape'
  },
  gallery: [
    {
      id: 'ne-gal-1',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg/1280px-Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg',
      alt: 'Pastel colonial architecture in Pelourinho, Salvador',
      caption: 'Vibrant pastel baroque facades lining the cobblestone slopes of Pelourinho in Salvador da Bahia.',
      credit: 'Wikimedia Commons / Bahia Heritage',
      aspectRatio: 'portrait'
    },
    {
      id: 'ne-gal-2',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/1280px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg',
      alt: 'Lençóis Maranhenses dunes and lagoons',
      caption: 'Over 1,500 square kilometers of sweeping white dunes and crystal lagoons in Maranhão.',
      credit: 'Wikimedia Commons / Geodiversity Series',
      aspectRatio: 'landscape'
    },
    {
      id: 'ne-gal-3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
      alt: 'Baía dos Porcos and Morro Dois Irmãos in Fernando de Noronha',
      caption: 'Emerald volcanic waters of Baía dos Porcos in the Fernando de Noronha archipelago.',
      credit: 'Wikimedia Commons / Eduardo Muruci',
      aspectRatio: 'portrait'
    },
    {
      id: 'ne-gal-4',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Acaraje-Baiana.jpg/960px-Acaraje-Baiana.jpg',
      alt: 'Traditional Bahian Acarajé prepared in dendê oil',
      caption: 'Traditional Afro-Brazilian Acarajé with vatapá and dried shrimp in Salvador da Bahia.',
      credit: 'Wikimedia Commons / Gastronomy Bahia',
      aspectRatio: 'landscape'
    },
    {
      id: 'ne-gal-5',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg/1280px-Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg',
      alt: 'Historic colonial church towers in Olinda overlooking Recife',
      caption: '16th-century baroque church spires and palm trees in the UNESCO historic center of Olinda.',
      credit: 'Wikimedia Commons / Pernambuco Heritage',
      aspectRatio: 'landscape'
    }
  ],
  featuredVideo: {
    id: 'northeast-video',
    youtubeId: 'hDq1wqcjNZA',
    title: 'Salvador, Bahia & The Northeastern Coast in 4K Ultra HD',
    description: 'Sweeping 4K drone journey over Salvador’s Farol da Barra, the baroque cobblestones of Pelourinho, and the coral reefs of the Northeastern littoral.',
    duration: '10:24',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg/1280px-Centro_Hist%C3%B3rico_Salvador_Vista_A%C3%A9rea_2021-0933.jpg'
  },
  landmarks: [
    {
      id: 'lm-pelourinho-salvador',
      name: 'Pelourinho & Elevador Lacerda',
      nativeName: 'Centro Histórico de Salvador',
      city: 'Salvador',
      state: 'BA',
      regionId: 'northeast',
      coordinates: [-12.9714, -38.5113],
      category: 'heritage',
      isUnesco: true,
      description: 'Founded in 1549 as Brazil’s first capital, Salvador’s upper historic district dazzles with pastel-painted 17th-century mansions, the gold-leaf-drenched Igreja de São Francisco, and the rhythmic thunder of Olodum percussion.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/960px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG',
      highlightFact: 'The 72-meter Art Deco Elevador Lacerda connects the upper colonial cliffside (Cidade Alta) to the lower port market (Cidade Baixa) in 30 seconds.'
    },
    {
      id: 'lm-lencois-maranhenses',
      name: 'Parque Nacional dos Lençóis Maranhenses',
      nativeName: 'Lençóis Maranhenses',
      city: 'Barreirinhas',
      state: 'MA',
      regionId: 'northeast',
      coordinates: [-2.4859, -43.1284],
      category: 'nature',
      isUnesco: true,
      description: 'Inscribed as a UNESCO World Heritage Site in 2024, this surreal coastal desert receives 1,600mm of equatorial rain each year, trapping thousands of warm, emerald and turquoise freshwater lagoons between 40-meter barchan dunes.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg/960px-Dunas_e_lagoas_dos_Len%C3%A7ois_Maranhenses_%28cropped%29.jpg',
      highlightFact: 'Despite looking like a desert, it receives three times more rainfall than the Sahara, forming temporary lagoons like Lagoa Azul and Lagoa Bonita.'
    },
    {
      id: 'lm-fernando-de-noronha',
      name: 'Arquipélago de Fernando de Noronha',
      nativeName: 'Fernando de Noronha',
      city: 'Fernando de Noronha',
      state: 'PE',
      regionId: 'northeast',
      coordinates: [-3.8547, -32.4297],
      category: 'nature',
      isUnesco: true,
      description: 'A volcanic oceanic archipelago 350 km off the Northeastern coast, celebrated for Baía do Sancho—repeatedly voted the world’s best beach—and protected breeding waters for spinner dolphins and hawksbill turtles.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg/960px-EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg',
      highlightFact: 'Strict ecological quotas cap daily visitor numbers to preserve 70% of the island chain as an untouched National Marine Park.'
    },
    {
      id: 'lm-centro-historico-olinda',
      name: 'Centro Histórico de Olinda',
      nativeName: 'Cidade Alta de Olinda',
      city: 'Olinda',
      state: 'PE',
      regionId: 'northeast',
      coordinates: [-8.0089, -34.8553],
      category: 'culture',
      isUnesco: true,
      description: 'Perched atop verdant hills overlooking Recife and the Atlantic, Olinda blends 16th-century Franciscan convents, lush tropical gardens, artisan ateliers, and the world’s most exuberant street Frevo carnival.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg/960px-Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg',
      highlightFact: 'Famous for the Bonecos Gigantes de Olinda—4-meter-tall papier-mâché puppets that dance through steep cobblestone alleys.'
    },
    {
      id: 'lm-chapada-diamantina',
      name: 'Chapada Diamantina & Morro do Pai Inácio',
      nativeName: 'Parque Nacional da Chapada Diamantina',
      city: 'Palmeiras / Lençóis',
      state: 'BA',
      regionId: 'northeast',
      coordinates: [-12.4608, -41.4725],
      category: 'nature',
      isUnesco: false,
      description: 'A dramatic 1,520-km² highland sanctuary in the heart of Bahia featuring table-top mesas (tepuis), the 340-meter Cachoeira da Fumaça waterfall, and subterranean flooded caves like Poço Encantado where sunbeams turn water cobalt blue.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Chapada_diamantina.jpg/960px-Chapada_diamantina.jpg',
      highlightFact: 'Once the site of a 19th-century diamond rush centered on the preserved stone town of Lençóis.'
    },
    {
      id: 'lm-ponta-do-seixas',
      name: 'Ponta do Seixas & Farol do Cabo Branco',
      nativeName: 'Ponta do Seixas',
      city: 'João Pessoa',
      state: 'PB',
      regionId: 'northeast',
      coordinates: [-7.1517, -34.7931],
      category: 'geography' as any,
      isUnesco: false,
      description: 'At longitude 34°47\'35" W, Ponta do Seixas marks the easternmost tip of the entire American continent—"Where the Sun Rises First"—crowned by the sisal-inspired triangular Cabo Branco Lighthouse.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Ponta_do_Seixas_Jo%C3%A3o_Pessoa.jpg/960px-Ponta_do_Seixas_Jo%C3%A3o_Pessoa.jpg',
      highlightFact: 'Located just 2,800 km across the South Atlantic narrows from the western coast of Africa.'
    }
  ],
  modules: {
    geography: {
      headline: 'Coral Reefs, Wind-Swept Dunes & The Resilient Caatinga Sertão',
      overview:
        'Divided into nine states—the most of any Brazilian macro-region—the Northeast spans four classic geographic sub-zones moving inland from the Atlantic: the lush coastal Zona da Mata, the hilly transitional Agreste, the vast semi-arid Sertão dominated by the uniquely Brazilian Caatinga biome, and the palm-fringed Meio-Norte transition toward the Amazon.',
      biomes: [
        {
          name: 'Caatinga (White Forest — 100% Exclusive to Brazil)',
          coveragePercentage: 54,
          description:
            'From the Tupi word meaning "white forest," the Caatinga is the world’s most biodiverse semi-arid ecosystem. Leafless silver-barked trees and towering cacti appear dormant during the dry months, only to explode into emerald green foliage within 48 hours of the first rains.',
          keyFauna: ['Ararinha-azul (Spix’s Macaw)', 'Tatu-bola (Three-banded Armadillo)', 'Veado-catingueiro', 'Asa-branca Dove'],
          keyFlora: ['Mandacaru Cactus', 'Juazeiro', 'Umbuzeiro (Sacred Tree of the Sertão)', 'Xique-Xique', 'Carnaúba (Tree of Life)']
        },
        {
          name: 'Mata Atlântica Costeira, Restingas & Manguezais',
          coveragePercentage: 18,
          description:
            'Over 3,300 kilometers of warm tropical shoreline lined with sandstone barrier reefs (recifes), coconut groves, estuaries, and the dune-lagoon ecosystems of Maranhão and Ceará.',
          keyFauna: ['Peixe-boi-marinho (West Indian Manatee)', 'Golfinho-rotador (Spinner Dolphin)', 'Tartaruga-de-pente (Hawksbill Turtle)', 'Guará (Scarlet Ibis)'],
          keyFlora: ['Pau-Brasil (Caesalpinia echinata)', 'Coqueiro-da-Bahia', 'Cajueiro (home to the world’s largest cashew tree in Natal)']
        },
        {
          name: 'Cerrado & Chapadas (West Bahia, Piauí & Maranhão)',
          coveragePercentage: 28,
          description:
            'High-altitude sandstone tablelands (Chapada Diamantina, Serra da Capivara, Chapada das Mesas) feeding crystal rivers.',
          keyFauna: ['Onça-parda (Puma)', 'Tamanduá-mirim', 'Mocó'],
          keyFlora: ['Sempre-vivas', 'Orquídeas Rupestres', 'Babaçu Palm']
        }
      ],
      topography: {
        highestPoint: 'Pico do Barbado (Chapada Diamantina, Bahia)',
        elevationMeters: 2033,
        terrainSummary:
          'Coastal plains backed by the Borborema Plateau (Planalto da Borborema) in Pernambuco and Paraíba—which blocks humid Atlantic trade winds to create the rain-shadow Sertão depression—and the dramatic 2,000-meter quartzitic mesas of Bahia’s Espinhaço-Chapada Diamantina range.',
        majorFormations: ['Chapada Diamantina (BA)', 'Planalto da Borborema (PE/PB/RN)', 'Cânions do Xingó (SE/AL)', 'Serra da Capivara (PI)']
      },
      hydrology: {
        majorBasins: ['Bacia do Rio São Francisco', 'Bacia do Parnaíba', 'Bacia do Atlântico Nordeste Oriental'],
        riverSystemSummary:
          'Anchored by the 2,830-kilometer Rio São Francisco ("O Velho Chico"), the perennial river of national integration that rises in Minas Gerais and carves through the semi-arid Sertão before emptying into the Atlantic between Alagoas and Sergipe.'
      },
      climate: {
        classification: 'Köppen As (Tropical Coastal with Summer Dry Season) & BSh (Hot Semi-Arid Interior)',
        temperatureRange: '22°C – 36°C (Constant equatorial trade winds along the coast)',
        annualRainfallMm: 1600,
        characteristics:
          'The coastal strip enjoys warm seas (27°C) and steady trade winds with autumn/winter rains (April–July), whereas the interior Sertão averages 400mm–800mm of irregular rainfall concentrated between January and April.'
      },
      environmentalChallenges: [
        'Mitigating multi-year drought cycles and desertification nuclei in the semi-arid Sertão via cistern engineering and the São Francisco River Integration Project',
        'Preserving endemic Caatinga species and coral reef ecosystems (such as Abrolhos and Costa dos Corais) against ocean warming',
        'Ensuring sustainable community integration around booming wind and solar energy parks'
      ],
      keyStats: [
        { label: 'Atlantic Coastline', value: '3,338 km (Longest in Brazil)' },
        { label: 'States in Macro-Region', value: '9 Federal States' },
        { label: 'Exclusive Brazilian Biome', value: 'Caatinga (844,453 km²)' },
        { label: 'Annual Sunshine', value: '3,000+ Hours / Year' }
      ]
    },
    history: {
      headline: 'The Birthplace of Brazil, Quilombo Resistance & The Sertanejo Epic',
      overview:
        'It was off the southern coast of Bahia at Monte Pascoal on April 22, 1500, that Pedro Álvares Cabral’s fleet made landfall. For the next two and a half centuries, the Northeast was the economic, political, and intellectual center of Portuguese America—forged by the wealth of sugarcane mills (engenhos), the profound resilience of the African diaspora, the heroic century-long freedom of Quilombo dos Palmares, and the indomitable spirit of the Sertanejo people.',
      indigenousHeritage: {
        ancestralPeoples: ['Tupinambá', 'Potiguara', 'Pataxó', 'Fulni-ô', 'Xukuru', 'Kariri', 'Tremembé'],
        culturalContinuity:
          'At Serra da Capivara National Park in Piauí, over 1,000 prehistoric rock-art shelters preserve paintings dating back 25,000+ years—revolutionizing the archaeology of early human presence in the Americas. Today, the Fulni-ô of Pernambuco preserve their native Yaathe language and sacred Ouricuri rituals.',
        currentDemographics: 'Over 520,000 Indigenous citizens reside in the Northeast, led by revitalized territories in Bahia, Pernambuco, and Ceará.'
      },
      colonialAndImperialEra: {
        period: '1500 (Cabral’s Landfall in Porto Seguro) – 1763 (Transfer of Capital from Salvador to Rio)',
        economicDrivers: ['Pau-Brasil (Brazilwood Red Dye)', 'Sugarcane Plantations (Ciclo do Açúcar)', 'Cotton & Tobacco', 'Inland Cattle Ranching (Civilização do Couro)'],
        historicalNarrative:
          'Salvador served as Brazil’s first capital from 1549 to 1763, while Pernambuco became the richest sugar producer on Earth. Between 1630 and 1654, the Dutch West India Company captured Recife; under Governor Count Johan Maurits of Nassau, Mauritsstad boasted the Americas’ first astronomical observatory, botanical garden, bridges, and synagogue (Kahal Zur Israel, 1636) before Luso-Afro-Indigenous forces united at the Battles of Guararapes (1648–1649) to birth the Brazilian national army.'
      },
      afroBrazilianHeritage: {
        culturalLegacy:
          'Salvador da Bahia is widely honored as the "Black Rome of the Americas." Millions of enslaved Yoruba, Fon (Jeje), and Bantu people preserved their cosmology in Candomblé terreiros, syncretizing Orishas (Iemanjá, Xangô, Oxalá) with Catholic saints.',
        quilomboHistory:
          'Deep in the forested ridges of Serra da Barriga (Alagoas), freedom fighters established Quilombo dos Palmares—an independent federation of up to 20,000 inhabitants that defeated dozens of colonial military expeditions for nearly 100 years under Ganga Zumba, Dandara, and Zumbi dos Palmares (martyred November 20, 1695—now celebrated nationally as Black Consciousness Day).',
        influenceOnIdentity:
          'Shaped Brazil’s vocabulary, rhythmic architecture, culinary mastery, Capoeira, and struggles for abolition (such as the 1835 Malê Revolt in Salvador and Ceará becoming the first province to abolish slavery in 1884).'
      },
      immigrationWaves: [
        {
          origin: 'West & Central Africa (Yoruba / Nagô, Fon / Jeje, Angola / Bantu)',
          period: '1550–1850',
          settlementAreas: ['Recôncavo Baiano (Salvador, Cachoeira)', 'Zona da Mata (Pernambuco)', 'São Luís (Maranhão)'],
          contribution:
            'The foundational cultural matrix of Northeastern music, religion, language, architecture, and gastronomy.'
        },
        {
          origin: 'Portugal, Netherlands & Sephardic New Christians',
          period: '1530–1700',
          settlementAreas: ['Olinda', 'Recife', 'Salvador', 'São Luís', 'Penedo'],
          contribution:
            'Left world-heritage azulejo tile facades in São Luís, baroque churches in Salvador and Olinda, and the first Jewish congregation in the Americas in Recife.'
        }
      ],
      milestones: [
        {
          yearOrEra: '1500 & 1549',
          title: 'Portuguese Landfall & Founding of Salvador',
          description: 'Cabral reaches Porto Seguro (1500) and Tomé de Souza establishes Salvador as the first capital of Brazil (1549).',
          significance: 'Initiated the administrative, architectural, and cultural formation of Brazil.'
        },
        {
          yearOrEra: '1597–1695',
          title: 'República de Palmares (Zumbi & Dandara)',
          description: 'Nearly a century of autonomous free African governance in Serra da Barriga, Alagoas.',
          significance: 'Eternal beacon of Black liberation and resistance across the Western Hemisphere.'
        },
        {
          yearOrEra: '1817 & 1823',
          title: 'Revolução Pernambucana & Dois de Julho in Bahia',
          description: 'Republican uprising in Recife (1817) and the popular war in Bahia ending July 2, 1823, where heroes like Maria Quitéria and Joana Angélica expelled the last Portuguese troops.',
          significance: 'Consolidated true Brazilian independence on the battlefield.'
        },
        {
          yearOrEra: '1896–1938',
          title: 'Canudos & The Era of Cangaço',
          description: 'Antônio Conselheiro’s egalitarian community at Belo Monte (chronicled in Euclides da Cunha’s masterpiece Os Sertões) and the nomadic social banditry of Lampião and Maria Bonita.',
          significance: 'Immortalized the resilience, leather aesthetic, and dramatic folklore of the Sertão.'
        }
      ],
      demographicProfile: {
        urbanRatePercentage: 73.1,
        dominantHeritage: 'Afro-Brazilian (Salvador is 80%+ Black/Pardo) & Sertanejo Luso-Indigenous',
        summaryMetrics: [
          { label: 'Regional Population', value: '57.37 Million (2nd Most Populous)' },
          { label: 'Major Metropolises', value: 'Fortaleza, Salvador, Recife (3.7M–4.1M Metro each)' },
          { label: 'UNESCO World Heritage Sites', value: '8 Sites (Salvador, Olinda, São Luís, Capivara, Noronha, Lençóis...)' }
        ]
      }
    },
    culture: {
      headline: 'The Rhythmic Heartbeat of Brazil: Frevo, Forró, Axé & Bumba Meu Boi',
      overview:
        'Almost every iconic symbol of Brazilian joy has roots in the Northeast. Here, culture is lived in public squares: from the hypnotic polyrhythms of Olodum and Ilê Aiyê in Salvador to the gravity-defying umbrella acrobatics of Recife’s Frevo, the accordion-fueled bonfires of São João in Campina Grande and Caruaru, and the literary woodcut poetry of Literatura de Cordel.',
      festivals: [
        {
          name: 'Carnaval de Salvador & Recife-Olinda',
          period: 'February / March (Pre-Lent)',
          location: 'Salvador (BA), Recife & Olinda (PE)',
          description:
            'Two radically passionate street carnivals: in Salvador, giant Trio Elétrico sound trucks invented by Dodô and Osmar lead millions along the Barra-Ondina coast alongside majestic Afro-blocos (Ilê Aiyê, Filhos de Gandhy, Olodum). In Recife and Olinda, Carnival is 100% free and unroped—opening with Galo da Madrugada (over 2 million people) and filling Olinda’s hills with brass Frevo orchestras and Maracatu nations.',
          highlight: 'Holds Guinness World Records for the largest street carnivals on the planet.'
        },
        {
          name: 'Festas Juninas (São João de Campina Grande & Caruaru)',
          period: 'Entire Month of June',
          location: 'Campina Grande (PB), Caruaru (PE), Mossoró (RN), Interior of Bahia',
          description:
            'Celebrating the harvest and Saints Anthony, John, and Peter, the entire Northeast transforms into an open-air village of brightly colored bunting flags, bonfires, roasted corn cakes (pamonha), and synchronized Quadrilha square-dance competitions.',
          highlight: 'Campina Grande and Caruaru duel annually for the title of "O Maior São João do Mundo," drawing over 3 million visitors each across 30 consecutive nights of Forró.'
        },
        {
          name: 'Bumba Meu Boi do Maranhão & Lavagem do Bonfim',
          period: 'June–July (Maranhão) / January (Salvador)',
          location: 'São Luís (MA) & Salvador (BA)',
          description:
            'In Maranhão, Bumba Meu Boi is a UNESCO-listed musical theatre pageant of velvet-embroidered bull figures danced in distinct sotaques (Matraca, Zabumba, Orquestra). In Salvador, the Lavagem do Bonfim gathers Baianas in starched white lace to wash the steps of Bonfim Church with scented lavender water.',
          highlight: 'Unites Catholic devotion, Yoruba Oxalá blessings, and indigenous folklore.'
        }
      ],
      musicAndDance: [
        {
          genre: 'Forró, Baião & Xote',
          originEra: '1940s National Boom (Rural Sertão Roots)',
          traditionalInstruments: ['Sanfona (8-bass or 120-bass Accordion)', 'Zabumba (double-headed bass drum)', 'Triângulo'],
          keyPioneers: ['Luiz Gonzaga ("O Rei do Baião")', 'Jackson do Pandeiro', 'Dominguinhos', 'Marinês', 'Elba Ramalho', 'Alceu Valença'],
          description:
            'With just an accordion, zabumba, and triangle, Luiz Gonzaga translated the longing and joy of the drought-stricken Sertão ("Asa Branca") into Brazil’s most beloved partner dance music.'
        },
        {
          genre: 'Axé, Samba-Reggae & Tropicalismo',
          originEra: '1967 (Tropicália) / 1980s (Samba-Reggae & Axé in Bahia)',
          traditionalInstruments: ['Surdo Virado', 'Repique', 'Timbal', 'Guitarra Baiana'],
          keyPioneers: ['Caetano Veloso', 'Gilberto Gil', 'Maria Bethânia', 'Gal Costa', 'Neguinho do Samba (Olodum)', 'Carlinhos Brown', 'Ivete Sangalo', 'Daniela Mercury'],
          description:
            'Bahia birthed both the revolutionary 1960s Tropicália movement (fusing Brazilian roots with psychedelic rock and avant-garde poetry) and the percussive explosion of Samba-Reggae and Axé.'
        },
        {
          genre: 'Frevo, Maracatu & Manguebeat',
          originEra: 'Late 19th Century (Frevo) / 17th Century (Maracatu) / 1990s (Manguebeat)',
          traditionalInstruments: ['Brass Section (Trumpets, Trombones)', 'Alfaia (Macaíba wood drums)', 'Agbê (beaded gourds)'],
          keyPioneers: ['Capiba', 'Naná Vasconcelos', 'Lia de Itamaracá (Ciranda)', 'Chico Science & Nação Zumbi'],
          description:
            'Pernambuco’s hyper-kinetic brass Frevo incorporates Capoeira legwork with colorful mini-umbrellas (sombrinhas), while in the 1990s Chico Science fused heavy Maracatu alfaia drums with funk, rock, and hip-hop to create Manguebeat.'
        }
      ],
      traditions: [
        {
          title: 'Literatura de Cordel & Xilogravura (Woodcut Prints)',
          type: 'Craft',
          description:
            'Rhymed chapbooks printed with bold hand-carved woodblock illustrations (mastered by J. Borges in Pernambuco) and hung from twine strings (cordéis) in street markets, recounting epic tales of romance, politics, and folklore.'
        },
        {
          title: 'Renda de Bilros & Renda Renascença',
          type: 'Craft',
          description:
            'Exquisite bobbin and needle lacework crafted by coastal women in Ceará, Paraíba, and Alagoas, turning cotton thread into museum-grade garments.'
        },
        {
          title: 'Arte Figurativa de Mestre Vitalino (Alto do Moura)',
          type: 'Craft',
          description:
            'In Caruaru (PE)—recognized by UNESCO as the largest figurative clay art center in the Americas—artisans sculpt expressive terracotta scenes of Sertanejo daily life.'
        }
      ],
      folklore: [
        {
          entity: 'Iemanjá (Rainha do Mar — Queen of the Ocean)',
          lore:
            'Every February 2 at Rio Vermelho in Salvador, fishermen and hundreds of thousands of devotees dressed in white launch wooden boats filled with white roses, mirrors, and lavender soap into the Atlantic waves as offerings to the Yoruba mother of the seas.'
        },
        {
          entity: 'Lampião, Maria Bonita & The Cangaceiros',
          lore:
            'Wearing upturned leather hats adorned with gold stars and hand-stitched bandoliers to brave the thorny Caatinga, Virgulino Ferreira da Silva ("Lampião") and Maria Bonita became Robin Hood-like legends of the 1920s–30s backlands.'
        }
      ]
    },
    gastronomy: {
      headline: 'Sacred Dendê, Sun-Cured Meats & The Culinary Alchemy of Bahia and Sertão',
      overview:
        'Northeastern cuisine is a tale of two extraordinary kitchens: along the palm-lined coast of Bahia, West African culinary science reigns supreme with golden dendê palm oil, coconut milk, ginger, and malagueta chilies; inland across the Sertão, ingenious preservation methods created sun-cured beef (carne-de-sol), bottled clarified butter (manteiga-de-garrafa), and hearty cassava and corn feasts.',
      philosophy:
        'Food in the Northeast is both sacred ritual and resilient sustenance—where dishes like Acarajé originated as ceremonial offerings to the Orishas (comida de santo) and Sertanejo staples transform modest ingredients into unforgettable comfort.',
      signatureDishes: [
        {
          name: 'Bahian Seafood Stew in Clay Pot',
          portugueseName: 'Moqueca Baiana',
          type: 'Main',
          originState: 'Bahia',
          description:
            'Thick fillets of local sea bass (badejo or robalo) and wild prawns marinated in lime and garlic, layered with rings of sweet bell peppers, tomatoes, onions, and fresh cilantro inside a black clay pot, then bathed in rich coconut milk and golden azeite de dendê. Served bubbling with pirão (fish-broth manioc porridge) and white rice.',
          keyIngredients: ['Fresh Sea Fish & Shrimp', 'Azeite de Dendê (Red Palm Oil)', 'Leite de Coco (Fresh Coconut Milk)', 'Coentro (Cilantro)', 'Pimenta Malagueta'],
          culturalSignificance: 'Represents the harmonious fusion of indigenous clay-pot fish cooking (pokeka), Portuguese olive/garlic aromatics, and African dendê and coconut milk.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/MOQUECAB.jpg/960px-MOQUECAB.jpg'
        },
        {
          name: 'Black-Eyed Pea Fritter Stuffed with Vatapá & Shrimp',
          portugueseName: 'Acarajé da Bahia',
          type: 'Street Food',
          originState: 'Bahia',
          description:
            'Peeled black-eyed peas (feijão-fradinho) stone-ground with grated onion and salt, whipped with a wooden spoon until airy, and deep-fried in a cauldron of boiling dendê oil by Baianas do Acarajé. Split open hot, it is filled with creamy vatapá (spiced bread-nut-shrimp paste), okra caruru, crispy dried shrimp, and green tomato vinaigrette.',
          keyIngredients: ['Feijão-Fradinho (Black-Eyed Peas)', 'Azeite de Dendê', 'Vatapá (Cashew, Peanut, Ginger & Coconut Paste)', 'Caruru (Okra Stew)', 'Camarão Seco Defumado'],
          culturalSignificance: 'The craft of the Baianas de Acarajé was the very first culinary tradition inscribed as Intangible Cultural Heritage of Brazil by IPHAN.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Acaraje-Baiana.jpg/960px-Acaraje-Baiana.jpg'
        },
        {
          name: 'Two-Step Rice & Beans with Grilled Curd Cheese',
          portugueseName: 'Baião de Dois com Carne-de-Sol e Queijo Coalho',
          type: 'Main',
          originState: 'Ceará / Paraíba / Pernambuco',
          description:
            'Named after the Baião dance rhythm, green black-eyed peas (feijão-de-corda) and rice are cooked together in rich broth with smoky bacon, diced queijo coalho, cilantro, and scallions, crowned with tender slices of sun-cured beef drizzled in nutty manteiga-de-garrafa.',
          keyIngredients: ['Feijão-de-Corda (Cowpeas)', 'Queijo Coalho (Squeaky Curd Cheese)', 'Carne-de-Sol (Sun-Cured Beef)', 'Manteiga-de-Garrafa (Clarified Bottle Butter)', 'Macaxeira (Cassava)'],
          culturalSignificance: 'Immortalized in song by Luiz Gonzaga and Humberto Teixeira in 1946; the ultimate symbol of Sertanejo hospitality.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Bai%C3%A3o_de_Dois_%28superior_view%29.jpg/960px-Bai%C3%A3o_de_Dois_%28superior_view%29.jpg'
        },
        {
          name: 'Pernambuco Gossamer Guava Roll Cake',
          portugueseName: 'Bolo de Rolo',
          type: 'Dessert',
          originState: 'Pernambuco',
          description:
            'An adaptation of the Portuguese "colchão de noiva," featuring up to 12 paper-thin, delicate sponge layers rolled tightly around warm, tart melted guava paste (goiabada) and dusted with fine sugar crystals.',
          keyIngredients: ['Sheet Sponge Batter (Butter, Eggs, Sugar, Wheat)', 'Goiabada Artesanal (Red Guava Reduction)', 'Refined Sugar Coating'],
          culturalSignificance: 'Protected by law as Intangible Cultural and Gastronomic Heritage of Pernambuco.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg/960px-Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg'
        }
      ],
      nativeIngredients: [
        {
          name: 'Azeite de Dendê',
          indigenousOrScientificName: 'Elaeis guineensis',
          tasteProfile: 'Deeply savory, earthy, floral, and vividly saffron-orange with a velvety mouthfeel.',
          traditionalUsage: 'Brought from West Africa and cultivated along Bahia’s Dendê Coast (Camamu to Valença); the indispensable soul of Acarajé, Moqueca, Vatapá, and Bobó de Camarão.'
        },
        {
          name: 'Manteiga-de-Garrafa (Manteiga da Terra)',
          indigenousOrScientificName: 'Artisanal Clarified Cream Butter',
          tasteProfile: 'Intensely nutty, browned-milk aroma, golden liquid texture that stays stable at tropical room temperatures.',
          traditionalUsage: 'Poured generously over grilled carne-de-sol, boiled macaxeira, and steamed corn cuscuz.'
        },
        {
          name: 'Umbu, Caju & Cajá',
          indigenousOrScientificName: 'Spondias tuberosa / Anacardium occidentale',
          tasteProfile: 'Sweet-tart, refreshing, and intensely perfumed.',
          traditionalUsage: 'Umbu is cooked with warm milk and sugar to make Umbuzada in the Sertão; cashew apples yield Cajuína, a clarified amber non-alcoholic nectar in Piauí and Ceará.'
        }
      ],
      traditionalBeverages: [
        {
          name: 'Cajuína Cristalina do Piauí & Ceará',
          description: 'Clarified, caramelized, non-alcoholic juice of native cashew apples sterilized in glass bottles until it turns a luminous topaz amber—UNESCO/IPHAN Cultural Heritage.',
          alcoholic: false
        },
        {
          name: 'Capeta & Cravinho do Pelourinho',
          description: 'In Pelourinho’s historic taverns, cachaça is infused for months in oak casks with cloves (cravo-da-índia), cinnamon, honey, and guaraná.',
          alcoholic: true
        },
        {
          name: 'Caldo de Cana com Limão & Água de Coco Verde',
          description: 'Freshly pressed sugarcane juice and chilled green coconut water served along every beachfront barraca.',
          alcoholic: false
        }
      ],
      streetFoodCulture:
        'From dusk on Salvador’s street corners where copper pans of dendê sizzle with acarajé and abará, to Fortaleza’sTapiocarias serving crispy coconut-and-coalho tapiocas and Recife’s beach hawkers grilling queijo coalho over portable charcoal braziers.'
    },
    economy: {
      headline: 'Clean Wind & Solar Superpower, Irrigated Fruit Exports & Recife’s Porto Digital',
      overview:
        'Historically stereotyped as an agrarian backwater, the modern Northeast is undergoing a green-tech industrial renaissance. Powered by the world’s most consistent onshore wind corridors and high solar irradiance, the region generates over 85% of Brazil’s wind electricity, exports premium irrigated table fruits from the São Francisco Valley to Europe, and houses Brazil’s largest urban software park in Recife.',
      gdpContributionPercent: 14.2,
      leadingSectors: [
        {
          sector: 'Renewable Clean Energy (Wind, Solar & Green Hydrogen)',
          regionalHubs: ['Rio Grande do Norte', 'Bahia (Interior)', 'Ceará (Port of Pecém)', 'Piauí'],
          contributionGdpPercentage: 24,
          description:
            'The Northeast produces more than 85% of Brazil’s wind energy and leads utility-scale solar photovoltaics. At the Port of Pecém (CE) and Suape (PE), multibillion-dollar Green Hydrogen (H2V) industrial hubs are under development for European clean fuel export.'
        },
        {
          sector: 'Information Technology & Creative Economy (Porto Digital)',
          regionalHubs: ['Recife (PE)', 'Campina Grande (PB)', 'Salvador (BA)', 'Fortaleza (CE — Submarine Cable Hub)'],
          contributionGdpPercentage: 19,
          description:
            'Recife’s Porto Digital—built inside restored 17th-century island warehouses—hosts over 400 tech companies and 18,000 software engineers. Meanwhile, Fortaleza’s Praia do Futuro is the main submarine fiber-optic cable landing hub linking South America to Europe, Africa, and North America.'
        },
        {
          sector: 'Petrochemicals, Pulp & Automotive Manufacturing',
          regionalHubs: ['Camaçari (BA)', 'Goiana (PE — Stellantis Jeep Plant)', 'Imperatriz (MA)'],
          contributionGdpPercentage: 32,
          description:
            'Bahia’s Camaçari Industrial Complex (now transitioning to BYD electric vehicle manufacturing) and Pernambuco’s state-of-the-art Stellantis automotive plant in Goiana anchor advanced manufacturing.'
        }
      ],
      keyExports: [
        {
          commodity: 'Irrigated Tropical Fruits (Mangoes, Seedless Grapes & Melons)',
          globalRank: '95% of Brazil’s Total Table Grape & Mango Exports',
          keyMarkets: ['European Union (Rotterdam Hub)', 'United States', 'United Kingdom'],
          economicSignificance: 'In the semi-arid Petrolina (PE) / Juazeiro (BA) twin cities along the São Francisco River, drip irrigation and year-round sunshine allow up to 2.5 grape harvests per year and award-winning tropical syrah wines.'
        },
        {
          commodity: 'MATOPIBA Soybeans, Cotton & Corn',
          globalRank: 'Fastest-Growing Agricultural Frontier in the Tropics',
          keyMarkets: ['China', 'Southeast Asia', 'European Union'],
          economicSignificance: 'Western Bahia (Luís Eduardo Magalhães), southern Maranhão, and southern Piauí form the high-tech MATOPIBA grain belt, exported via the Port of Itaqui in São Luís.'
        },
        {
          commodity: 'Carnaúba Wax, Footwear & Specialty Cacao',
          globalRank: '#1 Global Supplier of Natural Carnaúba Wax (Piauí & Ceará)',
          keyMarkets: ['Germany', 'United States', 'Japan'],
          economicSignificance: 'Carnaúba palm wax is essential in global semiconductor coatings, pharmaceuticals, and confectionery, while southern Bahia (Ilhéus) leads bean-to-bar fine cabruca cacao.'
        }
      ],
      innovationAndFuture: {
        aviationOrTech:
          'ITA (Instituto Tecnológico de Aeronáutica) is establishing its first historic expansion campus at the Fortaleza Air Base in Ceará, focusing on renewable energy engineering and AI.',
        renewableEnergy:
          ' regularly achieves "100%+ renewable self-sufficiency" days where wind and solar output exceeds the entire Northeastern regional electricity demand, exporting clean gigawatts to the Southeast.',
        sustainableAgribusiness:
          'Bahia’s Cabruca Cacao system cultivates gourmet cocoa trees beneath the shade of native Atlantic Forest giants, preserving biodiversity corridors.'
      },
      economicStats: [
        { label: 'Share of Brazil’s Wind Power', value: '86%+ of National Output' },
        { label: 'Porto Digital Tech Workforce', value: '18,000+ Engineers (Recife)' },
        { label: 'Submarine Data Cables (Fortaleza)', value: '16 International Fiber Cables' },
        { label: 'São Francisco Valley Fruit Exports', value: 'USD 700M+ Annually' }
      ]
    },
    sports: {
      headline: 'The Roda of Capoeira, Kitesurfing Trade Winds & Roaring Nordestino Stadiums',
      overview:
        'In the Northeast, movement is both ancestral liberation and world-class athleticism. From the circular rodas of Capoeira on Salvador’s cobblestones to the trade-wind lagoons of Ceará where world kitesurfing records fall, and the deafening Copa do Nordeste football stadiums, sport here is inseparable from music and regional pride.',
      football: {
        cultureRole:
          'Northeastern football is renowned for the "Copa do Nordeste" (Lampions League)—the most fiercely contested regional tournament on Earth—where fanbases in Salvador, Recife, and Fortaleza create choreographed 3D stadium mosaics that rival European Champions League nights.',
        legendaryClubs: ['EC Bahia (Salvador)', 'EC Vitória (Salvador)', 'Sport Club do Recife (Recife)', 'Fortaleza EC (Fortaleza)', 'Ceará SC (Fortaleza)', 'Santa Cruz FC (Recife)', 'Náutico (Recife)'],
        iconicStadiums: [
          { name: 'Arena Fonte Nova', city: 'Salvador (BA)', capacity: 47907 },
          { name: 'Arena Castelão', city: 'Fortaleza (CE)', capacity: 63903 },
          { name: 'Estádio do Arruda & Arena de Pernambuco', city: 'Recife (PE)', capacity: 60044 },
          { name: 'Estádio da Ilha do Retiro', city: 'Recife (PE)', capacity: 26418 }
        ],
        historicMoments: [
          'EC Bahia winning the inaugural 1959 Taça Brasil over Pelé’s Santos to become the first Brazilian national champion in history',
          'Marta Vieira da Silva—born in Dois Riachos, Alagoas—being crowned FIFA World Player of the Year six times as the greatest footballer in women’s history',
          'Fortaleza EC reaching the Copa Sudamericana Final and turning Arena Castelão into a cauldron of 60,000 fans',
          'Bebeto, Rivaldo (Recife), Juninho Pernambucano, and Hulk rising from Northeastern pitches to global stardom'
        ],
        localDerbies: [
          'Ba-Vi (Bahia vs. Vitória in Salvador)',
          'Clássico-Rei (Ceará vs. Fortaleza in Fortaleza)',
          'Clássico das Multidões (Sport Recife vs. Santa Cruz in Recife)'
        ]
      },
      martialArts: [
        {
          discipline: 'Capoeira Angola & Capoeira Regional',
          roots:
            'Forged by enslaved Africans in the Recôncavo Baiano sugar mills and Salvador’s docks as a lethal martial art disguised within rhythmic dance, acrobatics, and call-and-response songs.',
          philosophy:
            'Governed by the twang of the single-stringed berimbau gourd bow. Mestre Pastinha codified traditional low-to-the-ground, philosophical Capoeira Angola, while Mestre Bimba created explosive, upright Capoeira Regional in 1932—convincing President Getúlio Vargas to decriminalize the art as Brazil’s true national sport.',
          renownedMasters: ['Mestre Bimba (Manuel dos Reis Machado)', 'Mestre Pastinha (Vicente Ferreira Pastinha)', 'Mestre João Grande', 'Mestre Suassuna']
        },
        {
          discipline: 'Olympic Boxing & Combat Heritage',
          roots: 'Salvador is the undisputed capital of Brazilian Olympic boxing, nurturing champions through community gyms across Bahia.',
          philosophy: 'Footwork, ginga head movement, and relentless counter-punching.',
          renownedMasters: ['Acelino "Popó" Freitas (4x World Champion)', 'Robson Conceição (Olympic Gold Medalist)', 'Hebert Conceição (Olympic Gold Medalist)', 'Beatriz Ferreira']
        }
      ],
      outdoorAndExtremeSports: [
        {
          sport: 'World Kitesurfing & Wingfoil Mecca',
          notableHotspots: ['Cumbuco & Taíba Lagoons (CE)', 'Jericoacoara & Preá (CE)', 'São Miguel do Gostoso (RN)', 'Barra Grande (PI)'],
          description:
            'Between July and January, steady 25–35 knot cross-onshore trade winds and warm 28°C water make the Ceará-Piauí-RN coastline ("Rota das Emoções") the premier downwind kitesurfing corridor on Earth.'
        },
        {
          sport: 'Oceanic Surfing & Cliff Trekking',
          notableHotspots: ['Baía Formosa (RN)', 'Cacimba do Padre (Fernando de Noronha, PE)', 'Itacaré (BA)'],
          description:
            'Home to tubular island barrels at Cacimba do Padre in Fernando de Noronha and Baía Formosa in Rio Grande do Norte—birthplace of Olympic Surfing Gold Medalist and World Champion Ítalo Ferreira.'
        }
      ],
      motorsportOrSkate: {
        narrative:
          'Salvador and Aracaju have produced Olympic skateboarding finalists (such as Pedro Barros’s coastal bowl circuits and Bahia’s street pioneers), while the coastal dunes of Rio Grande do Norte host precision rally navigation stages.',
        icons: ['Ítalo Ferreira (Olympic Gold Medalist, Baía Formosa RN)', 'Marta (6x FIFA Best Player, Dois Riachos AL)']
      }
    }
  }
};

const CENTER_WEST_REGION: RegionData = {
  id: 'center-west',
  name: 'Centro-Oeste',
  nameEnglish: 'Center-West',
  tagline: 'Cerrado Horizons, Modernist Capital & The Wildlife Floodplains',
  colorToken: '#D99B26',
  states: [
    { code: 'GO', name: 'Goiás', capital: 'Goiânia' },
    { code: 'MT', name: 'Mato Grosso', capital: 'Cuiabá' },
    { code: 'MS', name: 'Mato Grosso do Sul', capital: 'Campo Grande' },
    { code: 'DF', name: 'Distrito Federal', capital: 'Brasília' }
  ],
  areaKm2: 1606371,
  population: 16289538,
  populationPercentageOfBrazil: 8.0,
  densityPerKm2: 10.14,
  climateOverview: 'Tropical Continental (Aw) — High humidity wet season (Oct–Mar) and arid dry winter (May–Sep)',
  centerCoordinates: [-15.7975, -47.8919],
  coordinates: [-15.7975, -47.8919],
  bounds: [
    [-24.06, -61.63],
    [-7.34, -45.91]
  ],
  spotifyPlaylistId: '37i9dQZF1DWZBCP17jtaq4',
  heroImage: {
    id: 'cw-hero',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantanal%2C_south-central_South_America_5170.jpg',
    alt: 'Wetland birds and reflection in Pantanal flood basin',
    caption: 'Sunset reflecting across the flooded savanna plains of the Pantanal Mato-Grossense.',
    credit: 'Wikimedia Commons / Pantanal Archive',
    aspectRatio: 'landscape'
  },
  gallery: [
    {
      id: 'cw-gal-1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantanal%2C_south-central_South_America_5170.jpg',
      alt: 'Pantanal wildlife and wetlands',
      caption: 'The Pantanal floodplains—the dense concentration of wildlife in the Americas.',
      credit: 'Wikimedia Commons / Pantanal Wildlife',
      aspectRatio: 'landscape'
    },
    {
      id: 'cw-gal-2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg',
      alt: 'Brasilia modernist architectural skyline',
      caption: 'Oscar Niemeyer’s monument to democratic modernism along the Monumental Axis in Brasília.',
      credit: 'Wikimedia Commons / Modern Architecture',
      aspectRatio: 'landscape'
    },
    {
      id: 'cw-gal-3',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/1280px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
      alt: 'Golden savanna grasses and quartzite bluffs in Cerrado',
      caption: 'Ancient quartz bluffs and golden savannas in Chapada dos Veadeiros National Park.',
      credit: 'Wikimedia Commons / Cerrado Landscapes',
      aspectRatio: 'landscape'
    },
    {
      id: 'cw-gal-4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Catedral_Metropolitana_de_Brasilia.jpg',
      alt: 'Hyperbolic concrete pillars of the Cathedral of Brasilia',
      caption: 'Crown of 16 parabolic concrete columns designed by Oscar Niemeyer with stained glass by Marianne Peretti.',
      credit: 'Wikimedia Commons / Civic Heritage',
      aspectRatio: 'portrait'
    }
  ],
  featuredVideo: {
    id: 'cw-video',
    youtubeId: 'o2HY--a3vA4',
    title: '4K Drone Aerials of North Pantanal Brazil — Wildlife & Floodplains',
    description: 'Breathtaking 4K aerial documentary showcasing jaguars, jabiru storks, and winding river channels across the Pantanal flood basin.',
    duration: '12:18',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantanal%2C_south-central_South_America_5170.jpg'
  },
  landmarks: [
    {
      id: 'lm-praca-tres-poderes',
      name: 'Praça dos Três Poderes & Congresso Nacional',
      nativeName: 'Praça dos Três Poderes',
      city: 'Brasília',
      state: 'DF',
      regionId: 'center-west',
      coordinates: [-15.7997, -47.8645],
      category: 'architecture',
      isUnesco: true,
      description: 'The monumental civic plaza designed by Lúcio Costa and Oscar Niemeyer uniting the Executive (Palácio do Planalto), Judiciary (Supremo Tribunal Federal), and Legislative (Congresso Nacional) powers.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Bandeira_Brasileira_na_Pra%C3%A7a_dos_Tr%C3%AAs_Poderes%2C_vista_do_Pal%C3%A1cio_do_Planalto%2C_Bras%C3%ADlia%2C_Brasil_-_panoramio.jpg/960px-Bandeira_Brasileira_na_Pra%C3%A7a_dos_Tr%C3%AAs_Poderes%2C_vista_do_Pal%C3%A1cio_do_Planalto%2C_Bras%C3%ADlia%2C_Brasil_-_panoramio.jpg',
      highlightFact: 'The twin congressional towers and opposing domes (convex for the Chamber of Deputies, concave for the Senate) symbolize transparency and deliberation.'
    },
    {
      id: 'lm-catedral-brasilia',
      name: 'Catedral Metropolitana de Brasília',
      nativeName: 'Catedral Metropolitana Nossa Senhora Aparecida',
      city: 'Brasília',
      state: 'DF',
      regionId: 'center-west',
      coordinates: [-15.7983, -47.8756],
      category: 'architecture',
      isUnesco: true,
      description: 'A crown of 16 curved parabolic concrete columns weighing 90 tons each, reaching toward the sky with stained glass windows by Marianne Peretti spanning shades of cobalt blue, emerald, and white.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Catedral_Metropolitana_de_Brasilia.jpg/960px-Catedral_Metropolitana_de_Brasilia.jpg',
      highlightFact: 'Visitors enter through a dark subterranean tunnel before stepping into the main nave flooded with natural light.'
    },
    {
      id: 'lm-pantanal-matogrossense',
      name: 'Parque Nacional do Pantanal Mato-Grossense',
      nativeName: 'Parque Nacional do Pantanal',
      city: 'Poconé',
      state: 'MT',
      regionId: 'center-west',
      coordinates: [-17.6500, -57.4000],
      category: 'nature',
      isUnesco: true,
      description: 'The world’s largest freshwater wetland ecosystem covering over 150,000 square kilometers, harboring the highest concentration of jaguars (onça-pintada), capybaras, and caiman in the Americas.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Pantanal%2C_south-central_South_America_5170.jpg/960px-Pantanal%2C_south-central_South_America_5170.jpg',
      highlightFact: 'During the rainy season, over 80% of the entire landscape is submerged, creating a labyrinth of floating vegetation mats called camalotes.'
    },
    {
      id: 'lm-gruta-lago-azul',
      name: 'Gruta do Lago Azul',
      nativeName: 'Monumento Natural da Gruta do Lago Azul',
      city: 'Bonito',
      state: 'MS',
      regionId: 'center-west',
      coordinates: [-21.1444, -56.5889],
      category: 'nature',
      isUnesco: false,
      description: 'A colossal limestone cavern with stalactite formations dropping nearly 100 meters to a subterranean lake whose water turns an intense electric sapphire blue when morning sunlight enters the cavern mouth.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG/960px-Abismo_Anhumas%2C_Bonito%2C_MS.JPG',
      highlightFact: 'Divers and paleontologists discovered fossilized skeletons of Pleistocene giant ground sloths and saber-toothed cats resting on the lake bottom.'
    },
    {
      id: 'lm-chapada-veadeiros',
      name: 'Parque Nacional da Chapada dos Veadeiros',
      nativeName: 'Chapada dos Veadeiros',
      city: 'Alto Paraíso de Goiás',
      state: 'GO',
      regionId: 'center-west',
      coordinates: [-14.1333, -47.8167],
      category: 'nature',
      isUnesco: true,
      description: 'Ancient 1.8-billion-year-old crystalline quartz plateaus in the high Cerrado, celebrated for spectacular waterfalls (Saltos do Rio Preto), dramatic canyons, and natural rock pools.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg/960px-ChapadaVeadeiros%2C_Alto_Paraiso_GO.jpg',
      highlightFact: 'The high quartz concentration in the rock causes the plateau to shimmer luminously when viewed from low-orbit satellites.'
    },
    {
      id: 'lm-chapada-guimaraes',
      name: 'Parque Nacional da Chapada dos Guimarães',
      nativeName: 'Chapada dos Guimarães',
      city: 'Chapada dos Guimarães',
      state: 'MT',
      regionId: 'center-west',
      coordinates: [-15.4600, -55.7500],
      category: 'nature',
      isUnesco: false,
      description: 'Red sandstone escarpments, panoramic cliff lookouts (Mirante do Centro Geodésico), and the 86-meter free-falling Cachoeira Véu de Noiva waterfall surrounded by dense gallery forest.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Cachoeira_V%C3%A9u_de_Noiva.jpg/960px-Cachoeira_V%C3%A9u_de_Noiva.jpg',
      highlightFact: 'Marks the exact geodesic center of South America, equidistant from the Atlantic and Pacific oceans.'
    }
  ],
  modules: {
    geography: {
      headline: 'The Vast Savanna Water-Tower & The Pantanal Wetlands',
      overview:
        'Occupying 1.6 million square kilometers at the heart of South America, the Center-West is crowned by two monumental ecological realms: the Cerrado—the world’s most biodiverse tropical savanna, functioning as the continental water-tower that recharges eight of Brazil’s twelve major hydrographic basins—and the Pantanal, the planet’s largest continental floodplain.',
      biomes: [
        {
          name: 'Cerrado (The Inverted Forest & Continental Water Tower)',
          coveragePercentage: 62,
          description:
            'Characterized by twisted, thick-barked trees whose root systems penetrate up to 15 meters deep into the subsoil—acting like an enormous subterranean sponge that stores rainwater during summer downpours and feeds rivers throughout the dry winter.',
          keyFauna: ['Lobo-guará (Maned Wolf)', 'Tamanduá-bandeira (Giant Anteater)', 'Tatu-canastra (Giant Armadillo)', 'Veado-campeiro', 'Anta (Tapir)'],
          keyFlora: ['Pequizeiro', 'Buriti Palm', 'Baru Tree', 'Ipê-amarelo', 'Murici']
        },
        {
          name: 'Pantanal (The World’s Greatest Tropical Wetland)',
          coveragePercentage: 25,
          description:
            'A low-lying alluvial depression fed by the Paraguay River system that undergoes an annual flood pulse, creating a seasonal mosaic of lagoons, islands (cordilheiras), and meandering rivers.',
          keyFauna: ['Onça-pintada (Jaguar)', 'Tuiuiú (Jabiru Stork — Regional Symbol)', 'Capivara', 'Jacaré-do-pantanal', 'Arara-azul-grande'],
          keyFlora: ['Camalote (Water Hyacinth)', 'Acuri Palm', 'Carandá Palm', 'Vitória-régia']
        },
        {
          name: 'Amazônia Meridional (Northern Mato Grosso)',
          coveragePercentage: 13,
          description:
            'The transition zone where Cerrado savannas meet the primary tall-canopy Amazon Rainforest in the Teles Pires and Xingu headwaters.',
          keyFauna: ['Macaco-aranha (Spider Monkey)', 'Gavião-real (Harpy Eagle)'],
          keyFlora: ['Castanheira', 'Seringueira', 'Cedro']
        }
      ],
      topography: {
        highestPoint: 'Pouso Alto (Chapada dos Veadeiros, Goiás)',
        elevationMeters: 1676,
        terrainSummary:
          'Elevated sedimentary and crystalline plateaus (chapadas) with elevations between 600m and 1,600m dropping abruptly via sheer red sandstone cliffs into the vast, flat Pantanal lowland basin (elevations of 80m–120m).',
        majorFormations: ['Chapada dos Veadeiros (GO)', 'Chapada dos Guimarães (MT)', 'Planalto Central Brasileiro', 'Planície Pantaneira (MT/MS)', 'Serra da Bodoquena (MS)']
      },
      hydrology: {
        majorBasins: ['Bacia do Rio Paraguai (Pantanal)', 'Bacia do Paraná', 'Bacia do Tocantins-Araguaia', 'Bacia Amazônica (Xingu & Teles Pires)'],
        riverSystemSummary:
          'Because the Planalto Central sits at the hydrological rooftop of South America, rainwater falling around Brasília feeds rivers flowing north to the Amazon, northeast to the Tocantins, and south to the Rio de la Plata system.'
      },
      climate: {
        classification: 'Köppen Aw (Tropical Savanna with Dry Winter)',
        temperatureRange: '18°C – 38°C (Extreme seasonal contrast between wet summer and arid winter)',
        annualRainfallMm: 1550,
        characteristics:
          'A defined wet summer season (October–March) bringing convective downpours that flood the Pantanal, followed by a bone-dry winter (May–September) where relative humidity in Brasília and Goiânia can drop below 15%—resembling desert conditions.'
      },
      environmentalChallenges: [
        'Protecting the Cerrado’s deep root systems and headwaters from excessive mechanized agricultural clearing and erosion',
        'Controlling seasonal wildfires in the Pantanal wetlands during severe multi-year drought cycles',
        'Preserving karst springs and subterranean rivers in Bonito against agricultural runoff'
      ],
      keyStats: [
        { label: 'Cerrado Biodiversity', value: '11,000+ Plant Species (4,400 Endemic)' },
        { label: 'Pantanal Area', value: '150,000+ km² Wetland' },
        { label: 'Jaguar Density in Pantanal', value: 'Highest in the Americas' },
        { label: 'Hydrographic Water Recharging', value: 'Feeds 8 of 12 Brazilian Basins' }
      ]
    },
    history: {
      headline: 'Bandeirante Gold Trails, The Candango Epic & The Birth of Brasília',
      overview:
        'For centuries the untamed interior of Brazil was crossed only by indigenous nations and intrepid Bandeirante expeditions searching for gold and emeralds in the 18th century. In 1956, President Juscelino Kubitschek launched one of the most audacious urban feats in modern human history: constructing a utopian, forward-looking federal capital in the middle of the Cerrado in just 1,000 days.',
      indigenousHeritage: {
        ancestralPeoples: ['Xavante (A’uwẽ Uptabi)', 'Bororo', 'Karajá (Iny)', 'Kayapó', 'Terena', 'Kadiwéu', 'Guaraní-Kaiowá'],
        culturalContinuity:
          'The indigenous nations of the Araguaia River and Pantanal border developed sophisticated feather art (arte plumária), body painting, and ceremonial wrestling. The Parque Indígena do Xingu, created in 1961 by the Villas-Bôas brothers, was the first large indigenous territory demarcated in the Americas.',
        currentDemographics: 'Over 250,000 Indigenous citizens live across the Center-West, maintaining strong territorial and linguistic heritage.'
      },
      colonialAndImperialEra: {
        period: '1720s (Gold Discoveries in Goiás & Cuiabá) – 1956 (Start of Brasília Construction)',
        economicDrivers: ['Gold Mining (Minas dos Goyazes)', 'Cattle Driving (Tropeirismo & Comitivas)', 'Rubber Gathering along Guaporé'],
        historicalNarrative:
          'Gold strikes at Vila Boa de Goiás (Cidade de Goiás) and Cuiabá created wealthy baroque mining enclaves deep in the interior. Cattle drovers (peões pantaneiros) carved overland comitiva routes, driving thousands of Nelore cattle across flooded wetlands with berrante horns.'
      },
      afroBrazilianHeritage: {
        culturalLegacy:
          'Enslaved miners and cattle drovers established historic quilombos across Goiás and Mato Grosso, such as the Kalunga community in Cavalcante—the largest quilombola territory in Brazil, nestled inside the rugged canyons of Chapada dos Veadeiros.',
        quilomboHistory:
          'The Kalunga lived in isolation for nearly two centuries, preserving ancestral agricultural wisdom and festive traditions like the Romaria do Vão das Almas.',
        influenceOnIdentity:
          'Visible in regional percussion, the Cururu and Siriri folk dances of Cuiabá, and syncretic festivals honoring Saint Benedict.'
      },
      immigrationWaves: [
        {
          origin: 'The Candangos (Migrants from Northeastern Brazil)',
          period: '1956–1960',
          settlementAreas: ['Brasília (Taguatinga, Ceilândia, Gama, Núcleo Bandeirante)'],
          contribution:
            'Over 60,000 heroic laborers—overwhelmingly from the drought-hit Northeast—worked day and night shifts in the red dust of the Cerrado to build the ministries, cathedral, and highways of Brasília from scratch in under four years.'
        },
        {
          origin: 'Gaúcho & Southern Mechanized Farmers (Sulistas)',
          period: '1970s–1990s',
          settlementAreas: ['Northern Mato Grosso (Sorriso, Sinop, Lucas do Rio Verde)', 'Mato Grosso do Sul (Dourados)'],
          contribution:
            'Introduced limestone soil correction technology developed by Embrapa to transform the acidic Cerrado into the world’s most productive grain and soybean export corridor.'
        },
        {
          origin: 'Paraguayan & Bolivian Border Communities',
          period: '19th–20th Century',
          settlementAreas: ['Corumbá', 'Ponta Porã', 'Campo Grande'],
          contribution:
            'Infused southern Mato Grosso do Sul with bilingual Guaraní-Portuguese border culture, Sopa Paraguaya, and the ritual of Tereré.'
        }
      ],
      milestones: [
        {
          yearOrEra: '1727 & 1748',
          title: 'Founding of Vila Boa de Goyaz & Capitania de Goiás',
          description: 'Bartolomeu Bueno da Silva (the second Anhangüera) founds the colonial gold mining center of Goiás.',
          significance: 'Secured the Portuguese interior against Spanish expansion and birthed colonial inland architecture.'
        },
        {
          yearOrEra: '1864–1870',
          title: 'War of the Triple Alliance & Retirada da Laguna',
          description: 'Battles fought across Mato Grosso do Sul and the Paraguay River navigation corridor.',
          significance: 'Defined Brazil’s southwestern borders and forged the resilient identity of Pantaneiro soldiers.'
        },
        {
          yearOrEra: 'April 21, 1960',
          title: 'Inauguration of Brasília',
          description: 'President Juscelino Kubitschek officially inaugurates Brasília on Tiradentes Day.',
          significance: 'Completed the historic constitutional mandate to move the capital inland, shifting the geopolitical center of Brazil westward.'
        },
        {
          yearOrEra: '1987',
          title: 'Brasília Inscribed as UNESCO World Heritage',
          description: 'The Plano Piloto becomes the only 20th-century urban creation recognized as World Cultural Heritage by UNESCO.',
          significance: 'Global recognition of Lúcio Costa’s urbanism, Oscar Niemeyer’s architecture, and Burle Marx’s landscape design.'
        }
      ],
      demographicProfile: {
        urbanRatePercentage: 89.8,
        dominantHeritage: 'Candango-Northeastern, Luso-Indigenous Caboclo & Southern (Gaúcho) Migration',
        summaryMetrics: [
          { label: 'Regional Population', value: '16.29 Million' },
          { label: 'Federal Capital', value: 'Brasília (3.1M — 3rd Largest City in Brazil)' },
          { label: 'Urbanization Rate', value: '89.8% (Highly Concentrated in Metropolises)' }
        ]
      }
    },
    culture: {
      headline: 'Sertanejo Roots, The Cowboy Horn & The Cavalhadas Pageantry',
      overview:
        'Center-West culture is forged by the vast horizons of the interior: from the acoustic ten-string viola caipira ballads celebrating rural loyalty to the theatrical medieval horseback duels of Pirenópolis’s Cavalhadas, the vibrant Siriri dance of Mato Grosso, and the communal peace of ice-cold Tereré circles.',
      festivals: [
        {
          name: 'Cavalhadas de Pirenópolis (Festa do Divino Espírito Santo)',
          period: 'Pentecost (45–50 days after Easter)',
          location: 'Pirenópolis, Goiás',
          description:
            'A 200-year-old equestrian spectacle reenacting the medieval battles between Moorish and Christian knights. Over three days, masked riders (Mascarados) in vivid satin robes, bull masks, and paper flowers gallop through the streets accompanied by brass fanfares.',
          highlight: 'Recognized as Brazilian National Cultural Heritage, concluding with the dramatic conversion of the Moorish king to Christianity.'
        },
        {
          name: 'Festa do Peão de Barretos & Caldas Country Show',
          period: 'August / November',
          location: 'Interior of Goiás & Regional Rodeo Circuits',
          description:
            'Massive celebrations of cowboy culture, featuring professional bull riding, team roping competitions (prova de laço), and marathon concerts by Brazil’s biggest Sertanejo superstars.',
          highlight: 'Attracts hundreds of thousands of fans wearing leather boots, broad hats, and silver belt buckles.'
        },
        {
          name: 'Festival de Inverno de Bonito',
          period: 'July / August',
          location: 'Bonito, Mato Grosso do Sul',
          description:
            'A vibrant celebration of music, environmental education, theater, and indigenous visual arts against the backdrop of crystalline karst rivers.',
          highlight: 'Unites national MPB and indigenous Guaraní and Kadiwéu musical performances.'
        }
      ],
      musicAndDance: [
        {
          genre: 'Sertanejo de Raiz & Moda de Viola',
          originEra: '1920s (First recordings by Cornélio Pires)',
          traditionalInstruments: ['Viola Caipira (10-string acoustic guitar tuned to Cebolão)', 'Violão', 'Acordeom'],
          keyPioneers: ['Tião Carreiro & Pardinho', 'Almir Sater', 'Renato Teixeira', 'Tonico & Tinoco', 'Pena Branca & Xavantinho'],
          description:
            'The soulful, poetic ballads of the Brazilian interior. With dual vocal harmonies and virtuosic fingerpicking on the viola caipira, Moda de Viola chronicles cattle drives, heartbreaks, and reverence for the natural world.'
        },
        {
          genre: 'Sertanejo Universitário & Agronejo',
          originEra: '2000s–Present (Goiânia & Campo Grande)',
          traditionalInstruments: ['Electric Guitars', 'Modern Accordion', 'Synthesizers', 'Stadium Percussion'],
          keyPioneers: ['Jorge & Mateus', 'Zezé Di Camargo & Luciano', 'Chitãozinho & Xororó', 'Marília Mendonça (Rainha da Sofrência)', 'Luan Santana', 'Ana Castela'],
          description:
            'Goiânia and Campo Grande are the Nashville of South America—producing Brazil’s most dominant commercial music industry, filling 60,000-seat stadiums with anthems of young love, pickup trucks, and rural pride.'
        },
        {
          genre: 'Siriri & Cururu Pantaneiro',
          originEra: '18th Century (Cuiabá & Pantanal Riversides)',
          traditionalInstruments: ['Viola de Cocho (carved from a single wood block)', 'Ganzá (bamboo rattle)', 'Mocho (footstool drum)'],
          keyPioneers: ['Mestre Albertino', 'Flor Ribeirinha Dance Troupe (Cuiabá)'],
          description:
            'Joyous, high-energy folk dances where men and women form spinning lines, clapping and singing improvised verses to the syncopated rhythms of the unique Viola de Cocho.'
        }
      ],
      traditions: [
        {
          title: 'O Ritual do Tereré',
          type: 'Ritual',
          description:
            'In Mato Grosso do Sul, sharing ice-cold yerba mate (Ilex paraguariensis) steeped with herbs in a cured horn (guampa) and sipped through a silver bombilla is an essential daily gesture of friendship and community resilience against tropical heat.'
        },
        {
          title: 'A Cultura do Peão Pantaneiro e o Toque do Berrante',
          type: 'Celebration',
          description:
            'The cattle drovers of the Pantanal master the berrante (curved horn made of leather and steer horns) to signal cattle across flooded rivers with distinct melodic calls (toque de saída, rebate, chamada).'
        },
        {
          title: 'Artesanato em Barro de Pirenópolis e Tecelagem de Goiás',
          type: 'Craft',
          description:
            'Artisans weave raw cotton on antique wooden floor looms and mold red clay into decorative representations of local flora and colonial church facades.'
        }
      ],
      folklore: [
        {
          entity: 'O Minhocão do Pari',
          lore:
            'A gigantic serpentine beast believed to dwell in deep underwater caves along the Cuiabá River, whose thrashing movements collapse riverbanks and create sudden whirlpools that swallow unwary fishing skiffs.'
        },
        {
          entity: 'Pai do Mato (Guardian of the Cerrado)',
          lore:
            'A legendary hirsute forest giant with long claws and glowing eyes who mimics human cries to disorient poachers who hunt more animals than their families need for sustenance.'
        }
      ]
    },
    gastronomy: {
      headline: 'The Pungent Pequi of the Cerrado & Cowboy Trail Feasts',
      overview:
        'Gastronomy in the Center-West is hearty, bold, and intimately bound to the soil and the cattle trail. From the golden, intensely perfumed pequi fruit simmered with rice and free-range chicken to the rustic trail pasta (Macarrão de Comitiva) fried in iron skillets by Pantanal cattle drovers, the cuisine celebrates local native flora and cattle ranch heritage.',
      philosophy:
        'Simplicity, slow cooking in heavy cast-iron pots over wood embers, and profound respect for wild native Cerrado fruits (pequi, baru, guariroba) and freshwater fish.',
      signatureDishes: [
        {
          name: 'Golden Rice with Pequi Fruit',
          portugueseName: 'Arroz com Pequi',
          type: 'Main',
          originState: 'Goiás',
          description:
            'Long-grain rice slow-cooked with garlic, onions, and whole golden pequi fruits until stained a brilliant saffron yellow. Eaten by gently scraping the flavorful, buttery outer pulp with the front teeth—never biting into the core, which contains thousands of microscopic thorns.',
          keyIngredients: ['Whole Pequi Fruits (Caryocar brasiliense)', 'Rice', 'Alho e Cebola', 'Cheiro-Verde', 'Pimenta-de-Cheiro'],
          culturalSignificance: 'The defining culinary emblem of Goiás; visitors are always cautioned on the proper technique for savoring pequi safely.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Arroz_com_pequi.jpg/960px-Arroz_com_pequi.jpg'
        },
        {
          name: 'Deep-Dish Goiás Savory Pie',
          portugueseName: 'Empadão Goiano',
          type: 'Main',
          originState: 'Goiás',
          description:
            'A colossal, flaky-crusted pie baked in ceramic pie dishes, overflowing with tender shredded chicken, diced pork, spicy sausage (linguiça caseira), whole pequi, bitter guariroba palm heart, hard-boiled eggs, and melting Minas cheese.',
          keyIngredients: ['Flaky Lard Pastry', 'Shredded Chicken & Pork', 'Guariroba (Bitter Palm Heart)', 'Pequi', 'Queijo Minas'],
          culturalSignificance: 'The historic centerpiece of Sunday family lunches and saint festival banquets in colonial Cidade de Goiás and Pirenópolis.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Empad%C3%A3o_Goiano..jpg/960px-Empad%C3%A3o_Goiano..jpg'
        },
        {
          name: 'Pantanal Cowboy Trail Pasta',
          portugueseName: 'Macarrão de Comitiva com Carne-Seca',
          type: 'Main',
          originState: 'Mato Grosso do Sul',
          description:
            'Invented by cattle drovers who needed quick, calorie-dense sustenance on multi-week drives. Shredded sun-cured beef is browned in hot lard in a heavy iron pan, broken spaghetti noodles are added dry and toasted in the fat until golden, then simmered with broth until tender.',
          keyIngredients: ['Carne-Seca / Charque', 'Spaghetti (Broken by hand)', 'Lard or Mantega', 'Garlic, Onion & Lime Juice'],
          culturalSignificance: 'Symbol of the authentic cattle drover (comitiva) lifestyle crossing the Pantanal wetlands.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Arroz_Carreteiro_1.jpg/960px-Arroz_Carreteiro_1.jpg'
        },
        {
          name: 'Spicy Restorative Piranha Broth',
          portugueseName: 'Caldo de Piranha',
          type: 'Main',
          originState: 'Mato Grosso / Mato Grosso do Sul',
          description:
            'Fresh piranhas caught in Pantanal rivers are boiled down with tomatoes, onions, sweet peppers, garlic, and hot malagueta chilies, strained through a fine sieve to remove fine bones, and served as a velvety, steaming soup with cassava flour and lime.',
          keyIngredients: ['Fresh Piranha Fish', 'Tomatoes & Bell Peppers', 'Manioc Starch', 'Cilantro & Scallions', 'Pimenta Malagueta'],
          culturalSignificance: 'Renowned throughout the wetlands as an invigorating restorative and natural aphrodisiac.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Caldo_de_peixe.jpg/960px-Caldo_de_peixe.jpg'
        }
      ],
      nativeIngredients: [
        {
          name: 'Pequi (O Ouro do Cerrado)',
          indigenousOrScientificName: 'Caryocar brasiliense',
          tasteProfile: 'Intensely aromatic, musky, buttery, with floral and sweet-corn undertones and a rich golden-orange color.',
          traditionalUsage: 'Simmered with chicken (galinhada) or rice; processed into fragrant cooking oil and sweet liqueurs.'
        },
        {
          name: 'Castanha de Baru',
          indigenousOrScientificName: 'Dipteryx alata',
          tasteProfile: 'Crunchy and rich, tasting like a sophisticated hybrid of peanut, roasted cocoa, and dark chocolate.',
          traditionalUsage: 'Roasted whole, ground into baru butter, and integrated into artisanal chocolates and energy bars.'
        },
        {
          name: 'Guariroba (Gueroba)',
          indigenousOrScientificName: 'Syagrus oleracea',
          tasteProfile: 'Crisp and intensely bitter-savory, prized for its cleansing contrast to rich roasted meats.',
          traditionalUsage: 'Sliced thin into chicken stews, empadão goiano, and warm vinaigrettes.'
        }
      ],
      traditionalBeverages: [
        {
          name: 'Tereré com Limão e Hortelã',
          description: 'Yerba mate steeped in ice water with fresh lime juice and crushed wild mint, served in a polished ox-horn guampa.',
          alcoholic: false
        },
        {
          name: 'Licor de Pequi & Cachaça Artesanal de Goiás',
          description: 'Aromatic golden liqueur infused with ripe pequi pulp and cane spirit.',
          alcoholic: true
        },
        {
          name: 'Suco de Mangaba & Buriti',
          description: 'Refreshing tropical juices pressed from native Cerrado palm fruits rich in beta-carotene.',
          alcoholic: false
        }
      ],
      streetFoodCulture:
        'In Goiânia’s Feira da Lua and Cuiabá’s Porto market, stalls serve warm fried pastéis filled with savory pequi-chicken, steaming bowls of Revirado Cuiabano, and grilled skewers of Pantanal pacu fish ribs.'
    },
    economy: {
      headline: 'Global Agribusiness Engine, Biofuels & Geopolitical Governance',
      overview:
        'The Center-West is the undisputed agricultural titan of Latin America and a crucial pillar of global food security. Applying advanced agronomic science to the Cerrado, Mato Grosso alone produces nearly 10% of global soybean exports, while Brasília anchors federal governance, sovereign embassies, and multilateral diplomacy.',
      gdpContributionPercent: 10.4,
      leadingSectors: [
        {
          sector: 'High-Tech Agribusiness (Soybeans, Corn & Cotton)',
          regionalHubs: ['Sorriso (MT — Capital of Agribusiness)', 'Rio Verde (GO)', 'Dourados (MS)', 'Rondonópolis (MT)'],
          contributionGdpPercentage: 48,
          description:
            'Mato Grosso and Goiás lead the world in mechanized tropical agriculture, harvesting two full crops per year (soja followed by milho safrinha) using satellite-guided precision tractors, biological pest controls, and zero-tillage farming.'
        },
        {
          sector: 'Biofuels & Clean Corn-Ethanol Biorefineries',
          regionalHubs: ['Lucas do Rio Verde (MT)', 'Jataí (GO)', 'Nova Mutum (MT)'],
          contributionGdpPercentage: 21,
          description:
            'Pioneering modern corn-ethanol biorefineries (FS Bioenergia, Inpasa) that produce clean, low-carbon biofuel alongside high-protein animal feed (DDGS) and renewable bioelectricity.'
        },
        {
          sector: 'Federal Public Administration, Defense & Tech Services',
          regionalHubs: ['Brasília (DF)', 'Goiânia (GO)'],
          contributionGdpPercentage: 26,
          description:
            'Brasília hosts the highest GDP per capita in Brazil, driven by government services, federal courts, international embassies, software integrators, and healthcare centers.'
        }
      ],
      keyExports: [
        {
          commodity: 'Soybeans & Soybean Meal',
          globalRank: '#1 Global State Producer (Mato Grosso)',
          keyMarkets: ['China', 'European Union', 'Southeast Asia'],
          economicSignificance: 'Supplies protein to global food chains, exported via multimodal river corridors and the Ferrovia Norte-Sul.'
        },
        {
          commodity: 'Bovine Beef (Nelore Cattle Herds)',
          globalRank: 'Largest Cattle Herd in Brazil (Over 34M head in MT alone)',
          keyMarkets: ['China', 'United States', 'Middle East', 'Chile'],
          economicSignificance: 'Pasture-raised Nelore beef processed in advanced meatpacking facilities (JBS, Marfrig, Minerva).'
        },
        {
          commodity: 'High-Yield Fiber Cotton',
          globalRank: '70%+ of Brazil’s Total Cotton Exports (World Benchmark)',
          keyMarkets: ['Vietnam', 'Bangladesh', 'Turkey', 'China'],
          economicSignificance: 'Mato Grosso produces long-staple cotton supplying global sustainable apparel brands.'
        }
      ],
      innovationAndFuture: {
        aviationOrTech:
          'Embrapa Cerrados (Brasília) and Embrapa Pantanal (Corumbá) lead global tropical agricultural research, developing drought-tolerant genetic seed lines and soil microbiome inoculants.',
        renewableEnergy:
          'Massive expansion of decentralized agro-solar farms and biogas plants converting agricultural waste into biomethane fuel for logistics fleets.',
        sustainableAgribusiness:
          'Adoption of the ILPF (Crop-Livestock-Forestry Integration) system, sequestering carbon by combining pasture grazing beneath eucalyptus trees with grain rotations.'
      },
      economicStats: [
        { label: 'Mato Grosso Grain Production', value: '100+ Million Tons / Year' },
        { label: 'Brasília GDP per Capita', value: 'Highest in Brazil (R$ 87,000+)' },
        { label: 'Brazil Cotton Output Share', value: '70%+ Produced in MT' },
        { label: 'Pantanal Eco-Tourism Revenue', value: 'USD 150M+ Annually' }
      ]
    },
    sports: {
      headline: 'Rodeo Arena Legends, Eco-Adventure Diving & The Mané Garrincha Stadium',
      overview:
        'Sport in the Center-West spans the adrenaline of professional rodeo circuits and horseback endurance to crystalline river snorkeling in Bonito, mountain trekking across the Chapada dos Veadeiros plateaus, and world-class football inside Brasília’s Estádio Nacional Mané Garrincha.',
      football: {
        cultureRole:
          'Brasília’s iconic Mané Garrincha stadium—surrounded by 288 soaring concrete pillars—regularly hosts major national cup finals and the Brazilian national team, while Cuiabá EC has firmly established the region in the top tier of Brazilian club football.',
        legendaryClubs: ['Cuiabá Esporte Clube (MT)', 'Goiás Esporte Clube (Goiânia)', 'Vila Nova Futebol Clube (Goiânia)', 'Atlético Clube Goianiense (Goiânia)', 'Brasiliense FC (DF)'],
        iconicStadiums: [
          { name: 'Estádio Nacional de Brasília Mané Garrincha', city: 'Brasília (DF)', capacity: 72788 },
          { name: 'Arena Pantanal', city: 'Cuiabá (MT)', capacity: 44097 },
          { name: 'Estádio Serra Dourada', city: 'Goiânia (GO)', capacity: 50049 }
        ],
        historicMoments: [
          'Estádio Mané Garrincha hosting seven matches of the 2014 FIFA World Cup and the 2016 Olympic football tournament with a solar-paneled roof ring',
          'Cuiabá EC earning promotion to the Série A and winning four consecutive Mato Grosso state championships',
          'Historic Goiás derbies (Goiás vs. Vila Nova) filling the legendary Estádio Serra Dourada with 45,000 passionate fans'
        ],
        localDerbies: [
          'Derby Goiano (Goiás vs. Vila Nova in Goiânia)',
          'Clássico dos Clássicos (Mixto vs. Operário in Cuiabá)',
          'Verde e Amarelo (Cuiabá vs. União de Rondonópolis)'
        ]
      },
      martialArts: [
        {
          discipline: 'Judo & Olympic Combat Sports',
          roots: 'Brasília and Goiânia maintain top-tier national training centers for Olympic judo and wrestling.',
          philosophy: 'Mental discipline, balance, and leverage.',
          renownedMasters: ['Ketleyn Quadros (First Brazilian woman to win an Olympic medal in an individual sport — Judo Bronze, Beijing 2008)']
        },
        {
          discipline: 'Luta Tradicional Terena e Xavante',
          roots: 'Traditional wrestling practiced on red earth during the Jogos dos Povos Indígenas across the Central Plateau.',
          philosophy: 'Respect for ancestors, stamina, and physical honor.',
          renownedMasters: ['Xavante tribal champions (Aldeia Marãiwatsédé)']
        }
      ],
      outdoorAndExtremeSports: [
        {
          sport: 'Karst Cave Diving & River Snorkeling',
          notableHotspots: ['Rio da Prata & Rio Sucuri (Bonito, MS)', 'Lagoa Misteriosa (Jardim, MS)', 'Abismo Anhumas (Bonito, MS)'],
          description:
            'Springs filtered through underground limestone layers achieve over 40 meters of optical clarity, allowing divers to swim alongside golden dorados and piraputanga fish.'
        },
        {
          sport: 'Highland Trekking & Canyoneering',
          notableHotspots: ['Chapada dos Veadeiros (GO)', 'Chapada dos Guimarães (MT)', 'Parque Estadual do Terra Ronca (GO)'],
          description: 'Long-distance trails across quartz crystal plateaus, canyon rappelling, and spelunking through Terra Ronca’s giant subterranean cave networks.'
        }
      ],
      motorsportOrSkate: {
        narrative:
          'Autódromo Internacional de Goiânia hosts rounds of Stock Car Pro Series and Moto1000GP, while Brasília features a world-class concrete skatepark along the shores of Lake Paranoá.',
        icons: ['Ketleyn Quadros (Olympic Judo Pioneer)', 'Nelson Piquet (3x F1 World Champion — Longtime Brasília resident)']
      }
    }
  }
};

const SOUTHEAST_REGION: RegionData = {
  id: 'southeast',
  name: 'Sudeste',
  nameEnglish: 'Southeast',
  tagline: 'Economic Engine, Bossa Nova Elegance & Cosmopolitan Pulse',
  colorToken: '#0F2C59',
  states: [
    { code: 'SP', name: 'São Paulo', capital: 'São Paulo' },
    { code: 'RJ', name: 'Rio de Janeiro', capital: 'Rio de Janeiro' },
    { code: 'MG', name: 'Minas Gerais', capital: 'Belo Horizonte' },
    { code: 'ES', name: 'Espírito Santo', capital: 'Vitória' }
  ],
  areaKm2: 924511,
  population: 84840113,
  populationPercentageOfBrazil: 41.8,
  densityPerKm2: 91.77,
  climateOverview: 'Tropical Atlantic Coastal to Subtropical Highland (Cwb/Aw) — Mild mountain winters and warm coastal summers',
  centerCoordinates: [-23.5505, -46.6333],
  coordinates: [-23.5505, -46.6333],
  bounds: [
    [-25.31, -53.11],
    [-14.23, -39.67]
  ],
  spotifyPlaylistId: '37i9dQZF1DX23o1NfZKqWv',
  heroImage: {
    id: 'se-hero',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/1280px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
    alt: 'Sugarloaf Mountain rising above Botafogo Bay at dusk in Rio de Janeiro',
    caption: 'Sugarloaf Mountain and Guanabara Bay bathed in twilight hues in Rio de Janeiro.',
    credit: 'Wikimedia Commons / Rio de Janeiro Archive',
    aspectRatio: 'landscape'
  },
  gallery: [
    {
      id: 'se-gal-1',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/1280px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
      alt: 'Sugarloaf Mountain and Rio de Janeiro bay at dusk',
      caption: 'Sugarloaf Mountain rising above Botafogo Bay at twilight in Rio de Janeiro.',
      credit: 'Wikimedia Commons / Rio Skyline',
      aspectRatio: 'landscape'
    },
    {
      id: 'se-gal-2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
      alt: 'Cristo Redentor overlooking Rio de Janeiro and Sugarloaf Mountain',
      caption: 'Panoramic view from Corcovado over Guanabara Bay and the beaches of Rio de Janeiro.',
      credit: 'Wikimedia Commons / Cidade Maravilhosa',
      aspectRatio: 'landscape'
    },
    {
      id: 'se-gal-3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Forte_de_Copacabana_panorama.jpg',
      alt: 'Copacabana Beach promenade and Atlantic Ocean in Rio',
      caption: 'The iconic crescent shoreline and Portuguese stone promenade of Copacabana Beach.',
      credit: 'Wikimedia Commons / Copacabana Archive',
      aspectRatio: 'landscape'
    },
    {
      id: 'se-gal-4',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/1280px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
      alt: 'Colonial baroque architecture of Ouro Preto in Minas Gerais',
      caption: '18th-century Baroque churches and mist-covered mountains in UNESCO-listed Ouro Preto, Minas Gerais.',
      credit: 'Wikimedia Commons / Patrimônio de Minas',
      aspectRatio: 'square'
    },
    {
      id: 'se-gal-5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Feijoada_%C3%A0_transmontada.jpg',
      alt: 'Traditional Brazilian Feijoada stew',
      caption: 'Traditional slow-simmered black bean Feijoada—the sacred Saturday feast of Rio and Minas Gerais.',
      credit: 'Wikimedia Commons / Culinary Traditions',
      aspectRatio: 'landscape'
    },
    {
      id: 'se-gal-6',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Maracana_2022.jpg/1280px-Maracana_2022.jpg',
      alt: 'Maracanã Stadium floodlights and roaring football crowd in Rio',
      caption: 'The roaring fervor of Brazilian football fans under the floodlights of the legendary Maracanã.',
      credit: 'Wikimedia Commons / Maracanã Rio',
      aspectRatio: 'landscape'
    },
    {
      id: 'se-gal-7',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg/1280px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_02.jpg',
      alt: 'Avenida Paulista and MASP museum in São Paulo',
      caption: 'Aerial view of Avenida Paulista and Lina Bo Bardi’s MASP museum in the heart of São Paulo.',
      credit: 'Wikimedia Commons / São Paulo Skyline',
      aspectRatio: 'landscape'
    }
  ],
  featuredVideo: {
    id: 'se-video',
    youtubeId: 'IhwBRphHh8I',
    title: 'Rio de Janeiro 4K Cinematic Drone Footage — Sugarloaf, Golden Beaches & Peaks',
    description: 'High-definition 4K aerial cinematography capturing Christ the Redeemer on Corcovado, Copacabana beach, and the granitic coastal mountains of the Southeast.',
    duration: '18:45',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg'
  },
  landmarks: [
    {
      id: 'lm-cristo-redentor',
      name: 'Cristo Redentor & Morro do Corcovado',
      nativeName: 'Cristo Redentor',
      city: 'Rio de Janeiro',
      state: 'RJ',
      regionId: 'southeast',
      coordinates: [-22.9519, -43.2105],
      category: 'heritage',
      isUnesco: true,
      description: 'Perched 710 meters above Guanabara Bay atop Corcovado mountain, this 38-meter Art Deco statue sculpted from soapstone-tiled concrete was designed by Heitor da Silva Costa and Paul Landowski in 1931, voted one of the New Seven Wonders of the World.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/960px-Christ_the_Redeemer_-_Cristo_Redentor.jpg',
      highlightFact: 'Covered in millions of tiny triangular soapstone mosaic tiles, many inscribed with handwritten prayers and names by local women during construction.'
    },
    {
      id: 'lm-pao-de-acucar',
      name: 'Pão de Açúcar (Sugarloaf Mountain)',
      nativeName: 'Monumento Natural dos Morros do Pão de Açúcar',
      city: 'Rio de Janeiro',
      state: 'RJ',
      regionId: 'southeast',
      coordinates: [-22.9492, -43.1545],
      category: 'nature',
      isUnesco: true,
      description: 'A monolithic 396-meter granite and quartz peak rising directly from the waters of Guanabara Bay, connected since 1912 by the iconic aerial cable cars (bondinho).',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/960px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg',
      highlightFact: 'The Bondinho do Pão de Açúcar was the third passenger aerial tramway built in the world, carrying over 50 million visitors.'
    },
    {
      id: 'lm-masp-paulista',
      name: 'MASP & Avenida Paulista',
      nativeName: 'Museu de Arte de São Paulo Assis Chateaubriand',
      city: 'São Paulo',
      state: 'SP',
      regionId: 'southeast',
      coordinates: [-23.5614, -46.6559],
      category: 'architecture',
      isUnesco: false,
      description: 'Designed by Italian-Brazilian architect Lina Bo Bardi in 1968, MASP is a brutalist masterpiece suspended on four colossal red concrete pillars, leaving a 74-meter open plaza underneath for public gatherings.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_05.jpg/960px-Vista_a%C3%A9rea_de_la_Avenida_Paulista_de_S%C3%A3o_Paulo_05.jpg',
      highlightFact: 'Paintings by Rembrandt, Van Gogh, and Portinari are displayed on floating transparent crystal easels without wall frames.'
    },
    {
      id: 'lm-maracana',
      name: 'Estádio Jornalista Mário Filho (Maracanã)',
      nativeName: 'Maracanã',
      city: 'Rio de Janeiro',
      state: 'RJ',
      regionId: 'southeast',
      coordinates: [-22.9121, -43.2302],
      category: 'sports',
      isUnesco: false,
      description: 'The sacred cathedral of world football. Built for the 1950 World Cup and host of the 2014 World Cup Final and 2016 Olympic Opening Ceremony, where Pelé scored his historic 1,000th career goal.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Maracana_2022.jpg/960px-Maracana_2022.jpg',
      highlightFact: 'Held an estimated 199,854 spectators during the fateful 1950 World Cup match between Brazil and Uruguay—the largest attended match in history.'
    },
    {
      id: 'lm-autodromo-interlagos',
      name: 'Autódromo José Carlos Pace (Interlagos)',
      nativeName: 'Autódromo de Interlagos',
      city: 'São Paulo',
      state: 'SP',
      regionId: 'southeast',
      coordinates: [-23.7011, -46.6972],
      category: 'sports',
      isUnesco: false,
      description: 'The historic temple of Brazilian motorsport nestled between two reservoirs in São Paulo, home to the FIA Formula 1 Brazilian Grand Prix and Ayrton Senna’s emotional home victories in 1991 and 1993.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Grande_Pr%C3%AAmio_S%C3%A3o_Paulo_de_F%C3%B3rmula_1_%2852497080967%29.jpg/960px-Grande_Pr%C3%AAmio_S%C3%A3o_Paulo_de_F%C3%B3rmula_1_%2852497080967%29.jpg',
      highlightFact: 'One of the few historic Formula 1 circuits run counter-clockwise, famous for the Senna S chicane and the undulating Junção corner.'
    },
    {
      id: 'lm-ouro-preto',
      name: 'Praça Tiradentes & Centro Histórico de Ouro Preto',
      nativeName: 'Ouro Preto',
      city: 'Ouro Preto',
      state: 'MG',
      regionId: 'southeast',
      coordinates: [-20.3856, -43.5034],
      category: 'heritage',
      isUnesco: true,
      description: 'Inscribed in 1980 as Brazil’s first UNESCO World Heritage Site, Ouro Preto was the epicenter of the 18th-century Gold Rush, adorned with baroque and rococo churches sculpted in soapstone by Aleijadinho.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG/960px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG',
      highlightFact: 'Birthplace of the 1789 Inconfidência Mineira independence conspiracy led by martyr Tiradentes against Portuguese colonial taxation.'
    },
    {
      id: 'lm-instituto-inhotim',
      name: 'Instituto Inhotim',
      nativeName: 'Inhotim Centro de Arte Contemporânea',
      city: 'Brumadinho',
      state: 'MG',
      regionId: 'southeast',
      coordinates: [-20.1242, -44.2189],
      category: 'culture',
      isUnesco: false,
      description: 'The world’s largest open-air contemporary art museum embedded in 140 hectares of botanical gardens designed in the spirit of Roberto Burle Marx, featuring 23 dedicated artist pavilions and over 4,500 rare plant species.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Instituto_Inhotim_%287%29.jpg/960px-Instituto_Inhotim_%287%29.jpg',
      highlightFact: 'Houses the world’s largest collection of palm species (over 1,400 varieties) surrounding immersive monumental sculptures by Cildo Meireles and Yayoi Kusama.'
    }
  ],
  modules: {
    geography: {
      headline: 'Coastal Escarpments, Highland Mists & The Atlantic Rainforest',
      overview:
        'The Southeast encompasses 924,000 square kilometers characterized by dramatic coastal relief: ancient crystalline mountain chains (Serra do Mar, Serra da Mantiqueira, Serra do Espinhaço) dropping sheer into the Atlantic Ocean, framing the granitic islands of Guanabara Bay and rising to high mountain plateaus exceeding 2,700 meters.',
      biomes: [
        {
          name: 'Mata Atlântica (Atlantic Forest Hotspot)',
          coveragePercentage: 68,
          description:
            'One of the top five global biodiversity hotspots. Though heavily fragmented by centuries of coffee farming and urban growth, it still preserves exceptional endemic biodiversity across mist-shrouded mountain slopes.',
          keyFauna: ['Mico-leão-dourado (Golden Lion Tamarin)', 'Muriqui-do-sul (Southern Woolly Spider Monkey)', 'Tucano-de-bico-preto', 'Jaguatirica (Ocelot)'],
          keyFlora: ['Pau-Brasil', 'Jequitibá-rosa (Giant Canopy Trees up to 50m)', 'Manacá-da-serra', 'Orquídeas e Bromélias Epífitas']
        },
        {
          name: 'Cerrado & Campos Rupestres (Interior SP & Minas Gerais)',
          coveragePercentage: 27,
          description:
            'High-altitude quartzite rocky fields (Campos Rupestres) across the Serra do Espinhaço in Minas Gerais, harboring thousands of micro-endemic rock-dwelling wildflowers (sempre-vivas).',
          keyFauna: ['Lobo-guará', 'Tamanduá-bandeira', 'Canário-da-terra'],
          keyFlora: ['Canela-de-ema', 'Cactos Arrojadoa', 'Sempre-vivas']
        },
        {
          name: 'Restingas & Coastal Mangroves',
          coveragePercentage: 5,
          description:
            'Salt-spray coastal scrub and tidal mangrove estuaries in Santos, Paraty, Angra dos Reis, and Vitória.',
          keyFauna: ['Caranguejo-uçá (Mangrove Crab)', 'Garça-branca', 'Boto-cinza'],
          keyFlora: ['Mangue-vermelho', 'Guanandi', 'Clusia']
        }
      ],
      topography: {
        highestPoint: 'Pico da Bandeira (Serra do Caparaó, MG/ES)',
        elevationMeters: 2892,
        terrainSummary:
          'Rugged crystalline mountain ridges (Mantiqueira and Serra do Mar) running parallel to the Atlantic, dropping steeply to the coast and sloping inland to the fertile red volcanic basalt soils (terra roxa) of São Paulo’s interior.',
        majorFormations: ['Serra da Mantiqueira (Pedra da Mina, 2,798m)', 'Serra do Mar', 'Serra do Espinhaço', 'Pico da Bandeira (2,892m)', 'Baía de Guanabara']
      },
      hydrology: {
        majorBasins: ['Bacia do Rio Paraná (Tietê, Paranapanema, Grande)', 'Bacia do Rio São Francisco (Nascentes da Serra da Canastra)', 'Bacia do Rio Doce & Paraíba do Sul'],
        riverSystemSummary:
          'Remarkably, rivers like the Rio Tietê in São Paulo rise just 22 km from the Atlantic Ocean yet flow inland toward the interior for over 1,100 km, emptying into the Paraná River basin. In Minas Gerais, the Serra da Canastra gives birth to the São Francisco River.'
      },
      climate: {
        classification: 'Köppen Cwb (Highland Subtropical) & Aw/Af (Tropical Coastal)',
        temperatureRange: '14°C – 32°C (Cool highland winters with mountain fog; warm humid coastal summers)',
        annualRainfallMm: 1500,
        characteristics:
          'Coastal Rio de Janeiro and Santos experience hot, humid tropical summers, while mountain cities like Campos do Jordão, Petrópolis, and Ouro Preto experience chilly winter temperatures occasionally dipping to 2°C–5°C with morning frost.'
      },
      environmentalChallenges: [
        'Connecting fragmented remnants of the Atlantic Forest through biological reforestation corridors for endangered primates',
        'Protecting high-altitude water springs that supply drinking water to over 40 million urban citizens in São Paulo and Rio de Janeiro',
        'Preventing hillside mudslides along coastal escarpments during intense summer storm events'
      ],
      keyStats: [
        { label: 'Population Share', value: '39.4% (84.8M Citizens — Most Populous)' },
        { label: 'Highest Peak in Region', value: 'Pico da Bandeira (2,892 m)' },
        { label: 'São Paulo Metro Population', value: '22+ Million (Largest in Americas)' },
        { label: 'Atlantic Forest Biodiversity', value: '20,000+ Plant Species (40% Endemic)' }
      ]
    },
    history: {
      headline: 'The Gold Rush Baroque, The Portuguese Empire in Rio & The Industrial Metropolises',
      overview:
        'The Southeast is the historical catalyst of modern Brazil. In 1808, the Portuguese Royal Court fled Napoleon and established Rio de Janeiro as the seat of the Portuguese Empire—the only European capital ever situated in the Americas. Later, the 18th-century Gold Rush in Minas Gerais, the 19th-century Coffee Boom, and waves of Italian, Japanese, and Lebanese immigration turned São Paulo into the industrial powerhouse of South America.',
      indigenousHeritage: {
        ancestralPeoples: ['Tupiniquim', 'Tamoio (Tupinambá)', 'Guaraní Mbyá', 'Puri', 'Maxakali', 'Krenak'],
        culturalContinuity:
          'The Confederação dos Tamoios was an epic 16th-century indigenous alliance that united with French allies to resist Portuguese enslavement along the coast. Today, leaders like philosopher Ailton Krenak in the Rio Doce valley shape global ecological thought.',
        currentDemographics: 'Over 140,000 Indigenous people reside in the Southeast, active in urban universities and ancestral demarcations.'
      },
      colonialAndImperialEra: {
        period: '1554 (Founding of São Paulo) – 1889 (Proclamation of the Republic in Rio)',
        economicDrivers: ['Gold & Diamonds (Ciclo do Ouro in Minas Gerais)', 'Sugar Mills', 'Coffee Plantations (Ciclo do Café)', 'Early Industrialization'],
        historicalNarrative:
          'In 1693, the discovery of gold in Minas Gerais triggered the first gold rush in modern history, funneling hundreds of tons of gold through Rio de Janeiro to Europe. In 1808, King Dom João VI opened Brazilian ports to free trade, founded the National Library, Jardim Botânico, and Banco do Brasil, culminating in Dom Pedro I declaring Brazil’s independence on the banks of the Ipiranga River in São Paulo on September 7, 1822.'
      },
      afroBrazilianHeritage: {
        culturalLegacy:
          'Rio de Janeiro’s historic port district of Pequena África (Little Africa), anchored by the UNESCO-listed Cais do Valongo wharf, was the landing site of an estimated one million enslaved Africans. Here, in the home of Tia Ciata on Praça Onze, modern Samba was born.',
        quilomboHistory:
          'Historic quilombos in the Paraíba Valley, Petrópolis, and Paraty (such as Quilombo do Campinho) resisted plantation servitude and preserved ancestral jongo rhythms.',
        influenceOnIdentity:
          'Shaped every aspect of national language, carnival culture, culinary staples (Feijoada), religious syncretism, and the intellectual leadership of abolitionist journalist Machado de Assis.'
      },
      immigrationWaves: [
        {
          origin: 'Italy (Veneto, Lombardy, Campania, Calabria)',
          period: '1880–1930',
          settlementAreas: ['São Paulo (Bixiga, Mooca, Brás)', 'Coffee Plantations of Ribeirão Preto & Campinas'],
          contribution:
            'Over 1.5 million Italians arrived to replace enslaved labor on coffee plantations, transforming São Paulo’s gastronomy (pizza, pasta), labor unions, and dialect.'
        },
        {
          origin: 'Japan (Kassato Maru Pioneer Ship)',
          period: '1908–1950s',
          settlementAreas: ['São Paulo (Bairro da Liberdade)', 'Vale do Ribeira', 'Mogi das Cruzes'],
          contribution:
            'Created the largest Japanese community outside Japan, revolutionizing Brazilian horticulture, introducing green-tea and persimmon cultivation, and establishing the cultural landmark of Liberdade.'
        },
        {
          origin: 'Lebanon & Syria',
          period: '1880–1940',
          settlementAreas: ['São Paulo (Rua 25 de Março)', 'Rio de Janeiro', 'Belo Horizonte'],
          contribution:
            'Pioneered commercial trading networks, textiles, and infused Brazilian daily cuisine with kibbeh, sfiha, and hummus.'
        }
      ],
      milestones: [
        {
          yearOrEra: '1789',
          title: 'Inconfidência Mineira',
          description: 'Colonial intellectuals, poets, and military officer Tiradentes conspire in Ouro Preto for independence from the Portuguese crown.',
          significance: 'Became the civic symbol of the Brazilian republican movement; April 21 is a national holiday in honor of Tiradentes.'
        },
        {
          yearOrEra: '1808',
          title: 'Arrival of the Portuguese Royal Family in Rio',
          description: 'Dom João VI transfers the imperial seat from Lisbon to Rio de Janeiro.',
          significance: 'Elevated Brazil from colony to United Kingdom with Portugal, modernizing administrative, educational, and legal institutions.'
        },
        {
          yearOrEra: '1822',
          title: 'Grito do Ipiranga (Independence of Brazil)',
          description: 'Prince Dom Pedro proclaims "Independência ou Morte!" on the banks of the Ipiranga brook in São Paulo.',
          significance: 'Birth of the sovereign Empire of Brazil.'
        },
        {
          yearOrEra: '1922',
          title: 'Semana de Arte Moderna (Modern Art Week)',
          description: 'Artists Mário de Andrade, Oswald de Andrade, Anita Malfatti, and Heitor Villa-Lobos shake the Municipal Theatre of São Paulo.',
          significance: 'Launched the Antropofagia movement—cannibalizing European influences to forge an authentic, radical Brazilian modernist identity.'
        }
      ],
      demographicProfile: {
        urbanRatePercentage: 93.1,
        dominantHeritage: 'Multi-Ethnic Melting Pot (Afro-Brazilian, Italian, Portuguese, Japanese, Levantine, Indigenous)',
        summaryMetrics: [
          { label: 'Regional Population', value: '84.85 Million' },
          { label: 'Economic Metropolis', value: 'São Paulo (12.4M City / 22M Metro)' },
          { label: 'Cultural Capital', value: 'Rio de Janeiro (6.7M City / 13M Metro)' }
        ]
      }
    },
    culture: {
      headline: 'The Samba of Rio, The Bossa Nova Intimacy & The Minas Gerais Hearth',
      overview:
        'The Southeast is Brazil’s premier cultural loudspeaker. Here, the world’s grandest spectacle unfolds at the Sambadrome with towering allegorical floats, while intimate Bossa Nova chords were born along Ipanema’s shoreline, and the warm mountain colonial towns of Minas Gerais celebrate choral baroque music and intimate literature.',
      festivals: [
        {
          name: 'Carnaval do Rio de Janeiro (Desfile das Escolas de Samba)',
          period: 'February / March (Pre-Lent)',
          location: 'Rio de Janeiro (Sambódromo Marquês de Sapucaí)',
          description:
            'Designed by Oscar Niemeyer in 1984, the Sambadrome hosts the elite Special Group samba schools (Mangueira, Portela, Beija-Flor, Salgueiro). Each school parades with 3,500 performers, 300 percussionists (Bateria), and mammoth articulated floats across 700 meters of runway.',
          highlight: 'Watched by over two billion viewers worldwide, accompanied in the streets by over 400 free blocos de rua that draw five million partygoers.'
        },
        {
          name: 'Virada Cultural de São Paulo',
          period: 'May (Annual)',
          location: 'Citywide across São Paulo',
          description:
            'A continuous 24-hour marathon of free music, theater, visual arts, and dance across over 100 stages—transforming the metropolis into South America’s largest cultural festival.',
          highlight: 'Features symphony orchestras playing at dawn in the Praça da Sé alongside hip-hop battles in Anhangabaú.'
        },
        {
          name: 'Festa Literária Internacional de Paraty (FLIP)',
          period: 'July / November',
          location: 'Paraty, Rio de Janeiro',
          description:
            'A world-renowned literary gathering where Nobel laureates, poets, and musicians debate in 18th-century cobblestone seaside streets with lanterns and boat discussions.',
          highlight: 'Each edition honors a foundational Brazilian author against the UNESCO-listed colonial coastal backdrop of Paraty.'
        }
      ],
      musicAndDance: [
        {
          genre: 'Samba Carioca & Samba de Enredo',
          originEra: '1910s (Pelo Telefone, 1916)',
          traditionalInstruments: ['Cavaquinho', 'Pandeiro', 'Surdo', 'Tamborim', 'Cuíca', 'Agogô'],
          keyPioneers: ['Cartola', 'Noel Rosa', 'Nelson Cavaquinho', 'Dona Ivone Lara', 'Beth Carvalho', 'Zeca Pagodinho', 'Alcione'],
          description:
            'The heartbeat of Rio de Janeiro. Born in Pequena África from Afro-Brazilian lundu and batuques, it evolved into intimate neighborhood Samba de Roda and the thunderous symphonic Samba de Enredo of carnival parades.'
        },
        {
          genre: 'Bossa Nova',
          originEra: '1958 (Chega de Saudade)',
          traditionalInstruments: ['Violão com Batida Sincopada', 'Piano Clássico', 'Contrabaixo Acústico', 'Sussurro Vocal'],
          keyPioneers: ['Antônio Carlos Jobim (Tom Jobim)', 'João Gilberto', 'Vinicius de Moraes', 'Astrud Gilberto', 'Nara Leão', 'Baden Powell'],
          description:
            'A sophisticated revolution that blended samba syncopation with cool jazz harmonies, whispered vocals, and existential poetry. Tom Jobim and Vinicius de Moraes’s "Garota de Ipanema" became the second most recorded pop song in world history.'
        },
        {
          genre: 'Clube da Esquina & Choro',
          originEra: '1870s (Choro) / 1970s (Clube da Esquina in Minas Gerais)',
          traditionalInstruments: ['Flauta', 'Bandolim', 'Violão de 7 Cordas', 'Acordeom', 'Guitarras Rurais'],
          keyPioneers: ['Pixinguinha', 'Jacob do Bandolim', 'Waldir Azevedo', 'Milton Nascimento', 'Lô Borges', 'Toninho Horta'],
          description:
            'Choro is Brazil’s intricate instrumental chamber music, while in the 1970s Belo Horizonte’s Clube da Esquina blended baroque sacred choral harmonies, Beatles rock, jazz, and Minas folk poetry into masterpiece albums.'
        }
      ],
      traditions: [
        {
          title: 'A Cultura do Botequim Carioca & Chope de São Paulo',
          type: 'Celebration',
          description:
            'The corner neighborhood boteco with blue mosaic tiles, icy draft beer (chope), crispy pastries, and impromptu acoustic samba circles on the sidewalk.'
        },
        {
          title: 'Festa da Achiropita & Tradição Italiana do Bixiga',
          type: 'Celebration',
          description:
            'Every August, São Paulo’s historic Italian neighborhood of Bixiga hosts massive street banquets with mama-made pasta, cannoli, and tarantella music.'
        },
        {
          title: 'Artesanato em Pedra-Sabão de Ouro Preto',
          type: 'Craft',
          description:
            'Carving grey-green soapstone (esteatita) into cooking pots (panelas de pedra-sabão) and baroque religious figures, continuing the 18th-century mastery of sculptor Aleijadinho.'
        }
      ],
      folklore: [
        {
          entity: 'O Malandro Carioca (Zé Pelintra)',
          lore:
            'The charming street trickster dressed in a sharp white linen suit, red silk tie, two-tone shoes, and panama hat, who uses quick wit, poetic banter, and rhythm rather than violence to overcome adversity.'
        },
        {
          entity: 'Lobisomem do Sertão Mineiro & Mula Sem Cabeça',
          lore:
            'Legends whispered around wood stoves in colonial mountain villages about spectral headless mules breathing fire at crossroads on Thursday midnight.'
        }
      ]
    },
    gastronomy: {
      headline: 'The Sacred Saturday Feijoada, Minas Comfort & The World Culinary Capital',
      overview:
        'Southeastern gastronomy ranges from the comforting wood-stove farm cooking of Minas Gerais (pão de queijo, feijão tropeiro) to the sacred national Saturday ritual of Feijoada Completa in Rio and the peerless cosmopolitan dining scene of São Paulo—widely ranked alongside Tokyo and Paris as one of the great gastronomic capitals of the world.',
      philosophy:
        'A dialogue between slow rustic comfort (pork, beans, cured cheese, corn) and cosmopolitan culinary perfection driven by Italian, Japanese, and Lebanese diaspora traditions.',
      signatureDishes: [
        {
          name: 'Complete Brazilian Black Bean Feast',
          portugueseName: 'Feijoada Completa à Carioca',
          type: 'Main',
          originState: 'Rio de Janeiro',
          description:
            'The undisputed national dish of Brazil. Plump black beans slow-simmered for hours with smoked pork ribs, carne-seca, paio sausage, and calabresa, served family-style with fluffy white rice, shredded garlicky collard greens (couve mineira), crispy toasted farofa, fresh orange slices (to aid digestion), and a shot of aged cachaça.',
          keyIngredients: ['Black Beans (Feijão-Preto)', 'Smoked Pork Ribs & Paio Sausage', 'Carne-Seca', 'Couve Mineira Refogada', 'Farofa Crocante & Laranja'],
          culturalSignificance: 'The sacred weekend gathering dish that brings together families, football clubs, and samba schools across all social classes.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Feijoada_01.jpg/960px-Feijoada_01.jpg'
        },
        {
          name: 'Minas Gerais Golden Cheese Bread',
          portugueseName: 'Pão de Queijo Mineiro',
          type: 'Street Food',
          originState: 'Minas Gerais',
          description:
            'Crisp and golden on the outside, delightfully chewy and airy within. Made with sour fermented cassava starch (polvilho azedo e doce), farm milk, eggs, lard, and generous gratings of cured artisanal Queijo da Canastra or Queijo do Serro.',
          keyIngredients: ['Polvilho Azedo & Doce (Tapioca Starch)', 'Artisanal Queijo Meia-Cura da Canastra', 'Eggs & Fresh Milk', 'Mantega ou Banha de Porco'],
          culturalSignificance: 'Protected by geographical indication; the universal breakfast and afternoon coffee companion of Brazil.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Pao_de_queijo_brasil.jpg/960px-Pao_de_queijo_brasil.jpg'
        },
        {
          name: 'Cattle-Drover Beans with Cracklings & Eggs',
          portugueseName: 'Feijão Tropeiro Mineiro',
          type: 'Main',
          originState: 'Minas Gerais / São Paulo',
          description:
            'Invented by 18th-century muleteers (tropeiros) who transported gold and supplies over mountain passes. Brown carioca beans tossed dry with toasted coarse cassava flour, crispy pork cracklings (torresmo), diced sausage, scrambled eggs, and sliced collard greens.',
          keyIngredients: ['Feijão Carioca', 'Farinha de Milho ou Mandioca', 'Torresmo Crocante', 'Linguiça de Porco', 'Ovos & Couve'],
          culturalSignificance: 'Epitomizes the hearty sustenance that fueled the overland expansion and mining era of the Southeast.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Feij%C3%A3o_tropeiro_1.jpg/960px-Feij%C3%A3o_tropeiro_1.jpg'
        },
        {
          name: 'Clay Pot Fish Stew without Dendê',
          portugueseName: 'Moqueca Capixaba',
          type: 'Main',
          originState: 'Espírito Santo',
          description:
            'Unlike the Bahian moqueca, the Capixaba version rejects coconut milk and dendê—celebrating fresh Atlantic whitefish simmered in handcrafted clay pots with sweet onions, tomatoes, fresh cilantro, extra-virgin olive oil, and vibrant red urucum (annatto) seed oil. As the local saying goes: "Moqueca é capixaba, o resto é peixada!"',
          keyIngredients: ['Fresh Fish Fillets (Badejo or Robalo)', 'Tintura de Urucum (Annatto Oil)', 'Tomatoes & Onions', 'Coentro Fresco', 'Azeite de Oliva Extra Virgem'],
          culturalSignificance: 'Honors the 400-year-old clay cookware craft of the Paneleiras de Goiabeiras in Vitória, ES.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Moqueca_Capixaba_na_Panela_de_Barro.jpg/960px-Moqueca_Capixaba_na_Panela_de_Barro.jpg'
        }
      ],
      nativeIngredients: [
        {
          name: 'Queijo Minas Artesanal (Canastra & Serro)',
          indigenousOrScientificName: 'Raw Cow Milk Farmstead Cheese',
          tasteProfile: 'Sharp, buttery, slightly piquant, with a golden natural rind and grassy, mineral notes reflecting highland pastures.',
          traditionalUsage: 'Eaten plain with fresh coffee, paired with goiabada guava paste (the classic "Romeu e Julieta"), or baked into pão de queijo.'
        },
        {
          name: 'Café Especial do Sul de Minas & Alta Mogiana',
          indigenousOrScientificName: 'Coffea arabica (Bourbon, Catuaí)',
          tasteProfile: 'Naturally sweet with velvety caramel, chocolate, and yellow fruit acidity.',
          traditionalUsage: 'Exported to top espresso bars globally; sipped filtered (cafezinho) throughout the day.'
        },
        {
          name: 'Jabuticaba',
          indigenousOrScientificName: 'Plinia cauliflora',
          tasteProfile: 'Glossy purple berries that sprout directly from the tree trunk, with a sweet, floral, translucent pulp and astringent skin.',
          traditionalUsage: 'Eaten fresh off the trunk in orchard gardens or fermented into jams, vinegars, and artisanal liqueurs.'
        }
      ],
      traditionalBeverages: [
        {
          name: 'Caipirinha Tradicional',
          description: 'Brazil’s official national cocktail: fresh Persian limes muddled with granulated sugar, shaken with ice and silver artisanal cachaça.',
          alcoholic: true
        },
        {
          name: 'Cachaça Envelhecida de Salinas & Paraty',
          description: 'Aged for years in native Brazilian hardwoods like Amburana, Bálsamo, and Jequitibá, imparting notes of vanilla and spice.',
          alcoholic: true
        },
        {
          name: 'Cafezinho Coado na Hora',
          description: 'Finely ground dark-roast coffee filtered through a cotton flannel strainer (coador de pano) and served scalding hot.',
          alcoholic: false
        }
      ],
      streetFoodCulture:
        'São Paulo’s Municipal Market draws thousands for towering mortadella sandwiches and fried codfish pastéis, while Rio’s beachfront kiosks pair cold coconut water with crunchy Globo cassava puffs (Biscoito Globo) and sweet iced mate tea (Matte Leão).'
    },
    economy: {
      headline: 'Financial Powerhouse, Embraer Aerospace & The Deepwater Pré-Sal',
      overview:
        'The Southeast is the economic engine of Latin America, generating approximately 50% of Brazil’s total GDP. Anchored by the financial capital of São Paulo—home to B3, the largest stock exchange in Latin America—the region leads in regional aerospace (Embraer), deepwater offshore oil extraction (Pré-Sal), automotive manufacturing, and high-yield agribusiness.',
      gdpContributionPercent: 49.8,
      leadingSectors: [
        {
          sector: 'Financial Services, Fintech & Venture Capital',
          regionalHubs: ['São Paulo (Avenida Faria Lima & Paulista)'],
          contributionGdpPercentage: 34,
          description:
            'Avenida Faria Lima is Latin America’s Wall Street, housing investment banks (Itaú BBA, BTG Pactual, Bradesco), sovereign wealth funds, and fintech unicorns (Nubank, Stone, PagSeguro). The B3 exchange trades over USD 5 billion daily.'
        },
        {
          sector: 'Aerospace & High-Tech Defense (Embraer)',
          regionalHubs: ['São José dos Campos (SP — Vale do Paraíba)', 'Gavião Peixoto (SP)'],
          contributionGdpPercentage: 18,
          description:
            'Headquartered in São José dos Campos alongside the Instituto Tecnológico de Aeronáutica (ITA), Embraer is the world’s third-largest civil aircraft manufacturer, dominating global 70-to-150 seat commercial aviation (E-Jets E2) and military tactical transport (C-390 Millennium).'
        },
        {
          sector: 'Offshore Petroleum & Deepwater Pre-Salt (Pré-Sal)',
          regionalHubs: ['Bacia de Santos (SP)', 'Bacia de Campos (Macaé / Rio de Janeiro)'],
          contributionGdpPercentage: 27,
          description:
            'Petrobras operates ultra-deepwater FPSO vessels extracting over 3 million barrels of oil and gas daily from carbonate reservoirs beneath 2,000 meters of ocean and 2,000 meters of salt beds, making Brazil a top-10 global oil producer.'
        }
      ],
      keyExports: [
        {
          commodity: 'Crude Petroleum Oil',
          globalRank: 'Top 8 Global Exporter (Pre-Salt Basins)',
          keyMarkets: ['China', 'United States', 'European Union', 'India'],
          economicSignificance: 'Accounts for tens of billions in export royalties and sovereign wealth investments in education and science.'
        },
        {
          commodity: 'Specialty Coffee, Sugar & Orange Juice (FCOJ)',
          globalRank: '#1 Global Exporter of Green Coffee & Frozen Concentrated Orange Juice',
          keyMarkets: ['United States', 'European Union', 'Japan'],
          economicSignificance: 'One out of every two glasses of orange juice consumed on Earth is produced from citrus orchards in São Paulo state.'
        },
        {
          commodity: 'Commercial Regional Jets & Executive Aviation',
          globalRank: '#3 Civil Aircraft Manufacturer Globally (Embraer)',
          keyMarkets: ['United States (United, American, JetBlue)', 'Europe (KLM, Lufthansa)', 'Asia'],
          economicSignificance: 'High-value industrial export generating thousands of advanced aeronautical engineering careers.'
        }
      ],
      innovationAndFuture: {
        aviationOrTech:
          'Embraer’s Eve Air Mobility is pioneering electric vertical takeoff and landing (eVTOL) aircraft ("flying cars") with over 2,800 non-binding pre-orders worldwide.',
        renewableEnergy:
          'São Paulo state leads the world in sugarcane ethanol and flex-fuel hybrid vehicle fleets, producing near-zero carbon drop-in fuels.',
        sustainableAgribusiness:
          'Minas Gerais and São Paulo lead the world in third-party certified sustainable coffee farms (Rainforest Alliance, Fair Trade) with automated optical bean sorters.'
      },
      economicStats: [
        { label: 'Share of Brazilian GDP', value: '49.8% (Nearly Half of National Output)' },
        { label: 'Port of Santos Container Traffic', value: 'Largest Port in Latin America' },
        { label: 'Petrobras Daily Production', value: '3.4+ Million Barrels BOE/Day' },
        { label: 'B3 Stock Exchange Market Cap', value: 'USD 800+ Billion' }
      ]
    },
    sports: {
      headline: 'The Cathedral of Football, Interlagos Formula 1 & Street Skateboarding',
      overview:
        'The Southeast is the beating epicentre of Brazilian sporting drama: from the 200,000-voice roar of the Maracanã where Pelé and Zico forged their immortality to the rain-soaked asphalt of Interlagos where Ayrton Senna became a national hero, and the street plazas that birthed global skateboarding icons.',
      football: {
        cultureRole:
          'Home to the most successful football clubs and stadiums in the Western Hemisphere, boasting intense century-old rivalries that divide families and neighborhoods every weekend.',
        legendaryClubs: [
          'Flamengo (Rio de Janeiro — 40M+ Fans)',
          'Corinthians (São Paulo — 30M+ Fans)',
          'São Paulo FC (São Paulo — 3x World Champion)',
          'Palmeiras (São Paulo — 3x Copa Libertadores)',
          'Santos FC (Santos — The House of Pelé and Neymar)',
          'Fluminense (Rio de Janeiro)',
          'Vasco da Gama (Rio de Janeiro)',
          'Atlético Mineiro & Cruzeiro (Belo Horizonte)',
          'Botafogo (Rio de Janeiro)'
        ],
        iconicStadiums: [
          { name: 'Estádio do Maracanã', city: 'Rio de Janeiro (RJ)', capacity: 78838 },
          { name: 'Neo Química Arena', city: 'São Paulo (SP)', capacity: 49205 },
          { name: 'Allianz Parque', city: 'São Paulo (SP)', capacity: 43713 },
          { name: 'Estádio do Morumbi (MorumBIS)', city: 'São Paulo (SP)', capacity: 66795 },
          { name: 'Estádio Mineirão', city: 'Belo Horizonte (MG)', capacity: 61846 },
          { name: 'Vila Belmiro (Urbano Caldeira)', city: 'Santos (SP)', capacity: 16068 }
        ],
        historicMoments: [
          'Pelé scoring his 1,000th career goal (O Milésimo) from a penalty kick for Santos against Vasco da Gama in the Maracanã on November 19, 1969',
          'Santos FC winning back-to-back Intercontinental Cups (1962, 1963) against European champions Benfica and AC Milan',
          'São Paulo FC winning three FIFA Club World Championships (1992, 1993 under Telê Santana, 2005 under Rogério Ceni)',
          'Flamengo’s magical 1981 and 2019 Copa Libertadores triumphs led by Zico and Gabigol'
        ],
        localDerbies: [
          'Fla-Flu (Flamengo vs. Fluminense — "Born 40 minutes before eternity")',
          'Derby Paulista (Corinthians vs. Palmeiras — Named among the top 10 derbies in the world)',
          'Clássico Mineiro (Atlético Mineiro vs. Cruzeiro in Belo Horizonte)',
          'Choque-Rei (São Paulo vs. Palmeiras)'
        ]
      },
      martialArts: [
        {
          discipline: 'Brazilian Jiu-Jitsu (Gracie Lineage & Fadda Lineage)',
          roots:
            'Introduced in the 1920s in Rio de Janeiro when Japanese judoka Mitsuyo Maeda (Conde Koma) taught Carlos Gracie, who with his brother Hélio Gracie modified traditional techniques to favor leverage and ground submission over raw strength.',
          philosophy: 'The smaller, weaker person can successfully defend and submit a larger, stronger adversary using leverage and technique.',
          renownedMasters: ['Hélio Gracie', 'Carlos Gracie', 'Rickson Gracie', 'Carlson Gracie', 'Oswaldo Fadda', 'Marcelo Garcia']
        },
        {
          discipline: 'Luta Livre Esportiva',
          roots: 'Born on the rougher docks and public beaches of Rio de Janeiro as a no-gi catch-wrestling submission discipline.',
          philosophy: 'Aggressive no-gi takedowns, leg locks, and ground control.',
          renownedMasters: ['Euclydes Hatem (Tatu)', 'Marco Ruas (Pioneer of modern MMA)']
        }
      ],
      outdoorAndExtremeSports: [
        {
          sport: 'Street & Park Skateboarding',
          notableHotspots: ['Praça Roosevelt & Vale do Anhangabaú (São Paulo)', 'Pista de Skate do Chuvisco (SP)', 'Praça XV (Rio)'],
          description:
            'São Paulo is the global street skateboarding capital, producing legends like Rayssa Leal ("A Fadinha"), Kelvin Hoefler, and vert pioneer Bob Burnquist.'
        },
        {
          sport: 'Coastal Surfing, Footvolley (Futevôlei) & Altinha',
          notableHotspots: ['Arpoador & Prainha (Rio de Janeiro)', 'Maresias (São Sebastião, SP)', 'Itacoatiara (Niterói, RJ)'],
          description:
            'Maresias on São Paulo’s north coast nurtured 3x World Surfing Champion Gabriel Medina, while Rio’s sands invented Futevôlei (footvolley) and the communal beach juggling ritual of Altinha.'
        }
      ],
      motorsportOrSkate: {
        narrative:
          'Interlagos has crowned Formula 1 world champions for decades (Emerson Fittipaldi, Ayrton Senna, Lewis Hamilton, Fernando Alonso), while Rio and São Paulo lead the world in professional skateboarding circuits.',
        icons: ['Ayrton Senna (3x F1 World Champion)', 'Pelé (Athlete of the Century)', 'Gabriel Medina (3x WSL World Champion, Maresias SP)', 'Rayssa Leal (Olympic Skateboarding Medalist)']
      }
    }
  }
};

const SOUTH_REGION: RegionData = {
  id: 'south',
  name: 'Sul',
  nameEnglish: 'South',
  tagline: 'Temperate Pines, European Echoes & The Thundering Cataracts',
  colorToken: '#0A4D2E',
  states: [
    { code: 'PR', name: 'Paraná', capital: 'Curitiba' },
    { code: 'SC', name: 'Santa Catarina', capital: 'Florianópolis' },
    { code: 'RS', name: 'Rio Grande do Sul', capital: 'Porto Alegre' }
  ],
  areaKm2: 576409,
  population: 29937706,
  populationPercentageOfBrazil: 14.7,
  densityPerKm2: 51.93,
  climateOverview: 'Humid Subtropical (Cfa/Cfb) — Four well-defined seasons, winter frosts, and occasional highland snowfalls',
  centerCoordinates: [-25.4284, -49.2733],
  coordinates: [-25.4284, -49.2733],
  bounds: [
    [-33.75, -57.65],
    [-22.51, -48.03]
  ],
  spotifyPlaylistId: '37i9dQZF1DX6rV1G92xK2x',
  heroImage: {
    id: 'south-hero',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
    alt: 'The thunderous panoramic cascades of Iguazu Falls enveloped in rainbows',
    caption: 'The deafening horseshoe cataract of the Devil’s Throat at Iguazu Falls.',
    credit: 'Wikimedia Commons / Cataratas do Iguaçu',
    aspectRatio: 'landscape'
  },
  gallery: [
    {
      id: 'south-gal-1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg',
      alt: 'Panoramic cascades and rainbows of Iguazu Falls',
      caption: 'Over 275 individual cataracts spanning nearly three kilometers on the Paraná River border.',
      credit: 'Wikimedia Commons / Natural Wonders',
      aspectRatio: 'landscape'
    },
    {
      id: 'south-gal-2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tangu%C3%A1_Curitiba.jpg',
      alt: 'Curitiba parks and gardens in Paraná',
      caption: 'Iconic ecological parks and landscaped gardens in Curitiba, capital of Paraná.',
      credit: 'Wikimedia Commons / Curitiba Parks',
      aspectRatio: 'landscape'
    },
    {
      id: 'south-gal-3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Itaimb%C3%A9zinho_Canyon_2006.jpg',
      alt: 'Itaimbezinho Canyon in Aparados da Serra',
      caption: '720-meter vertical basalt walls and Araucaria pine forests of Itaimbezinho Canyon.',
      credit: 'Wikimedia Commons / Aparados da Serra',
      aspectRatio: 'landscape'
    },
    {
      id: 'south-gal-4',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Churrasco00003.jpg/1280px-Churrasco00003.jpg',
      alt: 'Slow roasting beef cuts over wood fire barbecue pit',
      caption: 'The authentic ritual of Churrasco Gaúcho slow-roasted over open embers in Rio Grande do Sul.',
      credit: 'Wikimedia Commons / Culinary Traditions',
      aspectRatio: 'landscape'
    },
    {
      id: 'south-gal-5',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg/1280px-Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
      alt: 'Florianópolis bay and bridges in Santa Catarina',
      caption: 'The island capital of Florianópolis ("Ilha da Magia") on the Santa Catarina coast.',
      credit: 'Wikimedia Commons / Florianópolis',
      aspectRatio: 'landscape'
    }
  ],
  featuredVideo: {
    id: 'south-video',
    youtubeId: 'IkUcEkDbpC4',
    title: 'Iguazu Falls 4K Drone Tour — Brazil’s Natural Wonder from Above',
    description: 'Panoramic 4K aerial footage flying through misty canyons, rainbow arches, and the thundering Devil’s Throat of Cataratas do Iguaçu.',
    duration: '10:15',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg'
  },
  landmarks: [
    {
      id: 'lm-cataratas-iguacu',
      name: 'Cataratas do Iguaçu (Iguazu Falls)',
      nativeName: 'Parque Nacional do Iguaçu',
      city: 'Foz do Iguaçu',
      state: 'PR',
      regionId: 'south',
      coordinates: [-25.6953, -54.4367],
      category: 'nature',
      isUnesco: true,
      description: 'The world’s largest and most majestic waterfall system, comprising 275 thunderous cascades spanning 2.7 kilometers along the border of Brazil and Argentina, crowned by the deafening horseshoe canyon of the Garganta do Diabo (Devil’s Throat).',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Iguazu_Cataratas.jpg/960px-Iguazu_Cataratas.jpg',
      highlightFact: 'When US First Lady Eleanor Roosevelt gazed upon Iguazu Falls, she famously exclaimed: "Poor Niagara!"'
    },
    {
      id: 'lm-jardim-botanico-curitiba',
      name: 'Jardim Botânico de Curitiba',
      nativeName: 'Jardim Botânico Francisca Maria Garfunkel Rischbieter',
      city: 'Curitiba',
      state: 'PR',
      regionId: 'south',
      coordinates: [-25.4428, -49.2394],
      category: 'architecture',
      isUnesco: false,
      description: 'The visual symbol of Curitiba, featuring French formal geometric gardens leading to an iconic Art Nouveau triple-domed metal-and-glass greenhouse inspired by London’s Crystal Palace, housing tropical specimen flora.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Curitiba_jardim_botanico.jpg/960px-Curitiba_jardim_botanico.jpg',
      highlightFact: 'Includes the Garden of Sensations—a blindfolded sensory botanical path where visitors experience native plants through touch, aroma, and sound.'
    },
    {
      id: 'lm-serra-rio-do-rastro',
      name: 'Serra do Rio do Rastro',
      nativeName: 'Serra do Rio do Rastro',
      city: 'Lauro Müller',
      state: 'SC',
      regionId: 'south',
      coordinates: [-28.3889, -49.5528],
      category: 'nature',
      isUnesco: false,
      description: 'A spectacular mountain highway (SC-390) featuring 284 hairpin turns dropping precipitously 1,400 meters through lush cloud forest from the cold Bom Jardim da Serra plateau down to the coastal valley.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Panorama_Serra_do_Rio_do_Rastro.jpg/960px-Panorama_Serra_do_Rio_do_Rastro.jpg',
      highlightFact: 'At night, hundreds of solar-powered highway illuminators turn the winding mountain path into a luminous serpent clinging to the basalt cliff.'
    },
    {
      id: 'lm-vale-dos-vinhedos',
      name: 'Vale dos Vinhedos',
      nativeName: 'Indicação de Procedência Vale dos Vinhedos',
      city: 'Bento Gonçalves',
      state: 'RS',
      regionId: 'south',
      coordinates: [-29.1714, -51.5744],
      category: 'culture',
      isUnesco: false,
      description: 'The verdant viticultural hills of the Serra Gaúcha, planted by 19th-century Italian immigrants from Veneto and Trentino, producing world-class Traditional Method sparkling wines (espumantes) and Tannat.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Vale_dos_Vinhedos_RS_%287842483152%29.jpg/960px-Vale_dos_Vinhedos_RS_%287842483152%29.jpg',
      highlightFact: 'Brazil’s first recognized Denomination of Origin (DO) for fine wines, rivaling Champagne and Franciacorta in international competitions.'
    },
    {
      id: 'lm-missoes-jesuiticas',
      name: 'Ruínas de São Miguel das Missões',
      nativeName: 'Sítio Arqueológico de São Miguel Arcanjo',
      city: 'São Miguel das Missões',
      state: 'RS',
      regionId: 'south',
      coordinates: [-28.5631, -54.5542],
      category: 'heritage',
      isUnesco: true,
      description: 'The dramatic ochre sandstone ruins of an 18th-century Jesuit reduction cathedral, where Jesuit priests and Guaraní indigenous artisans lived in an autonomous communal republic before Portuguese and Spanish armies destroyed it in the Guaraní War.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Ru%C3%ADnas_de_S%C3%A3o_Miguel_das_Miss%C3%B5es.jpg/960px-Ru%C3%ADnas_de_S%C3%A3o_Miguel_das_Miss%C3%B5es.jpg',
      highlightFact: 'Guaraní leader Sepé Tiaraju died here defending his people’s freedom, uttering the legendary phrase: "Esta terra tem dono!" (This land has an owner!).'
    },
    {
      id: 'lm-canion-itaimbezinho',
      name: 'Cânion do Itaimbezinho',
      nativeName: 'Parque Nacional de Aparados da Serra',
      city: 'Cambará do Sul',
      state: 'RS',
      regionId: 'south',
      coordinates: [-29.1667, -50.1000],
      category: 'nature',
      isUnesco: false,
      description: 'A colossal fracture in the Earth’s crust dropping 720 meters sheer between basalt rock faces spanning 5.8 kilometers, crowned by weeping waterfalls (Cascata das Andorinhas) and ancient Araucaria pine forests.',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Canyon_Itaimbezinho.jpg/960px-Canyon_Itaimbezinho.jpg',
      highlightFact: 'From the Tupi word meaning "cut rock"; morning mountain mist regularly pours over the canyon rims like a celestial waterfall.'
    }
  ],
  modules: {
    geography: {
      headline: 'Ancient Araucaria Pines, Rolling Pampas & The Thundering Cataracts',
      overview:
        'Covering 576,000 square kilometers, the South is the only Brazilian macro-region situated entirely below the Tropic of Capricorn. Its geography is defined by two majestic ecosystems: the highland Araucaria moist forests (Mata de Pinhais) across the Paraná and Santa Catarina plateaus, and the vast, undulating rolling grasslands of the Pampa (Campos Sulinos) stretching across Rio Grande do Sul to Uruguay and Argentina.',
      biomes: [
        {
          name: 'Mata de Araucárias (Paraná Pine Moist Forest)',
          coveragePercentage: 42,
          description:
            'A prehistoric subtropical highland forest dominated by the candelabra-shaped Araucaria angustifolia (Brazilian pine)—an ancient conifer lineage dating back over 200 million years to the Jurassic era.',
          keyFauna: ['Gralha-azul (Azure Jay — Seed Disperser)', 'Papagaio-de-peito-roxo', 'Gato-do-mato-pequeno', 'Bugio-ruivo (Brown Howler Monkey)'],
          keyFlora: ['Araucaria angustifolia (Pinheiro-do-Paraná)', 'Erva-mate (Ilex paraguariensis)', 'Imbuia', 'Canela-sassafrás']
        },
        {
          name: 'Pampa (Campos Sulinos & Gaucho Grasslands)',
          coveragePercentage: 45,
          description:
            'Expansive undulating plains (coxilhas) covered with native tussock grasses, low shrubs, and gallery streams, providing natural grazing lands for livestock for four centuries.',
          keyFauna: ['Ema (Greater Rhea)', 'Perdiz (Spotted Nothura)', 'Tatu-mulita', 'Graxaim-do-campo (Pampas Fox)'],
          keyFlora: ['Capim-forquilha', 'Tupambaé', 'Trevo-nativo', 'Barba-de-bode']
        },
        {
          name: 'Mata Atlântica da Serra do Mar & Coastal Lagoons',
          coveragePercentage: 13,
          description:
            'Steep rainforest escarpments descending to the Atlantic, punctuated by pristine coastal lagoons (Lagoa dos Patos, the world’s largest choked lagoon).',
          keyFauna: ['Baleia-franca-austral (Southern Right Whale)', 'Tucano-de-bico-verde', 'Lontra'],
          keyFlora: ['Figueira-brava', 'Palmito-jussara', 'Guaricana']
        }
      ],
      topography: {
        highestPoint: 'Morro da Boa Vista (Serra Geral, Santa Catarina)',
        elevationMeters: 1827,
        terrainSummary:
          'A stepped geological staircase of volcanic basalt plateaus (Planalto Meridional) dropping through sheer canyons (Aparados da Serra) to the Atlantic coastline, and gently sloping southwestward into the rolling plains of the Pampa.',
        majorFormations: ['Serra Geral & Cânions de Aparados da Serra', 'Serra do Mar Paranaense', 'Planalto de Curitiba', 'Coxilhas do Pampa Gaúcho', 'Lagoa dos Patos']
      },
      hydrology: {
        majorBasins: ['Bacia do Rio Paraná (Itaipu, Iguaçu)', 'Bacia do Rio Uruguai', 'Bacia do Atlântico Sul / Lagoa dos Patos'],
        riverSystemSummary:
          'The mighty Paraná and Iguaçu rivers converge at the Triple Frontier. Just 20 km upstream sits the colossal Itaipu Dam (14,000 MW), jointly owned with Paraguay, while the Iguaçu River plunges over basalt cliffs to form the waterfalls.'
      },
      climate: {
        classification: 'Köppen Cfa (Humid Subtropical) & Cfb (Temperate Highland)',
        temperatureRange: '-4°C to 34°C (Four well-demarcated seasons; winter frosts and highland snow)',
        annualRainfallMm: 1650,
        characteristics:
          'Unlike tropical Brazil, rainfall is evenly distributed throughout all twelve months without a defined dry season. Highland towns like São Joaquim, Urubici, and Gramado regularly register sub-zero temperatures, dense winter frost (geada), and snowfall between June and August.'
      },
      environmentalChallenges: [
        'Restoring the endangered Araucaria angustifolia forest, which was reduced to less than 3% of its original primary coverage by 20th-century logging',
        'Controlling agricultural soil erosion on sloping basalt hillsides through no-till farming',
        'Protecting southern right whale winter calving bays along the Santa Catarina coastline against maritime traffic'
      ],
      keyStats: [
        { label: 'Highland Winter Snowfall', value: 'Regular in Serra Catarinense & Gaúcha' },
        { label: 'Clean Energy Powerhouse', value: 'Itaipu Dam (14,000 MW — World Benchmark)' },
        { label: 'Largest Lagoon on Earth', value: 'Lagoa dos Patos (10,144 km²)' },
        { label: 'Human Development Index (HDI)', value: 'Highest Regional Average in Brazil' }
      ]
    },
    history: {
      headline: 'The Guaraní Jesuit Reductions, The Farrapos Republic & European Colonization',
      overview:
        'The South was forged in the fire of boundary disputes between the Spanish and Portuguese crowns. In the 17th and 18th centuries, Jesuit missionaries and Guaraní indigenous peoples created the communal "Seven Peoples of the Missions." Later, fiercely independent Gaúcho horsemen fought the 10-year Farroupilha separatist war, followed by waves of German, Italian, Polish, and Ukrainian immigrants who built alpine agricultural colonies in the highlands.',
      indigenousHeritage: {
        ancestralPeoples: ['Guaraní (Mbyá & Nhandeva)', 'Kaingang', 'Xokleng (Laklãnõ)'],
        culturalContinuity:
          'The Guaraní discovered the invigorating properties of the native holly tree (Ilex paraguariensis), passing down the sacred knowledge of yerba mate (chimarrão/ka’a) to the Gaúchos. Today, Kaingang basketmakers preserve traditional pine-fiber weaving across Paraná and Santa Catarina.',
        currentDemographics: 'Over 85,000 Indigenous people reside in the South, actively reclaiming ancestral forest lands.'
      },
      colonialAndImperialEra: {
        period: '1626 (Jesuit Reductions) – 1845 (Peace of Ponche Verde)',
        economicDrivers: ['Cattle Ranching (Charqueadas & Salting Houses)', 'Yerba Mate Extraction (Ciclo da Erva-Mate)', 'Lumber & Timber', 'Family Farmstead Agriculture'],
        historicalNarrative:
          'The Treaty of Madrid (1750) traded Portuguese Sacramento for the Spanish Jesuit Missions, leading to the bloody Guaraní War. In 1835, Gaúcho cattlemen led by Bento Gonçalves and Italian revolutionary Giuseppe Garibaldi declared the independent Riograndense Republic (Guerra dos Farrapos), resisting the Brazilian imperial army for ten years before negotiating an honorable peace.'
      },
      afroBrazilianHeritage: {
        culturalLegacy:
          'Enslaved Afro-Brazilians performed the brutal labor of the charqueadas (beef-salting facilities) in Pelotas, cutting and curing tons of sun-dried beef that fed workers throughout the Americas.',
        quilomboHistory:
          'In the Farroupilha War, enslaved men fought heroically in the Lanceiros Negros (Black Lancers) cavalry under the promise of freedom, but were tragically betrayed at the Porongos Massacre in 1844.',
        influenceOnIdentity:
          'Honored today in the Maçambique rhythm of Osório, the Sopapo drum of Pelotas carnival, and modern Black Gaúcho literary movements.'
      },
      immigrationWaves: [
        {
          origin: 'Germany (Hunsrück, Rhineland, Pomerania)',
          period: '1824–1900',
          settlementAreas: ['São Leopoldo & Novo Hamburgo (RS)', 'Vale do Itajaí (Blumenau, Brusque, Joinville, SC)'],
          contribution:
            'Introduced timber-frame architecture (enxaimel), precision metalworking, beer brewing, footwear manufacturing, and preserved the Hunsrik and Pomeranian dialects.'
        },
        {
          origin: 'Italy (Veneto, Trentino, Friuli)',
          period: '1875–1914',
          settlementAreas: ['Serra Gaúcha (Caxias do Sul, Bento Gonçalves, Garibaldi)', 'Southern Santa Catarina (Criciúma)'],
          contribution:
            'Transformed the rocky Serra Gaúcha hills into terraced vineyards, built stone houses, and established Brazil’s commercial wine, polenta, and furniture industries while preserving the Talian language.'
        },
        {
          origin: 'Poland & Ukraine',
          period: '1890–1930',
          settlementAreas: ['Paraná (Curitiba, Prudentópolis, Araucária)'],
          contribution:
            'Brought onion-domed Byzantine churches, hand-painted wooden Pysanky Easter eggs, cabbage and rye culinary staples, and built Curitiba’s celebrated timber farmhouses.'
        }
      ],
      milestones: [
        {
          yearOrEra: '1756',
          title: 'Guaraní War & Sepé Tiaraju',
          description: 'Guaraní indigenous militia fight the combined Spanish-Portuguese armies to protect their mission communities.',
          significance: 'Sepé Tiaraju became an immortal folk hero of indigenous self-determination across the Southern cone.'
        },
        {
          yearOrEra: '1835–1845',
          title: 'Guerra dos Farrapos (Revolução Farroupilha)',
          description: 'A 10-year separatist republican war fought on horseback across the pampas against the Imperial Brazilian army.',
          significance: 'Forged the foundational Gaúcho identity of liberty, courage, and regional pride celebrated every September 20 (Dia do Gaúcho).'
        },
        {
          yearOrEra: '1875 & 1884',
          title: 'Pioneering Immigrant Settlements',
          description: 'Founding of Blumenau (German, 1850) and Caxias do Sul (Italian, 1875).',
          significance: 'Transformed the southern highlands into thriving cooperative agricultural and industrial clusters.'
        },
        {
          yearOrEra: '1971–1990s',
          title: 'Curitiba Urban Revolution under Jaime Lerner',
          description: 'Mayor and urban planner Jaime Lerner pioneers Bus Rapid Transit (BRT), pedestrianized boulevards, and green parks.',
          significance: 'Positioned Curitiba as a global model of sustainable human-centered urbanism.'
        }
      ],
      demographicProfile: {
        urbanRatePercentage: 86.4,
        dominantHeritage: 'European Diaspora (German, Italian, Portuguese/Azorean, Polish, Ukrainian) & Gaúcho Afro-Indigenous',
        summaryMetrics: [
          { label: 'Regional Population', value: '29.93 Million' },
          { label: 'Major Metropolises', value: 'Porto Alegre (4.3M Metro), Curitiba (3.7M Metro)' },
          { label: 'Life Expectancy', value: 'Highest in Brazil (78+ Years)' }
        ]
      }
    },
    culture: {
      headline: 'The Circle of Chimarrão, The Gaúcho Rodeo & Alpine Traditions',
      overview:
        'Southern culture is defined by fierce pride in the land and the warmth of the hearth. In Rio Grande do Sul, life centers on the Centro de Tradições Gaúchas (CTG) where wide-legged bombacha trousers and the button accordion (gaita) reign, while Santa Catarina hosts the world’s second-largest Oktoberfest in Blumenau, and Paraná celebrates the Ukrainian pysanka and Caiçara fandango fiddles.',
      festivals: [
        {
          name: 'Oktoberfest de Blumenau',
          period: 'October (18 consecutive days)',
          location: 'Blumenau, Santa Catarina (Parque Vila Germânica)',
          description:
            'The second-largest Oktoberfest on Earth after Munich, attracting over 650,000 visitors who parade in Bavarian lederhosen and dirndls, drink craft pilsners, dance to brass polkas, and cheer the famous Chopp em Metro beer-drinking competition.',
          highlight: 'Celebrates the resilience and heritage of German settlers who founded the city along the Itajaí-Açu River.'
        },
        {
          name: 'Semana Farroupilha & Acampamento Farroupilha',
          period: 'September 13–20 (Annual)',
          location: 'Porto Alegre (Parque Maurício Sirotsky Sobrinho) & All RS Cities',
          description:
            'A massive celebration commemorating the 1835 Farrapos Republic. Over 300 rustic timber piquetes are erected where families roast ribs on open stakes (costela de chão), drink chimarrão, and dance milongas.',
          highlight: 'The Chama Crioula (Creole Flame) is carried thousands of kilometers on horseback to ignite the festival.'
        },
        {
          name: 'Festa da Uva & Natal Luz de Gramado',
          period: 'February (Festa da Uva, Caxias do Sul) / Oct–Jan (Natal Luz, Gramado)',
          location: 'Caxias do Sul & Gramado, Rio Grande do Sul',
          description:
            'In Caxias do Sul, the Grape Festival celebrates the Italian harvest with allegorical floats and grape distribution. In the alpine town of Gramado, Natal Luz transforms the pine-covered hills into South America’s most magical holiday lighting and orchestral spectacle.',
          highlight: 'Gramado attracts over two million tourists every winter and Christmas season.'
        }
      ],
      musicAndDance: [
        {
          genre: 'Música Nativa Gaúcha & Vanerão',
          originEra: '19th Century (Roots) / 1970s (Calhandra de Ouro / Califórnia da Canção)',
          traditionalInstruments: ['Gaita Ponto (Button Accordion)', 'Violão de Cordas de Aço', 'Bombo Legüero', 'Pandeiro'],
          keyPioneers: ['Teixeirinha', 'Renato Borghetti', 'Yamandu Costa (Guitar Virtuoso)', 'Os Serranos', 'Gaúcho da Fronteira'],
          description:
            'The rousing music of the Southern plains. Featuring virtuosic accordion licks, acoustic guitar arpeggios, and syncopated rhythmic dance grooves (vanerão, milonga, xote, chamamé) celebrating cowboy freedom.'
        },
        {
          genre: 'Fandango Caiçara',
          originEra: '18th Century (Coast of Paraná & Santa Catarina)',
          traditionalInstruments: ['Rabeca (Handcrafted Folk Fiddle)', 'Viola Caiçara', 'Adufe (Square Tambourine)', 'Tamancos de Madeira (Hardwood Clogs)'],
          keyPioneers: ['Mestre Romão', 'Mestre Aorélio', 'Fandangueiros da Ilha dos Valadares (Paranaguá)'],
          description:
            'A UNESCO-recognized coastal community dance where men wearing heavy hardwood clogs execute thunderous tap-dance steps (tamancadas) on wooden floors, accompanied by folk fiddles.'
        },
        {
          genre: 'Chula Gaúcha (The Dance of the Wooden Pole)',
          originEra: '19th Century (Gaúcho Cattle Ranches)',
          traditionalInstruments: ['Acordeom', 'Violão Crioulo'],
          keyPioneers: ['Traditional CTG Dance Champions across Rio Grande do Sul'],
          description:
            'A thrilling test of stamina and acrobatic coordination. Two male dancers duel across a four-meter wooden pole placed on the ground, performing rapid-fire footwork without touching the wood.'
        }
      ],
      traditions: [
        {
          title: 'O Ritual Sagrado do Chimarrão',
          type: 'Ritual',
          description:
            'Hot yerba mate sipped through a silver straw (bomba) from a cured cuia gourd. Passed counter-clockwise from hand to hand in a circle; etiquette dictates never wiping the straw and drinking until the gourd slumps with a hollow gurgle.'
        },
        {
          title: 'Vestimenta Tradicional Gaúcha (Pilcha)',
          type: 'Celebration',
          description:
            'The official cultural attire protected by state law: men wear wide bombacha pants, leather boots, red silk neckerchiefs, and broad-brimmed hats; women wear elegant full-length prenda dresses.'
        },
        {
          title: 'Pêssankas Ucranianas de Prudentópolis',
          type: 'Craft',
          description:
            'Ukrainian-Brazilian artisans in Paraná meticulously hand-draw intricate Christian and pagan talismanic geometric symbols with beeswax and layered natural dyes onto goose and hen eggshells.'
        }
      ],
      folklore: [
        {
          entity: 'Negrinho do Pastoreio',
          lore:
            'A beloved Afro-Gaúcho legend of an enslaved boy who lost an evil rancher’s horse and was brutally whipped, but appeared unharmed the next morning flanked by the Virgin Mary. To this day, Southerners light a candle or leave a coin for him to find lost objects.'
        },
        {
          entity: 'Bruxas de Florianópolis (Ilha da Magia)',
          lore:
            'Azorean folklore tells of witches who gather at midnight on the granite boulders of Itaguaçu in Florianópolis to cast spells and play with fishermen’s boats.'
        }
      ]
    },
    gastronomy: {
      headline: 'The Wood-Fired Churrasco, Mountain Wines & The Barreado Stew',
      overview:
        'Southern cuisine is hearty, wood-fired, and convivial. In the pampas, the holy grail is Churrasco—thick beef ribs and picanha slow-roasted on wooden skewers over open ember trenches seasoned only with coarse salt. In the mountains, Italian and German heritage shines through polenta, galeto al primo canto, and award-winning wines, while the Paraná coast stews beef for 24 hours to create Barreado.',
      philosophy:
        'Communal wood-fired feasts, slow cooking in clay and copper pots, and seasonal consumption of araucaria pine nuts (pinhão) beside cozy fireplaces.',
      signatureDishes: [
        {
          name: 'Authentic Gaucho Open-Pit Barbecue',
          portugueseName: 'Churrasco Gaúcho com Costela de Chão',
          type: 'Main',
          originState: 'Rio Grande do Sul',
          description:
            'Prime beef cuts (especially whole beef ribs / costela janela and picanha) skewered on large wooden stakes driven directly into the ground surrounding a trench of glowing hardwood embers. Slow-roasted for six to eight hours seasoned solely with coarse sea salt (sal grosso), yielding meltingly tender meat with a smoky, caramelized crust.',
          keyIngredients: ['Costela Bovina ou Picanha', 'Sal Grosso (Coarse Sea Salt)', 'Braza de Madeira Nobre', 'Farofa e Vinagrete', 'Mandioca Cozida'],
          culturalSignificance: 'The sacred Sunday social ritual of Southern families; the undisputed global benchmark of barbecue mastery.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Churrasco_Campeiro.jpg/960px-Churrasco_Campeiro.jpg'
        },
        {
          name: '24-Hour Sealed Clay Pot Beef Stew',
          portugueseName: 'Barreado Tradicional de Morretes',
          type: 'Main',
          originState: 'Paraná',
          description:
            'Lean cuts of beef slow-stewed with bacon, garlic, onions, and bay leaves inside a heavy clay pot sealed airtight with a paste of cassava flour and water (barreado) to trap all steam. After 24 hours of simmering, the beef dissolves completely into a thick, velvety gravy tossed tableside with fine manioc flour and served with fried bananas.',
          keyIngredients: ['Beef (Músculo ou Paleta)', 'Bacon & Banha', 'Farinha de Mandioca Branca', 'Banana-da-Terra Frita', 'Cachaça de Morretes'],
          culturalSignificance: 'Created over 300 years ago during coastal carnival celebrations so partygoers could dance for days without cooking.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Barreado.jpg/960px-Barreado.jpg'
        },
        {
          name: 'Italian-Style Spatchcock Roasted Spring Chicken',
          portugueseName: 'Galeto al Primo Canto com Polenta Frita',
          type: 'Main',
          originState: 'Rio Grande do Sul',
          description:
            'Young 30-day-old spring chickens marinated for 24 hours in white wine, sage, garlic, and vinegar, then slow-turned over charcoal grills and brushed continuously with herb lard. Served in infinite courses (rodízio) with crisp fried polenta, radicchio salad with bacon, and homemade tortéi pasta stuffed with sweet pumpkin.',
          keyIngredients: ['Young Spring Chicken (Galeto)', 'White Wine & Fresh Sage', 'Polenta Frita Crocante', 'Salada de Radicchio com Bacon', 'Massa Tortéi de Abóbora'],
          culturalSignificance: 'The signature banquet of Italian immigration in Caxias do Sul and Bento Gonçalves.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Polenta_com_Lingui%C3%A7a.jpg/960px-Polenta_com_Lingui%C3%A7a.jpg'
        },
        {
          name: 'Roasted Araucaria Pine Nuts',
          portugueseName: 'Pinhão Cozido ou na Brasa (Sapecada)',
          type: 'Street Food',
          originState: 'Paraná / Santa Catarina / Rio Grande do Sul',
          description:
            'The nutritious, starch-rich seeds of the ancient Araucaria pine tree, gathered during autumn and winter. Boiled in salted water or roasted directly over burning pine needles (sapecada) until the hard woody hull bursts open, revealing a warm, nutty, creamy kernel.',
          keyIngredients: ['Fresh Pinhão Seeds', 'Sal Grosso', 'Fogueira de Grimpas de Araucária'],
          culturalSignificance: 'Kept indigenous Kaingang and colonial drovers nourished through freezing mountain winters.',
          imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Entrevero_de_pinh%C3%A3o_de_Telemaco_Borba01.jpg/960px-Entrevero_de_pinh%C3%A3o_de_Telemaco_Borba01.jpg'
        }
      ],
      nativeIngredients: [
        {
          name: 'Erva-Mate (Ilex paraguariensis)',
          indigenousOrScientificName: 'Ilex paraguariensis',
          tasteProfile: 'Herbaceous, grassy, pleasantly bitter, with smoky wood undertones and high natural caffeine (mateine) content.',
          traditionalUsage: 'Cured and ground into neon-green powder for hot chimarrão or coarse blends for cold tereré.'
        },
        {
          name: 'Pinhão da Araucária',
          indigenousOrScientificName: 'Seeds of Araucaria angustifolia',
          tasteProfile: 'Dense, nutty, mildly sweet, reminiscent of a cross between sweet potato, chestnut, and chickpea.',
          traditionalUsage: 'Boiled as a snack, ground into gluten-free flour, or cooked into Entrevero de Pinhão with pork and peppers.'
        },
        {
          name: 'Ostras Vivas de Florianópolis',
          indigenousOrScientificName: 'Crassostrea gigas (Pacific Oyster)',
          tasteProfile: 'Plump, briny, sweet, and oceanic, nourished by cold Atlantic upwelling waters.',
          traditionalUsage: 'Florianópolis produces 95% of Brazil’s cultivated oysters, eaten raw on the half shell with fresh lime or gratinéed with Canastra cheese.'
        }
      ],
      traditionalBeverages: [
        {
          name: 'Espumantes do Vale dos Vinhedos (Traditional Method)',
          description: 'Award-winning sparkling wines crafted from Chardonnay and Pinot Noir grapes in the Serra Gaúcha, celebrated for vibrant acidity and fine bubbles.',
          alcoholic: true
        },
        {
          name: 'Chimarrão Gaúcho Tradicional',
          description: 'Hot water (70°C — never boiled) poured over pure green yerba mate in a natural cuia gourd.',
          alcoholic: false
        },
        {
          name: 'Quentão de Vinho com Especiarias',
          description: 'Winter mulled red wine simmered with ginger, cinnamon sticks, cloves, orange peels, and sugar.',
          alcoholic: true
        }
      ],
      streetFoodCulture:
        'In Curitiba’s Feira do Largo da Ordem, Sunday strollers eat crispy German pastéis and Polish pierogis, while on the beaches of Santa Catarina, seaside kiosks serve grilled oysters and steaming bowls of caldo de peixe.'
    },
    economy: {
      headline: 'The Silicon Island of Florianópolis, Precision Manufacturing & Clean Hydropower',
      overview:
        'The South combines European-style cooperative farming with cutting-edge technology and precision engineering. Santa Catarina’s island capital of Florianópolis has emerged as the "Silicon Island" of Latin America, boasting one of the world’s highest startup densities per capita, while Joinville anchors precision electric motors (WEG) and Curitiba leads sustainable urban logistics.',
      gdpContributionPercent: 16.8,
      leadingSectors: [
        {
          sector: 'High-Tech Innovation & Software ("Ilha do Silício")',
          regionalHubs: ['Florianópolis (SC)', 'Curitiba (PR)', 'Porto Alegre (RS — Tecnopuc & Caldeira)'],
          contributionGdpPercentage: 22,
          description:
            'Florianópolis generates more municipal revenue from tech startups, SaaS platforms, and biotech than from tourism. Porto Alegre’s Instituto Caldeira is a premier innovation hub transforming restored industrial riverfront warehouses into tech incubators.'
        },
        {
          sector: 'Heavy Precision Engineering & Electric Motors',
          regionalHubs: ['Joinville (SC)', 'Jaraguá do Sul (SC — WEG Global Headquarters)', 'Caxias do Sul (RS — Marcopolo Bus Bodywork)'],
          contributionGdpPercentage: 35,
          description:
            'WEG in Jaraguá do Sul is one of the world’s largest manufacturers of industrial electric motors, wind turbines, and grid transformers, operating factories on four continents. Marcopolo in Caxias do Sul is a global leader in bus body manufacturing.'
        },
        {
          sector: 'Agribusiness Cooperatives & Fine Viticulture',
          regionalHubs: ['Cascavel & Londrina (PR)', 'Chapecó (SC — Agro-Protein Hub)', 'Bento Gonçalves (RS)'],
          contributionGdpPercentage: 38,
          description:
            'Major agricultural cooperatives (Coamo, Lar, Aurora) lead national pork, poultry, soy, and dairy exports, while the Serra Gaúcha dominates fine viticulture and apple production.'
        }
      ],
      keyExports: [
        {
          commodity: 'Poultry & Pork Meat Protein',
          globalRank: '#1 Global State Exporters of Chicken & Pork (Paraná & Santa Catarina)',
          keyMarkets: ['Japan', 'European Union', 'Middle East (Halal Certified)', 'China'],
          economicSignificance: 'Rigorous sanitary standards make Santa Catarina Brazil’s only territory certified free of foot-and-mouth disease without vaccination by the WOAH.'
        },
        {
          commodity: 'Industrial Electric Motors & Energy Transformers',
          globalRank: 'Global Benchmark Manufacturer (WEG)',
          keyMarkets: ['United States', 'European Union', 'India', 'China'],
          economicSignificance: 'Drives Brazil’s capital goods exports in electrification, green hydrogen, and renewable energy grids.'
        },
        {
          commodity: 'Fine Sparkling Wines (Espumantes) & Table Grapes',
          globalRank: '#1 Brazilian Producer of Fine Traditional Method Espumantes',
          keyMarkets: ['United Kingdom', 'United States', 'France', 'Japan'],
          economicSignificance: 'Garibaldi and Bento Gonçalves win top international blind-tasting medals in London, Paris, and Brussels.'
        }
      ],
      innovationAndFuture: {
        aviationOrTech:
          'ACATE (Associação Catarinense de Tecnologia) in Florianópolis nurtures over 1,500 active tech enterprises, creating an ecosystem often compared to Tel Aviv and Austin.',
        renewableEnergy:
          'Santa Catarina and Rio Grande do Sul lead in offshore wind farm planning and small run-of-river hydroelectric stations (PCHs).',
        sustainableAgribusiness:
          'High cooperative membership models allow small family farmsteads to access digital soil analysis, drone spraying, and fair international market pricing.'
      },
      economicStats: [
        { label: 'Share of Brazilian GDP', value: '16.8% (2nd Highest Macro-Region)' },
        { label: 'Startup Density (Florianópolis)', value: 'Highest per Capita in Latin America' },
        { label: 'Itaipu Clean Energy Generation', value: 'Over 3 Billion MWh Historic Output' },
        { label: 'Brazilian Pork & Poultry Exports', value: 'Over 60% Sourced from the South' }
      ]
    },
    sports: {
      headline: 'The Ferocious Gre-Nal Derby, The Brazilian Storm Surfing Mecca & Futsal Mastery',
      overview:
        'Sport in the South is characterized by passionate territorial loyalty and technical mastery. In Porto Alegre, the Gre-Nal rivalry between Grêmio and Internacional is widely considered the most intense football derby in the Americas, while the rugged granite coast of Santa Catarina is the spiritual home of the "Brazilian Storm" surfing world champions, and indoor futsal courts breed soccer geniuses.',
      football: {
        cultureRole:
          'Southern football is defined by "raça" (grit, stamina, and tactical discipline). The Gre-Nal derby paralyzes the state of Rio Grande do Sul, while Curitiba and Florianópolis boast passionate urban rivalries.',
        legendaryClubs: [
          'Grêmio FBPA (Porto Alegre — 3x Copa Libertadores, 1983 World Champion)',
          'SC Internacional (Porto Alegre — 2x Copa Libertadores, 2006 FIFA Club World Champion)',
          'Club Athletico Paranaense (Curitiba — 2x Copa Sudamericana)',
          'Coritiba Foot Ball Club (Curitiba)',
          'Chapecoense (Chapecó — Immortal 2016 Copa Sudamericana Champions)',
          'Avaí FC & Figueirense FC (Florianópolis)',
          'Juventude & Caxias (Caxias do Sul)'
        ],
        iconicStadiums: [
          { name: 'Arena do Grêmio', city: 'Porto Alegre (RS)', capacity: 55662 },
          { name: 'Estádio Beira-Rio', city: 'Porto Alegre (RS)', capacity: 50128 },
          { name: 'Ligga Arena (Arena da Baixada)', city: 'Curitiba (PR)', capacity: 42372 },
          { name: 'Estádio Couto Pereira', city: 'Curitiba (PR)', capacity: 40502 },
          { name: 'Arena Condá', city: 'Chapecó (SC)', capacity: 20089 }
        ],
        historicMoments: [
          'SC Internacional defeating UEFA Champions League holders FC Barcelona 1–0 in Yokohama to win the 2006 FIFA Club World Cup',
          'Grêmio winning the 1983 Intercontinental Cup in Tokyo over Hamburg SV with two legendary goals by Renato Gaúcho',
          'Athletico Paranaense inaugurating Latin America’s first retractable roof stadium at Arena da Baixada and reaching two Copa Libertadores finals',
          'Ronaldinho Gaúcho rising from Grêmio’s youth academy in Porto Alegre to enchant the world with his smile and golden touch'
        ],
        localDerbies: [
          'Gre-Nal (Grêmio vs. Internacional — The fiercest derby in South America)',
          'Atle-Tiba (Athletico Paranaense vs. Coritiba in Curitiba)',
          'Clássico de Florianópolis (Avaí vs. Figueirense)'
        ]
      },
      martialArts: [
        {
          discipline: 'Muay Thai & Chute Boxe Academy',
          roots:
            'Founded in Curitiba in 1978 by Mestre Rudimar Fedrigo, the Chute Boxe Academy revolutionized global mixed martial arts by combining lethal Thai boxing knees and elbows with aggressive aggression.',
          philosophy: 'Fearless forward pressure, devastating clinch knees, and warrior brotherhood.',
          renownedMasters: ['Wanderlei Silva ("The Axe Murderer")', 'Maurício "Shogun" Rua (UFC Champion)', 'Anderson Silva (Trained in Curitiba)', 'Cris Cyborg (Grand Slam MMA Champion)']
        },
        {
          discipline: 'Judo & Olympic Wrestling',
          roots: 'Porto Alegre’s Sogipa club is one of the most prolific Olympic judo incubators in the Americas.',
          philosophy: 'Precision leverage, mental resilience, and technical perfection.',
          renownedMasters: ['Mayra Aguiar (3x Olympic Medalist & World Champion)', 'Daniel Cargnin (Olympic Medalist)']
        }
      ],
      outdoorAndExtremeSports: [
        {
          sport: 'The Brazilian Storm Surfing Sanctuary',
          notableHotspots: ['Praia do Rosa (Imbituba, SC)', 'Guarda do Embaú (Palhoça, SC)', 'Praia da Joaquina (Florianópolis, SC)', 'Matinhos (PR)'],
          description:
            'Santa Catarina’s rocky granite points and oceanic Atlantic swells host World Surf League (WSL) Championship Tour events and nurtured world champions like Adriano de Souza (Mineirinho).'
        },
        {
          sport: 'Kiteboard Wave, Downwind & Sandboarding',
          notableHotspots: ['Dunas da Joaquina (Florianópolis, SC)', 'Ibiraquera Lagoon (Imbituba, SC)'],
          description: 'Sandboarding on 40-meter sand dunes overlooking the ocean and wave-kitesurfing in crisp Antarctic swells.'
        }
      ],
      motorsportOrSkate: {
        narrative:
          'Florianópolis’s Rio Tavares neighborhood ("RTMF") is Brazil’s historic concrete bowl skateboarding mecca, nurturing Olympic Silver Medalist Pedro Barros.',
        icons: ['Pedro Barros (Olympic Skateboarding Medalist)', 'Ronaldinho Gaúcho (Ballon d’Or Winner, Porto Alegre)', 'Adriano de Souza "Mineirinho" (WSL World Surfing Champion)']
      }
    }
  }
};

// ============================================================================
// Master Dataset Container Export
// ============================================================================
export const brazilData: TerraBrasilisDataset = {
  demographics: DEMOGRAPHICS_DATA,
  regions: {
    north: NORTH_REGION,
    northeast: NORTHEAST_REGION,
    'center-west': CENTER_WEST_REGION,
    southeast: SOUTHEAST_REGION,
    south: SOUTH_REGION
  },
  jeitinhoVocabulary: JEITINHO_VOCABULARY,
  jeitinhoVocab: JEITINHO_VOCABULARY,
  fallbackWeather: FALLBACK_WEATHER,
  fallbackExchangeRate: FALLBACK_EXCHANGE
};

export default brazilData;
