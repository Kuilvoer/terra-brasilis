import React, { useState, useEffect } from 'react';
import {
  Sun,
  SunMedium,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  Snowflake,
  Wind,
  Droplets,
  Thermometer,
  RefreshCw
} from 'lucide-react';
import type { CityWeather } from '../../types';
import { fetchRegionalWeather } from '../../services/weatherApi';
import { Skeleton } from '../common/Skeleton';
import { useLanguage } from '../../i18n/LanguageContext';

const CONDITION_TRANSLATIONS_NL: Record<string, string> = {
  'Clear Sky': 'Onbewolkt & zonnig',
  'Mainly Clear': 'Overwegend zonnig',
  'Partly Cloudy': 'Halfbewolkt',
  Overcast: 'Bewolkt',
  'Foggy / Mist': 'Mist & nevel',
  'Light Drizzle': 'Lichte motregen',
  'Tropical Showers': 'Tropische regenbui',
  'Heavy Rain': 'Stevige regenval',
  'Thunderstorm': 'Tropisch onweer'
};

export const WeatherWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [weatherData, setWeatherData] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCityIdx, setSelectedCityIdx] = useState<number>(0);

  const loadWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchRegionalWeather();
      setWeatherData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  const currentCity = weatherData[selectedCityIdx] || weatherData[0];

  const renderWeatherIcon = (iconName: string, className = 'w-6 h-6 text-brand-ochre') => {
    switch (iconName) {
      case 'Sun':
        return <Sun className={className} />;
      case 'SunMedium':
        return <SunMedium className={className} />;
      case 'CloudSun':
        return <CloudSun className={className} />;
      case 'Cloud':
        return <Cloud className={className} />;
      case 'CloudFog':
        return <CloudFog className={className} />;
      case 'CloudDrizzle':
        return <CloudDrizzle className={className} />;
      case 'CloudRain':
        return <CloudRain className={className} />;
      case 'CloudLightning':
        return <CloudLightning className={className} />;
      case 'Snowflake':
      case 'CloudSnow':
        return <Snowflake className={className} />;
      default:
        return <Sun className={className} />;
    }
  };

  const localizedCondition =
    currentCity && language === 'nl'
      ? CONDITION_TRANSLATIONS_NL[currentCity.conditionLabel] || currentCity.conditionLabel
      : currentCity?.conditionLabel;

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-4 h-4 text-brand-emerald" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-brand-emerald">
              {t.bento.weatherKicker}
            </span>
          </div>
          <button
            type="button"
            onClick={loadWeather}
            title="Ververs Open-Meteo data"
            aria-label="Ververs Open-Meteo data"
            className="p-1.5 rounded-lg hover:bg-brand-surfaceMuted text-brand-slate hover:text-brand-espresso transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <h3 className="font-display font-bold text-xl text-brand-espresso mb-3">
          {t.bento.weatherTitle}
        </h3>

        {/* 5 Regional Capitals Selector Pills */}
        <div className="grid grid-cols-5 gap-1 p-1 bg-brand-surfaceMuted rounded-xl border border-brand-sand mb-4">
          {(weatherData.length > 0
            ? weatherData.map((c) => c.city)
            : ['Manaus', 'Salvador', 'Brasília', 'São Paulo', 'Curitiba']
          ).map((name, idx) => (
            <button
              key={name}
              type="button"
              onClick={() => setSelectedCityIdx(idx)}
              className={`py-1.5 px-1 text-[11px] font-bold rounded-lg transition-colors truncate ${
                selectedCityIdx === idx
                  ? 'bg-brand-espresso text-brand-yellow shadow-sm'
                  : 'text-brand-slate hover:text-brand-espresso'
              }`}
              title={name}
            >
              {name === 'São Paulo' ? 'S. Paulo' : name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Weather Card Body */}
      {loading || !currentCity ? (
        <div className="space-y-3 py-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-4 w-3/4" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-emerald text-white border border-brand-sand mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-4xl text-brand-yellow">
                  {currentCity.temperature}°C
                </span>
                <span className="text-xs text-stone-100">
                  {t.bento.weatherFeelsLike} {currentCity.apparentTemperature}°C
                </span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">
                {localizedCondition}
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-brand-espresso/40 border border-brand-yellow/30">
              {renderWeatherIcon(currentCity.iconName, 'w-7 h-7 text-brand-yellow')}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-medium text-brand-slate mb-2.5">
            <span className="font-bold text-brand-espresso">{currentCity.city}</span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-brand-surfaceMuted border border-brand-sand text-brand-espresso font-mono font-bold">
              {currentCity.climateTag}
            </span>
          </div>

          {/* Micro Metrics Strip */}
          <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-brand-sand text-xs text-brand-slate">
            <div className="flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-brand-emerald" />
              <span>
                {t.bento.weatherHumidity}: <strong className="text-brand-espresso">{currentCity.humidity}%</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>
                {t.bento.weatherWind}: <strong className="text-brand-espresso">{currentCity.windSpeed} km/u</strong>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Status */}
      <div className="mt-3 pt-2 text-[11px] font-mono text-brand-slate flex items-center justify-between">
        <span>{currentCity?.region || 'Brazilië'}</span>
        {currentCity?.isFallback ? (
          <span className="text-amber-700 font-bold">Lokale cache</span>
        ) : (
          <span className="text-brand-emerald font-bold">● Live Open-Meteo API</span>
        )}
      </div>
    </div>
  );
};
