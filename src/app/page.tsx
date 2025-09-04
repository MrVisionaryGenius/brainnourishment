"use client"

import { useState, useEffect } from "react"
import FloatingActionButton from "./components/floating-action-button"
import HeroSection from "./components/hero-section"
import ShockSection from "./components/shock-section"
import OfferSection from "./components/offer-section"
// import SocialProofSection from "./components/social-proof-section"
import FinalCtaSection from "./components/final-cta-section"
import LastChanceSection from "./components/last-chance-section"
import Footer from "./components/footer"
import { Navbar } from "./components/navbar"
import AgeInputModal from "./components/age-input"
import ExitModal from "./components/exit-modal"
import TestimonialCarousel from "./components/testimonial-section"

const App = () => {
  const [age, setAge] = useState<number | null>(null)
  const [isExitModalOpen, setIsExitModalOpen] = useState(false)
  const [isModalOpen] = useState(false)

  // Set your Gumroad or Whop product URL here
  const GUMROAD_WHOP_URL = "https://your-product-link.com"

  // Load age from sessionStorage on component mount
  useEffect(() => {
    const storedAge = sessionStorage.getItem('userAge')
    if (storedAge) {
      setAge(parseInt(storedAge))
    }
  }, [])

  // Show age modal after 2 seconds if age not set
  useEffect(() => {
    if (age === null) {
      const timer = setTimeout(() => {
        // Age modal will show because age is null
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [age])

  // Timer-based exit pop-up (only after age is set)
  useEffect(() => {
    if (age === null) return
    
    const timer = setTimeout(() => {
      if (!isModalOpen) {
        setIsExitModalOpen(true)
      }
    }, 25000)

    return () => clearTimeout(timer)
  }, [isModalOpen, age])

  const handleAgeSubmit = (userAge: number) => {
    setAge(userAge)
    // Store age in sessionStorage so it persists during the session
    sessionStorage.setItem('userAge', userAge.toString())
  }

  const handleBuyClick = () => {
    window.location.href = GUMROAD_WHOP_URL
  }

  const calculateLifeImpact = (hoursDaily: number, userAge: number) => {
    const lifeExpectancy = 78
    const yearsLeft = Math.max(0, lifeExpectancy - userAge)
    
    // APPROACH 1: Percentage of waking life wasted (creates equal urgency)
    const hoursPerYear = hoursDaily * 365
    const wakingHoursPerYear = 16 * 365 // 16 hours awake daily
    const percentageWasted = Math.round((hoursPerYear / wakingHoursPerYear) * 100)
    
    // APPROACH 2: Time already lost (shock value)
    const smartphoneStartAge = 16
    const yearsWithPhone = Math.max(0, userAge - smartphoneStartAge + 1)
    const daysAlreadyLost = Math.round((hoursDaily * 365 * yearsWithPhone) / 24)
    
    // APPROACH 3: Daily impact (relatable)
    const minutesPerDay = hoursDaily * 60
    const hoursPerWeek = hoursDaily * 7
    
    // APPROACH 4: Alternative activities
    const booksPerYear = Math.round((hoursDaily * 365) / 8) // 8 hours per book
    const workoutsPerYear = Math.round(hoursDaily * 365) // 1 hour per workout
    
    // Original calculation for backwards compatibility
    const daysPerYear = Math.round(hoursPerYear / 24)
    const totalDaysLost = daysPerYear * yearsLeft
    const yearsLost = Math.round((totalDaysLost / 365) * 10) / 10
    
    return {
      // Original
      daysPerYear,
      yearsLost: Math.max(0, yearsLost),
      // New compelling metrics
      percentageWasted,
      daysAlreadyLost,
      minutesPerDay: Math.round(minutesPerDay),
      hoursPerWeek: Math.round(hoursPerWeek * 10) / 10,
      booksPerYear,
      workoutsPerYear,
      yearsWithPhone
    }
  }

  // Use default age of 25 for calculations if age not set yet
  const displayAge = age || 25
  const stats = calculateLifeImpact(3, displayAge)

  return (
    <div className="min-h-screen bg-[#f0e9d9] text-[#1b201c] font-sans overflow-x-hidden">
      <Navbar />

      {/* Age Input Modal - Shows when age is null */}
      <AgeInputModal 
        isOpen={age === null} 
        onAgeSubmit={handleAgeSubmit} 
      />

      <FloatingActionButton onBuyClick={handleBuyClick} />

      <HeroSection 
        age={displayAge} 
        stats={stats} 
        onBuyClick={handleBuyClick} 
      />

      <ShockSection />

      <OfferSection onBuyClick={handleBuyClick} />

      {/* <SocialProofSection />  */}

      <TestimonialCarousel />

      <FinalCtaSection onBuyClick={handleBuyClick} />

      <LastChanceSection onBuyClick={handleBuyClick} />

      {/* Exit Modal - Only shows after age is set */}
      {age !== null && (
        <ExitModal
          isOpen={isExitModalOpen} 
          onClose={() => setIsExitModalOpen(false)} 
          onBuyClick={handleBuyClick} 
        />
      )}

      <Footer />
    </div>
  )
}

export default App
