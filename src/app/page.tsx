"use client"

import { useState, useEffect } from "react"
import FloatingActionButton from "./components/floating-action-button"
import HeroSection from "./components/hero-section"
import ShockSection from "./components/shock-section"
import OfferSection from "./components/offer-section"
import SocialProofSection from "./components/social-proof-section"
import FinalCtaSection from "./components/final-cta-section"
import ExitModal from "./components/exit-modal"
import LastChanceSection from "./components/last-chance-section"
import MessageModal from "./components/message-modal"
import Footer from "./components/footer"
import { Navbar } from "./components/navbar"

const App = () => {
  const [timeWasted, setTimeWasted] = useState(0)
  const [age] = useState(22)
  const [isExitModalOpen, setIsExitModalOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isModalOpen] = useState(false)

  // Set your Gumroad or Whop product URL here
  const GUMROAD_WHOP_URL = "https://your-product-link.com"

  // Real-time counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Timer-based exit pop-up
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isModalOpen) {
        setIsExitModalOpen(true)
      }
    }, 25000)

    return () => clearTimeout(timer)
  }, [isModalOpen])

  const handleBuyClick = () => {
    window.location.href = GUMROAD_WHOP_URL
  }

  const calculateLifeLost = (hoursDaily: number) => {
    const yearsLeft = 60 - age
    const daysPerYear = (hoursDaily * 365) / 24
    const totalDaysLost = daysPerYear * yearsLeft
    const yearsLost = Math.round((totalDaysLost / 365) * 10) / 10
    return { daysPerYear: Math.round(daysPerYear), yearsLost }
  }

  const stats = calculateLifeLost(3)

  return (
    <div className="min-h-screen bg-[#f0e9d9] text-[#1b201c] font-sans overflow-x-hidden">
      <Navbar />
      
      <FloatingActionButton onBuyClick={handleBuyClick} />

      <HeroSection timeWasted={timeWasted} age={age} stats={stats} onBuyClick={handleBuyClick} />

      <ShockSection />

      <OfferSection onBuyClick={handleBuyClick} />

      <SocialProofSection />

      <FinalCtaSection onBuyClick={handleBuyClick} />

      <LastChanceSection onBuyClick={handleBuyClick} />

      <ExitModal isOpen={isExitModalOpen} onClose={() => setIsExitModalOpen(false)} onBuyClick={handleBuyClick} />

      <MessageModal message={message} onClose={() => setMessage("")} />

      <Footer />
    </div>
  )
}

export default App
