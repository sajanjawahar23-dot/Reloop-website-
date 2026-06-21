import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

const ACTIVITIES = [
  { title: 'Build Sustainability Networks', body: 'Connecting schools, colleges, and companies into one shared collection and impact system.' },
  { title: 'Enable Responsible Plastic Collection', body: 'ReBins placed on partner campuses make separating and collecting plastic effortless.' },
  { title: 'Partner With Institutions', body: 'Working directly with institutions to embed sustainability into everyday campus and office life.' },
  { title: 'Promote Circular Economy', body: 'Collected plastic is tracked back into products people actually use — not left to sit in storage.' },
  { title: 'Create Measurable Impact', body: 'Every kilogram collected, every bottle diverted, is logged and visible on our Impact Dashboard.' },
  { title: 'Support Sustainable Products', body: 'Funding and supplying a growing line of recycled-material apparel, bags, and footwear.' },
]

export default function OurSolution() {
  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="container-page py-20 sm:py-28 flex flex-col items-center text-center">
          <Logo size={88} animated />
          <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight">ReLoop</h1>
          <p className="mt-3 text-xl sm:text-2xl text-worth font-display font-semibold">Turning Waste Into Worth</p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">What We Actually Do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">A network, not a factory.</h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            ReLoop isn't a manufacturing operation — it's the connective layer between institutions that generate
            plastic waste and the systems that give it a second life.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {ACTIVITIES.map((a, i) => (
            <div
              key={a.title}
              className="card animate-riseup"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="h-10 w-10 rounded-full bg-loop/15 flex items-center justify-center font-mono text-loop-dark text-sm font-semibold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{a.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/rebins" className="btn-primary">
            <span aria-hidden>🚀</span> Explore ReLoop
          </Link>
        </div>
      </section>
    </div>
  )
}
