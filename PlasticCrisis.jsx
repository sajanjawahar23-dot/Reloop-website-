import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CrisisIllustration from '../components/CrisisIllustration.jsx'

const SECTIONS = [
  {
    variant: 'water',
    title: 'Water Pollution',
    body: 'Plastic bottles and packaging wash into drains, canals, and floodwater every monsoon, choking waterways that entire neighbourhoods depend on.',
  },
  {
    variant: 'wildlife',
    title: 'Harm to Wildlife',
    body: 'Marine and land animals mistake plastic fragments for food, or become entangled in discarded packaging — a slow, largely invisible toll.',
  },
  {
    variant: 'landfill',
    title: 'Environmental Damage',
    body: 'Most plastic waste ends up in landfill, where it can take centuries to break down, leaching into soil and groundwater along the way.',
  },
  {
    variant: 'river',
    title: 'Lost Opportunity',
    body: 'Every bottle sent to landfill is also a missed input — material that could have become a hoodie, a uniform, or a tote bag instead.',
  },
]

export default function PlasticCrisis() {
  return (
    <div>
      <PageHero
        eyebrow="The Reality"
        title="The Plastic Crisis"
        subtitle="Before we talk about solutions, it's worth sitting with the scale of the problem we're solving for."
      />

      <section className="container-page pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {SECTIONS.map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl overflow-hidden border border-ink/10 bg-white/50 animate-riseup"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="aspect-[2/1]">
                <CrisisIllustration variant={s.variant} />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="font-display font-semibold text-xl">{s.title}</h2>
                <p className="mt-2 text-ink/60 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-page py-20 text-center">
          <p className="text-2xl sm:text-4xl font-display font-bold max-w-2xl mx-auto leading-snug">
            Plastic is not the problem.
            <br />
            <span className="text-worth">What we do with it is.</span>
          </p>
          <Link to="/our-solution" className="mt-10 btn-primary">
            <span aria-hidden>♻️</span> Discover The Solution
          </Link>
        </div>
      </section>
    </div>
  )
}
