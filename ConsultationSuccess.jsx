import React from 'react'
import { useLocation, Navigate, Link } from 'react-router-dom'

export default function ConsultationSuccess() {
  const location = useLocation()
  const data = location.state

  if (!data) return <Navigate to="/consultation" replace />

  return (
    <div className="container-page py-20 sm:py-28 flex flex-col items-center text-center">
      <div className="h-16 w-16 rounded-full bg-loop/15 flex items-center justify-center text-3xl">✓</div>
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold">Consultation Requested</h1>
      <p className="mt-3 text-ink/60 max-w-md">
        Thanks, {data.contactPerson || 'there'} — we've logged your request and will reach out shortly to confirm your {data.consultationType.toLowerCase()}.
      </p>

      <div className="mt-8 card max-w-sm w-full text-left">
        <p className="eyebrow">Reference ID</p>
        <p className="mt-1 font-mono text-2xl font-bold text-loop-dark">{data.referenceId}</p>
        <div className="mt-5 space-y-2 text-sm text-ink/65">
          <Row label="Institution" value={data.institutionName} />
          <Row label="Type" value={data.consultationType} />
          <Row label="Product" value={data.product || '—'} />
          <Row label="Date" value={data.date} />
          <Row label="Time" value={data.time} />
          <Row label="Group Size" value={data.people} />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Link to="/" className="btn-secondary">Back To Home</Link>
        <Link to="/restore" className="btn-primary">Continue Browsing</Link>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink/40">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
