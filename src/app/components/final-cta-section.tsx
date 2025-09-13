"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FinalCtaSectionProps {
  onBuyClick: () => void
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBuyClick }) => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLButtonElement>(0.3)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#ca6e3f] via-[#ca6d41] to-[#ca6e3f] text-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight transform transition-all duration-1200 ease-out delay-300 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
          >
            Two Paths. One Choice.
          </h2>

          <p
            className={`text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1200 ease-out delay-500 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            One year from now, you&apos;ll either still be stuck in the scroll… or finally living the life you&apos;ve been putting off.
          </p>

          {/* Urgency indicator */}
          <div
            className={`max-w-2xl mx-auto mb-12 transform transition-all duration-1200 ease-out delay-700 ${sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
          >
            <div className="bg-[#1a1f1b]/30 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-white rounded-full mr-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Act Now</span>
              </div>
              <p className="text-lg text-white/90 font-medium mb-4">
                We&apos;re opening spots for our first 1500 members at the launch price of{" "}
                <span className="font-bold text-2xl">$14</span>{" "}
                <span className="text-white/60 line-through text-base">(normally $49)</span>
              </p>
              <div className="text-center">
                <div className="text-lg text-white/80 mb-2 font-semibold">6 already joined</div>
                <div className="w-full bg-[#1a1f1b]/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-white to-white/80 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "5%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mb-10 transform transition-all duration-1200 ease-out delay-900 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-2xl mx-auto">
              The choice is simple: Stay trapped, or break free today.
            </p>
          </div>

          <button
            ref={buttonRef}
            onClick={onBuyClick}
            className={`group relative bg-[#1a1f1b] hover:bg-[#1a1f1b]/90 text-[#f0e9d9] font-bold text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl shadow-[#ca6e3f]/40 hover:shadow-[#ca6e3f]/60 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:-translate-y-1 overflow-hidden ${buttonVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-90"
              }`}
          >
            <span className="relative z-10 flex items-center justify-center">
              Start My 14-Day Reset - $14
            </span>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ca6e3f]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <p
            className={`text-sm text-white/60 mt-6 transform transition-all duration-1200 ease-out delay-1100 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Join 6+ others who chose freedom
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection
