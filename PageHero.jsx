import React from 'react'

export default function PageHero({ eyebrow, title, subtitle, dark = false }) {
  return (
    <section className={dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}>
      <div className="container-page py-16 sm:py-24">
        {eyebrow && <p className={`eyebrow ${dark ? 'text-loop-light' : ''} animate-riseup`}>{eyebrow}</p>}
        <h1
          className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl animate-riseup"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 text-lg max-w-xl animate-riseup ${dark ? 'text-paper/70' : 'text-ink/60'}`}
            style={{ animationDelay: '160ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
