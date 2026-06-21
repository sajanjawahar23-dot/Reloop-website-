import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import StatCounter from '../components/StatCounter.jsx'
import LoopRing from '../components/LoopRing.jsx'
import { GRAND_TOTAL_KG, TOTAL_BINS } from '../data/rebins.js'

const BOTTLES = 1100
const CITIES = 2
const MONTHS = 3
const CO2_SAVED_KG = Math.round(GRAND_TOTAL_KG * 2.5) // ~2.5kg CO2e avoided per kg plastic diverted
const INSTITUTIONS = 11
const COMMUNITY_REACHED = 5200

const TIMELINE = [
  { month: 'April 2026', title: 'Pilot Launch', body: 'First 7 ReBins installed across Chennai campuses and IT parks.' },
  { month: 'May 2026', title: 'Bengaluru Expansion', body: 'Network grows to 2 cities as 3 more institutions come on board.' },
  { month: 'June 2026', title: '55kg Milestone', body: 'Collection crosses 55kg across 11 active ReBins and 11 partner institutions.' },
]

export default function ImpactDashboard() {
  return (
    <div>
      <PageHero
        eyebrow="The Numbers"
        title="Impact Dashboard"
        subtitle="Three months in, the loop is already measurable. Here's exactly what's been diverted, and where."
      />

      <section className="container-page pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <BigStat value={GRAND_TOTAL_KG} suffix="kg" label="Plastic Collected" />
          <BigStat value={BOTTLES} label="Bottles Recycled" />
          <BigStat value={TOTAL_BINS} label="Active ReBins" />
          <BigStat value={CITIES} label="Cities" />
          <BigStat value={MONTHS} label="Months" />
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <RingStat value={CO2_SAVED_KG} max={200} label="CO2 Saved" suffix="kg" />
          <RingStat value={INSTITUTIONS} max={11} label="Institutions Engaged" />
          <RingStat value={COMMUNITY_REACHED} max={6000} label="Community Reached" />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-page py-16 sm:py-20">
          <p className="eyebrow text-loop-light">The Journey So Far</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Three Months, One Loop.</h2>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {TIMELINE.map((t, i) => (
              <div key={t.month} className="relative pl-6 sm:pl-0">
                <div className="sm:flex sm:items-center sm:gap-3 mb-3">
                  <span className="font-mono text-sm text-worth">{t.month}</span>
                </div>
                <div className="h-px w-full bg-paper/15 mb-4 hidden sm:block" />
                <h3 className="font-display font-semibold text-lg">{t.title}</h3>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <Link to="/restore" className="btn-primary">
          <span aria-hidden>🛍</span> Explore ReStore
        </Link>
      </section>
    </div>
  )
}

function BigStat({ value, suffix = '', label }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-5 text-center">
      <p className="font-mono text-2xl sm:text-3xl font-bold text-loop-dark">
        <StatCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs text-ink/50 mt-1 uppercase tracking-wide">{label}</p>
    </div>
  )
}

function RingStat({ value, max, label, suffix = '' }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/60 p-8 flex flex-col items-center text-center">
      <LoopRing value={value} max={max} size={130} label={`${value.toLocaleString()}${suffix}`} colorClass="text-loop" />
      <p className="mt-4 text-sm text-ink/55 uppercase tracking-wide">{label}</p>
    </div>
  )
}
