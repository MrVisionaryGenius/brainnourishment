"use client"

import { Smartphone, TrendingUp, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ShockSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black mb-8 text-white font-serif transition-all duration-700 ease-out delay-200 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            THE ADDICTION TEST THAT WILL TERRIFY YOU
          </h2>

          <div
            className={`bg-[#1a1f1b]/80 p-8 rounded-3xl mb-8 backdrop-blur-md border border-white/20 transition-all duration-700 ease-out delay-300 ${
              sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <p className="text-2xl font-bold text-[#f0e9d9] mb-4 font-serif">
              Right now, as you read this, you probably have the urge to check your phone.
            </p>
            <p className="text-xl text-[#f1eada] mb-6">
              That&apos;s not normal. That&apos;s not human. That&apos;s addiction programming designed by
              billion-dollar tech companies to harvest your attention and sell it to the highest bidder.
            </p>
            <div className="text-6xl font-black text-white animate-pulse mb-4 font-serif">YOU ARE THE PRODUCT</div>
          </div>

          <div
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-800 ease-out delay-400 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-[#f1eada] p-6 rounded-2xl border border-[#ca6e3f]/30">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-[#ca6e3f]" />
              <h3 className="text-xl font-bold mb-2 font-serif text-[#1b201c]">Average Daily Usage</h3>
              <div className="text-3xl font-black text-[#ca6e3f] font-serif">4+ Hours</div>
            </div>
            <div className="bg-[#f1eada] p-6 rounded-2xl border border-[#ca6e3f]/30">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#ca6e3f]" />
              <h3 className="text-xl font-bold mb-2 font-serif text-[#1b201c]">Life Impact</h3>
              <div className="text-3xl font-black text-[#ca6e3f] font-serif">DEVASTATING</div>
            </div>
            <div className="bg-[#f1eada] p-6 rounded-2xl border border-[#ca6e3f]/30">
              <Target className="w-12 h-12 mx-auto mb-4 text-[#ca6e3f]" />
              <h3 className="text-xl font-bold mb-2 font-serif text-[#1b201c]">Success Rate</h3>
              <div className="text-3xl font-black text-[#1b201c] font-serif">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShockSection
