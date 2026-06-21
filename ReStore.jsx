import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function ReStore() {
  return (
    <div>
      <PageHero
        eyebrow="The Store"
        title="ReStore"
        subtitle="Recycled-material products for individuals and a dedicated catalog for partner institutions."
      />

      <section className="container-page pb-24 grid sm:grid-cols-2 gap-6">
        <Link
          to="/restore/public"
          className="group rounded-loop bg-ink text-paper p-10 flex flex-col justify-between min-h-[280px] transition-transform hover:-translate-y-1"
        >
          <div>
            <span className="text-4xl" aria-hidden>👤</span>
            <h2 className="mt-6 text-2xl font-display font-bold">ReStore Public</h2>
            <p className="mt-3 text-paper/60 leading-relaxed">
              Hoodies, tees, totes, and footwear made from recycled material — shop the full public collection.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-worth">
            Browse Products <Arrow />
          </span>
        </Link>

        <Link
          to="/restore/login"
          className="group rounded-loop bg-worth/15 border border-worth/30 p-10 flex flex-col justify-between min-h-[280px] transition-transform hover:-translate-y-1"
        >
          <div>
            <span className="text-4xl" aria-hidden>🏢</span>
            <h2 className="mt-6 text-2xl font-display font-bold text-ink">ReStore Institutions</h2>
            <p className="mt-3 text-ink/60 leading-relaxed">
              Uniforms, kits, and branded merchandise for partner schools and companies — log in to your dashboard.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-worth-dark">
            Institution Login <Arrow />
          </span>
        </Link>
      </section>
    </div>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
