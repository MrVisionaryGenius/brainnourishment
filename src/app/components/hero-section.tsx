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

const HeroSection: React.FC<HeroSectionProps> = ({
  age,
  stats,
  onBuyClick,
}) => {
  const { ref: heroRef, isVisible: heroVisible } =
    useScrollAnimation<HTMLElement>(0.1)

  const { ref: statsRef, isVisible: statsVisible } =
    useScrollAnimation<HTMLDivElement>(0.2)

  // Calculate money value of hours lost — conservative $40/hr freelance rate
  const annualHoursLost = stats.hoursPerWeek * 52
  const moneyLost = Math.round(annualHoursLost * 40).toLocaleString()

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen bg-[#0f1010] overflow-hidden transition-all duration-1000 ease-out ${heroVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
        }`}
    >
      {/* Subtle orange glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        {/* Top badge */}
        <div
          className={`text-center mb-8 transition-all duration-700 ease-out delay-100 ${heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            Free Assessment · The AI Operator Newsletter
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white transition-all duration-800 ease-out delay-200 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
              }`}
          >
            Most Builders Are
            <br />
            <span className="text-[#f97316]">
              Leaving Thousands
            </span>
            <br />
            on the Table.
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-300 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              }`}
          >
            Not because they lack skill — because they
            haven&apos;t plugged AI into their workflow yet.
            The builders pulling ahead right now
            aren&apos;t working harder. They&apos;re
            operating smarter.
          </p>

          {/* Personalised stat line */}
          <p
            className={`text-base text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-400 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              }`}
          >
            At your current pace, you&apos;re losing
            roughly{" "}
            <span className="text-[#f97316] font-semibold">
              {stats.hoursPerWeek} hours every week
            </span>{" "}
            to tasks AI could handle — that&apos;s{" "}
            <span className="text-[#f97316] font-semibold">
              {annualHoursLost} hours a year
            </span>
            , or up to{" "}
            <span className="text-[#f97316] font-semibold">
              ${moneyLost} in unrealised value
            </span>{" "}
            at a conservative freelance rate.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 transition-all duration-700 ease-out delay-500 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              }`}
          >
            <a
              href="/quiz"
              className="group bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold text-base py-4 px-8 rounded-full shadow-lg shadow-[#f97316]/20 transform transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span>Take the Free Assessment</span>

              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="text-center">
              <div className="text-xs text-gray-600 uppercase tracking-widest">
                2 minutes · No signup needed yet
              </div>

              <div className="text-sm font-medium text-gray-400">
                Free · Instant results
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-800 ease-out delay-600 ${statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            <div className="bg-[#1a1f1b] p-6 rounded-2xl border border-white/10 hover:border-[#f97316]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#f97316] mb-2">
                {stats.hoursPerWeek}h
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Lost weekly
              </div>

              <div className="text-xs text-gray-600 mt-1">
                to manual tasks
              </div>
            </div>

            <div className="bg-[#1a1f1b] p-6 rounded-2xl border border-white/10 hover:border-[#f97316]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                ${moneyLost}
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Annual value lost
              </div>

              <div className="text-xs text-gray-600 mt-1">
                at $40/hr equivalent
              </div>
            </div>

            <div className="bg-[#1a1f1b] p-6 rounded-2xl border border-white/10 hover:border-[#f97316]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#f97316] mb-2">
                2x
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Per week
              </div>

              <div className="text-xs text-gray-600 mt-1">
                Tue & Thu in your inbox
              </div>
            </div>

            <div className="bg-[#1a1f1b] p-6 rounded-2xl border border-white/10 hover:border-[#f97316]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                0
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Fluff. Ever.
              </div>

              <div className="text-xs text-gray-600 mt-1">
                Practical tools only
              </div>
            </div>
          </div>

          {/* Newsletter pitch strip */}
          <div
            className={`mt-10 p-6 bg-[#1a1f1b] rounded-2xl border border-white/10 text-left transition-all duration-700 ease-out delay-700 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center text-lg">
                ⚡
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-white mb-1">
                  What is The AI Operator?
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  A free Substack newsletter for builders
                  who want to earn more. Every Tuesday &
                  Thursday we send one practical AI tool,
                  prompt, or automation you can implement
                  the same day. No theory. No hype. Just
                  things that work — from a community of{" "}
                  <span className="text-[#f97316]">
                    16K+ subscribers
                  </span>
                  .
                </p>
              </div>

              <a
                href="/quiz"
                className="shrink-0 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                Take the Quiz →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection