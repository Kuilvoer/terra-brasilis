import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Coins, Calculator, RefreshCw } from 'lucide-react';
import type { ExchangeRateState } from '../../types';
import { fetchExchangeRate, formatBrl, formatEur } from '../../services/currencyApi';
import { Skeleton } from '../common/Skeleton';
import { useLanguage } from '../../i18n/LanguageContext';

export const CurrencyWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [exchangeState, setExchangeState] = useState<ExchangeRateState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [amount, setAmount] = useState<string>('100');
  const [direction, setDirection] = useState<'EUR_TO_BRL' | 'BRL_TO_EUR'>('EUR_TO_BRL');

  const loadExchangeRate = async () => {
    setLoading(true);
    try {
      const data = await fetchExchangeRate();
      setExchangeState(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExchangeRate();
  }, []);

  const parsedAmount = Math.max(0, parseFloat(amount.replace(',', '.')) || 0);
  const rate = exchangeState?.rate || 6.05;

  const convertedValue =
    direction === 'EUR_TO_BRL'
      ? parsedAmount * rate
      : rate > 0
        ? parsedAmount / rate
        : 0;

  const handleToggleDirection = () => {
    setDirection((prev) => (prev === 'EUR_TO_BRL' ? 'BRL_TO_EUR' : 'EUR_TO_BRL'));
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-brand-emerald" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-brand-emerald">
              {t.bento.currencyKicker}
            </span>
          </div>
          <button
            type="button"
            onClick={loadExchangeRate}
            title="Frankfurter Open API"
            aria-label="Frankfurter Open API verversen"
            className="p-1.5 rounded-lg hover:bg-brand-surfaceMuted text-brand-slate hover:text-brand-espresso transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-display font-bold text-xl text-brand-espresso">
            {t.bento.currencyTitle}
          </h3>
          {exchangeState && (
            <span className="text-xs font-mono font-bold text-brand-espresso bg-brand-yellow px-2 py-0.5 rounded-md border border-brand-sand">
              1 € = {exchangeState.rate.toFixed(2)} R$
            </span>
          )}
        </div>

        {/* Interactive Calculator Input & Conversion */}
        {loading || !exchangeState ? (
          <div className="space-y-3 py-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <div className="space-y-3">
            {/* Input Row */}
            <div className="relative">
              <label htmlFor="currency-amount-input" className="block text-xs font-sans font-bold text-brand-slate mb-1">
                {direction === 'EUR_TO_BRL' ? t.bento.currencyInputEur : t.bento.currencyInputBrl}
              </label>
              <div className="relative flex items-center">
                <input
                  id="currency-amount-input"
                  type="number"
                  min="0"
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-3.5 pr-20 py-2 bg-brand-surfaceMuted border border-brand-sand rounded-xl text-sm font-bold text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleToggleDirection}
                  title="Wissel valuta"
                  aria-label="Wissel valuta om"
                  className="absolute right-1.5 px-2.5 py-1 rounded-lg bg-brand-espresso text-brand-yellow hover:bg-brand-emerald hover:text-white text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                >
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>{direction === 'EUR_TO_BRL' ? 'EUR' : 'BRL'}</span>
                </button>
              </div>
            </div>

            {/* Quick Amount Presets */}
            <div className="flex items-center gap-1.5">
              {['50', '100', '250', '500'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={`flex-1 py-1 text-xs font-mono font-bold rounded-lg border transition-colors ${
                    amount === preset
                      ? 'bg-brand-espresso text-brand-yellow border-brand-espresso'
                      : 'bg-white text-brand-slate border-brand-sand hover:bg-brand-surfaceMuted'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>

            {/* Result Box */}
            <div className="p-3.5 bg-brand-emerald text-white rounded-2xl border border-brand-sand flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono font-bold text-brand-yellow">
                  {t.bento.currencyResultLabel} ({direction === 'EUR_TO_BRL' ? 'BRL' : 'EUR'})
                </div>
                <div className="font-display font-bold text-2xl text-white mt-0.5">
                  {direction === 'EUR_TO_BRL'
                    ? formatBrl(convertedValue)
                    : formatEur(convertedValue)}
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center border border-brand-sand text-brand-espresso">
                <Calculator className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Status */}
      <div className="mt-3 pt-2 text-[11px] font-mono text-brand-slate flex items-center justify-between border-t border-brand-sand">
        <span>Bron: Frankfurter ECB Open API</span>
        {exchangeState?.isFallback ? (
          <span className="text-amber-700 font-bold">Standaardkoers (6,05)</span>
        ) : (
          <span className="text-brand-emerald font-bold">
            ● {language === 'nl' ? 'Actuele ECB-koers' : 'Live ECB Rate'}
          </span>
        )}
      </div>
    </div>
  );
};
