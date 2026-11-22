import React, { useState, useEffect } from 'react';
import { Globe, Users, Maximize2, Award, Landmark, Map, Zap, Trees } from 'lucide-react';
import type { BrazilDemographics } from '../../types';
import { fetchBrazilDemographics } from '../../services/demographicsApi';
import { Skeleton } from '../common/Skeleton';
import { useLanguage } from '../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../i18n/regionLocalizations';

export const MetricsWidget: React.FC = () => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [metrics, setMetrics] = useState<BrazilDemographics | null>(null);
  const [renewableShare, setRenewableShare] = useState<string>('88,4%');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    fetchBrazilDemographics(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setMetrics(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    // Free World Bank Open Data API (Renewable electricity share in Brazil)
    fetch('https://api.worldbank.org/v2/country/BRA/indicator/EG.ELC.RNEW.ZS?format=json&per_page=5', {
      signal: controller.signal
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!controller.signal.aborted && Array.isArray(json) && Array.isArray(json[1])) {
          const valid = json[1].find((entry: any) => typeof entry?.value === 'number');
          if (valid && typeof valid.value === 'number') {
            setRenewableShare(`${valid.value.toFixed(1).replace('.', ',')}%`);
          }
        }
      })
      .catch(() => {
        // Keep resilient default 88,4%
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-brand-sand pb-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-brand-emerald" />
          <span className="font-mono text-xs font-bold tracking-wider text-brand-emerald">
            {labels.metricsTitle} (REST Countries • IBGE • Wereldbank Open API)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-slate font-mono">
          <span>{metrics?.officialName || 'República Federativa do Brasil'}</span>
          <span>•</span>
          <span className="font-serif italic font-bold text-brand-espresso">
            “{metrics?.motto || 'Ordem e Progresso'}”
          </span>
        </div>
      </div>

      {loading || !metrics ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Users className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{labels.metricsTotalPop}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              {language === 'en' ? '203.1 M' : '203,1 M'}
            </div>
            <div className="text-[10px] text-brand-slate">{labels.metricsPopRank}</div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Maximize2 className="w-3.5 h-3.5 text-brand-ochre" />
              <span>{labels.metricsArea}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              8,51M km²
            </div>
            <div className="text-[10px] text-brand-slate">{labels.metricsAreaRank}</div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Landmark className="w-3.5 h-3.5 text-brand-blue" />
              <span>{labels.metricsCapital}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              {metrics.capital}
            </div>
            <div className="text-[10px] text-brand-slate">{labels.metricsCapitalNote}</div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Award className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>{labels.metricsUnesco}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              {metrics.unescoSitesCount}
            </div>
            <div className="text-[10px] text-brand-slate">{labels.metricsUnescoNote}</div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Map className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{labels.metricsCoast}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              {metrics.coastlineKm.toLocaleString()} km
            </div>
            <div className="text-[10px] text-brand-slate">{labels.metricsCoastNote}</div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Zap className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{language === 'nl' ? 'Groene stroom' : 'Clean Grid'}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-emerald mt-1">
              {renewableShare}
            </div>
            <div className="text-[10px] text-brand-slate">
              {language === 'nl' ? 'Water, wind & zon' : 'Hydro, wind & solar'}
            </div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Trees className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{language === 'nl' ? 'Natuur & bos' : 'Forest cover'}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              59,4%
            </div>
            <div className="text-[10px] text-brand-slate">
              {language === 'nl' ? '6 unieke biomen' : '6 unique biomes'}
            </div>
          </div>

          <div className="p-3.5 bg-brand-surfaceMuted rounded-2xl border border-brand-sand flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-slate text-[11px] font-bold font-mono">
              <Globe className="w-3.5 h-3.5 text-brand-ochre" />
              <span>{labels.metricsTimezones}</span>
            </div>
            <div className="font-display font-bold text-xl text-brand-espresso mt-1">
              4 (UTC)
            </div>
            <div className="text-[10px] text-brand-slate">UTC-02 — UTC-05</div>
          </div>
        </div>
      )}
    </div>
  );
};
