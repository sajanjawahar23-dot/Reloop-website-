import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { CORPORATE_PRODUCTS } from '../data/corporateProducts.js'
import { useApp } from '../context/AppContext.jsx'

export default function CorporateDashboard() {
  const { institution, logoutInstitution } = useApp()

  if (!institution || institution.type !== 'corporate') {
    return <Navigate to="/restore/login" replace />
  }

  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="container-page py-14 sm:py-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="eyebrow text-loop-light">Corporate Dashboard</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">Welcome, {institution.name}</h1>
            <p className="mt-3 text-paper/60 max-w-lg">{institution.welcomeNote}</p>
          </div>
          <button onClick={logoutInstitution} className="self-start sm:self-auto text-sm font-medium text-paper/60 hover:text-paper underline-offset-4 hover:underline">
            Log out
          </button>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display font-bold">Your Catalog</h2>
          <Link to="/repartners" className="text-sm font-medium text-loop-dark hover:underline">Impact calculator →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORPORATE_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
