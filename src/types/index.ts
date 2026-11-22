/**
 * Terra Brasilis — Core TypeScript Interface Contracts
 * File: src/types/index.ts
 *
 * Authoritative type definitions covering:
 * - Macro-regions and module enumerations
 * - Media items (Unsplash photos, YouTube 4K videos)
 * - Landmarks and geo-coordinates
 * - "Jeitinho Brasileiro" sociolinguistic vocabulary
 * - 6 core educational modules per region
 * - Master RegionData and TerraBrasilisDataset containers
 * - Demographics, weather, and currency exchange states
 * - Navigation and routing state
 */

// ============================================================================
// 1. Identifiers & Enumerations
// ============================================================================

/** The 5 official IBGE macro-regions of Brazil */
export type RegionId = 'north' | 'northeast' | 'center-west' | 'southeast' | 'south';

/** Runtime array of all 5 macro-region IDs */
export const REGION_IDS: readonly RegionId[] = [
  'north',
  'northeast',
  'center-west',
  'southeast',
  'south'
] as const;

/** The 6 core educational modules present in every macro-region */
export type ModuleCategory =
  | 'geography'
  | 'history'
  | 'culture'
  | 'gastronomy'
  | 'economy'
  | 'sports';

/** Runtime array of all 6 core module category identifiers */
export const MODULE_CATEGORIES: readonly ModuleCategory[] = [
  'geography',
  'history',
  'culture',
  'gastronomy',
  'economy',
  'sports'
] as const;

/** Landmark classification categories for map pin filtering */
export type LandmarkCategory =
  | 'nature'
  | 'heritage'
  | 'architecture'
  | 'culture'
  | 'sports';

/** Runtime array of all landmark categories */
export const LANDMARK_CATEGORIES: readonly LandmarkCategory[] = [
  'nature',
  'heritage',
  'architecture',
  'culture',
  'sports'
] as const;

/** Photographic aspect ratio categorization for responsive masonry layout */
export type AspectRatio = 'landscape' | 'portrait' | 'square';

// ============================================================================
// 2. Media & Multimedia Items
// ============================================================================

/** Curated photographic asset from Unsplash CDN */
export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
  credit: string;
  unsplashUser?: string;
  aspectRatio?: AspectRatio;
}

/** 4K scenic documentary or drone footage YouTube video */
export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
}

// ============================================================================
// 3. Landmarks & Geocoordinates
// ============================================================================

/** Cultural, natural, or architectural landmark located within Brazil */
export interface Landmark {
  id: string;
  name: string;
  nativeName?: string;
  city: string;
  state: string;
  regionId: RegionId;
  coordinates: [number, number]; // [latitude, longitude]
  category: LandmarkCategory;
  isUnesco: boolean;
  description: string;
  imageUrl: string;
  highlightFact: string;
}

// ============================================================================
// 4. "Jeitinho Brasileiro" Vocabulary
// ============================================================================

/** Untranslatable Portuguese cultural terms with IPA phonetics & social depth */
export interface JeitinhoTerm {
  id: string;
  term: string;
  phonetic: string;
  literalTranslation: string;
  culturalMeaning: string;
  exampleSentencePt: string;
  exampleSentenceEn: string;
  culturalContext: string;
  regionOrScope: 'National' | 'North' | 'Northeast' | 'Center-West' | 'Southeast' | 'South';
  tags: string[];
}

// ============================================================================
// 5. Six Core Module Interfaces
// ============================================================================

// --- 5.1 Geography & Nature ---

export interface BiomeInfo {
  name: string;
  coveragePercentage: number;
  description: string;
  keyFauna: string[];
  keyFlora: string[];
}

export interface GeographyModule {
  headline: string;
  overview: string;
  biomes: BiomeInfo[];
  topography: {
    highestPoint: string;
    elevationMeters: number;
    terrainSummary: string;
    majorFormations: string[];
  };
  hydrology: {
    majorBasins: string[];
    riverSystemSummary: string;
  };
  climate: {
    classification: string;
    temperatureRange: string;
    annualRainfallMm: number;
    characteristics: string;
  };
  environmentalChallenges: string[];
  keyStats: Array<{ label: string; value: string }>;
}

