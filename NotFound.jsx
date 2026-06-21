import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <div className="container-page py-28 flex flex-col items-center text-center">
      <Logo size={64} animated={false} showWordmark={false} />
      <h1 className="mt-8 text-3xl sm:text-4xl font-bold">This page didn't make it into the loop.</h1>
      <p className="mt-3 text-ink/55 max-w-sm">The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="mt-8 btn-primary">Back To Home</Link>
    </div>
  )
}
