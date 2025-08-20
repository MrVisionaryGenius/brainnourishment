"use client"

import type React from "react"
import { AlertTriangle, X, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface LastChanceSectionProps {
  onBuyClick: () => void
}

const LastChanceSection: React.FC<LastChanceSectionProps> = ({ onBuyClick }) => {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>(0.1)

  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>(0.2)

  const { ref: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation<HTMLButtonElement>(0.3)

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 bg-black text-white text-center transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div
          className={`w-24 h-24 mx-auto mb-6 transition-all duration-700 ease-out delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-75"
          }`}
        >
          <AlertTriangle className="w-full h-full text-red-500 animate-pulse" />
        </div>
        <h2
          className={`text-4xl md:text-5xl font-black mb-6 leading-snug text-red-400 font-serif transition-all duration-700 ease-out delay-300 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          THIS IS YOUR LAST CHANCE
        </h2>
        <p
          className={`text-2xl text-gray-200 font-bold mb-8 transition-all duration-700 ease-out delay-400 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Walk away now, and one year from today, you&apos;ll be right back here.
        </p>
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-10 items-center mb-8 transition-all duration-800 ease-out delay-500 ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border-t-4 border-red-500">
            <h3 className="text-xl font-bold mb-4 font-serif">The Scroller&apos;s Path</h3>
            <ul className="text-left text-gray-400 space-y-3">
              <li className="flex items-start">
                <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>Still losing **3+ hours a day** to an endless feed.</p>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>
                  Feeling that familiar, empty sense of dread and{" "}
                  <strong>depression</strong>.
                </p>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>
                  Watching others achieve their dreams while you&apos;re standing still.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 font-serif">
              The Freedom Fighter&apos;s Path
            </h3>
            <ul className="text-left text-gray-400 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>Reclaimed **1,000+ hours** and invested them in your future.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>
                  Finally launched that business, learned that skill, or got that
                  promotion.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                <p>
                  Feeling fulfilled, energized, and in complete control of your life.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p
          className={`text-xl text-gray-300 font-semibold mb-8 transition-all duration-700 ease-out delay-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          You&apos;re not depressed. You&apos;re just endlessly scrolling.
        </p>
        <button
          ref={buttonRef}
          onClick={onBuyClick}
          className={`bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse font-serif ${
            buttonVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-90"
          }`}
        >
          I CHOOSE THE FREEDOM FIGHTER&apos;S PATH
        </button>
      </div>
    </section>
  )
}

export default LastChanceSection
