"use client"

import type React from "react"
import { ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface HeroSectionProps {
  age: number
  stats: {
    daysPerYear: number
    yearsLost: number
    percentageWasted: number
    daysAlreadyLost: number
    minutesPerDay: number
    hoursPerWeek: number
    booksPerYear: number
    workoutsPerYear: number
    yearsWithPhone: number
  }
  onBuyClick: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ age, stats, onBuyClick }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen bg-gradient-to-br from-[#f1eada] via-[#f0e9d9] to-[#f1eada] overflow-hidden transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/10 via-transparent to-[#ca6e3f]/5"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-12 relative z-10">
        {/* Time counter - more subtle */}
        <div
          className={`text-center mb-6 transition-all duration-700 ease-out delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[#ca6e3f]/20 text-[#ca6e3f] px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
            Event Will Start in 6 Days
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#1b201c] transition-all duration-800 ease-out delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            Reclaim Your Time.
            <br />
            <span className="text-[#ca6e3f]">Reclaim Your Life.</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-[#1b201c]/80 mb-4 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-700 ease-out delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            The average person loses <span className="text-[#ca6e3f] font-semibold">44 full days every year</span> to scrolling. Our 14-day reset helps you cut screen time in half-without quitting your phone.
          </p>

          <p
            className={`text-lg text-[#1b201c]/70 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            You&apos;re <span className="text-[#ca6e3f] font-semibold">{age} years old.</span> You spend <span className="text-[#ca6e3f] font-semibold">{stats.minutesPerDay} minutes daily</span> scrolling-that&apos;s <span className="text-[#ca6e3f] font-semibold">{stats.percentageWasted}% of your waking life</span> and {stats.daysAlreadyLost > 0 ? `you've already lost ${stats.daysAlreadyLost} days. ` : ''}enough time to read <span className="text-[#ca6e3f] font-semibold">{stats.booksPerYear} books</span> or complete <span className="text-[#ca6e3f] font-semibold">{stats.workoutsPerYear} workouts</span> every year.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-10 transition-all duration-700 ease-out delay-500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <button
              onClick={onBuyClick}
              className="group bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl shadow-[#ca6e3f]/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ca6e3f]/60 flex items-center space-x-3"
            >
              <span>Start the 14-Day Reset - Just $14</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>



            <div className="text-center">
              <div className="text-sm text-[#1b201c]/60">Normally $49</div>
              <div className="text-lg font-semibold text-[#ca6e3f]">Limited time launch offer</div>
            </div>
          </div>

          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-800 ease-out delay-600 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl font-bold text-[#ca6e3f] mb-2">{stats.hoursPerWeek}h</div>
              <div className="text-sm text-[#1b201c]/70 font-medium">Weekly scrolling time</div>
              <div className="text-xs text-[#1b201c]/50">you could reclaim</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl font-bold text-[#1b201c] mb-2">{stats.percentageWasted}%</div>
              <div className="text-sm text-[#1b201c]/70 font-medium">Of your waking life</div>
              <div className="text-xs text-[#1b201c]/50">spent scrolling</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl font-bold text-[#ca6e3f] mb-2">{stats.booksPerYear}</div>
              <div className="text-sm text-[#1b201c]/70 font-medium">Books you could read</div>
              <div className="text-xs text-[#1b201c]/50">per year instead</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl font-bold text-[#1b201c] mb-2">14</div>
              <div className="text-sm text-[#1b201c]/70 font-medium">Days to lasting</div>
              <div className="text-xs text-[#1b201c]/50">freedom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
