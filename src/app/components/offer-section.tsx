"use client"

import type React from "react"
import { Mail, BookOpen, Trophy, Brain, Gift, Users, Shield, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface OfferSectionProps {
  onBuyClick: () => void
}

const OfferSection: React.FC<OfferSectionProps> = ({ onBuyClick }) => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>(0.2)
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation<HTMLDivElement>(0.3)

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-[#f1eada] to-[#f0e9d9] transition-all duration-700 ease-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b201c]">
            Your 14-Day Reset to Take Back Control of Your Time
          </h2>
          <p className="text-xl text-[#1b201c]/80 max-w-4xl mx-auto leading-relaxed">
            Step-by-step guidance, proven strategies, and daily accountability designed to cut your screen time in half-without deleting every app or going off the grid.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div
            ref={featuresRef}
            className={`space-y-6 transition-all duration-800 ease-out delay-300 ${featuresVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
          >
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-[#ca6e3f] p-3 rounded-2xl shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b201c] mb-2">Daily Reset Emails</h3>
                  <p className="text-[#1b201c]/70 leading-relaxed">
                    Small, science-backed steps that retrain your brain in under 10 minutes a day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-[#ca6e3f] p-3 rounded-2xl shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b201c] mb-2">Progress Journal</h3>
                  <p className="text-[#1b201c]/70 leading-relaxed">
                    Track wins, urges, and breakthroughs so you see momentum building.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-[#ca6e3f] p-3 rounded-2xl shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b201c] mb-2">Community Leaderboard</h3>
                  <p className="text-[#1b201c]/70 leading-relaxed">
                    Stay motivated alongside thousands of others breaking free.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-[#ca6e3f] p-3 rounded-2xl shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b201c] mb-2">Expert Tools</h3>
                  <p className="text-[#1b201c]/70 leading-relaxed">
                    Templates and prompts developed with specialists to rebuild focus and energy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#ca6e3f]/10 to-[#ca6d41]/10 p-8 rounded-3xl border border-[#ca6e3f]/20">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-[#ca6e3f] p-3 rounded-2xl shrink-0">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1b201c] mb-2">Day 14 Bonus Protocol</h3>
                  <p className="text-[#1b201c]/70 leading-relaxed">
                    A simple system for turning your reclaimed time into real-world progress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div
            ref={pricingRef}
            className={`relative transition-all duration-800 ease-out delay-400 ${pricingVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-[#ca6e3f]/20 shadow-xl text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#ca6e3f] text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Early Adopter Pricing
                </div>
              </div>

              <div className="mt-6 mb-8">
                <div className="text-lg text-[#1b201c]/60 line-through mb-2">Normally $49</div>
                <div className="text-5xl md:text-6xl font-bold text-[#ca6e3f] mb-2">$14</div>
                <div className="text-sm text-[#1b201c]/70">
                  We&apos;re launching to our early adopters at a fraction of the price.
                </div>
              </div>

              <div className="bg-[#f1eada]/50 p-6 rounded-2xl mb-8 border border-[#ca6e3f]/10">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-[#ca6e3f] mr-2" />
                  <h3 className="text-lg font-semibold text-[#1b201c]">14-Day Reset</h3>
                </div>
                <p className="text-sm text-[#1b201c]/70 leading-relaxed">
                  Follow the step-by-step system for 14 days and experience how much more time,
                  focus, and energy you can reclaim.
                </p>
              </div>

              <button
                onClick={onBuyClick}
                className="group w-full bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-[#ca6e3f]/40 hover:shadow-[#ca6e3f]/60 transform transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6 flex items-center justify-center space-x-3"
              >
                <span>Start My 14-Day Reset for $14</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>


              <div className="flex items-center justify-center space-x-4 text-sm text-[#1b201c]/60">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>6 joined today</span>
                </div>
                <div className="w-2 h-2 bg-[#ca6e3f] rounded-full animate-pulse"></div>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection
