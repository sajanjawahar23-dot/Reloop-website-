import React from 'react'

/**
 * Animated ReLoop mark: two interlocking arcs (the "loop") rotating
 * slowly in opposite directions — teal for collection, amber for worth.
 */
export default function Logo({ size = 96, animated = true, showWordmark = true }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className={animated ? 'animate-loopRotate' : ''}
        >
          <path
            d="M 30 28 A 22 22 0 1 1 25 50"
            stroke="#3FA796"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className={`absolute inset-0 ${animated ? 'animate-loopRotate' : ''}`}
          style={animated ? { animationDirection: 'reverse', animationDuration: '11s' } : undefined}
        >
          <path
            d="M 70 72 A 22 22 0 1 1 75 50"
            stroke="#E8A33D"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-ink" />
        </div>
      </div>
      {showWordmark && (
        <span className="font-display font-bold text-ink tracking-tight" style={{ fontSize: size * 0.34 }}>
          ReLoop
        </span>
      )}
    </div>
  )
}
