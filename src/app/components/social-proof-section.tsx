"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SocialProofSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-[#1a1f1b] transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl font-bold mb-8 font-serif text-[#f0e9d9] transition-all duration-700 ease-out delay-200 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          ALREADY TESTED ON PEOPLE WHO ESCAPED
        </h2>
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-800 ease-out delay-300 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#f1eada]/10 p-6 rounded-2xl backdrop-blur-md border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-colors duration-300">
            <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-[#f1eada] mb-4">
              &quot;I got my life back. Lost 40lbs, started my business, found love. This challenge saved my
              future.&quot;
            </p>
            <div className="text-[#ca6e3f] font-bold mt-2 font-serif">- Mohsin, 22 (Software Engineer)</div>
          </div>
          <div className="bg-[#f1eada]/10 p-6 rounded-2xl backdrop-blur-md border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-colors duration-300">
            <div className="text-4xl mb-2">🔥</div>
            <p className="text-[#f1eada] mb-4">
              &quot;From 8 hours daily to 30 minutes. I read 12 books, learned coding, and got promoted. Worth every
              penny.&quot;
            </p>
            <div className="text-[#ca6e3f] font-bold mt-2 font-serif">- Rehan, 22 (AI Engineer)</div>
          </div>
          <div className="bg-[#f1eada]/10 p-6 rounded-2xl backdrop-blur-md border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-colors duration-300">
            <div className="text-4xl mb-2">💎</div>
            <p className="text-[#f1eada] mb-4">
              &quot;The bonus on Day 14 alone generated $50k in revenue for my side hustle. This is life-changing.&quot;
            </p>
            <div className="text-[#ca6e3f] font-bold mt-2 font-serif">- Jennifer L., 32</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