// --- 5.2 History & Society ---

export interface HistoricalMilestone {
  yearOrEra: string;
  title: string;
  description: string;
  significance: string;
}

export interface ImmigrationWave {
  origin: string;
  period: string;
  settlementAreas: string[];
  contribution: string;
}

export interface HistoryModule {
  headline: string;
  overview: string;
  indigenousHeritage: {
    ancestralPeoples: string[];
    culturalContinuity: string;
    currentDemographics: string;
  };
  colonialAndImperialEra: {
    period: string;
    economicDrivers: string[]; // e.g. "Sugar", "Gold", "Rubber", "Coffee"
    historicalNarrative: string;
  };
  afroBrazilianHeritage: {
    culturalLegacy: string;
    quilomboHistory: string;
    influenceOnIdentity: string;
  };
  immigrationWaves: ImmigrationWave[];
  milestones: HistoricalMilestone[];
  demographicProfile: {
    urbanRatePercentage: number;
    dominantHeritage: string;
    summaryMetrics: Array<{ label: string; value: string }>;
  };
}

// --- 5.3 Culture & Music ---

export interface Festival {
  name: string;
  period: string;
  location: string;
  description: string;
  highlight: string;
}

export interface MusicalGenre {
  genre: string;
  originEra: string;
  traditionalInstruments: string[];
  keyPioneers: string[];
  description: string;
}

export interface Tradition {
  title: string;
  type: 'Craft' | 'Dance' | 'Ritual' | 'Celebration';
  description: string;
}

export interface FolkloreLegend {
  entity: string;
  lore: string;
}

export interface CultureModule {
  headline: string;
  overview: string;
  festivals: Festival[];
  musicAndDance: MusicalGenre[];
  traditions: Tradition[];
  folklore: FolkloreLegend[];
}

// --- 5.4 Gastronomy ---

export interface SignatureDish {
  name: string;
  portugueseName: string;
  type: 'Main' | 'Street Food' | 'Dessert' | 'Beverage';
  originState: string;
  description: string;
  keyIngredients: string[];
  culturalSignificance: string;
  imageUrl?: string;
}

export interface NativeIngredient {
  name: string;
  indigenousOrScientificName?: string;
  tasteProfile: string;
  traditionalUsage: string;
}

export interface TraditionalBeverage {
  name: string;
  description: string;
  alcoholic: boolean;
}

export interface GastronomyModule {
  headline: string;
  overview: string;
  philosophy: string;
  signatureDishes: SignatureDish[];
  nativeIngredients: NativeIngredient[];
  traditionalBeverages: TraditionalBeverage[];
  streetFoodCulture: string;
}

// --- 5.5 Economy & Global Impact ---

export interface IndustrySector {
  sector: string;
  regionalHubs: string[];
  contributionGdpPercentage?: number;
  description: string;
}

export interface TradeExport {
  commodity: string;
  globalRank?: string;
  keyMarkets: string[];
  economicSignificance: string;
}

export interface EconomyModule {
  headline: string;
  overview: string;
  gdpContributionPercent: number;
  leadingSectors: IndustrySector[];
  keyExports: TradeExport[];
  innovationAndFuture: {
    aviationOrTech?: string;
    renewableEnergy?: string;
    sustainableAgribusiness?: string;
  };
  economicStats: Array<{ label: string; value: string }>;
}

// --- 5.6 Sports & Passion ---

export interface FootballStadium {
  name: string;
  city: string;
  capacity: number;
}

export interface FootballHeritage {
  cultureRole: string;
  legendaryClubs: string[];
  iconicStadiums: FootballStadium[];
  historicMoments: string[];
  localDerbies: string[];
}

export interface MartialArt {
  discipline: string;
  roots: string;
  philosophy: string;
  renownedMasters: string[];
}

export interface ExtremeSport {
  sport: string;
  notableHotspots: string[];
  description: string;
}

