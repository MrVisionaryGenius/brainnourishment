"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SocialProofSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-[#1a1f1b] transition-all duration-700 ease-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-[#f0e9d9] transition-all duration-700 ease-out delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          Real People. Real Results.
        </h2>
        <p
          className={`text-lg text-[#f0e9d9]/70 mb-12 transition-all duration-700 ease-out delay-300 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          See how others reclaimed their time
        </p>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-800 ease-out delay-400 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex text-2xl">⭐⭐⭐⭐⭐</div>
            </div>
            <blockquote className="text-[#f1eada] mb-6 text-lg leading-relaxed italic">
              "I went from 6 hours a day on social media to under 2 hours. Now I actually have time to study and exercise again."
            </blockquote>
            <cite className="text-[#ca6e3f] font-semibold not-italic">
              – Mohsin, 22 (Software Engineer)
            </cite>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex text-2xl">⭐⭐⭐⭐⭐</div>
            </div>
            <blockquote className="text-[#f1eada] mb-6 text-lg leading-relaxed italic">
              "I cut my daily screen time by 70%. In the past month I read 3 books and finally finished a side project I'd been putting off for years."
            </blockquote>
            <cite className="text-[#ca6e3f] font-semibold not-italic">
              – Rehan, 28 (AI Engineer)
            </cite>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 hover:bg-white/10 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex text-2xl">⭐⭐⭐⭐⭐</div>
            </div>
            <blockquote className="text-[#f1eada] mb-6 text-lg leading-relaxed italic">
              "The daily reset helped me break habits I thought were permanent. I'm sleeping better, and my evenings finally feel free again."
            </blockquote>
            <cite className="text-[#ca6e3f] font-semibold not-italic">
              – Jennifer, 32 (Designer)
            </cite>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-700 ease-out delay-600 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          <div className="inline-flex items-center bg-[#ca6e3f]/20 backdrop-blur-sm border border-[#ca6e3f]/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-[#ca6e3f] rounded-full animate-pulse mr-3"></div>
            <span className="text-[#f1eada] text-sm font-medium">Join 1,200+ people who've already started their reset</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
