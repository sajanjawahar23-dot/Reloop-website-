import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useApp } from '../context/AppContext.jsx'

const LINKS = [
  { to: '/plastic-crisis', label: 'The Crisis' },
  { to: '/our-solution', label: 'Our Solution' },
  { to: '/rebins', label: 'ReBins' },
  { to: '/impact', label: 'Impact' },
  { to: '/restore', label: 'ReStore' },
  { to: '/repartners', label: 'RePartners' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cartCount } = useApp()

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" onClick={() => setOpen(false)} aria-label="ReLoop home">
          <Logo size={36} animated={false} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'bg-ink text-paper' : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/restore/public"
            className="relative hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-ink/5 transition-colors"
            aria-label={`Cart, ${cartCount} items`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-worth text-ink text-[0.65rem] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-ink/5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-paper px-5 py-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'bg-ink text-paper' : 'text-ink/80 hover:bg-ink/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/restore/public"
            onClick={() => setOpen(false)}
            className="px-3 py-3 rounded-xl text-base font-medium text-ink/80 hover:bg-ink/5 flex items-center justify-between"
          >
            Cart
            <span className="font-mono text-sm text-loop-dark">{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
          </Link>
        </nav>
      )}
    </header>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" />
      )}
    </svg>
  )
}
