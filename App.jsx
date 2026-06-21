import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import PlasticCrisis from './pages/PlasticCrisis.jsx'
import OurSolution from './pages/OurSolution.jsx'
import ReBins from './pages/ReBins.jsx'
import ReBinDetail from './pages/ReBinDetail.jsx'
import ImpactDashboard from './pages/ImpactDashboard.jsx'
import ReStore from './pages/ReStore.jsx'
import PublicStore from './pages/PublicStore.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import InstitutionLogin from './pages/InstitutionLogin.jsx'
import SchoolDashboard from './pages/SchoolDashboard.jsx'
import CorporateDashboard from './pages/CorporateDashboard.jsx'
import Consultation from './pages/Consultation.jsx'
import ConsultationSuccess from './pages/ConsultationSuccess.jsx'
import RePartners from './pages/RePartners.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plastic-crisis" element={<PlasticCrisis />} />
          <Route path="/our-solution" element={<OurSolution />} />
          <Route path="/rebins" element={<ReBins />} />
          <Route path="/rebins/:locationId" element={<ReBinDetail />} />
          <Route path="/impact" element={<ImpactDashboard />} />

          <Route path="/restore" element={<ReStore />} />
          <Route path="/restore/public" element={<PublicStore />} />
          <Route path="/restore/login" element={<InstitutionLogin />} />
          <Route path="/restore/school" element={<SchoolDashboard />} />
          <Route path="/restore/corporate" element={<CorporateDashboard />} />
          <Route path="/restore/:catalog/:productId" element={<ProductDetail />} />

          <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultation/success" element={<ConsultationSuccess />} />

          <Route path="/repartners" element={<RePartners />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
