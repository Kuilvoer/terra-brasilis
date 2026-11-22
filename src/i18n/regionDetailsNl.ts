import type {
  RegionId,
  Festival,
  MusicalGenre,
  FolkloreLegend,
  BiomeInfo,
  IndustrySector,
  TradeExport,
  ExtremeSport,
  MartialArt
} from '../types';

/**
 * Uitgebreide Nederlandse vertalingen voor alle festivals van Brazilië
 */
export const FESTIVALS_NL: Record<RegionId, Festival[]> = {
  north: [
    {
      name: 'Festival Folclórico de Parintins (Boi-Bumbá)',
      period: 'Laatste weekend van juni (3 nachten)',
      location: 'Parintins, Amazonas (Bumbódromo)',
      description:
        'Een drie nachten durend theatraal spektakel waarbij het riviereiland Parintins strikt in tweeën splitst: het rode kamp (Boi Garantido, de stier met het hart op het voorhoofd) en het blauwe kamp (Boi Caprichoso, de stier met de ster). Gigantische 20-meter hoge praalwagens, inheemse rituelen en 400-koppige percussiebatterijen battlen zonder een woord te wisselen met de tegenstander.',
      highlight:
        'Erkend door UNESCO als Immaterieel Cultureel Erfgoed; rivaliserende supporters weigeren in juni zelfs producten te kopen in de kleur van de tegenpartij.'
    },
    {
      name: 'Círio de Nazaré',
      period: 'Tweede zondag van oktober',
      location: 'Belém, Pará',
      description:
        'Bekend als het "Kerstmis van de Amazone", waarbij meer dan twee miljoen pelgrims door de met mangobomen omzoomde lanen van Belém trekken achter het houten Mariabeeldje van Nazaré, zich vastklampend aan een 400 meter lang sisaltouw (A Corda) ter inlossing van heilige geloften.',
      highlight:
        'Omvat de Romaria Fluvial – honderden versierde rivierboten die het heiligenbeeld escorteren over de Baía do Guajará – gevolgd door de traditionele familielunch Almoço do Círio.'
    },
    {
      name: 'Festival do Sairé',
      period: 'September (Jaarlijks)',
      location: 'Alter do Chão, Santarém (Pará)',
      description:
        'Een 300 jaar oud syncretisch feest dat religieuze processies combineert met de mythische Boto-danswedstrijd (de strijd tussen de Roze Rivierdolfijn Tucuxi en Boto Cor-de-Rosa) op de witte zoetwaterstranden van de Tapajós-rivier.',
      highlight:
        'Een levende synthese van 17e-eeuwse jezuïetenmissies en voorouderlijke inheemse Amazone-mythologie.'
    }
  ],
  northeast: [
    {
      name: 'Carnaval de Salvador & Recife-Olinda',
      period: 'Februari / Maart (Voor de vasten)',
      location: 'Salvador (BA), Recife & Olinda (PE)',
      description:
        'Twee intens gepassioneerde straatcarnavals: in Salvador trekken gigantische Trio Elétrico-geluidstrucks miljoenen feestgangers langs de Barra-Ondina kustroute naast vorstelijke Afro-blocos (Ilê Aiyê, Filhos de Gandhy, Olodum). In Recife en Olinda is het feest 100% gratis en zonder hekken – beginnend met Galo da Madrugada (meer dan 2 miljoen mensen) en de koperblaas-Frevo en Maracatu door de koloniale straatjes.',
      highlight:
        'Houdt officiële Guinness World Records voor de grootste straatcarnavals ter wereld.'
    },
    {
      name: 'Festas Juninas (São João de Campina Grande & Caruaru)',
      period: 'De gehele maand juni',
      location: 'Campina Grande (PB), Caruaru (PE), Mossoró (RN), Binnenland van Bahia',
      description:
        'Viering van de maïsoogst en de volksheiligen Antonius, Johannes en Petrus. Het hele noordoosten verandert in een openluchtdorp vol kleurrijke vlaggetjesslingers, kampvuren, dampende maïskoeken (pamonha, canjica) en synchrone Quadrilha-danswedstrijden.',
      highlight:
        'Campina Grande en Caruaru strijden jaarlijks om de titel "O Maior São João do Mundo", met ieder ruim 3 miljoen bezoekers over 30 aaneengesloten Forró-avonden.'
    },
    {
      name: 'Bumba Meu Boi do Maranhão & Lavagem do Bonfim',
      period: 'Juni–Juli (Maranhão) / Januari (Salvador)',
      location: 'São Luís (MA) & Salvador (BA)',
      description:
        'In Maranhão is Bumba Meu Boi een door UNESCO erkend muzikaal volkstheater rond rijk geborduurde stierenfiguren, gedanst in verschillende sotaques (Matraca, Zabumba, Orquestra). In Salvador trekken de Baianas in gesteven wit kant naar de Bonfim-kerk om de treden te wassen met geurend lavendelwater.',
      highlight:
        'Verbindt rooms-katholieke devotie, Afro-Braziliaanse Candomblé Oxalá-zegeningen en inheemse folklore.'
    }
  ],
  'center-west': [
    {
      name: 'Cavalhadas de Pirenópolis (Festa do Divino Espírito Santo)',
      period: 'Pinksteren (45–50 dagen na Pasen)',
      location: 'Pirenópolis, Goiás',
      description:
        'Een 200 jaar oud ruiterspektakel dat de middeleeuwse veldslagen tussen Moorse en christelijke ridders naspeelt. Drie dagen lang galopperen gemaskerde ruiters (Mascarados) in felgekleurde satijnen gewaden, stiermaskers en papierbloemen door de straten, begeleid door koperfanfares.',
      highlight:
        'Erkend als Braziliaans Nationaal Cultureel Erfgoed, afgesloten met de dramatische bekering van de Moorse koning tot het christendom.'
    },
    {
      name: 'Festa do Peão de Barretos & Caldas Country Show',
      period: 'Augustus / November',
      location: 'Binnenland van Goiás & regionaal rodeocircuit',
      description:
        'Grootschalige vieringen van de Braziliaanse cowboycultuur met professioneel stierenrijden, team roping (prova de laço) en marathondansconcerten van de grootste Sertanejo-supersterren van Brazilië.',
      highlight:
        'Trekt honderdduizenden bezoekers in lederen laarzen, cowboyhoeden en zilveren riemgespen.'
    },
    {
      name: 'Festival de Inverno de Bonito',
      period: 'Juli / Augustus',
      location: 'Bonito, Mato Grosso do Sul',
      description:
        'Een levendige viering van muziek, milieueducatie, theater en inheemse beeldende kunst tegen het decor van de kristalheldere karstrivieren van Bonito.',
      highlight:
        'Verenigt nationale MPB-artiesten met inheemse Guarani- en Kadiwéu-muziekoptredens.'
    }
  ],
  southeast: [
    {
      name: 'Carnaval do Rio de Janeiro (Desfile das Escolas de Samba)',
      period: 'Februari / Maart (Voor de vasten)',
      location: 'Rio de Janeiro (Sambódromo Marquês de Sapucaí)',
      description:
        'Ontworpen door Oscar Niemeyer in 1984, huisvest de Sambódromo de wereldberoemde parades van de speciale groep sambascholen (Mangueira, Portela, Beija-Flor, Salgueiro). Elke school paradeert met 3.500 dansers, 300 slagwerkers (Bateria) en monumentale bewegende praalwagens over 700 meter asfalt.',
      highlight:
        'Wereldwijd bekeken door meer dan twee miljard mensen, begeleid door meer dan 400 gratis blocos de rua die vijf miljoen feestgangers op de been brengen.'
    },
    {
      name: 'Virada Cultural de São Paulo',
      period: 'Mei (Jaarlijks)',
      location: 'Heel São Paulo (meer dan 100 podia)',
      description:
        'Een aaneengesloten 24-uurs marathon van gratis muziek, theater, beeldende kunst en dans verspreid over meer dan 100 podia, die de metropool transformeert tot het grootste openlucht cultuurfestival van Latijns-Amerika.',
      highlight:
        'Symfonieorkesten spelen bij zonsopgang op het Praça da Sé naast energieke hiphop-battles in de Vale do Anhangabaú.'
    },
    {
      name: 'Festa Literária Internacional de Paraty (FLIP) & Congadas',
      period: 'Juli (Paraty) / Oktober (Minas Gerais)',
      location: 'Paraty (RJ) & Ouro Preto (MG)',
      description:
        'In het koloniale Paraty vullen befaamde auteurs de geplaveide straatjes voor intieme debatten en poëzie. In Minas Gerais herdenken de Congadas met trommels en zwaarden de kroning van de Koning van Congo en Sint-Benedictus.',
      highlight:
        'Verbindt wereldfaam in de hedendaagse literatuur met eeuwenoude Afro-Braziliaanse tradities.'
    }
  ],
  south: [
    {
      name: 'Oktoberfest de Blumenau',
      period: 'Oktober (18 opeenvolgende dagen)',
      location: 'Blumenau, Santa Catarina (Parque Vila Germânica)',
      description:
        'Het op één na grootste Oktoberfest ter wereld na München, dat meer dan 650.000 bezoekers trekt die in Beierse lederhosen en dirndls paraderen, ambachtelijke bieren proeven, dansen op koperblaas-polka\'s en juichen bij de befaamde Chopp em Metro bierdrinkwedstrijd.',
      highlight:
        'Eert de veerkracht en het erfgoed van Duitse kolonisten die de stad stichtten langs de rivier de Itajaí-Açu.'
    },
    {
      name: 'Semana Farroupilha & Acampamento Farroupilha',
      period: '13–20 september (Jaarlijks)',
      location: 'Porto Alegre (Parque Maurício Sirotsky Sobrinho) & heel Rio Grande do Sul',
      description:
        'Een monumentale herdenking van de Farrapos-republiek uit 1835. Meer dan 300 rustieke houten piquetes worden opgebouwd waar families ribben roosteren op open vuur (costela de chão), chimarrão drinken en traditionele milongas dansen.',
      highlight:
        'De Chama Crioula (Creoolse Vlam) wordt te paard over duizenden kilometers vervoerd om het festival te ontsteken.'
    },
    {
      name: 'Festa da Uva & Natal Luz de Gramado',
      period: 'Februari (Festa da Uva, Caxias do Sul) / Okt–Jan (Natal Luz, Gramado)',
      location: 'Caxias do Sul & Gramado, Rio Grande do Sul',
      description:
        'In Caxias do Sul viert het Druivenfeest de Italiaanse wijnoogst met praalwagens en druivenuitdelingen. In het bergdorp Gramado tovert Natal Luz de met dennen bedekte heuvels om tot het meest magische lichtjes- en orkestspektakel van Zuid-Amerika.',
      highlight:
        'Gramado trekt elke winter en kerstperiode meer dan twee miljoen bezoekers.'
    }
  ]
};

