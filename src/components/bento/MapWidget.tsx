import React, { useState, useEffect, useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap
} from 'react-leaflet';
import L from 'leaflet';
import {
  Compass,
  ArrowRight,
  Award,
  Route,
  Layers,
  Mountain,
  Navigation
} from 'lucide-react';
import type { RegionId, Landmark } from '../../types';
import { REGION_BOUNDS, BRAZIL_NATIONAL_BOUNDS } from '../../data/fallbacks';
import { brazilData } from '../../data/brazilData';
import { useLanguage } from '../../i18n/LanguageContext';
import { getLocalizedRegionData } from '../../i18n/regionLocalizations';

interface MapWidgetProps {
  onSelectRegion: (id: RegionId) => void;
}

type BaseMapLayer = 'clean' | 'satellite' | 'topo' | 'relief';

function MapController({
  center,
  zoom
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }, [center, zoom, map]);
  return null;
}

const EXPEDITION_COORDINATES: [number, number][] = [
  [-3.1190, -60.0217], // 01 Norte (Manaus)
  [-12.9714, -38.5014], // 02 Nordeste (Salvador)
  [-15.7975, -47.8919], // 03 Centro-Oeste (Brasília)
  [-22.9068, -43.1729], // 04 Sudeste (Rio de Janeiro)
  [-25.6953, -54.4367] // 05 Sul (Foz do Iguaçu)
];

