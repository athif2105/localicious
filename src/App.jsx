import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MobileFrame from './components/MobileFrame'
import PackageBuilder from './components/PackageBuilder'
import SearchPage from './pages/SearchPage'
import ViewPage from './pages/ViewPage'
import ReviewPage from './pages/ReviewPage'
import PaymentPage from './pages/PaymentPage'
import ConfirmationPage from './pages/ConfirmationPage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PackageBuilder />} />
        <Route path="/search/:packageType" element={<SearchPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <MobileFrame>
        <AnimatedRoutes />
      </MobileFrame>
    </Router>
  )
}

export default App