/**
 * Uitgebreide Nederlandse vertalingen voor muzikale genres en instrumenten
 */
export const MUSIC_AND_DANCE_NL: Record<RegionId, MusicalGenre[]> = {
  north: [
    {
      genre: 'Carimbó',
      originEra: '17e eeuw (inheems & Afro-Amazone)',
      traditionalInstruments: ['Curimbó-trommel', 'Maracás', 'Gané', 'Fluit', 'Banjo'],
      keyPioneers: ['Pinduca (Koning van Carimbó)', 'Dona Onete', 'Mestre Verequete'],
      description:
        'Opzwepend kustritme uit Pará met hypnotiserende trommels, sensuele heupbewegingen en wervelende bloemenrokken, waarbij dansers op blote voeten over het rivierzand glijden.'
    },
    {
      genre: 'Guitarrada',
      originEra: 'Jaren 70',
      traditionalInstruments: ['Elektrische gitaar met delay', 'Basgitaar', 'Timbales', 'Bongos'],
      keyPioneers: ['Mestre Vieira', 'Mestre Curica', 'Aldo Sena'],
      description:
        'Tropische instrumentale surf-rock vermengd met Carimbó, Merengue en Cumbia uit het Amazonebekken, gekenmerkt door virtuoze gitaarsolo\'s vol echo en vibrato.'
    },
    {
      genre: 'Toada de Boi-Bumbá',
      originEra: 'Begin 20e eeuw',
      traditionalInstruments: ['Surdo', 'Caixa', 'Rochas', 'Tamborim', 'Synthesizer'],
      keyPioneers: ['Arlindo Júnior', 'David Assayag', 'Chico da Silva'],
      description:
        'De epische hymnes van het Parintins-festival, gekenmerkt door gigantische koren, meeslepende synchrone percussieritmes en verhalen over woudmythen.'
    }
  ],
  northeast: [
    {
      genre: 'Frevo',
      originEra: 'Eind 19e eeuw (Recife)',
      traditionalInstruments: ['Trompet', 'Trombone', 'Saxofoon', 'Surdo', 'Snaredrum'],
      keyPioneers: ['Capiba', 'Nelson Ferreira', 'SpokFrevo Orquestra'],
      description:
        'Duizelingwekkende acrobatische mars- en carnavalsmuziek met razendsnelle koperfanfares, waarbij dansers met kleurrijke miniatuurparaplu\'s tot 1 meter hoog in de lucht springen.'
    },
    {
      genre: 'Forró (Baião, Xote, Xaxado)',
      originEra: 'Jaren 40 (Luiz Gonzaga)',
      traditionalInstruments: ['Sanfona (accordeon)', 'Zabumba (bastrommel)', 'Triangel'],
      keyPioneers: ['Luiz Gonzaga (Koning van Baião)', 'Jackson do Pandeiro', 'Dominguinhos'],
      description:
        'De intieme, melancholische koppeldans en hartslag van het noordoostelijke binnenland (Sertão), onlosmakelijk verbonden met de São João-oogstfeesten.'
    },
    {
      genre: 'Maracatu Nação',
      originEra: '17e eeuw (Afro-Pernambucaans)',
      traditionalInstruments: ['Alfaia (houten bastrom)', 'Gonguê', 'Caixa', 'Abê', 'Mineiro'],
      keyPioneers: ['Nação Porto Rico', 'Nação Estrela Brilhante', 'Chico Science'],
      description:
        'Koninklijke ceremoniële optochten ter herdenking van de kroning van de Koningen van Congo, aangedreven door zware houten trommels die door de straten dreunen.'
    }
  ],
  'center-west': [
    {
      genre: 'Música Sertaneja & Moda de Viola',
      originEra: 'Jaren 20 (Platteland Goiás & MT)',
      traditionalInstruments: ['Viola caipira (10-snarige gitaar)', 'Akoestische gitaar', 'Accordeon'],
      keyPioneers: ['Tião Carreiro & Pardinho', 'Tonico & Tinoco', 'Chitãozinho & Xororó'],
      description:
        'Het meest beluisterde muziekgenre van hedendaags Brazilië, geworteld in melancholische duetten over het veedrijversleven, verloren liefdes en de oneindige savanne.'
    },
    {
      genre: 'Siriri & Cururu Pantaneiro',
      originEra: '18e eeuw (Mato Grosso)',
      traditionalInstruments: ['Viola de Cocho (uit één boomstam)', 'Ganzá-ratel', 'Mocho-trommelbank'],
      keyPioneers: ['Mestre Albertino', 'Grupo Flor Ribeirinha', 'Dona Domingas'],
      description:
        'Feestelijke volksdans langs de oevers van de Cuiabá-rivier en in het Pantanal-moerasland, gekenmerkt door snelle voetpassen en handgeklap.'
    },
    {
      genre: 'Chamamé & Polca Pantaneira',
      originEra: 'Begin 20e eeuw (Grenszone MS & Paraguay)',
      traditionalInstruments: ['Accordeon', 'Spaanse gitaar', 'Guitarrón'],
      keyPioneers: ['Délio & Delinha', 'Almir Sater', 'Dino Rocha'],
      description:
        'Grensmuziek met weemoedige walsritmes en virtuoze accordeonmelodieën die de eenzaamheid en schoonheid van de overstromingsvlaktes bezingen.'
    }
  ],
  southeast: [
    {
      genre: 'Samba Carioca & Samba de Enredo',
      originEra: 'Jaren 10 (Praça Onze, Rio)',
      traditionalInstruments: ['Cavaquinho', 'Surdo', 'Tamborim', 'Pandeiro', 'Cuíca'],
      keyPioneers: ['Pixinguinha', 'Cartola', 'Noel Rosa', 'Clara Nunes', 'Beth Carvalho'],
      description:
        'De muzikale ziel en nationale identiteit van Brazilië, ontstaan uit Afro-Braziliaanse ontmoetingen in Rio de Janeiro en uitgegroeid tot \'s werelds beroemdste carnavalsritme.'
    },
    {
      genre: 'Bossa Nova',
      originEra: '1958 (Zona Sul van Rio)',
      traditionalInstruments: ['Klassieke nylon-snaar gitaar', 'Gefluisterde zang', 'Subtiele drums'],
      keyPioneers: ['João Gilberto', 'Tom Jobim', 'Vinicius de Moraes', 'Astrud Gilberto'],
      description:
        'Revolutionaire fusie van zachte samba en koele jazzharmonieën die wereldwijd een culturele revolutie ontketende met nummers als "The Girl from Ipanema".'
    },
    {
      genre: 'Choro (Chorinho)',
      originEra: 'Laat 19e eeuw',
      traditionalInstruments: ['7-snarige gitaar', 'Mandoline (Bandolim)', 'Fluit', 'Cavaquinho'],
      keyPioneers: ['Chiquinha Gonzaga', 'Jacob do Bandolim', 'Waldir Azevedo'],
      description:
        'De eerste authentiek Braziliaanse stedelijke populaire muziek; complexe instrumentale hoogstandjes vol virtuositeit, contrapunt en melancholie.'
    }
  ],
  south: [
    {
      genre: 'Milonga & Vanerão Gaúcho',
      originEra: '19e eeuw (Pampas)',
      traditionalInstruments: ['Gaita ponto (accordeon)', 'Spaanse gitaar', 'Bombo legüero'],
      keyPioneers: ['Teixeirinha', 'Renato Borghetti', 'Luiz Carlos Borges'],
      description:
        'De kenmerkende muziek van de zuidelijke pampas: van de melancholische, langzame milonga bij het kampvuur tot de opzwepende, snelle dansvloer-vanerão in de danshuizen.'
    },
    {
      genre: 'Chula Gaúcha',
      originEra: 'Traditionele veedrijversperiode',
      traditionalInstruments: ['Gaita (accordeon)', 'Violão (gitaar)'],
      keyPioneers: ['Tradicionalistas van MTG', 'Grupo Os Fagundes'],
      description:
        'Een virtuoze uitdagingsdans waarbij twee mannelijke dansers in traditionele bombachas-broeken om de beurt ingewikkelde stap- en klopfiguren uitvoeren over een houten lans.'
    },
    {
      genre: 'Fandango Caiçara',
      originEra: '18e eeuw (Kust van Paraná & Santa Catarina)',
      traditionalInstruments: ['Viola Caiçara', 'Rabeca (houten viool)', 'Adufe (handtrommel)'],
      keyPioneers: ['Mestre Brasílio', 'Família Pereira do Fandango'],
      description:
        'Gekloppeldans met handgemaakte houten klompen (tamancos) die dienst doen als percussie-instrument op houten vloeren tijdens gemeenschappelijke oogstfeesten.'
    }
  ]
};

