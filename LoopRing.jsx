import React from 'react'

/**
 * LoopRing — the site's signature element: a circular progress ring
 * that recurs across ReBins, the Impact Dashboard, and product impact
 * scores. Represents the closing of the loop, waste becoming worth.
 */
export default function LoopRing({
  value = 0,
  max = 100,
  size = 120,
  stroke = 10,
  label,
  sublabel,
  colorClass = 'text-worth',
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(1, Math.max(0, value / max))
  const offset = circumference * (1 - pct)

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="none"
          className="text-ink/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${colorClass} transition-[stroke-dashoffset] duration-1000 ease-out`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center px-2">
        {label && <span className="font-display font-bold text-ink leading-none" style={{ fontSize: size * 0.18 }}>{label}</span>}
        {sublabel && <span className="font-mono text-[0.6rem] uppercase tracking-wide text-muted mt-1">{sublabel}</span>}
      </div>
    </div>
  )
}