export interface SportsModule {
  headline: string;
  overview: string;
  football: FootballHeritage;
  martialArts: MartialArt[];
  outdoorAndExtremeSports: ExtremeSport[];
  motorsportOrSkate?: {
    narrative: string;
    icons: string[];
  };
}

// ============================================================================
// 6. Complete Macro-Region Data Contract
// ============================================================================

export interface StateInfo {
  code: string;
  name: string;
  capital: string;
}

export interface RegionData {
  id: RegionId;
  name: string; // e.g. "Norte"
  nameEnglish: string; // e.g. "North"
  tagline: string;
  colorToken: string; // Editorial hex accent color
  states: StateInfo[];
  areaKm2: number;
  population: number;
  populationPercentageOfBrazil: number;
  densityPerKm2: number;
  climateOverview: string;
  centerCoordinates: [number, number]; // [latitude, longitude]
  coordinates?: [number, number]; // Defensive alias for centerCoordinates
  bounds: [[number, number], [number, number]]; // [[south, west], [north, east]]
  spotifyPlaylistId: string;
  heroImage: MediaItem;
  gallery: MediaItem[];
  featuredVideo: VideoItem;
  landmarks: Landmark[];
  modules: {
    geography: GeographyModule;
    history: HistoryModule;
    culture: CultureModule;
    gastronomy: GastronomyModule;
    economy: EconomyModule;
    sports: SportsModule;
  };
}

// ============================================================================
// 7. Master Dataset Container
// ============================================================================

export interface TerraBrasilisDataset {
  demographics: BrazilDemographics;
  regions: Record<RegionId, RegionData>;
  jeitinhoVocabulary: JeitinhoTerm[];
  jeitinhoVocab?: JeitinhoTerm[]; // Defensive alias for jeitinhoVocabulary
  fallbackWeather: CityWeather[];
  fallbackExchangeRate: ExchangeRateState;
}

// ============================================================================
// 8. Public APIs, Demographics & Fallback State Models
// ============================================================================

/** Normalized Brazil macroeconomic and demographic figures */
export interface BrazilDemographics {
  commonName: string;
  officialName: string;
  capital: string;
  population: number;
  populationFormatted: string;
  areaKm2: number;
  areaFormatted: string;
  coastlineKm: number;
  unescoSitesCount: number;
  subregion: string;
  currencyCode: string;
  currencyName: string;
  currencySymbol: string;
  languages: string[];
  borders: string[];
  timezones: string[];
  flagSvgUrl: string;
  coatOfArmsSvgUrl: string;
  hdiIndex: number;
  giniIndex: number;
  motto: string;
}

/** Weather state for regional capital cities from Open-Meteo */
export interface CityWeather {
  city: string;
  region: string;
  regionId: RegionId;
  lat: number;
  lon: number;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  conditionLabel: string;
  iconName: string; // Lucide icon name: 'Sun' | 'CloudSun' | 'Cloud' | 'CloudFog' | 'CloudDrizzle' | 'CloudRain' | 'CloudLightning' | 'Snowflake'
  climateTag: string;
  isFallback?: boolean;
}

/** WMO weather translation code metadata */
export interface WeatherCondition {
  code: number;
  label: string;
  icon: string;
  description: string;
}

/** Foreign exchange rate conversion state from Frankfurter API */
export interface ExchangeRateState {
  baseCurrency: string; // 'EUR'
  targetCurrency: string; // 'BRL'
  rate: number;
  date: string;
  lastUpdated: string;
  isFallback: boolean;
}

/** Regional map bounding and zoom configuration */
export interface RegionBoundsConfig {
  id: RegionId;
  name: string;
  center: [number, number]; // [lat, lng]
  zoom: number;
  bounds: [[number, number], [number, number]]; // [[south, west], [north, east]]
}

/** Curated Spotify playlist item */
export interface SpotifyPlaylist {
  id: string;
  title: string;
  regionId?: RegionId;
  regionName: string;
  genres: string[];
  description: string;
}

// ============================================================================
// 9. Single-Page Application Navigation & View State
// ============================================================================

export type ActiveView =
  | { type: 'home' }
  | { type: 'region'; regionId: RegionId; activeModuleId?: ModuleCategory };