/**
 * Uitgebreide Nederlandse vertalingen voor mythen en folklore
 */
export const FOLKLORE_NL: Record<RegionId, FolkloreLegend[]> = {
  north: [
    {
      entity: 'Curupira',
      lore: 'De legendarische woudgeest met vlammend rood haar en voeten die achterstevoren staan. Zijn sporen misleiden stropers en houthakkers, waardoor ze dieper het oerwoud in dwalen en voorgoed verdwalen.'
    },
    {
      entity: 'Boto Cor-de-Rosa',
      lore: 'De betoverende roze rivierdolfijn die tijdens nachtelijke dorpsfeesten langs de rivier verandert in een knappe man in een smetteloos wit pak met hoed (om zijn blaasgat te verbergen), dorpsmeisjes verleidt en voor dageraad weer in de diepe rivier verdwijnt.'
    },
    {
      entity: 'Iara (Mãe d’Água)',
      lore: 'De onweerstaanbare inheemse waternimf die op rotsen langs de Amazone-rivieren zit, haar lange zwarte haren kamt en met haar hypnotiserende gezang vissers naar de bodem lokt.'
    },
    {
      entity: 'Mapinguari',
      lore: 'Het reusachtige woudmonster bedekt met een dikke rode vacht, met één enkel oog en een mond op zijn buik. Zelfs kogels ketsen af op zijn huid, die ruikt naar bedorven moeras.'
    }
  ],
  northeast: [
    {
      entity: 'Saci-Pererê',
      lore: 'Het ondeugende eenbenige jongetje met een rode magische muts en een houten pijp. Hij verplaatst zich in wervelwinden, laat melk overkoken, maakt vlechtjes in paardenmanen en verdwijnt spoorloos zodra men hem probeert te grijpen.'
    },
    {
      entity: 'Caipora',
      lore: 'De krachtige woudbeschermer die op een enorm wild zwijn rijdt. Hij eist tabak van jagers en straft iedereen die meer dieren doodt dan nodig is voor eigen overleving.'
    },
    {
      entity: 'Boitatá',
      lore: 'De gigantische vurige slang met ogen die oplichten in de duisternis. Hij jaagt over de savannes en verteert iedereen die opzettelijk het woud of het grasland in brand steekt.'
    }
  ],
  'center-west': [
    {
      entity: 'Pai do Mato',
      lore: 'Een torenhoge reus met lange nagels en een luide lach die door de galerijbossen van de Cerrado weerklinkt. Hij beschermt de kuddes wilde dieren tegen meedogenloze stropers.'
    },
    {
      entity: 'Minhocão do Pari',
      lore: 'Een gigantische moerasworm of reuzenwaterslang die onder de bodem van de Cuiabá-rivier leeft en rivieroevers doet instorten zodra boten te dicht bij zijn territorium varen.'
    },
    {
      entity: 'Negrinho do Pastoreio',
      lore: 'De beschermgeest van verloren voorwerpen en veedrijvers. Wie een kaarsje brandt of een tabaksblad achterlaat, krijgt van hem wonderbaarlijke hulp bij het terugvinden van wat kwijt is.'
    }
  ],
  southeast: [
    {
      entity: 'Mula Sem Cabeça',
      lore: 'De onthoofde ezelin die vuur spuwt uit haar hals en op donderdagnacht in galop door historische mijnstadjes en dorpen dendert, met zilveren hoeven die kletteren op de kinderkopjes.'
    },
    {
      entity: 'Chico Rei',
      lore: 'De historische Afrikaanse koning die als slaaf in de goudmijnen van Vila Rica werkte, goudstof in zijn haar smokkelde, zijn eigen vrijheid en die van zijn volk kocht en de prachtige barokke Santa Efigênia-kerk stichtte.'
    },
    {
      entity: 'Lobisomem do Vale',
      lore: 'De weerwolf van de Paraíba-vallei, de zevende zoon in een gezin, die bij volle maan op een viersprong transformeert en over de heuvels dwaalt tot de haan kraait.'
    }
  ],
  south: [
    {
      entity: 'Negrinho do Pastoreio',
      lore: 'De patroonheilige van de pampas. De legende vertelt van een dappere jonge slaaf die onterecht werd gestraft in een mierenhoop, maar door de Maagd Maria ongedeerd werd opgenomen en nu te paard over de velden waakt.'
    },
    {
      entity: 'Salamanca do Jarau',
      lore: 'De magische grot in de heuvels van Rio Grande do Sul waar de Moorse prinses Teiniaguá in de gedaante van een hagedis met een gloeiende edelsteen op haar voorhoofd woont en geluk brengt aan wie haar dapper trotseert.'
    },
    {
      entity: 'Boitatá das Missões',
      lore: 'De vuurgloed die over de velden en de jezuïetenruïnes zweeft, het symbool van de oeroude vlam van de pampa\'s die wandelaars gidst en boosdoeners schrik aanjaagt.'
    }
  ]
};

/**
 * Uitgebreide Nederlandse vertalingen voor alle 6 officiële biomen en regionale overgangszones
 */
