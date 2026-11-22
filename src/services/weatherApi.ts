/**
 * Terra Brasilis — Open-Meteo Weather API Service (All 5 Regional Capitals)
 * File: src/services/weatherApi.ts
 */

import type { CityWeather } from '../types';
import { FALLBACK_WEATHER_DATA, getWmoCondition } from '../data/fallbacks';

const OPEN_METEO_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-3.1190,-12.9714,-15.7975,-23.5505,-25.4284&longitude=-60.0217,-38.5014,-47.8919,-46.6333,-49.2733&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m';

const CITY_METADATA: Array<{
  city: string;
  region: string;
  regionId: 'north' | 'northeast' | 'center-west' | 'southeast' | 'south';
  climateTag: string;
}> = [
  {
    city: 'Manaus',
    region: 'Noord (Amazonas)',
    regionId: 'north',
    climateTag: 'Equatoriaal regenwoud'
  },
  {
    city: 'Salvador',
    region: 'Noordoost (Bahia)',
    regionId: 'northeast',
    climateTag: 'Tropische kust'
  },
  {
    city: 'Brasília',
    region: 'Centraal-West (DF)',
    regionId: 'center-west',
    climateTag: 'Tropische savanne (Cerrado)'
  },
  {
    city: 'São Paulo',
    region: 'Zuidoost (São Paulo)',
    regionId: 'southeast',
    climateTag: 'Subtropisch hoogland'
  },
  {
    city: 'Curitiba',
    region: 'Zuid (Paraná)',
    regionId: 'south',
    climateTag: 'Subtropisch plateau'
  }
];

export async function fetchRegionalWeather(): Promise<CityWeather[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(OPEN_METEO_URL, {
      signal: controller.signal,
      headers: { Accept: 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Open-Meteo returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length < 4) {
      throw new Error('Unexpected Open-Meteo response structure');
    }

    return data.map((item: any, idx: number) => {
      const meta = CITY_METADATA[idx] || CITY_METADATA[0];
      const cur = item.current || {};
      const wmoCode = typeof cur.weather_code === 'number' ? cur.weather_code : 1;
      const condition = getWmoCondition(wmoCode);

      return {
        city: meta.city,
        region: meta.region,
        regionId: meta.regionId,
        lat: item.latitude || 0,
        lon: item.longitude || 0,
        temperature: Math.round((cur.temperature_2m ?? 24) * 10) / 10,
        apparentTemperature: Math.round((cur.apparent_temperature ?? 25) * 10) / 10,
        humidity: Math.round(cur.relative_humidity_2m ?? 70),
        windSpeed: Math.round((cur.wind_speed_10m ?? 8) * 10) / 10,
        weatherCode: wmoCode,
        conditionLabel: condition.label,
        iconName: condition.icon,
        climateTag: meta.climateTag,
        isFallback: false
      };
    });
  } catch (err) {
    console.warn('Weather fetch failed, utilizing resilient static fallback:', err);
    return FALLBACK_WEATHER_DATA;
  }
}
