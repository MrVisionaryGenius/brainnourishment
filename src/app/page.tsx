"use client"

import { useState, useEffect } from "react"
import HeroSection from "./components/hero-section"

import { Navbar } from "./components/navbar"

const App = () => {
  const [age, setAge] = useState<number | null>(null)

  // const WHOP_URL = "https://whop.com/checkout/plan_W5EqYxoadkQdR?d2c=true"

  useEffect(() => {
    const storedAge = sessionStorage.getItem("userAge")
    if (storedAge) {
      setAge(parseInt(storedAge))
    }
  }, [])


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
      yearsWithPhone,
    }
  }

  const displayAge = age || 25
  const stats = calculateLifeImpact(3, displayAge)

  return (
    <div className="min-h-screen bg-[#0f1010] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* <AgeInputModal isOpen={age === null} onAgeSubmit={handleAgeSubmit} /> */}

      {/* <FloatingActionButton onBuyClick={handleBuyClick} /> */}

      <HeroSection
        stats={stats}
      />

      {/* <FourteenDayChallenge /> */}
      {/* <SocialProofSection /> */}
      {/* <ShockSection /> */}
      {/* <OfferSection onBuyClick={handleBuyClick} /> */}
      {/* <TestimonialCarousel /> */}
      {/* <FinalCtaSection onBuyClick={handleBuyClick} /> */}
      {/* <LastChanceSection onBuyClick={handleBuyClick} /> */}

      {/* {age !== null && (
        <ExitModal
          isOpen={isExitModalOpen}
          onClose={() => setIsExitModalOpen(false)}
          onBuyClick={handleBuyClick}
        />
      )} */}

      {/* <Footer /> */}
    </div>
  )
}

export default App