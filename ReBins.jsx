import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import StatCounter from '../components/StatCounter.jsx'
import { REBIN_LOCATIONS, CITY_TOTALS, GRAND_TOTAL_KG } from '../data/rebins.js'

export default function ReBins() {
  const cities = Object.keys(CITY_TOTALS)

  return (
    <div>
      <PageHero
        eyebrow="The Network"
        title="ReBins"
        subtitle="Every ReBin is a small, visible promise: what goes in here doesn't go to waste."
      />

      <section className="container-page pb-16">
        <div className="rounded-loop bg-ink text-paper overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex items-center justify-center py-16 px-8 overflow-hidden">
              <AnimatedBin />
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center px-8 pb-16 lg:pb-0 text-center lg:text-left">
              <p className="font-mono text-6xl sm:text-7xl font-bold text-worth">
                <StatCounter value={GRAND_TOTAL_KG} suffix=" kg" />
              </p>
              <p className="mt-2 text-lg text-paper/70">Plastic Collected</p>
              <p className="mt-6 eyebrow text-loop-light">3 Month Pilot Program</p>
            </div>
          </div>
        </div>
      </section>

      {cities.map((city) => (
        <section key={city} className="container-page pb-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight">{city}</h2>
            <p className="font-mono text-loop-dark font-semibold">{CITY_TOTALS[city]}kg total</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REBIN_LOCATIONS.filter((l) => l.city === city).map((loc) => (
              <Link
                key={loc.id}
                to={`/rebins/${loc.id}`}
                className="group rounded-2xl border border-ink/10 bg-white/60 p-5 flex items-center justify-between transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <p className="font-display font-semibold">{loc.name}</p>
                  <p className="text-xs text-ink/45 mt-0.5">{loc.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-loop-dark">{loc.kg}kg</p>
                  <p className="text-xs text-ink/40 group-hover:text-loop-dark transition-colors">View →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-worth/10 border border-worth/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Grand Total</p>
            <p className="font-mono text-4xl font-bold mt-1">{GRAND_TOTAL_KG}kg</p>
          </div>
          <Link to="/impact" className="btn-dark">See Full Impact Dashboard</Link>
        </div>
      </section>
    </div>
  )
}

function AnimatedBin() {
  const bottles = [0, 1, 2, 3]
  return (
    <div className="relative" style={{ width: 180, height: 240 }}>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ height: 220 }}>
        {bottles.map((i) => (
          <div
            key={i}
            className="absolute top-0 animate-fall"
            style={{
              left: `${15 + i * 22}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <div className="h-6 w-3 rounded-sm bg-loop-light/90" />
            <div className="h-1.5 w-2 mx-auto rounded-t-sm bg-worth" />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 100" className="absolute bottom-0 inset-x-0">
        <path d="M20 30 L25 92 Q25 96 30 96 L70 96 Q75 96 75 92 L80 30 Z" fill="#234038" />
        <rect x="15" y="22" width="70" height="10" rx="3" fill="#3FA796" />
        <rect x="35" y="14" width="30" height="10" rx="3" fill="#2C7A6D" />
      </svg>
    </div>
  )
}
