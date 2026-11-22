/**
 * Terra Brasilis — Frankfurter Currency API Service
 * File: src/services/currencyApi.ts
 */

import type { ExchangeRateState } from '../types';
import { FALLBACK_EXCHANGE_RATE, convertEurToBrl, convertBrlToEur, formatBrl, formatEur } from '../data/fallbacks';

const FRANKFURTER_URL = 'https://api.frankfurter.app/latest?from=EUR&to=BRL';

export async function fetchExchangeRate(): Promise<ExchangeRateState> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(FRANKFURTER_URL, {
      signal: controller.signal,
      headers: { Accept: 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Frankfurter returned status ${response.status}`);
    }

    const data = await response.json();
    const rate = data?.rates?.BRL;

    if (typeof rate !== 'number' || rate <= 0) {
      throw new Error('Invalid rate received from Frankfurter API');
    }

    return {
      baseCurrency: 'EUR',
      targetCurrency: 'BRL',
      rate: Math.round(rate * 10000) / 10000,
      date: data.date || new Date().toISOString().slice(0, 10),
      lastUpdated: new Date().toISOString(),
      isFallback: false
    };
  } catch (err) {
    console.warn('Currency fetch failed, utilizing resilient static fallback:', err);
    return FALLBACK_EXCHANGE_RATE;
  }
}

export { convertEurToBrl, convertBrlToEur, formatBrl, formatEur };
