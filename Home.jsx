import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#3FA796_0,transparent_45%),radial-gradient(circle_at_80%_70%,#E8A33D_0,transparent_40%)]" />

      <div className="container-page relative py-24 sm:py-32 flex flex-col items-center text-center">
        <div className="animate-riseup">
          <Logo size={120} animated />
        </div>

        <h1 className="mt-10 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-riseup" style={{ animationDelay: '120ms' }}>
          Turning Waste
          <br />
          Into Worth
        </h1>

        <p
          className="mt-6 max-w-lg text-lg text-paper/65 animate-riseup"
          style={{ animationDelay: '220ms' }}
        >
          Building a future where waste creates opportunity.
        </p>

        <Link
          to="/plastic-crisis"
          className="mt-10 btn-primary animate-riseup"
          style={{ animationDelay: '320ms' }}
        >
          <span aria-hidden>🌍</span> See The Reality
        </Link>

        <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 animate-riseup" style={{ animationDelay: '420ms' }}>
          <MiniStat value="55kg" label="Collected" />
          <MiniStat value="11" label="ReBins" />
          <MiniStat value="2" label="Cities" />
        </div>
      </div>
    </section>
  )
}

function MiniStat({ value, label }) {
  return (
    <div className="text-center">
      <p className="font-mono text-2xl sm:text-3xl font-semibold text-worth">{value}</p>
      <p className="text-xs uppercase tracking-wide text-paper/45 mt-1">{label}</p>
    </div>
  )
}