export const BIOMES_NL: Record<string, Partial<BiomeInfo>> = {
  'Amazônia (Amazon Rainforest)': {
    name: 'Amazônia (Amazoneregenwoud)',
    description:
      'Het grootste aaneengesloten tropische regenwoud ter wereld. Het beslaat meer dan 60% van het Braziliaanse grondgebied en vormt de grootste zoetwaterbron en koolstofopslag op aarde.',
    keyFauna: [
      'Onça-pintada (Jaguar)',
      'Boto-cor-de-rosa (Amazone-dolfijn)',
      'Harpij-arend',
      'Gouden leeuwaapje',
      'Zwarte kaaiman',
      'Pirarucu-reuzenzeevis'
    ],
    keyFlora: [
      'Samaúma (Woudgigant tot 60m)',
      'Vitória-régia (Reuzenwaterlelie)',
      'Castanheira (Paranootboom)',
      'Açaí-palm',
      'Pau-rosa'
    ]
  },
  'Cerrado & Lavrado Transitions (Tocantins & Roraima)': {
    name: 'Cerrado & Lavrado (Tropische Savanne & Open Vlaktes)',
    description:
      'Uitgestrekte overgangsgebieden tussen het Amazonebekken en de centrale savannes, gekenmerkt door diepgewortelde struiken en unieke savanne-eilanden in het uiterste noorden van Brazilië.',
    keyFauna: ['Lobo-guará (Manenwolf)', 'Tamanduá-bandeira (Grote miereneter)', 'Ema (Nandoe)'],
    keyFlora: ['Buriti-palm', 'Ipê-amarelo', 'Capim-dourado']
  },
  'Caatinga (White Forest - 100% Exclusive to Brazil)': {
    name: 'Caatinga (Exclusief Braziliaans Droogwoud)',
    description:
      'Van het Tupi-woord voor "wit woud": het enige bioom dat voor 100% uitsluitend in Brazilië voorkomt. Een wonderbaarlijk veerkrachtig landschap van doornbomen en torenhoge cactussen die na de eerste regen binnen 48 uur spectaculair smaragdgroen uitlopen.',
    keyFauna: [
      'Ararinha-azul (Spix\' ara)',
      'Tatu-bola (Driebandgordeldier)',
      'Veado-catingueiro (Sertãohert)',
      'Asa-branca duif'
    ],
    keyFlora: [
      'Mandacaru-cactus',
      'Juazeiro',
      'Umbuzeiro (Heilige levensboom van de Sertão)',
      'Xiquexique-cactus',
      'Carnaúba-waspalm'
    ]
  },
  'Mata Atlântica Costeira, Restingas & Manguezais': {
    name: 'Mata Atlântica (Kustregenwoud, Duinen & Mangroven)',
    description:
      'Het Atlantische kustregenwoud van Noordoost-Brazilië, inclusief ziltige mangroven en beschermde koraalriffen. Een van de rijkste en meest bedreigde biodiversiteitshotspots ter wereld.',
    keyFauna: ['Mico-leão-dourado', 'Tucano-toco (Reuzentoekan)', 'Zeeschildpadden'],
    keyFlora: ['Pau-Brasil (Brazielhout)', 'Palmito-juçara', 'Kustmangroven']
  },
  'Cerrado (The Inverted Forest & Continental Water Tower)': {
    name: 'Cerrado (Het Omgekeerde Woud & De Watertoren)',
    description:
      'Gekenmerkt door gedraaide bomen met dikke kurkschors en wortels tot 15 meter diep die als een gigantische ondergrondse spons regenwater opslaan en de belangrijkste rivieren van het continent voeden.',
    keyFauna: [
      'Lobo-guará (Manenwolf)',
      'Tamanduá-bandeira (Grote miereneter)',
      'Tatu-canastra (Reuzengordeldier)',
      'Tapir (Anta)'
    ],
    keyFlora: [
      'Pequi-boom',
      'Buriti-palm',
      'Baru-boom',
      'Ipê-amarelo (Nationale gele bloesemboom)'
    ]
  },
  'Pantanal (The World\'s Greatest Tropical Wetland)': {
    name: 'Pantanal (Grootste Tropische Moeras ter Wereld)',
    description:
      'Het grootste aaneengesloten tropische zoetwatermoerasgebied op aarde. In het regenseizoen stroomt meer dan 80% onder water, wat de hoogste concentratie wilde zoogdieren en vogels van heel Zuid-Amerika creëert.',
    keyFauna: [
      'Onça-pintada (Pantanal jaguar)',
      'Capivara (Capibara)',
      'Tuiuiú (Jabiroe-ooievaar)',
      'Jacaré-do-pantanal (Moeraskaaiman)'
    ],
    keyFlora: [
      'Aguapé (Waterhyacint)',
      'Vitória-régia (Reuzenwaterlelie)',
      'Carandá-palm',
      'Piúva-roxa'
    ]
  },
  'Mata Atlântica (Atlantic Forest Hotspot)': {
    name: 'Mata Atlântica (Atlantisch Regenwoud Hotspot)',
    description:
      'Een van de top-5 biodiversiteitshotspots op aarde. Ondanks eeuwenlange verstedelijking herbergt het nevelwoud langs de bergketens Serra do Mar en Mantiqueira duizenden unieke inheemse planten- en diersoorten.',
    keyFauna: [
      'Mico-leão-dourado (Goudkopleeuwaapje)',
      'Muriqui-do-sul (Zuidelijke spinaap)',
      'Tucano-de-bico-preto',
      'Jaguatirica (Ocelot)'
    ],
    keyFlora: [
      'Pau-Brasil (Brazielhout)',
      'Jequitibá-rosa (Monumentale woudreus tot 50m)',
      'Manacá-da-serra',
      'Wilde orchideeën en bromelia\'s'
    ]
  },
  'Cerrado & Campos Rupestres (Interior SP & Minas Gerais)': {
    name: 'Cerrado & Campos Rupestres (Kwartsietrotsen & Savanne)',
    description:
      'Hooggelegen savannes en rotsachtige hoogvlaktes boven 1.000 meter hoogte met een extreem hoog percentage endemische bergflora die groeit op pure kwartsietrotsen.',
    keyFauna: ['Lobo-guará (Manenwolf)', 'Veado-campeiro (Savannehert)', 'Canário-da-terra'],
    keyFlora: ['Canela-de-ema', 'Everlasting bloemen (Sempre-vivas)', 'Kleine ipê\'s']
  },
  'Mata de Araucárias (Paraná Pine Moist Forest)': {
    name: 'Mata de Araucárias (Paraná-Dennen Hooglandwoud)',
    description:
      'Een prehistorisch subtropisch hooglandwoud gedomineerd door de imposante kandelaarvormige Araucaria angustifolia (Paraná-den), een boomsoort die teruggaat tot het Jura-tijdperk 200 miljoen jaar geleden.',
    keyFauna: [
      'Gralha-azul (Azuurblauwe gaai, zaadverspreider)',
      'Papagaio-de-peito-roxo (Paarsborstamazone)',
      'Gato-do-mato-pequeno (Tijgerkat)',
      'Bugio-ruivo (Bruine brulaap)'
    ],
    keyFlora: [
      'Araucaria angustifolia (Pinheiro-do-Paraná)',
      'Erva-mate (Maté-theeboom)',
      'Imbuia-hardhout',
      'Canela-sassafrás'
    ]
  },
  'Pampa (Campos Sulinos & Gaucho Grasslands)': {
    name: 'Pampa (Zuidelijke Graslanden & Gaucho-Pampa)',
    description:
      'Uitgestrekte glooiende grassteppes (coxilhas) met honderden soorten inheemse grassen. De historische bakermat van de Braziliaanse gauchotradities, runderfokkerij en open horizonnen.',
    keyFauna: [
      'Veado-campeiro (Pampahert)',
      'Graxaim-do-campo (Pampavos)',
      'Quero-quero (Sporenkievit)',
      'Perdiz (Pampapatrijs)'
    ],
    keyFlora: [
      'Capim-forrageiro',
      'Espinilho',
      'Macela do campo',
      'Corticeira-do-banhado'
    ]
  },
  // Kortere fallback namen
  Caatinga: {
    name: 'Caatinga (Uniek Braziliaans droogwoud)',
    description:
      'Het enige uitsluitend Braziliaanse bioom op aarde. Een uiterst veerkrachtig doornstruik- en boslandschap dat zich aanpast aan droogte en na regen direct smaragdgroen kleurt.'
  },
  Cerrado: {
    name: 'Cerrado (Tropische boomsavanne)',
    description:
      'De biologisch rijkste savanne ter wereld, bekend als de "wieg der wateren" van Brazilië.'
  },
  Pantanal: {
    name: 'Pantanal (Grootste tropische moeras)',
    description:
      'Het grootste aaneengesloten zoetwatermoeras ter wereld met de hoogste wilddichtheid.'
  },
  Pampa: {
    name: 'Pampa (Zuidelijke graslanden & gauchosteppe)',
    description:
      'Glooiende steppes en subtropische graslanden, bakermat van de gauchocultuur.'
  },
  'Mata Atlântica': {
    name: 'Mata Atlântica (Atlantisch regenwoud)',
    description:
      'Een van de meest biodiverse en bedreigde regenwoudhotspots ter wereld.'
  }
};

