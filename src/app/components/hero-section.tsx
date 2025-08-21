"use client"

import type React from "react"
import { AlertTriangle, Timer, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface HeroSectionProps {
  timeWasted: number
  age: number
  stats: { daysPerYear: number; yearsLost: number }
  onBuyClick: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ timeWasted, age, stats, onBuyClick }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>(0.1)

  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen bg-gradient-to-br from-[#f1eada] via-[#f0e9d9] to-[#f1eada] overflow-hidden transition-all duration-700 ease-out ${
        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ca6e3f] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#ca6d41] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#ca6e3f] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div> */}

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Attention-grabbing counter */}
        <div
          className={`text-center mb-8 transition-all duration-700 ease-out delay-200 ${
            heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div className="inline-flex items-center bg-[#ca6e3f] text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
            <AlertTriangle className="w-6 h-6 mr-2" />
            <Timer className="w-5 h-5 mr-2" />
            Time Wasted Today: {Math.floor(timeWasted / 3600)}h {Math.floor((timeWasted % 3600) / 60)}m{" "}
            {timeWasted % 60}s
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 text-[#1b201c] font-serif transition-all duration-800 ease-out delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            YOUR PHONE IS
            <br />
            <span className="text-[#ca6e3f]">STEALING YOUR LIFE</span>
          </h1>

          <div
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#ca6e3f] mb-8 animate-bounce font-serif transition-all duration-700 ease-out delay-400 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            🚨 BRUTAL REALITY CHECK INCOMING 🚨
          </div>

          <p
            className={`text-xl sm:text-2xl text-[#1b201c] mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-500 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            You&apos;re <span className="text-[#ca6e3f] font-bold">{age} years old.</span> At 3 hours daily screen time,
            you&apos;ll lose <span className="text-[#ca6e3f] font-bold">{stats.yearsLost} YEARS</span> of your remaining
            life to endless scrolling.
            <br />
            <span className="text-[#1b201c] font-semibold">Your prime years are disappearing. Right. Now.</span>
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-700 ease-out delay-600 ${
              heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <button
              onClick={onBuyClick}
              className="bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-black text-xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 flex items-center space-x-3 font-serif"
            >
              <Zap className="w-6 h-6" />
              <span>BREAK THE ADDICTION ($14)</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-[#1b201c] opacity-70">⚡ LIMITED TIME</div>
              <div className="text-lg font-bold text-[#ca6e3f]">94% OFF NORMAL PRICE</div>
            </div>
          </div>

          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-800 ease-out delay-700 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-[#f1eada] backdrop-blur-md p-4 rounded-2xl border border-[#ca6e3f]/20">
              <div className="text-3xl font-bold text-[#ca6e3f] font-serif">{stats.daysPerYear}</div>
              <div className="text-sm text-[#1b201c]">Days Lost Per Year</div>
            </div>
            <div className="bg-[#f1eada] backdrop-blur-md p-4 rounded-2xl border border-[#ca6e3f]/20">
              <div className="text-3xl font-bold text-[#1b201c] font-serif">1,095</div>
              <div className="text-sm text-[#1b201c]">Hours Yearly</div>
            </div>
            <div className="bg-[#f1eada] backdrop-blur-md p-4 rounded-2xl border border-[#ca6e3f]/20">
              <div className="text-3xl font-bold text-[#1b201c] font-serif">72%</div>
              <div className="text-sm text-[#1b201c]">People Addicted</div>
            </div>
            <div className="bg-[#f1eada] backdrop-blur-md p-4 rounded-2xl border border-[#ca6e3f]/20">
              <div className="text-3xl font-bold text-[#ca6e3f] font-serif">14</div>
              <div className="text-sm text-[#1b201c]">Days to Freedom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
