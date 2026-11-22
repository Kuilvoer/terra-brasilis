/**
 * Terra Brasilis — Demographics API Service with Defensive Validation Guard
 * File: src/services/demographicsApi.ts
 */

import type { BrazilDemographics } from '../types';
import { STATIC_BRAZIL_DEMOGRAPHICS } from '../data/fallbacks';

const REST_COUNTRIES_URL = 'https://restcountries.com/v3.1/alpha/br';

export async function fetchBrazilDemographics(externalSignal?: AbortSignal): Promise<BrazilDemographics> {
  if (externalSignal?.aborted) {
    return STATIC_BRAZIL_DEMOGRAPHICS;
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    if (externalSignal) {
      externalSignal.addEventListener('abort', () => controller.abort(), { once: true });
    }

    const response = await fetch(REST_COUNTRIES_URL, {
      signal: controller.signal,
      headers: { Accept: 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`REST Countries returned status ${response.status}`);
    }

    const data = await response.json();

    // Defensive validation guard: v3.1 deprecated returns { success: false, errors: [...] }
    if (!Array.isArray(data) || data.length === 0 || !data[0]?.population) {
      throw new Error('API returned invalid or deprecated payload');
    }

    const c = data[0];
    const pop = c.population || 215313498;
    const area = c.area || 8515767;

    return {
      commonName: c.name?.common || 'Brazil',
      officialName: c.name?.official || 'República Federativa do Brasil',
      capital: Array.isArray(c.capital) ? c.capital[0] : 'Brasília',
      population: pop,
      populationFormatted: (pop / 1000000).toFixed(1) + ' Million',
      areaKm2: area,
      areaFormatted: area.toLocaleString('pt-BR') + ' km²',
      coastlineKm: STATIC_BRAZIL_DEMOGRAPHICS.coastlineKm,
      unescoSitesCount: STATIC_BRAZIL_DEMOGRAPHICS.unescoSitesCount,
      subregion: c.subregion || 'South America',
      currencyCode: 'BRL',
      currencyName: 'Brazilian Real',
      currencySymbol: 'R$',
      languages: Object.values(c.languages || { por: 'Portuguese' }) as string[],
      borders: c.borders || STATIC_BRAZIL_DEMOGRAPHICS.borders,
      timezones: c.timezones || STATIC_BRAZIL_DEMOGRAPHICS.timezones,
      flagSvgUrl: c.flags?.svg || 'https://flagcdn.com/br.svg',
      coatOfArmsSvgUrl: c.coatOfArms?.svg || STATIC_BRAZIL_DEMOGRAPHICS.coatOfArmsSvgUrl,
      hdiIndex: STATIC_BRAZIL_DEMOGRAPHICS.hdiIndex,
      giniIndex: STATIC_BRAZIL_DEMOGRAPHICS.giniIndex,
      motto: STATIC_BRAZIL_DEMOGRAPHICS.motto
    };
  } catch (err) {
    console.info('Using authoritative IBGE Demographics fallback (v3.1 deprecated):', err);
    return STATIC_BRAZIL_DEMOGRAPHICS;
  }
}
