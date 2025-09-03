"use client"

import type React from "react"
import { CheckCircle, X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface LastChanceSectionProps {
  onBuyClick: () => void
}

const LastChanceSection: React.FC<LastChanceSectionProps> = ({ onBuyClick }) => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLButtonElement>(0.3)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#1a1f1b] text-[#f0e9d9] text-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#f0e9d9] transform transition-all duration-1200 ease-out delay-300 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            This Is Your Moment To Take Back Control
          </h2>
          <p
            className={`text-lg md:text-xl text-[#f1eada]/90 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1200 ease-out delay-500 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            You don&apos;t have to keep losing hours every day to a device designed to keep you hooked. In just 14 days,
            you can reset your habits, reclaim your time, and feel in control again.
          </p>
        </div>

        {/* Urgency Box */}
        <div
          className={`max-w-2xl mx-auto mb-16 transform transition-all duration-1200 ease-out delay-700 ${
            sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="bg-gradient-to-r from-[#ca6e3f]/20 to-[#ca6e3f]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#ca6e3f]/30 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-[#ca6e3f] rounded-full animate-pulse mr-3"></div>
              <span className="text-[#ca6e3f] font-semibold text-sm uppercase tracking-wider">Limited Launch Offer</span>
            </div>
            <p className="text-lg text-[#f1eada] font-medium leading-relaxed">
              We&apos;re opening spots for our first 3,000 members at the launch price of{" "}
              <span className="text-[#ca6e3f] font-bold">$14</span>{" "}
              <span className="text-[#f1eada]/70 line-through">(normally $49)</span>. 
              Once they&apos;re gone, the offer closes.
            </p>
            <div className="mt-6 text-center">
              <span className="text-2xl font-bold text-[#ca6e3f]">49 already joined</span>
            </div>
          </div>
        </div>

        {/* Two Paths Comparison */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 mb-16 transform transition-all duration-1400 ease-out delay-900 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="group">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-400   mb-2">The Scroller&apos;s Path</h3>
                <p className="text-red-300/80 text-sm">One year from now...</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start transition-all duration-500 group-hover:translate-x-2 group-hover:scale-[1.02]">
                  <X className="text-red-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Wasting <strong>3+ hours a day</strong> on feeds</p>
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                  <X className="text-red-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Constant distraction, low energy, no progress</p>
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                  <X className="text-red-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Watching others move forward while you stay stuck</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-400   mb-2">The Freedom Path</h3>
                <p className="text-green-300/80 text-sm">One year from now...</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Gained back <strong>1,000+ hours</strong> in a year</p>
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Focused, confident, and in control of your time</p>
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-[#f1eada]/90">Building the career, health, and relationships you actually want</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`mb-12 transform transition-all duration-1200 ease-out delay-1100 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl text-[#f1eada] font-medium italic max-w-2xl mx-auto leading-relaxed">
            The scroll trap isn&apos;t your destiny - unless you choose it.
          </p>
        </div>

        <button
          ref={buttonRef}
          onClick={onBuyClick}
          className={`group relative bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] hover:from-[#ca6d41] hover:to-[#ca6e3f] text-white font-bold text-xl md:text-2xl py-6 px-10 rounded-full shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-1   overflow-hidden ${
            buttonVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-90"
          }`}
        >
          <span className="relative z-10 flex items-center justify-center">
            Choose Freedom Today - $14
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </section>
  )
}

export default LastChanceSection
