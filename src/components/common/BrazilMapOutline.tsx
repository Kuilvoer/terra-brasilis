import React from 'react';
import type { RegionId } from '../../types';

interface BrazilMapOutlineProps {
  regionId?: RegionId;
  className?: string;
}

export const BrazilMapOutline: React.FC<BrazilMapOutlineProps> = ({
  regionId,
  className = 'w-7 h-7'
}) => {
  // SVG paths for the 5 official macro-regions of Brazil (scaled into 100x100 viewBox)
  const paths: Record<RegionId, string> = {
    // North: Acre, Amazonas, Roraima, Rondônia, Pará, Amapá, Tocantins
    north:
      'M 12 36 L 18 24 L 28 12 L 36 10 L 44 14 L 56 12 L 60 20 L 58 30 L 52 42 L 48 54 L 36 50 L 22 52 L 10 46 Z',

    // Northeast: Maranhão, Piauí, Ceará, RN, PB, PE, AL, SE, Bahia
    northeast:
      'M 58 20 L 68 20 L 78 24 L 88 30 L 86 42 L 78 52 L 68 54 L 58 46 L 52 34 L 58 26 Z',

    // Center-West: Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal
    'center-west':
      'M 24 52 L 36 50 L 48 54 L 56 50 L 58 64 L 52 74 L 40 72 L 28 64 Z',

    // Southeast: Minas Gerais, Espírito Santo, Rio de Janeiro, São Paulo
    southeast:
      'M 56 50 L 68 54 L 78 52 L 76 64 L 68 72 L 56 70 L 54 60 Z',

    // South: Paraná, Santa Catarina, Rio Grande do Sul
    south:
      'M 40 72 L 52 74 L 56 70 L 54 82 L 46 94 L 38 88 L 38 76 Z'
  };

  const fullBrazilUnion =
    'M 28 12 L 36 10 L 44 14 L 56 12 L 60 20 L 68 20 L 78 24 L 88 30 L 86 42 L 78 52 L 76 64 L 68 72 L 56 70 L 54 82 L 46 94 L 38 88 L 38 76 L 28 64 L 24 52 L 10 46 L 12 36 L 18 24 Z';

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {!regionId ? (
        // Homepage: Full Brazil Contour in clean white line
        <g>
          {/* Subtle faint fill */}
          <path
            d={fullBrazilUnion}
            fill="#FFFFFF"
            fillOpacity="0.15"
          />
          {/* Inner regional partition lines (dotted) */}
          {Object.entries(paths).map(([key, d]) => (
            <path
              key={key}
              d={d}
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeOpacity="0.4"
              strokeDasharray="1.5 1.5"
              fill="none"
            />
          ))}
          {/* Outer National Border */}
          <path
            d={fullBrazilUnion}
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ) : (
        // Regional Page: Full Brazil faint outline + Active Region highlighted in solid white
        <g>
          {/* Base faint Brazil silhouette */}
          <path
            d={fullBrazilUnion}
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.35"
            strokeDasharray="2 2"
            fill="#FFFFFF"
            fillOpacity="0.05"
            strokeLinejoin="round"
          />
          {/* Highlighted Regional Silhouette */}
          <path
            d={paths[regionId]}
            fill="#FFFFFF"
            fillOpacity="0.35"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          />
        </g>
      )}
    </svg>
  );
};
