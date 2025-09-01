"use client"

import { Smartphone, TrendingDown, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ShockSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

  return (
    <section
      ref={sectionRef}
      className={`py-20 rounded-4xl bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] transition-all duration-700 ease-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-white transition-all duration-700 ease-out delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            Are You Addicted To Your Phone?
            <br className="hidden sm:block" />
            Take The 10-Second Test.
          </h2>

          <div
            className={`bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl mb-12 border border-white/20 transition-all duration-700 ease-out delay-300 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              If you&apos;re reading this and already feel the urge to check your notifications—you&apos;re not alone.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              It&apos;s not weakness. It&apos;s design. Tech companies spend billions making sure you can&apos;t look away.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              The result? <span className="font-semibold text-white">Every year, the average person loses 2 entire months of their life to scrolling.</span>
            </p>
            <div className="text-3xl md:text-4xl font-bold text-white bg-white/10 rounded-2xl py-6 px-8 border border-white/20">
              &quot;Your time is their business model.&quot;
            </div>
          </div>

          <div
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-6 transition-all duration-800 ease-out delay-400 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">4+ Hours Daily</h3>
              <p className="text-white/90 text-sm leading-relaxed">That&apos;s 60 full days every year, gone.</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">72% Admit It Hurts Their Life</h3>
              <p className="text-white/90 text-sm leading-relaxed">Work, health, relationships all take the hit.</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Target className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">94% Who Tried Our Reset</h3>
              <p className="text-white/90 text-sm leading-relaxed">Cut screen time in half. Freedom is possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShockSection