/**
 * Terra Brasilis — Static API Fallback Datasets & Resilience Layer
 * File: src/data/fallbacks.ts
 *
 * Provides authoritative static datasets and resilient offline fallbacks for:
 * - Multi-city weather (Manaus, Salvador, São Paulo, Curitiba)
 * - Foreign exchange rate baseline (EUR to BRL 6.05)
 * - Official IBGE Brazil macro demographics
 * - WMO weather translation code dictionary & resolver
 * - Regional bounding boxes for Leaflet view transitions
 * - Curated Spotify playlist directory
 * - Currency calculation utility functions
 */

import type {
  CityWeather,
  ExchangeRateState,
  BrazilDemographics,
  WeatherCondition,
  RegionBoundsConfig,
  SpotifyPlaylist,
  RegionId
} from '../types';

// ============================================================================
// 1. Regional Multi-City Weather Fallback
// ============================================================================

/**
 * Static baseline weather observations for 4 contrasting climatic capitals:
 * - Manaus (North / Amazonas): Equatorial Rainforest, high humidity
 * - Salvador (Northeast / Bahia): Tropical Atlantic, coastal sea breeze
 * - São Paulo (Southeast / SP): Subtropical Highland, famous "Garoa" overcast
 * - Curitiba (South / Paraná): Subtropical Highland Plateau, coolest state capital
 */
export const FALLBACK_WEATHER_DATA: CityWeather[] = [
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

// ============================================================================
// 2. Foreign Exchange Baseline Fallback (EUR -> BRL)
// ============================================================================

/**
 * Authoritative baseline foreign exchange conversion rate from EUR to BRL.
 * Used when Frankfurter API network requests fail, timeout, or during offline demo.
 */
export const FALLBACK_EXCHANGE_RATE: ExchangeRateState = {
  baseCurrency: 'EUR',
  targetCurrency: 'BRL',
  rate: 6.05,
  date: '2026-10-29',
  lastUpdated: '2026-10-29T22:20:00Z',
  isFallback: true
};

// ============================================================================
// 3. Official IBGE Brazil Demographics Fallback
// ============================================================================

/**
 * Authoritative macroeconomic and demographic figures compiled from the official
 * IBGE 2022 Census and verified national projections.
 * Used as primary baseline due to REST Countries v3.1 deprecation.
 */
export const STATIC_BRAZIL_DEMOGRAPHICS: BrazilDemographics = {
  commonName: 'Brazil',
  officialName: 'República Federativa do Brasil',
  capital: 'Brasília',
  population: 215313498,
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

// ============================================================================
// 4. WMO Weather Translation Code Dictionary
// ============================================================================

/**
 * Mapping of World Meteorological Organization (WMO) numerical weather codes
 * (0 to 99) to human-readable editorial labels, descriptions, and Lucide icon names.
 */
export const WMO_WEATHER_MAP: Record<number, WeatherCondition> = {
  0: {
    code: 0,
    label: 'Clear Sky',
    icon: 'Sun',
    description: 'Sunny, clear tropical skies'
  },
  1: {
    code: 1,
    label: 'Mainly Clear',
    icon: 'SunMedium',
    description: 'Mostly sunny with scattered coastal breeze'
  },
  2: {
    code: 2,
    label: 'Partly Cloudy',
    icon: 'CloudSun',
    description: 'Sun with intermittent cloud cover'
  },
  3: {
    code: 3,
    label: 'Overcast',
    icon: 'Cloud',
    description: 'Cloudy, overcast skies'
  },
  45: {
    code: 45,
    label: 'Fog',
    icon: 'CloudFog',
    description: 'Highland morning mist and valley fog'
  },
  48: {
    code: 48,
    label: 'Depositing Rime Fog',
    icon: 'CloudFog',
    description: 'Dense cold highland mist'
  },
  51: {
    code: 51,
    label: 'Light Drizzle',
    icon: 'CloudDrizzle',
    description: 'Traditional São Paulo "Garoa" misting'
  },
  53: {
    code: 53,
    label: 'Moderate Drizzle',
    icon: 'CloudDrizzle',
    description: 'Steady fine drizzle'
  },
  55: {
    code: 55,
    label: 'Dense Drizzle',
    icon: 'CloudDrizzle',
    description: 'Heavy drizzle'
  },
  56: {
    code: 56,
    label: 'Light Freezing Drizzle',
    icon: 'CloudSnow',
    description: 'Cold winter mist in southern highlands'
  },
  57: {
    code: 57,
    label: 'Dense Freezing Drizzle',
    icon: 'CloudSnow',
    description: 'Freezing drizzle in Serra Gaúcha'
  },
  61: {
    code: 61,
    label: 'Slight Rain',
    icon: 'CloudRain',
    description: 'Passing tropical shower'
  },
  63: {
    code: 63,
    label: 'Moderate Rain',
    icon: 'CloudRain',
    description: 'Warm steady rain shower'
  },
  65: {
    code: 65,
    label: 'Heavy Rain',
    icon: 'CloudRain',
    description: 'Torrential downpour (Pancada de chuva)'
  },
  66: {
    code: 66,
    label: 'Light Freezing Rain',
    icon: 'CloudSnow',
    description: 'Freezing rain in southern plateaus'
  },
  67: {
    code: 67,
    label: 'Heavy Freezing Rain',
    icon: 'CloudSnow',
    description: 'Heavy freezing rain in high serras'
  },
  71: {
    code: 71,
    label: 'Slight Snow Flurry',
    icon: 'Snowflake',
    description: 'Rare winter frost or flurry in Serra Catarinense'
  },
  73: {
    code: 73,
    label: 'Moderate Snowfall',
    icon: 'Snowflake',
    description: 'Winter highland snowfall in São Joaquim'
  },
  75: {
    code: 75,
    label: 'Heavy Snowfall',
    icon: 'Snowflake',
    description: 'Exceptional winter freeze in high altitudes'
  },
  77: {
    code: 77,
    label: 'Snow Grains',
    icon: 'Snowflake',
    description: 'Granular ice pellets'
  },
  80: {
    code: 80,
    label: 'Slight Rain Showers',
    icon: 'CloudRain',
    description: 'Passing Atlantic shower'
  },
  81: {
    code: 81,
    label: 'Moderate Showers',
    icon: 'CloudRain',
    description: 'Afternoon convective tropical rain'
  },
  82: {
    code: 82,
    label: 'Violent Rain Showers',
    icon: 'CloudRain',
    description: 'Torrential tropical storm downpour'
  },
  85: {
    code: 85,
    label: 'Slight Snow Showers',
    icon: 'Snowflake',
    description: 'Passing winter flurry in southern hills'
  },
  86: {
    code: 86,
    label: 'Heavy Snow Showers',
    icon: 'Snowflake',
    description: 'Heavy winter snow squall'
  },
  95: {
    code: 95,
    label: 'Thunderstorm',
    icon: 'CloudLightning',
    description: 'Tropical summer thunderstorm (Temporal)'
  },
  96: {
    code: 96,
    label: 'Thunderstorm with Slight Hail',
    icon: 'CloudLightning',
    description: 'Severe thunderstorm with light hail'
  },
  99: {
    code: 99,
    label: 'Severe Thunderstorm',
    icon: 'CloudLightning',
    description: 'Violent squall line with heavy hail'
  }
};

/**
 * Resolves any WMO weather integer code to its condition metadata with safe fallback.
 */
export function getWmoCondition(code: number): WeatherCondition {
  if (code in WMO_WEATHER_MAP) {
    return WMO_WEATHER_MAP[code];
  }
  return {
    code,
    label: 'Variable',
    icon: 'CloudSun',
    description: 'Variable atmospheric conditions'
  };
}

// ============================================================================
// 5. Regional Leaflet Bounding Boxes & Centers
// ============================================================================

/**
 * Geometric bounds, centers, and recommended zoom levels for all 5 macro-regions
 * and Brazil national view.
 */
export const BRAZIL_NATIONAL_BOUNDS: RegionBoundsConfig = {
  id: 'southeast', // Default national reference point
  name: 'Brasil (National Overview)',
  center: [-14.2350, -51.9253],
  zoom: 4,
  bounds: [
    [-33.75, -73.98], // Southwest corner
    [5.27, -34.79]    // Northeast corner
  ]
};

export const REGION_BOUNDS: Record<RegionId, RegionBoundsConfig> = {
  north: {
    id: 'north',
    name: 'Norte (North)',
    center: [-3.4653, -62.2159],
    zoom: 5,
    bounds: [
      [-13.69, -73.98],
      [5.27, -46.06]
    ]
  },
  northeast: {
    id: 'northeast',
    name: 'Nordeste (Northeast)',
    center: [-9.5713, -40.5008],
    zoom: 6,
    bounds: [
      [-18.35, -48.75],
      [-1.05, -34.79]
    ]
  },
  'center-west': {
    id: 'center-west',
    name: 'Centro-Oeste (Center-West)',
    center: [-15.6014, -56.0979],
    zoom: 5.5,
    bounds: [
      [-24.06, -61.63],
      [-7.34, -45.91]
    ]
  },
  southeast: {
    id: 'southeast',
    name: 'Sudeste (Southeast)',
    center: [-20.3155, -44.0322],
    zoom: 6,
    bounds: [
      [-25.31, -53.11],
      [-14.23, -39.67]
    ]
  },
  south: {
    id: 'south',
    name: 'Sul (South)',
    center: [-27.2423, -51.3500],
    zoom: 6,
    bounds: [
      [-33.75, -57.65],
      [-22.51, -48.03]
    ]
  }
};

// ============================================================================
// 6. Curated Spotify Playlists Directory
// ============================================================================

/**
 * 7 verified public Spotify playlists covering national musical movements
 * and distinct regional traditions.
 */
export const VERIFIED_SPOTIFY_PLAYLISTS: SpotifyPlaylist[] = [
  {
    id: '37i9dQZF1DX4AyFl3yqHeK',
    title: 'Bossa Nova Classics',
    regionName: 'National Heritage',
    genres: ['Bossa Nova', 'Jazz Samba'],
    description: 'Tom Jobim, João Gilberto, Astrud Gilberto, Vinicius de Moraes'
  },
  {
    id: '37i9dQZF1DX9qNs32fujYe',
    title: 'MPB Inesquecível',
    regionName: 'National Heritage',
    genres: ['MPB', 'Tropicália'],
    description: 'Caetano Veloso, Gilberto Gil, Chico Buarque, Elis Regina, Milton Nascimento'
  },
  {
    id: '37i9dQZF1DX8yF6vP57T2L',
    title: 'Carimbó & Sons do Pará',
    regionId: 'north',
    regionName: 'Norte (Amazonas & Pará)',
    genres: ['Carimbó', 'Guitarrada', 'Tecnobrega'],
    description: 'Dona Onete, Pinduca, Mestre Cupijó, Boi Garantido e Caprichoso'
  },
  {
    id: '37i9dQZF1DWVl5B55l9H9P',
    title: 'Forró Raiz & Baião',
    regionId: 'northeast',
    regionName: 'Nordeste (Sertão & Litoral)',
    genres: ['Forró', 'Baião', 'Xote', 'Axé'],
    description: 'Luiz Gonzaga, Dominguinhos, Alceu Valença, Elba Ramalho'
  },
  {
    id: '37i9dQZF1DWZBCP17jtaq4',
    title: 'Viola Caipira & Raízes Sertanejas',
    regionId: 'center-west',
    regionName: 'Centro-Oeste (Pantanal & Cerrado)',
    genres: ['Moda de Viola', 'Sertanejo de Raiz', 'Chamame'],
    description: 'Almir Sater, Renato Teixeira, Tião Carreiro, Pena Branca & Xavantinho'
  },
  {
    id: '37i9dQZF1DX23o1NfZKqWv',
    title: 'Samba de Raiz',
    regionId: 'southeast',
    regionName: 'Sudeste (Rio de Janeiro & São Paulo)',
    genres: ['Samba de Raiz', 'Choro', 'Pagode'],
    description: 'Cartola, Beth Carvalho, Clara Nunes, Adoniran Barbosa, Zeca Pagodinho'
  },
  {
    id: '37i9dQZF1DX6rV1G92xK2x',
    title: 'Canto e Alma Gaúcha',
    regionId: 'south',
    regionName: 'Sul (Pampas & Serras)',
    genres: ['Música Nativa Gaúcha', 'Milonga', 'Vaneira'],
    description: 'Renato Borghetti, Teixeirinha, Yamandu Costa, Os Serranos'
  }
];

// ============================================================================
// 7. Currency Conversion Utilities
// ============================================================================

/**
 * Converts EUR to BRL with rounding to two decimal places.
 * Sanitizes input to avoid negative values or NaN.
 */
export function convertEurToBrl(amountEur: number, rate: number = FALLBACK_EXCHANGE_RATE.rate): number {
  const safeAmount = Math.max(0, isNaN(amountEur) ? 0 : amountEur);
  return +(safeAmount * rate).toFixed(2);
}

/**
 * Converts BRL to EUR with rounding to two decimal places.
 * Sanitizes input to avoid negative values or NaN.
 */
export function convertBrlToEur(amountBrl: number, rate: number = FALLBACK_EXCHANGE_RATE.rate): number {
  const safeAmount = Math.max(0, isNaN(amountBrl) ? 0 : amountBrl);
  if (rate <= 0) return 0;
  return +(safeAmount / rate).toFixed(2);
}

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const eurFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

/**
 * Formats a numeric value into Brazilian Real currency string (e.g. "R$ 605,00").
 */
export function formatBrl(value: number): string {
  return brlFormatter.format(value);
}

/**
 * Formats a numeric value into Euro currency string (e.g. "€ 100,00").
 */
export function formatEur(value: number): string {
  return eurFormatter.format(value);
}
