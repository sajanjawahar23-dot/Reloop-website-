import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

function generateReferenceId() {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `RL-${rand}`
}

export default function Consultation() {
  const location = useLocation()
  const navigate = useNavigate()
  const prefill = location.state || {}

  const [form, setForm] = useState({
    consultationType: 'Online Meeting',
    institutionName: prefill.institutionName || '',
    contactPerson: '',
    phone: '',
    email: '',
    people: '',
    product: prefill.productName || '',
    date: '',
    time: '',
  })

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const referenceId = generateReferenceId()
    navigate('/consultation/success', { state: { ...form, referenceId } })
  }

  return (
    <div>
      <PageHero
        eyebrow="Let's Talk"
        title="Book A Consultation"
        subtitle="For schools, colleges, and corporates exploring a ReLoop partnership or a bulk product order."
      />

      <section className="container-page pb-24">
        <form onSubmit={handleSubmit} className="card max-w-xl mx-auto">
          <fieldset>
            <legend className="text-sm font-medium text-ink/70 mb-2">Consultation Type</legend>
            <div className="flex gap-3">
              {['Online Meeting', 'Offline Visit'].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => update('consultationType', opt)}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    form.consultationType === opt
                      ? 'border-loop bg-loop/10 text-loop-dark'
                      : 'border-ink/15 text-ink/60 hover:border-ink/30'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <Field label="Institution Name" value={form.institutionName} onChange={(v) => update('institutionName', v)} required />
            <Field label="Contact Person" value={form.contactPerson} onChange={(v) => update('contactPerson', v)} required />
            <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => update('phone', v)} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />
            <Field label="Number Of People" type="number" min="1" value={form.people} onChange={(v) => update('people', v)} required />
            <Field label="Product Interested In" value={form.product} onChange={(v) => update('product', v)} placeholder="e.g. School Uniform" />
            <Field label="Preferred Date" type="date" value={form.date} onChange={(v) => update('date', v)} required />
            <Field label="Preferred Time" type="time" value={form.time} onChange={(v) => update('time', v)} required />
          </div>

          <button type="submit" className="btn-primary mt-8 w-full">Submit</button>
        </form>
      </section>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text', required, placeholder, min }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink/70">{label}</span>
      <input
        type={type}
        value={value}
        min={min}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-loop outline-none"
      />
    </label>
  )
}
