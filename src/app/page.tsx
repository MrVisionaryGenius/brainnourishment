"use client"

import { useState, useEffect } from "react"
import FloatingActionButton from "./components/floating-action-button"
import HeroSection from "./components/hero-section"
import ShockSection from "./components/shock-section"
import OfferSection from "./components/offer-section"
import FinalCtaSection from "./components/final-cta-section"
import LastChanceSection from "./components/last-chance-section"
import Footer from "./components/footer"
import { Navbar } from "./components/navbar"
import AgeInputModal from "./components/age-input"
import ExitModal from "./components/exit-modal"
import TestimonialCarousel from "./components/testimonial-section"
import SocialProofSection from "./components/social-proof-section"

const App = () => {
  const [age, setAge] = useState<number | null>(null)
  const [isExitModalOpen, setIsExitModalOpen] = useState(false)
  const [isModalOpen] = useState(false)

  const WHOP_URL = "https://whop.com/checkout/plan_W5EqYxoadkQdR?d2c=true"

  useEffect(() => {
    const storedAge = sessionStorage.getItem('userAge')
    if (storedAge) {
      setAge(parseInt(storedAge))
    }
  }, [])

  useEffect(() => {
    if (age === null) {
      const timer = setTimeout(() => { }, 2000)
      return () => clearTimeout(timer)
    }
  }, [age])

  useEffect(() => {
    if (age === null) return
    const timer = setTimeout(() => {
      if (!isModalOpen) setIsExitModalOpen(true)
    }, 25000)
    return () => clearTimeout(timer)
  }, [isModalOpen, age])

  const handleAgeSubmit = (userAge: number) => {
    setAge(userAge)
    sessionStorage.setItem('userAge', userAge.toString())
  }

  // ✅ Centralized Buy Click Handler with GA tracking
  const handleBuyClick = () => {
    // ✅ Send event to GA
    (window as any).gtag('event', 'click', {
      event_category: 'Purchase',
      event_label: 'WHOP Checkout',
      value: 1
    });

    setTimeout(() => {
      window.location.href = WHOP_URL;
    }, 100);
  };

  const calculateLifeImpact = (hoursDaily: number, userAge: number) => {
    const lifeExpectancy = 78
    const yearsLeft = Math.max(0, lifeExpectancy - userAge)

    const hoursPerYear = hoursDaily * 365
    const wakingHoursPerYear = 16 * 365
    const percentageWasted = Math.round((hoursPerYear / wakingHoursPerYear) * 100)

    const smartphoneStartAge = 16
    const yearsWithPhone = Math.max(0, userAge - smartphoneStartAge + 1)
    const daysAlreadyLost = Math.round((hoursDaily * 365 * yearsWithPhone) / 24)

    const minutesPerDay = hoursDaily * 60
    const hoursPerWeek = hoursDaily * 7

    const booksPerYear = Math.round((hoursDaily * 365) / 8)
    const workoutsPerYear = Math.round(hoursDaily * 365)

    const daysPerYear = Math.round(hoursPerYear / 24)
    const totalDaysLost = daysPerYear * yearsLeft
    const yearsLost = Math.round((totalDaysLost / 365) * 10) / 10

    return {
      daysPerYear,
      yearsLost: Math.max(0, yearsLost),
      percentageWasted,
      daysAlreadyLost,
      minutesPerDay: Math.round(minutesPerDay),
      hoursPerWeek: Math.round(hoursPerWeek * 10) / 10,
      booksPerYear,
      workoutsPerYear,
      yearsWithPhone
    }
  }

  const displayAge = age || 25
  const stats = calculateLifeImpact(3, displayAge)

  return (
    <div className="min-h-screen bg-[#f0e9d9] text-[#1b201c] font-sans overflow-x-hidden">
      <Navbar />

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

      <SocialProofSection />

      <TestimonialCarousel />

      <FinalCtaSection onBuyClick={handleBuyClick} />

      <LastChanceSection onBuyClick={handleBuyClick} />

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