/**
 * Uitgebreide Nederlandse vertalingen voor economische sectoren en export
 */
export const ECONOMY_NL: Record<
  RegionId,
  {
    leadingSectors: IndustrySector[];
    keyExports: TradeExport[];
  }
> = {
  north: {
    leadingSectors: [
      {
        sector: 'Vrijhandelszone & Elektronica (PIM)',
        regionalHubs: ['Manaus (AM)', 'Belém (PA)'],
        contributionGdpPercentage: 35,
        description:
          'Geavanceerd industrieel hightech-cluster voor elektronica, mobiele communicatie en tweewielers, aangedreven door speciale belastingfaciliteiten.'
      },
      {
        sector: 'Mijnbouw & Minerale Rijkdom',
        regionalHubs: ['Carajás (PA)', 'Oriximiná (PA)', 'Macapá (AP)'],
        contributionGdpPercentage: 30,
        description:
          'De grootste open ijzerertsmijn ter wereld in Carajás, met daarnaast omvangrijke reserves aan bauxiet, mangaan en koper.'
      },
      {
        sector: 'Bio-economie & Duurzame Bosbouw',
        regionalHubs: ['Belém (PA)', 'Rio Branco (AC)', 'Santarém (PA)'],
        contributionGdpPercentage: 20,
        description:
          'Duurzame oogst van açaí, paranoten, copaíba-oliën en rubber in samenwerking met inheemse reservaten en traditionele oevergemeenschappen.'
      }
    ],
    keyExports: [
      {
        commodity: 'IJzererts & Mineralen',
        globalRank: 'Wereldklasse (#1 zuiverheid)',
        keyMarkets: ['China', 'Japan', 'Europese Unie'],
        economicSignificance:
          'Carajás levert het zuiverste ijzererts ter wereld, getransporteerd via de 892 km lange Estrada de Ferro Carajás naar de diepzeehaven van Itaqui.'
      },
      {
        commodity: 'Consumentenelektronica',
        globalRank: '#1 Fabrikant Zuid-Amerika',
        keyMarkets: ['Binnenlandse Braziliaanse markt', 'Mercosur'],
        economicSignificance:
          'Bijna alle smartphones, televisies en motorfietsen die in Brazilië worden verkocht worden geassembleerd in de Polo Industrial de Manaus.'
      },
      {
        commodity: 'Açaí & Amazone Bio-ingrediënten',
        globalRank: '#1 Wereldexporteur',
        keyMarkets: ['Verenigde Staten', 'Europa', 'Australië'],
        economicSignificance:
          'Belém exporteert jaarlijks duizenden tonnen diepgevroren açaípulp en farmaceutische bosoliën naar de wereldmarkt.'
      }
    ]
  },
  northeast: {
    leadingSectors: [
      {
        sector: 'Hernieuwbare Energie (Wind & Zon)',
        regionalHubs: ['Rio Grande do Norte', 'Bahia', 'Piauí', 'Ceará'],
        contributionGdpPercentage: 28,
        description:
          'Het energieknooppunt van Brazilië, goed voor meer dan 85% van alle windenergie van het land dankzij constante passaatwinden.'
      },
      {
        sector: 'Petrochemie & Groene Waterstof',
        regionalHubs: ['Polo de Camaçari (BA)', 'Havencomplex Pecém (CE)', 'Suape (PE)'],
        contributionGdpPercentage: 26,
        description:
          'Het grootste geïntegreerde industriële complex van het zuidelijk halfrond in Camaçari en baanbrekende groene waterstof-hubs in Pecém.'
      },
      {
        sector: 'Geïrrigeerde Fruitteelt & Agro-industrie',
        regionalHubs: ['Petrolina (PE)', 'Juazeiro (BA)', 'Mossoró (RN)'],
        contributionGdpPercentage: 24,
        description:
          'Hoogtechnologische druiven-, mango- en meloenenteelt in de São Francisco-vallei, met het hele jaar door meerdere oogsten voor export.'
      }
    ],
    keyExports: [
      {
        commodity: 'Vers Fruit (Druiven & Mango\'s)',
        globalRank: '#1 van Brazilië',
        keyMarkets: ['Europese Unie', 'Verenigde Staten', 'Verenigd Koninkrijk'],
        economicSignificance:
          'De São Francisco-vallei produceert meer dan 90% van alle Braziliaanse export van verse tafeldruiven en premium mango\'s.'
      },
      {
        commodity: 'Petrochemische Producten & Kunststoffen',
        globalRank: 'Top 5 Amerikaans continent',
        keyMarkets: ['Noord-Amerika', 'Latijns-Amerika', 'Azië'],
        economicSignificance:
          'Braskem in Camaçari levert thermoplastische harsen en chemische basisbouwstenen aan honderden industriële sectoren.'
      },
      {
        commodity: 'Cellulose & Papier',
        globalRank: 'Mondiaal toonaangevend',
        keyMarkets: ['China', 'Europa'],
        economicSignificance:
          'Suzano\'s megabedrijven in Zuid-Bahia en Maranhão exporteren miljoenen tonnen eucalyptuscellulose voor milieuvriendelijke verpakkingen.'
      }
    ]
  },
  'center-west': {
    leadingSectors: [
      {
        sector: 'Agribusiness & Graanteelt',
        regionalHubs: ['Sorriso (MT)', 'Rondonópolis (MT)', 'Rio Verde (GO)'],
        contributionGdpPercentage: 48,
        description:
          'De mondiale graanschuur: Mato Grosso en Goiás produceren gigantische volumes soja, maïs en katoen met behulp van precisielandbouw en satellietgestuurde oogstmachines.'
      },
      {
        sector: 'Veehouderij & Vleesverwerking',
        regionalHubs: ['Campo Grande (MS)', 'Cuiabá (MT)', 'Goiânia (GO)'],
        contributionGdpPercentage: 26,
        description:
          'Thuisbasis van de grootste rundveestapel van Brazilië en mondiale vleesgiganten zoals JBS, Marfrig en Minerva.'
      },
      {
        sector: 'Bioraffinage & Maïsethanol',
        regionalHubs: ['Lucas do Rio Verde (MT)', 'Dourados (MS)', 'Jataí (GO)'],
        contributionGdpPercentage: 16,
        description:
          'Baanbrekende bioraffinaderijen (o.a. Inpasa) die maïs omzetten in bio-ethanol, schone elektriciteit en hoogwaardig veevoer (DDGS).'
      }
    ],
    keyExports: [
      {
        commodity: 'Sojabonen & Sojameel',
        globalRank: '#1 Wereldwijd',
        keyMarkets: ['China', 'Europese Unie', 'Zuidoost-Azië'],
        economicSignificance:
          'Mato Grosso alleen al produceert meer soja dan de meeste sojaproducerende landen ter wereld, getransporteerd via noordelijke rivierhavens en spoorlijnen.'
      },
      {
        commodity: 'Rundvlees & Dierlijke Eiwitten',
        globalRank: '#1 Wereldexporteur',
        keyMarkets: ['China', 'Midden-Oosten', 'Verenigde Staten'],
        economicSignificance:
          'De regio voedt honderden miljoenen mensen wereldwijd met gecertificeerd, sporeerbaar kwaliteitsrundvlees.'
      },
      {
        commodity: 'Katoen & Maïs',
        globalRank: 'Top 2 Wereldwijd',
        keyMarkets: ['Azië', 'Turkije', 'Afrika'],
        economicSignificance:
          'Mato Grosso is de op één na grootste katoenexporteur ter wereld, bekend om zijn hoogwaardige lange vezels.'
      }
    ]
  },
  southeast: {
    leadingSectors: [
      {
        sector: 'Financiële Diensten & Zakelijk Hoofdkwartier',
        regionalHubs: ['Avenida Faria Lima & Paulista (SP)', 'Rio de Janeiro (RJ)'],
        contributionGdpPercentage: 36,
        description:
          'Het financiële hart van Latijns-Amerika met de B3-effectenbeurs, venture capital hubs, fintechs (Nubank) en internationale banken.'
      },
      {
        sector: 'Offshore Olie & Gas (Pré-Sal)',
        regionalHubs: ['Bacia de Santos (SP/RJ)', 'Macaé (RJ)', 'Vitória (ES)'],
        contributionGdpPercentage: 24,
        description:
          'Ultra-diepwater oliewinning onder een 2.000 meter dikke zoutlaag door Petrobras, goed voor meer dan 75% van de Braziliaanse aardolieproductie.'
      },
      {
        sector: 'Hoogwaardige Industrie & Luchtvaart',
        regionalHubs: ['São José dos Campos (Embraer)', 'ABC Paulista', 'Betim (MG)'],
        contributionGdpPercentage: 22,
        description:
          'Vliegtuigbouw (Embraer is \'s werelds #3 vliegtuigbouwer), automobielassemblage en geavanceerde staal- en machinesectoren.'
      }
    ],
    keyExports: [
      {
        commodity: 'Ruwe Aardolie & Brandstoffen',
        globalRank: 'Top 10 Wereldwijd',
        keyMarkets: ['China', 'Verenigde Staten', 'Europa'],
        economicSignificance:
          'De Pré-Sal-velden in de Santos- en Campos-bekkens exporteren miljoenen vaten lichte ruwe olie per dag.'
      },
      {
        commodity: 'Commerciële & Militaire Vliegtuigen',
        globalRank: '#3 Wereldwijd (Regionale jets)',
        keyMarkets: ['Verenigde Staten', 'Europa', 'Azië'],
        economicSignificance:
          'Embraer levert innovatieve E-Jets en de C-390 Millennium transportvliegtuigen aan \'s werelds grootste luchtvaartmaatschappijen en luchtmachten.'
      },
      {
        commodity: 'Arabica Koffie & IJzererts',
        globalRank: '#1 Wereldexporteur van koffie',
        keyMarkets: ['Duitsland', 'Verenigde Staten', 'Italië', 'Japan'],
        economicSignificance:
          'Minas Gerais en São Paulo produceren meer dan de helft van alle koffie van Brazilië, verscheept via de Haven van Santos.'
      }
    ]
  },
  south: {
    leadingSectors: [
      {
        sector: 'Machinebouw & Duurzame Technologie',
        regionalHubs: ['Jaraguá do Sul (WEG)', 'Caxias do Sul (RS)', 'Curitiba (PR)'],
        contributionGdpPercentage: 32,
        description:
          'Mondiale koplopers in elektromotoren, windturbines en energieoplossingen (WEG) en carrosserieën voor bussen (Marcopolo).'
      },
      {
        sector: 'Agro-industrie & Eiwitproductie',
        regionalHubs: ['Chapecó (SC)', 'Passo Fundo (RS)', 'Cascavel (PR)'],
        contributionGdpPercentage: 30,
        description:
          'Hoogproductieve coöperaties en voedingsgiganten (BRF, Aurora) die pluimvee, varkensvlees, granen en zuivel produceren.'
      },
      {
        sector: 'Mijnbouw, Papier & Wijncultuur',
        regionalHubs: ['Serra Gaúcha (Bento Gonçalves)', 'Telêmaco Borba (PR)'],
        contributionGdpPercentage: 20,
        description:
          'Grootste producent van fijne wijnen en mousserende wijnen in Brazilië, gecombineerd met toonaangevende papier- en kartonreuzen (Klabin).'
      }
    ],
    keyExports: [
      {
        commodity: 'Elektromotoren & Industriële Apparatuur',
        globalRank: 'Mondiaal toonaangevend',
        keyMarkets: ['Verenigde Staten', 'Duitsland', 'China'],
        economicSignificance:
          'WEG in Santa Catarina levert energie-efficiënte industriële motoren en transformatoren aan fabrieken over de hele wereld.'
      },
      {
        commodity: 'Pluimvee & Varkensvlees',
        globalRank: '#1 Pluimvee-exporteur ter wereld',
        keyMarkets: ['Midden-Oosten', 'Japan', 'Europese Unie'],
        economicSignificance:
          'Paraná en Santa Catarina zijn het epicentrum van de mondiale halal-gecertificeerde kippenexport.'
      },
      {
        commodity: 'Papier, Karton & Houtproducten',
        globalRank: 'Wereldklasse',
        keyMarkets: ['Latijns-Amerika', 'Verenigde Staten', 'Europa'],
        economicSignificance:
          'Klabin in Paraná exploiteert gigantische duurzame dennen- en eucalyptusbossen voor gerecycled karton en verpakkingen.'
      }
    ]
  }
};

