import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const TAGLINES = [
  'Small Actions. Massive Impact.',
  'Together We Close The Loop.',
  'Waste Is Only Waste If We Waste It.',
]

// Illustrative monthly averages drawn from pilot participation rates.
const KG_PER_PERSON = 0.3
const BOTTLES_PER_PERSON = 6
const CO2_PER_KG = 2.5

export default function RePartners() {
  const navigate = useNavigate()
  const [people, setPeople] = useState('')

  const n = Number(people) || 0
  const plastic = (n * KG_PER_PERSON).toFixed(1)
  const bottles = Math.round(n * BOTTLES_PER_PERSON)
  const co2 = (n * KG_PER_PERSON * CO2_PER_KG).toFixed(1)

  return (
    <div>
      <PageHero eyebrow="Partnership" title="Become A RePartner" subtitle="Create Impact Beyond Business" />

      <section className="container-page pb-12">
        <div className="flex flex-wrap gap-3">
          {TAGLINES.map((t) => (
            <span key={t} className="rounded-full border border-loop/30 bg-loop/10 text-loop-dark px-4 py-2 text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-loop bg-ink text-paper p-8 sm:p-12">
          <p className="eyebrow text-loop-light">Impact Calculator</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Estimate your community's monthly impact</h2>

          <label className="block mt-8 max-w-xs">
            <span className="text-sm text-paper/60">Number Of People</span>
            <input
              type="number"
              min="0"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder="e.g. 200"
              className="mt-1.5 w-full rounded-xl border border-paper/20 bg-paper/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-loop outline-none"
            />
          </label>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <CalcStat label="Plastic Diverted" value={`${plastic}kg`} />
            <CalcStat label="Bottles Recycled" value={bottles.toLocaleString()} />
            <CalcStat label="CO2 Saved" value={`${co2}kg`} />
          </div>
          <p className="mt-4 text-xs text-paper/35">Estimates based on average participation rates observed across our pilot ReBin network.</p>
        </div>
      </section>

      <section className="container-page pb-24 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/consultation', { state: { institutionType: 'partner', productName: 'RePartner Programme' } })}
          className="btn-primary"
        >
          Join As A RePartner
        </button>
        <button
          onClick={() => navigate('/consultation', { state: { institutionType: 'partner', productName: 'General Consultation' } })}
          className="btn-secondary"
        >
          Book Consultation
        </button>
      </section>
    </div>
  )
}

function CalcStat({ label, value }) {
  return (
    <div className="rounded-2xl bg-paper/5 border border-paper/15 p-5">
      <p className="font-mono text-2xl font-bold text-worth">{value}</p>
      <p className="text-xs text-paper/50 mt-1 uppercase tracking-wide">{label}</p>
    </div>
  )
}
