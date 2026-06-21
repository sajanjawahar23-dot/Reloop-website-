import React from 'react'

/**
 * Stylized, original illustrations representing the plastic crisis —
 * used in place of stock photography to keep a consistent, premium
 * visual language across the site.
 */
export default function CrisisIllustration({ variant = 'water', className = '' }) {
  const common = 'w-full h-full'
  switch (variant) {
    case 'water':
      return (
        <svg viewBox="0 0 200 140" className={`${common} ${className}`}>
          <rect width="200" height="140" fill="#15261F" />
          <path d="M0 90 Q25 80 50 90 T100 90 T150 90 T200 90 V140 H0 Z" fill="#234038" />
          <path d="M0 105 Q25 95 50 105 T100 105 T150 105 T200 105 V140 H0 Z" fill="#1C3128" />
          {[28, 62, 96, 130, 164].map((x, i) => (
            <g key={x} transform={`translate(${x} ${70 + (i % 2) * 12}) rotate(${i % 2 ? -8 : 10})`}>
              <rect x="-6" y="-22" width="12" height="26" rx="3" fill="#8FA39B" fillOpacity="0.85" />
              <rect x="-4" y="-26" width="8" height="6" rx="2" fill="#E8A33D" />
            </g>
          ))}
        </svg>
      )
    case 'wildlife':
      return (
        <svg viewBox="0 0 200 140" className={`${common} ${className}`}>
          <rect width="200" height="140" fill="#1C3128" />
          <path d="M40 95 Q60 70 90 80 Q100 65 120 75 Q150 65 160 90 Q165 105 140 108 L55 108 Q35 106 40 95 Z" fill="#3FA796" fillOpacity="0.9" />
          <circle cx="148" cy="86" r="3.5" fill="#15261F" />
          <path d="M100 108 Q110 120 100 128" stroke="#3FA796" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="70" y="60" width="9" height="20" rx="2" fill="#8FA39B" fillOpacity="0.8" transform="rotate(15 70 60)" />
          <rect x="115" y="55" width="9" height="20" rx="2" fill="#E8A33D" fillOpacity="0.8" transform="rotate(-10 115 55)" />
        </svg>
      )
    case 'landfill':
      return (
        <svg viewBox="0 0 200 140" className={`${common} ${className}`}>
          <rect width="200" height="140" fill="#0E1B17" />
          <path d="M0 130 L40 90 L70 110 L110 70 L150 105 L200 80 V140 H0 Z" fill="#234038" />
          {[
            [20, 100, 10, 14, '#8FA39B'],
            [45, 85, 8, 18, '#E8A33D'],
            [75, 95, 11, 12, '#3FA796'],
            [105, 75, 9, 16, '#8FA39B'],
            [135, 90, 10, 14, '#C1812A'],
            [160, 70, 9, 18, '#3FA796'],
            [180, 88, 8, 12, '#8FA39B'],
          ].map(([x, y, w, h, fill], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill={fill} fillOpacity="0.85" transform={`rotate(${(i % 3) * 12 - 12} ${x} ${y})`} />
          ))}
        </svg>
      )
    case 'river':
    default:
      return (
        <svg viewBox="0 0 200 140" className={`${common} ${className}`}>
          <rect width="200" height="140" fill="#15261F" />
          <path d="M0 40 Q60 60 120 35 T200 45 V140 H0 Z" fill="#1C3128" />
          <path d="M0 60 Q60 80 120 58 T200 65" stroke="#3FA796" strokeWidth="3" fill="none" strokeOpacity="0.5" />
          {[30, 70, 110, 150, 180].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={48 + (i % 3) * 8}
              width="14"
              height="7"
              rx="3"
              fill={i % 2 ? '#E8A33D' : '#8FA39B'}
              fillOpacity="0.9"
              transform={`rotate(${i * 7} ${x} ${48 + (i % 3) * 8})`}
            />
          ))}
        </svg>
      )
  }
}
