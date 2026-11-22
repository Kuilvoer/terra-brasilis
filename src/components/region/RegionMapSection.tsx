import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  useMap
} from 'react-leaflet';
import L from 'leaflet';
import { Layers, Navigation, Mountain, Expand } from 'lucide-react';
import type { RegionData, Landmark, MediaItem } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { MODULE_UI_LABELS } from '../../i18n/regionLocalizations';

interface RegionMapSectionProps {
  region: RegionData;
  themeHex?: string;
  onOpenLightbox?: (images: MediaItem[], startIndex: number) => void;
}

type BaseMapLayer = 'clean' | 'satellite' | 'topo';

function MapViewUpdater({
  center,
  zoom
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.0,
      easeLinearity: 0.25
    });
  }, [center, zoom, map]);
  return null;
}

export const RegionMapSection: React.FC<RegionMapSectionProps> = ({
  region,
  onOpenLightbox
}) => {
  const { language } = useLanguage();
  const labels = MODULE_UI_LABELS[language];

  const [activeLayer, setActiveLayer] = useState<BaseMapLayer>('satellite');
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(
    () => region.landmarks[0] || null
  );
  const [mapCenter, setMapCenter] = useState<[number, number]>(() => region.centerCoordinates);
  const [mapZoom, setMapZoom] = useState<number>(5);

  const handleSelectLandmark = (lm: Landmark) => {
    setSelectedLandmark(lm);
    setMapCenter(lm.coordinates);
    setMapZoom(8);
  };

  const handleResetView = () => {
    setMapCenter(region.centerCoordinates);
    setMapZoom(5);
  };

  const createMarkerIcon = (isSelected: boolean, isUnesco: boolean) => {
    const bg = isSelected ? '#FACC15' : isUnesco ? '#E59A23' : '#18130F';
    const border = isSelected ? '#18130F' : '#F7F2E7';
    const size = isSelected ? 34 : 26;

    return L.divIcon({
      className: 'leaflet-div-icon',
      html: `
        <div style="
          width: ${size}px;
          height: ${size}px;
          background: ${bg};
          border: 2.5px solid ${border};
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: translate(-${size / 2}px, -${size / 2}px);
        ">
          <div style="width: 7px; height: 7px; border-radius: 50%; background: ${isSelected ? '#18130F' : '#FACC15'};"></div>
        </div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  };

  const getTileUrl = () => {
    if (activeLayer === 'satellite') {
      return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    }
    if (activeLayer === 'topo') {
      return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    }
    return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  };

  const landmarkMedia: MediaItem[] = region.landmarks.map((lm) => ({
    id: lm.id,
    url: lm.imageUrl,
    alt: lm.name,
    caption: `${lm.name} (${lm.city}, ${lm.state}) — ${lm.description}`,
    credit: lm.highlightFact,
    aspectRatio: 'landscape'
  }));

  const selectedIdx = Math.max(
    0,
    region.landmarks.findIndex((lm) => lm.id === selectedLandmark?.id)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* Left (7 cols): Interactive Map with Compact In-Map Layer Switcher */}
      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl min-h-[440px] sm:min-h-[480px] bg-black/30">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom={false}
          className="w-full h-full min-h-[440px] sm:min-h-[480px] z-0"
        >
          <MapViewUpdater center={mapCenter} zoom={mapZoom} />

          <TileLayer
            key={activeLayer}
            url={getTileUrl()}
            attribution="&copy; Esri, OpenTopoMap &amp; OpenStreetMap"
            maxZoom={17}
          />

          <Rectangle
            bounds={region.bounds}
            pathOptions={{
              color: '#FACC15',
              weight: 1.5,
              dashArray: '6, 6',
              fillColor: '#057A44',
              fillOpacity: 0.06
            }}
          />

          {region.landmarks.map((lm) => {
            const isSelected = selectedLandmark?.id === lm.id;
            return (
              <Marker
                key={lm.id}
                position={lm.coordinates}
                icon={createMarkerIcon(isSelected, lm.isUnesco)}
                eventHandlers={{
                  click: () => handleSelectLandmark(lm)
                }}
              >
                <Popup>
                  <div className="w-52 p-1">
                    <img
                      src={lm.imageUrl}
                      alt={lm.name}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <div className="font-bold text-xs text-brand-espresso">{lm.name}</div>
                    <div className="text-[10px] text-brand-slate">
                      {lm.city}, {lm.state}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Top-right Compact Reset Button */}
        <div className="absolute top-3 right-3 z-[400]">
          <button
            type="button"
            onClick={handleResetView}
            className="px-3 py-1.5 rounded-xl bg-[#18130F]/85 backdrop-blur-md text-white/90 hover:text-brand-yellow border border-white/15 font-mono text-[11px] font-bold transition-colors shadow"
          >
            {language === 'nl'
              ? `Hele regio (${region.name})`
              : language === 'pt'
              ? `Região inteira (${region.name})`
              : `Whole region (${region.name})`}
          </button>
        </div>

        {/* Bottom-left Compact In-Map Layer Switcher (Grouped inside map frame!) */}
        <div className="absolute bottom-3 left-3 z-[400] flex items-center gap-1 bg-[#18130F]/85 backdrop-blur-md p-1 rounded-xl border border-white/15 shadow-lg">
          <button
            type="button"
            onClick={() => setActiveLayer('satellite')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1 ${
              activeLayer === 'satellite'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{language === 'nl' ? 'Satelliet' : language === 'pt' ? 'Satélite' : 'Satellite'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('topo')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1 ${
              activeLayer === 'topo'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Mountain className="w-3 h-3" />
            <span>Topo</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('clean')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1 ${
              activeLayer === 'clean'
                ? 'bg-brand-yellow text-brand-espresso'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Navigation className="w-3 h-3" />
            <span>{language === 'nl' ? 'Kaart' : language === 'pt' ? 'Mapa' : 'Map'}</span>
          </button>
        </div>
      </div>

      {/* Right (5 cols): Calm Editorial Header + Clean 2-Col Landmark List + Selected Preview */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <h3 className="font-display font-bold uppercase text-3xl sm:text-4xl text-brand-yellow tracking-tight leading-none">
            {language === 'nl'
              ? 'REGIOKAART & TOPO'
              : language === 'pt'
              ? 'MAPA & TOPOGRAFIA'
              : 'REGION MAP & TOPO'}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {labels.mapSectionSubtitle}
          </p>
        </div>

        {/* Clean 2-Column Numbered Landmarks Index (Matches Mockup!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 pt-2 border-t border-white/15">
          {region.landmarks.map((lm, idx) => {
            const active = selectedLandmark?.id === lm.id;
            return (
              <button
                key={lm.id}
                type="button"
                onClick={() => handleSelectLandmark(lm)}
                className={`text-left p-2.5 rounded-xl transition-colors ${
                  active
                    ? 'bg-black/25 border border-brand-yellow/40'
                    : 'hover:bg-black/15 border border-transparent'
                }`}
              >
                <div className="font-mono text-[11px] font-bold text-brand-yellow tracking-wider">
                  0{idx + 1}. {lm.city}
                </div>
                <div className="text-sm font-semibold text-white truncate mt-0.5">
                  {lm.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Landmark Straight Clean Photo Card (Clickable Fullscreen) */}
        {selectedLandmark && (
          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/10">
            <button
              type="button"
              onClick={() => onOpenLightbox?.(landmarkMedia, selectedIdx)}
              className="group relative w-full sm:w-36 aspect-[4/3] rounded-xl overflow-hidden bg-black/40 shrink-0 cursor-pointer border border-[#F7F2E7]/30"
              title="Klik voor fullscreen"
            >
              <img
                src={selectedLandmark.imageUrl}
                alt={selectedLandmark.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/75 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3 h-3" />
              </span>
            </button>
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="font-display font-bold text-lg text-white leading-tight truncate">
                  {selectedLandmark.name}
                </div>
                <span className="font-mono text-[10px] text-white/55 shrink-0">
                  {selectedLandmark.coordinates[0].toFixed(2)}°, {selectedLandmark.coordinates[1].toFixed(2)}°
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                {selectedLandmark.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
