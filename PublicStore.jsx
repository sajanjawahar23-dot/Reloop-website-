import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { PUBLIC_PRODUCTS } from '../data/products.js'

export default function PublicStore() {
  return (
    <div>
      <PageHero eyebrow="ReStore · Public" title="Shop The Collection" subtitle="Everyday products made from collected, recycled material." />
      <section className="container-page pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PUBLIC_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/45">
          Shopping for a school or company?{' '}
          <Link to="/restore/login" className="text-loop-dark font-medium hover:underline">
            Log in to the Institution Store
          </Link>
        </p>
      </section>
    </div>
  )
}