/**
 * Uitgebreide Nederlandse vertalingen voor sport, stadions, vechtsporten en atleten
 */
export const SPORTS_NL: Record<
  RegionId,
  {
    footballMoments: string[];
    extremeSports: ExtremeSport[];
    martialArts: MartialArt[];
    motorsportOrSkate?: { narrative: string; icons: string[] };
  }
> = {
  north: {
    footballMoments: [
      'De legendarische Klassieker Rio-Nal (Nacional vs Rio Negro) die al sinds 1913 tienduizenden fans naar het stadion trekt in Manaus.',
      'De memorabele WK-wedstrijden van 2014 in de architectonisch unieke Arena da Amazônia, ontworpen naar een inheemse gevlochten mand.'
    ],
    extremeSports: [
      {
        sport: 'Jungle Marathon & Ecologische Trailrunning',
        notableHotspots: ['Tapajós National Forest (PA)', 'Presidente Figueiredo (AM)'],
        description:
          'Een van de zwaarste ultralopen ter wereld, waarbij atleten honderden kilometers afleggen door dicht regenwoud, moerassen en rivieren.'
      },
      {
        sport: 'Sportvissen op Peacock Bass (Tucunaré)',
        notableHotspots: ['Rio Negro (Barcelos, AM)', 'Rio Trombetas (PA)'],
        description:
          'Mondiale topbestemming voor catch-and-release sportvissers op jacht naar de felle Amazone-tucunaré.'
      }
    ],
    martialArts: [
      {
        discipline: 'Amazone Brazilian Jiu-Jitsu (BJJ) & MMA',
        roots:
          'Geïntroduceerd in Manaus in de jaren 1970 door meesters uit de Gracie- en Oswaldo Fadda-bloedlijnen. BJJ versmolt hier met inheemse Luta Marajoara worsteltechnieken tot een meedogenloze, op submissions gerichte stijl.',
        philosophy: 'Onophoudelijke voorwaartse druk, technische guard passes en sociale gemeenschapsprojecten in de favela\'s van Manaus.',
        renownedMasters: ['José Aldo (UFC Vedergewicht Legende)', 'Ronaldo "Jacaré" Souza', 'Saulo & Xande Ribeiro', 'Wallid Ismail', 'Deiveson Figueiredo (Soure, Marajó)']
      },
      {
        discipline: 'Luta Marajoara (Huka-Huka & Traditioneel Worstelen)',
        roots:
          'Beoefend op het eiland Marajó tijdens de feesten van São Sebastião en bijeenkomsten op buffelranches, als een levende synthese van inheemse en caboclo worstelkunsten.',
        philosophy: 'Evenwicht, respect voor moeder aarde en het direct werpen van de tegenstander op de rug in het zand.',
        renownedMasters: ['Traditionele Caboclo worstelaars van Soure en Salvaterra']
      }
    ],
    motorsportOrSkate: {
      narrative:
        'Tocantins en Pará vormen het toneel van adembenemende etappes van de Rally dos Sertões door de goudkleurige duinen van Jalapão, terwijl Belém en Manaus bruisende skateparken aan de rivieroevers herbergen.',
      icons: ['Jogos Mundiais dos Povos Indígenas (Palmas, TO)', 'Rally dos Sertões (Jalapão Etappe)']
    }
  },
  northeast: {
    footballMoments: [
      'De kolkende Ba-Vi derby tussen Bahia en Vitória in de hypermoderne Arena Fonte Nova in Salvador.',
      'De vurige Clássico das Multidões in Recife tussen Sport Recife en Santa Cruz voor volle tribunes.'
    ],
    extremeSports: [
      {
        sport: 'Kitesurfen & Windsurfen',
        notableHotspots: ['Jericoacoara (CE)', 'São Miguel do Gostoso (RN)', 'Barra Grande (PI)'],
        description:
          'Wereldberoemde kitesurf-mekka\'s dankzij 300 dagen per jaar perfecte, constante passaatwinden en warm oceaanwater.'
      },
      {
        sport: 'Capoeira & Vechtkunst',
        notableHotspots: ['Terreiro de Jesus (Salvador)', 'Olinda historische pleinen'],
        description:
          'De door UNESCO erkende Afro-Braziliaanse vechtsportdans vol behendigheid, muziek en spirituele kameraadschap.'
      }
    ],
    martialArts: [
      {
        discipline: 'Capoeira Angola & Capoeira Regional',
        roots:
          'Ontwikkeld door tot slaaf gemaakte Afrikanen op de suikerrietplantages van het Recôncavo Baiano en aan de dokken van Salvador als een dodelijke vechtkunst vermomd als rituele dans, acrobatiek en vraag-en-antwoordliederen.',
        philosophy:
          'Geleid door de hypnotiserende klank van de eensnarige berimbau. Mestre Pastinha legde de lage, filosofische Capoeira Angola vast, terwijl Mestre Bimba in 1932 de explosieve Capoeira Regional creëerde en president Getúlio Vargas overtuigde om de kunst te erkennen als Brazilië\'s ware nationale sport.',
        renownedMasters: ['Mestre Bimba (Manuel dos Reis Machado)', 'Mestre Pastinha (Vicente Ferreira Pastinha)', 'Mestre João Grande', 'Mestre Suassuna']
      },
      {
        discipline: 'Olympisch Boksen & Vechterfgoed',
        roots:
          'Salvador en Bahia vormen de absolute bokshoofdstad van Brazilië, met legendarische gemeenschapsscholen in de Cidade Baixa die generaties olympische medaillewinnaars en wereldkampioenen voortbrengen.',
        philosophy: 'Uithoudingsvermogen, trots van de wijk en pure wilskracht.',
        renownedMasters: ['Acelino "Popó" Freitas (4x Wereldkampioen)', 'Hebert Conceição (Olympisch Goud Tokyo 2020)', 'Robson Conceição (Olympisch Goud Rio 2016)', 'Beatriz Ferreira (Wereldkampioen Boksen)']
      }
    ],
    motorsportOrSkate: {
      narrative:
        'Salvador en Aracaju hebben olympische skateboardfinalisten voortgebracht, terwijl de kustduinen van Rio Grande do Norte het decor vormen voor spectaculaire precisie-rally\'s.',
      icons: ['Ítalo Ferreira (Eerste Olympisch Surfgoud, Baía Formosa RN)', 'Marta (6x FIFA Wereldvoetbalster van het Jaar, Dois Riachos AL)']
    }
  },
  'center-west': {
    footballMoments: [
      'De spectaculaire opkomst van Cuiabá EC naar de hoogste Braziliaanse Série A in de duurzame Arena Pantanal.',
      'Het kolossale Estádio Mané Garrincha in Brasília dat gastheer was van de openingswedstrijd van de Confederations Cup en Olympisch voetbal.'
    ],
    extremeSports: [
      {
        sport: 'Klimmen & Canyoneering',
        notableHotspots: ['Chapada dos Veadeiros (GO)', 'Chapada dos Guimarães (MT)'],
        description:
          'Abseilen langs kristalheldere watervallen en hiken over oeroude kwartskloven onder een diepblauwe savannehemel.'
      },
      {
        sport: 'Speleologie & Zoetwaterduiken',
        notableHotspots: ['Abismo Anhumas (Bonito, MS)', 'Lagoa Misteriosa (Jardim, MS)'],
        description:
          'Afdalen in 72-meter diepe ondergrondse grotten en duiken in kristalheldere meren met zicht tot meer dan 40 meter.'
      }
    ],
    martialArts: [
      {
        discipline: 'Judo & Olympische Vechtsporten',
        roots: 'Brasília en Goiânia beschikken over toonaangevende nationale topsportcentra voor olympisch judo en worstelen.',
        philosophy: 'Mentale discipline, balans, respect en maximale hefboomwerking met minimale krachtsinspanning.',
        renownedMasters: ['Ketleyn Quadros (Eerste Braziliaanse vrouw met een individuele olympische medaille - Brons Judo, Beijing 2008)']
      },
      {
        discipline: 'Luta Tradicional Terena e Xavante (Huka-Huka)',
        roots: 'Traditioneel worstelen op rode savanne-aarde tijdens de Spelen van de Inheemse Volkeren over het Centrale Plateau.',
        philosophy: 'Respect voor voorouders, kracht van de krijger en fysieke waardigheid.',
        renownedMasters: ['Inheemse Xavante en Terena atleten']
      }
    ],
    motorsportOrSkate: {
      narrative:
        'Het Autódromo Internacional de Goiânia organiseert rondes van de Stock Car Pro Series en Moto1000GP, terwijl Brasília beschikt over een iconisch betonnen skatepark aan de oevers van Lake Paranoá.',
      icons: ['Ketleyn Quadros (Olympisch Judo Pionier)', 'Nelson Piquet (3x F1 Wereldkampioen - jarelange inwoner van Brasília)']
    }
  },
  southeast: {
    footballMoments: [
      'Pelé die zijn historische 1.000e doelpunt scoorde in een kolkend Maracanã-stadion in 1969.',
      'De epische Derby Paulista (Corinthians vs Palmeiras) en de klassieker Fla-Flu (Flamengo vs Fluminense).'
    ],
    extremeSports: [
      {
        sport: 'Surfen & Kustwatersporten',
        notableHotspots: ['Saquarema (RJ, Maracanã van de Surf)', 'Itacoatiara (Niterói)', 'Ubatuba (SP)'],
        description:
          'Officiële etappe van de World Surf League (WSL) Championship Tour met krachtige Atlantische oceaandeining.'
      },
      {
        sport: 'Paragliden & Hanggliden',
        notableHotspots: ['Pedra Bonita (São Conrado, Rio)', 'Pico do Ibituruna (Governador Valadares, MG)'],
        description:
          'Zweven over de spectaculaire granieten pieken en stranden van Rio de Janeiro en de thermiek van Minas Gerais.'
      }
    ],
    martialArts: [
      {
        discipline: 'Brazilian Jiu-Jitsu (Gracie- & Fadda-bloedlijnen)',
        roots:
          'Ontstaan in de jaren 1920 in Rio de Janeiro toen de Japanse judoka Mitsuyo Maeda (Conde Koma) lesgaf aan Carlos Gracie. Samen met zijn broer Hélio paste Carlos de technieken aan zodat hefboomwerking en grondvechten zwaarder wogen dan pure fysieke spierkracht.',
        philosophy: 'De kleinere, technisch bekwame beoefenaar kan met hefboomtechniek iedere grotere en sterkere tegenstander controleren en tot overgave dwingen.',
        renownedMasters: ['Hélio Gracie', 'Carlos Gracie', 'Rickson Gracie', 'Carlson Gracie', 'Oswaldo Fadda', 'Marcelo Garcia']
      },
      {
        discipline: 'Luta Livre Esportiva',
        roots: 'Ontstaan aan de ruwe dokken en stadsstranden van Rio de Janeiro als een worsteldiscipline zonder kimono (no-gi catch wrestling).',
        philosophy: 'Directe submissions, effectiviteit en explosieve takedowns.',
        renownedMasters: ['Euclydes Hatem (Tatu)', 'Roberto Leitão', 'Marco Ruas']
      }
    ],
    motorsportOrSkate: {
      narrative:
        'Het circuit van Interlagos in São Paulo heeft decennialang Formule 1-wereldkampioenen gekroond (Emerson Fittipaldi, Ayrton Senna, Lewis Hamilton), terwijl Rio en São Paulo tot de absolute wereldtop behoren in het professionele skateboarden.',
      icons: ['Ayrton Senna (3x F1 Wereldkampioen)', 'Pelé (Atleet van de Eeuw)', 'Gabriel Medina (3x WSL Wereldkampioen)', 'Rayssa Leal (Olympisch Skateboard Medaillewinnares)']
    }
  },
  south: {
    footballMoments: [
      'De Gre-Nal (Grêmio vs Internacional), beschouwd als een van de meest intense en gepassioneerde stadsderby\'s op aarde.',
      'De Atletiba-derby in Curitiba tussen Athletico Paranaense en Coritiba in het futuristische Ligga Arena-stadion.'
    ],
    extremeSports: [
      {
        sport: 'Koudwatersurfen & Big Wave Surfen',
        notableHotspots: ['Praia da Vila (Imbituba, SC)', 'Joaquina (Florianópolis)', 'Torres (RS)'],
        description:
          'Krachtige zuidelijke deining vanuit Antarctica die wereldberoemde golven en professionele surfwedstrijden voedt.'
      },
      {
        sport: 'Canyon Trekking & Bergsport',
        notableHotspots: ['Cânion do Itaimbezinho (Aparados da Serra)', 'Serra do Rio do Rastro (SC)'],
        description:
          'Spectaculaire hikes over duizelingwekkende 700-meter diepe kliffen en uitdagende bergbeklimmingen.'
      }
    ],
    martialArts: [
      {
        discipline: 'Muay Thai & Chute Boxe Academy',
        roots:
          'Opgericht in Curitiba in 1978 door Mestre Rudimar Fedrigo. De Chute Boxe Academy bracht een wereldwijde revolutie teweeg in MMA door Thaise kniestoten en ellebogen te verenigen met onstuitbare agressie.',
        philosophy: 'Onbevreesde voorwaartse druk, verwoestende clinches en hechte vechtersbroederschap.',
        renownedMasters: ['Wanderlei Silva ("The Axe Murderer")', 'Maurício "Shogun" Rua (UFC Kampioen)', 'Anderson Silva (Gevormd in Curitiba)', 'Cris Cyborg (Grand Slam MMA Kampioene)']
      },
      {
        discipline: 'Judo & Sogipa Topsportcentrum',
        roots: 'Porto Alegre\'s Sogipa-club is een van de meest succesvolle olympische judobroedplaatsen van heel Amerika.',
        philosophy: 'Olympische perfectie, discipline en toewijding aan de dojo.',
        renownedMasters: ['Mayra Aguiar (3x Olympisch Medaillewinnares)', 'Daniel Cargnin (Olympisch Brons Tokyo 2020)']
      }
    ],
    motorsportOrSkate: {
      narrative:
        'De wijk Rio Tavares in Florianópolis ("RTMF") is het historische epicentrum van de Braziliaanse betonnen bowl-skatecultuur, de bakermat van olympisch zilveren medaillewinnaar Pedro Barros.',
      icons: ['Pedro Barros (Olympisch Skateboard Medaillewinnaar)', 'Ronaldinho Gaúcho (Ballon d\'Or Winnaar, Porto Alegre)', 'Adriano de Souza "Mineirinho" (WSL Wereldkampioen)']
    }
  }
};


