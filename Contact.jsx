import React, { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  return (
    <div>
      <PageHero eyebrow="Get In Touch" title="Contact ReLoop" subtitle="Whether it's a partnership or a quick question, we'd love to hear from you." />

      <section className="container-page pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <ContactForm
            title="Partnership Form"
            description="For schools, colleges, and companies interested in a ReBin or ReStore partnership."
            fields={['Organisation Name', 'Contact Person', 'Email', 'Phone Number', 'Message']}
          />
          <ContactForm
            title="General Inquiry"
            description="Questions about ReLoop, our products, or the impact data."
            fields={['Full Name', 'Email', 'Message']}
          />
        </div>

        <aside className="space-y-5">
          <InfoCard label="Email" value="hello@reloop.earth" />
          <InfoCard label="Phone" value="+91 98765 43210" />
          <InfoCard label="Location" value="Chennai · Bengaluru, India" />
        </aside>
      </section>
    </div>
  )
}

function ContactForm({ title, description, fields }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center text-center min-h-[280px]">
        <div className="h-12 w-12 rounded-full bg-loop/15 flex items-center justify-center text-2xl">✓</div>
        <p className="mt-4 font-display font-semibold">Message sent</p>
        <p className="mt-1 text-sm text-ink/55">We'll get back to you within 1–2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="font-display font-semibold text-lg">{title}</h2>
      <p className="mt-1 text-sm text-ink/55">{description}</p>
      <div className="mt-5 space-y-4">
        {fields.map((field) =>
          field === 'Message' ? (
            <label key={field} className="block">
              <span className="text-sm font-medium text-ink/70">{field}</span>
              <textarea
                required
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-loop outline-none resize-none"
              />
            </label>
          ) : (
            <label key={field} className="block">
              <span className="text-sm font-medium text-ink/70">{field}</span>
              <input
                required
                type={field === 'Email' ? 'email' : field === 'Phone Number' ? 'tel' : 'text'}
                className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-loop outline-none"
              />
            </label>
          )
        )}
      </div>
      <button type="submit" className="btn-primary mt-6 w-full">Send Message</button>
    </form>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 font-medium">{value}</p>
    </div>
  )
}
