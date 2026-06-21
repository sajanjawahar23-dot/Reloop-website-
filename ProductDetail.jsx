import React, { useState } from 'react'
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom'
import ProductGlyph from '../components/ProductGlyph.jsx'
import { PUBLIC_PRODUCTS } from '../data/products.js'
import { SCHOOL_PRODUCTS } from '../data/schoolProducts.js'
import { CORPORATE_PRODUCTS } from '../data/corporateProducts.js'
import { useApp } from '../context/AppContext.jsx'

const CATALOGS = {
  public: PUBLIC_PRODUCTS,
  school: SCHOOL_PRODUCTS,
  corporate: CORPORATE_PRODUCTS,
}

export default function ProductDetail() {
  const { catalog, productId } = useParams()
  const navigate = useNavigate()
  const { addToCart, institution } = useApp()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const list = CATALOGS[catalog]
  const product = list?.find((p) => p.id === productId)

  if (!list || !product) return <Navigate to="/restore" replace />

  // Institution catalogs are gated behind login as the correct institution type.
  if (catalog !== 'public' && (!institution || institution.type !== catalog)) {
    return <Navigate to="/restore/login" replace />
  }

  const discounted = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : null

  function handleAddToCart() {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  function handleBookConsultation() {
    navigate('/consultation', {
      state: {
        institutionType: catalog,
        institutionName: institution?.name,
        productName: product.name,
      },
    })
  }

  const backTo = catalog === 'public' ? '/restore/public' : catalog === 'school' ? '/restore/school' : '/restore/corporate'

  return (
    <div className="container-page py-12 sm:py-16">
      <Link to={backTo} className="text-sm text-ink/50 hover:text-loop-dark">← Back to catalog</Link>

      <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square rounded-loop bg-gradient-to-br from-ink-700 to-ink p-12 flex items-center justify-center">
          <ProductGlyph type={product.image} className="w-2/3 h-2/3" />
        </div>

        <div>
          <p className="eyebrow">{catalog === 'public' ? 'ReStore Public' : catalog === 'school' ? institution?.name : institution?.name}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-3 text-ink/55">{product.tagline}</p>

          <div className="mt-6 flex items-baseline gap-3">
            {discounted ? (
              <>
                <span className="font-mono text-3xl font-bold text-loop-dark">₹{discounted}</span>
                <span className="font-mono text-lg text-ink/40 line-through">₹{product.price}</span>
                <span className="text-xs font-mono text-worth-dark bg-worth/15 px-2.5 py-1 rounded-full">
                  Partner Discount -{product.discount}%
                </span>
              </>
            ) : (
              <span className="font-mono text-3xl font-bold">₹{product.price}</span>
            )}
          </div>

          <section className="mt-8">
            <h2 className="font-display font-semibold text-lg">Product Details</h2>
            <p className="mt-2 text-ink/65 leading-relaxed">{product.description}</p>
          </section>

          <section className="mt-6">
            <h2 className="font-display font-semibold text-lg">Environmental Impact</h2>
            <p className="mt-2 text-ink/65 leading-relaxed">{product.impact}</p>
          </section>

          <section className="mt-6">
            <h2 className="font-display font-semibold text-lg">Specifications</h2>
            <dl className="mt-3 grid grid-cols-2 gap-y-3 text-sm max-w-md">
              <dt className="text-ink/45">Material</dt>
              <dd className="font-medium">{product.material}</dd>
              <dt className="text-ink/45">Quality</dt>
              <dd className="font-medium">{product.quality}</dd>
              <dt className="text-ink/45">Features</dt>
              <dd className="font-medium">{product.features.join(', ')}</dd>
            </dl>
          </section>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {catalog === 'public' && (
              <>
                <div className="flex items-center rounded-full border border-ink/15">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-11 w-11 flex items-center justify-center text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-mono">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="h-11 w-11 flex items-center justify-center text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button onClick={handleAddToCart} className="btn-primary">
                  {added ? 'Added ✓' : 'Add To Cart'}
                </button>
              </>
            )}

            {catalog !== 'public' && (
              <button onClick={handleBookConsultation} className="btn-primary">
                Book Consultation
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
