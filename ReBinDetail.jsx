import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import LoopRing from '../components/LoopRing.jsx'
import { REBIN_LOCATIONS } from '../data/rebins.js'

export default function ReBinDetail() {
  const { locationId } = useParams()
  const loc = REBIN_LOCATIONS.find((l) => l.id === locationId)

  if (!loc) return <Navigate to="/rebins" replace />

  const maxKg = Math.max(...REBIN_LOCATIONS.map((l) => l.kg))
  const sameCityTotal = REBIN_LOCATIONS.filter((l) => l.city === loc.city).reduce((s, l) => s + l.kg, 0)
  const sharePct = Math.round((loc.kg / sameCityTotal) * 100)

  return (
    <div className="container-page py-12 sm:py-16">
      <Link to="/rebins" className="text-sm text-ink/50 hover:text-loop-dark">← Back to ReBins</Link>

      <div className="mt-6 grid lg:grid-cols-[auto,1fr] gap-10 items-start">
        <div className="flex flex-col items-center bg-ink rounded-loop p-8 sm:p-10">
          <LoopRing value={loc.kg} max={maxKg} size={160} stroke={12} label={`${loc.kg}kg`} sublabel="Collected" colorClass="text-worth" />
        </div>

        <div>
          <p className="eyebrow">{loc.city} · {loc.type}</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">{loc.name}</h1>
          <p className="mt-4 text-ink/60 leading-relaxed max-w-xl">{loc.note}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <Stat label="ReBins Installed" value={loc.bins} />
            <Stat label="Since" value={loc.installed} small />
            <Stat label={`Share of ${loc.city}`} value={`${sharePct}%`} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/repartners" className="btn-primary">Partner With Your Campus</Link>
            <Link to="/impact" className="btn-secondary">View Full Impact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, small }) {
  return (
    <div>
      <p className={`font-mono font-bold text-loop-dark ${small ? 'text-base' : 'text-2xl'}`}>{value}</p>
      <p className="text-xs text-ink/45 mt-1">{label}</p>
    </div>
  )
}
