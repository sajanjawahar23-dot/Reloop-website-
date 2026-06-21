import React from 'react'

const PALETTES = {
  hoodie: ['#2C7A6D', '#3FA796'],
  tshirt: ['#3FA796', '#6FCBBA'],
  tote: ['#C1812A', '#E8A33D'],
  shoes: ['#15261F', '#3FA796'],
  uniform: ['#234038', '#8FA39B'],
  housedress: ['#E8A33D', '#F4C679'],
  jersey: ['#2C7A6D', '#E8A33D'],
  bag: ['#15261F', '#8FA39B'],
  kit: ['#C1812A', '#3FA796'],
}

const SHAPES = {
  hoodie: (
    <>
      <path d="M30 35 Q50 18 70 35 L70 38 L85 48 L78 58 L70 52 L70 88 L30 88 L30 52 L22 58 L15 48 L30 38 Z" />
      <path d="M40 35 Q50 45 60 35" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
    </>
  ),
  tshirt: (
    <>
      <path d="M35 22 L50 30 L65 22 L82 32 L74 46 L65 41 L65 88 L35 88 L35 41 L26 46 L18 32 Z" />
    </>
  ),
  tote: (
    <>
      <rect x="22" y="38" width="56" height="48" rx="4" />
      <path d="M35 38 V26 a15 15 0 0 1 30 0 V38" fill="none" stroke="currentColor" strokeWidth="5" />
    </>
  ),
  shoes: (
    <>
      <path d="M15 70 Q15 55 35 52 L60 48 Q75 46 82 58 Q86 68 78 72 L20 78 Q14 76 15 70 Z" />
      <path d="M35 52 L35 38 Q35 32 42 33 L55 36" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="2.5" />
    </>
  ),
  uniform: (
    <>
      <path d="M36 20 L50 28 L64 20 L80 30 L73 44 L64 39 L64 86 L36 86 L36 39 L27 44 L20 30 Z" />
      <rect x="44" y="46" width="12" height="3" fill="white" fillOpacity="0.5" />
    </>
  ),
  housedress: (
    <>
      <path d="M38 18 L50 26 L62 18 L70 28 L64 36 L70 88 L30 88 L36 36 L30 28 Z" />
    </>
  ),
  jersey: (
    <>
      <path d="M33 22 L50 30 L67 22 L84 34 L75 48 L67 42 L67 88 L33 88 L33 42 L25 48 L16 34 Z" />
      <circle cx="50" cy="55" r="9" fill="white" fillOpacity="0.3" />
    </>
  ),
  bag: (
    <>
      <rect x="20" y="34" width="60" height="50" rx="6" />
      <path d="M35 34 V24 a4 4 0 0 1 4 -4 h22 a4 4 0 0 1 4 4 v10" fill="none" stroke="currentColor" strokeWidth="5" />
      <rect x="20" y="50" width="60" height="6" fill="white" fillOpacity="0.3" />
    </>
  ),
  kit: (
    <>
      <rect x="18" y="30" width="32" height="40" rx="4" />
      <circle cx="72" cy="50" r="20" />
    </>
  ),
}

export default function ProductGlyph({ type = 'tshirt', className = '' }) {
  const [c1, c2] = PALETTES[type] || PALETTES.tshirt
  const shape = SHAPES[type] || SHAPES.tshirt
  const gradId = `grad-${type}`

  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={`${type} illustration`}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`} stroke="none">
        {shape}
      </g>
    </svg>
  )
}
