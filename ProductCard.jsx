import React from 'react'
import { Link } from 'react-router-dom'
import ProductGlyph from './ProductGlyph.jsx'

export default function ProductCard({ product }) {
  const discounted = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : null

  return (
    <Link
      to={`/restore/${product.catalog}/${product.id}`}
      className="group block rounded-3xl border border-ink/10 bg-white/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-square bg-gradient-to-br from-ink-700 to-ink p-8 flex items-center justify-center">
        <ProductGlyph type={product.image} className="w-2/3 h-2/3 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-ink">{product.name}</h3>
        <p className="text-sm text-ink/55 mt-1 leading-snug">{product.tagline}</p>
        <div className="mt-3 flex items-center gap-2">
          {discounted ? (
            <>
              <span className="font-mono font-semibold text-loop-dark">₹{discounted}</span>
              <span className="font-mono text-sm text-ink/40 line-through">₹{product.price}</span>
              <span className="text-xs font-mono text-worth-dark bg-worth/15 px-2 py-0.5 rounded-full">
                -{product.discount}%
              </span>
            </>
          ) : (
            <span className="font-mono font-semibold text-ink">₹{product.price}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
