import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { verifyLogin } from '../data/institutions.js'
import { useApp } from '../context/AppContext.jsx'

export default function InstitutionLogin() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { loginInstitution } = useApp()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const match = verifyLogin(id.trim(), password.trim())
    if (!match) {
      setError('That ID and password combination doesn\'t match a demo account. Try one of the credentials below.')
      return
    }
    setError('')
    loginInstitution(match)
    navigate(match.type === 'school' ? '/restore/school' : '/restore/corporate')
  }

  function fillDemo(demoId, demoPass) {
    setId(demoId)
    setPassword(demoPass)
    setError('')
  }

  return (
    <div>
      <PageHero eyebrow="ReStore · Institutions" title="Institution Login" subtitle="Sign in to your school or corporate dashboard." />

      <section className="container-page pb-24 grid lg:grid-cols-[1fr,1fr] gap-10">
        <form onSubmit={handleSubmit} className="card max-w-md">
          <label className="block text-sm font-medium text-ink/70">Institution ID</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-loop outline-none"
            placeholder="e.g. VME2026"
            required
          />

          <label className="block text-sm font-medium text-ink/70 mt-5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-loop outline-none"
            placeholder="••••••••"
            required
          />

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <button type="submit" className="btn-primary mt-6 w-full">Log In</button>

          <p className="mt-5 text-xs text-ink/40">
            Don't have institution access?{' '}
            <Link to="/repartners" className="text-loop-dark hover:underline">Become a RePartner</Link>.
          </p>
        </form>

        <div className="space-y-4">
          <p className="eyebrow">Demo Accounts</p>
          <DemoCard
            label="Demo School Login"
            institution="Vidya Mandir Estancia"
            id="VME2026"
            password="demo123"
            onUse={() => fillDemo('VME2026', 'demo123')}
          />
          <DemoCard
            label="Demo Corporate Login"
            institution="TEA TIDES"
            id="TT2026"
            password="demo456"
            onUse={() => fillDemo('TT2026', 'demo456')}
          />
        </div>
      </section>
    </div>
  )
}

function DemoCard({ label, institution, id, password, onUse }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 font-display font-semibold">{institution}</p>
      <div className="mt-3 flex gap-4 font-mono text-sm text-ink/60">
        <span>ID: <span className="text-ink">{id}</span></span>
        <span>Pass: <span className="text-ink">{password}</span></span>
      </div>
      <button onClick={onUse} className="mt-4 text-sm font-medium text-loop-dark hover:underline">
        Use this account →
      </button>
    </div>
  )
}