/**
 * Klimaatvertalingen voor NL en PT (zodat climate.classification, temperatureRange en characteristics nooit in het Engels blijven)
 */
export const CLIMATE_LOCALIZED: Record<
  'nl' | 'pt',
  Record<
    RegionId,
    {
      classification: string;
      temperatureRange: string;
      characteristics: string;
    }
  >
> = {
  nl: {
    north: {
      classification: 'Köppen Af (Equatoriaal regenwoud) & Am (Equatoriaal moesson)',
      temperatureRange: '24°C – 33°C (minimale jaarschommeling van ~2°C)',
      characteristics:
        'Het hele jaar warm en vochtig met een gemiddelde luchtvochtigheid van 80–90%. De seizoenen zijn verdeeld in de natte regentijd (dec–mei), wanneer rivieren tot 15 meter stijgen, en de drogere Amazonezomer (jun–nov) waarin witte rivierstranden verschijnen.'
    },
    northeast: {
      classification: 'Köppen As/Aw (Tropische kust) & BSh (Semi-aride Sertão)',
      temperatureRange: '23°C – 36°C (constante zeewind langs de kust)',
      characteristics:
        'Meer dan 300 zonnige dagen per jaar. De kuststrook geniet van constante Atlantische passaatwinden en milde winterregens, terwijl het droge binnenland (Sertão) lange droge periodes kent die na de eerste regen direct opbloeien.'
    },
    'center-west': {
      classification: 'Köppen Aw (Tropisch savanneklimaat)',
      temperatureRange: '18°C – 35°C (koelere winternachten tot 12°C)',
      characteristics:
        'Twee scherp gescheiden seizoenen: een weelderig, regenrijk zomerseizoen (okt–mrt) dat het Pantanal onder water zet, gevolgd door een kurkdroge, zonovergoten winter (apr–sep) met strakblauwe luchten en uitstekend zicht op wilde dieren.'
    },
    southeast: {
      classification: 'Köppen Aw (Tropisch kustklimaat) & Cwb (Hooglandklimaat)',
      temperatureRange: '14°C – 34°C (sterk afhankelijk van hoogte)',
      characteristics:
        'Tropisch warm en zonnig langs de stranden van Rio en Espírito Santo, maar merkbaar frisser in de bergketens van Minas Gerais en de Serra da Mantiqueira, waar zomerse stortbuien worden afgewisseld met heldere, milde winters.'
    },
    south: {
      classification: 'Köppen Cfa & Cfb (Subtropisch & gematigd hoogland)',
      temperatureRange: '0°C – 32°C (vier duidelijke seizoenen)',
      characteristics:
        'De enige regio van Brazilië met vier uitgesproken seizoenen. Zomers zijn warm langs de kust, terwijl zuidelijke polaire koufronten (frentes frias) in de winter vorst en soms sneeuw brengen in de bergen van Santa Catarina en Rio Grande do Sul.'
    }
  },
  pt: {
    north: {
      classification: 'Köppen Af (Equatorial úmido) & Am (Monção equatorial)',
      temperatureRange: '24°C – 33°C (amplitude térmica anual de ~2°C)',
      characteristics:
        'Quente e úmido o ano inteiro, com umidade média de 80% a 90%. O calendário divide-se entre o inverno amazônico chuvoso (dez–mai), quando os rios sobem até 15 metros, e o verão amazônico (jun–nov), quando surgem as praias de rio.'
    },
    northeast: {
      classification: 'Köppen As/Aw (Tropical litorâneo) & BSh (Semiárido)',
      temperatureRange: '23°C – 36°C (ventos alísios constantes na costa)',
      characteristics:
        'Mais de 300 dias de sol por ano. O litoral recebe ventos alísios constantes do Atlântico, enquanto o Sertão semiárido enfrenta secas prolongadas que se transformam em verde intenso logo após as primeiras chuvas.'
    },
    'center-west': {
      classification: 'Köppen Aw (Tropical de savana)',
      temperatureRange: '18°C – 35°C (noites amenas no inverno)',
      characteristics:
        'Duas estações bem definidas: verão chuvoso (out–mar) que alaga a planície pantaneira e inverno seco e ensolarado (abr–set), com céu límpido ideal para observação da fauna.'
    },
    southeast: {
      classification: 'Köppen Aw (Tropical) & Cwb (Tropical de altitude)',
      temperatureRange: '14°C – 34°C (variação conforme a altitude)',
      characteristics:
        'Verões quentes e chuvosos no litoral do Rio e Espírito Santo, contrastando com temperaturas amenas nas serras de Minas Gerais, São Paulo e Mantiqueira durante o inverno seco.'
    },
    south: {
      classification: 'Köppen Cfa & Cfb (Subtropical úmido)',
      temperatureRange: '0°C – 32°C (quatro estações bem definidas)',
      characteristics:
        'A única região do Brasil com quatro estações nítidas. Verões quentes no litoral e invernos rigorosos com frentes frias polares, geadas e ocasional neve nas serras catarinense e gaúcha.'
    }
  }
};