const UNESCO_ICON = L.divIcon({
  className: 'leaflet-div-icon',
  html: `
    <div style="
      width: 30px;
      height: 30px;
      background: #18130F;
      border: 3px solid #FACC15;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(24,19,15,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: translate(-15px, -15px);
    ">
      <div style="width: 9px; height: 9px; border-radius: 50%; background: #FACC15;"></div>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const STANDARD_ICON = L.divIcon({
  className: 'leaflet-div-icon',
  html: `
    <div style="
      width: 30px;
      height: 30px;
      background: #18130F;
      border: 3px solid #057A44;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(24,19,15,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: translate(-15px, -15px);
    ">
      <div style="width: 9px; height: 9px; border-radius: 50%; background: #057A44;"></div>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const ROUTE_PATH_OPTIONS = {
  color: '#D9532E',
  weight: 3.5,
  dashArray: '8, 8',
  opacity: 0.9
};

export const MapWidget: React.FC<MapWidgetProps> = ({ onSelectRegion }) => {
  const { t, language } = useLanguage();
  const [selectedRegionId, setSelectedRegionId] = useState<RegionId | 'all'>('all');
  const [showTourRoute, setShowTourRoute] = useState<boolean>(true);
  const [activeLayer, setActiveLayer] = useState<BaseMapLayer>('clean');

  const regionLabels: Record<RegionId, string> =
    language === 'nl'
      ? {
          north: 'Noord',
          northeast: 'Noordoost',
          'center-west': 'Centraal-West',
          southeast: 'Zuidoost',
          south: 'Zuid'
        }
      : language === 'en'
        ? {
            north: 'North',
            northeast: 'Northeast',
            'center-west': 'Center-West',
            southeast: 'Southeast',
            south: 'South'
          }
        : {
            north: 'Norte',
            northeast: 'Nordeste',
            'center-west': 'Centro-Oeste',
            southeast: 'Sudeste',
            south: 'Sul'
          };

  // Collect all 31 landmarks across regions (memoized)
  const allLandmarks: Landmark[] = useMemo(() => (
    (['north', 'northeast', 'center-west', 'southeast', 'south'] as RegionId[])
      .flatMap((rId) => getLocalizedRegionData(brazilData.regions[rId], language).landmarks)
  ), [language]);

  const filteredLandmarks = useMemo(() => (
    allLandmarks.filter((lm) => selectedRegionId === 'all' || lm.regionId === selectedRegionId)
  ), [allLandmarks, selectedRegionId]);

  const currentCenter: [number, number] =
    selectedRegionId === 'all'
      ? BRAZIL_NATIONAL_BOUNDS.center
      : REGION_BOUNDS[selectedRegionId].center;

  const currentZoom: number =
    selectedRegionId === 'all'
      ? 4
      : REGION_BOUNDS[selectedRegionId].zoom;

  const getTileUrl = () => {
    if (activeLayer === 'satellite') {
      return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    }
    if (activeLayer === 'topo') {
      return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    }
    if (activeLayer === 'relief') {
      return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
    }
    return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-sand shadow-card hover:shadow-card-hover transition-shadow overflow-hidden flex flex-col h-full">
      {/* Widget Header & Region Switcher Bar */}
      <div className="p-4 sm:p-5 border-b border-brand-sand bg-brand-emerald text-white flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-brand-yellow" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-brand-yellow">
              {t.bento.mapKicker}
            </span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide mt-0.5">
            {t.bento.mapTitle}
          </h2>
        </div>

        {/* Region Filter Buttons + Route Toggle */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0 no-scrollbar">
          <button
            onClick={() => setShowTourRoute((prev) => !prev)}
            className={`px-2.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1 border ${
              showTourRoute
                ? 'bg-brand-yellow text-brand-espresso border-brand-espresso shadow-sm'
                : 'bg-brand-espresso/40 text-white border-white/20'
            }`}
            title={t.bento.mapRouteToggle}
          >
            <Route className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.bento.mapRouteToggle}</span>
          </button>

          <button
            onClick={() => setSelectedRegionId('all')}
            className={`px-2.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors ${
              selectedRegionId === 'all'
                ? 'bg-brand-espresso text-brand-yellow border border-brand-yellow'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            {t.bento.mapAllBrazil}
          </button>
          {(['north', 'northeast', 'center-west', 'southeast', 'south'] as RegionId[]).map((rId) => (
            <button
              key={rId}
              onClick={() => setSelectedRegionId(rId)}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors ${
                selectedRegionId === rId
                  ? 'bg-brand-espresso text-brand-yellow border border-brand-yellow'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {regionLabels[rId]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Canvas */}
      <div className="relative flex-1 min-h-[450px] w-full">
        <MapContainer
          center={currentCenter}
          zoom={currentZoom}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
          style={{ background: '#F5EFE2', height: '100%', minHeight: '450px' }}
        >
          <MapController center={currentCenter} zoom={currentZoom} />

          <TileLayer
            key={activeLayer}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &amp; Esri'
            url={getTileUrl()}
            maxZoom={17}
          />

          {/* 5-Stage Expedition Dashed Route Line */}
          {showTourRoute && (
            <Polyline
              positions={EXPEDITION_COORDINATES}
              pathOptions={ROUTE_PATH_OPTIONS}
            />
          )}

          {/* 31 Landmark Pins */}
          {filteredLandmarks.map((lm) => (
            <Marker
              key={lm.id}
              position={lm.coordinates}
              icon={lm.isUnesco ? UNESCO_ICON : STANDARD_ICON}
            >
              <Popup className="custom-editorial-popup">
                <div className="w-[280px] p-3 text-left">
                  <div className="relative h-32 rounded-lg overflow-hidden mb-2.5 bg-stone-100">
                    <img
                      src={lm.imageUrl}
                      alt={lm.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {lm.isUnesco && (
                      <div className="absolute top-2 right-2 bg-brand-yellow text-brand-espresso text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Award className="w-3 h-3" />
                        UNESCO
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] uppercase tracking-editorial font-bold text-brand-terracotta mb-0.5">
                    {lm.city}, {lm.state} • {lm.category}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-brand-ink mb-1 leading-snug">
                    {lm.name}
                  </h4>
                  <p className="text-xs text-brand-slate line-clamp-2 leading-relaxed mb-3">
                    {lm.description}
                  </p>
                  <button
                    onClick={() => onSelectRegion(lm.regionId)}
                    className="w-full py-2 px-3 bg-brand-emerald hover:bg-brand-amazon text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>
                      {t.bento.mapExploreRegion}: {brazilData.regions[lm.regionId].name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Top-Right Base Layer Switcher (Atlas / Relief / Satellite / Topo) */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-brand-espresso/90 backdrop-blur-md p-1 rounded-xl border border-brand-yellow/40 shadow-lg text-white">
          <button
            onClick={() => setActiveLayer('clean')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'clean'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-stone-200 hover:bg-white/15'
            }`}
          >
            <Navigation className="w-3 h-3" />
            <span>OpenStreetMap</span>
          </button>
          <button
            onClick={() => setActiveLayer('relief')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'relief'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-stone-200 hover:bg-white/15'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span>Atlas</span>
          </button>
          <button
            onClick={() => setActiveLayer('satellite')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'satellite'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-stone-200 hover:bg-white/15'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{language === 'nl' ? 'Satelliet' : language === 'pt' ? 'Satélite' : 'Satellite'}</span>
          </button>
          <button
            onClick={() => setActiveLayer('topo')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'topo'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-stone-200 hover:bg-white/15'
            }`}
          >
            <Mountain className="w-3 h-3" />
            <span>Topo</span>
          </button>
        </div>

        {/* Floating Map Legend & Direct Action Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-brand-espresso/95 text-white backdrop-blur-md p-3.5 rounded-2xl border border-brand-yellow/40 shadow-xl max-w-sm">
          <div className="flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald border border-white" />
                <span className="text-stone-200 font-medium">
                  {language === 'nl' ? 'Locatie' : language === 'pt' ? 'Marco' : 'Landmark'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
                <span className="text-stone-200 font-medium">UNESCO</span>
              </div>
            </div>
            <div className="text-brand-yellow font-mono text-[11px] font-bold">
              {filteredLandmarks.length}/31
            </div>
          </div>
          {selectedRegionId !== 'all' && (
            <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs font-display tracking-wider font-bold text-white">
                {regionLabels[selectedRegionId]}
              </span>
              <button
                onClick={() => onSelectRegion(selectedRegionId)}
                className="text-xs text-brand-yellow font-bold hover:underline flex items-center gap-1"
              >
                <span>{t.bento.mapExploreRegion}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
