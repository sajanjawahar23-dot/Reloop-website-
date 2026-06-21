import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={32} animated={false} />
          <p className="mt-4 text-sm text-paper/60 leading-relaxed max-w-xs">
            Turning Waste Into Worth — building a future where waste creates opportunity.
          </p>
        </div>

        <div>
          <p className="eyebrow text-loop-light">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><Link to="/plastic-crisis" className="hover:text-paper">The Plastic Crisis</Link></li>
            <li><Link to="/our-solution" className="hover:text-paper">Our Solution</Link></li>
            <li><Link to="/rebins" className="hover:text-paper">ReBins</Link></li>
            <li><Link to="/impact" className="hover:text-paper">Impact Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-loop-light">ReStore</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><Link to="/restore/public" className="hover:text-paper">Public Store</Link></li>
            <li><Link to="/restore/login" className="hover:text-paper">Institution Login</Link></li>
            <li><Link to="/repartners" className="hover:text-paper">Become A RePartner</Link></li>
            <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-loop-light">Reach Us</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li>hello@reloop.earth</li>
            <li>+91 98765 43210</li>
            <li>Chennai · Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5">
        <p className="container-page text-xs text-paper/40 font-mono">
          © {new Date().getFullYear()} ReLoop. All loops eventually close.
        </p>
      </div>
    </footer>
  )
}
